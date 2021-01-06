---
title: Neural Network Designer
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/web-app-mlw/#nn-designer
---


Use the intuitive drag and drop Neural Network designer to build your Deep Neural Network architecture and train your models.


**Method 1 : Transfer Learning**

***Add new resource***

Click on **Add New Resource** to create a new Architecture file.

![New NN Selector](/images/zementis/mlw-app-nn-tl-selectnew.png)



***Add name to the new resource***

Select **Resource Type** as **NN Designer** and select **Architecture** as **MobileNet** and provide the **Resource Name** in the popup and click **Submit**.

This will create a new Architecture file with extension **.architecture** under **NN Designer** section of the project.

![New NN Name](/images/zementis/mlw-app-nn-tl-name.png)


***Neural network editor***

Select the Architecture file and click on the **Edit** button to edit the Architecture.

This will open the MobileNet Architecture in the editor and the user can add new layers or remove layers.

![New NN Selector](/images/zementis/mlw-app-nn-tl-edit.png)


***MobileNet Architecture***

![New NN Selector](/images/zementis/mlw-app-nn-tl-originalarch.png)


***Remove and Add layers (drag and drop)***

Remove the last 2 layers.

Drag and drop **Flatten** and **Dense** layers, connect them and set the layer properties.

Click on the **Save** button to save the architecture.

Click on the **Train** button to train a model on the architecture.

Removing last few layers
![NN Layers](/images/zementis/mlw-app-nn-tl-removed-layers.png)

Adding new layers to accommodate with the data.
![NN Layers](/images/zementis/mlw-app-nn-tl-added-layers.png)


***Neural network training parameters***

Select the **Data**, **Problem Type**, and non-mandatory **Pre Processing Script** and fill the other information in the form and hit **Submit**. This will start the training process.

![NN training parameter](/images/zementis/mlw-app-nn-tl-train.png)


***Neural Network Training***

See the progress of the training in the **Tasks** section under the respective task name.

![NN training](/images/zementis/mlw-app-nn-tl-complete.png)


***Neural Network onnx***

After completion of training, the trained model will be saved under the **Model** section of the respective **Project** in .onnx format.

![NN output](/images/zementis/mlw-app-nn-tl-onnx.png)



**Method 2 : Custom Architecture**

***Add new resource***

Click on **Add New Resource** to create a new Architecture file.

![New NN Selector](/images/zementis/mlw-app-nn-tl-selectnew.png)



***Add name to the new resource***

Select **Resource Type** as **NN Designer** and select **architecture** as **None** and provide the **Resource Name** in the popup and click **Submit**.

This will create a new Architecture file with extension **.architecture** under **NN Designer** section of the project.

![New NN Name](/images/zementis/mlw-app-nn-createnew.png)


***Neural network editor***

Select the Architecture file and click on the **Edit** button to edit the Architecture.

This will open the blank Architecture in the editor and the user can drag and drop layers and build a custom Neural network architecture.

Blank Architecture
![New NN Selector](/images/zementis/mlw-app-nn-blank.png)

Custom Architecture
![New NN Selector](/images/zementis/mlw-app-nn-customarch.png)

