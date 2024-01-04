---
date: 2023-12-06T15:54:36.563Z
title: LWM2M agent persists all registration update parameters
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-m1iHjqikD
    label: Device Management
component:
  - value: component-1KLUzmqfe
    label: LWM2M
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: DM-2503
version: 10.18.196.0
---
The LWM2M agent now correctly persists all registration update parameters. Previously, the LWM2M agent did not store changes of registration parameters, for example, updated registration lifetimes. This is now fixed.
