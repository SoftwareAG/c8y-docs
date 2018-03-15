---
order: 60
title: Event FindEvent
layout: redirect
---

<span style="color: rgb(0,0,0);">Find an event, searching on source, status and type.</span>  

<span style="color: rgb(0,0,0);">EPL sends to the CHANNEL, and transport will respond with 0+ FindEventResponse and then 1 FindEventResponseAck on FindEventResponse.CHANNEL channel.</span>

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="CumulocityIoT"  <br> Channel to send these events to.

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Unique request identifier.
|dictionary &#60;string, string>|**params** <br> Additional request parameters. 'source', 'status' and 'type' can be provided as additional filter parameters.


