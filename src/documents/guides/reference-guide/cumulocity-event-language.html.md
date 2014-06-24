---
order: 140
title: Cumulocity event language
layout: default
---

# Payload data model

The properties of the various payload types are not exactly identical to the corresponding types in the REST API. Differences lie mainly in the modeling of IDs and references. In this section, the payload data model is described.

## General types

Type *ID* can be constructed using following combinations of properties:

-   value*:String*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">type
String
Type of the identifier; value always equal to <em>com_cumulocity_model_ID</em>.</td>
<td align="left">value
String
Value of the identifier.</td>
</tr>
</tbody>
</table>

Type *GId* can be constructed using following combinations of properties:

-   value*:String*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">type
String
Type of the identifier; value always equal to <em>com_cumulocity_model_idtype_GId</em>.</td>
<td align="left">value
String
Value of the identifier.</td>
</tr>
</tbody>
</table>

## Inventory types

Type *ManagedObject* can be constructed using following combinations of properties:

-   id*:GId*
-   id*:GId*, name*:String*
-   id*:GId*, type*:String*, name*:String*
-   id*:GId*, type*:String*, name*:String*, owner*:String*
-   id*:GId*, type*:String*, name*:String*, lastUpdated*:Date* owner*:String*
-   id*:GId*, type*:String*, name*:String*, lastUpdated*:Date* owner*:String*, childAssets*:Set*, childDevices*:Set*
-   id*:GId*, type*:String*, name*:String*, lastUpdated*:Date* owner*:String*, childAssets*:Set*, childDevices*:Set*, fragments*:Array*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
GId
Global identifier of the managed object.</td>
<td align="left">type
String
Type of the managed object.</td>
<td align="left">name
String
Name of the managed object.</td>
</tr>
</tbody>
</table>

## Events types

Type *Event* can be constructed using following combinations of properties:

-   id*:GId*, time*:Date*, source*:ID*
-   id*:GId*, type*:String*, time*:Date*, text*:String*, source*:ID*
-   id*:GId*, type*:String*, time*:Date*, creationTime*:Date*, text*:String*, source*:ID*
-   id*:GId*, type*:String*, time*:Date*, creationTime*:Date*, text*:String*, source*:ID*, fragments*:Array*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
GId
Global identifier of the event.</td>
<td align="left">type
String
Type of the event.</td>
<td align="left">time
Date
The time the event occured.</td>
</tr>
</tbody>
</table>

## Measurements types

Type *Measurement* can be constructed using following combinations of properties:

-   id*:GId*, type*:String*, time*:Date*, source*:ID*
-   id*:GId*, type*:String*, time*:Date*, source*:ID*, fragments*:Array*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
GId
Global identifier of the event.</td>
<td align="left">type
String
Type of the event.</td>
<td align="left">time
Date
The time the measurement occured.</td>
</tr>
</tbody>
</table>

## Device control types

Type *Operation* can be constructed using following combinations of properties:

-   id*:GId*, deviceId*:GId*
-   id*:GId*, status*:OperationStatus*, deviceId*:GId*
-   id*:GId*, status*:OperationStatus*, failureReason*:String*, deviceId*:GId*
-   id*:GId*, status*:OperationStatus*, failureReason*:String*, deviceId*:GId*, agentId*:GId*
-   id*:GId*, creationTime*:Date*, status*:OperationStatus*, failureReason*:String*, deviceId*:GId*, agentId*:GId*
-   id*:GId*, creationTime*:Date*, status*:OperationStatus*, failureReason*:String*, deviceId*:GId*, agentId*:GId*, fragments*:Array*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
GId
Global identifier of the event.</td>
<td align="left">creationTime
Date
The time the operation was persisted in the database.</td>
<td align="left">status
OperationStatus
The operation status. The value is of enumerated type with following values allowed: <em>PENDING</em>, <em>SUCCESSFUL</em>, <em>FAILED</em>, <em>EXECUTING</em>.</td>
</tr>
</tbody>
</table>

