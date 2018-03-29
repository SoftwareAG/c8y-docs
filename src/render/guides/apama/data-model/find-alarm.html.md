---
order: 30
title: Event FindAlarm
layout: redirect
---

<span style="color: rgb(0,0,0);">Find an alarm, searching on source, status and type.</span>  

<span style="color: rgb(0,0,0);">EPL sends to the CHANNEL, and transport will respond with 0+ FindAlarmResponse and then 1 FindAlarmResponseAck on FindAlarmResponse.CHANNEL channel.</span>

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="CumulocityIoT" <br> The channel to send these events to

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Unique request identifier.
|dictionary &#60;string, string>|**params** <br> Additional request parameters. 'source', 'status' and 'type' can be provided as additional filter parameters.

