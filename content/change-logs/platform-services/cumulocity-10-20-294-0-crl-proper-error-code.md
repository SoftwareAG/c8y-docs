---
date: ""
title: Fixed the http response code for missing fields in CRL entries
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-55154
version: 10.20.294.0
---
Wrong http response code was sent when there are missing fields in CRL entry. This is fixed now.
