---
title: Processing data
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/web-app/#processing-data
---

The **Predictions** navigation node allows you to do meaningful predictions by scoring the data from your devices against your predictive models.

Clicking **Predictions** in the navigator allows you to choose from two different modes of processing - Batch Processing and Scheduled Processing.

Click on the respective links to score the data using the mode of your choice. 

![Predictions](/images/zementis/zementis-predictions.png)

### Batch Processing

Batch Processing allows you to process data records supplied to the model or model group in a file. The records are processed in batches. 
Batch Processing is applicable for models listed under both PMML and ONNX. For processing data against ONNX models, choose the ONNX tab and PMML otherwise.

|Model/Group|Supported input data file types
|:---|:---|
|PMML model|CSV, JSON, JPEG, PNG
|PMML model group|CSV only
|ONNX model|JSON only

Batch Processing is primarily targeted for validating the accuracy of your predictive models by applying it against your input data. Hence, it is expected that you know the predicted outputs beforehand.
That way it allows you to do score matching on your data too.

>**Info**:
<br>Data processed by a machine learning model is termed as **scores**. Score matching is the technique in which the scores from a model are compared against the expected outputs.
In score matching, a one-to-one comparison of the exepected outputs to the actual scores is done. This in a way helps in validating if the model before deployment is performing the same after its deployment.

#### Running the batch process

To run the batch process on PMML models/groups, perform the following steps:

1. Click **Start** in the **PMML** tab to initiate the batch processing. 

2. In the **Batch Processing** wizard, first choose whether the processing should be applied on a model or a model group. Then select a model/group from the dropdown list. The dropdown list shows all models or groups which you have added either using the **Models** page or the **Model groups** 
page respectively. Use the **Enable score matching** toggle to enable/disable score matching. Use the **Apply across all models** toggle to choose whether to process the data across all the models in the group or just process the data through the primary model only.
![Batch process 1](/images/zementis/zementis-batch-process1.jpeg)
Click **Next** to proceed. <br>
3. Upload the file containing your input data. Drag and drop a file or select it by browsing. <br>
![Batch process 2](/images/zementis/zementis-batch-process2.jpeg)
<br>On uploading a valid file, you will see an uploading message. 
<br> After the processing has been completed, you will see a corresponding notification.

>**Info**: The size of the uploaded file must not exceed 500 MB.

For ONNX models too, running the batch process remains the same. However, there is no option to enable score matching. Also, you do not get the option of model grouping yet.

Note that since only JSON files can be supplied to an ONNX model, any image data needs to be pre-processed first and then the pre-processed data needs to be supplied for batch processing.

#### Viewing and downloading the results
<br>

|Model/Group| View | Download
|:---|:---|:---|
|PMML model| Preview maximum 500 processed records in a paginated manner, displaying 10 records per page | Download entire set of processed results and execution trace
|PMML model group|No preview option | Download ZIP of CSV files containing the entire set of processed results
|ONNX model| View the entire set of records processed | Download JSON containing the entire set of processed results

In order to view the results, click **Show Results** on the **Batch Processing Completed** notification. 

For PMML models, in the top right of the **Preview** page you find several buttons to perform the following actions:

|Button|Action
|:---|:---
|![Download](/images/zementis/zementis-download-icon.png)|Download the entire set of processed results.
|![Filter](/images/zementis/zementis-filter-icon.png)|Enable or disable filters.
|![Configure](/images/zementis/zementis-cogwheel-icon.png)|Configure the columns to be shown in the preview table.

Ideally, for measuring the accuracy of the model against your data, you should specify the desired outputs as part of you data file. If score matching was enabled, the processed results will include a separate column called **Match** which indicates if the computed and the expected outputs have matched.

Click the cogwheel icon <img src="/images/zementis/zementis-cogwheel-icon.png" alt="File" style="display:inline-block; margin:0"> and select **Hide matching rows**, to hide all rows where the **Match** column is true, i.e. to display only records where computed and expected outputs differ. 

Click the file icon <img src="/images/zementis/zementis-file-icon.png" alt="File" style="display:inline-block; margin:0"> in front of a row, to download a full execution trace, showing what exactly happened when that record was applied against the model. In this way, you can investigate why the outputs did not match.

