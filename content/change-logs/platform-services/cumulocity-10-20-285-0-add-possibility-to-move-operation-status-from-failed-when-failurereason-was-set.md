---
date: ""
title: Add possibility to move operation status from FAILED when "failureReason"
  was set.
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
ticket: MTM-51764
version: 10.20.285.0
---
Previously, when operation was moved to FAILED status with "failureReason", it was not possible to move to any other status because "failureReason" can't exist for other statuses.
Now "failureReason" is automatically removed when moving operation from FAILED status.