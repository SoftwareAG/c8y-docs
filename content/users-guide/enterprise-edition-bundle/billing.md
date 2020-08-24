---
weight: 110
title: Billing
layout: redirect
---

### Usage statistics

The Cumulocity IoT platform collects a lot of different usage statistics data which is used for billing customers. 

Based on the contract, there are two pricing models for billing:

* Tenant usage pricing model - based on tenant usage statistics
* Device pricing model - based mostly on device statistics and microservice resource usage

The table below presents which values are used in each model for billing purposes:

|Source|Name|Tenant usage pricing model|Device pricing model|
|:-----|:---|:----------------------------|:-----------------------------------|
|[TenantUsageStatistics](#usage-stats)|ID|x|x|
|[TenantUsageStatistics](#usage-stats)|Name|x|x|
|[TenantUsageStatistics](#usage-stats)|API requests|x| |
|[TenantUsageStatistics](#usage-stats)|Device API requests|x| |
|[TenantUsageStatistics](#usage-stats)|Storage|x|x|
|[TenantUsageStatistics](#usage-stats)|Peak storage|x| |
|[TenantUsageStatistics](#usage-stats)|Root device|x| |
|[TenantUsageStatistics](#usage-stats)|Peak root device|x| |
|[TenantUsageStatistics](#usage-stats)|Devices|x|x|
|[TenantUsageStatistics](#usage-stats)|Peak devices|x| |
|[TenantUsageStatistics](#usage-stats)|Endpoint devices|x| |
|[TenantUsageStatistics](#usage-stats)|Subscribed applications|x| |
|[TenantUsageStatistics](#usage-stats)|Creation time|x|x|
|[TenantUsageStatistics](#usage-stats)|Alarms created|x| |
|[TenantUsageStatistics](#usage-stats)|Alarms updated|x| |
|[TenantUsageStatistics](#usage-stats)|Inventories created|x| |
|[TenantUsageStatistics](#usage-stats)|Inventories updated|x| |
|[TenantUsageStatistics](#usage-stats)|Events created|x| |
|[TenantUsageStatistics](#usage-stats)|Events updated|x| |
|[TenantUsageStatistics](#usage-stats)|Measurements created|x| |
|[TenantUsageStatistics](#usage-stats)|Total inbound transfer|x| |
|[TenantUsageStatistics](#usage-stats)|Parent tenant|x|x|
|[TenantUsageStatistics](#usage-stats)|Tenant domain| |x|
|[TenantUsageStatistics](#usage-stats)|Can create sub-tenants| |x|
|[TenantUsageStatistics](#usage-stats)|External reference|x|x|
|[TenantUsageStatistics](#usage-stats)|Total microservice CPU usage|x| |
|[TenantUsageStatistics](#usage-stats)|Total microservice memory usage|x| |
|[MicroserviceUsageStatistics](#microservice-usage)|Per microservice CPU usage| |x|
|[MicroserviceUsageStatistics](#microservice-usage)|Per microservice memory usage| |x|
|[DeviceStatistics](/reference/tenants/#device-statistics)|Monthly measurements, events and alarms created and updated per device| |x|