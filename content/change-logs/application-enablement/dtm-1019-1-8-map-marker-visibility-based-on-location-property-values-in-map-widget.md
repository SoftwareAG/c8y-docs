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
When assets with location were imported in bulk in the "Map" widget, markers were not shown due to an incompatible data type of latitude and longitude values. Aligning the data type to number now correctly displays the markers on the map.
