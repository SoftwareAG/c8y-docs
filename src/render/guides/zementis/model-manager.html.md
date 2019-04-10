
---
order: 20
title: Predictive Analytics application
layout: standalone
---

The following sections will walk you through all functionalities of the Predictive Analytics application in detail.

In the Cumulocity application, you access the Predictive Analytics application through the app switcher. 

### Home screen

Clicking **Predictive Analytics** in the app switcher will open the Predictive Analytics application showing the  **Home screen** of the application.

![Home screen](/guides/images/zementis/zementis-home-screen.png)

The **Home screen** provides

* an introduction to the application,
* quick links to important topics like machine learning and PMML
* lists of your models and your resources


### Managing models

In the **Models** page you actually do the model management. Model management functionality includes

* uploading models
* downloading models
* activating or deactivating models
* deleting models
* viewing model properties and KPIs

Click **Models** in the navigator, to open the **Models** page. 

![Models manager](/guides/images/zementis/zementis-models.png)

#### Uploading models

To upload a new model, click **Add model**, navigate to the desired model's PMML file and then click **Open**. Once your model is successfully uploaded, you will see a corresponding confirmation message. The new model will be added to the models list. 

On uploading a model, use the **Apply PMML Cleanser** toggle in the top menu bar to enable/disable the PMML cleanser.

#### Downloading models

A model can be downloaded in various formats for future use. 

For each format a clickable icon is provided in the model cards. 

|Icon|Download format|
|:---|:---|
|![Download icon 1](/guides/images/zementis/zementis-download-icon1.png)|downloads the PMML source as PMML file without annotations
|![Download icon 2](/guides/images/zementis/zementis-download-icon2.png)|downloads the PMML source as PMML file with annotations
|![Download icon 3](/guides/images/zementis/zementis-download-icon3.png)|downloads the model´s serialized version as binary file

#### Activating or deactivating models

A model, if not being used for a long time, can be deactivated so that it doesn't occupy space in the memory of the system. Click the **Active/Inactive** toggle button in a model´s card to deactivate/activate the model.


#### Deleting models

To delete a model, click the delete icon on its card and confirm the deletion.  

Once a model is deleted, it will be removed permanently from your list of models. 

#### Viewing model properties and KPIs

A model has many important properties such as model inputs and outputs as well as meaningful KPIs like memory snapshots which help you to get an insight into the run-time performance  of the model. 

Click the details icon on the top right of a card, to view the properties and KPIs of a model.

Besides the name, description and status of the model, the **Model Details** window shows the input and output of the model and some useful charts created using the KPIs. 

![Model details](/guides/images/zementis/zementis-model-details.png)

**Info**: By default, the **Inputs** and **Outputs** panels are in collapsed state. Click the labels to expand them. 

### Managing resources

In the **Resources** page you manage the resources, i.e. the custom functions and look-up tables which a model might need.

Resources functionality includes

* uploading resources
* downloading resources
* deleting resources

Click **Resources** in the navigator, to open the **Resources** page. 

![Resources](/guides/images/zementis/zementis-resources.png)

#### Uploading resources

To upload a new resource, click **Add resource**, navigate to the desired resource file and then click **Open**. Once your resource is successfully uploaded, you will see a corresponding confirmation message. The new resource will be added to the resources list. 


#### Downloading resources

To download the source file of a resource, click the download icon in its card.

Typically the source of the resource will either be a jar file or an Excel sheet.

#### Deleting resources

To delete a resource, click the delete icon on its card and confirm the deletion.  

Once a resource is deleted, it will be removed permanently from your resources list.

### Processing data

The **Predictions** page allows you to do meaningful predictions by scoring the data from your devices against your predictive models.

Click **Predictions** in the navigator, to open the **Predictions** page. 

![Predictions](/guides/images/zementis/zementis-predictions.png)

#### Running the batch process

Currently, the **Predictions** page allows you to process data records supplied to the model in a CSV or JSON file. The records are processed in batches.

The **Predictions** page is primarily targeted for testing the accuracy of your predictive models by applying it against your test data. Hence, it is expected that you know the predicted outputs beforehand.

To run the batch process, perform the following steps:

1. Click **Start** in the **Predictions** page to initiate the batch processing. <br>
![Batch process 1](/guides/images/zementis/zementis-batch-process1.jpeg)

2. In the **Batch Processing** wizard, select a model from the dropdown list. The dropdown list shows all models which you have uploaded to the **Models** page. Click **Next** to proceed. <br>
![Batch process 2](/guides/images/zementis/zementis-batch-process2.jpeg)
 
3. Upload the file containing the CSV/JSON records of your test data. Drag and drop a file or select it by browsing. On uploading a valid file, you will see an uploading message. <br>
![Batch process 3](/guides/images/zementis/zementis-batch-process3.jpeg) <br>
 **Info**: The size of the uploaded file must not exceed 500 MB.
 
4. On completion of processing, you will see a corresponding notification.<br>
![Batch process 4](/guides/images/zementis/zementis-batch-process4.jpeg)

#### Viewing the results

Click **Show Results** to preview the scored or processed results. 

![Results](/guides/images/zementis/zementis-batch-process-results.png)

By design, the **Results** page will only preview maximum 500 records in a paginated manner, displaying 10 records per page. 

Click the download icon in the top right of the **Results** page, to download the entire set of processed results.

You can also filter the results or search through it. Click the filter icon to enable or disable filters

Click the cogwheel icon, to configure the columns to be shown in the results table.

Ideally, for measuring the accuracy of the model against your data, you should specify the desired outputs as part of you data file.

If specified, the processed results will include a separate column called **Match** which indicates if the computed and the expected outputs have matched.

Click the cogwheel icon and select **Hide matching rows** to hide all rows where the **Match** column is true, i.e. to display only records where computed and expected outputs differ.

Click the file icon in front of a row to download a full execution trace showing what exactly happened when that record was applied against the model. In this way, you can investigate why the outputs did not match.


