---
date: 2023-12-06
title: HTTP code issue fixed
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-JlFdtOPva
    label: Rest API
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: MTM-51095
version: 10.18.1.0
---
When the DELETE <code>/inventory/managedObject/{id}</code> endpoint did not finish immediately but continued in the background, the platform returned a 202 HTTP code instead of 204. This has been fixed.
