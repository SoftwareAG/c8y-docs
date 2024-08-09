---
date: ""
title: Handle newly created Angular projects created with standalone flag set to true, when adding Cumulocity IoT schematics
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
ticket: MTM-56831
version: 1020.16.0
---
Previously, adding {{< product-c8y-iot >}} schematics to Angular projects initialized with the standalone flag set to true failed. This issue has been resolved, allowing successful integration of {{< product-c8y-iot >}}schematics into standalone Angular projects.