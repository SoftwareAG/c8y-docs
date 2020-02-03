---
weight: 10
title: Configuring offloading jobs
layout: redirect
---

Cumulocity IoT DataHub provides functionality to configure, manage, and execute offloading pipelines that extract and transform data from Cumulocity Operational Store to a data lake.

### Basic functionality

On the **Offloading** page you do the offloading management and monitoring tasks:

* Selecting a Cumulocity collection to offload
* Defining and validating an offloading configuration
* Saving, copying, or deleting an offloading configuration
* Scheduling or manually triggering offloading executions
* Viewing the history of offloading executions

<img src="/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">

On this page, you find in the top menu bar controls for adding a collection for offloading or reloading the list of configurations. Below this section you will find the current set of configurations.

The following steps describe how to set up and start an offloading pipeline.

#### Defining an offloading configuration

To define an offloading configuration, click **Offload collection**. In the dropdown box select one of the Cumulocity base collections, which are:

* alarms
* events
* inventory
* measurements

In the case of the measurements base collection, you have to additionally specify the type of Cumulocity measurements you want to offload to the data lake.

Click **Confirm** to continue with the selected collection.

> **Info:** You can define multiple offloading pipelines for each Cumulocity collection. For example, you can filter the alarms collection by different criteria with each one resulting in a separate pipeline. Be aware that each pipeline must create its own table in the data lake, i.e., you must choose distinct table names for each offloading configuration.

Once you have selected a collection for offloading, you have to specify the details of this offloading pipeline. The pipeline has default configuration settings, which you can modify according to your needs.

<img src="/images/datahub-guide/datahub-define-an-offloading-task.png" alt="Define an offloading task"  style="max-width: 100%">

##### Pipeline settings

The **Offloading task name** is an identifier for the offloading pipeline. Even though it does not have to be unique, it is advisable to use a unique identifier for this task name.

<a id="basic-functionality-additional-settings"></a>
The **Target source name** denotes the folder name in the data lake. In Dremio a table is created with the same name, pointing to this data lake folder. This table is used when querying the corresponding data lake folder.

In the **Description** field, you can add a description for this offloading pipeline. The description is optional, but it is recommended to use it, as it provides additional information about the pipeline and its purpose.

In the **Additional result columns** field, you can provide a comma-separated list of additional columns or expressions you want to include. For each collection, the associated default set of data fields is extracted, which is available for each base collection. If you have added additional top-level fields while feeding data into Cumulocity and you want to access them in your analytical queries, then you can specify them in this input field. For example, if you feed in measurements with the additional fields `myCustomField1` and `myCustomField2`, you just need to enter "myCustomField1, myCustomField2" (without the quotes) into the input field to add both fields to the offloading configuration. If you only want to offload `myCustomField2`, just add "myCustomField2". It is also possible to apply SQL functions on those fields, e.g. `BTRIM(myCustomField1, '~')` to trim leading and trailing '~' from the text in field `myCustomField1`.

In the **Additional filter predicate** field, you can specify an additional filter for filtering the data before it is inserted into the data lake. Per default all entries in the collection are inserted; you can use the predicate to filter out entries you do not want to persist in the data lake. For example, you can filter out outliers or invalid values. The filter predicate is specified in SQL syntax, e.g., for the alarms collection the filter might be `status='ACTIVE' AND severity='WARNING'`. Filtering on custom fields is also possible, e.g. `myCustomField2 >= 2020` for a numeric field.

When working with additional result columns and filter predicates, you may want to inspect what the actual data that will be offloaded looks like. For that purpose, click the button **Check & preview**, which is at the bottom of the configuration form. First, the configuration is validated. If the validation fails, you will get an error description. If validation is successful, a sample of the resulting data is returned. Note that no data is permanently persisted to the data lake in this preview step. In addition to the query preview, you also get the schedule with which the offloading pipeline will be executed once it is started.

Once you have defined all pipeline settings, click **Save** to save the pipeline. Otherwise click **Cancel** to cancel the pipeline creation.

<img src="/images/datahub-guide/datahub-validate-an-offloading-configuration.png" alt="Validate an offloading configuration"  style="max-width: 100%">

#### Overview of offloading pipelines
In the main panel of the **Offloading** page, you will find all defined pipelines as well as their current status. Each pipeline is shown as a card. In the action bar you will find the **Reload** button, which reloads the set of pipelines as well as their current status. 

Each pipeline card has controls for managing the offloading process. Besides the description you have defined you will also find the schedule with which this pipeline will be executed once it is started, e.g., `every hour at minute 6`. In addition to that you will find for active pipelines the time of their last execution and the planned next execution.

#### Managing an offloading pipeline

In the context menu of each configuration pipeline, you will find actions for managing and monitoring the configuration.

