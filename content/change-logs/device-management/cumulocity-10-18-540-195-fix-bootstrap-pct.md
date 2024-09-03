---
date:
title: LWM2M agent uses preferred content type requested by the device during a LWM2M bootstrap session
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
ticket: DM-3850
version: 10.18.540.195
---
The LWM2M agent used to ignore the preferred content type requested by the device during a LWM2M bootstrap session. This issue has been fixed and the LWM2M agent now uses the requested content type if it is provided by the device.
