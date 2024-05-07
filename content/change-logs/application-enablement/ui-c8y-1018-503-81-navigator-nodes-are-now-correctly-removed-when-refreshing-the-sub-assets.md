---
date: ""
title: Navigator nodes are now correctly removed when refreshing the sub-assets grid after removing groups via API. [GRAFT][release/y2024] (#6205)
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-58562
version: 1018.503.81
---
In the Cumulocity IoT user interface, the subassets view and the navigator did not always update correctly after removing a group of devices via the API. This caused the navigator to still show the removed devices and made the UI inconsistent with the actual API state. With this fix, the subassets view and the navigator now correctly refresh after a group of devices is removed through the API, ensuring the user interface stays in sync and provides an accurate view of the current inventory.