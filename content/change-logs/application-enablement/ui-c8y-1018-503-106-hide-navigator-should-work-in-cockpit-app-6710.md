---
date: ""
title: Hide navigator option now works in the Cockpit application
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
ticket: MTM-60045
version: 1018.503.106
---
The Cockpit application did not properly support the `hideNavigator` configuration option which allows hiding the navigator menu on the left side. This issue has been fixed so that setting `hideNavigator` to true in the app descriptor now properly hides the navigator menu in the Cockpit application as expected. This change improves the consistency of the hideNavigator option across different applications.