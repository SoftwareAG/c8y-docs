---
date: 2024-05-05
title: OPC UA device gateway node scan retry properties
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
Issue that caused ignore of OPC UA device gateway property that contains the count of retries for the node scan (`gateway.scanAddressSpace.retries`) is resolved.
New OPC UA device gateway property is added that allows to configure pause length between retries (`gateway.scanAddressSpace.pauseMillisForRetry`) during address space scan.