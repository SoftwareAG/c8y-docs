---
date:
title: LWM2M agent uses preferred content type requested by the device during a LWM2M bootstrap session
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-ggH2M4hf3
    label: lwm2m-agent
ticket: DM-3850
version: 10.20.379.0
---
LWM2M agent used to ignore preferred content type requested by the device during a LWM2M bootstrap session. This problem is now fixed and LWM2M agent uses the requested content type when it's provided by the device.
