---
date: ""
title: Services component extracted as separate plugin
product_area: Device management & connectivity
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-2973
version: 1020.0.0
---
The services component was previously an integral part of the default Device Management application. With this change, the services component has been restructured to function as a separate plugin. It remains included by default but now offers the flexibility to be added or removed as needed. 