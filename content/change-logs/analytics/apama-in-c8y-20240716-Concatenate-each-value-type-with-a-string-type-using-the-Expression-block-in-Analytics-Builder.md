---
date: 
title: Concatenate each value type with a string type using the Expression block in Analytics Builder
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Analytics
component:
  - value: component-M5-cepIIS
    label: Streaming Analytics
build_artifact:
  - value: tc-KXXmo2SUR
    label: apama-in-c8y
ticket: PAB-4265
version:
---
The [Expression](https://cumulocity.com/docs/streaming-analytics/block-reference/#expression) block in the Analytics Builder model editor has been updated to allow you to concatenate string and non-string values, similar to EPL. This is useful, for example, if you want to specify an expression like the following: <tt>"The current temperature is " + input1 + " degrees Celsius"</tt>.
