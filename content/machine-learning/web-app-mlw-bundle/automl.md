---
title: Automated ML
layout: redirect
weight: 40
---

Machine Learning Workbench (MLW) provides an Automated Machine Learning (AutoML) feature which enables you to build your machine learning models for classification, regression and anomaly detection with ease by performing an exhaustive grid search in hyper-parameter space to generate the best model for your dataset.

### AutoML

The following steps illustrate how to train a machine learning model using AutoML.

1. Click the upload icon to upload a tabular dataset to train a machine learning model on that data.

    ![pojects manager](/images/zementis/mlw-app-resource-adm.png)

2. Select the data resource in the **Data** folder, and click the add icon at the right of the top menu bar to proceed with training the AutoML model on that data.

    ![Resources](/images/zementis/mlw-app-automl-select.png)

3. Select the **Problem Type** (**Regression** or **Classification**) and select the **Target Variable** at the right. Next, select the imputation methods and data transformation steps for the respective columns. 

4. Once done, click **Build** to proceed.

    ![Pre-processing steps](/images/zementis/mlw-app-automl-pre.png)

5. In the **Training Parameter** section at the right, select the training parameters which include model evaluation criteria (**Scoring**), training iterations (**Generation**) and population size for each generation (**Population Size**).

	![Pre-processing steps](/images/zementis/mlw-app-automl-trainparam.png)

6. Once done, click the submit icon. 

This will create a new task in the **Tasks** folder.

Click the corresponding task name in the **Tasks** folder, to display the status of the workflow execution in the **Task Info** section at the right.

![Pre-processing steps](/images/zementis/mlw-app-automl-start.png)

Once the task is COMPLETED, all the trained models are listed along with the model evaluation score in descending order.

![Pre-processing steps](/images/zementis/mlw-app-automl-complete.png)

The hyper-parameters for each model can be viewed by clicking on the corresponding model name.

![Pre-processing steps](/images/zementis/mlw-app-automl-hyper.png)

After the training is complete, the best model selected by the evaluation criteria will be saved in the **Model** folder of the respective **Project** in PMML format.

![Pre-processing steps](/images/zementis/mlw-app-automl-model.png)

### Model deployment and predictions

Once the model is available in the **Model** folder, it can be deployed on Machine Learning Engine (MLE) for predictions. 

Click the cloud icon ("Deploy") at the right of the top menu bar to deploy the selected model on Machine Learning Engine (MLE).

![Select Deploy To MLE](/images/zementis/mlw-app-automl-deploy-2-1.png)

Once the model is successfully deployed, the cloud icon will change to "Deployed".

![Deployed To MLE](/images/zementis/mlw-app-automl-deploy-3-1.png)

To predict data using a deployed model, select the data set from the **Data** folder and click the predict icon.

![Prediction MLE](/images/zementis/mlw-app-automl-deploy-4.png)

Data can be sent to a PMML model, an ONNX model, or an ONNX pipeline. For this example, we will use a PMML model deployed on the Machine Learning Engine (MLE). Select the **PMML** option under the predict icon.

![Select Format MLE](/images/zementis/mlw-app-automl-deploy-5.png)

This will list all the PMML models deployed on the Machine Learning Engine (MLE). Select the PMML model for prediction and click the submit icon.

![Select Model for Prediction](/images/zementis/mlw-app-automl-deploy-6.png)

The predicted results will be stored in the **Data** folder. For PMML models, the format of the input data will determine the format of predictions, i.e. output data. In our example, the input data was in CSV format. The output data will also be in CSV format. 

Click the download icon at the right of the top menu bar to download the output data to the local machine. 

![Preview or Download Prediction](/images/zementis/mlw-app-automl-deploy-7.png)

Click the preview icon to preview the output data.

![Preview Prediction](/images/zementis/mlw-app-automl-deploy-8.png)
