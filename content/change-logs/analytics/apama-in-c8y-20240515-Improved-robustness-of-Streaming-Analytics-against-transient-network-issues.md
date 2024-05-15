---
date:
title: Improved robustness of Streaming Analytics against transient network issues
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
ticket: PAB-4447
version:
---
The robustness of EPL apps and Analytics Builder models against transient network issues has been improved.
Specifically, if a temporary network issue causes a problem retrieving EPL apps from the inventory during recovery, then the EPL app is displayed with an ERROR state in the UI instead of the EPL app not being displayed at all.
