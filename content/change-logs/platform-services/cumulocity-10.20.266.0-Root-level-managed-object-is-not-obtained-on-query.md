---
date: ""
title: Root level managed object is not found by querying with the onlyRoots flag
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-OG_650_b2
    label: Core platform
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-56734
version: 10.20.266.0
---
Fixed an issue in inventory with finding an asset by the onlyRoots flag when the object is removed from the asset hierarchy and becomes the root object again.