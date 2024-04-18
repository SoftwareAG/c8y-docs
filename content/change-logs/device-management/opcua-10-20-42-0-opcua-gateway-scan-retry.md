---
date:
title: Improved configuration for OPC UA device gateway node scan retries
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
ticket: DM-2992
version: 10.20.42.0
---
An issue has been resolved that the OPC UA device gateway property which contains the count of retries for the node scan (`gateway.scanAddressSpace.retries`) was ignored.
A new OPC UA device gateway property has been added that allows to configure the pause time between retries (`gateway.scanAddressSpace.pauseMillisForRetry`) during the address space scan.