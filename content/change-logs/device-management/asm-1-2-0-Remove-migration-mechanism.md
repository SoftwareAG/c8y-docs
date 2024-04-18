---
date:
title: Removal of migration from ASM v1 to ASM v2 data model
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3475
version: 1.2.0, 10.16.0.478, 10.18.0.398, 10.17.0.506, 10.18.540.102
---
The issue of software packages in `c8y_InstalledSoftwareList` being emptied after ASM is resubscribed has been resolved. 
The mechanism of migrating the internal data model from asm-v1 to asm-v2 has been removed. 