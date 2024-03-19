---
date: 
title: "Fixed issues with microservice-based Data Broker message forwarding"
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-V6J_FcOT2
    label: Data broker
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-57995
version: 1020.270.0
---
Resolved a defect where the microservice-based Data Broker failed to forward messages to the destination tenant after recovering from network interruptions or messaging service downtime.