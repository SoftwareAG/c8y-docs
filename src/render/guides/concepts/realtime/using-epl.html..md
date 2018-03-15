---
order: 30
title: Using Apama Event Processing Language (EPL)
layout: redirect
---

### Overview

Apama Event Processing Language has a syntax similar to Java. In addition to simple flow control statements such as `if`, `while`, `for`, users can write listeners with the `on` keyword to react to events.

Apama EPL is documented in the [Apama documentation](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/) - see [Developing Apama Applications in EPL](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fco-DevApaAppInEpl_how_this_book_is_organized.html%2523).

As an example, the following statement listens for new temperature sensor readings ranging above a particular temperature:

	on all Measurement(type = "c8y_TemperatureMeasurement") as e {
		if e.measurements.getOrDefault("c8y_TemperatureMeasurement").getOrDefault("T").value > 100.0 {
			send Alarm("", "c8y_TemperatureAlert", e.source, e.time, "Temperature too high",
				"CRITICAL", "", 1, new dictionary<string,any>) to Event.CHANNEL;
		}
	

Here, _Measurement_ is a pre-defined event containing the measurements. In this example, "e" is the "Measurement" event, the listener is filtering for measurements which are "c8y&#95;TemperatureMeasurement" and the property is "c8y_TemperatureMeasurement.T". "value" is in degrees Celsius of a temperature sensor (see the [sensor library](https://www.cumulocity.com/guides/reference/sensor-library)).

Listeners such as the above should be placed in a monitor in the `onload` statement, and the file will need to contain `using` statements for the types used by the listener - for most of the Cumulocity events, these are in the package *com.apama.cumulocity*. The full list is provided below - for the sake of brevity, we will omit these from further examples:

	using com.apama.cumulocity.ManagedObject;
	using com.apama.cumulocity.Operation;
	using com.apama.cumulocity.Event;
	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.Error;
	using com.apama.cumulocity.FindAlarm;
	using com.apama.cumulocity.FindAlarmResponse;
	using com.apama.cumulocity.FindAlarmResponseAck;
	using com.apama.cumulocity.FindManagedObject;
	using com.apama.cumulocity.FindManagedObjectResponse;
	using com.apama.cumulocity.FindManagedObjectResponseAck;
	using com.apama.cumulocity.Measurement;
	using com.apama.cumulocity.MeasurementValue;
	using com.apama.cumulocity.RequestAllDevices;
	using com.apama.cumulocity.RequestAllDevicesComplete;
	using com.apama.cumulocity.SendEmail;
	using com.apama.cumulocity.SendSMS;
	using com.apama.cumulocity.SendSpeech;
	using com.apama.cumulocity.SMSResourceReference;
	using com.apama.cumulocity.SMSResponse;
	using com.apama.util.AnyExtractor;
	using com.apama.correlator.timeformat.TimeFormat;
	using com.softwareag.connectivity.httpclient.HttpOptions;
	using com.softwareag.connectivity.httpclient.Request;
	using com.softwareag.connectivity.httpclient.RequestType;
	using com.softwareag.connectivity.httpclient.Response;
	using com.apama.cumulocity.Util;
	
	monitor ListenForHighTemperatures {
		action onload() {
			on all Measurement(measurementType = "c8y_TemperatureMeasurement") as e {
				if e.measurements.getOr("c8y_TemperatureMeasurement.T").value > 100.0d {
					// handle the measurement
			}
		}
	}

### How can I create derived data from EPL?

<span class="inline-comment-marker" data-ref="271e4969-4bf7-4f28-8ef9-b17696ff4b65">To create new _Alarm_ or _Operation_ objects</span>, create an instance of the relevant event type and use the `send` statement to send it to the relevant channel (defined with a constant on the event type). Assume that an alarm should be generated immediately if the temperature of a sensor exceeds a defined value. This is done with the following statement:

	on all Measurement(measurementType = "c8y_TemperatureMeasurement") as e {
		if e.measurements.getOr("c8y_TemperatureMeasurement.T").value > 100.0d {
			send Event("c8y_TemperatureAlert", e.assetId, e.timestamp, "Temperature too high", {"severity":<any> "CRITICAL"}) to Event.CHANNEL;
		}
	}

Technically, this statement produces a new "Event" event each time a temperature sensor reads more than 100 degrees Celsius and sends it to Cumulocity.

### How can I control devices from EPL?

Remote control with EPL is done by sending DeviceOperation events. Remote operations are targeted to a specific device. The following example illustrates switching a relay based on temperature readings:

	send DeviceOperation(<<heating ID>>,  {"c8y_Relay":<any> {"relayState":"CLOSED"} }, {"status":<any>"PENDING"} ) to DeviceOperation.CHANNEL;

*   _heating ID_ is a placeholder for the ID of the heating that should be triggered.
*   The _operations_ field (the 2nd field) defines the nested content of the operation a "c8y_Relay" that has <span class="inline-comment-marker" data-ref="69834a1f-5f30-455b-b264-a060b2bfc1e3">relayState set to "CLOSED"</span>; note the top-level fields must be dictionary<string, any>, thus the use of the <any> cast operations.

### How can I query data from EPL?

It may be required to query information from the Cumulocity database as part of the ongoing event processing. This is supported by sending events and using listeners to wait for responses. Here is an example that shows how to summarize total sales for vending machines every hour. The sales report data created after a purchase is retrieved from the Cumulocity database.

	using com.apama.aggregates.count; 
	
	monitor SalesReport {
		event SalesReport {
			Event e;
			ManagedObject customer;
		}
		event SalesOutput {
			integer count;
			string customerId;
		}
	
	action onload() {
		on all Event() as e {
			integer reqId := integer.getUnique();
			monitor.subscribe(FindManagedObjectResponse.CHANNEL);
			send FindManagedObject(reqId, "", {"childAssetId":e.source}) to FindManagedObject.CHANNEL;

			on FindManagedObjectResponseAck(reqId = reqId) {
				monitor.unsubscribe(FindManagedObjectResponse.CHANNEL);
			}
			on all FindManagedObjectResponse(reqId = reqId) as d and not FindManagedObjectResponseAck(reqId = reqId) {
				route SalesReport(e, d.managedObject);
			}
		}

		from sr in all SalesReport() within 3600.0  every 3600.0
		    group by sr.customer.id
		    select SalesOutput(count(), sr.customer.id) as sales {
			send Measurement("", "total_cust_trx", "customer_trx_counterId",
				currentTime, {"total_cust_trx":{
					"total":MeasurementValue(sales.count.toFloat(), "COUNT", new dictionary<string,any>)}
				}, {"customer_id":<any> sales.customerId}) to Measurement.CREATE_CHANNEL;
		}
	}	
	}
	
Above we create event definitions. These hold the SalesReport (the _Event_ and _ManagedObject_ that identifies a sale) and the information we want to derive from a set of sales: the count and customerId. We listen for *Event objects*, and send a _FindManagedObject_ request to look up the _ManagedObject_ that the event came from. These SalesReport objects are sent, via the route statement, into a stream query. The stream query fires every hour (3,600 seconds) and selects an aggregate of the sales data per customer, and sends a new Measurement representing the sales for that vending machine.

