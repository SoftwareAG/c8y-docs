---
date: 
title: Skip null entries in Content Format
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
ticket: DM-4048
version: 10.18.540.218
---
The LwM2M agent previously didn't process requests when a faulty device sent a content format list containing null values. This issue has now been resolved - the agent skips the null values and continues with the device communication.
