---
weight: 60
title: Calculation
layout: redirect
---

### Crossing Counter

**apama.analyticskit.blocks.core.CrossingCounter**

Detects and counts the number of threshold crossings in the specified direction.

Crossing is defined as a change in the input value from one side of the threshold to the other side of the threshold (that is, from less than to greater than or vice versa).


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, it uses an unbounded window. The Reset input clears the window contents.


If a window is configured, the block will use a set of 20 buckets, so the time of expired values is an approximation to the nearest bucket interval.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Threshold Value|This value is compared against the input value.|float|Default: 0.5|
|Direction|The direction in which to check for a threshold crossing: whether to detect a crossing in the upwards direction, in the downwards direction, or in both directions.|Option - one of:<ul><li>Upwards</li><li>Downwards</li><li>Both</li></ul>|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value for which to detect a crossing.|float|
|Reset|Resets the count of crossings.|pulse|
|Sample|Forces re-evaluation of the current value and sends the output.|boolean|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Crossing Count|The number of crossings.|float|
|Crossing|Sends a pulse when a crossing is detected.|pulse|



### Delta

**apama.analyticskit.blocks.core.Delta**

Calculates the difference between successive input values.

The block generates an output after getting at least two input values.

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|Value to calculate the delta.|float|
|Reset|Resets the state of the block.|pulse|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Delta Value|The delta value.|float|



### Difference

**apama.analyticskit.blocks.core.Difference**

Calculates the absolute and signed differences between the connected inputs.

Only generates an output if both inputs receive a value.

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value 1|First input to the block.|float|
|Value 2|Second input to the block.|float|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Absolute Difference|The absolute difference of the inputs.|float|
|Signed Difference|The signed difference of the inputs. Positive if the Value 1 input is larger than the Value 2 input.|float|



### Direction Detection

**apama.analyticskit.blocks.core.DirectionDetector**

Detects whether the input value changes direction.

Outputs the change in direction and the last significant inflection point, ignoring minor variations if the changes are less than the defined hysteresis value. Repeated inputs of the same value are ignored.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Hysteresis|Only counts a change in direction if the input value changes by the defined hysteresis value since the point of changing direction.<br><br>Must either be zero (meaning all changes of direction are counted) or a a positive number.|float|Default: 0.0|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|Numeric value for which to detect the change in direction.|float|
|Reset|Resets the state of the block.|pulse|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Upward Direction|Is <tt>true</tt> if the input value changes towards the upward direction, else <tt>false</tt>.|boolean|
|Inflection Point|The last inflection point detected by the block.|float|



### Expression

**apama.analyticskit.blocks.core.Expression**

Evaluates an expression to perform arithmetic or logical calculations or string operations.

On change of input values (once all in-use inputs have been received), the expression specified in the parameter is re-calculated.


The expression language is much like EPL (see <a target="_blank" rel="external noopener" href="https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ApaEplRef_how_this_book_is_organized.html%23">EPL reference</a>), but is restricted to <tt>float</tt>, <tt>integer</tt>, <tt>string</tt> and <tt>boolean</tt> types. All numeric literals are treated as <tt>float</tt> type values, even if they have no fractional part. Integer values can only be obtained as the result of functions such as <tt>floor()</tt>. Similar to EPL, <tt>integer</tt> and <tt>float</tt> are not implicitly convertible within an expression. If the result of an expression is an <tt>integer</tt> value, it is converted to a <tt>float</tt> automatically (there might be a loss of precision). Boolean values can be specified using the Boolean literals <tt>true</tt> and <tt>false</tt>. Boolean literals are case insensitive, so for example, <tt>TRUE</tt> and <tt>True</tt> are allowed. String values can be specified by enclosing string literals in double quotes, for example "my value". Special characters are encoded with a backslash (<tt>\\</tt>). The following special characters (along which their encoding) are supported in string literals: <ul> <li>Double quotes - <tt>\\"</tt></li> <li>Backslash - <tt>\\\\</tt></li> <li>Newline - <tt>\\</tt><tt>n</tt></li> <li>Tab - <tt>\\</tt><tt>t</tt></li> </ul>


