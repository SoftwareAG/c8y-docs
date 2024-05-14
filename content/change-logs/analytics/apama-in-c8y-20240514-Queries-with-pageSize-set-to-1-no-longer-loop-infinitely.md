---
date:
title: Queries with pageSize set to 1 no longer loop infinitely 
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area: Analytics
component:
  - value: component-M5-cepIIS
    label: Streaming Analytics
build_artifact:
  - value: tc-KXXmo2SUR
    label: apama-in-c8y
ticket: PAM-34761
version:
---
The Cumulocity IoT transport had a regression (introduced in Streaming Analytics 10.16) that could cause queries to infinitely loop if `pageSize` was set to 1. This is now fixed.
