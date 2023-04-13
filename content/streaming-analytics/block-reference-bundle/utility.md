---
weight: 96
title: Utility
layout: redirect
---

## Constant Value

**apama.analyticsbuilder.blocks.ConstantValue**

Outputs a value, either when the Trigger input port receives a signal or at startup.

The Trigger input port can be used to delay the output until a trigger input is received. If the Trigger input port is not connected, then the block outputs a value when the model is activated, which may trigger further processing.


The Value parameter can be treated as either a string, or as a JSON value.  For JSON string, number or boolean, then that will be the type of the output. For JSON objects, the output will be a pulse with the properties from the object. JSON arrays are only permitted within an object.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Value|The value to output.|string|
|Type|How to interpret the Value parameter.|Option - one of:<ul><li>string</li><li>JSON</li></ul>|Default: JSON|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Trigger|If connected, send output on this trigger.|boolean|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Output|The output value from the Value parameter.|any|



## Cron Timer

**apama.analyticskit.blocks.core.CronTimer**

Sends a signal output based on cron-like periodic timer syntax.

The timer tick output is sent every time the time matches the pattern.  Each parameter can be set to an asterisk (*) to match all times, a list of comma-separated numbers to fire at those specific times, or "* / number" to fire on every multiple of the number.


For example:


To send a signal every Wednesday at 20:30: <ul> <li>Day of Week: 4</li> <li>Hour: 20</li> <li>Minute: 30</li> </ul>


To send a signal every 5 seconds: <ul> <li>Seconds: * / 5</li> </ul>


The Days of Month and Days of Week parameters operate together such that if both are specified, then any match in either parameter triggers an output. For example, if Days of Month is set to 15 and Days of Week is set to 1, then there is an output on every Monday of the month and the 15th regardless of which day that is.


This block is not supported in simulation mode.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Seconds|The seconds at which to trigger the signal. <p>Range: 0 to 59.</p>|string|Default: 0|
|Minutes|The minutes at which to trigger the signal. <p>Range: 0 to 59.</p>|string|Default: *|
|Hours|The hours at which to trigger the signal. <p>Range: 0 to 23.</p>|string|Default: *|
|Days of Month|The days of the month on which to trigger the signal. <p>Range: 1 to 31.</p>|string|Default: *|
|Months|The months in which to trigger the signal. <p>Range: 1 to 12.</p>|string|Default: *|
|Days of Week|The days of the week on which to trigger the signal. <p>Range: 0 (Sunday) to 6 (Saturday).</p>|string|Default: *|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Timer Tick|Sent at each trigger time based on the cron parameters.|pulse|



## Duration

**apama.analyticskit.blocks.core.Duration**

Measures the time elapsed from a set start time.

The start time is set by a start signal which activates the block. If the block is already active, then a start signal is ignored and the existing measurement remains unaffected. The block is deactivated with a reset signal which also disables any periodic outputs.


The block generates a float output of the time elapsed since the start signal, measured in seconds. If the block is inactive at the time it receives a measure signal, then 0.0 is generated as the output.


If multiple signals are received at the same time, they are processed in the order of measure, reset and start. Thus, for example, if measure and reset signals are received together, the block first generates an output with the current duration and then resets its state. Processing the inputs in this order allows the current state of the block to be output and the block to be restarted within a single unit of time, if desired.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Periodic Output (secs)|The amount of time (in seconds) between automatically generated outputs by an active block. If not set, then an output is only generated when a measure signal is received.<br><br>This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Measure|Triggers an output of the duration (in seconds) since the block was activated. If the block is inactive, then 0.0 is output.|pulse|
|Reset|Deactivates and resets the state of the block.|pulse|
|Start|Activates the block.|pulse|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Duration|The time in seconds since a start signal was received.|float|



## Extract Property

**apama.analyticskit.blocks.core.ExtractProperty**

Extracts the specified property from the input value and converts it to the specified type.

The value in the Value input named by the Property Path parameter should be a string, number or boolean.


You can specify a period (.) as part of the Property Path parameter to extract nested values from a dictionary.


For example: If the input is <tt>{ "location" : { "city" : "Cambridge" } }</tt> (in JSON form), then you can extract that value by specifying <tt>location.city</tt> as the Property Path parameter.


You can also specify square brackets as part of the Property Path parameter to extract a specific element from a sequence.


If the value is an object, then the properties of that object are output as properties on the Extracted Value output port.


For example: If the input is <tt>{ "users" : [ { "age" : 40.375 } ] }</tt> (in JSON form), then you can extract that value by specifying <tt>users[0].age</tt> as the Property Path parameter.