## Alarms types

Type *Alarm* can be constructed using following combinations of properties:

-   id*:GId*, time*:Date*, source*:ID*
-   id*:GId*, time*:Date*, source*:ID*, status*:AlarmStatus*, severity*:Severity*
-   id*:GId*, type*:String*, time*:Date*, text*:String*, source*:ID*, status*:AlarmStatus*, severity*:Severity*
-   id*:GId*, type*:String*, time*:Date*, creationTime*:Date*, text*:String*, source*:ID*, status*:AlarmStatus*, severity*:Severity*
-   id*:GId*, type*:String*, time*:Date*, creationTime*:Date*, text*:String*, source*:ID*, status*:AlarmStatus*, severity*:Severity*, fragments*:Array*

and consists of following properties:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
GId
Global identifier of the alarm.</td>
<td align="left">type
String
Type of the alarm.</td>
<td align="left">time
Date
The time the alarm occured.</td>
</tr>
</tbody>
</table>

# Cumulocity events structure

Cumulocity supports several predefined event types that represent different operations on different types of objects. Each event has associated output stream used to executing dedicated action (store into database or send email).

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">API
Event types
Output streams
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Inventory
ManagedObjectCreated ManagedObjectUpdated<br /> ManagedObjectDeleted
CreateManagedObject UpdateManagedObject<br /> DeleteManagedObject
This group of events represents creation, modification or deletion of a single ManagedObject.</td>
<td align="left">Events
EventCreated EventDeleted
CreateEvent DeleteEvent
This group of events represents creation or deletion of a single Event.</td>
<td align="left">Measurements
MeasurementCreated MeasurementDeleted
CreateMeasurement DeleteMeasurement
This group of events represents creation or deletion of a single Measurement.</td>
<td align="left">Device control
OperationCreated OperationUpdated<br /> OperationDeleted
CreateOperation UpdateOperation<br /> DeleteOperation
This group of events represents creation, modification or deletion of a single Operation.</td>
</tr>
</tbody>
</table>

The basic structure of the event types is the same and consist of the following properties: *\_mode*, *\_type*, *attrs* and *payload*.

## The *\_mode* property

The *\_mode* property contains the processing mode of the event, see "Processing Mode" in Section "[REST Implementation](index.php?option=com_k2&view=item&id=820)". Possible values are:

-   *PERSISTENT*: The update represented by this event was sent to the database (before the event was sent to real-time processing).
-   *TRANSIENT*: The update represented by this event was not sent to the database.

The following example selects only events with *TRANSIENT* mode:

    select *
    from MeasurementCreated e
    where e._mode = "TRANSIENT";

## Constructing events

Each type of event allows several ways of creating it. The simplest one is by passing just the payload value, i.e.:

    insert into ManagedObjectCreated
        select e.mo as managedObject
        from MyStream e;

    insert into OperationCreated
        select e.op as operation
        from OperationsStream;

For the above to work, the values in "select" must have the correct type (*ManagedObject* and *Operation*, respectively). The word followed by the "as" keyword is the name of complex event property or payload property. You can set multiply properties in one statement:

    insert into ManagedObjectCreated
        select e.mo as managedObject,
        "TRANSIENT" as processingMode,
        "my managed object" as type
        from MyStream e;

The full list of complex event properties which can be specified during event construction is presented below:

-   *ManagedObjectCreated*
    -   childAssets*:Set*
    -   childDevices*:Set*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   managedObject*:ManagedObject*
    -   name*:String*
    -   owner*:String*
    -   payload*:ManagedObject*
    -   type*:String*
    -   \_mode*:String*
-   *ManagedObjectUpdated*
    -   childAssets*:Set*
    -   childDevices*:Set*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   managedObject*:ManagedObject*
    -   name*:String*
    -   owner*:String*
    -   payload*:ManagedObject*
    -   type*:String*
    -   \_mode*:String*
