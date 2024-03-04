---
date: ""
title: Configuration UI gets supported security mode list from LWM2M agent
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
version: 1019.6.11
---
The Configuration UI now gets the supported security mode list from the LWM2M agent. This allows the UI to display the available security modes for selection. The supported modes are retrieved dynamically from the agent rather than being hardcoded in the UI.