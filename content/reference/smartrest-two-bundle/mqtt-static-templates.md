---
title: MQTT Static templates
layout: redirect
weight: 50
---

### Overview

To ease device integration {{< product-c8y-iot >}} already supports a number of static templates that can be used by any client without the need to create your own templates. These templates focus on the most commonly used messages for device management purposes.

To use the templates listed below, you must publish the messages to the topic <kbd>s/us</kbd> (<kbd>t/us</kbd> for transient processing of published content, <kbd>q/us</kbd> for quiescent processing of published content or <kbd>c/us</kbd> for CEP processing of published content. Refer to [SmartREST 1.0 > The protocol > Processing mode](/reference/smartrest-one#processing-mode) in the *Reference guide* for further information.

You must subscribe to the topic <kbd>s/ds</kbd> to receive operations with the static templates.

#### Templates quick reference

Click the commands below to see more information on the respective template.
If a parameter is in square brackets, it is optional.

<table>
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<tbody>
<tr>
<td>

<strong><a href="#inventory-templates">Inventory templates</a></strong>
+ <a href="#100">100,createdDeviceName,deviceType</a>
+ <a href="#101">101,createdChildId,childName,childType</a>
+ <a href="#102">102,serviceExternalId,serviceType,serviceName,serviceStatus</a>
+ <a href="#104">104,serviceStatus</a>
+ <a href="#105">105 (Get children, reply: 106,child1,child2,…)</a>
+ <a href="#107">107,fragmenttoBeUninstalled1,fragment2,...</a>
+ <a href="#110">110,serialNumber,hardwareModel,revision</a>
+ <a href="#111">111,IMEI,ICCID,IMSI,MCC,MNC,LAC,cellId</a>
+ <a href="#112">112,latitude,longitude,altitude,accuracy</a>
+ <a href="#113">113,&quot;configProp1=val1\nprop2=val2\n…&quot;</a>
+ <a href="#114">114,supportedOperation1,operation2,…</a>
+ <a href="#115">115,currentFirmwareName,version,url</a>
+ <a href="#116">116,currentSoftwareName1,version1,url1,name2,…</a>
+ <a href="#117">117,requiredInterval</a>
+ <a href="#118">118,supportedLog1,log2,...</a>
+ <a href="#119">119,supportedConfiguration1,config2,...</a>
+ <a href="#120">120,configType,url,filename[,time]</a>
+ <a href="#121">121,profileExecuted,profileID</a>
+ <a href="#122">122,agentName,agentVersion,agentURL,agentMaintainer</a>

<strong><a href="#measurement-templates">Measurement templates</a></strong>
+ <a href="#200">200,fragment,series,value[,unit,time]</a>
+ <a href="#210">210,rssi,ber[,time]</a>
+ <a href="#211">211,temperature[,time]</a>
+ <a href="#212">212,battery[,time]</a>

<strong><a href="#alarm-templates">Alarm templates</a></strong>
+ <a href="#301">301,criticalAlarmType[,text][,time]</a>
+ <a href="#302">302,majorAlarmType[,text][,time]</a>
+ <a href="#303">303,minorAlarmType[,text][,time]</a>
+ <a href="#304">304,warningAlarmType[,text][,time]</a>
+ <a href="#305">305,alarmType,newSeverity</a>
+ <a href="#306">306,alarmTypeToBeCleared</a>
+ <a href="#307">307,alarmType,fragmentToBeRemoved1,fragment2,...</a>

</td>
<td>

<strong><a href="#event-templates">Event templates</a></strong>
+ <a href="#400">400,eventType,text[,time]</a>
+ <a href="#401">401,latitude,longitude,altitude,accuracy[,time]</a>
+ <a href="#402">402,latitude,longitude,altitude,accuracy[,time] (incl. inv. update)</a>
+ <a href="#407">407,eventType,fragmentToBeRemoved1,fragment2,...</a>

<strong><a href="#operation-templates">Operation templates</a></strong>
+ <a href="#500">500 (get pending)</a>
+ <a href="#501">501,typeToSetToExecuting</a>
+ <a href="#502">502,typeToSetToFailed,failureReason</a>
+ <a href="#503">503,typeToSetToSuccessful,parameters</a>
+ <a href="#510">510,serial (restart)</a>
+ <a href="#511">511,serial,commandToExecute</a>
+ <a href="#513">513,serial,configurationText</a>
+ <a href="#515">515,serial,firmwareToBeInstalled,version,url</a>
+ <a href="#516">516,serial,softwareToBeInstalled1,version1,url1,sw2,ver2,url2,...</a>
+ <a href="#517">517,serial,measurementToBeSent</a>
+ <a href="#518">518,serial,relayStatusToBeSet [OPEN/CLOSED]</a>
+ <a href="#519">519,serial,relay1Status,relay2Status,...</a>
+ <a href="#520">520,serial (upload your current configuration)</a>
+ <a href="#521">521,serial,url (download configuration)</a>
+ <a href="#522">522,serial,logFileToBeSend,start,stop,searchText,maxLines</a>
+ <a href="#523">523,serial,communicationMode (SMS/IP)</a>
+ <a href="#524">524,serial,url,configType</a>
+ <a href="#525">525,serial,currentFirmwareName,version,url,dependency</a>
+ <a href="#526">526,serial,configType</a>
+ <a href="#527">527,serial,firmwareMarker,name,version,url,isPatch,dependency,softwareMarker,name,version,url,action,configurationMarker,url,type</a>
+ <a href="#528">528,serial,softwareToBeUpdated1,version1,url1,action1,sw2,ver2,url2,action2,...</a>
+ <a href="#530">530,serial,hostname,port,connectionKey</a>

</td>
</tr>
</tbody>
</table>

The client can receive the following templates when subscribing to <kbd>s/ds</kbd>.

<table>
<colgroup>
<col style="width: 100%;">
</colgroup>
<tbody>
<tr>
<td>

**[Inventory templates](#subscribe-inventory)**

+ [106,child1,child2,…](#106)

**[Operation templates](#subscribe-operations)**

+ [510,serial (restart)](#510)
+ [511,serial,commandToExecute](#511)
+ [513,serial,configurationText](#513)
+ [515,serial,firmwareToBeInstalled,version,url](#515)
+ [516,serial,softwareToBeInstalled1,version1,url1,sw2,ver2,url2,...](#516)
+ [517,serial,measurementToBeSent](#517)
+ [518,serial,relayStatusToBeSet [OPEN/CLOSED]](#518)
+ [519,serial,relay1Status,relay2Status,...](#519)
+ [520,serial (upload your current configuration)](#520)
+ [521,serial,url (download configuration)](#521)
+ [522,serial,logFileToBeSend,start,stop,searchText,maxLines](#522)
+ [523,serial,communicationMode (SMS/IP)](#523)
+ [524,serial,url,configType](#524)
+ [525,serial,currentFirmwareName,version,url,dependency](#525)
+ [526,serial,configType](#526)
+ [527,serial,firmwareMarker,name,version,url,isPatch,dependency,softwareMarker,name,version,url,action,configurationMarker,url,type](#527)
+ [528,serial,softwareToBeUpdated1,version1,url1,action1,sw2,ver2,url2,action2,...](#528)
+ [530,serial,hostname,port,connectionKey](#530)

</td>
</tr>
</tbody>
</table>

### Automatic device creation

The topic for static templates supports an automatic creation of devices. Whenever there is no child associated with your MQTT ClientID and you send data, {{< product-c8y-iot >}} will automatically create a device for the MQTT ClientID. If you want to create the device on your own, your first message must be the device creation. In this case {{< product-c8y-iot >}} will create the device from the template.

The automatic creation of devices is also supported for 1st level child devices. For child devices on a deeper level, you must use the template for creating a child device by sending it to the topic of the child device under the one you want to place the new child.


### Handling non-mandatory parameters

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

The following templates can be used to publish data on the topics <kbd>s/us</kbd> as well as <kbd>t/us</kbd>. Refer to [SmartREST 1.0 > The protocol > Processing mode](/reference/smartrest-one#processing-mode) in the *Reference guide* for more information about the <kbd>t/</kbd> topic for transient data processing.

<a name="inventory-templates"></a>
#### Inventory templates (1xx)

<a name="100"></a>
##### Device creation (100)

Create a new device for the serial number in the inventory if not yet existing. An externalId for the device with type `c8y_Serial` and the device identifier of the MQTT clientId as value will be created.

|Position|Parameter  |Mandatory|Type  |Default value|
|:-------|:----------|:--------|:-----|:------------|
|1|device name|NO|String|MQTT Device &lt;serialNumber&gt;|
|2|device type|NO|String|c8y_MQTTDevice|

**Example**

```text
100,myDevice,myType
```

<a name="101"></a>
##### Child device creation (101)

Create a new child device for the current device. The newly created object will be added as child device. Additionally, an externaId for the child will be created with type `c8y_Serial` and the value a combination of the serial of the root device and the unique child ID.

|Position|Parameter|Mandatory|Type    |Default value|
|:-------|:--------|:--------|:-------|:------------|
|1|unique child ID|YES|String| &nbsp; |
|2|device name|NO|String|MQTT Device &lt;serialNumber&gt;|
|3|device type|NO|String|c8y_MQTTChildDevice|

**Example**

```text
101,uniqueChildId,myChildDevice,myChildType
```

<a name="102"></a>
##### Service creation (102)

Create a new software service for given device.

|Position|Parameter  |Mandatory|Type  |
|:-------|:----------|:--------|:-----|
|1|service name|YES|String|
|2|service unique external id|YES|String|
|3|service type|YES|String|
|4|service status|YES|String|

**Example**

```text
102,myDevice_MongoDb,systemd,MongoDb,up
```

<a name="104"></a>
##### Service status update (104)

Set a status for given software service.

|Position|Parameter  |Mandatory|Type  |
|:-------|:----------|:--------|:-----|
|1|service status|YES|String|

**Example**

```text
104,up
```

<a name="105"></a>
##### Get child devices (105)

Trigger the sending of child devices of the device.

**Example**

```text
105
```

<a name="107"></a>
##### Clear device's fragment (107)

Remove one or more fragments from a device.

|Position|Parameter|Mandatory|Type |
|:-------|:--------|:--------|:----|
|1...|fragmentName|YES|String|

**Example**

```text
107,c8y_Position,c8y_Configuration
```

<a name="110"></a>
##### Configure Hardware (110)

Update the hardware properties of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|serialNumber|NO|String|
|2|model|NO|String|
|3|revision|NO|String|

**Example**

```text
110,1234567890,myModel,1.2.3
```

<a name="111"></a>
##### Configure Mobile (111)

Update the mobile properties of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:----|
|1|imei|NO|String|
|2|iccid|NO|String|
|3|imsi|NO|String|
|4|mcc|NO|String|
|5|mnc|NO|String|
|6|lac|NO|String|
|7|cellId|NO|String|

**Example**

```text
111,1234567890,,54353
```

<a name="112"></a>
##### Configure Position (112)

Update the position properties of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|latitude|NO|Number|
|2|longitude|NO|Number|
|3|altitude|NO|Number|
|4|accuracy|NO|Integer|

**Example**

```text
112,50.323423,6.423423
```

<a name="113"></a>
##### Set Configuration (113)

Update the configuration properties of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|configuration|NO|String|

Example

```text
113,"val1=1\nval2=2"
```

<a name="114"></a>
##### Set supported operations (114)

Set the supported operations of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1...|List of supported operations|NO|String|

**Example**

```text
114,c8y_Restart,c8y_Configuration,c8y_SoftwareList
```

{{< c8y-admon-info >}}
If you want to remove an item from the supported operations list, send a new 114 request with the updated list, for example, `114, c8y_Restart,c8y_Configuration` in order to remove `c8y_SoftwareList` after the request from the example above.
{{< /c8y-admon-info >}}

<a name="115"></a>
##### Set firmware (115)

Set the firmware installed on the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|name|NO|String|
|2|version|NO|String|
|3|url|NO|String|

**Example**

```text
115,firmwareName,firmwareVersion,firmwareUrl
```

<a name="116"></a>
##### Set software list (116)

Set the list of software installed on the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1...|List of 3 values per software|NO|(n/a)|
|1.1|name|NO|String|
|1.2|version|NO|String|
|1.3|url|NO|String|

**Example**

```text
116,software1,version1,url1,software2,,url2,software3,version3
```

<a name="117"></a>
##### Set required availability (117)

Set the required interval for availability monitoring as an integer value representing minutes.
For more information, see *c8y_RequiredAvailability* in [Device management library > Device availability](/reference/device-management-library/device-availability) in the *Reference guide*.
This will only set the value if it does not exist. Values entered, for example, through the UI, are not overwritten.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|Required interval|NO|Integer|

**Example**

```text
117,60
```

<a name="118"></a>
##### Set supported logs (118)

Set the supported logs of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1...|List of supported logs|NO|String|

**Example**

```text
118,ntcagent,dmesg,logread
```

<a name="119"></a>
##### Set supported configurations (119)

Set the supported configurations of the device.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1...|List of supported configurations|NO|String|

**Example**

```text
119,modbus,system
```

<a name="120"></a>
##### Set currently installed configuration (120)

Set currently installed configuration of the device.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|Configuration type|YES|String| &nbsp;|
|2|Configuration file download URL|YES|String| &nbsp;|
|3|File name|NO|String|Configuration type|
|4|Date and time when the configuration was applied|NO|Date|Current date and time|

**Example**

```text
120,myType,http://www.my.url,config.bin,2020-07-22T17:03:14.000+02:00
```

<a name="121"></a>
##### Set device profile that is being applied (121)

Set device profile that is being applied to the device.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|Profile executed|YES|String| &nbsp;|
|2|Profile ID|NO|String|Profile ID from the oldest EXECUTING device profile operation|

**Example**

```text
121,true,8473
```

<a name="122"></a>
##### Set device agent information (122)

Allows a device to provide information about the agent running on it.

| Position | Parameter              | Mandatory | Type   | Default value |
|:---------|:-----------------------|:----------|:-------|:--------------|
| 1        | Name of the agent      | YES       | String |               |
| 2        | Version of the agent   | YES       | String |               |
| 3        | The agent URL          | NO        | String |               |
| 4        | Maintainer of the agent| YES       | String |               |

**Example**

```text
122,thin-edge.io,0.6,https://thin-edge.io,Software AG
```

<a name="measurement-templates"></a>
#### Measurement templates (2xx)

<a name="200"></a>
##### Create custom measurement (200)

Create a measurement with a given fragment and series.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|fragment|YES|String| &nbsp;|
|2|series|YES|String| &nbsp;|
|3|value|YES|String| &nbsp;|
|4|unit|NO|String| &nbsp;|
|5|time|NO|Date|Current server time|

**Example**

```text
200,c8y_Temperature,T,25
```

<a name="210"></a>
##### Create signal strength measurement (210)

Create a measurement of type `c8y_SignalStrength`.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|rssi value|YES, if 2 not set|Number| &nbsp;|
|2|ber value|YES, if 1 not set|Number| &nbsp;|
|3|time|NO|Date|Current server time|

**Example**

```text
210,-90,23,2016-06-22T17:03:14.000+02:00
```

<a name="211"></a>
##### Create temperature measurement (211)

Create a measurement of type `c8y_TemperatureMeasurement`.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|temperature value|YES|Number| &nbsp;|
|2|time|NO|Date|Current server time|

**Example**

```text
211,25,2016-06-22T17:03:14.000+02:00
```

<a name="212"></a>
##### Create battery measurement (212)

Create a measurement of type `c8y_Battery`.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|battery value|YES|Number| &nbsp;|
|2|time|NO|Date|Current server time|

**Example**

```text
212,95,2016-06-22T17:03:14.000+02:00
```

<a name="alarm-templates"></a>
#### Alarm templates (3xx)

<a name="301"></a>
##### Create CRITICAL alarm (301)

Create a CRITICAL alarm.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|type|YES|String| &nbsp;|
|2|text|NO|String|Alarm of type **alarmType** raised|
|3|time|NO|Date|Current server time|

**Example**

```text
301,c8y_TemperatureAlarm
```

<a name="302"></a>
##### Create MAJOR alarm (302)

Create a MAJOR alarm.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|type|YES|String| &nbsp;|
|2|text|NO|String|Alarm of type **alarmType** raised|
|3|time|NO|Date|Current server time|

**Example**

```text
302,c8y_TemperatureAlarm,"This is an alarm"
```

<a name="303"></a>
##### Create MINOR alarm (303)

Create a MINOR alarm.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|type|YES|String| &nbsp;|
|2|text|NO|String|Alarm of type **alarmType** raised|
|3|time|NO|Date|Current server time|

**Example**

```text
303,c8y_TemperatureAlarm
```

<a name="304"></a>
##### Create WARNING alarm (304)

Create a WARNING alarm.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|type|YES|String| &nbsp;|
|2|text|NO|String|Alarm of type **alarmType** raised|
|3|time|NO|Date|Current server time|

**Example**

```text
304,c8y_TemperatureAlarm,,2013-06-22T17:03:14.000+02:00
```

<a name="305"></a>
##### Update severity of existing alarm (305)

Change the severity of an existing alarm.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|type|YES|String|
|2|severity|YES|String|

**Example**

```text
305,c8y_TemperatureAlarm,CRITICAL
```

<a name="306"></a>
##### Clear existing alarm (306)

Clear an existing alarm.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|type|YES|String|

**Example**

```text
306,c8y_TemperatureAlarm
```

<a name="307"></a>
##### Clear alarm's fragment (307)

Remove one or more fragments from an alarm of a specific type.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|alarmType|YES|String|
|2...|fragmentName|YES|String|

**Example**

```text
307,c8y_TemperatureAlarm,c8y_Position,c8y_Configuration
```

<a name="event-templates"></a>
#### Event templates (4xx)

<a name="400"></a>
##### Create basic event (400)

Create an event of given type and text.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|type|YES|String|&nbsp;|
|2|text|YES|String|&nbsp;|
|3|time|NO|Date|Current server time|

**Example**

```text
400,c8y_MyEvent,"Something was triggered"
```

<a name="401"></a>
##### Create location update event (401)

Create typical location update event containing `c8y_Position`.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|latitude|NO|Number|&nbsp;|
|2|longitude|NO|Number|&nbsp;|
|3|altitude|NO|Number|&nbsp;|
|4|accuracy|NO|Number|&nbsp;|
|5|time|NO|Date|Current server time|

**Example**

```text
401,51.151977,6.95173,67
```

<a name="402"></a>
##### Create location update event with device update (402)

Create typical location update event containing `c8y_Position`. Additionally the device will be updated with the same `c8y_Position` fragment.

|Position|Parameter|Mandatory|Type|Default value|
|:-------|:-------|:-------|:-------|:---|
|1|latitude|NO|Number|&nbsp;|
|2|longitude|NO|Number|&nbsp;|
|3|altitude|NO|Number|&nbsp;|
|4|accuracy|NO|Number|&nbsp;|
|5|time|NO|Date|Current server time|

**Example**

```text
402,51.151977,6.95173,67
```

<a name="407"></a>
##### Clear event's fragment (407)

Remove one or more fragments from an event of a specific type.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|eventType|YES|String|
|2...|fragmentName|NO|String|

**Example**

```text
407,c8y_MyEvent,c8y_Position,c8y_Configuration
```

<a name="operation-templates"></a>
#### Operation templates (5xx)

<a name="500"></a>
##### Get PENDING operations (500)

Trigger the sending of all PENDING operations for the agent.

**Example**

```text
500
```

<a name="501"></a>
##### Set operation to EXECUTING (501)

Set the oldest PENDING operation with given fragment to EXECUTING.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|fragment|YES|String|

**Example**

```text
501,c8y_Restart
```

<a name="502"></a>
##### Set operation to FAILED (502)

Set the oldest EXECUTING operation with given fragment to FAILED.

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|fragment|YES|String|
|2|failureReason|NO|String|

**Example**

```text
502,c8y_Restart,"Could not restart"
```

<a name="503"></a>
##### Set operation to SUCCESSFUL (503)

Set the oldest EXECUTING operation with given fragment to SUCCESSFUL.

It enables the device to send additional parameters that trigger additional steps based on the type of operation sent as fragment (see Section [Updating operations](#updating-operations)).

|Position|Parameter|Mandatory|Type|
|:-------|:-------|:-------|:---|
|1|fragment|YES|String|
|2...|parameters|NO|String|

**Example**

```text
503,c8y_Restart
```


### Subscribe templates

#### Inventory templates (1xx)

<a name="106"></a>
##### Get children of device (106)

List all children of the device.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1...|child|String|

**Example**

```text
106,child1,child2,child3
```

<a name="subscribe-operations"></a>
#### Operation templates (5xx)

All operation responses have the same base structure, leading with the message ID and followed by the ID of either the root device or a child which should handle the operation.

<a name="510"></a>
##### Restart (510)

Restart a device.

**Example**

```text
510,DeviceSerial
```

<a name="511"></a>
##### Command (511)

Run the command being sent in the operation.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|Command text|String|

**Example**

```text
511,DeviceSerial,execute this
```

<a name="513"></a>
##### Configuration (513)

Set the configuration being sent in the operation.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|configuration|String|

**Example**

```text
513,DeviceSerial,"val1=1\nval2=2"
```

<a name="515"></a>
##### Firmware (515)

Install the firmware from the url.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|firmware name|String|
|2|firmware version|String|
|3|url|String|

**Example**

```text
515,DeviceSerial,myFimrware,1.0,http://www.my.url
```

<a name="516"></a>
##### Software list (516)

Install the software sent in the operation.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1...|List of 3 values per software|(n/a)|
|1.1|name|String|
|1.2|version|String|
|1.3|url|String|

**Example**

```text
516,DeviceSerial,softwareA,1.0,url1,softwareB,2.0,url2
```

<a name="517"></a>
##### Measurement request operation (517)

Send the measurements specified by the request name.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|request name|String|

**Example**

```text
517,DeviceSerial,LOGA
```

<a name="518"></a>
##### Relay (518)

Open or close the relay.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|Relay state|String|

**Example**

```text
518,DeviceSerial,OPEN
```

<a name="519"></a>
##### RelayArray (519)

Open or close the relays in the array.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1...|List of relay state|String|

**Example**

```text
519,DeviceSerial,OPEN,CLOSE,CLOSE,OPEN
```

<a name="520"></a>
##### Upload configuration file (520)

The current configuration is uploaded from {{< product-c8y-iot >}} to the device.

**Example**

```text
520,DeviceSerial
```

<a name="521"></a>
##### Download configuration file (521)

Download a configuration file from the URL.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|url|String|

**Example**

```text
521,DeviceSerial,http://www.my.url
```

<a name="522"></a>
##### Logfile request (522)

Upload a log file for the given parameters.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|Log file name|String|
|2|Start date|Date|
|3|End date|Date|
|4|Search text|String|
|5|Maximum lines|Integer|

**Example**

```text
522,DeviceSerial,logfileA,2013-06-22T17:03:14.000+02:00,2013-06-22T18:03:14.000+02:00,ERROR,1000
```

<a name="523"></a>
##### Communication mode (523)

Change the communication mode.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|mode|String|

**Example**

```text
523,DeviceSerial,SMS
```

<a name="524"></a>
##### Download configuration file with type (524)

Download a configuration file from the URL with type.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|URL|String|
|2|configuration type|String|

**Example**

```text
524,DeviceSerial,http://www.my.url,type
```

<a name="525"></a>
##### Firmware from patch (525)

Install the firmware from the patch.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|firmware name|String|
|2|firmware version|String|
|3|URL|String|
|4|dependency|String|

**Example**

```text
525,DeviceSerial,firmwareName,1.0,http://www.my.url,dependency
```

<a name="526"></a>
##### Upload configuration file with type (526)

Configuration is uploaded from {{< product-c8y-iot >}} to the device with type.

Position|Parameter|Type|
|:-------|:-------|:---|
|1|configuration type|String|

**Example**

```text
526,DeviceSerial,type
```

<a name="527"></a>
##### Set device profiles (527)

Set the device profiles

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|firmware marker|(n/a)|
|1...| 5 values of firmware|(n/a)|
|1.1|firmware name|String|
|1.2|firmware version|String|
|1.3|firmware URL|String|
|1.4|firmware isPatch|String|
|1.5|firmware dependency|String|
|2|software marker|(n/a)|
|2...|List of 4 values per software|(n/a)|
|2.1|software name|String|
|2.2|software version|String|
|2.3|software URL|String|
|2.4|software action|String|
|3|configuration marker|(n/a)|
|3...|List of 2 values per configuration|(n/a)|
|3.1|configuration URL|String|
|3.2|configuration type|String|

**Example**

```text
527,DeviceSerial,$FW,firmwareName,1.0,http://www.my.url,true,dependency,$SW,softwareA,1.0,http://www.my.url1,action1,softwareB,2.0,http://www.my.url2,action2,$CONF,http://www.my.url1,type1,http://www.my.url2,type2
```

<a name="528"></a>
##### Update Software (528)

Update the software installed on the device.


|Position|Parameter|Type|
|:-------|:-------|:---|
|1...|List of 4 values per software|(n/a)|
|1.1|name|String|
|1.2|version|String|
|1.3|URL|String|
|1.4|action|String|

**Example**

```text
528,DeviceSerial,softwareA,1.0,url1,install,softwareB,2.0,url2,install
```

{{< c8y-admon-info >}}
The action can either be `install` or `delete`.

When the `install` action is received, the device agent ensures that the software will appear in the `c8y_SoftwareList` fragment of the device after it has completed the installation.
The agent will also determine if there is a previous version of the software and replace it with the new version, resulting in an update.

When the `delete` action is received, the device agent ensures that the software will no longer appear in the `c8y_SoftwareList` fragment of the device after the software update operation has completed.
{{< /c8y-admon-info >}}

<a name="530"></a>
##### Cloud Remote Access Connect (530)

Establish tunneling by Remote Access device agent.

|Position|Parameter|Type|
|:-------|:-------|:---|
|1|hostname|String|
|2|port|Integer|
|3|connection key|String|

**Example**

```text
530,DeviceSerial,10.0.0.67,22,eb5e9d13-1caa-486b-bdda-130ca0d87df8
```

### Updating operations

When using the template to set an operation to status SUCCESSFUL, it supports sending additional parameters to trigger additional calls on the server.
The table below shows the operations supporting this feature and what will be done with the parameters.

<table>
<colgroup>
  <col width="25%">
  <col width="20%">
  <col width="55%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Fragment</th>
<th style="text-align:left">Parameters</th>
<th style="text-align:left">Action triggered</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">c8y_Command</td>
<td style="text-align:left">result</td>
<td style="text-align:left">Result will be added to operation</td>
</tr>
<tr>
<td style="text-align:left">c8y_RelayArray</td>
<td style="text-align:left">relay states</td>
<td style="text-align:left">Device object will be updated with the states</td>
</tr>
<tr>
<td style="text-align:left">c8y_CommunicationMode</td>
<td style="text-align:left">no parameter needed</td>
<td style="text-align:left">Device object will be updated with the mode</td>
</tr>
<tr>
<td style="text-align:left">c8y_LogfileRequest</td>
<td style="text-align:left">file url</td>
<td style="text-align:left">File url will be added to operation</td>
</tr>
<tr>
<td style="text-align:left">c8y_DownloadConfigFile</td>
<td style="text-align:left">(optional) timestamp</td>
<td style="text-align:left">Device object will be updated with the ID of the configuration dump and the timestamp (or server time)</td>
</tr>
</tbody>
</table>
