---

date: 2024-04-26
title: Create an audit log with the date of the last alarm update
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
ticket: MTM-58098
version: 10.20.419.0
---

To create an audit for a repeating alarm, the alarm creation date was used, which resulted in the audit logs having past dates.
Currently, the date of the last alarm update is used to create an audit log.


