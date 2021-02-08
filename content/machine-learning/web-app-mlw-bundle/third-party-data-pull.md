---
title: Data pull
layout: redirect
weight: 35
---

Machine Learning Workbench (MLW) provides connectors to the various data sources such as Cumulocity IoT, DataHub, etc. from where the data could be downloaded to start the machine learning model-building process.

### Cumulocity IoT

The following steps illustrate how to ingest and transform data produced by devices connected to Cumulocity IoT.

1. Click **Add Resource** and then click **Import from Cumulocity**.

    ![Add New Resource](/images/zementis/mlw-app-resource-c8y.png)


2. Select the device for which you want to pull the data and click the download icon under **Fetch Data**.

    ![Cumulocity Data pull](/images/zementis/mlw-app-datapull-c8y.png)


3. As part of data pull, provide the parameters such as data file name, data interval, data aggregation, and sensor name for data extraction. Once these parameters are provided, click the submit icon.

    ![Cumulocity parameters](/images/zementis/mlw-app-datapull-param.png)


You can view the data pull progress in the **Tasks** folder of Machine Learning Workbench (MLW).

![Cumulocity Datapull Tasks](/images/zementis/mlw-app-datapull-tasks.png)


Once the task has reached the status COMPLETED, the data is stored in the **Data** folder of Machine Learning Workbench (MLW).

![Cumulocity Complete](/images/zementis/mlw-app-datapull-complete.png)


### DataHub

The following steps illustrate how to ingest and transform data offloaded by Cumulocity IoT DataHub.

1. Click **Add Resource**, and then click **Import from DataHub**.

    ![Add New Datahub Resource](/images/zementis/mlw-app-resource-dh.png)


2. Input the query, and click the submit icon.

    ![DataHub Query](/images/zementis/mlw-app-dh-query.png)


3. Provide the resource name with which you want to save the pulled data, and click **Submit**.

    ![DataHub name](/images/zementis/mlw-app-dh-name.png)


You can view the data pull progress in the **Tasks** folder of Machine Learning Workbench (MLW).

![Datahub result](/images/zementis/mlw-app-dh-result.png)


Once the task has reached the status COMPLETED, the data will be stored in the **Data** folder of Machine Learning Workbench (MLW).

![Cumulocity Data pull](/images/zementis/mlw-app-dh-data.png)

Once the data is ingested from Cumulocity IoT or DataHub, the corresponding CSV file is available in the **Data** folder of Machine Learning Workbench (MLW). You can view the metadata for the newly created CSV file by clicking on the respective file name.

![DataHub data info](/images/zementis/mlw-app-dh-datainfo.png)

Data from the CSV file can be previewed by clicking the preview icon at the right of the top menu bar.
 
![DataHub data info](/images/zementis/mlw-app-dh-datapreview.png)
