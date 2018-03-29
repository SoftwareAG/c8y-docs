---
order: 130
title: Event Measurement
layout: redirect
---

<span style="color: rgb(0,0,0);">Measurement data.</span>  

<span style="color: rgb(0,0,0);">Sent by the transport when a device sends a new Measurement. Requires SubscribeMeasurements or configuration property subscribeToAllMeasurements. Sent to the cumulocity.measurements channel.</span>  

### Examples

	Measurement("1001","c8y_LightMeasurement","12346081",1464359004.89,{"c8y_LightMeasurement": {"e":com.apama.cumulocity.MeasurementValue(108.1,"lux", {})}},{})   
	 Measurement("1002","c8y_DistanceMeasurement","12346082",1464359005.396,{"c8y_DistanceMeasurement": {"distance":com.apama.cumulocity.MeasurementValue(344,"mm","","","",{})}},{})

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="cumulocity.measurements"  <br> The channel to which measurement events are sent from the transport.
|constant string|**[CREATE_CHANNEL]** :="CumulocityIoT"  <br> The channel to send a measurement event to create a new measurement object in Cumulocity.

### Member Summary

|Date type|Member|
|:---|:---|
|string|**id** <br> Unique identifier for this measurement.
|string|**type** <br> The type of the measurement.
|string|**source** <br> The unique identifier of the source of the measurement. This should correspond to a managedObject.
|float>|**time** <br> The time the measurement was taken, represented as the number of seconds since the epoch (1st January 1970).
|dictionary&#60;string, dictionary&#60;string, com.apama.cumulocity.MeasurementValue > >|**measurements** <br> Measurement values mapped by fragment and series.
|dictionary &#60;string, any>|**params** <br> This dictionary is available to hold any other data associated with the measurement.


