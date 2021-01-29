---
title: Automated ML
layout: redirect
weight: 40
---

Machine Learning Workbench (MLW) provides an Automated Machine Learning (AutoML) feature which enables you to build your machine learning models for classification, regression and anomaly detection with ease by performing an exhaustive grid search in hyper-parameter space to generate the best model for your dataset.

***Add a new resource for AutoML***

Upload a tabular dataset to train a machine learning model on that data.

![pojects manager](/images/zementis/mlw-app-resource-adm.png)

***AutoML selection***

Select the data resource and click **New AutoML** to proceed with training the AutoML model on that data.

![Resources](/images/zementis/mlw-app-automl-select.png)

***Pre-processing step***

Select the **Problem Type** (**Regression** or **Classification**) and select the **Target Variable**. Next, select the imputation method and data transformation methods for respective columns. Once done, click **Build** to proceed.

![Pre Processing steps](/images/zementis/mlw-app-automl-pre.png)

***Pre Processing step: add training parameters***

Select the training parameters which includes model evaluation criteria (**Scoring**), training iterations (**Generation**) and population size for each generation (**Population Size**). Once done, click **Submit**. This will create a new task in the **Tasks** section.

![Pre Processing steps](/images/zementis/mlw-app-automl-trainparam.png)

***AutoML status***

You can view the model training progress in the **Tasks** section of Machine Learning Workbench (MLW).

![Pre Processing steps](/images/zementis/mlw-app-automl-start.png)

Once the task is **COMPLETED**, all the trained models are listed along with the model evaluation score in descending order.

![Pre Processing steps](/images/zementis/mlw-app-automl-complete.png)

***AutoML hyper-parameters***

The hyper-parameters for each model can be viewed by clicking on the corresponding model name.

![Pre Processing steps](/images/zementis/mlw-app-automl-hyper.png)

***AutoML model***

After training is complete, the best model selected by the evaluation criteria will be saved in the **Model** section of the respective **Project** in PMML format.

![Pre Processing steps](/images/zementis/mlw-app-automl-model.png)

***Model Deployment and Predictions***

Once the model is available in the **Model** section, it can be deployed on Machine Learning Engine (MLE) for predictions. Click **Deploy** to deploy the selected model on Machine Learning Engine (MLE).

![Select Deploy To MLE](/images/zementis/mlw-app-automl-deploy-2-1.png)

Once the model is successfully deployed, the **Deploy** icon will change to **Deployed**.

![Deployed To MLE](/images/zementis/mlw-app-automl-deploy-3-1.png)

To predict data using a deployed model, select the data set from the **Data** section and click **Predict**.

![Prediction MLE](/images/zementis/mlw-app-automl-deploy-4.png)

Data can be sent to a PMML model, an ONNX model, or an ONNX Pipeline. For this example, we will use a PMML model deployed on Machine Learning Engine (MLE). Select the **PMML** option under **Predict**.

![Select Format MLE](/images/zementis/mlw-app-automl-deploy-5.png)

This will list all the PMML models deployed on Machine Learning Engine (MLE). Select the PMML model for prediction and click **Submit**.

![Select Model for Prediction](/images/zementis/mlw-app-automl-deploy-6.png)

The predicted results will be stored in the **Data** section. For PMML models, the format of the input data will determine the format of predictions, i.e. output data. In our example, the input data was in CSV format. The output data will also be in CSV format. The output data can be downloaded to the local machine by clicking **Download**.

![Preview or Download Prediction](/images/zementis/mlw-app-automl-deploy-7.png)

The output data can also be previewed by clicking **Preview**.

![Preview Prediction](/images/zementis/mlw-app-automl-deploy-8.png)
