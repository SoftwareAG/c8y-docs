---
weight: 48
title: Logic
layout: redirect
---

### AND

**apama.analyticskit.blocks.core.And**

Performs a logical 'and' on the inputs.

If all the connected inputs are <tt>true</tt>, then the output will be <tt>true</tt>, else <tt>false</tt>. If any of the inputs is of type <tt>pulse</tt>, then the output will be a <tt>pulse</tt>. Any combination of <tt>pulse</tt> and <tt>boolean</tt> inputs is valid. The block functions even if some inputs are not connected.

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value 1|First input value to the block.|boolean|
|Value 2|Second input value to the block.|boolean|
|Value 3|Third input value to the block.|boolean|
|Value 4|Fourth input value to the block.|boolean|
|Value 5|Fifth input value to the block.|boolean|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|AND|The logical 'and' of the inputs.|pulseOrBoolean(value1, value2, value3, value4, value5)|



### NOT

**apama.analyticskit.blocks.core.Not**

Performs a logical 'not' on the input.

If the connected input is <tt>true</tt>, then the output will be <tt>false</tt>. If the connected input is <tt>false</tt>, then the output will be <tt>true</tt>.

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value|Input value to the block.|boolean|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|NOT|The logical 'not' of the input.|boolean|



### OR

**apama.analyticskit.blocks.core.Or**

Performs a logical 'or' on the inputs.

If any of the connected inputs is <tt>true</tt>, then the output will be <tt>true</tt>, else <tt>false</tt>. If all the inputs are of type <tt>pulse</tt>, then the output will be a <tt>pulse</tt>. Inputs must be of the same type. The block functions even if some inputs are not connected.

#### Input Port Details

|Name|Description|Type|
|:---|:---|:---|
|Value 1|First input value to the block.|boolean|
|Value 2|Second input value to the block.|boolean|
|Value 3|Third input value to the block.|boolean|
|Value 4|Fourth input value to the block.|boolean|
|Value 5|Fifth input value to the block.|boolean|

#### Output Port Details

|Name|Description|Type|
|:---|:---|:---|
|OR|The logical 'or' of the inputs.|sameAsAll(value1, value2, value3, value4, value5)|


