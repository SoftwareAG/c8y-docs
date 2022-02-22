---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} DataHub provides functionality to configure, manage, and execute offloading pipelines that extract and transform data from the Operational Store of {{< product-c8y-iot >}} and offload it to a data lake.

TODO: TOC

### Basic functionality

On the **Offloading** page you do the offloading management and monitoring tasks:

* Selecting a {{< product-c8y-iot >}} collection to offload
* Defining and validating an offloading configuration
* Editing, copying, or deleting an offloading configuration
* Importing/exporting offloading configurations
* Scheduling or manually triggering offloading executions
* Viewing the history of offloading executions

<img src="/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">

In the action bar you have a search control to search for all offloading configurations whose task name, description, filter predicate, additional columns, or UUID contain the search string. You can use the **Active**/**Inactive** filter controls to show/hide corresponding configurations. The action bar comprises also controls for adding a collection for offloading, reloading the list of configurations and their status, and importing/exporting configurations. Below the action bar you will find the current set of configurations.

#### Overview of offloading pipelines

In the main panel of the **Offloading** page, you will find all pipelines as well as their current status.

Each pipeline is shown as a card. A card has controls for managing the offloading process. Besides the description you will find the schedule with which this pipeline will be executed once it is started. In addition to that you will find for active pipelines the time of their last execution and the planned next execution. When expanding **Additional information**, the additional columns, the filter predicate, and the UUID of the configuration are shown. It also provides a link, which navigates in the Dremio UI to the target table of the pipeline so that you can directly examine the contents of the table. The link is only shown if the pipeline has been executed at least once.  