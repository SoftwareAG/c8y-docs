---
title: Processing data
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/web-app/#processing-data
---

The **Predictions** menu allows you to do meaningful predictions by scoring the data from your devices against your predictive models.

Clicking **Predictions** in the navigator allows you to choose from two different modes of processing: **Batch processing** and **Scheduled processing**.

![Predictions](/images/zementis/zementis-predictions.png)

### Batch processing

Batch processing allows you to process data records against a model, model group or pipeline. Batch processing is applicable for both PMML and ONNX models. 

To process data against PMML models/groups, choose the **PMML** tab. Similarly, to process data against ONNX models/pipelines, choose the **ONNX** tab.

|Model/group/pipeline|Supported input data file types|Supported compression for input files
|:---|:---|:---|
|PMML model|CSV, JSON, JPEG, PNG|ZIP (for CSV and JSON files)
|PMML model group|CSV only|ZIP (for CSV files)
|ONNX model|JSON only|-
|ONNX pipeline| Any |-

#### Running the batch process

For PMML models, batch processing can be used for verifying the accuracy of your predictive models by applying it against test data obtained from the model training environment. The goal is to ensure that model development environment and model deployment environment produce the same results. We call this *score matching*. To run the batch process on PMML model/group, perform the following steps:

1. Click **Start** in the **PMML** tab to initiate the processing. 

2. In the **Batch Processing** wizard, first choose whether the processing should be applied on a model or a model group. Then select a model/group from the dropdown list. The dropdown list shows all models or groups which you have added either using the **Models** page or the **Model groups** 
page respectively. Use the **Enable score matching** toggle to enable/disable score matching. Use the **Apply across all models** toggle to choose whether to process the data across all the models in the group or just process the data through the primary model only.
![Batch process 1](/images/zementis/zementis-batch-process1.jpeg)
Click **Next** to proceed. <br>
3. Upload the file containing your input data. Drag and drop a file or select it by browsing. <br>
![Batch process 2](/images/zementis/zementis-batch-process2.jpeg)
On uploading a valid file, you will see an uploading message. 
After the processing has been completed, you will see a corresponding notification.

>**Info:** The size of the uploaded file must not exceed 500 MB.

The steps involved in running the batch process on ONNX models/pipelines remain similar to the ones for PMML models. However, there is no option to enable score matching. Also, model groups for ONNX models are not supported yet.

#### Viewing and downloading the results

In order to view the results, click **Show results** on the **Batch processing completed** notification. 

For PMML models/groups, the **Preview** page will only preview maximum 500 records in a paginated manner, displaying 10 records per page.

![Show Preview PMML](/images/zementis/zementis-batch-process-results.png)

In the top right of the **Preview**, you find several buttons to perform the following actions:

|Button|Action
|:---|:---
|![Download](/images/zementis/zementis-download-icon.png)|Download the entire set of processed results.
|![Filter](/images/zementis/zementis-filter-icon.png)|Enable or disable filters.
|![Configure](/images/zementis/zementis-cogwheel-icon.png)|Configure the columns to be shown in the preview table.

Ideally, for measuring the accuracy of the model against your data, you should specify the desired outputs as part of you data file. If score matching was enabled, the processed results will include a separate column called **Match** which indicates if the computed and the expected outputs have matched.

Click the cogwheel icon <img src="/images/zementis/zementis-cogwheel-icon.png" alt="File" style="display:inline-block; margin:0"> and select **Hide matching rows**, to hide all rows where the **Match** column is true, i.e. to display only records where computed and expected outputs differ. 

Click the file icon <img src="/images/zementis/zementis-file-icon.png" alt="File" style="display:inline-block; margin:0"> in front of a row, to download a full execution trace, showing what exactly happened when that record was applied against the model. In this way, you can investigate why the outputs did not match.

For ONNX models, the **Results** page will show the entire set of records processed in JSON format. However, for ONNX pipelines, the **Results** page may not show any content if the post-processing script associated with the pipeline does not return any data. There are no options available for filtering or any sort of configuration for ONNX models/pipelines. The only option available is to download the processed results.

![Show Results ONNX](/images/zementis/zementis-batch-process-results-onnx.png)


### Scheduled processing

Scheduled processing allows you to schedule batch jobs for processing measurements from devices or device groups against an available model or model group.

The job scheduler can be used to trigger one-time or periodic jobs on data captured from devices. The scheduler allows you to map device data to model inputs by providing a mapping tool. Periodic executions of batch jobs can be useful when aggregate information on model’s predictions is required for a desired time period.

>**Info:** Currently, scheduled processing is only applicable for PMML models and model groups.

#### Scheduling a job

To schedule a new job, perform the following steps:

1. Click **Create job** in the **Scheduled processing** page. 
2. In the **Job config** wizard, enter the name and description of the job you want to create. Select a target device or device group from the dropdown list. The list shows maximum 2000 devices or groups but you can search for the device you are interested in.
Once done, select a target model or model group which will be used for processing the data captured from your selected device or device group. The dropdown list shows all models and groups which you have already added. 
Use the **Apply across all models** toggle if you want the processing to happen on all the models of a model group. When this option is disabled, processing will happen on primary model of the model group.<br>
![Scheduled process 1](/images/zementis/zementis-jobconfig-info.png)
<br>Click **Next** to proceed. 
3. Each device can have various measurements which are persisted in Cumulocity IoT. In the **Mapping** section, map the device measurements to the corresponding model inputs.<br>
![Scheduled process 2](/images/zementis/zementis-jobconfig-mapping.png)
<br>Click **Next** to proceed.
4. Set the schedule of the job by selecting the frequency for the job followed by when it should run. You also need to specify the data range to be used for processing when the job is executed.
![Scheduled process 3](/images/zementis/zementis-jobconfig-schedule.png)
<br>Click **Finish** to schedule the job that you just configured.

>**Info:**
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

By design, the **Scheduled processing** page shows a list of all the scheduled jobs in a paginated manner, displaying 10 jobs per page. 

Click any link in the **NAME** column to view the configuration of that specific job. Click the delete icon of any job to remove the job.

#### Viewing the execution results of jobs

To view the execution results of any job, click on the history icon associated to that job in the **My Jobs** section of the **Scheduled processing** page.

![Job History](/images/zementis/zementis-job-execution-history.png)

By design, the **Execution results** page previews all executions of the job in a paginated manner, displaying 10 executions per page.
 
For executions with status **Warning** or **Failure**, hover over the status to see the detailed reason behind the status. Click **Back** to see all scheduled jobs.

#### Viewing the inferences of a job execution

To view the inferences generated by any execution of a job, click on the details icon associated to that execution in the **Execution results** page.

![Execution Inferences Continuous](/images/zementis/zementis-execution-inferences-continuous.png)
![Execution Inferences Categorical](/images/zementis/zementis-execution-inferences-categorical.png)

The **Inferences** window shows two different types of charts, a line-chart plotting the continuous outputs of the model and a pie-chart plotting the model’s categorical outputs. 

The inferences are shown in a paginated manner, displaying 2000 inferences per page. For executions containing device groups and model groups, it will also allow you to shuffle between different devices and models which were part of that execution.
