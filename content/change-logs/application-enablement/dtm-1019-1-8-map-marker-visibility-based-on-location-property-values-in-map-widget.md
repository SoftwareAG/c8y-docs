---
date:
title: Map marker visibility based on Location property values in map widget
product_area: Application enablement & solutions
change_type:
  - value: change-2c7RdTdXo4
    label: Fix
component:
  - value: component-Tl88RYb4A
    label: Digital Twin Manager
build_artifact:
  - value: tc-wYIY0MBDO
    label: dtm
ticket: IOT-19589
version: 1019.1.8
---

In the Maps widget, for assets with locations when imported in bulk, markers were not shown due to incompatible data type of Latitude and Longitude values. Aligning the data type to number now correctly displays the markers on the map.
