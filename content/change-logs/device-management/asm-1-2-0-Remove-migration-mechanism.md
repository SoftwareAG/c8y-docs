---
date:
title: Software packages in c8y_InstalledSoftwareList are no longer emptied after resubscription of the ASM microservice  
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-TlhlHnKTa
    label: advanced-software-mgmt
ticket: DM-3475
version: 1.2.0
---
The issue has been resolved that software packages in `c8y_InstalledSoftwareList` were emptied after the Advanced Software Management microservice (ASM) was resubscribed. 
An old data model migration mechanism was erroneously removing installed software information from devices when the Advanced software management microservice was resubscribed or restarted. We have removed this mechanism entirely so that existing data is no longer modified. 
