---
date: ""
title: Added a permission check for the copy dashboard action
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
ticket: MTM-59454
version: 1020.2.5
---
Added a permissions check for the copy dashboard action. The system will now verify that the user has the necessary permissions before allowing them to copy a dashboard. If the user lacks the necessary permissions, the copy button will be disabled.