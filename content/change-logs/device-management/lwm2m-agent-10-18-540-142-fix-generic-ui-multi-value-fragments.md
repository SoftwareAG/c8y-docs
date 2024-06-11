---
date:
title: LWM2M agent always stores data from multi-instance resources correctly
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
ticket: DM-2770
version: 10.18.540.142
---
When device sends values from multi-instance resources (via read, composite read, observe or composite observe), the agent has to decide whether it should overwrite the previous data set or update it (e.g. by adding new value to an existing array). In the previous versions there were some edge cases where the decision taken by agent was not correct. This problem is now fixed.  
