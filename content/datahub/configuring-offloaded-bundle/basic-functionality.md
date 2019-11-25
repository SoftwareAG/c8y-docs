---
weight: 10
title: Basic functionality
layout: redirect
---

On the **Offloading** page you do the offloading management and monitoring tasks:

* Selecting a Cumulocity collection to offload
* Defining and validating an offloading configuration
* Saving, copying, or deleting an offloading configuration
* Scheduling offloading executions

<img src="/guides/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">

On this page, you find in the top section controls for adding a collection for offloading or filtering the list of configurations. Below this section you will find the list of current configurations.

The following steps describe how to set up and start an offloading pipeline.

### Defining an offloading configuration

To define an offloading configuration, click **Add collection** to select the Cumulocity collection you want to offload to the data lake. In the dropdown box select one of the Cumulocity base collections, which are:

* alarms
* events
* inventory
* measurements

Click **Confirm** to continue with the selected collection or **Cancel** to cancel the creation of the offloading pipeline.

> **Info:** You can define multiple offloading pipelines per Cumulocity collection. For example, you can filter the alarms collection by different criteria with each one resulting in a separate pipeline. Be aware however, that each pipeline must create its own table in the data lake, i.e. you must choose distinct table names for each offloading configuration.

Once you have selected a collection for offloading, a new configuration entry appears in the list of configurations. The entry has default settings, which you can modify according to your needs. Note that the list of configurations is sorted by the offloading task names.

<img src="/guides/images/datahub-guide/datahub-define-an-offloading-task.png" alt="Define an offloading task"  style="max-width: 100%">

#### Basic settings

The **Offloading task name** is an identifier for the offloading pipeline. Even though it does not have to be unique, it is advisable to use a unique identifier for this task name.

The **Target table** denotes the name of the so-called source table that is created in Dremio. This table points to the corresponding folder in the data lake. This is the table used when querying the corresponding data lake folder.

<a id="basic-functionality-additional-settings"></a>

#### Additional settings

In addition to the basic settings you can specify additional ones. In the configuration form, select the checkbox **Show details** at the top right. Then the form is expanded and provides the additional settings. If you want to collapse the form, click again the checkbox to clear it.

In the **Job description** field, you can add a description for this offloading pipeline.

In the **Additional result columns** field, you can provide a comma-separated list of additional columns or expressions you want to include. For each collection, the associated default set of data fields is extracted, which is available for each instance of such a base collection. If you have added additional top-level fields while feeding data into Cumulocity and you want to access them in your analytical queries, then you can specify them in this input field. For example, if you feed in measurements with the additional fields `myCustomField1` and `myCustomField2`, you just need to enter "myCustomField1, myCustomField2" (without the quotes) into the input field. It is also possible to apply SQL functions on those fields, e.g. `BTRIM(myCustomField1, '~')` to trim leading and trailing '~' from the text in field `myCustomField1`.

In the **Additional filter predicate** field, you can specify an additional filter for filtering the data before it is inserted into the data lake. Per default all entries in the collection are inserted, so you can use the predicate to filter out entries you do not want to persist in the data lake. For example, you can filter out outliers or invalid values. The filter predicate is specified in SQL syntax, e.g. `status='ACTIVE' AND source > 300`. 

### Validating and previewing an offloading configuration

When working with additional result columns and filter predicates, you may want to inspect what the actual data that will be offloaded looks like. For that purpose, click the button **Validate and preview**, which is at the bottom of the configuration form. First, the configuration is validated. If the validation fails, you will get an error description. If validation is successful, a sample of the resulting data is returned. Note that no data is written to the data lake in this preview step. In addition to the query preview, you also get the schedule with which the offloading pipeline will be executed once it is started.

<img src="/guides/images/datahub-guide/datahub-validate-an-offloading-configuration.png" alt="Validate an offloading configuration"  style="max-width: 100%">

### Managing an offloading configuration

