---
date: ""
title: Confirmation modal for logging out all users now translated correctly
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-0UgqXH1Ys
    label: Administration
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-58016
version: 1018.503.90
---
In the Cumulocity IoT platform, there is a confirmation modal that appears when an administrator attempts to log out all users. Previously, the body text in this modal was not properly translated and always appeared in English, regardless of the user's language settings. With this change, the body text in the confirmation modal is now correctly translated based on the user's selected language.
