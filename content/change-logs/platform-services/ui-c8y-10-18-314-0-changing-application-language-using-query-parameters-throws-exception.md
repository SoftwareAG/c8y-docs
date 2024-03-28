---
date: 
title: Changing application language using query parameters throws exceptions
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
ticket: MTM-48676
version: 10.18.314.0
---

The locale of the web app can be set via the URL parameter lang, for example, /apps/administration/index.html?lang=zh-cn. The locale code is case-insensitive and must have 2 letters or 4 letters, separated with a hyphen "-" or an underscore or "_".
If the provided locale code is not supported, the web app will be displayed in English. 
