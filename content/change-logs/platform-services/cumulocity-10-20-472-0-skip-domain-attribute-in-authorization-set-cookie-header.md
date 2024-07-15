---
date: ""
title: Security improvement in authorization cookie management
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
ticket: MTM-59297
version: 10.20.472.0
---
A security improvement in the way the platform manages the session cookies. The `domain` attribute in the cookie is made applicable strictly to the tenant accessed.