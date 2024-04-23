---
date: ""
title: Permissions for SSO users no longer lost when upgrading the platform from version 10.17
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
ticket: MTM-58907
version: 10.20.341.0
---
An issue has been fixed with losing permissions for SSO users after the platform upgrade from version 10.17 to newer. Now, updating the platform version does not affect user permissions.