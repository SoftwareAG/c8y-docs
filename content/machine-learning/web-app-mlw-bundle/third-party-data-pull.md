---
title: Third Party Data pull
layout: redirect
weight: 35

aliases:
  - /predictive-analytics/web-app-mlw/#datapull
---

MLW provides a connector to various Data Sources such as Cumulocity, DataHub from where the data could be downloaded and start to train the Machine Learning models.

***Cumulocity Data pull***

***Add new resource***

Select **Add Resource** and select **Import from Cumulocity**

![Add New Resource](/images/zementis/mlw-app-resource-c8y.png)


***Fetch Data from the device***

Select on the device from where you want to pull the data by hitting on **Fetch Data** button

![Cumulocity Data pull](/images/zementis/mlw-app-datapull-c8y.png)


***Cumulocity Data pull parameters***

Provide the parameters such as **File Name**, **Date From**, **Date To**, **Aggregation**, **Data Points** and click on **Submit**

![Cumulocity parameters](/images/zementis/mlw-app-datapull-param.png)


***Cumulocity Data pull - added to tasks***

You can view the data pull progress in the **Tasks** section of the MLW

![Cumulocity Datapull Tasks](/images/zementis/mlw-app-datapull-tasks.png)


***Cumulocity Data pull Complete***

Once the task has reached COMPLETED status, the data would be stored in the **Data** section of the MLW

![Cumulocity Complete](/images/zementis/mlw-app-datapull-complete.png)


***DataHub datapull***


***Add new datahub resource***

Select **Add Resource** and select **Import from DataHub**

![Add New Datahub Resource](/images/zementis/mlw-app-resource-dh.png)


***DataHub query***

Input the query and hit on **Submit** button

![DataHub Query](/images/zementis/mlw-app-dh-query.png)


***DataHub name***

Provide the **Resource Name** with which you want to save the pulled data and hit on **Submit** button

![DataHub name](/images/zementis/mlw-app-dh-name.png)


***Datahub result***

You can view the data pull progress in the **Tasks** section of the MLW

![Datahub result](/images/zementis/mlw-app-dh-result.png)


***DataHub saved data***

Once the task has reached COMPLETED status, the data would be stored in the **Data** section of the MLW

![Cumulocity Data pull](/images/zementis/mlw-app-dh-data.png)


***DataHub data info***

You could view the metadata for the newly created CSV file (DataHub pulled data)

![DataHub data info](/images/zementis/mlw-app-dh-datainfo.png)

***DataHub data preview***
 
You could preview the dataset by hitting on the **Preview** button

![DataHub data info](/images/zementis/mlw-app-dh-datapreview.png)