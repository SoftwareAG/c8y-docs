---
weight: 30
title: Using the Apama Event Processing Language (EPL)
layout: redirect
---

<a name="using-epl"></a>
### Overview

The Apama Event Processing Language has a syntax similar to Java. In addition to simple flow control statements such as `if`, `while`, `for`, users can write listeners with the `on` keyword to react to events.

Apama EPL is documented in the [Apama documentation](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/).

As an example, the following statement listens for new temperature sensor readings greater than a particular temperature:

	on all Measurement(type="c8y_TemperatureMeasurement") as m {
		if m.measurements.getOrDefault("c8y_TemperatureMeasurement").getOrDefault("T").value > 100.0 {
			Alarm alarm    := new Alarm;
			alarm.type     := "c8y_TemperatureAlert";
			alarm.source   := m.source;
			alarm.time     := currentTime;
			alarm.text     := "Temperature too high";
			alarm.status   := "ACTIVE";
			alarm.severity := "CRITICAL";
			send alarm to Alarm.CHANNEL;
		}
	}

Here, _Measurement_ is a pre-defined event containing the measurements. In this example, "m" is the "Measurement" event, the listener is filtering for measurements which are "c8y_TemperatureMeasurement" and the property is "c8y_TemperatureMeasurement.T.value" is in degrees Celsius of a temperature sensor (see the [sensor library](https://www.cumulocity.com/guides/reference/sensor-library)).

Listeners such as the above should be placed in a monitor in the `onload` statement, and the file will need to contain `using` statements for the types used by the listener - for most of the Cumulocity events, these are in the package *com.apama.cumulocity*. The full list is provided below - for the sake of brevity, we will omit these from further examples:

	using com.apama.cumulocity.ManagedObject;
	using com.apama.cumulocity.Operation;
	using com.apama.cumulocity.Event;
	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.Error;
	using com.apama.cumulocity.Measurement;
	using com.apama.cumulocity.MeasurementValue;
	using com.apama.cumulocity.FindAlarm;
	using com.apama.cumulocity.FindAlarmResponse;
	using com.apama.cumulocity.FindAlarmResponseAck;
	using com.apama.cumulocity.FindManagedObject;
	using com.apama.cumulocity.FindManagedObjectResponse;
	using com.apama.cumulocity.FindManagedObjectResponseAck;
	using com.apama.cumulocity.FindMeasurement;
	using com.apama.cumulocity.FindMeasurementResponse;
	using com.apama.cumulocity.FindMeasurementResponseAck;
	using com.apama.cumulocity.FindOperation;
	using com.apama.cumulocity.FindOperationResponse;
	using com.apama.cumulocity.FindOperationResponseAck;
	using com.apama.cumulocity.FindEvent;
	using com.apama.cumulocity.FindEventResponse;
	using com.apama.cumulocity.FindEventResponseAck;
	using com.apama.cumulocity.SendEmail;
	using com.apama.cumulocity.SendSMS;
	using com.apama.cumulocity.Util;
	using com.apama.util.AnyExtractor;
	using com.apama.correlator.timeformat.TimeFormat;
	using com.softwareag.connectivity.httpclient.HttpOptions;
	using com.softwareag.connectivity.httpclient.Request;
	using com.softwareag.connectivity.httpclient.RequestType;
	using com.softwareag.connectivity.httpclient.Response;

	monitor ListenForHighTemperatures {
		action onload() {
			on all Measurement(type="c8y_TemperatureMeasurement") as e {
				if e.measurements.getOrDefault("c8y_TemperatureMeasurement").getOrDefault("T").value > 100.0 {
					// handle the measurement
				}
			}
		}
	}

### How can I create derived data from EPL?

To create a new _Alarm_ or _Operation_, create an instance of the relevant event type and use the `send` statement to send it to the relevant channel (defined with a constant on the event type). Assume that an alarm should be generated immediately if the temperature of a sensor exceeds a defined value. This is done with the following statement:

	on all Measurement(type="c8y_TemperatureMeasurement") as m {
		if m.measurements.getOrDefault("c8y_TemperatureMeasurement").getOrDefault("T").value > 100.0 {
			send Alarm("","c8y_TemperatureAlert",m.source,currentTime,"Temperature too high","ACTIVE","CRITICAL",1,new dictionary<string,any>) to Alarm.CHANNEL;
		}
	}

Technically, this statement produces a new "Alarm" event each time a temperature sensor reads more than 100 degrees Celsius and sends it to Cumulocity.

### How can I control devices from EPL?

Remote control with EPL is done by sending an Operation event. Remote operations are targeted to a specific device. The following example illustrates switching a relay based on temperature readings:

	on all Measurement(type="c8y_TemperatureMeasurement") as m {
		if m.measurements.getOrDefault("c8y_TemperatureMeasurement").getOrDefault("T").value > 100.0 {
			send Operation("",m.source,"PENDING",{"c8y_Relay":<any>{"relayState":"CLOSED"}}) to Operation.CHANNEL;
		}
	}

		
* *m.source* is a placeholder for the ID of the heating that should be triggered.

* The *params* field (the last field) defines the nested content of the operation. In this example we are creating a "c8y_Relay" operation and setting the relayState to "CLOSED"; note the top-level fields must be dictionary&lt;string, any&gt;, thus the use of the `<any>` cast operation.

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

			monitor.subscribe(Measurement.CHANNEL);

			on all Event() as e {
				monitor.subscribe(FindManagedObjectResponse.CHANNEL);
				integer reqId := integer.getUnique();
				on all FindManagedObjectResponse(reqId=reqId) as mor and not FindManagedObjectResponseAck(reqId=reqId) {
					route SalesReport(e, mor.managedObject);
				}
				on FindManagedObjectResponseAck(reqId=reqId) {
					monitor.unsubscribe(FindManagedObjectResponse.CHANNEL);
				}
				send FindManagedObject(reqId,"",{"childAssetId":e.source}) to FindManagedObject.CHANNEL;
			}

			from sr in all SalesReport() within 3600.0 every 3600.0
				group by sr.customer.id
				select SalesOutput(count(), sr.customer.id) as sales {
				send Measurement("", "total_cust_trx", "customer_trx_counterId", currentTime,
					{
						"total_cust_trx":{
							"total":MeasurementValue(sales.count.toFloat(), "COUNT", new dictionary<string,any>)
						}
					}, {"customer_id":<any> sales.customerId}) to Measurement.CREATE_CHANNEL;
			}
		}
	}

Above we create event definitions. These hold the SalesReport (the _Event_ and _ManagedObject_ that identifies a sale) and the information we want to derive from a set of sales: the count and customerId. We listen for _Event_ objects, and send a _FindManagedObject_ request to look up the _ManagedObject_ that the event came from. These SalesReport objects are sent, via the route statement, into a stream query. The stream query fires every hour (3,600 seconds) and selects an aggregate of the sales data per customer, and sends a new Measurement representing the sales for that vending machine.