-   *ManagedObjectDeleted*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   \_mode*:String*
-   *EventCreated*
    -   creationTime*:Date*
    -   event*:Event*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   payload*:Event*
    -   source*:ID*
    -   source*:String*
    -   text*:String*
    -   time*:Date*
    -   type*:String*
    -   \_mode*:String*
-   *EventDeleted*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   \_mode*:String*
-   *MeasurementCreated*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   measurement*:Measurement*
    -   payload*:Measurement*
    -   source*:ID*
    -   source*:String*
    -   time*:Date*
    -   type*:String*
    -   \_mode*:String*
-   *MeasurementDeleted*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   \_mode*:String*
-   *OperationCreated*
    -   agentId*:GId*
    -   agentId*:String*
    -   deviceId*:GId*
    -   deviceId*:String*
    -   failureReason*:String*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   operation*:Operation*
    -   payload*:Operation*
    -   status*:OperationStatus*
    -   status*:String*
    -   time*:Date*
    -   \_mode*:String*
-   *OperationUpdated*
    -   agentId*:GId*
    -   agentId*:String*
    -   deviceId*:GId*
    -   deviceId*:String*
    -   failureReason*:String*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   operation*:Operation*
    -   payload*:Operation*
    -   status*:OperationStatus*
    -   status*:String*
    -   time*:Date*
    -   \_mode*:String*
-   *OperationDeleted*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   \_mode*:String*
-   *AlarmCreated*
    -   alarm*:Alarm*
    -   creationTime*:Date*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   payload*:Alarm*
    -   severity*:Severity*
    -   severity*:String*
    -   source*:ID*
    -   source*:String*
    -   status*:AlarmStatus*
    -   status*:String*
    -   text*:String*
    -   time*:Date*
    -   type*:String*
    -   \_mode*:String*
-   *AlarmUpdated*
    -   alarm*:Alarm*
    -   creationTime*:Date*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   payload*:Alarm*
    -   severity*:Severity*
    -   severity*:String*
    -   source*:ID*
    -   source*:String*
    -   status*:AlarmStatus*
    -   status*:String*
    -   text*:String*
    -   time*:Date*
    -   type*:String*
    -   \_mode*:String*
-   *AlarmDeleted*
    -   fragments*:Array*
    -   id*:GId*
    -   id*:String*
    -   \_mode*:String*
-   *SendEmail*
    -   receiver*:String*
    -   sender*:String*
    -   subject*:String*
    -   text*:String*

Array of fragments has following format:

*{\<\<key\>\>, \<\<value\>\>, \<\<key\>\>, \<\<value\>\>, ...}*

where \<\<key\>\> is a dot separated expression representing path to fragment. Nested paths are supported.

Example:

    insert into MeasurementCreated
    select
        "total_cust_trx" as type,
        "customer_trx_counter" as source,
        {
            "summary.total", count(*),
            "summary.customer_id", sales_report.customer.id.value
        } as fragments
    from SalesReport as sales_report
    group by sales_report.customer.id.value

Above statement constructs MeasurementCreated object containing *summary* fragment of type Map with entries "total" and "customer\_id".

# Fragments support

Fragments are accessible through the following helper functions:

-   *Object getObject(Object event, String path[, Object defaultValue])*
-   *String getString(Object event, String path[, String defaultValue])*
-   *Number getNumber(Object event, String path[, Number defaultValue])*
-   *Boolean getBoolean(Object event, String path[, Boolean defaultValue])*
-   *Date getDate(Object event, String path[, Date defaultValue])*
-   *List getList(Object event, String path[, List defaultValue])*

where:

-   *event* is an event or any other object which property we want access;
-   *path* is a dot separated expression representing property;
-   *defaultValue* is a value which will be returned if *event* does not have given property specified; optional parameter.

Example:

    select getNumber(e, "c8y_SpeedMeasurement.speed.value")
     from MeasurementCreated e;

In above statement we access *value* of *speed* property contained in *c8y\_SpeedMeasurement*fragment.

# Functions and expressions

