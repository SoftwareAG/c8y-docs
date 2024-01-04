---
date: 2023-12-06T11:36:01.897Z
title: Fixed issue with c8ycli locale-compile
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: MTM-56601
version: 10.18.500.11
---
Fixed an issue with `c8ycli locale-compile` on Windows where the compiled JSON file was not created if the path to the PO file included folders.