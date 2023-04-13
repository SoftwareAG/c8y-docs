---
weight: 24
title: Input
layout: redirect
---

## Alarm Input

**apama.analyticskit.blocks.cumulocity.AlarmInput**

Receives <tt>Alarm</tt> objects from a device or devices in a group and reorders them based on the timestamp.

If the Alarm Status parameter is Active, then the alarms are reordered based on the timestamp (and dropped if they are too old), unless the Ignore Timestamp parameter is set. Otherwise, data is processed as it is received.


The parameters that define the input stream of the block are "Input Source" and "Alarm Type". If this block is configured with the same "Input Source" and "Alarm Type" parameters as an Alarm Output block in another model, then a connection between the models is formed, as each block refers to the same stream of <tt>Alarm</tt> objects.


Note: When running in simulation mode, because only the creation time of the alarm is stored, the alarm status must be Active.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Alarm Type|The alarm type for which the block will listen.|string|
|Input Source|Defines the device or group of devices from which the alarm has been received.<br><br>This can be a single device, or an object that references or contains a group of devices.|string|
|Severity|The severity of the alarm. If not specified, the block will listen for all alarm severities.|Option - one of:<ul><li>Critical</li><li>Major</li><li>Minor</li><li>Warning</li></ul>|Optional|
|Alarm Status|The status of the alarm. If not specified, the block will listen for alarms with any status.|Option - one of:<ul><li>Active</li><li>Acknowledged</li><li>Cleared</li></ul>|Optional|
|Notification Mode|Filters <tt>Alarm</tt> events such that only new alarms, updated alarms, or all alarms are processed. The default is that all alarms are processed.|Option - one of:<ul><li>All</li><li>Updates only</li><li>New alarms only</li></ul>|Default: All|
|Ignore Timestamp|If selected, the timestamp of the incoming alarm is ignored. Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.|boolean|Default: false|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Alarms|Generates a pulse output for each <tt>Alarm</tt> object received, with extra properties.|pulse|



## Event Input

**apama.analyticskit.blocks.cumulocity.DeviceEventInput**

Receives <tt>Event</tt> objects from a device or devices in a group and reorders them based on the timestamp.

If the Ignore Timestamp parameter is set, the block ignores the timestamp of the event and processes the events as they are received, otherwise it drops old events.


The parameters that define the input stream of the block are "Input Source" and "Event Type". If this block is configured with the same "Input Source" and "Event Type" parameters as an Event Output block in another model, then a connection between the models is formed, as each block refers to the same stream of <tt>Event</tt> objects.


Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.


Note: A history of changes is not maintained for <tt>Event</tt> objects, and it is thus not possible to retrieve the original objects from the inventory. For this reason, a model which contains this input block type may behave differently in simulation mode than it would in production mode.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Input Source|Defines the device or group of devices from which the event has been received.<br><br>This can be a single device, or an object that references or contains a group of devices.|string|
|Event Type|The event type for which the block will listen.|string|
|Notification Mode|Filters <tt>Event</tt> events such that only new events, updated events, or all events are processed. The default is that all events are processed.|Option - one of:<ul><li>All</li><li>Updates only</li><li>New events only</li></ul>|Default: All|
|Ignore Timestamp|If selected, the timestamp of the incoming event is ignored. Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.|boolean|Default: false|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Events|Generates a pulse output for each <tt>Event</tt> object received, with extra properties.|pulse|



## Managed Object Input

**apama.analyticskit.blocks.cumulocity.ManagedObjectInput**

Receives <tt>ManagedObject</tt> objects from a device or devices in a group.

The block does not reorder the received <tt>ManagedObject</tt> objects and processes them as they are received. If the Property Name parameter is supplied, then the block does not produce new output if the value of the specified property has not changed since the last output, even if other properties on the same <tt>ManagedObject</tt> object have changed.


The Value output from the block contains all properties on the <tt>ManagedObject</tt> object, including the property specified by the Property Name parameter. Property values can be accessed using the Extract Property block.


