---
title: Scheduler
layout: redirect
weight: 60

aliases:
  - /predictive-analytics/web-app-mlw/#scheduler
---

Use the job scheduler to schedule your Python scripts (ex. To pull data from different data sources at a frequent interval of time). Schedule the retraining of your Machine Learning/Deep Learning models to any immediate/future dates.

 ***Add new resource***
![Add New Resource](/images/zementis/mlw-app-resource-add-new.png)


***Add name to the new resource***

Select **Resource Type** as **Python Script** and provide the **Resource Name** in the popup and click **Submit**.

This will create a new Python file with extension **.py** under the **Code** section of the project.

![New PY Name](/images/zementis/mlw-app-resource-add-py.png)


***Schedule the Python script***

Edit the Python file and write some python script in it. and click on the **Execute** Button and select **Recurrence** as **REPEAT** and fill other information. 

This will Schedule the Script execution for every selected interval.

![PY Script Scheduler](/images/zementis/mlw-app-sch.png)
