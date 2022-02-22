---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} DataHub provides functionality to configure, manage, and execute offloading pipelines that extract and transform data from the Operational Store of {{< product-c8y-iot >}} and offload it to a data lake.

| Section | Content |
| -----   | -----   |
| [Configuring offloading jobs](/datahub/configuring-offloading-jobs) | Configure pipelines for offloading data into a data lake |
| [Offloading the base collections](/datahub/offloading-base-collections) | Examine the result schemas for offloaded {{< product-c8y-iot >}} base collections |
| [Managing offloading jobs](/datahub/managing-offloading-jobs) | Schedule and manage offloading pipelines |
| [Monitoring offloading jobs](/datahub/monitoring-offloading-jobs) | Monitor the results of offloading jobs |
| [Monitoring compaction jobs](/datahub/monitoring-compaction-jobs) | Monitor the results of compaction jobs |
| [Querying offloaded Cumulocity IoT data](/datahub/querying-offloaded) | Query offloaded Cumulocity IoT data in follow-up applications |
| [Refining offloaded Cumulocity IoT data](/datahub/integrating-datahub-with-sag-products) | Use Dremio to refine offloaded Cumulocity IoT data |
| [{{< product-c8y-iot >}} DataHub best practices](/datahub/datahub-best-practices) | Learn more about best practices when working with {{< product-c8y-iot >}} DataHub |

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

In the action bar you have a search control to search for all offloading configurations whose task name, description, filter predicate, additional columns, or UUID contain the search string. You can use the **Active**/**Inactive** filter controls to show/hide corresponding configurations. The configurations can be either shown as cards or in a list. 

The action bar comprises also controls for adding a collection for offloading, reloading the list of configurations and their status, and importing/exporting configurations. Below the action bar you will find the current set of configurations.

#### Card view of offloading configurations

Each pipeline is shown as a card. A card has controls for managing the offloading process. Besides the description you will find the schedule with which this pipeline will be executed once it is started. In addition to that you will find for active pipelines the time of their last execution and the planned next execution. When expanding **Additional information**, the additional columns, the filter predicate, and the UUID of the configuration are shown. It also provides a link that navigates in the Dremio UI to the target table of the pipeline so that you can directly examine the contents of the table. The link is only shown if the pipeline has been executed at least once.

#### List view of offloading configurations

Each pipeline is shown as list entry. An entry comprises job name, target table name, time and status of last execution. An entry has also controls for managing the offloading process. To see all details of an offloading configuration as provided in the card view, select *Details* in the context menu of the list entry. The list view also allows you to sort the entries by a column.