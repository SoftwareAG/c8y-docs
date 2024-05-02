---
date:
title: Assign Loriot Admin Role to the Loriot agent output user for existing and new devices.   
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-ycWx1InI9
    label: loriot-agent
ticket: DM-3411
version: 10.18.540.104
---
Newly established LORIOT connections failed initially because the user account created for sending uplink requests from devices lacked the necessary permissions. This issue has been resolved by granting the required permissions to both existing and new connections.
