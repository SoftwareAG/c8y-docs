---
date: 
title: LWM2M agent bulk registration no longer fails when using an Excel-generated CSV file
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-2452
version: 10.18.540.136
---
When an Excel-generated CSV file was submitted to the LWM2M bulk device registration, the process failed due to the inability to parse the UTF-8 with a BOM marker present at the beginning of the file. This issue has been addressed, and the LWM2M bulk device registration system now successfully accepts CSV files encoded in UTF-8 with BOM format.
