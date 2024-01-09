---
date: 2023-12-06T15:55:16.702Z
title: Improved unpacking of versioned applications
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-T1-_TpDyv
    label: Platform services
component:
  - value: component-0UgqXH1Ys
    label: Administration
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: MTM-53724
version: 10.18.439.0
---
Resolved the issue that versioned applications might not be unpacked upon core startup, which resulted in a 404 error for some requests.