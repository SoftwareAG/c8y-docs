---
date:
title: Disabling automatic setting of required interval of LWM2M agent
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Device Management & Connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-ggH2M4hf3
    label: lwm2m-agent
ticket: DM-2111
version: 10.20.378.0
---
The LWM2M agent automatically manages the required interval of a LWM2M device based on the LWM2M registration lifetime. It is now possible to disable this behavior globally or for specific devices. 