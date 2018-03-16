---
order: 150
title: Event Operation
layout: redirect
---

<span style="color: rgb(0,0,0);">An operation to send to a device.</span>  

### Examples

	send Operation("12345","deviceId", "PENDING", {"c8y_Meassage":{"text":"Hello Cumulocity device"}}) to Operation.CHANNEL;   
	 send Operation("12345","deviceId", "PENDING", {"c8y_RelayArray":["CLOSED","OPEN","CLOSED","OPEN"]}) to Operation.CHANNEL;   
	 send Operation("12345", "deviceId", "PENDING", {"c8y_Meassage":{"text":"Hello cumulocity"},"c8y_Relay":{"relayState":"CLOSED"}}) to Operation.CHANNEL;

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="CumulocityIoT"  <br> Channel to send these events to.

### Member Summary

|Date type|Member|
|:---|:---|
|string|**id** <br> Unique identifier for this operation.
|string|**source** <br> identifier of the managedObject to send the operation to.
|string|**status** <br> Status of the operation : one of SUCCESSFUL, FAILED, EXECUTING or PENDING.
|dictionary &#60;string, any>|**params** <br> Any extra parameters available on the device operation.

