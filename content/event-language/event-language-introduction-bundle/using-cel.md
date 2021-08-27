---
weight: 15
title: Using Cumulocity Event Language (CEL)
layout: redirect
---

{{< c8y-event-language >}} has a syntax similar to SQL language. In SQL a statement is run against a logically fixed database, produces a result and completes the task. In {{< product-c8y-iot >}}, a statement is continuously running against a stream of input data (input events) and is continuously calculating its output (output events).

As an example, the following statement continuously retrieves new temperature sensor readings ranging above a particular temperature:

    select *
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Here, *MeasurementCreated* is a stream containing an event for each measurement that is created in the system. Selecting a subset of these events is done using *where*, similar to SQL. *getNumber()* is a function to read out a numeric value from an event. In this example, "e" is the "MeasurementCreated" event and the property is "c8y\_TemperatureMeasurement". "T.value", is a  value in degrees Celsius of a temperature sensor (see the [sensor library](https://{{< domain-c8y >}}/api/#section/Sensor-library)).

### How can I create derived data from CEL?

There are special streams provided by the system to perform predefined operations (such as data storage or sending data by email). One stream is CreateAlarm, which can be used to store an alarm in {{< product-c8y-iot >}}. Assume that an alarm should be generated immediately if the temperature of a sensor exceeds a defined value. This is done with the following statement:

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

Technically, this statement produces a new "AlarmCreated" event each time a temperature sensor reads more than 100 degrees Celsius and puts it into the "CreateAlarm" output stream. The property names in the selected clause have to match the properties of "AlarmCreated" (see the [{{< c8y-event-language >}} reference](/real-time-statements)).

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

It may be required to query information from the {{< product-c8y-iot >}} database as part of the ongoing event processing. This is supported by a set of querying methods. Here is an example that shows how to summarize total sales for vending machines every hour. The sales report data created after a purchase is retrieved from the {{< product-c8y-iot >}} database.

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

Above we create a batch window first, which keeps data for one hour in order to calculate a total in this time frame. We store the prepared data into this window: Incoming events along with the parent managed object of the event source. This corresponds to the data model of our vending application: Sales reports are represented as events in {{< product-c8y-iot >}} with a vending machine as source. Customers are represented as parent managed objects of vending machines.

The collection of sales reports is calculated through "insert into CreateMeasurement..." using a SQL-like syntax and is stored as a measurement. The difference to SQL is: In SQL, you calculate a result over a fixed, current content of a database. In {{< c8y-event-language >}}, statements run endlessly and the process time has to be limited by the time window.
