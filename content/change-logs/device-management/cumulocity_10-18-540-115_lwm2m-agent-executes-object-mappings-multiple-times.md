---
date:
title: LWM2M agent executes object mappings multiple times on LWM2M 1.1 SEND
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3620
version: 10.18.540.115
---
When a LwM2M 1.1 Send request that included multiple timestamps is received, the LWM2M agent in some cases processed object resource mappings actions multiple times. This issue is now resolved to make mapping actions triggered only once.