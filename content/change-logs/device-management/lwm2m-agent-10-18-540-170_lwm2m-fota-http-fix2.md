---
date:
title: LWM2M firmware update via PULL HTTP(s) method works in a clustered agent environment
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3848
version: 10.18.540.170
---
The issue with LWM2M firmware updates via the PULL HTTP(s) method in a clustered agent environment has been resolved. Previously, the process would fail when a download request was directed to a different agent instance than the one that had prepared the download resource. 
