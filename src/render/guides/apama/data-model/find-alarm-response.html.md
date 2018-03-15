---
order: 40
title: Event FindAlarmResponse
layout: redirect
---

<span style="color: rgb(0,0,0);">An alarm has been found.</span>

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="cumulocity.findalarm.response"  <br> The channel to which FindAlarmResponse events are sent from the transport.

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Request identifier.
|string|**id** <br> Alarm identifier.
|com.apama.cumulocity.Alarm|alarm