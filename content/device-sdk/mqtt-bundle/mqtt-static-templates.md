---
title: MQTT Static templates
layout: redirect
weight: 110
---

### Overview

To ease device integration Cumulocity already supports a number of static templates that can be used by any client without the need to create your own templates. These templates focus on the most commonly used messages for device management purposes.

To use the templates listed below, you need to publish the messages to the topic <kbd>s/us</kbd> (<kbd>t/us</kbd> for transient processing of published content, <kbd>q/us</kbd> for quiescent processing of published content or <kbd>c/us</kbd> for CEP processing of published content. Refer to [SmartREST > Processing mode](/guides/reference/smartrest#processing-mode) in the Reference guide for further information.

You need to subscribe to the topic <kbd>s/ds</kbd> to receive operations with the static templates.


### Automatic device creation

The topic for static templates supports an automatic creation of devices. Whenever there is no child associated with your MQTT ClientID and you send data, Cumulocity will automatically create a device for the MQTT ClientID. If you want to create the device on your own, your first message must be the device creation. In this case Cumulocity will create the device from the template.

The automatic creation of devices is also supported for 1st level child devices. For child devices on a deeper level, you must use the template for creating a child device by sending it to the topic of the child device under the one you want to place the new child.


### Handling none mandatory parameters

If a parameter is not declared as mandatory, the client can send an empty string in that place.

```text
100,,myType
```

Tailing commas is not required. The two lines below result in the same message.

```text
100,,
100
```


### Publish templates

The following templates can be used to publish data on the topics <kbd>s/us</kbd> as well as <kbd>t/us</kbd>. Refer to [SmartRest > Processing mode](/guides/reference/smartrest#processing-mode) in the Reference guide for more information about the <kbd>t/</kbd> topic for transient data processing.

#### Inventory templates (1xx)

##### Device creation (100)

Create a new device for the serial number in the inventory if not yet existing. An externalId for the device with type **c8y_Serial** and the device identifier of the MQTT clientId as value will be created.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|device name|NO|MQTT Device &lt;serialNumber&gt;|
|2|device type|NO|c8y_MQTTDevice|

**Example**

```text
100,myDevice,myType
```

##### Child device creation (101)

Create a new child device for the current device. The newly created object will be added as child device. Additionally, an externaId for the child will be created with type **c8y_Serial** and the value a combination of the serial of the root device and the unique child ID.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|unique child ID|YES| &nbsp; |
|2|device name|NO|MQTT Device &lt;serialNumber&gt;|
|3|device type|NO|c8y_MQTTChildDevice|

**Example**

```text
101,uniqueChildId,myChildDevice,myChildType
```

##### Get child devices (105)

Trigger the sending of child devices of the device.

**Example**

```text
105
```

##### Configure Hardware (110)

Update the hardware properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|serialNumber|NO|
|2|model|NO|
|3|revision|NO|

**Example**

```text
110,1234567890,myModel,1.2.3
```

##### Configure Mobile (111)

Update the mobile properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1imei|NO|
|2|iccid|NO|
|3|imsi|NO|
|4|mcc|NO|
|5|mnc|NO|
|6|lac|NO|
|7|cellId|NO|

**Example**

```text
111,1234567890,,54353
```

##### Configure Position (112)

Update the position properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|latitude|NO|
|2|longitude|NO
|3|altitude|NO|
|4|accuracy|NO|

**Example**

```text
112,50.323423,6.423423
```

##### Set Configuration (113)

Update the configuration properties of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|configuration|NO|

Example

```text
113,"val1=1\nval2=2"
```

##### Set supported operations (114)

Set the supported operations of the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of supported operations| &nbsp;|

**Example**

```text
114,c8y_Restart,c8y_Configuration,c8y_SoftwareList
```

##### Set firmware (115)

Set the firmware installed on the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|name|NO|
|2|version|NO|
|3|url|NO|

**Example**

```text
115,firmwareName,firmwareVersion,firmwareUrl
```

##### Set software list (116)

Set the list of software installed on the device.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of 3 values per software|NO|
|1.1|name|NO|
|1.2|version|NO|
|1.3|url|NO|

**Example**

```text
116,software1,version1,url1,software2,,url2,software3,version3
```

##### Set required availability (117)

Set the required interval for availability monitoring. It will only set the value if it does not exist. Values entered, e.g. through UI, are not overwritten.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|Required interval|NO|

**Example**

```text
117,60
```

#### Measurement templates (2xx)

##### Create custom measurement (200)

Create a measurement with a given fragment and series.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|fragment|YES| &nbsp;|
|2|series|YES| &nbsp;|
|3|value|YES| &nbsp;|
|4|unit|NO| &nbsp;|
|5|time|NO|Current server time|

**Example**

```text
200,c8y_Temperature,T,25
```

##### Create signal strength measurement (210)

Create a measurement of type **c8y_SignalStrength**.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|rssi value|YES, if 2 not set| &nbsp;|
|2|ber value|YES, if 1 not set| &nbsp;|
|3|time|NO|Current server time|

**Example**

```text
210,-90,23,2016-06-22T17:03:14.000+02:00
```

##### Create temperature measurement (211)

Create a measurement of type **c8y_TemperatureMeasurement**.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|temperature value|YES| &nbsp;|
|2|time|NO|Current server time|

**Example**

```text
211,25,2016-06-22T17:03:14.000+02:00
```

##### Create battery measurement (212)

Create a measurement of type **c8y_Battery**.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|battery value|YES| &nbsp;|
|2|time|NO|Current server time|

**Example**

```text
212,95,2016-06-22T17:03:14.000+02:00
```

#### Alarm templates (3xx)

##### Create CRITICAL alarm (301)

Create a CRITICAL alarm.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES| &nbsp;|
|2|text|NO|Alarm of type **alarmType** raised|
|3|time|NO|Current server time|

**Example**

```text
301,c8y_TemperatureAlarm
```

##### Create MAJOR alarm (302)

Create a MAJOR alarm.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES| &nbsp;|
|2|text|NO|Alarm of type **alarmType** raised|
|3|time|NO|Current server time|

**Example**

```text
302,c8y_TemperatureAlarm,"This is an alarm"
```

##### Create MINOR alarm (303)

Create a MINOR alarm.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES| &nbsp;|
|2|text|NO|Alarm of type **alarmType** raised|
|3|time|NO|Current server time|

**Example**

```text
303,c8y_TemperatureAlarm
```

##### Create WARNING alarm (304)

Create a WARNING alarm.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES| &nbsp;|
|2|text|NO|Alarm of type **alarmType** raised|
|3|time|NO|Current server time|

**Example**

```text
304,c8y_TemperatureAlarm,,2013-06-22T17:03:14.000+02:00
```

##### Update severity of existing alarm (305)

Change the severity of an existing alarm.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|
|2|severity|YES|

**Example**

```text
305,c8y_TemperatureAlarm,CRITICAL
```

##### Clear existing alarm (306)

Clear an existing alarm.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|

**Example**

```text
306,c8y_TemperatureAlarm
```

#### Event templates (4xx)

##### Create basic event (400)

Create an event of given type and text.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES|&nbsp;|
|2|text|YES|&nbsp;|
|3|time|NO|Current server time|

**Example**

```text
400,c8y_MyEvent,"Something was triggered"
```

##### Create location update event (401)

Create typical location update event containing **c8y_Position**.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO|&nbsp;|
|2|longitude|NO|&nbsp;|
|3|altitude|NO|&nbsp;|
|4|accuracy|NO|&nbsp;|
|5|time|NO|Current server time|

**Example**

```text
401,51.151977,6.95173,67
```

##### Create location update event with device update (402)

Create typical location update event containing **c8y_Position**. Additionally the device will be updated with the same **c8y_Position** fragment.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO|&nbsp;|
|2|longitude|NO|&nbsp;|
|3|altitude|NO|&nbsp;|
|4|accuracy|NO|&nbsp;|
|5|time|NO|Current server time|

**Example**

```text
402,51.151977,6.95173,67
```

#### Operation templates (5xx)

##### Get PENDING operations (500)

Trigger the sending of all PENDING operations for the agent.

**Example**

```text
500
```

##### Set operation to EXECUTING (501)

Set the oldest PENDING operation with given fragment to EXECUTING.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|

**Example**

```text
501,c8y_Restart
```

##### Set operation to FAILED (502)

Set the oldest EXECUTING operation with given fragment to FAILED.

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2|failureReason|NO|

**Example**

```text
502,c8y_Restart,"Could not restart"
```

##### Set operation to SUCCESSFUL (503)

Set the oldest EXECUTING operation with given fragment to SUCCESSFUL.

It enables the device to send additional parameters that trigger additional steps based on the type of operation sent as fragment (see Section [Updating operations](#updating-operations)).

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2...|parameters|NO|

**Example**

```text
503,c8y_Restart
```


### Subscribe templates

The client can receive the following templates when subscribing to <kbd>s/ds</kbd>.

#### Inventory templates (1xx)

##### Get children of device (106)

List all children of the device.

|Position|Parameter|
|:-------|:-------|
|1...|child|

**Example**

```text
106,child1,child2,child3
```

#### Operation templates (5xx)

All operation responses have the same base structure, leading with the message ID and followed by the ID of either the root device or a child which should handle the operation.

##### Restart (510)

Restart a device.

**Example**

```text
510,DeviceSerial
```

##### Command (511)

Run the command being sent in the operation.

|Position|Parameter|
|:-------|:-------|
|1|Command text|

**Example**

```text
511,DeviceSerial,execute this
```

##### Configuration (513)

Set the configuration being sent in the operation.

|Position|Parameter|
|:-------|:-------|
|1|configuration|

**Example**

```text
513,DeviceSerial,"val1=1\nval2=2"
```

##### Firmware (515)

Install the firmware from the url.

|Position|Parameter|
|:-------|:-------|
|1|firmware name|
|2|firmware version|
|3|url|

**Example**

```text
515,DeviceSerial,myFimrware,1.0,http://www.my.url
```

##### Software list (516)

Install the software sent in the operation.

|Position|Parameter|
|:-------|:-------|
|1...|List of 3 values per software|
|1.1|name|
|1.2|version|
|1.3|url|

**Example**

```text
516,DeviceSerial,softwareA,1.0,url1,softwareB,2.0,url2
```

##### Measurement request operation (517)

Send the measurements specified by the request name.

|Position|Parameter|
|:-------|:-------|
|1|request name|

**Example**

```text
517,DeviceSerial,LOGA
```

##### Relay (518)

Open or close the relay.

|Position|Parameter|
|:-------|:-------|
|1|Relay state|

**Example**

```text
518,DeviceSerial,OPEN
```

##### RelayArray (519)

Open or close the relays in the array.

|Position|Parameter|
|:-------|:-------|
|1...|List of relay state|

**Example**

```text
519,DeviceSerial,OPEN,CLOSE,CLOSE,OPEN
```

##### Upload configuration file (520)

The current configuration is uploaded from Cumulocity to the device.

**Example**

```text
520,DeviceSerial
```

##### Download configuration file (521)

Download a configuration file from the url.

|Position|Parameter|
|:-------|:-------|
|1|url|

**Example**

```text
521,DeviceSerial,http://www.my.url
```

##### Logfile request (522)

Upload a log file for the given parameters.

|Position|Parameter|
|:-------|:-------|
|1|Log file name|
|2|Start date|
|3|End date|
|4|Search text|
|5|Maximum lines|

**Example**

```text
522,DeviceSerial,logfileA,2013-06-22T17:03:14.000+02:00,2013-06-22T18:03:14.000+02:00,ERROR,1000
```

##### Communication mode (523)

Change the communication mode.

|Position|Parameter|
|:-------|:-------|
|1|mode|

**Example**

```text
523,DeviceSerial,SMS
```

### Updating operations

When using the template to set an operation to state SUCCESSFUL, it supports sending additional parameters to trigger additional calls on the server.
The table below shows the operations supporting this feature and what will be done with the parameters.

|Fragment|Parameters|Action triggered|
|:-------|:-------|:-------|
|c8y_Command|result|Result will be added to operation|
|c8y_RelayArray|relay states|Device object will be updated with the states|
|c8y_CommunicationMode|no parameter needed|Device object will be updated with the mode|
|c8y_LogfileRequest|file url|File url will be added to operation|
|c8y_DownloadConfigFile|(optional) timestamp|Device object will be updated with the ID of the configuration dump and the timestamp (or server time)|
