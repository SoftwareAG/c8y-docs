---
date:
title: Model editor in Streaming Analytics application displays only valid toolbar icons in read-only mode
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Analytics
component:
  - value: component-M5-cepIIS
    label: Streaming Analytics
build_artifact:
  - value: tc-KXXmo2SUR
    label: apama-in-c8y
ticket: PAB-2240
version:
---
Previously, icons that could not be used when a model was active (that is, in read-only mode) were shown as disabled in the model editor's toolbar. This has been changed so that icons that cannot be used in read-only mode (such as the save icon) are no longer displayed in the toolbar.
