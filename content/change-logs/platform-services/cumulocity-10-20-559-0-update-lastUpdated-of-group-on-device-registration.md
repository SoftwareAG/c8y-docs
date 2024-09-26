---
date: 2024-09-12
title: Update "lastUpdated" fragment of a group when device is added upon registration
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
ticket: MTM-55525
version: 10.20.559.0
---
The device registration request now contains the group, that the device will be assigned to once the registration is successful.
Group's "lastUpdated" fragment is now updated to current date when device is successfully added.