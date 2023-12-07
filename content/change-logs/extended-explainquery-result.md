---
date: 2023-11-29T16:00:52.999Z
title: Extended ExplainQuery result
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
    label: cumulocity
jira: MTM-52350
---
The ExplainQuery result info has been extended by the algorithm used when performing queries for a user with inventory roles:

`GET {{url}}/inventory/hierarchy/info/management`

Example: `{“algorithm”: “Legacy” }`

Possible results: `Legacy, LimitedSourcesAcl, PostFilteringBySourceAcl, SingleSourceAcl, HierarchyAcl, SingleAgentAcl, SingleDeviceAcl, SingleAgentAndDeviceAcl`.