The block does not support extracting entries from a dictionary whose key contains special characters like the period (.) or square brackets. Also it does not support extracting entries from a sequence without using square brackets, for example, <tt>users.0.id</tt> must be written as <tt>users[0].id</tt>.


In converting a string to a float, this block treats an empty string as a value of 0.0, rather than as not parseable.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Property Path|The name or path of the property that is to be extracted from the input value. If not set, all of the properties are output.|string|Optional|
|Property Type|The type to which the property value is to be converted. If set to Properties, a pulse is output with properties from the extracted value.|Option - one of:<ul><li>String</li><li>Boolean</li><li>Float</li><li>Properties</li></ul>|Default: String|
|Clear On Missing|If selected, the default value of the specified type is output if the Property Path parameter was not specified or if the value cannot be converted into the specified type.|boolean|Default: false|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value from which the property is to be extracted.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Extracted Value|The value that has been extracted from the input value.|any|



## Geofence

**apama.analyticsbuilder.blocks.Geofence**

Compares the input value against the defined geofence value to detect whether the device is within the geofence, and whether the device entered or exited the geofence.

The boundary line itself is considered to be outside of the geofence area.

### Parameters

|Name|Description|Type|
|:---|:---|:---|
|Geofence|A polygon describing an area on the Earth's surface.<br><br>Note that crossing the international date line, namely the longitude of +/- 180 degrees, is not supported.|sequence<apama.analyticsbuilder.LngLat>|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Position|The input value from which the properties for the longitude (lng) and latitude (lat) are to be extracted.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Within Geofence|Is set to <tt>true</tt> when the device is within the defined geofence.|boolean|
|Entered Geofence|Sends a signal when the device enters the defined geofence.|pulse|
|Exited Geofence|Sends a signal when the device leaves the defined geofence.|pulse|



## Missing Data

**apama.analyticskit.blocks.core.MissingData**

Generates an output if the input has not occurred for a set amount of time.

The block can optionally detect an absence of changes in value if repeated same-value inputs are not counted.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Ignore Repeated Inputs|If selected, same-value inputs are ignored.|boolean|Default: false|
|Duration (secs)|The amount of time (in seconds) the block waits for an input.<br><br>This must be a finite and positive number.|float|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The data whose presence or absence is being detected.|any|
|Reset|Resets the state of the block - resets any timer and the previous value.|pulse|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Missing Data|Absence of data, <tt>true</tt> if no input is received within the specified duration, else <tt>false</tt>.|boolean|



## Set Properties

**apama.analyticsbuilder.blocks.SetProperties**

Outputs a pulse with properties set from values on the input ports.

The property names are taken from the parameters and the values from the input ports. New properties are only output if they have been received. An output is sent as soon as at least one of the inputs is provided.


Properties are set on the output in the following order of precedence: <ol><li>Any properties which have been explicitly specified by the use of a parameter. If an input is a pulse, it is treated as an object using the properties of that input. If an input has a primary value (not a pulse), then the primary value is used. To use the properties instead, use the Extract Property block with the Property Path parameter not set and the Property Type parameter set to Properties which replaces the primary value with a pulse (which is ignored) and the properties are used.</li> <li>The properties of any <tt>Value</tt> object on an input port which does not have the corresponding parameter set. This is a straight merge of the <tt>properties</tt> dictionary. If two dictionaries have the same property key, then the input port with the lowest identifier has precedence. Thus any shared properties on Input 1 overwrite properties from Input 2 and down.</li> <li>Any  properties on a <tt>Value</tt> object provided to the  Merge input port are kept if they are not overwritten by either of the operations above. The optional Merge input port allows chaining or supplementing a set of properties from another block.</li></ol>


Thus, any properties set on an input are overwritten by those with the same name on a  higher precedence input, or when an input is configured for the specified property.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Property 1|A property to set in the output, using the value from input port 1.|string|Optional|
|Property 2|A property to set in the output, using the value from input port 2.|string|Optional|
|Property 3|A property to set in the output, using the value from input port 3.|string|Optional|
|Property 4|A property to set in the output, using the value from input port 4.|string|Optional|
|Property 5|A property to set in the output, using the value from input port 5.|string|Optional|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Input 1|Value to be added using the property name in parameter Property 1.|any|
|Input 2|Value to be added using the property name in parameter Property 2.|any|
|Input 3|Value to be added using the property name in parameter Property 3.|any|
|Input 4|Value to be added using the property name in parameter Property 4.|any|
|Input 5|Value to be added using the property name in parameter Property 5.|any|
|Merge|Source to merge with the specified properties. Properties from here not replaced by an input value are passed through to the output.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Output|The output value with extra properties supplied.|pulse|



