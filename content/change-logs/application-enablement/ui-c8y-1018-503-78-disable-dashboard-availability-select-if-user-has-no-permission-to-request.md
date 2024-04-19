---
date: ""
title: Disable dashboard availability select if user has no permission to request roles to populate it. (#6173) [GRAFT][release/y2024] (#6180)
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-57128
version: 1018.503.78
---
Previously, the dashboard availability select was always enabled for users, even if they did not have permission to request the roles necessary to display availability select list. With this change, the dashboard availability select is now hidden for users who do not have permission to request roles. User need User management READ permission to see and modify availability property of dashboard.