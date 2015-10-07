---
order: 20
title: Data model
layout: default
toc: true
---

## Input streams

### General structure

All input streams share the same base structure

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|_type|String|The type of the event. See the table below for which type values apply for the different streams|
|_mode|String|The processing mode in which the data was sent to Cumulocity. See [Processing mode](/guides/reference/rest-implementation#processing-mode)|
|payload|Object|The actual data contained in the event|

Types:

|Stream|Type|
|:--|:----------|
|ManagedObjectCreated|MANAGED_OBJECT_CREATE|
|ManagedObjectUpdated|MANAGED_OBJECT_UPDATE|
|ManagedObjectDeleted|MANAGED_OBJECT_DELETE|
|EventCreated|EVENT_CREATE|
|EventDeleted|EVENT_DELETE|
|MeasurementCreated|MEASUREMENT_CREATE|
|MeasurementDeleted|MEASUREMENT_DELETE|
|OperationCreated|OPERATION_CREATE|
|OperationUpdated|OPERATION_UPDATE|
|AlarmCreated|ALARM_CREATE|
|AlarmUpdated|ALARM_UPDATE|

For simpler access you can receive the payload directly in the data type of the respective stream by accessing it via a API specific parameter:

|API|Parameter|Data type|
|:--|:----------|:-------------|
|Inventory|managedObject|[ManagedObject](/guides/event-language/data-model#managedobject)|
|Events|event|[Event](/guides/event-language/data-model#event)|
|Measurements|measurement|[Measurement](/guides/event-language/data-model#measurement)|
|Device control|operation|[Operation](/guides/event-language/data-model#operation)|
|Alarms|alarm|[Alarm](/guides/event-language/data-model#alarm)|

### ManagedObject

class: com.cumulocity.model.ManagedObject

|Parameter|Data type|Description|
|:--|:----------|:-------------|:----------|
|type|String|The type of the ManagedObject|
|name|String|The name of the ManagedObject|
|lastUpdated|Date|The time when the object was last updated|
|owner|String|The owner of the ManagedObject|
|childAssets|Object[]|An array of the [IDs](/guides/event-language/data-model#id) of all child assets|
|childDevices|Object[]|An array of the [IDs](/guides/event-language/data-model#id) of all child devices|
|assetParents|Object[]|An array of the [IDs](/guides/event-language/data-model#id) of all parent assets|
|deviceParents|Object[]|An array of the [IDs](/guides/event-language/data-model#id) of all child devices|

The Object[] for the references to the parents and children contains only [IDs](/guides/event-language/data-model#id). You can use the cast function e.g. `cast(event.managedObject.childAssets[0], com.cumulocity.model.ID)`.

Example:

    select
      event.managedObject.type,
      event.managedObject.name,
      event.managedObject.lastUpdated,
      event.managedObject.owner,
      event.managedObject.childAssets,
      event.managedObject.childDevices,
      event.managedObject.assetParents,
      event.managedObject.deviceParents
    from ManagedObjectUpdated event;

### Event

tbd

### Measurement

tbd

### Operation

tbd

### Alarm

tbd

## Output streams

### ManagedObjects

tbd

### Events

tbd

### Measurements

tbd

### Operations

tbd

### Alarms

tbd

## Special streams

The streams mentioned in this section do not interact with the Cumulocity database but will create calls to external services.

### SendMail

|Parameter|Data type|Description|Mandatory|
|:--|:----------|:-------------|:----------|
|receiver|String|The mail address of the receiver|yes|
|cc|String|The mail address of the cc|no|
|bcc|String|The mail address of the bcc|no|
|subject|String|The subject line of the mail|yes|
|text|String|The body of the mail|yes|

It is possible to have more than one mail address in the parameters receiver,cc and bcc. Therefore create a string that contains all mail addresses separated by commas e.g. "receiver1@mail.com,receiver2@mail.com".

    insert into SendEmail
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "Example Mail" as subject,
      "This mail was sent to test the SendEmail stream in Cumulocity" as text
    from AlarmCreated;

### SendDashboard

tbd

### SendSms

|Parameter|Data type|Description|Mandatory|
|:--|:----------|:-------------|:----------|
|receiver|String|The phone number of the receiver|yes|
|text|String|The body of the sms. Max. 160 characters|yes|
|deviceId|String|The ID of the device generating the sms. A log event will be created for the device|no|

It is possible to have more than one phone number in the parameters receiver,cc and bcc. Therefore create a string that contains all phone numbers separated by commas e.g. "+49123456789,+49987654321".
Although it is technically not required by Cumulocity to have the country code we recommend using it because the sms gateway might require it. You can use the notation like e.g. "0049" or "+49" (for Germany).

    insert into SendSms
    select
      "+49123456789" as receiver,
      "This sms was sent to test the SendSms stream in Cumulocity" as text
    from AlarmCreated;

### SendSpeech

tbd

## Additional data models

### ID

class: com.cumulocity.model.ID
tbd
