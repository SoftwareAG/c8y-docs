---
date: ""
title: Avoid colliding Leaflet versions by adding noConflict
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-59809
version: 1020.2.12
---
In order to prevent conflicts between different versions of the Leaflet library used in Cumulocity IoT to render maps, the noConflict mode has been added. Previously, if multiple versions of Leaflet were loaded on the same page, it could lead to unexpected behavior and errors. With this change, each version of Leaflet can be used independently without interfering with others. This ensures that Cumulocity IoT applications using Leaflet will work reliably, even if other parts of the system or custom widgets also use different versions of the library.