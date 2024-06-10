---
date: ""
title: Canceling the dialog on reaching the maximum number of archives no longer displays an error message
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
ticket: MTM-58926
version: 1018.503.95
---
In the past, when a user cancelled the modal dialog that warned about reaching the maximum number of archives, an error message was incorrectly displayed even though no actual error had occurred. This unwanted error message has now been removed. Users can cancel the maximum number of archives warning modal without seeing an error message.