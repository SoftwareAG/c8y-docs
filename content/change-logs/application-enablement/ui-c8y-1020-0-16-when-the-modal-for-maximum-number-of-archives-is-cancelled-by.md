---
date: ""
title: Error message no longer shown when user cancels maximum number of archives modal
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
version: 1020.0.16
---
In the past, when a user reached the maximum number of archives and the corresponding modal dialog was shown, canceling the modal would incorrectly display an error message. This has been fixed. Now, when a user cancels the maximum number of archives modal, no error message is shown anymore and the application behaves as expected. This change improves the user experience by avoiding unnecessary and confusing error messages.