---
date: 2024-03-28
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
version: 10.18.540.74
---

In the custom action configuration of LWM2M device protocol resources, the exchange to another external decoder microservice
was not effective. This issue is now resolved.