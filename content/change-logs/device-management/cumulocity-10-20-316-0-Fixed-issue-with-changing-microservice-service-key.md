---
date:
title: LWM2M agent changes external microservice properly
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
ticket: DM-2674
version: 10.20.317.0
---

Changing the external microservice was not working as expected because the LWM2M agent would still point the custom
actions to the old microservice as the service-key was not being updated.This LWM2M agent version fixes the bug by
updating the service-key when the external microservice is changed.