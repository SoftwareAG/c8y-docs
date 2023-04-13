---
weight: 72
title: Aggregate
layout: redirect
---

## Average (Mean)

**apama.analyticskit.blocks.core.Mean**

Calculates the mean of the values over time.

This block is suitable for continuous values, even if they are irregularly sampled. The time between inputs or samples is significant, while the number of samples is not. Use this block, for example, if the input is a physical property, such as temperature, that is sampled either regularly or irregularly (for example, only generating measurement values on a change in temperature).  Use the Discrete Statistics block instead of the Average (Mean) block for independent measurements, such as ticket sales, where the number of measurements is significant, but the time between measurements is not.


The mean is defined as the sum of the input's value multiplied by how long the input has stayed at that value, within an optional window, divided by the window duration or the time since the block was started or last reset, whichever is smallest.


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, the block uses an unbounded window. The Reset input port clears the window contents. Output is generated on any new input or, if the Output Threshold parameter is set, only when the output changes by more than the specified output threshold (which includes if no further input occurs, or the value only changes due to old entries expiring). The Sample input port can be used to force re-evaluation and generate the latest value.


See also the "Value types" topic in the Analytics Builder documentation for more details and an example of the frequency of output from this block and how values in windows behave.


If a window is configured, the block uses a set of 20 buckets, so the expired value is an approximation of the average value across a bucket.


Note:The Average (Mean) block generates the mean for an individual device. If the input comes from a group of devices, the mean is generated separately for each device in that group. To calculate and generate aggregate values for the group as a whole (not for individual devices), use the Group Statistics block.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|
|Output Threshold|If present, the output to be sent at the point when it changes by at least this value.<br><br>This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|Input for which the mean is to be calculated.|float|
|Reset|Clears the content of the window.|pulse|
|Sample|Forces re-evaluation of the current mean value and sends the output.|pulse|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Average|The sum of the value multiplied by how long it stays at that value divided by the total time.|float|



## Counter

**apama.analyticskit.blocks.core.Counter**

Gives a count of the total inputs and repeated inputs.

If two consecutive input values have different types, they will not be evaluated as repeat values. All other evaluations for if two values are equal to each other follow the same rules as EPL. For more information, refer <a target="_blank" rel="external noopener" href="https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ApaEplRef_types.html%23">Types</a>.

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|The input to be counted.|any|
|Reset|Reset the counters.|boolean|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Count|The total count of all the inputs.|float|
|Number Same|The current count of repeated inputs with the same value.<br><br>On a change of value, this is reset to one.|float|



## Discrete Statistics

**apama.analyticsbuilder.blocks.DiscreteStatistics**

Generates statistics of sum, count, average (mean), standard deviation, minimum and maximum for discrete input values.

This block is suitable for discrete time inputs, where the number of samples (or inputs) is significant, while the time between them is not. The Average (Mean) and Standard Deviation blocks are more suitable for continuous values that may be irregularly sampled, such as temperature readings. Use this block, for example, if each sample represents a transaction such as a ticket being sold.


If the Sample input port is not connected, every value is sampled. If a new value is received during the same activation period as a reset, the value is sampled after the reset, otherwise it is ignored. As every value is used, the standard deviation uses the generic formula: <tt>σ² = ∑(x - µ)² / N</tt>.


If the Sample input port is connected, the block only samples the data when the Sample input port receives a signal. In this case, the sampling standard deviation uses the formula: <tt>σ² = ∑(x - µ)² / (N-1)</tt>.


If reset and sample signals are received together, the reset is processed first.

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|The current value.|float|
|Sample|Use the current value in generating statistics. If left unconnected, all values are used.|pulse|
|Reset|Reset the state of the block.|pulse|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Sum|Sum of the sampled input values, <tt>∑x</tt>.|float|
|Count|Count of the number of sampled input values, <tt>N</tt>.|float|
|Average|Average (mean) of the sampled input values, <tt>µ = ∑x / N</tt>.|float|
|Standard Deviation|Standard deviation of the sampled input values. If all values are being sampled, with the Sample input port disconnected, the generic standard deviation, <tt>σ² = ∑(x - µ)² / N</tt>, is used. Otherwise the sampling standard deviation, <tt>σ² = ∑(x - µ)² / (N-1)</tt>, is used.|float|
|Minimum|Minimum of the sampled input values.|float|
|Maximum|Maximum of the sampled input values.|float|



## Gradient

**apama.analyticskit.blocks.core.Gradient**

Calculates the weighted linear regression gradient for the values.

A gradient measures the rate of change of a value over time. A positive gradient indicates an increase of the input values, and a negative gradient indicates a decrease of the input values. The magnitude of the gradient signifies the scale of change.


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, it uses an unbounded window and the block re-evaluates for every 1 second, and will use 1-second buckets. If a window is configured, the block will use a set of 20 buckets, so the time of expired values is an approximation to the nearest bucket interval. The first gradient output is generated only when a minimum of two buckets is available for computation.


The Reset input clears the content of the window. Sample input can be used to force re-evaluation and generate the latest value.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|The input value for which the gradient is to be calculated.|float|
|Reset|Clears the content of the window.|pulse|
|Sample|Forces re-evaluation of the current value and sends the output.|pulse|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Gradient|The gradient of the input values.|float|



## Group Statistics

**apama.analyticskit.blocks.core.GroupStatistics**

Generates periodic aggregate values across all the devices in a group for which the block has received input values.

