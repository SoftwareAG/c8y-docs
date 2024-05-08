---
date: ""
title: New switch for disabling/enabling case-sensitivity in usernames
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
ticket: MTM-56865
version: 1019.23.0
---
To enhance the user experience, a switch has been added to the authentication settings, allowing the option to disable case sensitivity in usernames. With this change, when the switch is turned on, username validation will treat uppercase and lowercase letters as distinct, requiring users to enter their username exactly as it was set. This affects all users.
