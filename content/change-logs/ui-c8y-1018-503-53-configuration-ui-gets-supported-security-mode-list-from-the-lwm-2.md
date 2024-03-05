---
date: ""
title: Configuration UI gets supported security mode list from LWM2M Agent
product_area: Device management & connectivity
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-3161
version: 1018.503.53
---
The Configuration UI now gets the supported security mode list from the LWM2M agent. This allows the UI to display the available security modes for the user to select when configuring the LWM2M client. The supported security modes are retrieved directly from the LWM2M agent via its API.