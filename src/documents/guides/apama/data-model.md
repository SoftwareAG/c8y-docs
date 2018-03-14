## Event Alarm

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

## Event Event


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


## Event FindAlarm

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

## Event FindAlarmResponse


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


## Event FindAlarmResponseAck


<span style="color: rgb(0,0,0);">Completed search for alarms.</span>


### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Request identifier.


## Event FindEvent

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


## Event FindEventResponse


<span style="color: rgb(0,0,0);">An event has been found.</span>

### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="cumulocity.findevent.response"  <br> The channel to which FindEventResponse events are sent from the transport.

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Request identifier.
|string|**id** <br> Event identifier.
|com.apama.cumulocity.Event|evt


## Event FindEventResponseAck


<span style="color: rgb(0,0,0);">Completed search for events.</span>

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Request identifier.


## Event FindManagedObject

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


## Event FindManagedObjectResponse


### Constant Summary

|Date type|Constant|
|:---|:---|
|constant string|**CHANNEL** :="cumulocity.finddevice.response"  <br> The channel to which FindDeviceResponse events are sent from the transport.

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Request identifier.
|string|**id**
| com.apama.cumulocity.ManagedObject|managedObject


## Event FindManagedObjectResponseAck


<span style="color: rgb(0,0,0);">Completed search for managedObject</span>

### Member Summary

|Date type|Member|
|:---|:---|
|integer|**reqId** <br> Request identifier.


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


## Event Measurement

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


## Event MeasurementValue


<span style="color: rgb(0,0,0);">Measurement value.</span>

### Member Summary

|Date type|Member|
|:---|:---|
|float|**value** <br> Value from the sensor.
|string|**unit** <br> Units the reading is in, for example mm, lux.
|dictionary &#60;string, any>|**params** <br> Any per-value extra fields.


## Event Operation

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


## Event SendEmail

<span style="color: rgb(0,0,0);">Sends email alert. 

### Examples

	SendEmail("Subject","Text", "xyz@gmail.com",["a@gmail.com","b@gmail.com"],["c@gmail.com"],"d@gmail.com",{"assetId":"10XXX"})

### Member Summary

|Date type|Member|
|:---|:---|
|string|**subject** <br> Subject field of the mail.
|string|**text** <br> Message of the mail.
|string|**replyTo** <br> Reply-to field of the mail.
|sequence&#60;string>|**receiver** <br> List of receivers of the mail.
|sequence&#60;string>|**cc** <br> List of cc recipients of the mail.
|string|**bcc** <br> List of bcc recipients of the mail.
|dictionary &#60;string, string>|**extraParams** <br> Additional parameters.

## Event SendSMS

<span style="color: rgb(0,0,0);">Sends SMS alert. 

### Examples

	SendSMS("Message",["+918XXXXXXXX1"],"10XXX",{"sender":"+918XXXXXXXX1"})


### Member Summary

|Date type|Member|
|:---|:---|
|string|**message** <br> Content of the SMS.
|string|**address** <br> List of receivers of the SMS.
|sequence&#60;string>|**sourceAssetsId** <br> Identifier of the source that triggered this SMS.
|dictionary &#60;string, string>|**extraParams** <br> Additional parameters.

## Event SendSpeech

<span style="color: rgb(0,0,0);">Sends speech.</span>

### Member Summary

|Date type|Member|
|:---|:---|
|string|**phoneNumber** <br> Phone number to call.
|string|**textToSpeech** <br> Text field to be converted to voice message.
|string|**deviceId** <br> Identifier of the device that triggered this call.
|integer|**attempts** <br> Number of retries or attempt to be made.
|integer|**timeout** <br> Timeout for receiving response.
|string|**alarmId** <br> Alarm identifier - a response will update this alarm.
|string|**questionText** <br> Question text.
|string|**acknowledgeButton** <br> Acknowledgement button.


## Event SMSResourceReference

<span style="color: rgb(0,0,0);">SMS resource reference.</span>

### Member Summary

|Date type|Member|
|:---|:---|
|string|**resourceURL** <br> Resource URL of the SMS resource reference.



## Event SMSResponse

<span style="color: rgb(0,0,0);">SMS response.</span>

### Member Summary

|Date type|Member|
|:---|:---|
|string|**messageId** <br> Message identifier.
| com.apama.cumulocity.SMSResourceReference|**resourceReference** <br> Resource reference in the SMS response.
