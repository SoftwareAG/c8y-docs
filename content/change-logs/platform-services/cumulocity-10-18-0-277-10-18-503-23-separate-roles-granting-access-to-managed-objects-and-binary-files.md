---
date: ""
title: Separate roles granting access to managed objects and binary files.
product_area: Platform services
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-55275
version: 10.18.0.277, 10.18.503.23
---
Security improved by splitting the Inventory role permissions into separate roles for the Managed Objects and Binary.  This enables more granular permissions to be assigned, the existing permissions will still work.