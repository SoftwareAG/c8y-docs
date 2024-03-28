---
date: 
title: Svg animation tag in scada widget in cockpit does not work
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
ticket: MTM-55990
version: 10.18.490.10
---

Fixed an issue with SVG files in the SCADA widget, where `animate` or `animateTransform` tags worked properly in the configuration preview, but did not work in a dashboard. 
