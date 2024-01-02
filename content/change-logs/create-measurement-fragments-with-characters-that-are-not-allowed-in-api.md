---
date: 2023-12-06T10:20:18.522Z
title: Create measurement fragments with characters that are not allowed in API
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-m1iHjqikD
    label: Device Management
component:
  - value: component--KIsStyzM
    label: Device Management application
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: DM-2782
version: 10.18.494.0
---
In device protocols, users can now longer create measurement fragments (<b>Measurement type</b> and <b>Measurement series</b> fields) which contain characters that are not allowed by the Measurements API.