---
date: 2023-12-06T13:10:46.129Z
title: New configuration flag in LWM2M device registration settings for firmware reset
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Device management & connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: " DM-2292"
version: 10.18.107.0
---
The configuration flag <code>fwResetStateMachineOnStart</code> has been added to control if the LWM2M agent resets the firmware update state machine on the client at the beginning of a firmware update. The default of this flag is <code>true</code> which matches the existing behaviour of the LWM2M agent. It is available in the [device registration settings](https://cumulocity.com/docs/protocol-integration/lwm2m/#device-registration-settings).
