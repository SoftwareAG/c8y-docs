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
A security improvement has been made in managing authorization cookies, while setting a new authorization cookie, the `domain` attribute will now be omitted by default. Skipping this attribute allows the browser to apply cookies only for current document URLs, not including subdomains.