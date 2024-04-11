---
date: 2024-03-28
title: Improved robustness of LWM2M client registration process
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
ticket: DM-3124
version: 10.18.540.61
---

A race condition encountered during simultaneous LWM2M client de-registration and new registration requests has been resolved, improving overall robustness in the registration process.