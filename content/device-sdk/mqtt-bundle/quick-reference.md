---
title: MQTT quick reference
layout: redirect
weight: 11
---

### Quick reference

#### Connection

* <kbd>CONNECT d:1234:myDevice_10 acme/device_1234</kbd> \
  Connect the device with serial "1234" and default template myDevice_10 to tenant "acme" and user "device_1234"

#### Topics

Publish

* <kbd>PUBLISH s/us</kbd> - Send a static template
* <kbd>PUBLISH s/us/5678</kbd> - Send a static template as child "5678"
* <kbd>PUBLISH s/ud</kbd> - Send a message using the default template (myDevice_10)
* <kbd>PUBLISH s/ud/5678</kbd> - Same as above, but as child "5678"
* <kbd>PUBLISH s/uc/myCommon_10</kbd> - Send a message using myCommon_10 template
* <kbd>PUBLISH s/uc/myCommon_10/5678</kbd> - Same as above, but as child "5678"

Subscribe

* <kbd>SUBSCRIBE s/ds</kbd> - Receive static commands
* <kbd>SUBSCRIBE s/dd</kbd> - Receive commands using the default template (myDevice_10)
* <kbd>SUBSCRIBE s/dc/myCommon_10</kbd> - Receive commands using the myCommon_10 template
* <kbd>SUBSCRIBE s/e</kbd> - Receive error messages

#### Topic format

`<protocol>/<direction><type>[/<template>][/<child_id>]`

where:

* `<protocol>` can be <kbd>s</kbd> (persistent), <kbd>t</kbd> (transient), <kbd>q</kbd> (quiescent) and <kbd>c</kbd> (CEP), see [processing modes](#processing-mode) for more information
* `<direction>` can be <kbd>u</kbd> (upstream from the device), <kbd>d</kbd> (downstream to the device) or <kbd>e</kbd> (error)
* `<type>` can be <kbd>s</kbd> (static), <kbd>c</kbd> (custom, device-defined), <kbd>d</kbd> (default), <kbd>t</kbd> (template) or <kbd>cr</kbd> (credentials)

#### Device registration

* <kbd>CONNECT 1234 management/devicebootstrap</kbd>
* <kbd>SUBSCRIBE s/dcr</kbd>
* <kbd>PUBLISH s/ucr</kbd>
* <kbd>PUBLISH s/ucr</kbd>
* <kbd>...</kbd>
* <kbd>70,tenant,username,password<kbd>

#### Template registration

* <kbd>PUBLISH s/ut/myCommon_10</kbd>
* <kbd>10,999,POST,MEASUREMENT,,c8y_MyMeasurement;;c8y_MyMeasurement.M.value,NUMBER,...</kbd>
  10,msgId,api,method,response,type,time,custom1.path,custom1,type,custom1.value

#### Templates

To use the templates listed in [MQTT static templates](#mqtt-static-templates), you need to publish the messages to the topic <kbd>s/us</kbd> (<kbd>t/us</kbd> for transient processing of published content, <kbd>q/us</kbd> for quiescent processing of published content or <kbd>c/us</kbd> for CEP processing of published content. Refer to [SmartREST > Processing mode](/reference/smartrest#processing-mode) in the *Reference guide* for further information.

You need to subscribe to the topic <kbd>s/ds</kbd> to receive operations with the static templates.

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

<strong><a href="#measurement-templates">Measurement templates</a></strong>
+ <a href="#200">200,fragment,series,value[,unit,time]</a>
+ <a href="#210">210,rssi,ber[,time]</a>
+ <a href="#211">211,temperature[,time]</a>
+ <a href="#212">212,battery[,time]</a>

</td>
<td>

<strong><a href="#alarm-templates">Alarm templates</a></strong>
+ <a href="#301">301,criticalAlarmType[,text][,time]</a>
+ <a href="#302">302,majorAlarmType[,text][,time]</a>
+ <a href="#303">303,minorAlarmType[,text][,time]</a>
+ <a href="#304">304,warningAlarmType[,text][,time]</a>
+ <a href="#305">305,alarmType,newSeverity</a>
+ <a href="#306">306,alarmTypeToBeCleared</a>
+ <a href="#307">307,alarmType,fragmentToBeRemoved1,fragment2,...</a>

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
+ <a href="#530">530,serial,hostname,port,connectionKey</a>

<strong><a href="#subscribe-templates">Subscribe templates</a></strong>
+ <a href="#subscribe-templates">(click)</a>

</td>
</tr>
</tbody>
</table>
