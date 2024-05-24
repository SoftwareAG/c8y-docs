---
date: ""
title: Fixed widget dragging in dashboards
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
ticket: MTM-59259
version: 1020.0.0
---
Angular CDK library update caused our dashboard widget drag feature to stop working. We aligned our logic to new version of package so dragging widgets is possible again.