Properties with values of type <tt>string</tt>, <tt>boolean</tt> or <tt>float</tt> can be accessed by specifying the name of the property in the Extract Property block. For example, if the name of the property is <tt>ap_State</tt>, then specify <tt>ap_State</tt> as the value for the Property Path parameter of the Extract Property block.


If a property value is of type JSON object or sequence, then nested values can be accessed by specifying the full path to the nested values as the name of the property.


For example, if the name of the property is <tt>c8y_SpeedMeasurement</tt> and the value is <tt>{ "Speed": { "value": 1234, "unit": "km/h" } }</tt> (in JSON form), then specify <tt>c8y_SpeedMeasurement.Speed.unit</tt> as the value for the Property Path parameter of the Extract Property block to extract the value of the unit.


Any position data associated with the <tt>ManagedObject</tt> object is available as a <tt>c8y_Position</tt> property and can be extracted using the Extract Property block.


If the value of the property specified by the Property Name parameter of this block is of type <tt>string</tt>, <tt>boolean</tt> or <tt>float</tt>, then the value is also directly available in the Value output port and can be directly consumed by blocks consuming values of that type without using the Extract Property block, for example, the Expression or Difference blocks.


The parameters that define the input stream of the block are "Input Source" and "Property Name".

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Input Source|Defines the device or group of devices from which the managed object has been received.<br><br>This can be a single device, or an object that references or contains a group of devices.|string|
|Property Name|The name of the property for which to listen.<br><br>The <tt>ManagedObject</tt> object must have a property of this name otherwise, it will be ignored. If not set, the objects are not filtered - every update will generate a pulse output with all of the properties from the <tt>ManagedObject</tt>.|string|Optional|
|Capture Start Value|Outputs the initial value when the model is activated.|boolean|Default: false|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|Generates an output for each <tt>ManagedObject</tt> object received.<br><br>All properties of the managed object are available as extra properties. You can use the Extract Property block to access their values.|any|



## Measurement Input

**apama.analyticskit.blocks.cumulocity.DeviceMeasurementInput**

Receives <tt>Measurement</tt> objects from a device or devices in a group and reorders them based on the timestamp.

If the Ignore Timestamp parameter is set, the block ignores the timestamp of the measurement and processes the measurements as they are received, otherwise it drops old measurements.


If using a group for input, select a device within the group to select the fragment and series, and then change to the desired group.


The parameters that define the output stream of the block are "Input Source" and "Fragment and Series". If this block is configured with the same "Input Source" and "Fragment and Series" parameters as a Measurement Output block in another model, then a connection between the models is formed, as each block refers to the same stream of <tt>Measurement</tt> objects.


Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Input Source|Defines the device or group of devices from which the measurement has been received.<br><br>This can be a single device, or an object that references or contains a group of devices.|string|
|Fragment and Series|The fragment for which the block will listen.<br><br>This only shows fragments and series for measurements associated with the object (device or group) selected. Any measurements on a device within a group will only be shown when a device is selected (unless there are measurements with the group as the source). For example, if a temperature measurement is sent in Celsius, the fragment is <tt>T</tt> and the series is <tt>C(Celsius)</tt>. This means, that this parameter can be set as <tt>T.C</tt> or <tt>T=>C</tt>.|string|
|Ignore Timestamp|If selected, the timestamp of the incoming measurement is ignored. Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.|boolean|Default: false|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|The numeric value from the measurement object.|float|



## Operation Input

**apama.analyticskit.blocks.cumulocity.OperationInput**

Receives <tt>Operation</tt> objects from a device or devices in a group.

The block does not reorder the received <tt>Operation</tt> objects and processes the operations as they are received. The block can be optionally configured to only process operations having a specified status or property.


The output from the block contains all properties on the <tt>Operation</tt> object. Property values can be accessed using the Extract Property block.


Properties with values of type <tt>string</tt>, <tt>boolean</tt> or <tt>float</tt> can be accessed by specifying the name of the property in the Extract Property block. For example, if the name of the property is <tt>ap_State</tt>, then specify <tt>ap_State</tt> as the value for the Property Path parameter of the Extract Property block.


