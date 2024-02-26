---
date: ""
title: Map widget without assigned device in dashboard when connecting smartphone
product_area: Application enablement \u0026 solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-57689
version: 1019.6.4
---
The Map widget displayed in the dashboard did not have a device assigned to it when connecting a smartphone. This issue has been fixed so that the Map widget correctly assigns the connected smartphone as the device to display location data from.