The values of the inputs are available as <tt>input1</tt>, <tt>input2</tt>, <tt>input3</tt>, <tt>input4</tt> and <tt>input5</tt>. The input values can be of type <tt>float</tt>, <tt>string</tt>, <tt>boolean</tt> and <tt>any</tt>. Logical, relational, numerical and equality operators can be used on the values of the supported types. Logical operators are case insensitive, so for example, <tt>AND</tt> and <tt>And</tt> are allowed. Built-in methods on the <tt>float</tt>, <tt>integer</tt>, <tt>string</tt> and <tt>boolean</tt> types can be called, including <tt>x.abs()</tt> (absolute value of <tt>x</tt>), <tt>x.pow(y)</tt> (raise <tt>x</tt> to the power <tt>y</tt>), <tt>x.sin()</tt> (sine of <tt>x</tt> in radians), <tt>x.round()</tt> (rounds <tt>x</tt> to the nearest integer), and <tt>s.ltrim()</tt> (remove whitespace from the start of the string <tt>s</tt>). Built-in static methods of the supported types can be called by specifying the type name, followed by a dot (<tt>.</tt>) and the method name, for example, <tt>float.max(input1, input2)</tt> (find the larger of two input values). Built-in constants on the supported types can be accessed by specifying the type name, followed by a dot (<tt>.</tt>) and the constant name, for example, <tt>float.E</tt> (Euler's constant). Values of type <tt>any</tt> are unpacked at runtime to evaluate the expression. After unpacking, the value must be of type <tt>float</tt>, <tt>string</tt> or <tt>boolean</tt>. The type checker tries to validate the expressions during the validation phase, but this is not always possible with the <tt>any</tt> type. So if an expression contains the <tt>any</tt> type, even if it passes the validation phase, it can still fail at runtime due to a wrong type of variable being passed or an unsupported operation being performed. For a full list of built-in methods and constants, consult the API <a target="_blank" rel="external noopener" href="https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ApaDoc_apamadoc_documentation.html%23">Reference for EPL (ApamaDoc)</a>.


Some examples: <ul> <li>Convert Fahrenheit to Celsius: <tt>(input1 - 32) * 5/9 </tt></li> <li>Convert days to seconds: <tt>input1 * 86400 </tt></li> <li>Average of 4 inputs: <tt>(input1 + input2 + input3 + input4) / 4 </tt></li> <li>Threshold comparison: <tt>input1 &gt; 3.1412 </tt> (but also see the Threshold block)</li> <li>Pythagoras to compute the hypotenuse of a right-angled triangle: <tt>(input1.pow(2) + input2.pow(2)).sqrt() </tt></li> <li>Comparison to 3 decimal places: <tt>(input1 * 1000 - (input1 * 1000).fractionalPart()) = (input2 * 1000 - (input2 * 1000).fractionalPart()) </tt></li> <li>Range check: <tt>input1 &gt;= 1 and input1 &lt;= 10</tt></li> <li>String comparison: <tt>input1 = "my value"</tt></li> <li>Larger value: <tt>float.max(input1, float.PI)</tt></li> <li>Remainder of integer division: <tt>input1.round() % input2.round()</tt></li> </ul>

#### Parameters

|Name|Description|Type|
|:---|:---|:---|
|Expression|An expression - a string representation of an EPL expression.<br><br>Similar to EPL expressions, but with the differences as described above.|string|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|input1|First input, to be used as <tt>input1</tt> in the expression.|any|
|input2|Second input, to be used as <tt>input2</tt> in the expression.|any|
|input3|Third input, to be used as <tt>input3</tt> in the expression.|any|
|input4|Fourth input, to be used as <tt>input4</tt> in the expression.|any|
|input5|Fifth input, to be used as <tt>input5</tt> in the expression.|any|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Result|Result of the expression.|any|



### From Base N

**apama.analyticsbuilder.blocks.FromBaseN**

Converts a base N string to a float.

The input string can be in any integer base from 2 to 36, where letters of the English alphabet are used as digits for bases above 10. Common bases are 2 (binary), 8 (octal), 10 (decimal) and 16 (hexadecimal). The number being converted can contain a radix point.


Conversion between two arbitrary bases can be achieved by chaining this block with the To Base N block.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Input Base|The number base of the input stream, in the range 2 to 36.|integer|Default: 16|
|Radix Character|The character to use as the radix point. Expected to be a dot or a comma.|Option - one of:<ul><li>Dot</li><li>Comma</li></ul>|Default: Dot|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Base N|String input in base N.|string|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Float|Numeric output.|float|



### KPI

**apama.analyticskit.blocks.cumulocity.KPI**

Compares a value against either a KPI (Key Performance Indicator) or the data point of a device.

This block uses data from the KPI input port or from the device which contains data points. It extracts the units, label, and the red and yellow ranges. The output indicates whether the value is within the red or yellow range specified by the KPI or data point.


The KPI input can provide properties, typically from a KPI-managed object, which include the red and yellow ranges, the unit and the label. If the device contains a data point for the specified fragment and series, then the values from the data point override those from the KPI.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Input Source|The device or group of devices which contains a data point. If specified, then this device (typically the same device as the measurement source) is checked to see if it contains a data point for the specified fragment and series. If it contains a data point, the red and yellow range values from the source object are used in place of the KPI values. The model editor uses the current device or asset name. This is mapped internally to the inventory identifier.|string|Optional|
|Data Point Fragment and Series|This parameter must be specified if the Input Source parameter is specified. It specifies a data point from the source object. This is typically the same as the fragment and series of the measurement source.<br><br>The data point fragment and series must be specified as <tt>fragment.series</tt>.|string|Optional|
|Upper end of yellow range exclusive|If set, the upper end of the yellow range is treated as being exclusive.|boolean|Default: false|
|Upper end of red range exclusive|If set, the upper end of the red range is treated as being exclusive.|boolean|Default: false|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|Numeric value to compare with the defined ranges.|float|
|KPI|Object containing the <tt>c8y_Kpi</tt> property.|pulse|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Red|Is set to <tt>true</tt> when the value is in the red range (if a red range is defined).|boolean|
|Yellow|Is set to <tt>true</tt> when the value is in the yellow range (if a yellow range is defined).|boolean|
|Unit|The unit name from the data point.|string|
|Label|The label name from the data point.|string|



### Limit

**apama.analyticsbuilder.blocks.Limit**

Outputs a value that is kept within the defined upper and lower limits.

The input value is limited so that the output does not exceed the boundaries defined by the Lower Limit and Upper Limit parameters. If the input violates either limit, then the output is set to the parameter value, otherwise the value is passed through unchanged.


It is only mandatory to provide one of the limits. If this is the case, then the input is only limited in the direction of the specified parameter.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Upper Limit|Any input above this value results in the output being capped at this value.|float|Optional|
|Lower Limit|Any input below this value results in the output being capped at this value.|float|Optional|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value.|float|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Output|The input value, if it is within the limits defined by the Lower Limit and Upper Limit parameters. If the input value exceeds one of the limit parameters, it is set to the value of that parameter.|float|



### Machine Learning

**apama.analyticskit.blocks.core.Zementis**

Invokes the specified Machine Learning model that scores the input data.

To use this block, the Machine Learning application needs to be available with the respective Machine Learning models in the tenant.


If the Machine Learning model does not yet exist, use the Machine Learning application to add it. If you have added the Machine Learning model while your Analytics Builder model was still in edit mode, exit the model editor and then edit your Analytics Builder model once more. This refreshes the list of available Machine Learning models and you can then select the newly added model.


Block inputs correspond to the Machine Learning model's inputs (that are marked Active) in the order specified by the Machine Learning model. All inputs used by the model must be connected. Outputs correspond to the outputs as specified by the Machine Learning model. If a PMML output is specified as "JSON", then the block outputs a string version of the JSON, but the properties of the object are also available as extra values which can be extracted using the Extract Property block, which is the recommended way of unpacking multiple values from such an output. Currently, timestamp inputs are not supported.

#### Parameters

|Name|Description|Type|
|:---|:---|:---|
|Machine Learning Model|Name of the Machine Learning model.|string|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value 1|Input value 1.|any|
|Value 2|Input value 2.|any|
|Value 3|Input value 3.|any|
|Value 4|Input value 4.|any|
|Value 5|Input value 5.|any|
|Value 6|Input value 6.|any|
|Value 7|Input value 7.|any|
|Value 8|Input value 8.|any|
|Value 9|Input value 9.|any|
|Value 10|Input value 10.|any|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Output 1|Output value 1.|any|
|Output 2|Output value 2.|any|
|Output 3|Output value 3.|any|
|Output 4|Output value 4.|any|
|Output 5|Output value 5.|any|
|Output 6|Output value 6.|any|
|Output 7|Output value 7.|any|
|Output 8|Output value 8.|any|
|Output 9|Output value 9.|any|
|Output 10|Output value 10.|any|



### Range

**apama.analyticsbuilder.blocks.Range**

Compares the input value against the defined lower and upper range values to detect whether the input is within or out of the range, or whether it crosses the range.

By default, the range includes the value for the lower range but excludes the value for the upper range. For example, if the lower range is 100 and the upper range is 200, then all values from 100 to 199 are within the range. 200 is considered to be out of the range.


A pulse is sent when the defined range is crossed. That is, when either the lower or upper range is crossed, or if the value goes from below the range to over the range (or vice versa) without ever being within the range.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Lower Range|The lower range value.|float|Optional|
|Include Lower Range|If selected, an input value equal to the lower range is considered to identify whether it is within or out of the range. If not selected, an input value equal to the lower range is not considered.|boolean|Default: true|
|Upper Range|The upper range value.|float|Optional|
|Exclude Upper Range|If selected, an input value equal to the upper range is not considered to identify whether it is within or out of the range. If not selected, such an input value is considered to identify whether it is within or out of the range.|boolean|Default: true|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value to validate against the defined range.|float|
|Reset|Resets the state of the block.|pulse|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Out of Range|Is set to <tt>true</tt> when the input value is not within the defined range.|boolean|
|In Range|Is set to <tt>true</tt> when the input value is within the defined range.|boolean|
|Crossed|Sends a pulse when the range is crossed.|pulse|



### Range Lookup

**apama.analyticskit.blocks.core.RangeLookup**

Finds the range in which the input value lies.

Ranges are defined using a list of unique upper bound values in increasing order. The lower bound of the first range depends on the value of the Minimum Value parameter. The lower bound of each subsequent range is defined by the upper bound of the previous range. The range to which an input value equal to a boundary value belongs depends on the Exclude Upper parameter. The block outputs the mapped value for the range the input lies within, or a failed flag if the input value is not within any of the ranges.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Minimum Value|The lower bound of the first range (first row). If nothing is specified, negative infinity is taken as the minimum value.|float|Optional|
|Ranges|A boundary and mapped value pair for the upper bound of a range for which to look up the input value and a mapped value that is to be used as the output value if the input value lies within the range.|List of Upper Bound value and Mapped Value|
|Exclude Upper|If selected, an input value equal to the upper bound of a row is considered to be part of the range of the next row. If not selected, such an input value is considered to be part of the range of the current row.|boolean|Default: true|
|Type|The type that is to be used for the output value.|Option - one of:<ul><li>Float</li><li>Boolean</li><li>String</li></ul>|Optional|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value for which the range is to be found.|float|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Mapped|The Mapped Value for the range that is matched.|any|
|Failed|Is <tt>true</tt> when the input does not lie in any range. Otherwise it is <tt>false</tt>.|boolean|



### Rounding

**apama.analyticskit.blocks.core.Rounding**

Rounds the input to a specified number of decimal points or to an integer, using a selectable rule.

Rounding a numerical value means replacing it by another value that is approximately equal but has a shorter and simpler representation.


The rules available for use are: <ul> <li>Up (or take the ceiling, or round towards plus infinity) rounds the input up to the nearest target number. </li> <li>Down (or take the floor, or round towards minus infinity) rounds the input down to the nearest target number.</li> <li>Towards Zero (or truncate, or round away from infinity) rounds the input towards zero to the nearest target number.</li> <li>Nearest (or round half up, or round half towards positive infinity) rounds to the nearest target number. Numbers that are equidistant from the two nearest target numbers are always rounded up. For example, value <tt>23.5</tt> gets rounded to <tt>24</tt>, but <tt>-23.5</tt> gets rounded to <tt>-23.</tt> </li> <li>Even or Nearest rounds to the nearest target number. Numbers that are equidistant from the two nearest target numbers are always rounded to the nearest even target. For example, <tt>0.5</tt> rounds down to <tt>0</tt> and <tt>1.5</tt> rounds up to <tt>2.</tt> Also known as Bankers Rounding.</li> </ul>


The value is rounded to the nearest 'target number' - this is a whole number (if the number of decimal points is zero), or rounded to the number of decimal points specified.  If the number of decimal points is negative, it is rounded to a power of 10. For example, if the number of decimal points is 2, it is rounded to the nearest 0.01 (that is, hundredths). If the number of decimal points is -3, it is rounded to the nearest 1000 (that is, thousands).

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Rule|The rounding rule to be applied.|Option - one of:<ul><li>Up</li><li>Down</li><li>Towards Zero</li><li>Nearest</li><li>Even or Nearest</li></ul>|
|Number of Decimal Points|The number of decimal points the input is to be rounded to.|integer|Default: 0|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value which is to be rounded.|float|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Rounded Value|The input value rounded to a specified number of decimal points or to an integer.|float|



### Threshold

**apama.analyticskit.blocks.core.Threshold**

Compares the input value against the defined threshold value to detect whether the input breaches the threshold or whether it crosses the threshold.

A breach occurs when the direction has been set to 'Above' and the input value is greater than the defined threshold value, or when the direction has been set to 'Below' and the input value is less than the defined threshold, or when the direction has been set to 'Above or Equal' and the input value is greater than or equal to the defined threshold value, or when the direction has been set to 'Below or Equal' and the input value is less than or equal to the defined threshold value.


A pulse is sent when the defined threshold value is crossed from any direction.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Threshold Value|This value is compared against the input value.|float|
|Direction|The direction in which to look: whether the input value is above, below or equal to the defined threshold, or whether it crosses the defined threshold.|Option - one of:<ul><li>Above</li><li>Above or Equal</li><li>Below</li><li>Below or Equal</li><li>Crossing</li></ul>|Default: Above|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|The input value to compare against the defined threshold value.|float|
|Reset|Resets the state of the block.|pulse|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Breached Threshold|Is set to <tt>true</tt> when the threshold is breached.|boolean|
|Within Threshold|Is set to <tt>true</tt> when the threshold is not breached.|boolean|
|Crossed Threshold|Sends a pulse when the threshold is crossed.|pulse|



### To Base N

**apama.analyticsbuilder.blocks.ToBaseN**

Converts a float to a base N string.

The output string can be in any integer base from 2 to 36, where letters of the English alphabet are used as digits for bases above 10. Common bases are 2 (binary), 8 (octal), 10 (decimal) and 16 (hexadecimal). The number being converted can contain a radix point. The output is calculated to a maximum precision of 16 radix places.


Conversion between two arbitrary bases can be achieved by chaining this block with the From Base N block.

#### Parameters

|Name|Description|Type|Notes|
|:---|:---|:---|:---|
|Output Base|The number base of the output stream, in the range 2 to 36.|integer|Default: 16|
|Radix Character|The character to use as the radix point. Expected to be a dot or a comma.|Option - one of:<ul><li>Dot</li><li>Comma</li></ul>|Default: Dot|

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Float|Numeric input.|float|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|Base N|String output in base N.|string|


