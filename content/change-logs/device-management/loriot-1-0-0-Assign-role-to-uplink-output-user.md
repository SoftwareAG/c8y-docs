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
version: 1.0.0
---
The Loriot agent output user was missing the Loriot Admin Role, due to which devices were unable to send uplink messages to cumulocity. 
This issue has now been addressed. Existing devices as well as new devices will now be able to send uplink messages, as the output user will be assigned the role. 