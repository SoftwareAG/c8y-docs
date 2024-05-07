---
date:
title: Object mapping actions no longer executed multiple times on LWM2M 1.1 send request
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
When a LWM2M 1.1 send request that includes multiple timestamps has been received, the object resource mapping actions have in some cases been processed multiple times by the LWM2M agent. This issue has been resolved to ensure that mapping actions get only triggered once.