---
date: ""
title: The application suggests that a new user set a password during the first login.
product_area: Platform services
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-58077
version: 1020.13.0
---
Previously, a new user would receive an email with a link to set their password. However, now when "Send password reset link as email" is unchecked, the "User must reset password on next login" option is selected by default. This means the new user must change their password during their first login.
