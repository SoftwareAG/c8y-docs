---
weight: 20
title: History per offloading job
layout: redirect
---

<a id="history-per-offloading-job"></a>

If you want to examine the execution history for a particular job, select **Offloading** in the navigation bar and browse to the offloading task you are interested in.

Click **Show history** at the top of the offloading form to show the history of offloading executions.


The table shows the execution history with each execution consisting of the following details:

| Column name | Description
| ---         | --- |
| Status | The status of the execution, which is either running, succeeded, or failed.
| Job Name | The name of the pipeline.
| \# Records | The number of records which have been offloaded during this execution.
| Execution Time | The point in time the execution has been started.
| Runtime (s) | The runtime of the execution in seconds.
| Next Execution Time | The point in time for which the next execution is scheduled.

The system is configured to keep a limited history of the last job executions. 

Click **Refresh history** to refresh the status being shown.

You can filter the entries by their status by using the **Filter by job status** control.