## Text Substitution

**apama.analyticsbuilder.blocks.TextSubstitution**

Substitutes identifiers marked with a hash and braces (for example, <tt>#{name}</tt>) in the text template with corresponding entries from the input values.

At least one of the Object or Source input ports must be connected. Identifiers that cannot be resolved are not substituted.


The identifiers prefixed with <tt>source.</tt> (for example, <tt>#{source.name}</tt>) are searched for in the value received on the Source input port. For example, if the value received on the Source input port is <tt>{ "name": "sample_name" }</tt>, then the identifier <tt>#{source.name}</tt> is resolved to <tt>sample_name</tt>.


The identifiers not prefixed with <tt>source.</tt> are searched for in the value received on the Object input port.


Nested identifiers can be specified by separating them with a dot (.). For example, when the Object input port has received the value <tt>{ "address": { "street": { "name": "example_street" }}}</tt>, then the identifier <tt>#{address.street.name}</tt> is resolved to <tt>example_street</tt>.


Keys with a dot (.) in them are not supported, so if the Object input port value is of the form <tt>{ "address.street": { "name": "example_street" }}</tt>, then the <tt>example_street</tt> value cannot be resolved because the identifier <tt>#{address.street.name}</tt> expects <tt>street</tt> to be nested inside the <tt>address</tt> entry.


Primitive values such as <tt>integer</tt>, <tt>float</tt>, <tt>boolean</tt> and <tt>string</tt> are substituted directly, but complex values are converted to a JSON representation before substitution.


Any identifier with the text <tt>time</tt> (case-insensitive) in it and value type <tt>float</tt> is interpreted as a timestamp value and is converted into the format <tt>yyyy-MM-ddTHH:mm:ss.SSSZ</tt> before substitution. This can be modified with optional parameters using the following syntax: <tt>{time:param1="value1",param2="value2"}</tt>. Use the parameter <tt>TZ="time_zone"</tt> to specify a different time zone and/or use the parameter <tt>FORMAT="format_string"</tt> to specify a different format. For example, <tt>#{time:TZ="America/New_York",FORMAT="HH:mm:ssZ"}</tt> specifies the time zone for New York and the format to be <tt>HH:mm:ssZ</tt>. The model fails to activate if the time zone is not recognized or the format is invalid.


Note: The format string for the time must not contain quotes (") and braces ({ and }).


A hash (#) can be specified in the text template by escaping it as follows: <tt>#{#}</tt>.


For more information, see the <a target="_blank" rel="external noopener" href="https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-DevApaAppInEpl_supported_time_zones.html">list of time zones</a> and the <a target="_blank" rel="external noopener" href="https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-DevApaAppInEpl_format_specification_for_the_time_format_plug_in_functions.html">list of valid time format strings</a>.

### Parameters

|Name|Description|Type|
|:---|:---|:---|
|Text Template|The text that is used to generate the output by substituting the identifiers in it, such as #{name}, with the values from the input ports.|string|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Object|Used to substitute identifiers that are not prefixed with <tt>source.</tt>. For example, <tt>#{name}</tt> or <tt>#{timestamp}</tt>.|any|
|Source|Used to substitute identifiers that are prefixed with <tt>source.</tt>. For example, <tt>#{source.name}</tt>.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Output|String containing the substitutions from the text template.|string|



## Toggle

**apama.analyticskit.blocks.core.Toggle**

Converts two pulse inputs to a boolean output based on the set and reset signals, with optional delays.

Without delays, the output state is changed to <tt>true</tt> on a set signal, and changed to <tt>false</tt> on a reset signal. If both signals are received at the same time, the output state is toggled (to <tt>true</tt> if signals are received for the first time).


If delay times are specified, the output state is only changed to <tt>true</tt> or <tt>false</tt> after the delay has been applied.


The following exception applies if both signals are received at the same time: the output state is only toggled if both delay times are the same, or have not been specified at all.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Set Delay (secs)|The amount of time (in seconds) after which the set signal is processed.<br><br>If the parameter is not specified, then the signal is immediately processed.
<br><br>
This must be a finite and positive number.|float|Optional|
|Reset Delay (secs)|The amount of time (in seconds) after which the reset signal is processed.<br><br>If the parameter is not specified, then the signal is immediately processed.
<br><br>
This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Set|Sets the output to <tt>true</tt>. Any pending delayed set or reset signals are cancelled on the new input.|pulse|
|Reset|Sets the output to <tt>false</tt>. Any pending delayed set or reset signals are cancelled on the new input.|pulse|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The output value generated from the input signals.|boolean|


