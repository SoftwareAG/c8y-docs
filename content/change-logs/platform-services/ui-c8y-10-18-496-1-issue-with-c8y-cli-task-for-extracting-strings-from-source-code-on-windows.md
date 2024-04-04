---
date: 2024-03-24
title: Strings are correctly extracted from source code on Windows using c8ycli command
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
ticket: MTM-56234
version: 10.18.496.1
---

Fixed an issue with `c8ycli locale-extract` on Windows where the strings where not correctly extracted from the source code. Now the extracted locales.pot file correctly contains all entries.
