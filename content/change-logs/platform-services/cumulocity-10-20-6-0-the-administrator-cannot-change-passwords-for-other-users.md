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
To improve security user administrators can no longer explicitly set passwords for other users in the tenant or other tenants' admin. This change prevents an attacker from having access to all users, in case the administrator account is compromised.
Note that the administrator will still have the option to force the user to reset the password on the next login or disable the user.