---
date: ""
title: Restriction on role changes for users managed by SSO server.
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-57096
version: 1019.4.0-rc.6
---
The administrator cannot change the roles of a user managed by the SSO server if they are updated during each login.