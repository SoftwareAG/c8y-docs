---
date: 2023-12-06T15:41:30.864Z
title: Fixed widget behavior when real-time connection was interrupted
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-YdSEScrEC
    label: Cockpit
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: MTM-55843
version: 10.18.490.0
---
In rare cases, when a real-time connection was interrupted, certain widgets did not update again once the connection was re-established. This behavior has been fixed.