---
title: Training workflow
layout: redirect
weight: 70
---

Model training is a complex process which often requires data ingestion/transformation via arbitrary scripts. Training workflows define a sequence of data preparation and model training/export activity that can be scheduled periodically.

> **Info:** To proceed, you will require a trained model created from [Automated ML](/machine-learning/web-app-mlw/#automl).

#### Create a new workflow

Click **Add New Resource** to create a new workflow file.

![Add New Resource](/images/zementis/mlw-app-resource-add-new.png)

In the **Add New Resource** panel, select "Workflow" as **Resource Type** and provide the **Resource Name** which identifies the workflow. Select the appropriate **Model**, **Pre Processing Script**, and **Data** which defines the sequence of this workflow. Once done, click **Submit**. This will create a new workflow file with the extension **.wf** in the **Training Workflow** section of the project.

![Add Workflow](/images/zementis/mlw-app-resource-add-workflow.png)

Click on a workflow file in the **Training Workflow** section to view its metadata.

![Workflow information](/images/zementis/mlw-app-resource-workflow.png)

#### Workflow execution

To schedule the execution of a workflow, click **Train**.

![Workflow training](/images/zementis/mlw-app-resource-workflow-train.png)

Provide the parameters that will define the workflow execution including **Task Name** and **Recurrence**. Once done, click **Submit** which will create a new task in the **Tasks** section.

![Workflow training](/images/zementis/mlw-app-resource-workflow-training-params.png)

The status of the workflow execution can be viewed by clicking the corresponding task name in the **Tasks** section.

![Workflow tasks](/images/zementis/mlw-app-task-workflow.png)
