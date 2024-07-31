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
Previously it was possible to click paste button when copying device dashboard and pasting to group (and opposite way too), but dashboard was not pasted and error was shown. Now paste button is disabled and title with reason for it is added.