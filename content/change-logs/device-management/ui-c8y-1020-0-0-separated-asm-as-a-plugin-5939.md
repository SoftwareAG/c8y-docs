---
date: ""
title: Separated Advanced software management functionality as a plugin. (#5939)
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
ticket: DM-3471
version: 1020.0.0
---
The Advanced software management logic was previously an integral part of the default Device Management application. With this change, the Advanced software management service has been restructured to function as a separate plugin. It remains included by default but now offers the flexibility to be added or removed as needed. (#5939)