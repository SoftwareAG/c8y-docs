---
date: 2024-03-28
title: Consistent asset names in various places of the UI
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
ticket: MTM-51262
version: 10.18.499.4
---

Fixed an issue with group/device names being translated when displayed in the navigator menu, while not being translated in other places such as the subassets grid or device group selector. From now on, asset names in the navigator are not translated.
