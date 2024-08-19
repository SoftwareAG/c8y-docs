---
date:
title: New validation on device type API and alarm creation on device type matching failure
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-Tf05_KQ-B
    label: OPC UA
build_artifact:
  - value: tc-MLn0oFRX-
    label: opcua
ticket: DM-2145
version: 10.20.79.0
---
A new validation for the device type API (CREATE and UPDATE operations) has been implemented to prevent duplicate 'browsePath' entries in the mappings. 
Additionally, if a device type matching fails, a MAJOR alarm will be triggered on the server.