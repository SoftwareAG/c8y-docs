---
title: Neural Network (NN) Designer
layout: redirect
weight: 40
---

Machine Learning Workbench (MLW) provides an intuitive drag-and-drop designer that allows you to construct, edit, train and analyze deep neural networks. Built on the solid foundation of TensorFlow and Keras, the visual approach provides greater insight and clarity into the architecture of neural networks, enabling the creation of state-of-the-art deep learning models without writing a single line of code.

There are two approaches to training deep neural networks using Neural Network (NN) Designer. You can either start with a pre-trained model from a similar domain and use its architecture and weights as a starting point (transfer learning) or you can start from a blank slate and design a custom network from scratch. We will look at both these approaches in detail.

### Transfer learning

To begin the model training with transfer learning, you need to create a new neural network architecture file from an existing architecture.

The following steps illustrate how to train a deep neural network model using transfer learning.

1. Click **Add New Resource** to create a new architecture file.

    ![New NN Selector](/images/zementis/mlw-app-nn-tl-selectnew.png)

    In the **Add New Resource** dialog, select "NN Designer" as **Resource Type** and "MobileNet" as **Architecture**. Provide a value for **Resource Name** and click **Submit**.

    ![New NN Name](/images/zementis/mlw-app-nn-tl-name.png)

    This will create a new architecture file with the extension **.architecture** in the **NN Designer** folder of the project.

2. Select the architecture file and click **Edit** to edit the architecture.

    <!-- ![New NN Selector](/images/zementis/mlw-app-nn-tl-edit.png) -->

    This will open the MobileNet architecture in the editor where you can add new layers or remove existing layers.

    ![New NN Selector](/images/zementis/mlw-app-nn-tl-originalarch.png)

    With the pre-trained MobileNet model represented by the architecture shown above, you can initiate transfer learning. To get started, you have to remove the last 2 layers: **Reshape** and **Activation**. The network will appear as follows:

    ![NN Layers](/images/zementis/mlw-app-nn-tl-removed-layers.png)

    Next, drag and drop **Flatten** and **Dense** layers, set the properties and connect them to the network as shown below. Click the save icon at the right of the top menu bar to save the architecture.

    ![NN Layers](/images/zementis/mlw-app-nn-tl-added-layers.png)

3. Click **Train** to train a model on updated architecture. Provide the appropriate data set by selecting a value under **Data**. Specify the **Problem Type** which can either be "classification" or "regression". If the data needs pre-processing, specify the **Pre Processing Script**. The **Recurrence** parameter defines whether the training task needs to be executed one time or periodically. For this example, the training task will be one time. Provide values for **Epoch**, **Learning Rate**, **Loss**, **Metrics**, **Optimizer**. Other parameters can be left as default. Once the training parameters are updated click the submit icon which will trigger the training process.

![NN training parameter](/images/zementis/mlw-app-nn-tl-train.png)

You can view the neural network training progress in the **Tasks** folder of Machine Learning Workbench (MLW).

![NN training](/images/zementis/mlw-app-nn-tl-complete.png)

Once the task is COMPLETED, the trained model will be saved in the **Model** folder of the respective **Project** in ONNX format.

![NN output](/images/zementis/mlw-app-nn-tl-onnx.png)

### Custom Architecture

To begin the model training with a custom architecture, you need to create a new neural network architecture file from scratch.

The following steps illustrate how to train a deep neural network model using custom architecture

1. Add a new resource

    Click **Add New Resource** to create a new architecture file.

    ![New NN Selector](/images/zementis/mlw-app-nn-tl-selectnew.png)

    In the **Add New Resource** dialog, select "NN Designer" as **Resource Type** and "None" as **Architecture**. Provide a value for **Resource Name** and click **Submit**.

    ![New NN Name](/images/zementis/mlw-app-nn-createnew.png)

    This will create a new architecture file with the extension **.architecture** in the **NN Designer** folder of the project.

2. Select the architecture file and click **Edit** to edit the architecture.

    ![New NN Selector](/images/zementis/mlw-app-nn-blank.png)

    This will open a blank architecture in the editor where you can add new layers to build a custom neural network architecture.

    ![New NN Selector](/images/zementis/mlw-app-nn-customarch.png)

The rest of the steps to save the custom architecture and train the neural network model remains the same as in the case of transfer learning.
