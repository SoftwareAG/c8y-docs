---
weight: 10
title: Input streams
layout: redirect
---

### General structure

All input streams share the same base structure.

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|_type|String|The type of the event. See the table below which value types can be used for different streams.|
|_mode|String|The processing mode in which the data was sent to {{< product-c8y-iot >}}. See <b>Processing mode</b> in the [{{< openapi >}}](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/REST-implementation/HTTP-usage).|
|_origin|String|The origin of the event. If the data was created by a cep rule the origin will be "cep".|
|payload|Object|The actual data contained in the event|

Types:

|Stream|Type|
|:--|:----------|
|ManagedObjectCreated|MANAGED&#95;OBJECT&#95;CREATE|
|ManagedObjectUpdated|MANAGED&#95;OBJECT&#95;UPDATE|
|ManagedObjectDeleted|MANAGED&#95;OBJECT&#95;DELETE|
|EventCreated|EVENT_CREATE|
|EventUpdated|EVENT_UPDATED|
|EventDeleted|EVENT_DELETE|
|MeasurementCreated|MEASUREMENT_CREATE|
|MeasurementDeleted|MEASUREMENT_DELETE|
|OperationCreated|OPERATION_CREATE|
|OperationUpdated|OPERATION_UPDATE|
|AlarmCreated|ALARM_CREATE|
|AlarmUpdated|ALARM_UPDATE|
|ResponseReceived|REQUEST_RESULT|

For simpler access you can receive the payload directly in the data type of the respective stream by accessing it via an API specific parameter:

|API|Parameter|Data type|
|:--|:----------|:-------------|
|Inventory|managedObject|[ManagedObject](/event-language/data-model#managedobject)|
|Events|event|[Event](/event-language/data-model#event)|
|Measurements|measurement|[Measurement](/event-language/data-model#measurement)|
|Device control|operation|[Operation](/event-language/data-model#operation)|
|Alarms|alarm|[Alarm](/event-language/data-model#alarm)|

### ManagedObject

class: com.cumulocity.model.ManagedObject

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|id|[ID](/event-language/data-model#id)|ID of the ManagedObject|
|type|String|The type of the ManagedObject|
|name|String|The name of the ManagedObject|
|lastUpdated|Date|The time when the ManagedObject was last updated|
|owner|String|The owner of the ManagedObject|
|childAssets|Object[]|An array of the [IDs](/event-language/data-model#id) of all child assets|
|childDevices|Object[]|An array of the [IDs](/event-language/data-model#id) of all child devices|
|assetParents|Object[]|An array of the [IDs](/event-language/data-model#id) of all parent assets|
|deviceParents|Object[]|An array of the [IDs](/event-language/data-model#id) of all child devices|

The Object[] for the references to the parents and children contains only [IDs](/event-language/data-model#id). You can use the cast function, for example, `cast(event.managedObject.childAssets[0], com.cumulocity.model.ID)`.

Example:

    select
      event.managedObject.id,
      event.managedObject.type,
      event.managedObject.name,
      event.managedObject.lastUpdated,
      event.managedObject.owner,
      event.managedObject.childAssets,
      event.managedObject.assetParents,
      event.managedObject.deviceParents,
      event.managedObject.childDevices
    from ManagedObjectCreated event;

### Event

class: com.cumulocity.model.event.Event

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|id|[ID](/event-language/data-model#id)|The ID of the Event|
|creationTime|Date|The time when the Event was created in the database|
|type|String|The type of the Event|
|text|String|The text of the Event|
|time|Date|The time when the Event was created (as sent by device)|
|source|[ID](/event-language/data-model#id)|The ID of the device which created the Event|

Example:

    select
      event.event.id,
      event.event.creationTime,
      event.event.type,
      event.event.text,
      event.event.time,
      event.event.source
    from EventCreated event;


### Measurement

class: com.cumulocity.model.measurement.Measurement

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|id|[ID](/event-language/data-model#id)|The ID of the Measurement|
|type|String|The type of the Measurement|
|time|Date|The time when the Measurement was created (as sent by device)|
|source|[ID](/event-language/data-model#id)|The ID of the device which created the Measurement|

Example:

    select
      event.measurement.id,
      event.measurement.type,
      event.measurement.time,
      event.measurement.source
    from MeasurementCreated event;


### Operation

class: com.cumulocity.model.operation.Operation

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|id|[ID](/event-language/data-model#id)|The ID of the Operation|
|creationTime|Date|The time when the Operation was created in the database|
|status|[OperationStatus](/event-language/data-model#operationstatus)|The current status of the Operation|
|deviceId|[ID](/event-language/data-model#id)|The ID of the device which should execute the Operation|

Example:

    select
      event.operation.id,
      event.operation.creationTime,
      event.operation.status,
      event.operation.deviceId
    from OperationCreated event;

### Alarm

class: com.cumulocity.model.event.Alarm

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|id|[ID](/event-language/data-model#id)|The ID of the Alarm|
|creationTime|Date|The time when the Alarm was created in the database|
|type|String|The type of the Alarm|
|count|long|The number of times the alarm was reported while active|
|severity|[Severity](/event-language/data-model#severity)|The severity of the Alarm|
|status|[AlarmStatus](/event-language/data-model#alarmstatus)|The status of the Alarm|
|text|String|The text of the Event|
|time|Date|The time when the Event was created (as sent by device)|
|source|[ID](/event-language/data-model#id)|The ID of the device which created the Alarm|

Example:

    select
      event.alarm.id,
      event.alarm.creationTime,
      event.alarm.type,
      event.alarm.count,
      event.alarm.severity,
      event.alarm.status,
      event.alarm.text,
      event.alarm.time,
      event.alarm.source
    from AlarmCreated event;

### Response received

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|status|Integer|Http response status|
|body|String|Http response body|
|creationTime|Date|The time when the response was created|
|source|Object|Source set in SendRequest output stream|

Example:

    select
      event.status,
      event.body,
      event.creationTime,
      getString(event.source, 'id.value') as source
    from ResponseReceived event;   
