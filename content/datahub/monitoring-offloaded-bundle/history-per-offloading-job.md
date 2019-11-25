---
weight: 20
title: History per offloading job
layout: redirect
---

<a id="history-per-offloading-job"></a>

If you want to examine the execution history for a particular job, select **Offloading** in the navigation bar and select the offloading job you are interested in.

Click **Show offloading history** in the context menu of the offloading card to show the history of offloading executions.

The list shows the execution history with each execution consisting of the following details:

| Component | Description |
| ---         | --- |
| Status icon | The status of the execution, which is either running, error, or failed
| Execution type icon | The type of execution, which is either scheduled (calendar icon) or manual (spot icon)
| Job name | The name of the pipeline
| Execution time | The point in time the execution was started
| Runtime (s) | The runtime of the execution in seconds
| Next execution time | The point in time for which the next execution is scheduled
| \# Records | The number of records which have been offloaded during this execution, indicated as number in a blue circle

The system is configured to keep a limited history of the last job executions. 

You can filter the entries by their status by using the filter control at the top.

