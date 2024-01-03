---
date: 2023-12-06T10:44:26.354Z
title: Fixed issue with smart rules editing
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-YdSEScrEC
    label: Cockpit
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: MTM-49364
version: 10.18.467.0
---
Editing smart rules did not work properly in case of missing (removed) devices. Now missing devices are removed automatically, and smart rules can be edited properly.
