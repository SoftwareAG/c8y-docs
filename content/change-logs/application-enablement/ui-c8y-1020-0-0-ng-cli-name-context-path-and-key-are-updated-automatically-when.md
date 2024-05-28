---
date: ""
title: Ng-cli name, context-path and key are updated automatically when they are not present in the "cumulocity.config.ts" file.
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
ticket: MTM-57348
version: 1020.0.0
---
If `ng-cli name`, `context-path` and `key` are not present in the *cumulocity.config.ts* file they are automatically derived from the `name` property in the *package.json* file.