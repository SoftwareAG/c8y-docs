---
date: 2024-03-11T10:07:48.480Z
title: LWM2M agent processes large LWM2M bulk registration reliably
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
ticket: DM-3141
version: 10.18.540.69
---
LWM2M bulk registrations and removals processed by the LWM2M agent were unreliable due to a race condition. This issue has been fixed and bulk registrations are now processed reliably.
