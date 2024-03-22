---
date: ""
title: Manually provided units have higher priority than datapoint units
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-58426
version: 1018.503.70
---
In some cases, users want to override the units of a datapoint with a custom unit to better fit their use case. Previously, the units specified on the datapoint would always take precedence over any manually specified units, even if this was not the desired behavior. With this change, manually provided units now have a higher priority and will be used instead of the datapoint units. This allows users to have more control over the units displayed in their dashboards and other assets.