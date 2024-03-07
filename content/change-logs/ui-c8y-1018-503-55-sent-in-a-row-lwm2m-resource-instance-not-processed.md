---
date: 2024-03-07T10:00:00.100Z
title: LWM2M agent processes all multiple resource instance IDs correctly
product_area: Device management & connectivity
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-3311
version: 1018.540.66
---
When a LWM2M device sends a composite request with multiple Resource Instance IDs from a same Resource ID and this Resource ID has an additional action defined, only one of these Resource Instances values was sent to this additional action for processing. The same behavior is observed when you try to do a composite read (`cread`) device operation with a row of Resource Instance IDs. These issues are resolved and all requested Resource Instance IDs are processed