---
date: 2024-10-07
title: Fixed latest measurement values tenant option with wildcard key
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-OG_650_b2
    label: Core platform
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-60761
version: 10.20.585.0
---

Fixed tenant option used to enable [latest measurement values](https://cumulocity.com/docs/standard-tenant/managing-data/#latest-value) not working with the wildcard (`*`) key. After the fix the wildcard character can be used to enable latest measurements for all series:

`PUT /tenant/options/measurement.series.latestvalue`
```json
{
  "*":""
}
```