<img src="/images/datahub-guide/datahub-offloading-context-menu.png" alt="Context menu of an offloading configuration"  style="max-width: 100%">

##### Editing an offloading pipeline

Click **Edit** to edit or view the current settings. Note that only inactive pipelines can be edited. Also note that you cannot change the Cumulocity base collection selected for this pipeline. Also note that changes to additional filter predicates, and additional result columns are not applied to already exported data, i.e. a change to the offloading pipeline only affects data to be exported in the future.

##### Copying an offloading pipeline

Click **Copy** to copy the current configuration. The new configuration is an identical copy of the selected configuration except for the task name and the target table, both of which will have a unique suffix appended. You can change these settings according to your needs.

##### Deleting an offloading pipeline

Click **Delete** to delete a configuration. You can only delete an offloading pipeline if it is not scheduled.
Data in the data lake which has already been exported by this offloading pipeline is not deleted. To delete the actual data in your data lake, please use the tooling offered by the data lake provider, e.g. AWS S3 Console or Azure Storage Explorer. 
##### Monitoring an offloading pipeline

Click **Show offloading history** to examine the execution history of a pipeline. See section [History per offloading job](/datahub/monitoring-offloaded#history-per-offloading-job) for more details.

<a id="scheduling-an-offloading-job"></a>

#### Scheduling an offloading job

Once you have defined an offloading configuration and saved it, you can start the offloading pipeline.

##### Starting periodic offloading

Click **Active** to start the periodic execution of the offloading pipeline. The scheduler component of DataHub will then periodically trigger the pipeline.

If the same pipeline has already been started and stopped in the past, a new start of the pipeline does not offload the complete collection, but only data that has been added after the last execution. 

Before restarting the periodic offloading, you may have changed the result schema by adding or removing columns (via adding or removing fields from the additional result columns input field). When you restart the pipeline, existing data in the data lake is not modified, but the new data being offloaded incorporates the new schema. When querying such a data set comprising different schemas, the system computes a "merged" schema and (virtually) fills it up with null values where fields have not yet been provided. This usually works without problems if additional attributes are included or removed from the offloading configuration. However, schema merging might fail or lead to unexpected behavior in certain cases. One example is if you change data types, e.g., if the old configuration contained `myCustomField1` as a string and you change it to a number via `CAST(myCustomField1 AS Integer) AS myCustomField1`.

You may have had another offloading pipeline that has already written into the same target table, i.e., the data is stored in the same folder on the data lake. In that case, when starting the new offloading pipeline, you are asked whether you want to flush the existing data or append the data to the existing data. You should only append the data if they share the same schema.

##### Scheduling settings

The scheduler is configured to run the offloading pipeline once an hour. The precise minute of the hour at which the offloading starts is shown in the pipeline configuration. This minute is assigned by the system to balance the load on Cumulocity's Operational Store, i.e., to avoid that all offloading jobs from different tenants run at the same time. The schedule settings cannot be modified.

##### Stopping periodic offloading

Click **Active** to stop the periodic offloading. Then the scheduler stops scheduling new jobs; active jobs will complete.

##### Triggering a manual offloading job

If the periodic offloading is enabled, you can also manually trigger an offloading job between two scheduled executions. For example, you might not want to wait for the next scheduled execution to offload recent data into the data lake. 

Click **Offload now** to trigger a manual offloading. As for periodic offloading, a manual offloading execution also processes only incremental data that has been added since the last offloading execution (independent of whether this last execution was triggered manually or by the scheduler).

##### Viewing the execution status

At the bottom of each pipeline card, the execution status is shown:

* **Last execution** is empty if the offloading has not been executed yet.
* **Last execution** shows the execution time and whether the execution was successful or not, indicated by a success or failure icon right next to the time. An additional icon on the left shows whether the execution was scheduled, indicated by a calendar icon, or manually triggered, indicated by a spot icon.
* **Next execution** shows the point in time for which the next execution is planned. It is only shown if the previous execution was scheduled.

The tables in the next sections summarize the resulting schemas for each of the Cumulocity standard collections. These schemas additionally include virtual columns `dir0`, ..., `dir4`, which are used for internal purposes. The columns are generated during the extraction process, but neither do they have corresponding data in the Cumulocity database, nor are they persisted in the data lake. You must not use `dir0`, ..., `dir4` as additional columns or you must rename them accordingly in your offloading configuration.

### Offloading the alarms collection

The alarm collection keeps track of alarms which have been raised. During offloading, the data of the alarm collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR
| count | INTEGER
| creationTime | TIMESTAMP
| creationTimeOffset | INTEGER
| creationTimeWithOffset | TIMESTAMP
| time | TIMESTAMP
| timeOffset | INTEGER
| timeWithOffset | TIMESTAMP
| lastUpdated | TIMESTAMP
| lastUpdatedOffset | INTEGER
| lastUpdatedWithOffset | TIMESTAMP
| severity | VARCHAR
| history | VARCHAR
| source | VARCHAR
| status | VARCHAR
| text | VARCHAR
| type | VARCHAR

The alarms collection keeps track of alarms. An alarm may change its state over time. The alarms collection also supports updates to incorporate these changes. For that reason, an offloading pipeline for the alarms collection encompasses additional steps. The first step is to offload those entries of the alarms collection that were added or updated since the last offload. They are offloaded with the above mentioned standard schema into the target table of the data lake. As a second step, two views over the target table are defined in the tenant's space in Dremio (with alarms used as the target table name in the following examples):

* alarms_all: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of an alarm is ACTIVE. Then it changes its state from ACTIVE to INACTIVE and afterwards back to ACTIVE. When the next offloading is executed, it will persist the latest status ACTIVE, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
* alarms_latest: a view with the latest status of all alarms, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity Data](/datahub/refining-offload/).

