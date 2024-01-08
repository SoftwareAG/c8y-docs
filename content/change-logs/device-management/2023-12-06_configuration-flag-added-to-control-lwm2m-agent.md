---
date: 2023-12-06T15:57:43.128Z
title: Configuration flag added to control LWM2M agent
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area: Device Management
component:
  - value: component-1KLUzmqfe
    label: LWM2M
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: DM-2292
version: 10.18.107.0
---
The configuration flag <code>fwResetStateMachineOnStart</code> has been added to control if the LWM2M agent resets the firmware update state machine on the client at the beginning of a firmware update. The default of this flag is <code>true</code> which matches the existing behaviour of the LWM2M agent. It is available in the [device registration settings](https://cumulocity.com/docs/protocol-integration/lwm2m/#device-registration-settings).
