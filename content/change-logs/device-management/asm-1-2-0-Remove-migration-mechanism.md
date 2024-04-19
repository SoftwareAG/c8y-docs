---
date:
title: Software packages in c8y_InstalledSoftwareList are no longer emptied after resubscription of the Advanced Software Management microservice  
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
The issue has been resolved that software packages in `c8y_InstalledSoftwareList` were emptied after the Advanced Software Management microservice (ASM) was resubscribed. 
An old data model migration mechanism was erroneously removing installed software information from devices when the Advanced software management microservice was resubscribed or restarted. We have removed this mechanism entirely so that existing data is no longer modified. 