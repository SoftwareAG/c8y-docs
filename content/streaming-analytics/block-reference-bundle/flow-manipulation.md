---
weight: 84
title: Flow Manipulation
layout: redirect
---

## Combiner

**apama.analyticskit.blocks.core.Combiner**

Calculates the output based on the selected mode and the connected inputs.

Available modes are: <ul> <li>Minimum: Outputs the minimum of the connected inputs which have received a value. All numeric literals are treated as <tt>float</tt> type.</li> <li>Maximum: Outputs the maximum of the connected inputs which have received a value. All numeric literals are treated as <tt>float</tt> type.</li> <li>Average (Mean): Outputs the average (mean) of the connected inputs for which a value has been received. All numeric literals are treated as <tt>float</tt> type.</li> <li>Latest Changed: Outputs the latest changed value. If multiple values change in a single activation, then the input port with the highest number is used. For example, if Value 1 and Value 2 get an updated value, Value 2 is selected for output. Inputs must be of the same type. When using the Latest Changed mode, a value is not considered changed if the actual value does not change. For example, when using the Latest Changed mode with temperature sensors, it outputs the sensor value whose temperature was most recently changed.</li> <li>Latest Input: Outputs the latest input value even if the actual value is unchanged. If multiple values update in a single activation, then the input port with the highest number is used. For example, if you have a number of sensors that measure the temperature periodically at different intervals and you want to get the latest temperature received by the block by all of those sensors, you can use the Combiner block with the Latest Input mode. This provides the latest published temperature, even if a sensor measures and publishes the same temperature.</li> </ul>

### Parameters

|Name|Description|Type|
|:---|:---|:---|
|Mode|The mode to be selected.|Option - one of:<ul><li>Minimum</li><li>Maximum</li><li>Average (Mean)</li><li>Latest Changed</li><li>Latest Input</li></ul>|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value 1|First input value to the block.|any|
|Value 2|Second input value to the block.|any|
|Value 3|Third input value to the block.|any|
|Value 4|Fourth input value to the block.|any|
|Value 5|Fifth input value to the block.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Combined Value|The calculated combined value.|sameAsAll(value1, value2, value3, value4, value5)|



## Gate

**apama.analyticskit.blocks.core.Gate**

Blocks the input from going to output unless the gate is open and enabled.

The block will start disabled if the Enable input is connected, otherwise the block will always be enabled. The block will start closed if the Open input is connected, otherwise the block will start open.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Null Value|The value to use as output value when the gate is either disabled or closed.<br><br>The exact type of the value depends on the Null Value Type parameter. If the Null Value Type parameter is specified then the string value is parsed as the specified type. If the Null Value Type parameter is not specified, and the value is parsable into a float or a boolean value then it is parsed into the corresponding value type, otherwise it is used as a string value.|string|Optional|
|Null Value Type|The type of the value specified by the Null Value parameter. If specified, the null value is parsed into the specified type.|Option - one of:<ul><li>Float</li><li>Boolean</li><li>String</li></ul>|Optional|
|Close Duration (secs)|The amount of time (in seconds) the gate should be closed when a close signal is received.<br><br>If the parameter is not specified, then after a close signal is received, the gate remains closed until an open signal is received. If the parameter is specified, then the gate automatically opens after the specified number of seconds, unless another open or close signal is received before the time has elapsed. On opening, if the gate is also enabled, then the latest input value is sent out as output.
<br><br>
This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The value to pass to output.|any|
|Enable|Enables the gate. If the gate is always to be enabled, then leave this port unconnected.|boolean|
|Open|Opens the gate. If the gate is to be open at the start, then leave this port unconnected.|pulse|
|Close|Closes the gate. If the Close Duration parameter is specified, then the gate is closed only for the specified number of seconds.|pulse|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Gated Value|Same as the input value when the gate is open and enabled. Otherwise the value specified by the Null Value parameter.|input(value)|
|Activated|Output pulse. Generated when the gate becomes active. The gate is active when it is both open and enabled.|pulse|
|Deactivated|Output pulse. Generated when the gate becomes inactive. The gate is inactive when it is either closed or disabled.|pulse|



## Latch Values

**apama.analyticskit.blocks.core.Latch**

Latches the latest input value received while the block is enabled.

Only generates an output if the input value changes and the block is enabled. The block will start disabled if the Enable input is connected, otherwise the block will always be enabled.

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value to be monitored.|any|
|Enable|Enables the block. If the block is always to be enabled, then leave this unconnected.|boolean|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Latched Value|Same as the input value. Generated only if the input has changed while the block was enabled.|input(value)|
|Changed|Output pulse. Generated only if the input has changed while the block was enabled.|pulse|
|Enabled|Output pulse. Generated when the block is enabled but was previously disabled.|pulse|
|Disabled|Output pulse. Generated when the block is disabled but was previously enabled.|pulse|



## Pulse

**apama.analyticskit.blocks.core.Pulse**

Converts a non-pulse input into a pulse output.

This is useful with blocks which consume both pulse and non-pulse values, and where the input value is treated as non-pulse without the explicit conversion.


