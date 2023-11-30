---
date: 2023-12-01T15:55:52.890Z
title: Change in full text search feature of Inventory API
product_area:
  - value: product_area-T1-_TpDyv
    label: Platform services
component:
  - value: component-JlFdtOPva
    label: Rest API
change_type:
  - value: change-inv-3bw8e
    label: Announcement
technical_component:
  - value: tc-QHwMfWtBk7
    label: Core
---
As of a future version, the full text search functionality will only include the following properties:

* `_id`
* `name`
* `type`
* `owner`
* `external id`

A text search functionality corresponds to a `text` parameter of `GET {url}/inventory/managedObjects`.

Example: When executing the following query: `GET {url}/inventory/managedObjects?text=c8y_MajorDevice` only the properties `id`, `name`, `type`, `owner` and `external id` will be examined.

This change improves the user experience of the text search functionality by returning more relevant managed objects. At the same time it improves the Inventory API performance.

This change will be implemented after a 3-month period at the earliest.