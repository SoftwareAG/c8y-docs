---
weight: 20
title: Overview of UI features
layout: redirect
---

{{< product-c8y-iot >}} DataHub provides the UI for managing and monitoring your offloading pipelines. The main navigation bar at the left provides links to the relevant pages. The access to these pages is restricted and depends on corresponding user roles/permissions as defined in section [Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions).

| Page | Description | Required role | Prerequisites
| ---  | --- | --- | ---
| Home | Get an introduction to {{< product-c8y-iot >}} DataHub and access quick links with related functionality | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | -
| Settings / Dremio & Data Lake | Set up {{< product-c8y-iot >}} DataHub | DATAHUB_ADMINISTRATOR | -
| Settings / Microsoft Power BI | Set up connection to Microsoft Power BI | DATAHUB_ADMINISTRATOR | -
| Offloading | Configure and manage your offloading pipelines | DATAHUB_ADMINISTRATOR or DATAHUB_MANAGER | -
| Microsoft Power BI | View Microsoft Power BI reports | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | Connection to Microsoft Power BI has been set up
| Auditing / Query log | View the query log | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | Tracking of usage statistics must be enabled
| Auditing / System log | View the system log | DATAHUB_ADMINISTRATOR | -
| Status | View the latest job status of your offloading pipelines | DATAHUB_ADMINISTRATOR or DATAHUB_MANAGER | -
| Administration / Usage statistics | View usage statistics | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | Tracking of usage statistics must be enabled
| Administration / System status | Check system status | DATAHUB_ADMINISTRATOR | -

<img src="/images/datahub-guide/datahub-home-page.png" alt="{{< product-c8y-iot >}} DataHub homepage"  style="max-width: 100%">
