---
date: 2024-03-28
title: Removed data field from realtime API handshake responses
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-JlFdtOPva
    label: Rest API
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-55522
version: 10.18.371.0
---
The <code>data</code> field has been removed from realtime API handshake responses where it was not required and always had a "null" value.
