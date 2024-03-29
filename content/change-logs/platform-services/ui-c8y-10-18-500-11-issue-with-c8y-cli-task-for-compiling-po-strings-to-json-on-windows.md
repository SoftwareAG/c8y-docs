---
date: 
title: Localization strings are correctly compiled to JSON on windows using c8ycli command
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area: Platform services
component:
  - value: component-0UgqXH1Ys
    label: Administration
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-56601
version: 10.18.500.11
---

Fixed an issue with `c8ycli locale-compile` on Windows where the compiled JSON file was not created if the path to the PO file included folders. 
