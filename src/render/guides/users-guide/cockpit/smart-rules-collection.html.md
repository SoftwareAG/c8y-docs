---
order: 90
title: Smart rules collection
layout: redirect
---


Cumulocity includes preset global Smart Rule types. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_GlobalSmartRules.png" name="Global Smart Rules" style="width:75%;"/>

Each global Smart Rule type provides different parameters to configure. 

The following section describes each available type and its configuration properties.

### On alarm send SMS

**Functionality** 

When an alarm is created, a SMS is sent.

>**Info:** This rule is only available if your tenant has a configured SMS provider.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleSendSMS.png" name="Smart Rule send SMS" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Send SMS:|"Phone number": Target phone number. It is recommended to include mobile country code for all numbers, e.g. "+49" or "0049" for Germany. Multiple numbers can be separated by a comma (",", do not use a space!).<br> "Message": Text of SMS with max. 160 characters. You can use variables of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

>**Important:** There is a limit of 160 characters as a total count. If you use variables and after applying the variables the text counts more than 160 characters the SMS will not be sent.

### On alarm send e-mail

**Functionality** 

When an alarm is created, an email is sent.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleSendEmail.png" name="Smart Rule send email" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Send e-mail:|"Send to:/Send CC to:/Send BCC to": Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).<br>"Reply to": Address to be used to reply to the message.<br> "Subject": Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.<br> "Message": Text of the e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

* Check your spam folder.

### On alarm escalate it

**Functionality** 

When an alarm is created, sends e-mail, sms, and/or initiates text-to-speech.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleOnAlarmEscalate.png" name="Smart Rule on alarm escalate" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Escalate as follows:|Escalation steps processed in a chain. <br> Click **Add step** to define at least one step: <br> "Type": Type of action executed in the step. Possible values are: <br> * Email (see "On alarm send e-mail" rule for parameter descriptions). <br> * SMS (see "On alarm send SMS" rule for parameter descriptions). <br> * Phone (see "On alarm initiate text-to-speech call" rule for parameter descriptions). <br> "Condition": The condition applied when the rule will be executed. Possible values are: <br> * Always: Action will always be executed. <br> * Always: If step N failed. Only phone steps may fail. The step is marked as failed once all retries have been made without a successful call. This option only appears if there already is a phone step configured that can be referred to.
|4|Target asset or devices|Groups or devices the rule shall be applied to.


**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.


### On alarm duration increase severity

**Functionality** 

If an alarm is active for a certain time, the severity is increased.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleIncreaseSeverity.png" name="Smart Rule increase severity" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Increase alarm severity|Duration, an alarm must be active, before increasing the severity.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Description**

When a configured type of alarm is raised, it starts monitoring how long the alarm stays active.

If the alarm is still active after the specified duration, the severity will be increased one level, e.g. from MINOR to MAJOR.

If the alarm has reached 'CRITICAL', it will stop monitoring because there is no further action possible.

>**Info:** The rule checks once a minute if the configured duration has been exceeded. Therefore it might happen that the alarm severity won't change in the second it exceeds the duration but only after the following check.

### On geofence create alarm

**Functionality** 

If a geofence border is crossed, an alarm is created. 

The rule can be configured for entering or leaving the geofence, or both. Existing alarms are cleared when the opposite condition is true again, e.g. if a tracked car which has left the geofence area is re-entering the geofence area.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleAlarmOnGeofence.png" name="Smart Rule alarm on geofence" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On geofence violation:|Polygon that defines the borders of an area. Click **Edit geofence** and set the area. Double-click to add points and click and drag them to adjust.
|3|Create alarm:|Reason for triggering the alarm: "On entering", "On leaving" (the default), "On entering and leaving".<br>Type of alarm being raised. <br> Severity of alarm being raised. <br>Alarm text.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

No alarm will be generated until the device crosses the geofence border for the first time.

**Troubleshooting**

* Make sure the device was inside the geofence at least once after creating/activating the rule.
 
* Check if the device is in [maintenance](/guides/reference/device-management) mode. No new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

### On geofence send e-mail

**Functionality** 

If a geofence border is crossed, an email is sent. 

The rule can be configured for entering or leaving the geofence, or both.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleEmailOnGeofence.png" name="Smart Rule email on geofence" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On geofence violation:|Polygon that defines the borders of an area. Click **Edit geofence** and set the area. Double-click to add points and click and drag them to adjust.
|3|Send e-mail:|"Send to:/Send CC to:/Send BCC to": Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).<br>"Reply to": Address to be used to reply to the message.<br> "Subject": Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.<br> "Message": Text of the e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Info**: In order to send out the e-mail the device had to be inside the geofence at least once after creating the rule.

