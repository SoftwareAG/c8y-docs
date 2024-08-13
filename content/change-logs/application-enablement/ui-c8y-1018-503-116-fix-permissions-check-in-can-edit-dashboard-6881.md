---
date: ""
title: Dashboards can only be deleted by users with appropriate permissions
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-59456
version: 1018.503.116
---
Previously, users could delete dashboards without having the required permissions. This issue has been fixed. Now the **Delete** button is only enabled for users with the appropriate permissions, accurately reflecting the access rights.