---
date:
title: Fixed OPC-UA reverse address space scanner NullPointerException when last processed node was not root 
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
ticket: DM-3594
version: 10.20.82.0
---
In previous OPC-UA Gateway versions it was possible to get a NullPointerException during reverse address space scan in rare cases when the last processed node was not a root node.