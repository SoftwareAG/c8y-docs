---
title: Task scheduler
layout: redirect
weight: 60
---

Machine Learning Workbench (MLW) provides a flexible task scheduler which can be used for orchestrating a wide variety of activities including periodic data pulls from data sources or retraining your machine learning models at regular intervals.

To showcase the task scheduler, we will create a simple Python script which will be scheduled for periodic execution. This can easily be extended for more involved activities like data pull and model retraining. First, we create a new resource which will contain the Python source code.

### Creating a new Python script

1. To create a new Python file, click the add icon <img src="/images/zementis/mlw-new-automl-icon.png" alt="Add" style="display:inline-block; margin:0"> and select **Add New Resource**.

2. In the **Add New Resource** dialog, select "Python Script" as **Resource Type** and provide the **Resource Name** which identifies the source file and click **Submit**.
 	
 	![New PY Name](/images/zementis/mlw-app-resource-add-py.png)
 
This will create a new Python file with the extension **.py** in the **Code** folder of the project.


### Scheduling a Python script

From the **Code** folder, edit the Python file and write any python code. Click **Execute** and select "Repeat" as **Recurrence**. Provide the execution interval and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">. This will execute the Python script periodically at the specified intervals.

![PY Script Scheduler](/images/zementis/mlw-app-schedule.png)
