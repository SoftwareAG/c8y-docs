---
date: 2024-10-08
title: Removed Self link from inventory parents fragment in API response
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-JlFdtOPva
    label: Rest API
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-60938
version: 10.20.589.0
---
The <code>self</code> field has been removed from inventory API from deviceParents, assetParents and additionParents response fragments, it was not required and always had a generated link to a non-existent endpoint.
