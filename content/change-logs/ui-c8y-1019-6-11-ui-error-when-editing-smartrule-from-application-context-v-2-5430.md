---
date: ""
title: Fix UI error when editing Smart rule from Application context
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
ticket: MTM-53381
version: 1019.6.11
---
Fixed an UI error that occurred when editing a smart rule from the application context. This fix prevents sending a request with a wrong managed object ID and then displaying an alert message.