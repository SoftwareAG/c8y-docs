---
date: ""
title: The display of errors returned by the server during the removal of a global role has been corrected.
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
ticket: MTM-53701
version: 1020.26.5
---
If the server returned an "unprocessable content" error while removing a global role, the error message always indicated that the issue occurred because the global role was assigned to a user. Now, the error message will display the correct information, for example "Role is used in inventory access mapping in SSO configuration".