For example, a numeric value passed to the OR block is treated as <tt>true</tt> if non-zero (as described in the "Type conversions" topic of the Analytics Builder documentation). However, when passing a numeric value to the Pulse block and then connecting the output of the Pulse block to the OR block, the numeric value is converted to a pulse so the OR block sends a pulse.  The block can be configured to send a pulse if the value changes (default pulse conversion behavior), on every input, or on every non-zero value.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Mode|Controls when the block sends a pulse.|Option - one of:<ul><li>On value change</li><li>On every input</li><li>On non-zero values</li></ul>|Default: On value change|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input to treat as pulse.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Pulse|The output pulse value converted from the input value.|pulse|



## Selector

**apama.analyticsbuilder.blocks.Selector**

Outputs a parameter value depending on which input port has a <tt>true</tt> value, lowest number taking precedence.

You specify the output value that is to be sent using the parameters of this block. Only one of the parameter values is sent in the output. It is sent when the corresponding input port receives a <tt>true</tt> value. If more than one input port receives a <tt>true</tt> value, then the input port is used which has the lowest number in its name. For example, Input 1 has a higher priority than Input 2.


If all input values are <tt>false</tt>, then the value specified with the No Input parameter is sent.


Example: Input 1 has "high", Input 2 has "medium", Input 3 has "low", and the No Input parameter has the value "off". If none of the input ports receives a <tt>true</tt> value, then "off" is sent as the output value. If both the Input 2 and Input 3 ports receive a <tt>true</tt> value and Input 1 receives a <tt>false</tt> value, then "medium" is sent as the output value. This is because Input 2 has a higher priority than Input 3.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Input 1|The output to be sent when the Input 1 port receives a <tt>true</tt> value.|string|
|Input 2|The output to be sent when the Input 2 port receives a <tt>true</tt> value, but only if this is the port with the lowest number in its name.|string|Optional|
|Input 3|The output to be sent when the Input 3 port receives a <tt>true</tt> value, but only if this is the port with the lowest number in its name.|string|Optional|
|Input 4|The output to be sent when the Input 4 port receives a <tt>true</tt> value, but only if this is the port with the lowest number in its name.|string|Optional|
|Input 5|The output to be sent when the Input 5 port receives a <tt>true</tt> value, but only if this is the port with the lowest number in its name.|string|Optional|
|No Input|The output to be sent when there is no input which has a <tt>true</tt> value.|string|
|Type|How to interpret the parameter values and set the output type.<br><br>If JSON is selected as the type, all input parameter values must be valid JSON values of the same type. This allows the Selector block to output properties which can be used, for example, with the Set Properties block to generate different sets of properties for the output blocks, depending on which input port of the Selector block is enabled.
<br><br>
If the Type parameter remains unselected, the type of the output value is set based on the types of all input parameter values. If all values are either <tt>true</tt> or <tt>false</tt>, the output is a boolean value. If all values are numbers, the output is a float value. In all other cases, the output is a string value.|Option - one of:<ul><li>Float</li><li>Boolean</li><li>String</li><li>JSON</li></ul>|Optional|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Input 1|Causes the Input 1 parameter value to be sent if <tt>true</tt>.|boolean|
|Input 2|Causes the Input 2 parameter value to be sent if <tt>true</tt> (and no lower numbered input is <tt>true</tt>).|boolean|
|Input 3|Causes the Input 3 parameter value to be sent if <tt>true</tt> (and no lower numbered input is <tt>true</tt>).|boolean|
|Input 4|Causes the Input 4 parameter value to be sent if <tt>true</tt> (and no lower numbered input is <tt>true</tt>).|boolean|
|Input 5|Causes the Input 5 parameter value to be sent if <tt>true</tt> (and no lower numbered input is <tt>true</tt>).|boolean|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Output|The output value from one of the parameters.|any|



## Switch

**apama.analyticsbuilder.blocks.Switch**

Outputs the values from a given input, or acts as a circuit breaker.

If the Selected Input parameter is specified, then the given input must exist and the corresponding input port must be connected.


If the Selected Input parameter is not specified, then the block acts as a circuit breaker.


You can use the initial default names for the inputs. However, you can also rename them to be more descriptive. The input names must be unique, so two inputs cannot share the same name. Connected inputs must all be of the same type.


The expected use case is that the Selected Input parameter is set to a template parameter which can then be set individually for each model instance to decide which input is used.

### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Selected Input|To specify an output, specify one of the five input names. To act as a circuit breaker, leave this parameter empty.|string|Optional|
|Name for input1|The name of the first input to the block.|string|Default: input1|
|Name for input2|The name of the second input to the block.|string|Default: input2|
|Name for input3|The name of the third input to the block.|string|Default: input3|
|Name for input4|The name of the fourth input to the block.|string|Default: input4|
|Name for input5|The name of the fifth input to the block.|string|Default: input5|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|input1|The first input.|any|
|input2|The second input.|any|
|input3|The third input.|any|
|input4|The fourth input.|any|
|input5|The fifth input.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Switch|The value from the specified input, or no value (circuit breaker) if the Selected Input parameter is empty.|sameAsAll(input1, input2, input3, input4, input5)|



## Time Delay

**apama.analyticskit.blocks.core.TimeDelay**

Delays the input by the specified amount of time.

### Parameters

|Name|Description|Type|
|:---|:---|:---|
|Delay (secs)|The amount of time (in seconds) by which the input will be delayed.<br><br>This must be a finite and positive number.|float|

### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value to be delayed.|any|

### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Delayed Value|The delayed output value.|input(value)|


