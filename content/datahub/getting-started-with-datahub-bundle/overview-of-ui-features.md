---
weight: 20
title: Overview of UI features
layout: redirect
---

DataHub provides the UI for managing and monitoring your offloading pipelines. The main navigation bar at the left provides links to the relevant pages. The access to these pages is restricted and depends on corresponding user roles/permissions as defined in section [Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions).

| Page | Description | Required role | Prerequisites
| ---  | --- | --- | ---
| Home | Get an introduction to {{< product-c8y-iot >}} DataHub and access quick links with related functionality | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | -
| Settings | Set up {{< product-c8y-iot >}} DataHub | DATAHUB_ADMINISTRATOR | -
| Offloading | Configure and manage your offloading pipelines | DATAHUB_ADMINISTRATOR or DATAHUB_MANAGER | -
| Auditing / Query log | View the query log | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | Tracking of usage statistics has to be enabled
| Auditing / System log | View the system log | DATAHUB_ADMINISTRATOR | -
| Status | View the latest job status of your offloading pipelines | DATAHUB_ADMINISTRATOR or DATAHUB_MANAGER | -
| Administration / Usage statistics | View usage statistics | DATAHUB_READER, DATAHUB_ADMINISTRATOR, or DATAHUB_MANAGER | Tracking of usage statistics has to be enabled
| Administration / System status | Check system status | DATAHUB_ADMINISTRATOR | -

<img src="/images/datahub-guide/datahub-home-page.png" alt="DataHub homepage"  style="max-width: 100%">