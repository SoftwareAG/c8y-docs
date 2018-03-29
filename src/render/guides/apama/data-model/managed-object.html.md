---
order: 120
title: Event ManagedObject
layout: redirect
---

## Event ManagedObject

<span style="color: rgb(0,0,0);">Description of a device or other managedObject.</span>  

<span style="color: rgb(0,0,0);">Sent on startup or in response to a RequestAllDevices event, or if a new managedObject is detected (and configuration property subscribeToDevices is enabled). 


### Example

	ManagedObject("43026768","com_ublox_C027_REV-A","Mbed Test Device",["c8y_Relay","c8y_Configuration","c8y_Message"],[],[],[],{"alt":610.2,"lat":17.426479,"lng":78.33123},{,"c8y_Availability":any(dictionary,{any(string,"status"):any(string,"UNAVAILABLE")}), ,"c8y_Hardware":any(dictionary,{any(string,"model"):any(string,"Ublox C027"),any(string,"revision"):any(string,"1"),any(string,"serialNumber"):any(string,"352648069564516")}),"c8y_IsDevice":any(dictionary,{}),"c8y_Mobile":any(dictionary,{any(string,"cellId"):any(string,"14D80CD"),any(string,"iccid"):any(string,"89914905900016774658"),any(string,"imei"):any(string,"352648069564516")}),"c8y_MotionTracking":any(dictionary,{any(string,"active"):any(boolean,true),any(string,"interval"):any(integer,0)}),"c8y_RequiredAvailability":any(dictionary,{any(string,"responseInterval"):any(integer,20)}),"com_cumulocity_model_Agent":any(dictionary,{}),"owner":any(string,"device_352648069564516")})
	

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="cumulocity.devices"  <br> The channel to which managedObject events are sent from the transport.

### Member Summary

|Date type|Member|
|:---|:---|
|string|**id** <br> Unique identifier for this device.
|string|**type** <br> The type of the device.
|string|**name** <br> The name of this managedObject. Note: This does not have to be a unique value.
|sequence&#60;string>|**supportedOperations** <br> List of supported operations for this device.
|sequence&#60;string>|**supportedMeasurements** <br> List of supported measurements for this device.
|sequence&#60;string>|**childDeviceIds** <br> Ids of child devices.
|sequence&#60;string>|**childAssetsIds** <br> Ids of child assets.
|sequence&#60;string>|**parentDeviceIds** <br> Ids of parent devices.
|sequence&#60;string>|**parentAssetsIds** <br> Ids of parent assets.
|dictionary &#60;string, float>|**position** <br> If known, contains lat, lng, altitude and accuracy.
|dictionary &#60;string, any>|**params** <br> Other fragments for this managedObject.

