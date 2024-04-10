---
date: ""
title: Correct HTTP response code sent on missing fields in certificate revocation list (CRL) entries
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
ticket: MTM-55154
version: 10.20.294.0
---
A wrong HTTP response code was sent when fields were missing in the certificate revocation list (CRL) entry. This behavior has been fixed now.
