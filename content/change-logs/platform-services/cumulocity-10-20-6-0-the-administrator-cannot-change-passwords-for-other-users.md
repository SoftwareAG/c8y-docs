---
date: ""
title: The administrator cannot change passwords for other users.
product_area: Platform services
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-55259
version: 10.20.6.0
---
For security reasons, The platform has disabled the administrator capability of changing passwords of other users. The users are allowed only to change their own passwords. However, Administrators can still enforce the users to change their passwords on their next login in case of any anticipated breaches.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.
