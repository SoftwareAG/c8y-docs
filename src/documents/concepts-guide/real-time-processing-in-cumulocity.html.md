# Overview

Cumulocity allows developers and power users to run real-time M2M business logic inside the Cumulocity server based on a high-level real-time processing language. This section introduces the basic concepts of real-time processing and shows how you can develop your own business logic to be run in Cumulocity.

More information on the interfaces for real-time processing can be found in the Reference Guide, Sections "Real-time language" and "Statements".

# What is real-time processing in Cumulocity?

Cumulocity includes a real-time engine that receives all data coming from devices or other data sources and immediately processes user-defined business logic on the data. This user-defined business logic can, among others, notify applications of the new data, create new data based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), trigger operations on devices or send email. The logic is implemented in a high-level event processing language, *Cumulocity Event Language*, as illustrated in the picture below. Incoming data can have an optional *processing mode* attached to it to determine if the data should be stored into the database or just be processed in real-time.

![CEP architecture](/images/c8yimages/CEPEngineOverview.png)

Statements with business logic are grouped into so-called *modules*. Cumulocity provides one module for each tenant that users of the tenant can edit themselves. In addition, each application that a tenant subscribes to may comes with a module for their own statements. Modules and statements can be both edited through a REST API (see the "Statements" API) and through a web user interface. Through the API, application developers can, for example, develop user-friendly domain-specific wizards for their use cases. For example, a home automation application developer can provide a wizard that readily provides thresholding for temperature sensors and triggering of heating controllers.

# What are the benefits of using real-time processing?

Cumulocity's real-time processing feature provides the following benefits to you:

-   React instantly on events from remote sensors.
-   Develop highly interactive M2M applications.
-   Run M2M use cases directly inside Cumulocity without software development and leave the hosting and management to Cumulocity.
-   Validate, normalize and derive data according to your own business rules across different device makes.
-   Trigger automated remote control actions based on events.
-   Use powerful, stream-oriented business logic, such as time windows and joins.
-   Reduce the cost of online tracking of devices by only persisting data required for long-term storage.

# What is the Cumulocity Event Language (CEL)?

Cumulocity Event Language is syntactically similar to the SQL language. In SQL, though, a statement is run against a logically fixed database, produces a result and then terminates. In Cumulocity, a statement is continuously running against a stream of input data and is continuously calculating its output.

As an example, the following statement continuously retrieves all new temperature sensor readings above a particular temperature:

    select * 
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Here, *MeasurementCreated* is a stream containing an event for each measurement that is created in the system. Selecting a subset from these events is done using *where*, similar to SQL. *getNumber()* is a function to read a numeric value from an event, given the event and the property to read. In the example, the event is e, the MeasuremenCreated event and the property??is "c8y\_TemperatureMeasurement.temperature.value", the value in degrees Celsius of a temperature sensor (see the??[sensor library](index.php?option=com_k2&view=item&id=830)).

# How can I create derived data from CEL?

There are special streams provided by the system which can be used to executing predefined operations (like storing data into database or sending data by email). One such stream is *CreateAlarm*, which can be used to store alarm inside Cumulocity. For example, assume that an alarm should be produced immediately when the temperature of a sensor becomes too high. This is done using the following statement:

    insert into CreateAlarm
    select 
     e.measurement.time as time,
     e.measurement.source.value as source,
     "com_cumulocity_TemperatureAlert" as type,
     "Temperature too high" as text,
     "ACTIVE" as status,
     "CRITICAL" as severity    
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

This statement produce new AlarmCreated event each time a temperature sensor reads more than 100 degrees Celsius and put it into CreateAlarm output stream. Property names in select clause have to match the properties of AlarmCreated (see the [reference for the event language](index.php?option=com_k2&view=item&id=953)).

# How can I control devices from CEL?

Remote control in Cumulocity is just another kind of derived data. That is, for running an operation on a device, just create a new operation targeted to the device. The following example illustrates switching a relay based on temperature readings:

    insert into CreateOperation
    select 
    "PENDING" as status, 
    ?heating ID? as deviceId, 
    {
    "c8y_Relay.relayState", "CLOSED"
    } as fragments
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

-   *?heating ID?* is a placeholder for the ID of the heating that should be triggered.
-   *fragments* defines the nested content of the operation, in this case a "c8y\_Relay" that is "CLOSED".

The syntax of the *fragments* part is a list of pairs of property names and values surrounded by curly braces: {?key1?, ?value1?, ?key2?, ?value2?, ...}.

# How can I query data from CEL?

Sometimes, it is required to query related information from the Cumulocity database as part of the ongoing event processing. This is supported by a set of querying methods. Here is an example that shows how count total sales for vending machines of a particular customer every hour. Because customer data is not a part of the SalesReport triggered after purchase, we must retrieve it from the Cumulocity database.

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

In the above excerpt we create a batch window first, which keeps data for one hour in order to calculate aggregates. We store the prepared data into the window: event is platform Event instance, customer is a ManagedObject being the parent of the vending machine. The customer is retrieved using the predefined "findOneManagedObjectParent(String managedObjectId)" method. The aggregation is calculated through "insert into CreateMeasurement..." using a SQL-like syntax.

# How is real-time processing implemented in Cumulocity?

As mentioned initially, there are two processing modes for API requests in Cumulocity: *Persistent* and *transient*. The "persistent" mode is the default: It will store data in the Cumulocity database as well as send it to the real-time engine. After both is done, Cumulocity returns the result of the request.

The "transient" mode will only send the data to the real-time engine and immediately return asynchronously. This mode is for efficiently monitoring particular data in near real-time. In addition, requests in "transient" mode are not counted as potentially chargeable API requests.

As an example, assume that location updates from cars should be monitored every second while the car is driving, but only be stored once in a minute into the database for reporting purposes. This is done using the following statement:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationMeasurement") is not null
    output first every 60 seconds

Another option is to output only every 60th update like this:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationMeasurement") is not null
    output first every 60 events
