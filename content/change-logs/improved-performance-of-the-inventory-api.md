---
date: 2023-11-29T16:03:34.877Z
title: Improved performance of the Inventory API
change_log: false
product_area:
  - value: product_area-T1-_TpDyv
    label: Platform services
component:
  - value: component-JlFdtOPva
    label: Rest API
change_type:
  - value: change-2c7RdTdXo4
    label: Change
technical_component:
  - value: tc-QHwMfWtBk7
    label: Cumulocity
jira: MTM-50840, MTM-51973
---
* The performance of the Inventory API has been improved by removing an additional request to the database.
* The performance of the Inventory API has been improved by removing two additional database queries for GET `/managedObjects`.
