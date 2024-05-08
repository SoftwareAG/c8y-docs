---
date: 2024-03-26
title: Fixed issue with Notifications 2.0 subscriptions with a type filter
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-2Yri1-l3n
    label: Messaging Service
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-56450
version: 10.18.540.23
---
Fixed an issue where Notifications 2.0 subscriptions with a type filter could fail when updating or deleting an object with an empty type. This issue would cause an error to be returned to the client even though the update or delete request was successful.
