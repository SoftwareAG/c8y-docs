---
weight: 20
title: Sources and spaces
layout: redirect
---

On the home page of Dremio you will find at the left under **Datasets** two panels called **Spaces** and **Sources** respectively.

### Sources

In the **Sources** panel there is the data source `YourAccountNameDataLake`. This source has been auto-configured for you and points to your data lake.

> **Info:** Terminology-wise Cumulocity IoT DataHub replicates data from Cumulocity Operational Store into the data lake. For Dremio the data lake and its target tables is a data source as it allows reading data from it.

When you click on your data source it will be shown in the main panel. Clicking on the source in the main panel navigates into the data source. Here, you see a list of all target tables of your offloading pipelines. Clicking one of these target tables opens an SQL editor which allows you to run queries against that target table.

> **Info:** You might also see a folder named *c8y_cdh_temp*. The folder is used for DataHub-internal purposes and must not be deleted or altered.

### Spaces

A space in Dremio helps organizing your data sets. Cumulocity IoT DataHub auto-configures a space which is named `YourAccountNameSpace`. A dataset in the space is referred in queries as `YourAccountNameSpace.YourDataset`. As described in section [Offloading of inventory collection](/guides/datahub/configuring-offloaded/#offloading-inventory-collection), the inventory collection already ships two views "inventory_all" and "inventory_latest" which are available in your space.

### Job history

The **Job History** tab at the top of the screen displays jobs/queries you have executed. It allows you to view details of a job by clicking on the particular job and offers filter capabilities (time range, job status, query type, and queue). The **Profile** view inside the job detail view is very useful to investigate optimization potentials in your queries.

> **Info:** The job history only contains queries that you actively run; the jobs related to the data extraction are hidden.


