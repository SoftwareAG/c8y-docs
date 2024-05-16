---
date: 2024-03-26
title: Fixed notifications issue for microservice subscriptions
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-JlFdtOPva
    label: Rest API
build_artifact:
  - value: tc-2QVkzf0Er
    label: pulsar
ticket: MTM-56947
version: 10.18.540.12
---
Notifications are now sent correctly for subscriptions to managed objects that represent microservices. Previously, notification subscriptions to these managed objects could cause microservice subscription and un-subscription to fail.
