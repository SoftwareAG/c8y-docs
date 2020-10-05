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

Select the training parameters and click submit. this will create a new task in the **Tasks** section.

![Pre Processing steps](/images/zementis/mlw-app-automl-trainparam.png)


***Pre Processing steps: training started***

See the status of the task.

![Pre Processing steps](/images/zementis/mlw-app-automl-start.png)

***AutoML: training completed***

See the accuracy of different algorithms trained on that data and also see the best accuracy.

![Pre Processing steps](/images/zementis/mlw-app-automl-complete.png)

***AutoML: hyper parameters***

See the tuned hyperparameters.

![Pre Processing steps](/images/zementis/mlw-app-automl-hyper.png)

***AutoML: model created***

After completion of training, the trained model will be saved under the **Model** section of the respective **Project** in .pmml format.

![Pre Processing steps](/images/zementis/mlw-app-automl-model.png)
