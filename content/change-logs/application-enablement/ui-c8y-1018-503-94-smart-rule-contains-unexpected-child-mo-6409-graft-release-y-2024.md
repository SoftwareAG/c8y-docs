---
date: ""
title: Smart rules list now always shows the children column properly if child assets are assigned to a managed object
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
ticket: MTM-57897
version: 1018.503.94
---
If a smart rule is created for a parent device, during smart rule creation you can select for which child devices the smart rule should become active. When the smart rule is saved it automatically becomes active for the selected assets. In the smart rules list, a children column is displayed showing for which child device the smart rule is active.