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
The issue with LWM2M firmware updates via the PULL HTTP(s) method in a clustered agent environment has been resolved. Previous version used to have a data serialization problem that prevented HTTP(s) endpoint to start and blocked the update process.    
