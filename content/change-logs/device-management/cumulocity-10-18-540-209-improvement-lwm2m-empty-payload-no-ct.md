---
date:
title: LWM2M agent can now handle an empty payload without content-type data
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Device Management & Connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3989
version: 10.18.540.209
---

The LWM2M specification permits devices to send an empty payload when there's no data to report. 
However, it doesn’t specify whether a content-type should still be included in such cases. 
Previously, LWM2M agents would reject messages with an empty payload and no content-type. 
Now, these messages will be accepted and processed as intended. 