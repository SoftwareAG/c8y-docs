---
date: ""
title: Avoid colliding Leaflet versions by adding noConflict
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-59809
version: 1018.503.105
---
In some scenarios, different versions of the Leaflet library used by {{< product-c8y-iot >}} and custom widgets could collide and lead to unexpected behavior or errors. To address this, the noConflict mode has been added to {{< product-c8y-iot >}}'s Leaflet integration. With this change, custom widgets can now use their own Leaflet version without interfering with {{< product-c8y-iot >}}'s Leaflet version. This improves the reliability and compatibility when using Leaflet in custom widgets alongside {{< product-c8y-iot >}}'s built-in geospatial features.