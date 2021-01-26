---
title: Neural Network Designer
layout: redirect
weight: 40
---

MLW offers an intuitive drag-and-drop designer which allows you to construct, edit, train and analyze deep neural networks. Built on the solid foundation of TensorFlow and Keras, the visual approach provides greater insight and clarity into the architecture of neural networks, enabling creation of state-of-the-art deep learning models without writing a single line of code.

There are two approaches to training deep neural networks using neural network designer. You can either start with a pre-trained model from similar domain and use its architecture and weights as a starting point (Transfer Learning) or you can start from a blank slate and design a custom network from scratch. We will look at both these approaches in detail.

**Transfer Learning**

To begin with Transfer Learning, we need to create a new neural network architecture file from an existing network.

***Add new resource***

Click on **Add New Resource** to create a new Architecture file.

![New NN Selector](/images/zementis/mlw-app-nn-tl-selectnew.png)

In the **Add New Resource** panel, select **Resource Type** as **NN Designer** and **Architecture** as **MobileNet**. Provide a value for **Resource Name** and click the **Submit** button.

![New NN Name](/images/zementis/mlw-app-nn-tl-name.png)

This will create a new Architecture file with extension **.architecture** under **NN Designer** section of the project.

***Neural network editor***

Select the Architecture file and click on the **Edit** button to edit the architecture.

![New NN Selector](/images/zementis/mlw-app-nn-tl-edit.png)

This will open the MobileNet architecture in the editor where you can add new layers or remove/update existing layers.

![New NN Selector](/images/zementis/mlw-app-nn-tl-originalarch.png)

With the pre-trained MobileNet model represented by the architecture shown above, we will initiate transfer learning. To get started, we will first remove the last 2 layers: **Reshape** and **Activation**. The network will appear as follows:

![NN Layers](/images/zementis/mlw-app-nn-tl-removed-layers.png)

Next, we will drag and drop **Flatten** and **Dense** layers and connect them to the network as shown below. Click the **Save** button to save the architecture.

![NN Layers](/images/zementis/mlw-app-nn-tl-added-layers.png)

***Neural network training parameters***

Click the **Train** button to train a model based on updated architecture. Provide the appropriate data set by selecting a value under **Data**. Specify the **Problem Type** which can either be **classification** or **regression**. If the data needs pre-processing, specify the **Pre Processing Script**. The **Recurrence** parameter defines whether the training task needs to be executed one time or periodically. For this example, the training task will be one time. Other parameters can be left as defaults. Once training parameters are updated click the **Submit** button which will trigger the training process.

![NN training parameter](/images/zementis/mlw-app-nn-tl-train.png)

***Neural network training progress***

You can view the neural network training progress in the **Tasks** section of MLW.

![NN training](/images/zementis/mlw-app-nn-tl-complete.png)

***Neural network training completed***

Once the task is **COMPLETED**, the trained model will be saved under the **Model** section of the respective **Project** in ONNX format.

![NN output](/images/zementis/mlw-app-nn-tl-onnx.png)

**Custom Network**

To begin with a custom network, we need to create a new neural network architecture file from scratch.

***Add new resource***

Click on **Add New Resource** to create a new Architecture file.

![New NN Selector](/images/zementis/mlw-app-nn-tl-selectnew.png)

In the **Add New Resource** panel, select **Resource Type** as **NN Designer** and **Architecture** as **None**. Provide a value for **Resource Name** and click the **Submit** button.

![New NN Name](/images/zementis/mlw-app-nn-createnew.png)

This will create a new Architecture file with extension **.architecture** under **NN Designer** section of the project.

***Neural network editor***

Select the Architecture file and click on the **Edit** button to edit the architecture.

![New NN Selector](/images/zementis/mlw-app-nn-blank.png)

This will open a blank architecture in the editor where you can add new layers to build a custom neural network architecture.

![New NN Selector](/images/zementis/mlw-app-nn-customarch.png)

The rest of the process to save the custom architecture and train the neural network model remain the same as in the case of Transfer Learning.