If a property value is of type JSON object or sequence, then nested values can be accessed by specifying the full path to the nested values as the name of the property.


For example, if the name of the property is <tt>c8y_SpeedMeasurement</tt> and the value is <tt>{ "Speed": { "value": 1234, "unit": "km/h" } }</tt> (in JSON form), then specify <tt>c8y_SpeedMeasurement.Speed.unit</tt> as the value for the Property Path parameter of the Extract Property block to extract the value of the unit.


The parameter that defines the input stream of the block is Input Source.


Note: A history of changes is not maintained for <tt>Operation</tt> objects, and it is thus not possible to retrieve the original objects from the inventory. For this reason, a model which contains this input block type may behave differently in simulation mode than it would in production mode.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Input Source|Defines the device or group of devices from which the operation has been received.<br><br>This can be a single device, or an object that references or contains a group of devices.|string|
|Operation Name|The name of the operation for which the block will listen.<br><br>If specified, the <tt>Operation</tt> object must have a property of this name otherwise, it will be ignored.|string|Optional|
|Operation Status|The status for which to listen.<br><br>If not specified, the block will listen for operations with any status.|Option - one of:<ul><li>SUCCESSFUL</li><li>FAILED</li><li>EXECUTING</li><li>PENDING</li></ul>|Optional|
|Notification Mode|Filters <tt>Operation</tt> events such that only new operations, updated operations, or all operations are processed. The default is that all operations are processed.|Option - one of:<ul><li>All</li><li>Updates only</li><li>New operations only</li></ul>|Default: All|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Operations|Generates a pulse output for each <tt>Operation</tt> object received.<br><br>All properties of the <tt>Operation</tt> object are available as extra properties. You can use the Extract Property block to access their values.|pulse|



## Position Input

**apama.analyticsbuilder.blocks.PositionInput**

Receives <tt>Event</tt> objects from a device or devices in a group and extracts the <tt>c8y_Position</tt> fragment into a <tt>Value</tt> object.

If no <tt>c8y_Position</tt> fragment is present, the event is ignored. If the fragment does not contain at least a valid latitude and valid longitude, the event is ignored. If the Primary Value parameter is set to Altitude and the fragment does not contain an altitude, the event is ignored. Latitudes must be between -90 and 90 degrees inclusive. Longitudes must be between -180 and 180 degrees inclusive.


The primary value of the output <tt>Value</tt> object can be set to be the latitude, longitude or altitude. All members of the <tt>c8y_Position</tt> fragment are added to the properties dictionary of the <tt>Value</tt> object.


If the Ignore Timestamp parameter is set, the block ignores the timestamp of the event and processes the measurements as they are received, otherwise it reorders the events and drops old measurements.


The parameter that defines the input stream of the block is Input Source, and Event Type if set.


Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.


Note: A history of changes is not maintained for <tt>Event</tt> objects, and it is thus not possible to retrieve the original objects from the inventory. For this reason, a model which contains this input block type may behave differently in simulation mode than it would in production mode.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Input Source|Defines the device or group of devices from which the position is received.<br><br>This can be a single device, or an object that references or contains a group of devices.|string|
|Event Type|The event type for which the block listens. If left unset, then there is no filtering by type.<br><br>To consume events from another model, this property must be set.|string|Optional|
|Notification Mode|Filters <tt>Event</tt> events such that only new events, updated events, or all events are processed.<br><br>The default is that all events are processed.|Option - one of:<ul><li>All</li><li>Updates only</li><li>New events only</li></ul>|Default: New events only|
|Ignore Timestamp|If selected, the timestamp of the incoming measurement is ignored. Note: When running in simulation mode, because historical input data is used, timestamps are not ignored.|boolean|Default: false|
|Primary Value|The primary value to be output by the block: latitude, longitude or altitude, or empty if not set.|Option - one of:<ul><li>Latitude</li><li>Longitude</li><li>Altitude</li></ul>|Optional|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Position|An object containing at least latitude and longitude.|any|


