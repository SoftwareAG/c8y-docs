---
date: 2024-08-06
title: Fixed performance regression for count queries and inventory roles 
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
ticket: MTM-60283
version: 10.18.540.182
---
Since release y2024 platform have faced performance regression which can be observed
only on higher number of concurrent requests using inventory roles based access control