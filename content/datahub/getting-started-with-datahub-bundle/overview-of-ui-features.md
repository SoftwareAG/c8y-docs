---
weight: 20
title: Overview of UI features
layout: redirect
---

{{< product-c8y-iot >}} DataHub provides the UI for managing and monitoring your offloading pipelines. The main navigation bar at the left provides links to the relevant pages. The access to these pages is restricted and depends on corresponding user roles/permissions as defined in section [Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions).

| Page | Description | Required role | Prerequisites
| ---  | --- | --- | ---
| Home | Get an introduction to {{< product-c8y-iot >}} DataHub and access quick links with related functionality | DataHub Reader, DataHub Administrator, or DataHub Manager | -
| Offloading | Configure and manage your offloading pipelines | DataHub Administrator or DataHub Manager | -
| Auditing / Query log | View the query log | DataHub Reader, DataHub Administrator, or DataHub Manager | Tracking of usage statistics must be enabled
| Auditing / System log | View the system log | DataHub Administrator | -
| Settings / Initial configuration | Set up {{< product-c8y-iot >}} DataHub | DataHub Administrator | -
| Settings / Dremio users | Manage Dremio users | DataHub Administrator | -
| Settings / Microsoft Power BI | Set up connection to Microsoft Power BI | DataHub Administrator | -
| Microsoft Power BI | View Microsoft Power BI reports | DataHub Reader, DataHub Administrator, or DataHub Manager | Connection to Microsoft Power BI has been set up
| Administration / Usage statistics | View usage statistics | DataHub Reader, DataHub Administrator, or DataHub Manager | Tracking of usage statistics must be enabled
| Administration / Compaction status | View the latest compaction job status of your offloading pipelines | DataHub Administrator | -
| Administration / System status | Check system status | DataHub Administrator | -
