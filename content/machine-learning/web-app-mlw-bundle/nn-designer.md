---
title: Neural Network Designer
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/web-app-mlw/#nn-designer
---


Use the intuitive drag and drop Neural Network designer to build your Deep Neural Network architecture and train your models.


***Add new resource***

Click on **Add New Resource** to create a new Architecture file.

![New NN Selector](/images/zementis/mlw-app-nn-selectnew.png)



***Add name to the new resource***

Select **Resource Type** as **NN Designer** and provide the **Resource Name** in the popup and click **Submit**.

This will create a new Architecture file with extension **.architecture** under **NN Designer** section of the project.

![New NN Name](/images/zementis/mlw-app-nn-name.png)


***Neural network editor***

Select the Architecture file and click on the **Edit** button to edit the Architecture.

This will open the Architecture in the editor and the user can drag and drop layers and build a Neural network architecture.

![New NN Selector](/images/zementis/mlw-app-nn-edit.png)


***Neural network add layers (drag and drop)***

Drag and drop the layers and set the layer properties. Connect all the layers.

Click on the **Save** button to save the architecture.

Click on the **Train** button to train a model on the architecture.

![NN Layers](/images/zementis/mlw-app-nn-dense.png)


***Neural network training parameters***

Select the **Data**, **Problem Type**, and non-mandatory **Pre Processing Script** and fill the other information in the form and hit **Submit**. This will start the training process.

![NN training parameter](/images/zementis/mlw-app-nn-train.png)


***Neural Network Training***

See the progress of the training in the **Tasks** section under the respective task name.

![NN training](/images/zementis/mlw-app-nn-complete.png)


***Neural Network onnx***

After completion of training, the trained model will be saved under the **Model** section of the respective **Project** in .onnx format.

![NN output](/images/zementis/mlw-app-nn-onnx.png)