**Troubleshooting**

* Make sure the device was inside the geofence at least once after creating/activating the rule.

* Check your spam folder.


### Calculate energy consumption

**Functionality** 

Creates consumption data point based on data from an electric-, gas-, water- meter.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleCalculateEnergyConsumption.png" name="Smart Rule calculate energy consumption" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|Monitored measurement:|"Fragment/Series": Name of the measurement fragment and series. The incoming measurement must have exactly the same fragment/series name as configured. When creating a rule from the data explorer, these fields are already filled in. <br> "Time interval": Interval in which consumption values shall be calculated. Only specifies how often the consumption is calculated not the unit of the consumption measurement.
|3|Energy consumption measurement:|Name of the measurement fragment and series that shall be generated.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

The unit of the consumption measurement is always per hour (i.e. if the measurements are in "kg" the consumption will be in "kg/h").

The rule takes the last two measurements for a specified time, calculates the difference in value and time and then calculates the consumption per hour.

**Example**

The rule is configured to calculate every 20 minutes. The following measurements are coming in:
100 kg at 11:59 and 200 kg at 12:14.
At 12:20 the rule is triggered, taking the last two measurements. It calculates value and time difference. The consumption measurement created at 12:20 will therefore be 400 kg/h.
If no new measurement was created in the last period a measurement with consumption 0 will be created.

### On missing measurements create alarm

**Functionality** 

If no new measurement data has been received for a specified time, an alarm is created. 

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleMissingMeasurements.png" name="Smart Rule alarm on missing measurements" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|Monitored measurement:|"Type": Type of measurement. The incoming measurement must have the same type as configured. When creating a rule from the data explorer, the type is already filled in.<br> "Time interval": Interval for calculating consumption values.
|3|Create alarm:|Type of alarm being raised. <br> Severity of alarm being raised. <br>Alarm text.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

>**Info:** The rule checks once a minute if the configured time interval was exceeded. Therefore it can take up to one minute to create the alarm after the time interval was exceeded. To check if the time interval was exceeded there must be at least one incoming measurement after the activation of the rule.

### On alarm execute operation

**Functionality** 

If a certain alarm occurs, the specified operation will be send to the device.


**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleExecuteOperation.png" name="Smart Rule execute operation" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Execute operation:|The operation that will be sent. The operation is provided as JSON description. Some standard operations can be selected below the "Operation" field. To use a standard operation, select one, and press the arrow button on the right. This will insert the JSON of the selected operation.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

### On measurement threshold create alarm

**Functionality** 

When exceeding defined yellow and red ranges, alarms are generated and cleared.

The rule uses the following parameter from the device object or data point library:

* Object red range: Range when the system should create CRITICAL alarms. These values can be edited in the data explorer for each data point.

* Object yellow range: Range when the system should create MINOR alarms. These values can be edited in the data explorer for each data point.

* Data Point Library red/yellow range: When there is no red/yellow range stored in the respective object, then the Data Point Library is searched for the configured data point entry and the related red/yellow range is used.

Using this mechanism, you can configure global threshold ranges in the Data Point Library. These global values can then be overridden for specific objects on a case-by-case basis.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleExplicitThreshold.png" name="Smart Rule explicit threshold" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On threshold:|"Fragment/Series": Name of the measurement fragment and series. The incoming measurement must have exactly the same fragment name as configured. When creating a rule from the data explorer, these fields are already filled in. <br> "Data Point Library entry": Name of the entry in the Data Point Library. This is used to find the default values for red and yellow ranges in case they are not configured for an individual object.
|3|Create alarm:|"Type": Type of alarm being raised. <br>"Text": Alarm message.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Description**

For each incoming measurement value, the rule performs the following steps:

* Check, if the measurement includes data for the fragment and series (rule parameter).

* Check, if the rule is activated for the source object.

* The data of the red and yellow range is collected from either:

- the source object (the measurement),

- the Data Point Library (control parameter).

If no red/yellow ranges are defined, no alarms are generated.

>**Info:** Range values defined in the source object have a higher priority than those defined in the Data Point Library. You can also just overwrite a single value (e.g. yellow range max) by setting it in the source object. The other values will then be taken from the Data Point Library.

* Incoming value inside the yellow range: <br>If there is an active alarm of given type for the object, set severity to MINOR. Otherwise create new MINOR alarm with given parameters.

