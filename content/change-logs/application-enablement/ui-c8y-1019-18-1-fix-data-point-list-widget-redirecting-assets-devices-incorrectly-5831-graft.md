---
date: ""
title: Data point list widget now redirects to the correct asset's devices
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
ticket: MTM-57677
version: 1019.18.1
---
In the past, when clicking on a data point in the data point list widget, users were sometimes redirected to the wrong asset's devices. This issue has now been resolved. With this fix, clicking on a data point in the data point list widget will always take the user to the correct asset's devices as expected. The change improves the usability and navigation within the application.