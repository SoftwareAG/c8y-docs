---
order: 20
title: Event Event
layout: redirect
---

<span style="color: rgb(0,0,0);">Event data.</span>  

<span style="color: rgb(0,0,0);">Sent by the transport when a device or other application creates an Event, or updates an Event. Requires SubscribeMeasurements or configuration property subscribeToAllMeasurements. Sent to the cumulocity.measurements channel.</span>  

### Examples

	Event("21","c8y_EntranceEvent","12346082",1464364483.396,"Entrance event triggered.",{"distance":any(float,317)})   
	 Alarm("22","com_cumulocity_events_TamperEvent","12345",1464364483.396,"Tamper sensor triggered",{"history":{}})


### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="CumulocityIoT" <br> The channel for sending updates/ new events to

### Member Summary

|Date type|Member|
|:---|:---|
|string|**id** <br> Unique identifier for this event.
|string|**type** <br> The type of the Cumulocity event.
|string|**source** <br> Identifier of the source of the event.
|float|**time** <br> Timestamp of the event.
|string|**text** <br> Text or message of the event.
|dictionary &#60;string, any>|**params** <br> Any other properties available on the event.