* Incoming value inside the red range: <br> If there is an active alarm of given type for the object, set severity to "CRITICAL". Otherwise, create new CRITICAL alarm with given parameters.

* Measurement outside of yellow and red range: <br>If there is an active alarm of given type for the object, clear the alarm.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

* Check if an alarm was already cleared by the next scheduled measurements with resulting value in a green range.

>**Info:**  If you clear an alarm, you state that the alarm is resolved. A new alarm is not raised unless the device changes its state and exceeds the thresholds again.

### On measurement explicit threshold create alarm

**Functionality** 

When the measurement value enters or leaves the RED range, a CRITICAL alarm is generated or cleared.

The severity of alarm is determined as follows:

* If the measurement value moves into RED range, then the severity is CRITICAL.

* If the measurement value moves into GREEN range, the alarm is cleared.

>**Info:** This rule is similar to the rule "On measurement threshold create alarm". However, in this rule here the RED threshold value is provided explicitly. The threshold rule "On measurement threshold create alarm" extracts the thresholds values from the device or Data Point Library.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleExplicitThreshold.png" name="Smart Rule explicit threshold" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On threshold:|"Fragment/Series": Name of the measurement fragment and series. The incoming measurement must have exactly the same fragment name as configured. When creating a rule from the data explorer, these fields are already filled in. <br> Minimum, Maximum: When a value is in the specified range [minimum; maximum], the configured alarm is raised.
|3|Create alarm:|"Type": Type of alarm being raised. <br>"Text": Alarm message.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

* Check if an alarm was already cleared by the next scheduled measurements with resulting value in a green range.

>**Info:**  If you clear an alarm, you state that the alarm is resolved. A new alarm is not raised unless the device changes its state and exceeds the thresholds again.

### On alarm initiate text-to-speech call

**Functionality** 

When an alarm is created, it initiates a text-to-speech call.

**Parameters**

The rule uses the following parameters:

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleInitiateCall.png" name="Smart Rule initiate call" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Text-to-speech:|"Phone number": Valid international phone number. Use country codes in the format "+49" (as an example for Germany).<br> "Message": The text read out by the rule. <br> Retries: The number of retries to reach the target phone number if not successful (default is "0", max is "20").<br> "Interval": The time interval between the retries in minutes (default is "5").<br>"Acknowledgment": If selected the receiver of the call has to acknowledge the call (a call not acknowledged will not count as successful)<br> "Acknowledgment text": The acknowledgment message which will be read after the main message, for example: "Please acknowledge this call by pressing the button 5". <br> "Acknowledgment number": The number of the button the receiver has to push to acknowledge. If the button has been pushed, the call will be successful and the alarm status will be changed to acknowledged.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Make sure that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. No new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Administration > Reprioritizing alarms](/guides/images/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.


### Smart Rule Variables

In certain rule parameters, variables can be used. When a rule is triggered, the variables are replaced by their actual values. You can use this mechanism to insert device names or alarm text into various outputs (email, SMS, text-to-speech). You can include any information of the triggering event (like the alarm) and its source device.

The following table lists example variables:

<table>
  <tr>
    <td>Variable</td>
    <td>Content</td>
  </tr>
  <tr>
    <td>#{creationTime}</td>
    <td>Time when the alarm was created in the database.</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Type of the alarm.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Time of alarm, as provided by the alarm.  </td>
  </tr>
  <tr>
    <td>#{text}</td>
    <td>Textual description of the alarm.</td>
  </tr>
  <tr>
    <td>#{source.name}</td>
    <td>Name of the device.</td>
  </tr>
  <tr>
    <td nowrap>#{source.c8y_Hardware.serialNumber}</td>
    <td>Serial number of the device.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Notes}</td>
    <td>Note field of the device.</td>
  </tr>
  <tr>
    <td>#{status}</td>
    <td>Status of the alarm: ACTIVE, ACKNOWLEDGED or CLEARED.</td>
  </tr>
  <tr>
    <td>#{severity}</td>
    <td>Severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING. </td>
  </tr>
  <tr>
    <td>#{count}</td>
    <td>Number of alarm messages for this device: Repeating messages for the same device and same alarm type are de-duplicated into one alarm.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.street}</td>
    <td>Street of the device.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.cityCode}</td>
    <td>ZIP code of the device.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.city}</td>
    <td>City of the device.</td>
  </tr>
</table>


>**Info:** In case the variable does not exist or is misspelled, the generated content is displayed.