---
date:
title: Installed software packages are no longer emptied after restart of the Advanced software management microservice  
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
version: 10.18.540.102
---
An old data model migration mechanism was erroneously removing installed software information from devices when the Advanced software management microservice was resubscribed or restarted. We have removed this mechanism entirely so that existing data is no longer modified. 
