---
date: 2023-12-06T11:34:28.030Z
title: Multiple realtime API subscriptions issue resolved
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-QWPx3rFfn
    label: Java SDK
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: MTM-55422
version: 10.18.0.395
---
Resolved an issue where multiple realtime API subscriptions in quick succession could cause an invalid subscription state, leading to subscriptions receiving duplicate notifications.