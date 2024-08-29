---
date: 2024-08-29
title: Improved performance of Measurements API
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-OG_650_b2
    label: Core platform
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-60142
version: 10.20.541.0
---

Improved performance of `GET /measurement/measurements` endpoint when filtering by both `valueFragmentType` and `valueFragmentSeries`.
