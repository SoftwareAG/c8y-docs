---
date: 2023-12-14
title: Overflowing text is hidden to fit the size of Choose asset model dropdown field during asset creation
product_area: Application enablement & solutions
change_type:
  - value: change-2c7RdTdXo4
    label: Fix
component:
  - value: component-Tl88RYb4A
    label: Digital Twin Manager
build_artifact:
  - value: tc-wYIY0MBDO
    label: dtm
ticket: CTM-745
version: 1019.0.0
---
Lengthier Asset model names in the options of dropdown field 'Choose Asset model' are truncated to fit to the field size. Hovering over the option shows the complete text.