### Offloading the events collection

The events collection manages the events. During offloading, the data of the events collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR
| creationTime | TIMESTAMP
| creationTimeOffset | INTEGER
| creationTimeWithOffset | TIMESTAMP
| time | TIMESTAMP
| timeOffset | INTEGER
| timeWithOffset | TIMESTAMP
| source | VARCHAR
| text | VARCHAR
| type | VARCHAR

### Offloading the inventory collection

The inventory collection keeps track of managed objects. During offloading, the data of the inventory collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR
| creationTime | TIMESTAMP
| creationTimeOffset | INTEGER
| creationTimeWithOffset | TIMESTAMP
| lastUpdated | TIMESTAMP
| lastUpdatedOffset | INTEGER
| lastUpdatedWithOffset | TIMESTAMP
| name | VARCHAR
| owner | VARCHAR
| type | VARCHAR

The inventory collection keeps track of managed objects. Note that DataHub automatically filters out internal objects of the Cumulocity platform. These internal objects are also not returned when using the Cumulocity REST API. A managed object may change its state over time. The inventory collection also supports updates to incorporate these changes. For that reason, an offloading pipeline for the inventory encompasses additional steps. The first step is to offload the entries of the inventory collection that were added or updated since the last offload. They are offloaded with the above mentioned standard schema into the target table of the data lake. As a second step, two views over the target table are defined in Dremio (with inventory used as the target table name in the following examples):

* inventory_all: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of a device is ACTIVE. Then it changes its state from ACTIVE to INACTIVE and afterwards to ERROR. When the next offloading is executed, it will persist the status ERROR, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
* inventory_latest: a view with the latest status of all managed objects, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity Data](/datahub/refining-offload/).

### Offloading the measurements collection

The measurements collection stores device measurements. Offloading the measurements collection differs from the other collections as you have to explicitly select a measurement type, which ensures that your offloaded data is of the same type. Separating by type is a necessary preprocessing step, as without such a selection a target table for all types would have potentially a very broad schema and a lot of null values.

During offloading, the data of the measurements collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type |
| -----       | -----       |
| id | VARCHAR |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| time | TIMESTAMP |
| timeOffset | INTEGER |
| timeWithOffset | TIMESTAMP |
| lastUpdated | TIMESTAMP |
| lastUpdatedOffset | INTEGER |
| lastUpdatedWithOffset | TIMESTAMP |
| source | VARCHAR |
| type | VARCHAR |
| fragment.attribute1.name.value | Depends on data type, often FLOAT |
| fragment.attribute1.name.unit | String |
| ... |  |
| fragment.attributeN.name.value | Depends on data type, often FLOAT |
| fragment.attributeN.name.unit | String |
| myCustomAttribute1 | Depends on data type |
| ... |  |
| myCustomAttributeN | Depends on data type |

The entries in the measurements collection can have a different structure, depending on the types of data the corresponding device emits. While one sensor might emit temperature and humidity values, another sensor might emit pressure values. The flattened structure of these attributes is defined as `fragment_` followed by attribute name and associated type being defined as in the measurements collection. The concrete number of attributes depends on the measurement type, illustrated in the above table with `fragment_attribute1_name_value` to `fragment_attributeN_name_value`.

#### Example mapping
````json
{
    ....
     "c8y_Temperature": {
         "T": {
             "unit": "C",
             "value": 2.0791169082
         
     }
}
````

is represented as

| | |
| ---- | ----- |
| c8y_Temperature.T.unit | c8y_Temperature.T.value |
| C | 2.0791169082 | 

When defining the offloading configuration for the measurements collection, you have to specify the measurement type. The offloading pipeline only offloads data for the selected measurement type. Then the target table in the data lake consists of homogeneous data from the same type.

<img src="/images/datahub-guide/datahub-offloading-task-to-target-table.png" alt="Offloading task to target table"  style="max-width: 100%">