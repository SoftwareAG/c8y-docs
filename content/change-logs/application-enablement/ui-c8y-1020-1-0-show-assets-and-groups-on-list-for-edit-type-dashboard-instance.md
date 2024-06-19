---
date: ""
title: Assets and groups are now shown when editing dashboard instances
product_area: Application enablement & solutions
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-59255
version: 1020.1.0
---
Dashboard manager is showing dashboards for both devices and groups/assets type dashboards (for the latter one they could be created when application options hideTypeDashboardForAssets=false), but when you click 'Edit', new modal was showing target assets only for devices dashboards, but not for groups/assets (for the groups/assets list was empty). Now, when you click Edit, list was always populated with devices and groups/assests.