For ONNX, there are no options available for filtering or any sort of configuration. The only option available is to download the processed results.

### Scheduled Processing

Scheduled Processing allows you to schedule batch jobs for processing measurements from devices or device groups against an available model or model group.

The job scheduler can be used to trigger one-time or periodic jobs on data captured from devices. The scheduler allows you to map device data to model inputs by providing a mapping tool. Periodic executions of batch jobs can be useful when aggregate information on model’s predictions is required for a desired time period.

>**Info**: Note that currently scheduled processing is applicable for PMML models and model groups only.

#### Scheduling a job

To schedule a new job, perform the following steps:

1. Click **Create Job** in the **Scheduled Processing** page. 
2. In the **Job Config** wizard, enter the name and description of the job you want to create. Select a target device or device group from the dropdown list. The list shows maximum 2000 devices or groups but you can search for the device you are interested in.
Once done, select a target model or model group which will be used for processing the data captured from your selected device or device group. The dropdown list shows all models and groups which you have already added. 
Use the **Apply across all models** toggle in case if you want the processing to happen on all the models of a model group.<br>
![Scheduled process 1](/images/zementis/zementis-jobconfig-info.png)
<br>Click **Next** to proceed. 
3. Each device can have various measurements which are persisted in Cumulocity IoT. In the **Mapping** section, map the device measurements to the corresponding model inputs.<br>
![Scheduled process 2](/images/zementis/zementis-jobconfig-mapping.png)
<br>Click **Next** to proceed.
4. Set the schedule of the job by selecting the frequency for the job followed by when it should run. You also need to specify the data range to be used for processing when the job is executed.
![Scheduled process 3](/images/zementis/zementis-jobconfig-schedule.png)
<br>Click **Finish** to schedule the job that you just configured.

>**Info**:
<br>1. For a periodic frequency, a CRON expression is generated and used by the scheduler.
<br>2. The data range selected for the schedule must not exceed 24 hours.
<br>3. For a one-time job, you need to select the date when the job should run. You also need to specify the data range to be used for processing when the job is executed.

After the job is scheduled, you will see a corresponding notification.

Note that if there are too many jobs scheduled, then, over time the underlying MongoDB of a tenant might become over-populated with execution data from these jobs. 
Hence it is recommended to have a retention rule in place to clean up data which is too old.  <br>
In order to do so, create a retention rule for events containing `ZementisExecution` in its `type` field. This rule would not remove the jobs themselves but only the 
data from the execution of the jobs. 
For details on adding retention rules, see [To add a retention rule](/users-guide/administration/#add-retention-rule). 

#### Viewing the scheduled jobs

![Scheduled Jobs](/images/zementis/zementis-scheduled-jobs.png)

By design, the **Scheduled Processing** page shows a list of all the scheduled jobs in a paginated manner, displaying 10 jobs per page. 

Click any link in the **NAME** column to view the configuration of that specific job. Click the delete icon of any job to remove the job.

#### Viewing the execution results of jobs

To view the execution results of any job, click on the history icon associated to that job in the **My Jobs** section of the **Scheduled Processing** page.

![Job History](/images/zementis/zementis-job-execution-history.png)

By design, the **Execution Results** page previews all executions of the job in a paginated manner, displaying 10 executions per page.
 
For executions with status **Warning** or **Failure**, hover over the status to see the detailed reason behind the status. Click **Back** to see all scheduled jobs.

#### Viewing the inferences of a job execution

To view the inferences generated by any execution of a job, click on the details icon associated to that execution in the **Execution Results** page.

![Execution Inferences Continuous](/images/zementis/zementis-execution-inferences-continuous.png)
![Execution Inferences Categorical](/images/zementis/zementis-execution-inferences-categorical.png)

The **Inferences** window shows two different types of charts, a line-chart plotting the continuous outputs of the model and a pie-chart plotting the model’s categorical outputs. 

The inferences are shown in a paginated manner, displaying 2000 inferences per page. For executions containing device groups and model groups, it will also allow you to shuffle between different devices and models which were part of that execution.
