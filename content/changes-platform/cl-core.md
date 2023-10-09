---
title: Core platform
layout: change_log
section:
  - change_log
weight: 30
---


### October 2023

#### -Change- Extended ExplainQuery result info

The ExplainQuery result info has been extended by the algorithm used when performing queries for a user with inventory roles:

<code>GET {{url}}/inventory/hierarchy/info/management</code>  

Example: <code>{"algorithm": "Legacy" }</code>

Possible results: <code>Legacy, LimitedSourcesAcl, PostFilteringBySourceAcl, SingleSourceAcl, HierarchyAcl, SingleAgentAcl, SingleDeviceAcl, SingleAgentAndDeviceAcl</code> [MTM-52350]
