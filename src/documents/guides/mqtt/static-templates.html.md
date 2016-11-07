---
order: 70
title: MQTT Static Templates
layout: default
---

## Overview

To ease device integration Cumulocity already supports a number of static templates that can be used by any client without the need for creating own templates.
These templates focus on the most commonly used messages for device management purposes.

To use the templates listed below you need to publish the messages to the topic "s/us".

To receive operations with the static templates you need to subscribe to the topic "s/ds".

## Automatic device creation

The topic for static templates supports an automatic creation of devices. Whenever there is no child associated with your MQTT ClientID and you send data Cumulocity will automatically create a device for the MQTT ClientID. If you want to create the device on your own your first message must be the device creation.
In this case Cumulocity will create the device from the template.

The automatic creation of devices is also supported for 1st level child devices.
For child devices on a deeper level you must use the template for creating a child devices by sending it to the topic of the child device under which you want to place the new child.

## Handling none mandatory parameters

If a parameter is not declared as mandatory the client can send an empty string in that place.

Example:
```
100,,myType
```

Tailing commas are not required. The two lines below result in the same message.

```
100,,
100
```

## Publish templates

The following templates can be used to publish data on the topic "s/us".

### Inventory templates (1xx)

#### Device creation (100)

Will create a new device for the serial number in the inventory if not yet existing. An externalId for the device with type âc8y_Serialâ and the device identifier of the MQTT clientId as value will be created

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|device name|NO|MQTT Device &lt;serialNumber&gt;|
|2|device type|NO|c8y_MQTTDevice|

Example:
```
100,myDevice,myType
```

#### Child device creation (101)

Will create a new child device for the current device. The newly created object will be added as child device. Additionally an externaId for the child will be created with type “c8y_Serial” and the value a combination of the serial of the root device and the unique child ID.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|unique child ID|YES||
|2|device name|NO|MQTT Device &lt;serialNumber&gt;|
|3|device type|NO|c8y_MQTTChildDevice|

Example:
```
101,uniqueChildId,myChildDevice,myChildType
```

#### Get child devices (105)

Will trigger the sending of child devices of the device.

Example:
```
105
```

#### Configure Hardware (110)

Will update the Hardware properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|serialNumber|NO|
|2|model|NO|
|3|revision|NO|

Example:
```
110,1234567890,myModel,1.2.3
```

#### Configure Mobile (111)

Will update the Mobile properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1imei|NO|
|2|iccid|NO|
|3|imsi|NO|
|4|mcc|NO|
|5|mnc|NO|
|6|lac|NO|
|7|cellId|NO|

Example:
```
111,1234567890,,54353
```

#### Configure Position (112)

Will update the Position properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|latitude|NO|
|2|longitude|NO
|3|altitude|NO|
|4|accuracy|NO|

Example:
```
112,50.323423,6.423423
```

#### Set Configuration (113)

Will update the Position properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|configuration|NO|

Example:
```
113,"val1=1\nval2=2"
```

#### Set supported operations (114)

Will set the supported operations of the device

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of supported operations|

Example:
```
114,c8y_Restart,c8y_Configuration,c8y_SoftwareList
```

#### Set firmware (115)

Will set the firmware installed on the device

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|name|NO|
|2|version|NO|
|3|url|NO|

Example:
```
115,firmwareName,firmwareVersion,firmwareUrl
```

#### Set software list (116)

Will set the list of software installed on the device

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of 3 values per software|NO|
|1.1|name|NO|
|1.2|version|NO|
|1.3|url|NO|

Example:
```
116,software1,version1,url1,software2,,url2,software3,version3
```

#### Set required availability (117)

Will set the required interval for availability monitoring. It will only set the value if does not exist. Values entered e.g. through UI are not overwritten.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|Required interval|NO|

Example:
```
117,60
```

### Measurement templates (2xx)

#### Create custom measurement (200)

Will create a measurement with given fragment and series

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|fragment|YES||
|2|series|YES||
|3|value|YES||
|4|unit|NO||
|5|time|NO|Current server time|

Example:
```
200,c8y_Temperature,T,25
```

#### Create signal strength measurement (210)

Will create a measurement of type c8y_SignalStrength

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|rssi value|YES, if 2 not  set||
|2|ber value|YES, if 1 not set||
|3|time|NO|Current server time|

Example:
```
210,-90,23,2016-06-22T17:03:14.000+02:00
```

#### Create temperature measurement (211)

Will create a measurement of type c8y_TemperatureMeasurement

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|temperature value|YES||
|2|time|NO|Current server time|

Example:
```
211,25,2016-06-22T17:03:14.000+02:00
```

#### Create battery measurement (212)

Will create a measurement of type c8y_Battery

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|battery value|YES||
|2|time|NO|Current server time|

Example:
```
212,95,2016-06-22T17:03:14.000+02:00
```

### Alarm templates (3xx)

#### Create CRITICAL alarm (301)

Will create a CRITICAL alarm

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|

Example:
```
301,c8y_TemperatureAlarm
```

#### Create MAJOR alarm (302)

Will create a MAJOR alarm

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|

Example:
```
302,c8y_TemperatureAlarm,âThis is an alarmâ
```

#### Create MINOR alarm (303)

Will create a MINOR alarm

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|

Example:
```
303,c8y_TemperatureAlarm
```

#### Create WARNING alarm (304)

Will create a WARNING alarm

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|

Example:
```
304,c8y_TemperatureAlarm,,2013-06-22T17:03:14.000+02:00
```

#### Update severity of existing alarm (305)

Will change the severity of an existing alarm

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|
|2|severity|YES|

