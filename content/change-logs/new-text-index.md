---
date: 2023-12-01T15:53:08.842Z
title: New text index
product_area:
  - value: product_area-T1-_TpDyv
    label: Platform services
component:
  - value: component-Bcu8iUXgm
    label: MongoDB
change_type:
  - value: change-2c7RdTdXo4
    label: Change
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
---
A new text index has been introduced for the GET `/inventory/managedObjects` endpoint. By default it only includes the following fields:

`_id`, `type`, `name`, `owner`, `externalIds` \[MTM-54562]
