---
date: 
title: Extract a property with a period in its name using the Extract Property block
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
ticket: PAB-4604
version: 
---
The [Extract Property](https://cumulocity.com/docs/streaming-analytics/block-reference/#expression) block in Analytics Builder now allows you to use the value of the **Property Path** parameter as a property name. 
This is helpful if you want to extract a property that has a period (.) in its name. A new checkbox called **Treat Property Path as Property Name** has been added for this purpose. 
For example, if the **Treat Property Path As Property Name** checkbox is selected and the **Property Path** parameter is specified as `location.city`, then the property name `location.city` is extracted from the input value.
For compatibility, the previous behavior remains as the default, that is, the new checkbox is not selected by default.