This block generates the following aggregate values: <ul> <li>Minimum</li> <li>Maximum</li> <li>Device Count</li> <li>Average </li> <li>Standard Deviation</li> <li>Variance</li> </ul>


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, the block uses an unbounded window. Output is generated periodically as specified by the Output Period parameter.


If a window is configured, the block uses a set of 20 buckets, so the expired value is an approximation to the nearest bucket interval.


Note: The Group Statistics block calculates and generates aggregate values for the group as a whole (not for individual devices). To generate aggregates for an individual device in a group, use the Average (Mean), Standard Deviation, or Minimum/Maximum blocks. The Group Statistics block only considers devices from which it has received input values.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|
|Output Period (secs)|The amount of time (in seconds) between each output.<br><br>This must be a finite and positive number.|float|Default: 5.0|

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|Input value for which the aggregate values are to be calculated.|float|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Minimum|The smallest input value (closest to negative infinity) across all the devices in a group.|float|
|Maximum|The largest input value (closest to positive infinity) across all the devices in a group.|float|
|Device Count|The number of devices in a group for which input values have been received so far.|float|
|Average|The sum of the value multiplied by how long it stays at that value divided by the total time and the device count.|float|
|Standard Deviation|The standard deviation of the input values across all the devices in a group.|float|
|Variance|The variance of the input values across all the devices in a group.|float|



## Integral

**apama.analyticskit.blocks.core.Integral**

Calculates the integral of the input value over time.

Integral is defined as the sum of the input's value multiplied by how long the input has stayed at that value, within an optional window, since the block was started or last reset.


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, it uses an unbounded window. The Reset input clears the window contents. Output is generated on any new input or, if the Output Threshold parameter is set, only when the output changes by more than the specified output threshold (which includes if no further input occurs, or the value only changes due to old entries expiring). The Sample input can be used to force re-evaluation and generate the latest value.


If a window is configured, the block will use a set of 20 buckets, so the expired value is an approximation of the average value across a bucket.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|
|Output Threshold|If present, the output to be sent at the point when it changes by at least this value.<br><br>This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|Input for which the integral is to be calculated.|float|
|Reset|Clears the content of the window.|pulse|
|Sample|Forces re-evaluation of the current integral value and sends the output.|pulse|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Integral Value|The sum of the value multiplied by how long it stays at that value.|float|



## Minimum / Maximum

**apama.analyticskit.blocks.core.MinMax**

Calculates the minimum and maximum of a value over time.

The minimum is defined as the smallest value (closest to negative infinity) of  the input values in the window, and the maximum is defined as the largest value (closest to positive infinity) of the input values in the window.


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, the block uses an unbounded window. The Reset input clears the window contents. Output is generated on any new input that exceeds the current minimum or maximum, or, if the Window Duration parameter is set, when a previous minimum or maximum expires.


If a window is configured, the block uses a set of 20 buckets, so the time of expired values is an approximation to the nearest bucket interval.


Note: The Minimum/Maximum block generates the minimum and maximum for an individual device. If the input comes from a group of devices, these values are generated separately for each device in that group. To calculate and generate aggregate values for the group as a whole (not for individual devices), use the Group Statistics block.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|Input for which the minimum and maximum is to be calculated.|float|
|Reset|Clears the content of the window.|pulse|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Minimum|The smallest value in the window (closest to negative infinity).|float|
|Maximum|The largest value in the window (closest to positive infinity).|float|



## Standard Deviation

**apama.analyticskit.blocks.core.StandardDeviation**

Calculates the standard deviation and variance of the values over time.

This block is suitable for continuous values, even if they are irregularly sampled. The time between inputs or samples is significant, while the number of samples is not. Use this block, for example, if the input is a physical property, such as temperature, that is sampled either regularly or irregularly (for example, only generating measurement values on a change in temperature).  Use the Discrete Statistics block instead of the Standard Deviation block for independent measurements, such as ticket sales, where the number of measurements is significant, but the time between measurements is not.


Standard deviation is a measure that is used to quantify the amount of variation or dispersion of a set of data values. A low standard deviation indicates that the data points tend to be close to the mean of the set, while a high standard deviation indicates that the data points are spread out over a wider range of values.


The block can operate over a time-bounded window that is specified with the Window Duration parameter. If this parameter is not specified, the block uses an unbounded window. The Reset input port clears the window contents. The Sample input port can be used to force re-evaluation and generate the latest value. Output is generated on any new input or, if the Window Duration parameter is set, output is generated periodically on every new bucket that is added to the window.


If a window is configured, the block uses a set of 20 buckets, so the time of expired values is an approximation to the nearest bucket interval.


Note:  The Standard Deviation block generates the standard deviation and variance for an individual device. If the input comes from a group of devices, these values are generated separately for each device in that group. To calculate and generate aggregate values for the group as a whole (not for individual devices), use the Group Statistics block.

### Parameters

|Name|Description|Type|Notes|
|:----------|:----------|:----------|:----------|
|Window Duration (secs)|If present, the amount of time (in seconds) for which values are to be kept in the window.<br><br>This must be a finite and positive number.|float|Optional|

### Input Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Value|Input for which the standard deviation and variance is to be calculated.|float|
|Reset|Clears the content of the window.|pulse|
|Sample|Forces re-evaluation of the current value and sends the output.|pulse|

### Output Port Details

|Name|Description|Type|
|:----------|:----------|:----------|
|Standard Deviation|The standard deviation of the input values.|float|
|Variance|The variance of the input values.|float|


