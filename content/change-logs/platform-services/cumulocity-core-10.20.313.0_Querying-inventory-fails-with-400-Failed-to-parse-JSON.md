---
date: ""
title: Querying inventory fails with 400 Failed to parse JSON string
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
Added key validation for custom attributes to prevent creating empty keys in the inventory that cause issue with parsing when fetching data.