---
title: Automated ML
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/web-app-mlw/#automl
---

Build your Machine Learning models with ease with the built-in Automated ML tool for Classification, Regression, and Anomaly Detection, which looks in all the hyperparameter space to get you the best model for your dataset.


***Add New Resource for AutoML***

Upload a tabular data to train a Machine Learning model on that data.

![pojects manager](/images/zementis/mlw-app-resource-adm.png)

***AutoML Selection***

Select the resource and click on the **New AutoML** button to proceed with training the AutoML model on the respective resource.

![Resources](/images/zementis/mlw-app-automl-select.png)

***Pre Processing steps***

Select the **Problem Type** and select the **Target Variable** and select the imputation method and data transformation methods for respective columns.

Click on the **Build** button to proceed.

![Pre Processing steps](/images/zementis/mlw-app-automl-pre.png)


***Pre Processing steps: add training parameters***

Select the training parameters and click on **Submit**. This will create a new task in the **Tasks** section.

![Pre Processing steps](/images/zementis/mlw-app-automl-trainparam.png)


***AutoML: Training Started***

Check the status of the task.

![Pre Processing steps](/images/zementis/mlw-app-automl-start.png)

***AutoML: Training Completed***

Check the accuracy of different algorithms trained on that data and also check the best accuracy.

![Pre Processing steps](/images/zementis/mlw-app-automl-complete.png)

***AutoML: Hyper Parameters***

Check the tuned hyperparameters.

![Pre Processing steps](/images/zementis/mlw-app-automl-hyper.png)

***AutoML: Model Created***

After completion of training, the trained model will be saved under the **Model** section of the respective **Project** in .pmml format.

![Pre Processing steps](/images/zementis/mlw-app-automl-model.png)

***Automated ML Deploy***
Once the model is generated the model from Model section can be deployed to MLE for predictions.

![Deploy To MLE](/images/zementis/mlw-app-automl-deploy-1.png)


![Select Deploy To MLE](/images/zementis/mlw-app-automl-deploy-2.png)


![Deployed To MLE](/images/zementis/mlw-app-automl-deploy-3.png)


![Prediction MLE](/images/zementis/mlw-app-automl-deploy-4.png)


![Select Format MLE](/images/zementis/mlw-app-automl-deploy-5.png)


![Select Model for Prediction](/images/zementis/mlw-app-automl-deploy-6.png)

![Preview or Download Prediction](/images/zementis/mlw-app-automl-deploy-7.png)

![Preview Prediction](/images/zementis/mlw-app-automl-deploy-8.png)