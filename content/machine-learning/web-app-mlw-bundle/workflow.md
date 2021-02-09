---
title: Training workflow
layout: redirect
weight: 70
---

Model training is a complex process which often requires data ingestion/transformation via arbitrary scripts. Training workflows define a sequence of data preparation and model training/export activity that can be scheduled periodically.

> **Info:** To proceed, you will require a trained model created from [Automated ML](/machine-learning/web-app-mlw/#automl).

### Creating a new workflow

1. To create a new workflow file, click the add icon and select **Add New Resource**.

	![Add New Resource](/images/zementis/mlw-app-resource-add-new.png)

2. In the **Add New Resource** dialog, select "Workflow" as **Resource Type** and provide the **Resource Name** which identifies the workflow. 

	![Add Workflow](/images/zementis/mlw-app-resource-add-workflow.png)
	
3. Select the appropriate **Model**, **Pre Processing Script**, and **Data** which defines the sequence of this workflow. 
 
4. Once done, click **Submit**. 
 
This will create a new workflow file with the extension **.wf** in the **Training Workflow** folder of the project.

![Add Workflow](/images/zementis/mlw-app-resource-add-workflow.png)

Click on a workflow file in the **Training Workflow** folder to view its metadata.

![Workflow information](/images/zementis/mlw-app-resource-workflow.png)

### Executing a workflow

1. To schedule the execution of a workflow, click the cogwheel icon.

	![Workflow training](/images/zementis/mlw-app-resource-workflow-train.png)
 
2. In the **Workflow Execution** section at the right, provide the parameters that will define the workflow execution including **Task Name** and **Recurrence**. 

	![Workflow training](/images/zementis/mlw-app-resource-workflow-training-params.png)

3. Once done, click **Submit**. 

This will create a new task in the **Tasks** folder.

Click the corresponding task name in the **Tasks** folder, to display the status of the workflow execution in the **Task Info** section at the right.

![Workflow tasks](/images/zementis/mlw-app-task-workflow.png)
