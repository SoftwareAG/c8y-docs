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
When a device using LWM2M sends a registration or update to the LWM2M agent, the agent also connects to a real-time channel. This allows immediate execution of user-defined actions on the device during a set period determined by the LWM2M agent.

Changes were made to address two cases:
1. Previously, if a device updated its registration within the real-time subscription period, the subscription period wouldn't extend, and the device would be automatically unsubscribed. Now, the real-time subscription period is renewed with each registration update.
2. Initially, when a device operation occurred, it extended the real-time subscription based on a specified time-to-live extension period. If the real-time period expired sooner, the extension didn't apply. Now, the extension is added on top of the existing real-time subscription period, allowing for longer subscriptions.
