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
When the LWM2M device sends a registration or registration update to the LWM2M agent, the LWM2M agent also subscribes to the real-time channel so that user-defined operations are immediately executed on this device during the instance level time-to-live configuration period of the LWM2M agent.

The changes are added for the following cases:
Firstly, when the device does a registration update to the LWM2M server within the previous realtime subscription period, then the subscription expiry period was not extended and the device is automatically unsubscribed from realtime.
This has been resolved by renewing the realtime subscription period every time when the device does a registration update.

Secondly, when a device operation is created, this operation extended the realtime subscription based on the instance level time to live extension period defined for the LWM2M agent for the cases of the realtime time to live period being expired earlier than this extension.
This is now changed to add the extension on top of realtime subscription time to live period in order to have longer realtime subscription periods.
