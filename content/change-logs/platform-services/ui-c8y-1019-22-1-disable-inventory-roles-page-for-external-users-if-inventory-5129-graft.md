---
date: ""
title: disable inventoryRoles page for external users if inventory… (#5129) [GRAFT][release/cd] (#6157)
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
ticket: MTM-57096
version: 1019.22.1
---
In an effort to improve the user experience and prevent confusion, the inventory roles page is now disabled for external users if the inventory feature is not enabled. Previously, external users were able to access the inventory roles page even if the inventory was disabled, which could lead to misunderstandings about the availability and functionality of the feature. With this change, external users will no longer see the inventory roles page when the inventory is turned off, providing a clearer and more consistent experience across the application.