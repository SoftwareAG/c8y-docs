---
date: ""
title: Adding validation that prevents entering an empty key for custom attributes.
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
ticket: MTM-58302
version: 10.20.313.0
---
In the inventory, key validation has been added for custom attributes to prevent creating empty keys which cause issues with parsing when fetching data.