At the bottom of each configuration form, you will find buttons for managing the configuration.

#### Saving a configuration

Click **Save** to save the current settings. Otherwise the configuration will be lost if you move to another page. During saving, you will be asked whether you want to validate. If you click **No**, the configuration will not be validated. If you click **Yes**, the configuration will be validated. If the configuration is invalid, you will find an error icon next to the task name, which gives you error details when clicking on it.

When the configuration has been saved successfully, you will find additional controls in the configuration form. At the top of the form there is a checkbox **Show history** which shows the history of offloading jobs. See the section [History per offloading job](/guides/datahub/monitoring-offloaded#history-per-offloading-job) for more details. At the bottom you will find two controls **Start periodic offloading** and **Offload now**, which are described in detail in [Scheduling an offloading job](#scheduling-an-offloading-job). Additionally, next to the task name the schedule is shown with which this pipeline will be executed once it is started, e.g., every hour at minute 6.

#### Copying a configuration

Click **Copy** to copy the current configuration. The new configuration is an identical copy of the selected configuration except for the task name and the target table, both of which will have the suffix "_copy" appended.

#### Deleting a configuration

Click **Delete** to delete a configuration. The data lake artifacts, which have been produced by this offloading pipeline so far, are not deleted.
You can only delete an offloading pipeline if the pipeline is not scheduled.

<a id="scheduling-an-offloading-job"></a>

### Scheduling an offloading job

Once you have defined an offloading configuration and saved it, you can start the offloading pipeline.

#### Starting periodic offloading

Click **Start offloading** to start the periodic execution of the offloading pipeline. The scheduler component of DataHub Console will then trigger periodically the configured offloading pipeline.

If the same pipeline has already been started and stopped in the past, a new start of the pipeline does not offload the complete collection, but only data that has been added after the last execution. 

Before restarting the periodic offloading, you may have changed the result schema by adding or removing columns. When you restart the pipeline, existing data in the data lake is not modified, but the new data being offloaded incorporates the new schema. When querying such a data set with different schemas, the system computes a "merged" schema and (virtually) fills up with null values where fields have not yet been provided. This usually works without problems if additional attributes are included or removed from the offloading configuration. However,  schema merging might fail or lead to unexpected behavior in certain cases. One example is if you change data types, e.g. if the old configuration contained `myCustomField1` as a string and you change that to `CAST(myCustomField AS Integer) AS myCustomField1`.

You may have had another offloading pipeline that has already written into the same target table, i.e., the data is stored in the same folder on the data lake. In that case, when starting the new offloading pipeline, you are asked whether you want to flush the existing data or append the data to the existing data. You should only append the data if they share the same schema.

#### Scheduling settings

The scheduler is configured to run the offloading pipeline once an hour. The precise minute of the hour at which the offloading starts is shown in the configuration form, right next to the task name. This minute is assigned by the system to balance the load on the Cumulocity's Operational Store, i.e. avoiding that all offloading jobs from different tenants run at the same time. The schedule settings cannot be modified.

#### Stopping periodic offloading

Click **Stop offloading** to stop the periodic offloading. Then the scheduler stops scheduling new executions; active executions will complete.

#### Triggering a manual offloading job

If the periodic offloading is enabled, you can also manually trigger an offloading job between two scheduled executions. For example, you might not want to wait for the next scheduled execution to offload recent data into the data lake. 

Click **Offload now** to trigger a manual offloading. As for periodic offloading, a manual offloading execution also processes only incremental data that has been added since the last offloading execution (independent of this last execution being triggered manually or by the scheduler).

The tables in the next sections summarize the resulting schemas for each of the standard collections. These schemas additionally include columns `dir0`, ..., `dir4`, which are used for internal purposes and must not be queried. The columns are generated during the extraction process, but neither do they have corresponding data in the Cumulocity database, nor are they persisted in the data lake. You must not use `dir0`, ..., `dir4` as additional columns or rename them accordingly in your offloading configuration.



