---
title: Inference pipeline
layout: redirect
weight: 80
---

ONNX models typically require a pre-processing step that converts raw input data into tensors and a post-processing step that converts tensors into output values. Inference pipelines define a sequence of pre-processing steps, ONNX model, and post-processing step. Machine Learning Workbench (MLW) can deploy inference pipelines to [Machine Learning Engine](machine-learning/web-app/).

> **Info:** To proceed, you will require a trained model in ONNX format created from the [Neural Network Designer](/machine-learning/web-app-mlw/#nn-designer) or [Jupyter Notebooks](/machine-learning/web-app-mlw/#jupyter-integrated) along with pre-processing and post-processing Python scripts.

#### Creating a new pipeline

1. To create a new pipeline file, click the add icon and select **Add New Resource**.

	![Add New Resource](/images/zementis/mlw-app-resource-add-new.png)

2. In the **Add New Resource** dialog, select "Pipeline" as **Resource Type** and provide the **Resource Name** which identifies the pipeline.

	![Add Pipeline](/images/zementis/mlw-app-resource-add-pipeline.png)
	
3.  Select the appropriate **Model**, **Pre-processing Script** and **Post-processing Script** which defines the sequence of this pipeline. 
4. Once done, click **Submit**. 

This will create a new pipeline file with the extension **.pipeline** in the **Inference Pipeline** folder of the project.

Click on a pipeline file in the **Inference Pipeline** folder to view its metadata.

![Pipeline](/images/zementis/mlw-app-resource-pipeline.png)

#### Deploying a pipeline

Click **Deploy** to deploy the inference pipeline on Machine Learning Engine.

![Pipeline deployment](/images/zementis/mlw-app-resource-pipeline-deploy.png)
