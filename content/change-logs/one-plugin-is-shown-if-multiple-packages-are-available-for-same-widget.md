---
date: 2023-12-06T14:15:21.154Z
title: One plugin is shown if multiple packages are available for same widget
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: MTM-54208
version: 10.18.394.0
---
In the application plugin view, if multiple packages (subscribed and custom) were available for the same widget, the platform displayed multiple entries for the same installed plugin. Now only one plugin is shown.