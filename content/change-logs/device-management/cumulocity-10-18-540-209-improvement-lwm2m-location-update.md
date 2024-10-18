---
date: 2024-10-17
title: LWM2M location data handling has been improved
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Device Management & Connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3915
version: 10.18.540.209
---

In earlier LWM2M agent versions, device location updates occurred only when the device provided complete location object data.
Now, updates happen whenever both latitude and longitude resources are reported together.
