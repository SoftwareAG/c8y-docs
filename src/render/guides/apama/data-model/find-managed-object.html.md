---
order: 90
title: Event FindManagedObject
layout: redirect
---

<span style="color: rgb(0,0,0);">Find ManagedObject (that is, devices).</span>  

<span style="color: rgb(0,0,0);">EPL sends to the CHANNEL, and transport will respond with 0+ Device and then 1 FindManagedObjectResponse on FindManagedObjectResponse.CHANNEL channel.</span>

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="CumulocityIoT"  <br> Channel to send these events to.

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Unique request identifier.
|string|**deviceId** <br> The unique identifier for this specific device.
|dictionary &#60;string, string>|**params** <br> Additional request parameters.  

