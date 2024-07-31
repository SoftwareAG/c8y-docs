---
date: ""
title: Prevent pasting device dashboards into groups and groups dashboard into devices enhancement
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
ticket: MTM-59834
version: 1020.13.3
---
Previously it was possible to click **Paste** when copying a device dashboard and pasting it into a group (or vice versa), which resulted in an error. Now, the paste button is disabled and information for the reason is provided.