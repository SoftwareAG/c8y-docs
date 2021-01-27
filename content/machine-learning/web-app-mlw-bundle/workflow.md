---
title: Training Workflow
layout: redirect
weight: 70
---

Model training is a complex process which often requires data ingestion/transformation via arbitrary scripts. Training workflows define a sequence of data preparation and model training/export activity that can be scheduled periodically.

>**Info:** To proceed, you will require a trained model created from [Automated ML](/machine-learning/web-app-mlw/#automl).

***Add new resource***

Click on **Add New Resource** to create a new Workflow file.

![Add New Resource](/images/zementis/mlw-app-resource-add-new.png)

In the **Add New Resource** panel, select **Resource Type** as **Workflow** and provide the **Resource Name** which identifies the workflow. Select the appropriate **Model**, **Pre Processing Script**, and **Data** which defines the sequence of this workflow. Once done, click the **Submit** button. This will create a new workflow file with extension **.wf** under **Training Workflow** section of the project.

![Add Workflow](/images/zementis/mlw-app-resource-add-workflow.png)

***Workflow information***

Click on a workflow file under **Training Workflow** section to view its metadata.

![Workflow information](/images/zementis/mlw-app-resource-workflow.png)

***Workflow execution***

To schedule the execution of a worflow, click the **Train** button.

![Workflow training](/images/zementis/mlw-app-resource-workflow-train.png)

***Workflow execution parameters***

Provide the parameters that will define the workflow execution including **Task Name** and **Recurrence**. Once done, click the **Submit** button which will create a new task in the **Tasks** section.

![Workflow training](/images/zementis/mlw-app-resource-workflow-training-params.png)

***Workflow status***

Status of the workflow execution can be viewed by clicking the corresponding task name in the **Tasks** section.

![Workflow tasks](/images/zementis/mlw-app-task-workflow.png)
