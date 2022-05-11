---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} DataHub provides functionality to configure, manage, and execute offloading pipelines that extract and transform data from the Operational Store of {{< product-c8y-iot >}} and offload it to a data lake.

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

* Selecting a {{< product-c8y-iot >}} collection to offload
* Defining and validating an offloading configuration
* Editing, copying, or deleting an offloading configuration
* Importing/exporting offloading configurations
* Scheduling or manually triggering offloading executions
* Viewing the history of offloading executions

<img src="/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">

### Offloading overview

In the main panel of the **Offloading** page, you will find all pipelines as well as their current status.

In the action bar you have a search field to search for all offloading configurations whose task name, description, filter predicate, additional columns, or UUID contain the search string. You can use the **Active**/**Inactive** filter to show/hide corresponding configurations. The action bar also provides buttons for adding a collection for offloading, reloading the list of configurations and their status, and importing/exporting configurations.

Below the action bar you find the current list of configurations. Each configuration provides the task name, the schedule with which this pipeline will be executed once it is started, and the target table name. In addition to that you find for active pipelines the time and status of their last execution and the planned next execution. When expanding a configuration, the additional columns and the filter predicate are shown as well as additional information. This includes a link that navigates in the Dremio UI to the target table of the pipeline so that you can directly examine the contents of the table. The link is only shown if the pipeline has been executed at least once. In the context menu of the configuration you find controls for managing the offloading process.
