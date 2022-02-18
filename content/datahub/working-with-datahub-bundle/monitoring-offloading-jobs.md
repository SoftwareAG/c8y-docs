---
weight: 20
title: Monitoring offloading jobs
layout: redirect
---

Once you have configured and started your offloading pipelines, they regularly offload data to the data lake. {{< product-c8y-iot >}} DataHub provides insights into the execution status of the different pipelines so that you can investigate whether everything is running as expected.

You can either examine the corresponding latest execution for all configured pipelines or examine the execution history for a specific pipeline.

>**Info**: You need administration or management permissions to monitor the offloading jobs. See section [Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions) for details.

### Status of all offloading jobs

<a id="status-of-all-offloading-jobs"></a>

In the navigator, select **Status** and then **Offloading** to get an overview of the latest status of all pipelines. The list shows the corresponding last execution for all pipelines. Each execution consists of the following details:

| Component | Description |
| ---         | --- |
| Status icon | The status of the execution, which is either running, successful, or error
| Execution mode icon | The type of execution, which is either *scheduled* (calendar icon) or *manual* (spot icon)
| Job name | The name of the pipeline job
| Execution time | The point in time the execution was started
| Runtime (s) | The runtime of the execution in seconds
| Next execution time | The point in time for which the next execution is scheduled; for a manual execution it is empty
| \# Records | The number of records which have been offloaded during this execution, indicated as number in a blue circle

Click **Reload** to refresh the status being shown.

You can filter the entries by their task name or their status by using the filter controls in the action bar.

### History per offloading job

<a id="history-per-offloading-job"></a>

If you want to examine the execution history for a particular job, select **Offloading** in the navigation bar and select the offloading job you are interested in.

Click **Show offloading history** in the context menu of the offloading card to show the history of offloading executions.

The list shows the execution history, with each execution consisting of the following details:

| Component | Description |
| ---         | --- |
| Status icon | The status of the execution, which is either running, successful, or error
| Execution mode icon | The type of execution, which is either *scheduled* (calendar icon) or *manual* (spot icon)
| Job name | The name of the pipeline
| Execution time | The point in time the execution was started
| Runtime (s) | The runtime of the execution in seconds
| Next execution time | The point in time for which the next execution is scheduled, provided offloading is activated; for a manual execution it is empty
| \# Records | The number of records which have been offloaded during this execution, indicated as number in a blue circle

The system is configured to keep a limited history of the last job executions.

Click **Reload** to refresh the list.

You can filter the entries by their status by using the filter control at the top.

### Details of offloading job

<a id="details-offloading-job"></a>

For a given offloading job, you can examine additional details of its execution.

>**Info**: You need administration permissions to access the job details.

Select a job overview in the history per offloading job or in the status of all offloading jobs. In the corresponding list of jobs click on the job you are specifically interested in. A details view encompasses the following information:

**Execution schedule**

| Component | Description |
| ---         | --- |
| Runtime (s) | The runtime of the execution in seconds
| Execution mode | The mode of the execution, which is either *manual* or *scheduled*
| Execution time | The point in time the execution was started
| Scheduled execution time | The point in time for which the execution was scheduled
| Previous execution time | The point in time the previous execution was started; for a manual execution it is empty
| Next execution time | The point in time for which the next execution is scheduled, provided offloading is activated; for a manual execution it is empty

**Results**

| Component | Description |
| ---         | --- |
| Records | The number of records which have been offloaded during this execution

**Job details**

| Component | Description |
| ---         | --- |
| Job name | The name of the pipeline
| Job id | The internal ID of the job
| Job execution id | The Dremio ID of this execution
| Source collection | The name of the {{< product-c8y-iot >}} base collection
| Target table | The folder name in the data lake
| Target folder | The path to the target table in the data lake
| Last watermark | The last watermark which indicates the data in the {{< product-c8y-iot >}} collection that has already been processed

**Offloading results**

During offloading Dremio organizes the data in newly created files within the data lake, following a temporal folder hierarchy. For each of those files the following information is provided:

| Component | Description |
| ---         | --- |
| File size | The size of the file
| Fragment | The hierarchical ID of the fragment
| Partition | The partition with which the file is associated
| Path | The path to the file in the data lake
| Records | The number of records stored in the file
