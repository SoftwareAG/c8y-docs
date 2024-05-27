---
date: ""
title: Asset property default value displayed in sub-asset edit mode after clearing the value
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
ticket: MTM-58456
version: 1020.0.0
---
When editing an asset property value in the subassets view, the default value was still displayed even after the user had cleared the value. This issue has now been resolved. With this fix, when a user clears an asset property value in the subassets view and saves the changes, the field will be empty as expected without retaining the default value.
