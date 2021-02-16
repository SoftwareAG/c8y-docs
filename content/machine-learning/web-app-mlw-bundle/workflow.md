---
title: Training workflow
layout: redirect
weight: 70
---

Model training is a complex process which often requires data ingestion/transformation via arbitrary scripts. Training workflows define a sequence of data preparation and model training/export activity that can be scheduled periodically.

> **Info:** To proceed, you will require a trained model created from [Automated ML](/machine-learning/web-app-mlw/#automl).

### Creating a new workflow

1. To create a new workflow file, click the add icon <img src="/images/zementis/mlw-new-automl-icon.png" alt="Add" style="display:inline-block; margin:0"> and select **Add New Resource**.

2. In the **Add New Resource** dialog, select "Workflow" as **Resource Type** and provide the **Resource Name** which identifies the workflow. 
	
3. Select the appropriate **Model**, **Pre Processing Script**, and **Data** which defines the sequence of this workflow and click **Submit**.

	![Add Workflow](/images/zementis/mlw-app-resource-add-workflow.png)
 
This will create a new workflow file with the extension **.wf** in the **Training Workflow** folder of the respective project.

Click on a workflow file in the **Training Workflow** folder to view its metadata.

### Executing a workflow

1. To schedule the execution of a workflow, click the cogwheel icon <img src="/images/zementis/mlw-cogwheel-icon.png" alt="Cogwheel" style="display:inline-block; margin:0">.
 
2. In the **Workflow Execution** section at the right, provide the parameters that will define the workflow execution including **Task Name** and **Recurrence** and click submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">. 

	![Workflow training](/images/zementis/mlw-app-resource-workflow-training-params.png)

This will create a new task in the **Tasks** section.

Click **Tasks** in the navigator and click the corresponding task name, to display the status of the workflow execution in the **Task History** section at the centre.
