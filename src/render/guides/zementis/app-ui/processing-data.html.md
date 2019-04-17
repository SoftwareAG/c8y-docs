---
title: Processing data
layout: redirect
order: 50
---

The **Predictions** page allows you to do meaningful predictions by scoring the data from your devices against your predictive models.

Click **Predictions** in the navigator, to open the **Predictions** page. 

![Predictions](/guides/images/zementis/zementis-predictions.png)

### Running the batch process

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

### Viewing the results

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