As statements get more complicated it may be beneficial to divide them into reusable expressions to improve readability. For example the following expression:

    insert into AlarmCreated
        select
            "tempAlert" as type,
            e.measurement.time as time,
            "Temperature critical!" as text,
            e.measurement.source.value as source,
            "ACTIVE" as status,
            "CRITICAL" as severity
        from MeasurementCreated e
        where getNumber(e, "c8y_TemperatureMeasurement.temperature.value") > 100;

can be rewritten like this:

    expression temperatureValue(e) {
        e => getNumber(e, "c8y_TemperatureMeasurement.temperature.value")
    }
    insert into AlarmCreated
        select
            "tempAlert" as type,
            e.measurement.time as time,
            "Temperature critical!" as text,
            e.measurement.source.value as source,
            "ACTIVE" as status,
            "CRITICAL" as severity
        from MeasurementCreated e
        where temperatureValue(e) > 100;

or to be able to reuse the expression in a different statement like this:

    create expression temperatureValue(e) {
        e => getNumber(e, "c8y_TemperatureMeasurement.temperature.value")
    };

    insert into AlarmCreated
        select
            "tempAlert" as type,
            e.measurement.time as time,
            "Temperature to high!" as text,
            e.measurement.source.value as source,
            "ACTIVE" as status,
            "CRITICAL" as severity
        from MeasurementCreated e
        where temperatureValue(e) > 100;

    insert into AlarmCreated
        select
            "tempAlert" as type,
            e.measurement.time as time,
            "Temperature to low!" as text,
            e.measurement.source.value as source,
            "ACTIVE" as status,
            "CRITICAL" as severity
        from MeasurementCreated e
        where temperatureValue(e) < 0;

A detailed reference of the expressions that can be used is [here](http://esper.codehaus.org/esper/documentation/documentation.html). To query the database for additional data, use one of the pre-defined functions from the list below. For example, to retrieve the source *ManagedObject* of a newly created *Alarm*, use this statement:

    select findManagedObjectById(e.alarm.source)
        from AlarmCreated e;

Most functions are available in several variants:

-   findOne...(...): The function expects exactly one object as query result and fails otherwise.
-   findFirst...(...): The function returns the first object in the query result or "null", if the result is empty.
-   findAll...(...): The function returns all objects in the query result.

Here is the full list of available functions. Replace the ellipses ("...") with "findOne", "findFirst" or "findAll".

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Function name (with variants)
Return type
Alternative argument lists</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">findManagedObjectById
ManagedObject
id<em>:String</em><br /> id<em>:GId</em></td>
<td align="left">findFirstManagedObjectParent findOneManagedObjectParent
ManagedObject
managedObjectId<em>:String</em><br /> managedObjectId<em>:GId</em></td>
<td align="left">...ManagedObjectByFragmentType
List | ManagedObject
fragmentType<em>:String</em></td>
</tr>
</tbody>
</table>

# Email sending

Email can be sent using following CEP statement.

        insert into SendEmail
        select
          "sender@sender",
          "receiver@receiver",
          "subject",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."  
        from OtherStream

Of course in most cases email message need be generated in dynamic way. It can be achieved by simple String concatenation or using javascript. In below example javascript "format(text, params)" function replaces all occurrences of "{\<\<number\>\>}" in the text by corresponding parameter.

    expression string js:prepareEmailText(temp, state) [
        function format(text, params){
            for(param in params) {
                text = text.replace("{" + param + "}", params[param]);
            }
            return text;
        }
        format("Hello,\n current temperature is {0} (state = {1}). Regards.", [temp, state]);
    ]
    insert into SendEmail
    select
      "sender@sender" as sender,
      "receiver@receiver" as receiver,
      "Temperature critical!" as subject,
      prepareEmailText(
        getNumber(e, "c8y_TemperatureMeasurement.temperature.value"),
        getString(e, "c8y_TemperatureMeasurement.temperature.state")   
       ) as text
    from MeasurementCreated e