Example:
```
305,c8y_TemperatureAlarm,CRITICAL
```

#### Clear existing alarm (306)

Will clear an existing alarm

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|

Example:
```
306,c8y_TemperatureAlarm
```

### Event templates (4xx)

#### Create basic event (400)

Will create an event of given type and text.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|YES||
|3|time|NO|Current server time|

Example:
```
400,c8y_MyEvent,"Something was triggered"
```

#### Create location update event (401)

Will create typical location update event containing c8y_Position

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO||
|2|longitude|NO||
|3|altitude|NO||
|4|accuracy|NO||
|5|time|NO|Current server time|

Example:
```
401,51.151977,6.95173,67
```

#### Create location update event with device update (402)

Will create typical location update event containing c8y_Position. Additionally the device will be updated with the same c8y_Position fragment.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO||
|2|longitude|NO||
|3|altitude|NO||
|4|accuracy|NO||
|5|time|NO|Current server time|

Example:
```
402,51.151977,6.95173,67
```

### Operation templates (5xx)

#### Get PENDING operations (500)

Will trigger the sending of all PENDING operations for the agent.

Example:
```
500
```

#### Set operation to EXECUTING (501)

Will set the oldest PENDING operation with given fragment to EXECUTING

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|

Example:
```
501,c8y_Restart
```

#### Set operation to FAILED (502)

Will set the oldest EXECUTING operation with given fragment to FAILED

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2|failureReason|NO|

Example:
```
502,c8y_Restart,"Could not restart"
```

#### Set operation to SUCCESSFUL (503)

Will set the oldest EXECUTING operation with given fragment to SUCCESSFUL.
It enables the device to send additional parameters that trigger additional steps based on the type of operation send as fragment (see section [Updating operations](#updating-operations)).

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2...|parameters|NO|

Example:
```
503,c8y_Restart
```



## Subscribe templates
Client can receive the following templates when subscribing to "s/ds".

### Inventory templates (1xx)

#### Get children of device (106)

Lists all children of the device

|Position|Parameter|
|:-------|:-------|
|1...|child|

Example:
```
106,child1,child2,child3
```

### Operation templates (5xx)

All operation responses have the same base structure leading with the message ID followed by the ID of either the root device or a child which should handle the operation.

#### Restart (510)

Tells the device to restart.

Example:
```
510,DeviceSerial
```

#### Command (511)

Tells the device to run the command send in the operation.

|Position|Parameter|
|:-------|:-------|
|1|Command text|

Example:
```
511,DeviceSerial,execute this
```

#### Configuration (513)

Tells the device to set the configuration send in the operation.

|Position|Parameter|
|:-------|:-------|
|1|configuration|

Example:
```
513,DeviceSerial,"val1=1\nval2=2"
```

#### Firmware (515)

Tells the device to install the firmware from the url.

|Position|Parameter|
|:-------|:-------|
|1|firmware name|
|2|firmware version|
|3|url|

Example:
```
515,DeviceSerial,myFimrware,1.0,http://www.my.url
```

#### Software list (516)

Tells the device to install the software send in the operation.

|Position|Parameter|
|:-------|:-------|
|1...|List of 3 values per software|
|1.1|name|
|1.2|version|
|1.3|url|

Example:
```
516,DeviceSerial,softwareA,1.0,url1,softwareB,2.0,url2
```

#### Measurement request operation (517)

Tells the device to send the measurements specified by the request name.

|Position|Parameter|
|:-------|:-------|
|1|request name|

Example:
```
517,DeviceSerial,LOGA
```

#### Relay (518)

Tells the device to either open or close the relay

|Position|Parameter|
|:-------|:-------|
|1|Relay state|

Example:
```
518,DeviceSerial,OPEN
```

#### RelayArray (519)

Tells the device either open or close the relays in the array.

|Position|Parameter|
|:-------|:-------|
|1...|List of relay state|

Example:
```
519,DeviceSerial,OPEN,CLOSE,CLOSE,OPEN
```

#### Upload configuration file (520)

Tells the device to upload its current configuration

Example:
```
520,DeviceSerial
```

#### Download configuration file (521)

Tells the device to download a configuration file from the url.

|Position|Parameter|
|:-------|:-------|
|1|url|

Example:
```
521,DeviceSerial,http://www.my.url
```

#### Logfile request (522)

Tells the device to upload a log file for the given parameters.

|Position|Parameter|
|:-------|:-------|
|1|Log file name|
|2|Start date|
|3|End date|
|4|Search text|
|5|Maximum lines|

Example:
```
522,DeviceSerial,logfileA,2013-06-22T17:03:14.000+02:00,2013-06-22T18:03:14.000+02:00,ERROR,1000
```

#### Communication mode (523)

Tells the device to change the communication mode.

|Position|Parameter|
|:-------|:-------|
|1|mode|

Example:
```
523,DeviceSerial,SMS
```

## Updating operations

When using the template to set an operation to state SUCCESSFUL it supports sending additional parameters to trigger additional calls on the server.
The table below shows the operations that support this feature and what will be done with the parameters.

|Fragment|Parameters|Action triggered|
|:-------|:-------|:-------|
|c8y_Command|result|Result will be added to operation|
|c8y_RelayArray|Relay states|Device object will be updated with the states|
|c8y_CommunicationMode|No parameter needed|Device object will be updated with the mode|
|c8y_LogfileRequest|File url|File url will be added to operation|
|c8y_DownloadConfigFile|(optional) timestamp|Device object will be updated with the ID of the configuration dump and the timestamp (or server time)|
