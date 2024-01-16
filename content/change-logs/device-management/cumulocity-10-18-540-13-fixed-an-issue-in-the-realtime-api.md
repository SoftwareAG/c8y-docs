---
date: ""
title: "Fixed an issue in the realtime API "
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-56910
version: 10.18.540.13
---
Fixed an issue in the realtime API where a subscription marked as "non-retriable" could still be re-subscribed after re-establishing the underlying connection to the server, for example, after a Cumulocity core restart or network outage.