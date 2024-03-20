---
date: ""
title: Login using user alias and TFA SMS with basic authentication works reliably again
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
ticket: MTM-56608
version: 10.18.540.63
---
Fixed a random issue ("invalid TFA token due to user inactivity") when logging in using the user alias and TFA SMS with basic authentication.