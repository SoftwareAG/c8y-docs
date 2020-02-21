---
title: Managing models
layout: redirect
weight: 30

aliases:
  - /predictive-analytics/web-app/#managing-models
---

In the **Models** page you actually do the model management. 

Model management functionality includes:

* Uploading models
* Downloading models
* Activating or deactivating models
* Deleting models
* Viewing model properties and KPIs

Click **Models** in the navigator, to open the **Models** page. 

![Models manager](/images/zementis/zementis-models.png)

### Uploading models

To upload a new model, click **Add model**, navigate to the desired model's PMML file and then click **Open**. 

Once your model is successfully uploaded, you will see a corresponding confirmation message. The new model will be added to the models list. 

On uploading a model, use the **Apply PMML Cleanser** toggle in the top menu bar to enable/disable the PMML cleanser.

By default, the toggle is enabled. 

During model upload if the **Apply PMML Cleanser** toggle is enabled, comprehensive semantic checks and corrections will be performed on the provided PMML file.  Disabling it will improve upload time, but this is not recommended. If the PMML file is large, such as Random Forest model, we recommend compressing the file using ZIP/GZIP before uploading. This will reduce the upload time drastically.

### Downloading models

A model can be downloaded in various formats for future use. 

For each format a clickable icon is provided in the model cards. 

|Icon|Download format|
|:---|:---|
|![Download icon 1](/images/zementis/zementis-download-icon1.png)|downloads the PMML source as PMML file without annotations
|![Download icon 2](/images/zementis/zementis-download-icon2.png)|downloads the PMML source as PMML file with annotations
|![Download icon 3](/images/zementis/zementis-download-icon3.png)|downloads the model´s serialized version as binary file

### Activating or deactivating models

A model, if not being used for a long time, can be deactivated so that it doesn't occupy space in the memory of the system. 

Click the **Active/Inactive** toggle button in a model´s card to deactivate/activate the model.


### Deleting models

To delete a model, click the delete icon on its card and confirm the deletion.  

Once a model is deleted, it will be removed permanently from your list of models. 

### Viewing model properties and KPIs

A model has many important properties such as model inputs and outputs as well as meaningful KPIs like memory snapshots which help you to get an insight into the run-time performance  of the model. 

Click the details icon <img src="/images/zementis/zementis-details-icon.png" alt="Details" style="display:inline-block; margin:0"> on the top right of a card, to view the properties and KPIs of a model.

Besides the name, description and status of the model, the **Model Details** window shows the inputs and outputs of the model and some useful charts created using the KPIs. These charts currently include the Memory Metrics and the Prediction Metrics.

![Model details](/images/zementis/zementis-model-details.png)

Memory Metrics provides information about the memory footprint of the model on the server and its related attributes like used memory, free memory and total memory of the application. The same information is represented as a vertical bar chart.

Prediction Metrics provides a scoring result summary for the models. Prediction Metrics of a classification model displays the predicted categories and its respective counts as a pie chart. Prediction Metrics of a regression model
displays the Five Point Summary of predicted values i.e., Minimum, FirstQuartile, Median, ThirdQuartile and Maximum values as a box plot. Initially, the Prediction Metrics of any model is empty and it will be displayed only if scoring is applied on the model. Prediction Metrics of a model will be reset when the model is deleted or deactivated. Also the Prediction Metrics information that shows up is always the cumulative result with the past scoring of the model.

Currently the Prediction Metrics feature is supported only for classification and regression models.

>**Info**: By default, the **Inputs** and **Outputs** panels are in collapsed state. Click the labels to expand them. 