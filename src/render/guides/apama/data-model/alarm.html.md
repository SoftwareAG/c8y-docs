---
order: 10
title: Event Alarm
layout: redirect
---

Alarm data. 

<span style="color: rgb(0,0,0);">Sent by the transport when a device or other application creates an alarm, or updates an alarm. Requires SubscribeMeasurements or configuration property subscribeToAllMeasurements. Sent to the cumulocity.measurements channel.</span> 

### Examples

	Alarm("22","c8y_UnavailabilityAlarm","12669915",1464365565.661,"No communication with device since 2016-05-27T18:11:23.886+02:00","ACKNOWLEDGED","MAJOR",1,{})   
	 Alarm("11","com_cumulocity_events_BatteryWarning","1122",1464365565.661,"Low battery level","ACTIVE", "MINOR", 1, {"history":{}}) 
 

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="CumulocityIoT" <br> The channel for sending updates/ new alarms to.


### Member Summary

|Date type|Member|
|:---|:---|
|string|**id** <br> Unique identifier for this alarm.
|string|**type** <br> The type of the Cumulocity event.
|string|**source** <br> Identifier of the source of the event.
|float|**time** <br> Timestamp of the event.
|string|**text** <br> Text or message of the alarm.
|string|**status** <br> The status of the alarm: ACTIVE, ACKNOWLEDGED or CLEARED
|string|**severity** <br> The severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING. Must be upper-case.
|integer|**count** <br> The number of times this alarm has been sent.
|dictionary &#60;string, any>|**params** <br> Any other properties available on the alarm.

