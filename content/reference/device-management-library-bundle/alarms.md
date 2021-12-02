---
weight: 40
title: Alarms
layout: redirect
---

The **Alarm** tab is always shown for all devices. Its content is filled by alarm statuses reported by the device and other sources like analytics or smart rules. Devices raise alarms in Cumulocity IoT as they occur. Once the alarm status was resolved the device must also update the status of its created alarm to CLEARED.

### Raising alarms

A device may raise an alarm at any time. Typically alarms are used to communicate problem statuses un the devices environment.


<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1"> &#x1f4f1;&#10145; &#65039; raise alarm &#10145;&#65039; &#9729;&#65039;
</td>
</tr>
<tr>
<td style="text-align:center"><b>POST</b>
</td>
<td style="text-align:center"> <em>/alarm/alarms</em>
</td>
</tr>
</tbody>
</table>

```
{
   "source": {
       "id": "4801"
   },
   "type": "c8y_TemperatureAlarm",
   "text": "CPU temperature too high",
   "severity": "MAJOR",
   "time": "2021-10-07T12:00:00.000Z"
}
```

|Field|Data type|Mandatory|Details|
|----|----|----|----|
|source|Object|Yes|The ID of the device|
|type|String|Yes|Type of the alarm|
|text|String|Yes|Alarm text, describing the alarm status|
|severity|String|Yes|Alarm severity|
|time|String|Yes|Time of alarm occurrence|

In addition to the required parameters above, the device may also include custom fragments with more details about the alarm status into the alarm.

**SmartREST2 example**

There are several static SmartREST templates provided for basic alarm management for device. They can be found with message IDs between 301 and 304 for different severities.

`302,c8y_TemperatureAlarm,"CPU temperature too high"`
  * Clearing an alarm of a specified type <br>
    `306,c8y_TemperatureAlarm`

### Clearing alarms
When a device detects that the local alarm status was resolved it must clear the alarm. This is done by updating the alarm status to CLEARED.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1"> &#x1f4f1;&#10145; &#65039; update alarm &#10145;&#65039; &#9729;&#65039;
</td>
</tr>
<tr>
<td style="text-align:center"> <b>PUT</b> </td>
<td style="text-align:center"> <em>/alarm/alarms/&lt;alarm ID&gt;</em> </td>
</tr>
</tbody>
</table>

```
{
   "status": "CLEARED"
}
```


|Field|Data type|Mandatory|Details|
|----|----|----|----|
|Status|String|Yes|The new alarm status|


**SmartREST2 example**

The 306 static template is prepared to clear an active alarm of a specified type.

`306,c8y_TemperatureAlarm`
