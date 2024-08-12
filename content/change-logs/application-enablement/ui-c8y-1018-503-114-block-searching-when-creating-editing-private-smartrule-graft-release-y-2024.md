---
date: 2024-08-12
title: Block device search when creating or editing private smart rules
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
ticket: MTM-55913
version: 1018.503.114
---
In the past, it was possible to search for devices when creating or editing private smart rules, which could potentially lead to incorrect device assignments. With this change, searching for devices is now blocked when creating or editing private smart rules. This ensures that only explicitly selected devices are assigned to the smart rule, preventing unintended device assignments and improving the accuracy and reliability of private smart rules in the platform.
