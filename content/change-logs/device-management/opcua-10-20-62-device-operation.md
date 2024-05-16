---
date: 2024-05-16
title: Support for OPC UA operations directly on generated devices
product_area: Device management & connectivity
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-Tf05_KQ-B
    label: OPC UA
build_artifact:
  - value: tc-MLn0oFRX-
    label: opcua
ticket: DM-401
version: 10.20.62.0
---
The new feature allows to create operations for generated devices (by device protocol). Not all OPC UA operations allowed for devices. Only node specific operations can be executed on that level. General operations like address-space scan etc. are still only allowed on OPC UA Server. An additional configuration (`gateway.operation.validateDeviceOperationNodes`) was added to enable/disable a validation check if the node specific operation is done on a node which belongs to the device. If the the check is enabled the gateway will execute the operation and create an alarm if node doesn't belong to device node list.