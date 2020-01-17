---
title: Processing data
layout: redirect
weight: 50
---

The **Predictions** page allows you to do meaningful predictions by scoring the data from your devices against your predictive models.

Click **Predictions** in the navigator, to open the **Predictions** page. 

![Predictions](/images/zementis/zementis-predictions.png)

### Batch Processing

Batch Processing allows you to process data records supplied to the model in a CSV or JSON file. The records are processed in batches. It also allows you to pass on image data as a JPEG or PNG file for processing.

Batch Processing is primarily targeted for testing the accuracy of your predictive models by applying it against your test data. Hence, it is expected that you know the predicted outputs beforehand.

#### Running the batch process

To run the batch process, perform the following steps:

1. Click **Start** in the **Batch processing** tab to initiate the batch processing. 
2. In the **Batch Processing** wizard, select a model from the dropdown list. The dropdown list shows all models which you have uploaded to the **Models** page. <br>
![Batch process 1](/images/zementis/zementis-batch-process1.jpeg)
<br>Click **Next** to proceed. 
3. Upload the file containing the CSV/JSON records of your test data or choose the image file (JPEG/PNG) you want to process. Drag and drop a file or select it by browsing. <br>
![Batch process 2](/images/zementis/zementis-batch-process2.jpeg)
<br>On uploading a valid file, you will see an uploading message. 

>**Info**: The size of the uploaded file must not exceed 500 MB.
 
After the processing has been completed, you will see a corresponding notification.

#### Viewing the results

Click **Show Results** to preview the scored or processed results. 

![Results](/images/zementis/zementis-batch-process-results.png)

By design, the **Results** page will only preview maximum 500 records in a paginated manner, displaying 10 records per page. 

In the top right of the **Results** page you find several buttons to perform the following actions:

|Button|Action
|:---|:---
|![Download](/images/zementis/zementis-download-icon.png)|Download the entire set of processed results.
|![Filter](/images/zementis/zementis-filter-icon.png)|Enable or disable filters.
|![Configure](/images/zementis/zementis-cogwheel-icon.png)|Configure the columns to be shown in the results table.

Ideally, for measuring the accuracy of the model against your data, you should specify the desired outputs as part of you data file. If specified, the processed results will include a separate column called **Match** which indicates if the computed and the expected outputs have matched.

Click the cogwheel icon <img src="/images/zementis/zementis-cogwheel-icon.png" alt="File" style="display:inline-block; margin:0"> and select **Hide matching rows**, to hide all rows where the **Match** column is true, i.e. to display only records where computed and expected outputs differ. 

Click the file icon <img src="/images/zementis/zementis-file-icon.png" alt="File" style="display:inline-block; margin:0"> in front of a row, to download a full execution trace, showing what exactly happened when that record was applied against the model. In this way, you can investigate why the outputs did not match.

### Scheduled Processing

Scheduled Processing allows you to schedule batch jobs for processing measurements from devices or device groups against an available model.

The job scheduler can be used to trigger one-time or periodic jobs on data captured from devices. The scheduler allows you to map device data to model inputs by providing a mapping tool. Periodic executions of batch jobs can be useful when aggregate information on model’s predictions is required for a desired time period.

#### Scheduling a job

To schedule a new job, perform the following steps:

1. Click **Create Job** in the **Scheduled Processing** tab. 
2. In the **Job Config** wizard, enter the name and description of the job you want to create. Select a target device or device group from the dropdown list. The list shows maximum 2000 devices or groups. Once done, select a target model which will be used for processing the data captured from your selected device or device group. The dropdown list shows all models which you have uploaded to the **Models** page.<br>
![Scheduled process 1](/images/zementis/zementis-jobconfig-info.png)
<br>Click **Next** to proceed. 
3. Each device can have various measurements which are persisted in Cumulocity. In the **Mapping** section, map the device measurements to the corresponding model inputs.<br>
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

#### Viewing the scheduled jobs

![Scheduled Jobs](/images/zementis/zementis-scheduled-jobs.png)

By design, the **Scheduled Processing** tab previews all scheduled jobs in a paginated manner, displaying 10 jobs per page. 

Click any link in the **NAME** column to view the configuration of that specific job. Click the delete icon of any job to remove the job.

#### Viewing the execution results of jobs

To view the execution results of any job, click on the history icon associated to that job in the **My Jobs** section of the **Scheduled Processing** tab.

![Job History](/images/zementis/zementis-job-execution-history.png)

By design, the **Execution Results** page previews all executions of the job in a paginated manner, displaying 10 executions per page.
 
For executions with status **Warning** or **Failure**, hover over the status to see the detailed reason behind the status. Click **Back** to see all scheduled jobs.

#### Viewing the inferences of a job execution

To view the inferences generated by any execution of a job, click on the details icon associated to that execution in the **Execution Results** page.

![Execution Inferences Continuous](/images/zementis/zementis-execution-inferences-continuous.png)
![Execution Inferences Categorical](/images/zementis/zementis-execution-inferences-categorical.png)

The **Inferences** window shows two different types of charts, a histogram plotting all the continuous outputs of the model and a pie-chart plotting the model’s categorical outputs. 

The inferences are shown in a paginated manner, displaying 2000 inferences per page. For executions containing device groups, it will also allow you to shuffle between different devices which were part of that execution.