---
weight: 80
title: Resource limits specification
layout: redirect
---

Structure for specifying the resource limits for the Operator deployed containers.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
limitCpu | No | String |  | Specific CPU limit in cpu units. For example, 1000m or 1
limitMemory | No | String |  | Specific memory limit in memory units. For example, 1000M or 1G
requestsCpu | No | String |  | Specific CPU requests in cpu units. For example, 1000m or 1
requestsMemory | No | String |  | Specific memory requests in memory units. For example, 1000M or 1G