---
order: 35
title: Real-time processing
layout: default
---
## Overview

Cumulocity allows developers and power users to run real-time IoT business logic inside Cumulocity based on a high-level real-time processing language. This section introduces the basic concepts of real-time processing and shows how you can develop your own functional business logic at Cumulocity.

More information about the interfaces for real-time processing can be found in the Reference Guide, Sections ["Cumulocity Event Language"](/guides/reference/cumulocity-event-language) and ["Real-time Statements"](/guides/reference/real-time-statements).

## What is real-time processing in Cumulocity?

Cumulocity has a real-time engine receiving all data coming from devices or other data sources for immediate processing user-defined business operations. These user-defined operations can alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), trigger operations on devices or send email. This operation logic is implemented in *Cumulocity Event Language*, a high-level domain-specific language designed for IoT real-time data.

![CEP architecture](/guides/concepts-guide/realtime.png)

Cumulocity Event Language covers *statements*, as illustrated in the following examples. They are grouped into units of deployment, called *modules*. Modules can be deployed as part of a Cumulocity application. They can be edited with the Cumulocity administration application. Through the REST API, application developers can develop user-friendly domain-specific business operation wizards for their specific use cases. For example, a home automation developer can create a wizard providing thresholds for temperature sensors in order to control heating devices.

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

## What is the Cumulocity Event Language (CEL)?

Cumulocity Event Language has a syntax similar to SQL language. In SQL a statement is run against a logically fixed database, produces a result and completes the task. In Cumulocity, a statement is continuously running against a stream of input data (input events) and is continuously calculating its output (output events).

As an example, the following statement continuously retrieves new temperature sensor readings ranging above a particular temperature:

    select *
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Here, *MeasurementCreated* is a stream containing an event for each measurement that is created in the system. Selecting a subset of these events is done using *where*, similar to SQL. *getNumber()* is a function to read out a numeric value from an event. In this example, "e" is the "MeasurementCreated" event and the property is "c8y\_TemperatureMeasurement". "T.value", is a  value in degrees Celsius of a temperature sensor (see the [sensor library](/guides/reference/sensor-library)).

## How can I create derived data from CEL?

There are special streams provided by the system to perform predefined operations (such as data storage or sending data by email). One stream is * CreateAlarm *, which can be used to store an alarm in Cumulocity. Assume that an alarm should be generated immediately if the temperature of a sensor exceeds a defined value. This is done with the following statement:

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

## How can I control devices from CEL?

Remote control in Cumulocity is just another type of derived data. Remote operations are targeted to a specific device. The following example illustrates switching a relay based on temperature readings:

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

## How can I query data from CEL?

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

## How is real-time processing implemented in Cumulocity?

There are two processing modes for API requests in Cumulocity: *persistent* and *temporary*. The "persistent" mode is the default: It will store data in the Cumulocity database as well as send the data to the real-time engine. After both is done, Cumulocity returns the result of the request.

The "temporary" mode will only send the data to the real-time engine and immediately return asynchronously. This mode is for efficiently monitoring particular data in real-time.

As an example, assume that location updates from cars should be monitored every second while the car is driving, but only be stored once in a minute into the database for reporting purposes. This is done using the following statement:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 seconds

Another option is to output only every 60th update like this:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 events
    
## Summary

Cumulocity allows developers and power users to run real-time IoT business processes. The user can choose if data is stored on a permanent basis or is temporarily used to generate reports or analytics and then is deleted automatically. The processes and results update continuously.