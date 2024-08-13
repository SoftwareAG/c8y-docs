---
date: ""
title: Adjust the dashboard delete button permissions check to use the correct set of required roles
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
Fixed dashboard delete button permissions check to use correct roles. Previously, the button was enabled for users without deletion rights, causing confusion. Now, it's only enabled for users with proper permissions, accurately reflecting access rights.