---
title: Data Pull
layout: redirect
weight: 35
---

MLW provides a connector to the various Data Sources such as Cumulocity, DataHub etc. from where the data could be downloaded to start Machine Learning model building process.

**Cumulocity**

Following steps illustrate how to ingest and transform data produced by devices connected to Cumulocity IoT.

1. ***Add new resource***

    Select **Add Resource** and select **Import from Cumulocity**

    ![Add New Resource](/images/zementis/mlw-app-resource-c8y.png)


1. ***Fetch data from the device***

    Select the device for which you want to pull the data and click the **Fetch Data** button

    ![Cumulocity Data pull](/images/zementis/mlw-app-datapull-c8y.png)


1. ***Cumulocity data pull parameters***

    As part of data pull, provide the parameters such as **File Name**, **Date From**, **Date To**, **Aggregation** and **Data Points** which will determine the data file name, data interval, data aggregation and sensor name for data extraction. Once these parameters are provided, click the **Submit** button

    ![Cumulocity parameters](/images/zementis/mlw-app-datapull-param.png)


1. ***Cumulocity data pull progress***

    You can view the data pull progress in the **Tasks** section of MLW

    ![Cumulocity Datapull Tasks](/images/zementis/mlw-app-datapull-tasks.png)


1. ***Cumulocity data pull complete***

    Once the task has reached **COMPLETED** status, the data would be stored in the **Data** section of MLW

    ![Cumulocity Complete](/images/zementis/mlw-app-datapull-complete.png)


**DataHub**

Following steps illustrate how to ingest and transform data offloaded by Cumulocity IoT DataHub.

1. ***Add new datahub resource***

    Select **Add Resource** and select **Import from DataHub**

    ![Add New Datahub Resource](/images/zementis/mlw-app-resource-dh.png)


1. ***DataHub query***

    Input the query and click the **Submit** button

    ![DataHub Query](/images/zementis/mlw-app-dh-query.png)


1. ***Resource name***

    Provide the **Resource Name** with which you want to save the pulled data and click the **Submit** button

    ![DataHub name](/images/zementis/mlw-app-dh-name.png)


1. ***Datahub data pull progress***

    You can view the data pull progress in the **Tasks** section of MLW

    ![Datahub result](/images/zementis/mlw-app-dh-result.png)


1. ***DataHub data pull complete***

    Once the task is **COMPLETED**, the data will be stored in the **Data** section of MLW

    ![Cumulocity Data pull](/images/zementis/mlw-app-dh-data.png)

Once the data is ingested from Cumulocity IoT or DataHub, the corresponding CSV file is available in **Data** section of MLW. You can view the metadata for newly created CSV file by clicking on the appropriate file name

![DataHub data info](/images/zementis/mlw-app-dh-datainfo.png)

Data from CSV file can be previewed by clicking on **Preview** button
 
![DataHub data info](/images/zementis/mlw-app-dh-datapreview.png)
