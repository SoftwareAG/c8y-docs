---
title: Automated ML
layout: redirect
weight: 40
---

Machine Learning Workbench (MLW) provides an Automated Machine Learning (AutoML) feature which enables you to build your machine learning models for classification, regression and anomaly detection with ease by performing an exhaustive grid search in hyper-parameter space to generate the best model for your dataset.

### AutoML

The following steps illustrate how to train a machine learning model using AutoML.

1. Click the upload icon <img src="/images/zementis/mlw-upload-icon.png" alt="Upload" style="display:inline-block; margin:0"> to upload a tabular dataset to train a machine learning model on that data.

2. Select the data resource in the **Data** folder, and click the add icon <img src="/images/zementis/mlw-new-automl-icon.png" alt="Add" style="display:inline-block; margin:0"> at the right of the top menu bar to proceed with training the AutoML model on that data.

3. Select the **Problem Type** (**Regression** or **Classification**) and select the **Target Variable** at the right. Next, select the imputation methods and data transformation steps for the respective column and click **Build** to proceed.

    ![Pre-processing steps](/images/zementis/mlw-app-automl-pre.png)

5. In the **Training Parameter** section at the right, select the training parameters which include model evaluation criteria (**Scoring**), training iterations (**Generation**) and population size for each generation (**Population Size**) and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.

	![Pre-processing steps](/images/zementis/mlw-app-automl-trainparam.png)

This will create a new task in the **Tasks** section.

Click **Tasks** in the navigator and click the corresponding task name, to display the status of the model training in the **Task History** section at the center.

Once the task is COMPLETED, all the trained models are listed along with the model evaluation score in descending order.

The hyper-parameters for each model can be viewed by clicking on the corresponding model name.

![Pre-processing steps](/images/zementis/mlw-app-automl-hyper.png)

After the training is complete, the best model selected by the evaluation criteria will be saved in the **Model** folder of the respective **Project** in PMML format.

### Model deployment and predictions

Once the model is available in the **Model** folder, it can be deployed on Machine Learning Engine (MLE) for predictions. 

Select the model from the **Model** folder and click the cloud icon <img src="/images/zementis/mlw-deploy-icon.png" alt="Deploy" style="display:inline-block; margin:0"> ("Deploy") at the right of the top menu bar to deploy the selected model on Machine Learning Engine (MLE).

Once the model is successfully deployed, the cloud icon will change to <img src="/images/zementis/mlw-deployed-icon.png" alt="Deployed" style="display:inline-block; margin:0"> "Deployed".

To predict data using a deployed model, select the data set from the **Data** folder and click the predict icon <img src="/images/zementis/mlw-predict-icon.png" alt="Predict" style="display:inline-block; margin:0">.

Data can be sent to a PMML model, an ONNX model, or an ONNX pipeline. For this example, we will use a PMML model deployed on the Machine Learning Engine (MLE). Select the **PMML** option under the predict icon <img src="/images/zementis/mlw-predict-icon.png" alt="Predict" style="display:inline-block; margin:0">.

![Select Format MLE](/images/zementis/mlw-app-automl-predict.png)

This will list all the PMML models deployed on the Machine Learning Engine (MLE). Select the PMML model for prediction and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.

![Select Model for Prediction](/images/zementis/mlw-app-automl-predict-model-select.png)

The predicted results will be stored in the **Data** folder. For PMML models, the format of the input data will determine the format of predictions, i.e. output data. In our example, the input data was in CSV format. The output data will also be in CSV format. 

Select the output data from the **Data** folder and click the download icon <img src="/images/zementis/mlw-download-icon.png" alt="Download" style="display:inline-block; margin:0"> at the right of the top menu bar to download the output data to the local machine. 

Select the output data from the **Data** folder and click the preview icon <img src="/images/zementis/mlw-preview-icon.png" alt="Preview" style="display:inline-block; margin:0"> to preview the output data.
