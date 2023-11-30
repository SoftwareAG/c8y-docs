---
date: 2023-12-01T16:03:34.877Z
title: Improved performance of the Inventory API
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
    label: Core
---
* The performance of the Inventory API has been improved by removing an additional request to the database. \[MTM-50840]
* The performance of the Inventory API has been improved by removing two additional database queries for GET `/managedObjects`. \[MTM-51973]