---
weight: 30
title: Alarms
layout: redirect
---

The **Alarm** tab is always shown for all devices. Its content is filled by alarm statuses reported by the device and other sources like analytics or smart rules. Devices raise alarms in {{< product-c8y-iot >}} as they occur. Once the alarm status was resolved the device must also update the status of its created alarm to CLEARED.

### Raising alarms

A device may raise an alarm at any time. Typically alarms are used to communicate problem statuses in the devices environment.

```http
POST /alarm/alarms
```
```json
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

**SmartREST example**

There are several static SmartREST templates provided for basic alarm management for device. They can be found with message IDs between 301 and 304 for different severities:

`302,c8y_TemperatureAlarm,"CPU temperature too high"`
  * Clearing an alarm of a specified type <br>
    `306,c8y_TemperatureAlarm`

### Clearing alarms
When a device detects that the local alarm status was resolved it must clear the alarm. This is done by updating the alarm status to CLEARED.

```http
PUT /alarm/alarms/<alarm ID>
```
```json
{
   "status": "CLEARED"
}
```


|Field|Data type|Mandatory|Details|
|----|----|----|----|
|Status|String|Yes|The new alarm status|


**SmartREST example**

The 306 static template is prepared to clear an active alarm of a specified type:

`306,c8y_TemperatureAlarm`
