---
date: 2024-04-10T15:05:45.132Z
title: LWM2M device operations directly go to Pending state
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
ticket: DM-3601
version: 10.18.540.112
---
Previously,
the execution of LWM2M device operations was limited to a specific timeframe following the device's registration with the platform.
However, this timeframe remained static even after the device underwent registration updates,
despite the previous operational window not yet expiring.
This limitation has now been addressed,
ensuring that each LWM2M device registration update extends the device operations timeframe.

Furthermore,
the operational timeframe of LWM2M devices could also be extended if a new operation occurred before its expiration.
However, the extension previously began from the time of operation execution.
Now, if the execution time of a device operation, plus the extension duration,
exceeds the original timeframe, the extension time is added on top of the existing operational timeframe.
This enhancement ensures operations can continue smoothly beyond the initial expiration.