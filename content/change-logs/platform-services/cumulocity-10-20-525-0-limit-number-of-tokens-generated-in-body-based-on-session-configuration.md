---
date: ""
title: Number of tokens generated in the body is now limited in the session configuration
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
ticket: MTM-60271
version: 10.20.525.0
---
The maximum number of OAI-Secure tokens generated in the body by the `/tenant/oauth/token` API is now limited according to the `Maximum parallel sessions per user` parameter in the session configuration.