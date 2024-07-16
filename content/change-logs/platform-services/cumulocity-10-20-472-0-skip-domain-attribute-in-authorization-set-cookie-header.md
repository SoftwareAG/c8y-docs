---
date: ""
title: Security improvement in session cookie management
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
ticket: MTM-59297
version: 10.20.472.0
---
Security has been improved by ensuring the `domain` attribute in a cookie is made applicable strictly to the tenant accessed. Users using SSO or OAI-Secure with long-standing session may once encounter a login problem with the message `Token not present`, in which case it is recommended to [clear cookies](https://www.hellotech.com/guide/for/how-to-clear-cookies-chrome-safari-mozilla-firefox-edge).
