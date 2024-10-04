---
date: ""
title: Enable deletion of child devices in Device Management
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-3951
version: 1020.28.8
---
In Device Management, the action to delete child devices from the "Child devices" tab was removed, requiring users to navigate to the device details page for deletion. With this change, child devices can now be directly deleted from the "Child devices" grid view.