---
date: 2024-03-28
title: Changing the endpoint name in the LWM2M configuration view automatically adjusts external ID
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
ticket: DM-3084
version: 10.18.540.74
---

The modification of the LWM2M endpoint name via the device's LWM2M configuration view now triggers the automatic adjustment of the corresponding external identifier, designated with the type c8y_Id, ensuring seamless synchronization between the endpoint name and its associated external ID.