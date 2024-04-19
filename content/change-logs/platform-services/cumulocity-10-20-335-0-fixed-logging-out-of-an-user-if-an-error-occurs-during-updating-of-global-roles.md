---
date: ""
title: Fixed logging out of an user if an error occurs during updating user global roles
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
ticket: MTM-57974
version: 10.20.335.0
---
An error with logging out of a user using OAI-Secure has been fixed, the user is not logged out if an error occurs while assigning or unassigning global roles.