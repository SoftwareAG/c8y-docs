---
date: ""
title: [MTM-60181] add hookService for alarm detail button and alarm list indicator (#6812)
product_area: Application enablement & solutions
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-60182
version: 1020.14.0
---
To provide more flexibility for customizing the alarm list and detail views, hook services have been added for the alarm detail button and the alarm list indicator. This change allows you to modify the rendering and behavior of these UI elements by implementing the respective hook service interfaces. Existing alarm list and detail views are not affected by this change and will continue to work as before, unless you explicitly customize them via the new hook services.