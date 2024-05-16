---
date: 2024-03-26T10:45:36.353Z
title: SmartREST Inventory GET templates issue fixed
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - label: Device Management
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-2126
version: 10.18.7.0
---
SmartREST Inventory GET templates created in the UI did not generate responses when there was no external ID type declared in the template. This issue has been addressed for both existing and newly created templates.
