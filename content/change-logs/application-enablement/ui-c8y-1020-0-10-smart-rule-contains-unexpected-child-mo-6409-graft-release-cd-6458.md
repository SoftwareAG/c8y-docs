---
date: ""
title: Smart rules list now contains a children column if child assets are assigned to a managed object
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-57897
version: 1020.0.10
---
When smart rule is created in context of parent device, during smart rule creation it is possible to select child device. When smart rule is saved it automatically becomes active for selected asset. Then on list of smart rules it is possible to see children column and that it is active for child device.