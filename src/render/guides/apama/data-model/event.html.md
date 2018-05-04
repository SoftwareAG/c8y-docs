---
order: 20
title: Event Event
layout: redirect
---

Sent by the transport when a device or other application creates an Event, or updates an Event. 

### Examples

	Event("21","c8y_EntranceEvent","10801",1464364483.396,"Entrance event triggered.",{"distance":any(float,317.0)})


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


