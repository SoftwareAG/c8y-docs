---
date: 2024-07-23
title: "Issue with data broker message forwarding after platform network reconfiguration"
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-V6J_FcOT2
    label: Data broker
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-59331
version: 1020.501.0
---
There was an issue where data broker connectors stopped forwarding messages due to the platform network reconfiguration. This was fixed along with some robustness changes to ensure message forwarding is more consistent e.g. during platform maintenance.  
