---
date: ""
title: Replace group creation modal in widgets with redirect to Groups view
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
ticket: MTM-58710
version: 1020.2.4
---
The Angularjs-based modal dialog for creating a new group from the widgets has been replaced. Instead of the modal, when a user tries to add a new group from the widgets, they will now be redirected to the Groups view where the add group modal is shown.