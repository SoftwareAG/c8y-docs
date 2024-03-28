---
date: 2024-03-28
title: LWM2M agent correctly rounds values from location object 6
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area: Device Management & Connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3136
version: 10.18.540.36
---

An issue prevented position information from the location object 6 to be populated into the device managed object if parts of the coordinates were reported with too high precision. This issue has been fixed. The LWM2M component now rounds the values correctly to the supported level of precision. 