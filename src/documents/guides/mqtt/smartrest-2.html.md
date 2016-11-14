---
order: 60
title: SmartREST 2.0
layout: default
---

## Overview

This section describes the SmartREST 2.0 payload format that can be used with the Cumulocity MQTT implementation.

SmartREST 2.0 was designed to make use of the MQTT protocol and therefore can reduce the payload even more than the SmartREST 1.0 via HTTP.
SmartREST 2.0 is only available via MQTT.

SmartREST 2.0 offers the following MQTT topics for the main communication:

To publish messages:
```
s/uc/<X-ID>
```

To subscribe for responses:
```
s/dc/<X-ID>
```

The topics for creating templates are described in [this section](#creating-templates-via-mqtt)

## Changes from SmartREST 1.0

In its base SmartREST 2.0 is like the previous version a CSV-like payload format that is backed by previously created templates to finally create the targeted JSON structure.

Several changes in the functionality have been made:
* Templates no longer contain IDs of objects (instead IDs will be resolved by e.g. MQTT ClientId)
* Managed Objects can be created and retrieved directly with external IDs
* Creating request templates now uses JSON Path (like response templates)
* Support for lists in responses
* Responses also return if only part of the patterns were found
* Declaring a default X-Id for the connection

## Supported templates

SmartREST 2.0 lets you create template for the following matching HTTP Methods:

|API|GET|POST|PUT|
|:-------|:-------|:-------|:-------|
|Inventory|x|x|x|
|Alarm||x|x|
|Event||x||
|Measurement||x||
|Operation|||x|

Additionally you can create templates to return certain values from responses and operations.

## Template collections

A template collection is a set of request and response templates that specify a device communication protocol. Each collection is be referenced by a unique ID (called X-Id).

### Creating templates via MQTT

Like in SmartREST 1.0 you need to pass all templates in a collection in one message. After the creation of a template collection it can no longer be modified through MQTT.
When creating templates the client needs to publish to the following topic.

```
s/ut/<X-ID>
```

To verify if a template collection exists the client can subscribe to the topic

```
s/dt
```

When subscribed the client can send an empty message to the creation topic which will trigger a new message about the creation status of this X-ID.

Example:
Empty publish to s/ut/myExistingTemplateCollection
```
20,myExistingTemplateCollection,<ID of collection>
```

Empty publish to s/ut/myNotExistingTemplateCollection
```
41,myNotExistingTemplateCollection
```

### Request templates

A request template contains the following basic fields:

|Field|Data type|Possible values|Mandatory|Description|
|:-------|:-------|:-------|:-------|:-------|
|messageId|String||YES|Unique ID to reference the template within the collection|
|method|String|GET<br>PUT<br>POST|YES|Whether to get, update or create data|
|api|String|INVENTORY<br>MEASUREMENT<br>ALARM<br>EVENT<br>OPERATION|YES|Cumulocity API to be used|
|response|boolean|true<br>false|NO|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|mandatoryValues|List&lt;String&gt;||YES|Values for the mandatory fields on the API. The values depend on the API and method the template uses|
|customValues|List&lt;CustomValue&gt;||NO|Custom values that should be added to the object|

A request template lists all the fragments in the object structure (mandatory and custom) that should be added when creating or updating the data.
It can set fixed values in the the template that will then be replaced by the server. If it does not set the value in the template the value needs to be included in the publish message (this includes mandatoryValues).

Example:
We create a template to create a measurement like this (measurements have two mandatory values: type and time):
```
// 10,msgId,api,method,response,type,time,custom1.path,custom1.type,custom1.value
10,999,POST,MEASUREMENT,,c8y_MyMeasurment,,c8y_MyMeasurement.M.value,NUMBER,
```
This template declares one additional custom property for the measurement. It leaves two fields empty in the template declaration (time and the custom proptery) so to use the template the client needs to send these two values

```
999,2016-06-22T17:03:14.000+02:00,25
// We can also use server time by leaving the time empty
999,,25
```

The following sections will get into more detail of how to create and use different templates

#### GET templates

The GET templates for the inventory do not need any mandatory or custom values. Instead they use two different fields.
With SmartREST 2.0 you have the option to either get an object from inventory by its ID or by an externalId directly. Therefore insteaad of the fields mandatoryValues and customValues the following two fields

|Field|Data type|Possible values|Mandatory|Description|
|:-------|:-------|:-------|:-------|:-------|
|byId|boolean|true<br>false|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|
|externalIdType|String||NO|Sets a fixed externalIdType if the template calls by externalId|

This enables you to query inventory in 3 different ways:

By Cumulocity ID

```
// Creation:
10,999,GET,INVENTORY,,true
// Usage:
999,123456
```

By external ID with a fixed type in the template

```
// Creation:
10,999,GET,INVENTORY,,false,c8y_Serial
// Usage:
999,myDeviceImei
```

By external ID without fixed type in the template

```
// Creation:
10,999,GET,INVENTORY,,false
// Usage:
999,c8y_Serial,myDeviceImei
```

#### POST templates

The POST templates require a different set of mandatory values based on the API:

|API|mandatory values|
|:-------|:-------|
|MEASUREMENT|type,time|
|EVENT|type,text,time|
|ALARM|type,text,status,severity,time|
|INVENTORY|externalIdType|

This results in the following minimal template creations:

```
// Creation:
10,100,POST,MEASUREMENT,false,c8y_CustomMeasurement,,
10,101,POST,EVENT,,c8y_CustomEvent,mytext,,
10,102,POST,ALARM,,c8y_CustomAlarm,mytext,ACTIVE,MAJOR,
// Usage:
100
101
102
```

Creating data on the inventory optionally includes the creating of an externalId for that object.
This is controlled by the mandatory value externalIdType.

Important: All POST Inventory templates start with the value of the externalId after the msgId. Leaving this column empty will result in not creating an external ID.

```
// Creation:
10,100,POST,INVENTORY,,c8y_MySerial
10,101,POST,INVENTORY,,
// Usage:
// Create object with externalId c8y_MySerial/myImei
100,myImei
// Create object with externalId c8y_MySerial/myImei
101,myImei,c8y_MySerial
// This message will result in not creating an external ID
101,,c8y_MySerial
```

#### PUT templates

The PUT templates for Inventory follow the same logic like the GET templates with the addition that you can also use custom values for PUT.

```
// Creation:
// 10,msgId,method,api,response,byId,externalIdTyoe,custom1.path,custom1.type,custom1.value
10,999,PUT,INVENTORY,,false,c8y_Serial,c8y_MyCustomValue,STRING,
// Usage:
999,myDeviceImei,myValue
```

The PUT templates for alarms use the type of the alarm to find the alarm to update.
It will first check the ACTIVE alarms and if there is no ACTIVE alarm it will check the ACKNOWLEDGED alarms.

```
// Creation:
// 10,msgId,method,api,response,type,custom1.path,custom1.type,custom1.value
10,999,PUT,ALARM,,c8y_MyCustomAlarm,status,ALARMSTATUS
// Usage:
999,FAILED
```

The PUT templates for operations use the fragment of the operation to find the operation.
It will first check the EXECUTING operations and if there is no EXECUTING operation it will check the PENDING operations.

```
// Creation:
// 10,msgId,method,api,response,fragment,custom1.path,custom1.type,custom1.value
10,999,PUT,OPERATION,,c8y_MyOperation,status,OPERATIONSTATUS,SUCCESSFUL,c8y_Fragment.val,NUMBER,
// Usage:
999,24
```

#### Adding custom properties

All POST and PUT values enable you to add custom properties to the results of the templates.
A single custom property requires you do add the following three values to your template creation

|field|description|
|:-------|:-------|
|path|A JsonPath for the value that should be set|
|type|An optional data type of the value. Default: STRING|
|value|The value to be set. Leaving this field empty requires the client to send the value when using the template|

|type|description|
|:-------|:-------|
|STRING|The default type. No additional verification of the value|
|DATE|A time stamp in the ISO 8601 format. Using date an not sending a time stamp results in the use of server time|
|NUMBER|An integer or number with decimal places|
|INTEGER|An integer|
|UNSIGNED|An integer (only positive)|
|FLAG|An empty map (e.g. c8y_IsDevice: {}). The client does not need to send anything for this value|
|SEVERITY|A severity of an alarm. Used to update the severity field of alarms|
|ALARMSTATUS|A status of an alarm. Used to update the status field of alarms|
|OPERATIONSTATUS|A status of an operation. Used to update the status field of operations|

Examples:

Template for clearing an alarm with an additional custom property.

```
// Creation:
10,999,PUT,ALARM,,c8y_MyCustomALarm,status,ALARMSTATUS,CLEARED,c8y_CustomFragment.reason,STRING,
// Usage:
999,Device resolved alarm on its own
```

Template for creating a custom measurement.

```
// Creation:
10,999,POST,MEASUREMENT,,c8y_CustomMeasurement,,c8y_CustomMeasurement.custom.value,NUMBER,,c8y_CustomMeasurement.custom.unit,STRING,X
// Usage:
999,30.6
```

Template for updating a property in the device.

```
// Creation:
10,999,PUT,INVENTORY,,false,c8y_Serial,c8y_MyCustomValue,STRING,
// Usage:
999,myDeviceImei,updatedValue
```

### Response templates

The SmartREST 2.0 response templates use the same structure as in SmartREST 1.0.

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID to reference the template within the collection|
|base|String|NO|A JsonPath prefix that all patterns will use|
|condition|String|NO|A JsonPath that needs to exist in the object to use the  pattern|
|pattern|List&lt;String&gt;|YES|A list of JsonPath that will be extracted from the object and returned to the device|

Response will be used for every operation and for any request template that defines the response field with true.
In each case the server will try every registered response template so there might be multiple response lines for a single operation or request.

SmartREST 2.0 will always return a response template if the condition is true (or no condition was defined). Patterns that did not resolve will be returned as empty string.
You should make use of the condition field to control when response templates should be returned.

Examples:

Querying data from the device object

Device object:
```
{
  "id": "12345",
  "type": "myMqttDevice",
  "c8y_IsDevice": {},
  "c8y_Configuration": "val1=1\nval2=2"
}
```

Template creation:
```
10,999,GET,INVENTORY,,true
11,888,,c8y_IsDevice,type,c8y_Test,c8y_Configuration
```

Client publishes:
```
999,12345
```

Client receives:
```
888,myMqttDevice,,"val1=1\nval2=2"
```

Parsing custom operations

Operation object:
```
{
  "id": "12345",
  "deviceId": "67890",
  "agentId": "67890",
  "status": "PENDING",
  "c8y_CustomConfiguration": {
    "val1": "1",
    "val2": "2",
    "customValues": ["a", "b", "c"]
  },
  "description": "Send custom configuration"
}
```

Template creation:
```
11,111,c8y_CustomConfiguration,deviceId,val1,val2,customValues[*]
11,222,,deviceId,c8y_CustomConfiguration.val1,c8y_CustomConfiguration.val2
11,333,,deviceId,val1,val2,customValues[*]
11,444,c8y_CustomConfiguration,c8y_CustomConfiguration.val3,val1,val2,customValues[*]
```

Client receives (assuming the ClientId is "myMqttTestDevice"):
```
111,myMqttTestDevice,1,2,a,b,c
222,myMqttTestDevice,1,2
333,myMqttTestDevice,,,
```

The template 444 is not returned as the condition does not match the operation.

## Using a default collection

Having the X-ID as part of the topic gives you the freedom to easily use multiple template collections but adds additional bytes for every message.
If the device anyways uses mostly (or completely) a single collection it makes sense to specify this collection as you default collection.
With a default collection specified the client can use special topics which don't require the X-ID and instead the server will use the X-ID previously specified.

You can specify one X-ID within your MQTT ClientID (see [here](/guides/mqtt/implementation#mqtt-clientid)).
Your MQTT ClientID could look like this:

```
d:myDeviceSerial:myDefaultTemplateXID
```

_Note:_

If you use a default X-ID in the ClientId you need to include the "d:" at the beginning to specify that the client is a device.

It is not required that the default template exists at the time of establishing the MQTT connection (it will be verified once the client uses it).
