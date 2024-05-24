---
date: ""
title: Dashboard widget update affects only one widget issue fix
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
ticket: MTM-59201
version: 1020.0.0
---
Previously, when more than one dashboard widget was edited, only changes from last edited widget were saved. Now every change is taken into account.