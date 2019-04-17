---
title: Managing models
layout: redirect
order: 30
---

In the **Models** page you actually do the model management. Model management functionality includes

* uploading models
* downloading models
* activating or deactivating models
* deleting models
* viewing model properties and KPIs

Click **Models** in the navigator, to open the **Models** page. 

![Models manager](/guides/images/zementis/zementis-models.png)

### Uploading models

To upload a new model, click **Add model**, navigate to the desired model's PMML file and then click **Open**. Once your model is successfully uploaded, you will see a corresponding confirmation message. The new model will be added to the models list. 

On uploading a model, use the **Apply PMML Cleanser** toggle in the top menu bar to enable/disable the PMML cleanser.

### Downloading models

A model can be downloaded in various formats for future use. 

For each format a clickable icon is provided in the model cards. 

|Icon|Download format|
|:---|:---|
|![Download icon 1](/guides/images/zementis/zementis-download-icon1.png)|downloads the PMML source as PMML file without annotations
|![Download icon 2](/guides/images/zementis/zementis-download-icon2.png)|downloads the PMML source as PMML file with annotations
|![Download icon 3](/guides/images/zementis/zementis-download-icon3.png)|downloads the model´s serialized version as binary file

### Activating or deactivating models

A model, if not being used for a long time, can be deactivated so that it doesn't occupy space in the memory of the system. Click the **Active/Inactive** toggle button in a model´s card to deactivate/activate the model.


### Deleting models

To delete a model, click the delete icon on its card and confirm the deletion.  

Once a model is deleted, it will be removed permanently from your list of models. 

### Viewing model properties and KPIs

A model has many important properties such as model inputs and outputs as well as meaningful KPIs like memory snapshots which help you to get an insight into the run-time performance  of the model. 

Click the details icon on the top right of a card, to view the properties and KPIs of a model.

Besides the name, description and status of the model, the **Model Details** window shows the input and output of the model and some useful charts created using the KPIs. 

![Model details](/guides/images/zementis/zementis-model-details.png)

**Info**: By default, the **Inputs** and **Outputs** panels are in collapsed state. Click the labels to expand them. 