---
order: 35
title: Real-time processing
layout: default
---
## Overview

Cumulocity allows developers and power users to run real-time IoT business logic inside Cumulocity based on high-level real-time processing languages. This section introduces the basic concepts of real-time processing and shows how you can develop your own functional business logic at Cumulocity.

More information about the interfaces for real-time processing can be found in [Real-time Statements](/guides/reference/real-time-statements) in the Reference Guide.

## What is real-time processing in Cumulocity?

Cumulocity has a real-time engine receiving all data coming from devices or other data sources for immediate processing by user-defined business operations. These user-defined operations can alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), trigger operations on devices or send email. This operation logic is implemented in *Cumulocity Event Language*, a high-level domain-specific language designed for IoT real-time data.

Cumulocity Event Language covers *statements* which are grouped into units of deployment, called *modules*. Modules can be deployed as part of a Cumulocity application. They can be edited with the Cumulocity administration application, see [Administration > Event processing](guides/administration#event-processing) in the User's Guide. 

For further information on using Cumulocity Event Language refer to [Using Cumulocity Event Language](#CEL) below and to the [CEL Analytics User Guide](/guides/event-language/introduction).

In addition to using the Cumulocity Event Language, Cumulocity provides the option to use the Apama real-time processing engine to define business operations for immediate processing of incoming data. The operation logic is implemented in Apama's Event Processing Language (EPL). 

Apama's Event Processing Language covers _statements_, which are organized into actions and monitors. These can be deployed one file at a time, where a file may contain multiple monitors and event definitions. Monitor files can be edited with Software AG Designer - an Eclipse-based development environment, and can be deployed as Cumulocity applications, see [Administration > Own applications](guides/administration#own-application) in the User's Guide. 

For further information on using Apama's Event Processing Language refer to [Using Apama Event Processing Language](#EPL) below and to the [Apama Analytics User Guide](/guides/apama/introduction).


![CEP architecture](/guides/concepts-guide/realtime.png)

The image above also illustrates another feature of Cumulocity: The possibility to send data exclusively for real-time processing. Data marked as "temporary" is not stored into Cumulocity's database but just handled by the real-time engine. This saves on storage and processing cost for example when tracking devices in real-time without requiring data to be stored.

## What are the benefits of using real-time processing?

Cumulocity's real-time processing feature has the following benefits:

-   React instantly to events from remote sensors.
-   Develop highly interactive IoT applications.
-   Run IoT use cases directly inside Cumulocity without software development and leave the hosting and management to Cumulocity.
-   Validate, normalize and derive data according to your own business rules across different device makes.
-   Trigger automated remote control actions based on events.
-   Use powerful, stream-oriented business logic, like time windows and joins.
-   Reduce the cost of online tracking devices by preselecting data necessary for long-term storage.

## <a name="CEL"></a>Using Cumulocity Event Language (CEL)

### Overview

Cumulocity Event Language has a syntax similar to SQL language. In SQL a statement is run against a logically fixed database, produces a result and completes the task. In Cumulocity, a statement is continuously running against a stream of input data (input events) and is continuously calculating its output (output events).

As an example, the following statement continuously retrieves new temperature sensor readings ranging above a particular temperature:

    select *
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Here, *MeasurementCreated* is a stream containing an event for each measurement that is created in the system. Selecting a subset of these events is done using *where*, similar to SQL. *getNumber()* is a function to read out a numeric value from an event. In this example, "e" is the "MeasurementCreated" event and the property is "c8y\_TemperatureMeasurement". "T.value", is a  value in degrees Celsius of a temperature sensor (see the [sensor library](/guides/reference/sensor-library)).

### How can I create derived data from CEL?

There are special streams provided by the system to perform predefined operations (such as data storage or sending data by email). One stream is CreateAlarm, which can be used to store an alarm in Cumulocity. Assume that an alarm should be generated immediately if the temperature of a sensor exceeds a defined value. This is done with the following statement:

    insert into CreateAlarm
    select
     e.measurement.time as time,
     e.measurement.source.value as source,
     "c8y_TemperatureAlert" as type,
     "Temperature too high" as text,
     "ACTIVE" as status,
     "CRITICAL" as severity
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Technically, this statement produces a new "AlarmCreated" event each time a temperature sensor reads more than 100 degrees Celsius and puts it into the "CreateAlarm" output stream. The property names in the selected clause have to match the properties of "AlarmCreated" (see the [Cumulocity Event Language reference](/guides/reference/cumulocity-event-language)).

### How can I control devices from CEL?

Remote control in CEL is just another type of derived data. Remote operations are targeted to a specific device. The following example illustrates switching a relay based on temperature readings:

    insert into CreateOperation
    select
    "PENDING" as status,
    <<heating ID>> as deviceId,
    {
    "c8y_Relay.relayState", "CLOSED"
    } as fragments
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

-   *heating ID* is a placeholder for the ID of the heating that should be triggered.
-   *fragments* defines the nested content of the operation a "c8y\Relay" that is "CLOSED".

The syntax of the *fragments* part is a list of pairs of property names and values surrounded by curly braces: {?key1?, ?value1?, ?key2?, ?value2?, ...}.

### How can I query data from CEL?

It may be required to query information from the Cumulocity database as part of the ongoing event processing. This is supported by a set of querying methods. Here is an example that shows how to summarize total sales for vending machines every hour. The sales report data created after a purchase is retrieved from the Cumulocity database.

    create window SalesReport.win:time_batch(1 hour)  
    (
        event com.cumulocity.model.event.Event,
        customer com.cumulocity.model.ManagedObject
    )

    insert into SalesReport
    select
        e.event as event,
        findOneManagedObjectParent(e.event.source.value) as customer
    from EventCreated as e

    insert into CreateMeasurement
    select
        "total_cust_trx",
        "customer_trx_counter",
        {
            "total", count(*),
            "customer_id", sales_report.customer.id.value
        }
    from SalesReport as sales_report
    group by sales_report.customer.id.value

Above we create a batch window first, which keeps data for one hour in order to calculate a total in this time frame. We store the prepared data into this window: Incoming events along with the parent managed object of the event source. This corresponds to the data model of our vending application: Sales reports are represented as events in Cumulocity with a vending machine as source. Customers are represented as parent managed objects of vending machines.

The collection of sales reports is calculated through "insert into CreateMeasurement..." using a SQL-like syntax and is stored as a measurement. The difference to SQL is: In SQL, you calculate a result over a fixed, current content of a database. In Cumulocity Event Language, statements run endlessly and the process time has to be limited by the time window.

## <a name="EPL"></a>Using Apama Event Processing Language (EPL)

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

## How is real-time processing implemented in Cumulocity?

There are two processing modes for API requests in Cumulocity: *persistent* and *temporary*. The "persistent" mode is the default: It will store data in the Cumulocity database as well as send the data to the real-time engine. After both is done, Cumulocity returns the result of the request.

The "temporary" mode will only send the data to the real-time engine and immediately return asynchronously. This mode is for efficiently monitoring particular data in realtime.

### CEL example

Assume that location updates from cars should be monitored every second while the car is driving, but only be stored once in a minute into the database for reporting purposes. This is done using the following statement:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 seconds

Another option is to output only every 60th update like this:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 events

### Apama EPL example

Assume that location updates from cars should be monitored every second while the car is driving, but only be stored once in a minute into the database for reporting purposes. This is done using the following statement:

	monitor SendEveryMinute {
		dictionary<string, Event> latestUpdates;
		action onload() {
			on all Event() as e {
				if e.params.hasKey("c8y_LocationUpdate") {
					latestUpdates[e.source] := e;
				}
			}
			on all wait(60.0) {
				Event e;
				for e in latestUpdates.values() {
					send e to Event.CHANNEL;
				}
				latestUpdates.clear();
			}
		}
	}

Another option is to output only every 60th update like this:

	monitor SendEverySixtyEvents {
		event UpdateAndCount {
			Event latest;
			integer count;
		}
		dictionary<string, UpdateAndCount > latestUpdates;
		action onload() {
			on all Event() as e {
				if e.params.hasKey("c8y_LocationUpdate") {
					UpdateAndCount updateCount := latestUpdates.getOrAddDefault(e.source);
					updateCount.latest := e;
					integer count := updateCount.count + 1;
					if count = 60 {
						send e to Event.CHANNEL;
						latestUpdates.remove(e.source);
					} else {
						updateCount.count := count;
					}
				}
			}
		}
	}
## Summary

Cumulocity allows developers and power users to run real-time IoT business processes. The user can choose if data is stored on a permanent basis or is temporarily used to generate reports or analytics and then is deleted automatically. The processes and results update continuously.