---
date: ""
title: Cockpit app now supports the hideNavigator configuration option
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
The cockpit app did not properly support the hideNavigator configuration option which allows hiding the navigator menu on the left side. This has been fixed so that setting hideNavigator to true in the app descriptor now properly hides the navigator menu in the cockpit app as expected. This change improves consistency of the hideNavigator option across different app types and makes it easier to control the visibility of the navigator menu in cockpit apps.