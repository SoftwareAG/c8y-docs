---
date: ""
title: Grid filter text not getting clear
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-3154
version: 10.18.0.227,10.19.5.13,10.18.503.44
---
In data grid columns using the simple FilteringFormRendererComponent to display filter input, the input value was not cleared even though the filter itself was reset. This is now fixed and input value is cleared when filter is reset.