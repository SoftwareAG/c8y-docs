---
title: Workflow
layout: redirect
weight: 70

aliases:
  - /predictive-analytics/web-app-mlw/#workflow
---

Have complicated flows for your model? Use the Workflow that connects your data, script, and model and straight away begin your training or schedule them for future execution.

***Add new resource***

Click on **Add New Resource** to create a new Notebook file.

![Add New Resource](/images/zementis/mlw-app-resource-add-new.png)

To proceed you will require a trained model like one created above through Automated ML.

***Add Workflow***

Select **Resource Type** as **Workflow** and provide the **Resource Name**, **Model**, **Pre Processing Script**, **Data** in the popup and click **Submit**.

This will create a new Workflow file with extension **.wf** under **Training Workflow** section of the project.

![Add Workflow](/images/zementis/mlw-app-resource-add-workflow.png)


***Workflow information***

This will show information about the workflow file. 

![Workflow information](/images/zementis/mlw-app-resource-workflow.png)


***Workflow training***

Click on the **Train** button to train a workflow.

![Workflow training](/images/zementis/mlw-app-resource-workflow-train.png)


***Workflow training parameters***

Fill the information in the form and submit. this will create a new task in the **Tasks** section.

![Workflow training](/images/zementis/mlw-app-resource-workflow-training-params.png)


***Workflow tasks***

See the status of the workflow task in **Tasks** section under the respective task.

![Workflow tasks](/images/zementis/mlw-app-task-workflow.png)