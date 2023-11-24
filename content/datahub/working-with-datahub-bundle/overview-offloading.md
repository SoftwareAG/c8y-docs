---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} DataHub provides functionality to configure, manage, and execute offloading pipelines that extract and transform data from the Operational Store of {{< product-c8y-iot >}} and offload it to a data lake.

You need configuration or administration permissions to work with offloading pipelines. See the section [Setting up {{< product-c8y-iot >}} DataHub > Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions) for details.

| Section | Content |
| -----   | -----   |
| [Configuring offloading jobs](/datahub/working-with-datahub/#configuring-offloading-jobs) | Configure pipelines for offloading data into a data lake |
| [Offloading {{< product-c8y-iot >}} base collections](/datahub/working-with-datahub/#offloading-base-collections) | Examine the result schemas for offloaded {{< product-c8y-iot >}} base collections |
| [Managing offloading jobs](/datahub/working-with-datahub/#managing-offloading-jobs) | Schedule and manage offloading pipelines |
| [Monitoring offloading jobs](/datahub/working-with-datahub/#monitoring-offloading-jobs) | Monitor the results of offloading jobs |
| [Monitoring compaction jobs](/datahub/working-with-datahub/#monitoring-compaction-jobs) | Monitor the results of compaction jobs |
| [Querying offloaded Cumulocity IoT data](/datahub/working-with-datahub/#querying-offloaded) | Query offloaded {{< product-c8y-iot >}} data in follow-up applications |
| [Refining offloaded Cumulocity IoT data](/datahub/working-with-datahub/#refining-offloaded) | Use Dremio to refine offloaded {{< product-c8y-iot >}} data |
| [{{< product-c8y-iot >}} DataHub best practices](/datahub/working-with-datahub/#datahub-best-practices) | Learn more about best practices when working with {{< product-c8y-iot >}} DataHub |

### Basic functionality

On the **Offloading** page you do the offloading management and monitoring tasks:

* Selecting a {{< product-c8y-iot >}} base collection to offload
* Defining and validating an offloading configuration
* Editing, copying, or deleting an offloading configuration
* Importing/exporting offloading configurations
* Scheduling or manually triggering offloading executions
* Viewing the history of offloading executions

<img src="/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">

### Offloading overview

In the main panel of the **Offloading** page, you will find all pipelines as well as their current status.

In the action bar you have a search field to search for all offloading configurations whose task name, description, filter predicate, additional columns, or UUID contain the search string. You can use the **Active**/**Inactive** filter to show/hide configurations being active or inactive respectively. The action bar also provides buttons for adding an offloading configuration, reloading the list of configurations and their status, and importing/exporting configurations.

Below the action bar you find the current list of configurations. 

#### Offloading list

Each offloading configuration provides the following information:

**Active**

The toggle shows the current job state and can be used to activate or deactivate an offloading job.

**Job name**

The name of the job refers to the task name as defined in the configuration process. The sort control allows for sorting by job name.

**Target table name**

The target table name refers to the target table in Dremio, with which the data offloaded by this offloading pipeline can be queried. The sort control allows for sorting by target table name.

**Offloading status**

The offloading status is empty if the offloading has not been executed yet. If the offloading has been executed, the status of the most recent run is shown. This includes the execution time and whether the execution was successful or not, indicated by a success or failure icon. An additional icon shows whether the execution was scheduled, indicated by a calendar icon, or manually triggered, indicated by a user icon. In case of a successful run, the number of offloaded records and the runtime is shown as well. The sort control allows for sorting by successful/failed jobs. The filter control allows for filtering by execution status.

**Compaction status**

The compaction status is empty if the offloading has not been executed yet. If the compaction has been executed, the status of the most recent run is shown. This includes the execution time and whether the execution was successful or not, indicated by a success or failure icon. In case of a successful run, the runtime is shown as well. The sort control allows for sorting by successful/failed jobs. The filter control allows for filtering by execution status. The compaction status is only available for users with administration permissions.

**Additional information**

When expanding a configuration, the job schedule, the additional columns, and the filter predicate are shown as well as additional information. This includes a link that navigates in the Dremio UI to the target table of the pipeline so that you can directly examine the contents of the table. The link is only shown if the pipeline has been executed at least once.

**Context menu**

In the context menu of a configuration you find controls for managing the offloading process as described in more detail in the next sections.

