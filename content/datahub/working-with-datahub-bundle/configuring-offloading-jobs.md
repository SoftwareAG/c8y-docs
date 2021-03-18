---
weight: 10
title: Configuring offloading jobs
layout: redirect
---

Cumulocity IoT DataHub provides functionality to configure, manage, and execute offloading pipelines that extract and transform data from the Operational Store of Cumulocity IoT and offload it to a data lake.

### Basic functionality

On the **Offloading** page you do the offloading management and monitoring tasks:

* Selecting a Cumulocity IoT collection to offload
* Defining and validating an offloading configuration
* Saving, copying, or deleting an offloading configuration
* Importing/exporting offloading configurations
* Scheduling or manually triggering offloading executions
* Viewing the history of offloading executions

<img src="/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">
TODO: update pic

In the action bar you have a filter control to search for all offloading configurations whose task name, description, filter predicate, additional columns, or UUID contain the search string. You can use the **Active**/**Inactive** filter controls to show/hide corresponding configurations. The action bar comprises also controls for adding a collection for offloading, reloading the list of configurations and their status, and importing/exporting configurations. Below the action bar you will find the current set of configurations.

The following steps describe how to set up and start an offloading pipeline.

#### Defining an offloading configuration

To define an offloading configuration, click **Offload collection** to start a wizard which guides you through the main steps:

* Select collection
* Configure target table
* Set additional result columns
* Set filter predicate
* Set task details
* Finish

The wizard prepopulates reasonable settings for the different steps. You can modify those settings according to your needs.

Additional help icons provide more details on specific configuration settings.

##### Select collection

In the dropdown box select one of the Cumulocity IoT base collections, which are:

* alarms
* events
* inventory
* measurements

> **Info:** You can define multiple offloading pipelines for each Cumulocity IoT collection, except for the case of a TrendMiner offloading configuration, which must be singleton. For example, you can filter the alarms collection by different criteria with each one resulting in a separate pipeline.

Later in this section you will find a summary of the default attributes being offloaded per base collection. 

##### Configure target table

Once you have selected a collection for offloading, you have to specify the target table in the data lake. The **Target table name** denotes the folder name in the data lake. In this folder the offloaded data is stored. In Dremio a table is created with the same name, pointing to this data lake folder. This table is used when querying the corresponding data lake folder and thus the offloaded data. The target table name must follow these syntax rules:

* It needs to start with an alphanumeric character (letters and numbers).
* It may contain alphanumeric characters, underscores (_) and dashes (-).
* Each underscore or dash must be preceded by an alphanumeric character.
* The name must be at least two characters long.

Each pipeline must create its own so-called target table in the data lake, i.e., you must choose distinct target table names for each offloading configuration.

For the case of the **alarms**, **events**, **inventory** collection, you only need to specify the task name in this step.

For the case of the **measurements** collection, additional settings are required. The **target table layout** refers to the way the measurements are stored in the table. Measurements in the base collection may have different types, e.g., the collection may contain temperature, humidity, and pressure measurements. Depending on your layout choice, measurements are stored differently in the target table.

The layout **One table for one measurement type (Default)** will create a table containing only measurements of one specific type; measurements of other types are not included. When selecting this layout, you have to additionally specify the **measurement type**, to which the offloaded measurements are confined. DataHub automatically inspects a subset of the data and identifies measurement types. In the measurement type drop-down box, these auto-detected types are listed. In case a specific type you are looking for has not been detected, you can manually enter it in this box as well.     

The layout **All measurement types in one table (TrendMiner)** will create a table containing measurements of all types. To distinguish the measurements, the table has a column listing for each measurement its corresponding type. The specific table schema for this layout is listed later in this section. This layout is only for use-cases where you want to offload the data into the data lake, so that TrendMiner can consume the data for its self-service analytics. When this layout is selected, the target table name is set to a fixed, non-editable name, which TrendMiner expects for its data import. To learn more about the interaction between TrendMiner and DataHub, see section TODO: XYZ.

<img src="/images/datahub-guide/datahub-define-an-offloading-task.png" alt="Define an offloading task"  style="max-width: 100%">
TODO: update pic

##### Set additional result columns

Optionally you can define additional result columns, except for the TrendMiner case, which does not support this option. For each base collection, the associated default set of data fields is extracted. If you have added additional top-level fields while feeding data into Cumulocity IoT and you want to access them in your DataHub queries, then you can include them as additional result columns. In the **Additional result columns** field, you can provide a comma-separated list of additional columns or expressions you want to include. For example, if you feed in measurements with the additional fields `myCustomField1` and `myCustomField2`, you just need to enter "myCustomField1, myCustomField2" (without the quotes) into the input field to add both fields to the offloading configuration. If you only want to offload `myCustomField2`, just add "myCustomField2". It is also possible to apply SQL functions on those fields, e.g. `BTRIM(myCustomField1, '~')` to trim leading and trailing '~' from the text in field `myCustomField1`.

If you want to derive additional columns from nested content, you can specify the nested fields in the input field as well using the prefix `src.` and the path to the nested field. For example, if you have a top-level field `someField` with a nested field `someSubField`, add "src.someField.someSubField" as additional column. In the same way you can access nested arrays. If you have a top-level field `someField` with a nested array field `someArraySubField`, add "src.someField.someArraySubField[0]" as additional column to access the first array entry.

When defining additional columns, you can click the **Validate** button to validate them. If the validation fails, you will get an error description. For example, if you specify a non-existing *UnknownColumn* as an additional result column, you get an error message like *Column 'UnknownColumn' not found in any table*. You should fix those errors as otherwise the offloading execution will fail. If the underlying collection is empty and no schema information is available, the validation step cannot be executed due to lack of data.

##### Set filter predicate

Optionally you can define an additional filter predicate. Per default all entries in the base collection are offloaded to the data lake; you can use the predicate to filter out entries you do not want to persist in the data lake. For example, you can filter out invalid values or outliers. In the **Additional filter predicate** field, you can specify such a filter in SQL syntax, e.g., for the alarms collection the filter might be `status='ACTIVE' AND severity='WARNING'`. 

In the filter predicate you can query all standard attributes of the base collection as well as the custom fields. For querying the attribute **id**, you have to use **_id**. For querying the time attributes, see also [Working with DataHub > DataHub best practices](/datahub/working-with-datahub/#datahub-best-practices) for example snippets for widely-used temporal filter predicates.

When defining an additional filter predicate, you can click the **Validate** button to validate your predicate. If the validation fails, you will get an error description. For example, if you want to apply the trim function to a numeric value *TRIM(numeric_value)*, you get an error message that the trim function cannot be applied in that case. You should fix those errors as otherwise the offloading execution will fail. If the underlying collection is empty and no schema information is available, the validation step cannot be executed.

##### Configure task

The task configuration step includes the **Offloading task name** and the **Description**. The **Offloading task name** is an identifier for the offloading pipeline. It has to have at minimum one non-whitespace character. Even though the task name does not have to be unique, it is advisable to use a unique identifier.

In the **Description** field, you can add a description for this offloading pipeline. The description is optional, but it is recommended to use it, as it provides additional information about the pipeline and its purpose.

##### Finish configuration

The final step provides a summary of your settings as well as a result preview. The summary includes the settings from the previous steps as well as the internal UUID of this configuration. With the UUID you can distinguish configurations having the same task name, e.g., when browsing the audit log or the offloading status. In the summary, you also get the schedule with which the offloading pipeline will be executed once it is started, e.g., `every hour at minute 6`. The schedule cannot be modified. With the toggle at the end of the summary you choose whether the periodic offloading execution should be started upon save or not.  

In the offloading preview you can inspect how the actual data that will be offloaded looks like. For that purpose, the offloading is executed, returning a sample of the resulting data. The header row of the sample data incorporates the column name as well as the column type. Note that no data is permanently persisted to the data lake when running the preview.

Finally, click **Save** to save the offloading pipeline. Otherwise click **Cancel** to cancel the pipeline creation. You can also navigate back to adapt previous settings.

<img src="/images/datahub-guide/datahub-validate-an-offloading-configuration.png" alt="Validate an offloading configuration"  style="max-width: 100%">

TODO: update pic

#### Overview of offloading pipelines

In the main panel of the **Offloading** page, you will find all defined pipelines as well as their current status.

Each pipeline is shown as a card. A card has controls for managing the offloading process. Besides the description you will find the schedule with which this pipeline will be executed once it is started. In addition to that you will find for active pipelines the time of their last execution and the planned next execution. When expanding **Additional information**, the additional columns, the filter predicate, and the UUID of the configuration are shown.

#### Scheduling an offloading job

Once you have defined an offloading configuration and saved it, you can start the offloading pipeline.

##### Starting periodic offloading

Click **Active** in an offloading card to start the periodic execution of the offloading pipeline, if it was not already activated when configuring the pipeline. The scheduler component of DataHub will then periodically trigger the pipeline.

The initial offload denotes the first execution of an offloading pipeline. While subsequent executions only offload data increments, the initial offload moves all data from the Operational Store of Cumulocity IoT to the data lake. Thus, the initial offload may need to deal with vast amounts of data. For that reason, the initial offload does not process one big data set, but instead partitions the data into batches and processes the batches. If the initial offload fails, e.g. due to a data lake outage, the next offload checks which batches were already completed and continues with those not yet completed.

If the same pipeline has already been started and stopped in the past, a new start of the pipeline opens a dialog asking you to flush the existing data or append the data to the existing data. The latter option offloads only data that has been added after the last execution. The first option flushes the data lake. Thus, the next execution will offload the complete collection. This option should be used with caution.

Before restarting the periodic offloading, you may have changed the result schema by adding or removing columns (via adding or removing additional result columns). When you restart the pipeline, existing data in the data lake is not modified, but the new data being offloaded incorporates the new schema. When querying such a data set comprising different schemas, the system computes a "merged" schema and (virtually) fills it up with null values where fields have not yet been provided. This usually works without problems if additional attributes are included or removed from the offloading configuration. However, schema merging might fail or lead to unexpected behavior in certain cases. One example is if you change data types, e.g., if the old configuration contained `myCustomField1` as a string and you change it to a number via `CAST(myCustomField1 AS Integer) AS myCustomField1`. Therefore, you should take care that the data you offload is consistent.

A previous offloading pipeline may have already written into the same target table, i.e., the data is stored in the same folder on the data lake. In that case, when starting the new offloading pipeline, you are asked whether you want to flush the existing data or append the data to the existing data. You should only append the data if old and new data share the same schema. Otherwise, you should use a new target table or flush the existing table if its old contents are not needed anymore. Again, you should be careful when flushing a table as the data might be not be recoverable.

##### Scheduling settings

The scheduler is configured to run the offloading pipeline once an hour. The precise minute of the hour at which the offloading starts is shown in the pipeline configuration. This minute is assigned by the system to balance the load on the Operational Store of Cumulocity IoT, i.e., to avoid that all offloading jobs from different tenants run at the same time. The schedule settings cannot be modified.

##### Stopping periodic offloading

Click **Active** in an offloading card to stop the periodic offloading. Then the scheduler stops scheduling new jobs; active jobs will complete.

##### Viewing the execution status

At the bottom of each pipeline card, the execution status is shown:

* **Last execution** is empty if the offloading has not been executed yet.
* **Last execution** shows the execution time and whether the execution was successful or not, indicated by a success or failure icon right next to the time. An additional icon on the left shows whether the execution was scheduled, indicated by a calendar icon, or manually triggered, indicated by a spot icon.
* **Next execution** shows the point in time for which the next execution is planned. It is only shown if the previous execution was scheduled.

#### Managing an offloading pipeline

In the context menu of each configuration pipeline, you will find actions for managing and monitoring the configuration.

<img src="/images/datahub-guide/datahub-offloading-context-menu.png" alt="Context menu of an offloading configuration"  style="max-width: 100%">

##### Editing/showing an offloading pipeline

Click **Edit** to edit the current settings. Only inactive pipelines can be edited. Note that you cannot change the Cumulocity IoT base collection selected for this pipeline. For the **measurements** collection, the target table layout cannot be changed as well. Also note that changes to additional filter predicates, and additional result columns are not applied to already exported data, i.e., a change to the offloading pipeline only affects data to be exported in the future.

For active pipelines, click **Show** to browse through the configuration. You cannot edit the settings.

##### Copying an offloading pipeline

Click **Copy** to copy the current configuration. The new configuration is an identical copy of the selected configuration except for the task name and the target table, both of which will have a unique suffix appended. You can change the settings according to your needs.

A TrendMiner offloading configuration cannot be copied, as only one TrendMiner configuration is allowed. 

##### Deleting an offloading pipeline

Click **Delete** to delete a configuration. Only inactive pipelines can be deleted. Data in the data lake which has already been exported by this offloading pipeline is not deleted. To delete the actual data in your data lake, you have to use the tooling offered by the data lake provider, e.g. AWS S3 Console or Azure Storage Explorer.

##### Triggering a manual offloading job

If the periodic offloading is enabled, you can also manually trigger an offloading job between two scheduled executions. For example, you might not want to wait for the next scheduled execution to offload recent data into the data lake. Click **Offload now** to trigger a manual offloading. As for periodic offloading, a manual offloading execution also processes only incremental data that has been added since the last offloading execution (independent of whether this last execution was triggered manually or by the scheduler).

However, it is recommended to rely on the periodic offloading instead of triggering it manually.

##### Monitoring an offloading pipeline

Click **Show offloading history** to examine the execution history of a pipeline. See section [Monitoring offloading jobs](/datahub/working-with-datahub/#monitoring-offloading-jobs) for more details.

#### Importing/exporting offloading configurations

The import/export functionality allows you to copy offloading configurations from one DataHub instance to another one. Import/export solely includes the configuration of a pipeline; it includes neither the runtime status of a pipeline nor already exported data.

##### Export of offloading configurations

The action bar provides **Export**, which exports all offloading configurations. The button is disabled if no offloading configurations are defined. If you click the **Export** button, all offloading configurations are exported into a file. The file is located in the local download folder used by your browser.

>**Warning:** You must not modify the contents of the export file as this might corrupt the import step.

##### Import of offloading configurations

The action bar provides the **Import** button, which imports offloading configurations from a file with previously exported configurations.

Click **Import** to open the import dialog. Either drop the file in the import canvas or click into the canvas to browse your computer to select the import file. Once the file is selected, a table with all configurations in the file is shown. For each entry, the table lists the task name, the description, and the internal ID of the original configuration. The **IMPORT** checkbox defines whether the configuration is imported or not. Duplicate entries cannot be imported and therefore the checkbox is not shown. An entry to import is a duplicate if an already existing configuration has the same target table or the same internal ID.

To import the selected configurations, click **Import**. Click **Cancel** to cancel the import process.

To change the import file, click the delete icon next to the file name and select a new file to import the configurations from.

### Offloading the base collections

The following tables summarize the resulting schemas for each of the Cumulocity IoT standard collections. These schemas additionally include virtual columns `dir0`, ..., `dir3`, which are used for internal purposes. The columns are generated during the extraction process, but neither do they have corresponding data in the Operational Store of Cumulocity IoT, nor are they persisted in the data lake. You must not use `dir0`, ..., `dir3` as additional columns or you must rename them accordingly in your offloading configuration.

#### Offloading the alarms collection

The alarm collection keeps track of alarms which have been raised. During offloading, the data of the alarm collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR |
| count | INTEGER |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| time | TIMESTAMP |
| timeOffset | INTEGER |
| timeWithOffset | TIMESTAMP |
| lastUpdated | TIMESTAMP |
| lastUpdatedOffset | INTEGER |
| lastUpdatedWithOffset | TIMESTAMP |
| year | VARCHAR |
| month | VARCHAR |
| day | VARCHAR |
| severity | VARCHAR |
| history | OTHER |
| source | VARCHAR |
| status | VARCHAR |
| text | VARCHAR |

> **Info:** The column `firstOccurrenceTime` is not included in the default schema. If you want to include it in the offloading, it must be added manually.

The alarms collection keeps track of alarms. An alarm may change its status over time. The alarms collection also supports updates to incorporate these changes. For that reason, an offloading pipeline for the alarms collection encompasses additional steps. The first step is to offload those entries of the alarms collection that were added or updated since the last offload. They are offloaded with the above mentioned standard schema into the target table of the data lake. As a second step, two views over the target table are defined in the tenant's space in Dremio (with alarms used as the target table name in the following examples):

* alarms_all: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of an alarm is ACTIVE. Then it changes its status from ACTIVE to INACTIVE and afterwards back to ACTIVE. When the next offloading is executed, it will persist the latest status ACTIVE, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
* alarms_latest: a view with the latest status of all alarms, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity IoT Data](/datahub/working-with-datahub/#refining-offloaded).

#### Offloading the events collection

The events collection manages the events. During offloading, the data of the events collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
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
| year | VARCHAR |
| month | VARCHAR |
| day | VARCHAR |
| source | VARCHAR |
| text | VARCHAR |
| type | VARCHAR |

Events, just like alarms, are mutable, i.e. they can be changed after their creation. Thus, the same logic as for alarms applies. 

The following two views exist:
* events_all: Contains all states (that were captured by DataHub's period offloading) of all events 
* events_latest: Contains only the latest state of all events without prior states
  
#### Offloading the inventory collection

The inventory collection keeps track of managed objects. During offloading, the data of the inventory collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| lastUpdated | TIMESTAMP |
| lastUpdatedOffset | INTEGER |
| lastUpdatedWithOffset | TIMESTAMP |
| year | VARCHAR |
| month | VARCHAR |
| day | VARCHAR |
| name | VARCHAR |
| owner | VARCHAR |
| type | VARCHAR |
| c8y_isdevicegroup | BOOLEAN |
| c8y_isdevice | BOOLEAN |
| childassets | OTHER |
| childdevices | OTHER |

The inventory collection keeps track of managed objects. Note that DataHub automatically filters out internal objects of the Cumulocity IoT platform. These internal objects are also not returned when using the Cumulocity IoT REST API. A managed object may change its state over time. The inventory collection also supports updates to incorporate these changes. For that reason, an offloading pipeline for the inventory encompasses additional steps. The first step is to offload the entries of the inventory collection that were added or updated since the last offload. They are offloaded with the above mentioned standard schema into the target table of the data lake. As a second step, two views over the target table are defined in Dremio (with inventory used as the target table name in the following examples):

* inventory_all: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of a device is ACTIVE. Then it changes its state from ACTIVE to INACTIVE and afterwards to ERROR. When the next offloading is executed, it will persist the status ERROR, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
* inventory_latest: a view with the latest status of all managed objects, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity IoT Data](/datahub/working-with-datahub/#refining-offloaded).

#### Offloading the measurements collection

The measurements collection stores device measurements. Offloading the measurements collection differs from the other collections as you have to explicitly select a target table layout, which is either having one table for one type or for the TrendMiner case one table with measurements of all types. 

##### Offloading measurements with the default target table layout

When using the default layout, you have to select a measurement type, which ensures that your offloaded data is of the same type. During offloading, the data of the measurements collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type |
| -----       | -----       |
| id | VARCHAR |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| time | TIMESTAMP |
| timeOffset | INTEGER |
| timeWithOffset | TIMESTAMP |
| year | VARCHAR |
| month | VARCHAR |
| day | VARCHAR |
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

###### Example mapping
````json
{
    ...
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

##### Offloading measurements with the TrendMiner target table layout

When using the TrendMiner layout, all measurements are offloaded with their correspoding type being stored in  column **type**. The column **unit** defines the unit, while the column **value** defines the value of the measurement. During offloading, the data of the measurements collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type |
| -----       | -----       |
| _id | VARCHAR |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| time | TIMESTAMP |
| timeOffset | INTEGER |
| timeWithOffset | TIMESTAMP |
| year | VARCHAR |
| month | VARCHAR |
| day | VARCHAR |
| source | VARCHAR |
| type | VARCHAR |
| tagname | VARCHAR |
| value | VARCHAR |
| unit | VARCHAR |

###### Example mapping

TODO: adapt the document

````json
{
    ...
     "type": "temperature",
     "unit": "C",
     "value": "2.0791169082"
     ...
}
...
{
    ...
     "type": "pressure",
     "unit": "C",
     "value": "2.0791169082"
     ...
}
````

is represented as

| | | |
| ---- | ----- | ----- |
| type | unit | value |
| temperature | C | 2.0791169082 |
| pressure | kPa | 98.0665 |

For more details on the TrendMiner offloading see also Section TODO: XYZ.