---
date: 2024-10-07
title: Enabling time series support on management tenant is no longer possible
product_area: Platform services
change_type:
  - value: change-3BQrQ6adS
    label: API change
component:
  - value: component-OG_650_b2
    label: Core platform
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-61027
version: 10.20.584.0
---

Enabling [time series support](https://cumulocity.com/docs/enterprise-tenant/enhanced-time-series-support/) on `management` tenant is no longer possible to prevent time series from being enabled on sub-tenants by tenant option inheritance.
