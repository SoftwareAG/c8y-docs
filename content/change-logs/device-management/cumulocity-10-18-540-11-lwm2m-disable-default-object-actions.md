---
date: 2023-03-28
title: Disabling default object actions in the LWM2M configuration UI
change_type:
  - value: change-QHu1GdukP
    label: Feature
product_area: Device management & connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-1849
version: 10.18.540.11
---

The default handling of object instance actions for LWM2M objects 3, 4 and 6 can now be turned off. In addition, the default server-side firmware update state machine for object 5 can be disabled. These settings can be enabled/disabled in the device´s LWM2M configuration in the UI.