---
date: ""
title: Alarm audit log date filter shows incorrect results
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-0UgqXH1Ys
    label: Administration
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-60595
version: 1020.28.9
---
Time filtering in Audit logs list view shows different times on left column and inside audit log card. There was done update of popup with information, to make user aware that audit logs cards are filtered by device time and it could be different from server time. 