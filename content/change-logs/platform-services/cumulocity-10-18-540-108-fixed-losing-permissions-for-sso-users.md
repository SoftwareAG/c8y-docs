---
date: 2024-05-06
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
version: 10.18.540.108
---
After a platform upgrade from version 10.17 to a later version an issue occurred that the permissions for some SSO users got lost. This issue has been fixed and updating the platform version does no longer affect user permissions.
