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
* Editing, copying, or deleting an offloading configuration
* Importing/exporting offloading configurations
* Scheduling or manually triggering offloading executions
* Viewing the history of offloading executions

<img src="/images/datahub-guide/datahub-configure-offloading-tasks.png" alt="Configuration of offloading tasks"  style="max-width: 100%">

In the action bar you have a search control to search for all offloading configurations whose task name, description, filter predicate, additional columns, or UUID contain the search string. You can use the **Active**/**Inactive** filter controls to show/hide corresponding configurations. The action bar comprises also controls for adding a collection for offloading, reloading the list of configurations and their status, and importing/exporting configurations. Below the action bar you will find the current set of configurations.

The following steps describe how to set up and start an offloading pipeline.

#### Defining an offloading configuration

To define an offloading configuration, click **Offload collection** to start a wizard which guides you through the main steps:

* [Select collection](#select-collection)
* [Configure target table](#configure-target-table)
* [Set additional result columns](#set-addtl-cols)
* [Set filter predicate](#set-filter-predicate)
* [Configure task](#configure-task)
* [Finish](#finish)

The wizard prepopulates settings for the different steps to ease the configuration process. You can modify those settings according to your needs.

<a name="select-collection"></a>
##### Select collection

In the dropdown box select one of the Cumulocity IoT base collections, which are:

* alarms
* events
* inventory
* measurements

> **Info:** You can define multiple offloading pipelines for each Cumulocity IoT collection, except for the case of a TrendMiner offloading configuration, which must be singleton. For example, you can filter the alarms collection by different criteria with each one resulting in a separate pipeline.

Later in this section you will find a summary of the default attributes being offloaded per base collection. 

<img src="/images/datahub-guide/datahub-define-an-offloading-task.png" alt="Define an offloading task" style="max-width: 100%">

Click **Next** to proceed with the next configuration step. Click **Cancel** to cancel the offloading configuration.

<a name="configure-target-table"></a>
##### Configure target table

Once you have selected a collection for offloading, you have to specify the target table in the data lake. The **Target table name** denotes the folder name in the data lake. In this folder the offloaded data is stored. In Dremio a table is created with the same name, pointing to this data lake folder. This table is used when querying the corresponding data lake folder and thus the offloaded data. The target table name must follow these syntax rules:

* It needs to start with an alphanumeric character (letters and numbers).
* It may contain alphanumeric characters, underscores (_) and dashes (-).
* Each underscore or dash must be preceded by an alphanumeric character.
* The name must be at least two characters long.

Each pipeline must create its own so-called target table in the data lake, i.e., you must choose distinct target table names for each offloading configuration.

For **alarms**, **events**, **inventory** collection, you only need to specify the target table name in this step.

For the **measurements** collection, additional settings are required. The **target table layout** refers to the way the measurements are stored. Measurements in the base collection may have different types, e.g., the collection may contain temperature, humidity, and pressure measurements. Depending on your layout choice, measurements are stored differently in the target table.

The layout **One table for one measurement type (Default)** will create a table containing only measurements of one specific type; measurements of other types are not included. When selecting this layout, you have to additionally specify the **measurement type** to which the offloaded measurements are restricted. DataHub automatically inspects a subset of the data and identifies existing measurement types. In the measurement type dropdown box, these auto-detected types are listed. In case a specific type you are looking for has not been detected, you can manually enter it in this box as well.     

The layout **All measurement types in one table (TrendMiner)** will create a table containing measurements of all types. To distinguish the measurements, the table has a column which lists for each measurement its corresponding type. The specific table schema for this layout is listed later in this section. This layout is only for use cases where you want to offload the data into the data lake, so that TrendMiner can consume the data for its time-series analytics. When this layout is selected, the target table name is set to a fixed, non-editable name, which TrendMiner expects for its data import. To learn more about the interaction between TrendMiner and DataHub, see [Integrating DataHub with TrendMiner](/datahub/integrating-datahub-with-sag-products/#integration-trendminer).

For each base collection, a corresponding offloading pipeline extracts a default set of data fields. This set defines the default schema of the target table with the columns capturing the data fields. The set is fix for each collection and cannot be modified. Select **Show default schema** to examine the default schema, with name and type listed per column.

Click **Next** to proceed with the next configuration step. Click **Finish** to jump directly to the final step. Both steps cannot be executed if the associated base collection is empty, as it prevents necessary schema investigations. Click **Previous** to go one configuration step back. Click **Cancel** to cancel the offloading configuration.

<a name="set-addtl-cols"></a>
##### Set additional result columns

If you have added additional top-level fields while feeding data into Cumulocity IoT and you want to access them in your DataHub queries, then you can include them as additional result columns. You can also use additional result columns to offload data fields in the base collection not being part of the default schema. Additional result columns are optional, except for the TrendMiner case, which does not support this option.

###### Auto-detected columns

To ease the configuration process, DataHub auto-detects additional result columns. Using a sample of the base collection, DataHub searches for additional top-level fields and provides them as additional result columns. You can either include such an auto-detected column in your offloading or not. As the auto-detection logic relies on a sample, not all additional top-level fields might be captured. You can manually add a column to include a top-level field you miss.

###### Structure of additional result columns

Each additional result column, whether it is a manually configured or an auto-detected one, has the following properties:

- Selected: With this checkbox, you define if the column is included in the offloading pipeline or not.
- Column name: The column name is the name the column will have in the target table. The column name must be unique.
- Auto-detected: This property denotes whether the column has been auto-detected of manually added by the user.
- Source definition: The source definition is the actual SQL expression, which defines how the data in this column looks like. 
- Column type: The column type defines which kind of data the column contains, e.g. DOUBLE for double values or VARCHAR for strings.

When entering the configuration step for additional result columns, all columns and their properties are shown in a table. The column name can be edited inline by clicking into the name field, adapting the name, and clicking once outside the field. In the top right corner the **Hide auto-detected columns** checkbox allows you to either show the auto-detected columns or not. On the right side of each column, a collapse button and a context menu is available. With the collapse button you can expand/collapse more details of the column. In that details section you can explore lengthy source definitions and sample data of the column. In the context menu of a column you find actions for editing, duplicating, or deleting a column.

In the top-right corner of a column you also find a button for manually adding an additional result column.

If you enter the additional columns step for a running offloading pipeline, i.e., the pipeline is scheduled, you cannot modify additional columns.

<img src="/images/datahub-guide/datahub-configure-addtl-cols.png" alt="Overview of additional result columns" style="max-width: 100%">

###### Add an additional result column

When adding a column, a modal dialog for defining the column opens. You have to define a unique column name, i.e., no other column has this name. Then the source definition needs to be specified.

First step is to define a field from the base collection in the source definition. Then you can optionally apply SQL functions to adapt the data to your needs, e.g. by trimming whitespace or rounding decimal values. The source definition editor supports you with content completion and syntax highlighting.

If you want to derive additional columns from nested content, you can specify the nested fields in the input field as well using the prefix "src." and the path to the nested field. For example, if you have a top-level field "someField" with a nested field "someSubField", add "src.someField.someSubField" as additional column. In the same way you can access nested arrays. If you have a top-level field "someField" with a nested array field "someArraySubField", add "src.someField.someArraySubField[0]" as additional column to access the first array entry.

<img src="/images/datahub-guide/datahub-add-addtl-col.png" alt="Add additional result column" style="max-width: 40%">

Click **Apply** to add the column, which is per default selected for offloading. If the source definition is invalid, you get an error message like *Column "UnknownColumn" not found in any table*. You have to fix the source definition before you can proceed. Click **Cancel** to cancel the column configuration.

###### Edit an additional result column

In the context menu of an additional result column, select **Edit** to open the dialog for editing the column name and the source definition. Click **Apply** to update the column with the new settings. The new column name must be unique and the source definition must valid in order to proceed. Click **Cancel** to quit editing the column.

Note that for auto-detected columns the source definition cannot be modified. If you want to modify the source definition, you have to duplicate the auto-detected column.

###### Duplicate an additional result column

In the context menu of an additional result column, select **Duplicate** to open the dialog for duplicating the column. The source definition of the duplicate column is the same as one of the original column and can be adapted to your needs. The column name uses the original column name plus a counter as suffix to make the name unique. You can adapt the name to your needs, provided the name is unique.

###### Delete an additional result column

In the context menu of an additional result column, select **Delete** to open the dialog for deleting the column. Click **Confirm** to proceed or **Cancel** to cancel the deletion.

Auto-detected columns cannot be deleted.

###### Migration of additional result columns
DataHub versions prior to version 10.10 offered a single input field for defining a comma-separated list of additional columns. Offloading configurations defined with such an older version internally use a different format for managing additional result columns. DataHub version 10.10 and above uses an auto-migration procedure to automatically migrate an old configuration to the new format. In rare cases this auto-migration might fail, e.g., when the SQL expression is invalid. Such a configuration can still be scheduled, but its settings cannot be modified. 

To migrate to the new format, proceed as follows:

- In the context menu of the column click **Show** and navigate through the configuration.
- Copy the task name, the additional columns definition, and the target table name to a text editor.
- Create a new configuration with an arbitrary target table name and an arbitrary task name. 
- Navigate to the additional columns step. Rebuild the additional columns by manually adding the same columns as given in the old definition. For example, the expression "'Hello' AS Col1, 'World' AS Col2" results in two columns, one with name "Col1" and source definition "'Hello'" and one with name "Col2" and source definition "'World'". In case columns in the old definition were not named, Dremio has automatically assigned a column name like "expr$1". Use the preview of the old configuration to get the corresponding column names and use them when defining the new additional columns. Complete the configuration.
- Delete the old configuration.
- In the new configuration set the task name and the target table name of the old configuration.
- When activating the new configuration, you are prompted for either flushing the existing data or appending to the existing data. Use the latter option to base the new configuration on the data the old configuration has offloaded so far.

Click **Next** to proceed with the next configuration step. Click **Previous** to go one configuration step back. Click **Cancel** to cancel the offloading configuration.

<a name="set-filter-predicate"></a>
##### Set filter predicate

Optionally you can define an additional filter predicate. Per default, all entries in the base collection are offloaded to the data lake; you can use the predicate to filter out entries you do not want to persist in the data lake. For example, you can filter out invalid values or outliers. In the **Additional filter predicate** field, you can specify such a filter in SQL syntax. For example, for the alarms collection the filter might be "status='ACTIVE' AND severity='WARNING'" to only persist active alarms with severity warning. The filter predicate functionality supports complex SQL statements, i.e., a combination of AND/OR, clauses like "IN(...)" / "NOT IN(...)", and functions, e.g. "REGEXP_LIKE(text, 'MyText\S+')".

In the filter predicate you can query all standard attributes of the base collection as well as the custom fields. The additional result columns defined in the previous configuration step cannot be accessed by their name in the filter predicate. You have to use the source definition as defined in a corresponding column instead.

> **Info:** For querying the attribute "id", you have to use "_id". For querying the time attributes, see also [Working with DataHub > DataHub best practices](/datahub/working-with-datahub/#datahub-best-practices) for example snippets for widely-used temporal filter predicates.

When defining an additional filter predicate, you can click **Validate** to validate your predicate. If the validation fails, you will get an error description. For example, if you want to apply the trim function to a numeric value "TRIM(numeric_value)", you get an error message that the trim function cannot be applied in that case. You should fix these errors as otherwise the offloading execution will fail. If the underlying collection is empty and no schema information is available, the validation step cannot be executed.

Click **Next** to proceed with the next configuration step. Click **Previous** to go one configuration step back. Click **Cancel** to cancel the offloading configuration.

<a name="configure-task"></a>
##### Configure task

The task configuration step includes the offloading task name and the description. The **Offloading task name** is an identifier for the offloading pipeline. It has to have at minimum one non-whitespace character. Even though the task name does not have to be unique, it is advisable to use a unique name.

In the **Description** field, you can add a description for this offloading pipeline. The description is optional, but we recommend you to use it, as it provides additional information about the pipeline and its purpose.

Click **Next** to proceed with the next configuration step. Click **Previous** to go one configuration step back. Click **Cancel** to cancel the offloading configuration.

<a name="finish"></a>
##### Finish configuration

The final step provides a summary of your settings as well as a result preview. The summary includes the settings from the previous steps as well as the internal UUID of this configuration. The UUID is generated by the system and cannot be modified. With the UUID you can distinguish configurations having the same task name, e.g., when browsing the audit log or the offloading status. In the summary, you also get the schedule with which the offloading pipeline will be executed once it is started, e.g., "every hour at minute 6". The schedule cannot be modified. With the **Inactive**/**Active** toggle at the end of the summary you choose whether the periodic offloading execution should be activated upon save or not.  

In the offloading preview you can inspect how the actual data that will be offloaded looks like. For this purpose, the offloading is executed, returning a sample of the resulting data. The header row of the sample data incorporates the column name as well as the column type. Note that no data is permanently persisted to the data lake when running the preview.

Finally, click **Save** to save the offloading pipeline. Otherwise click **Cancel** to cancel the offloading configuration. You can also navigate back to adapt previous settings, using the **Previous** buttons.

<img src="/images/datahub-guide/datahub-validate-an-offloading-configuration.png" alt="Validate an offloading configuration"  style="max-width: 100%">

#### Overview of offloading pipelines

In the main panel of the **Offloading** page, you will find all pipelines as well as their current status.

Each pipeline is shown as a card. A card has controls for managing the offloading process. Besides the description you will find the schedule with which this pipeline will be executed once it is started. In addition to that you will find for active pipelines the time of their last execution and the planned next execution. When expanding **Additional information**, the additional columns, the filter predicate, and the UUID of the configuration are shown.

#### Scheduling an offloading job

Once you have defined an offloading configuration and saved it, you can start the offloading pipeline.

##### Starting periodic offloading

Click the **Active**/**Inactive** toggle in an offloading card to start the periodic execution of the offloading pipeline, if it was not already activated when configuring the pipeline. The scheduler component of DataHub will then periodically trigger the pipeline.

The initial offload denotes the first execution of an offloading pipeline. While subsequent executions only offload data increments, the initial offload moves all collection data from the Operational Store of Cumulocity IoT to the data lake. Thus, the initial offload may need to deal with vast amounts of data. For this reason, the initial offload does not process one big data set, but instead partitions the data into batches and processes the batches. If the initial offload fails, e.g. due to a data lake outage, the next offload checks which batches were already completed and continues with those not yet completed.

If the same pipeline has already been started and stopped in the past, a new start of the pipeline opens a dialog asking you whether you want to flush the existing data or append the data to the existing data. The latter option offloads only data that has been added after the last execution. The first option flushes the data lake. Then the next execution will offload the complete collection. This option should be used with caution.

Before restarting the periodic offloading, you may have changed the result schema by adding or removing columns (via adding or removing additional result columns). When you restart the pipeline, existing data in the data lake is not modified, but the new data being offloaded incorporates the new schema. When querying such a data set comprising different schemas, the system computes a "merged" schema and (virtually) fills it up with null values where fields have not yet been provided. This usually works without problems if additional attributes are included or removed from the offloading configuration. However, schema merging might fail or lead to unexpected behavior in certain cases. One example is if you change data types, e.g., if the old configuration contained "myCustomField1" as a string and you change it to a number via "CAST(myCustomField1 AS Integer) AS myCustomField1". Therefore you should take care that the data you offload is consistent.

A previous offloading pipeline may have already written into the same target table, i.e., the data is stored in the same folder on the data lake. In this case, when starting the new offloading pipeline, you are asked whether you want to flush the existing data or append the data to the existing data. You should only append the data if old and new data share the same schema. Otherwise, you might end up with a table consisting of disparate data, which hinders meaningful analysis. If the new data differs from the old data, you should use a new target table. Alternatively, you can flush the existing table if its old contents are not needed anymore. Again, you should be careful when flushing a table as the data most likely cannot be recovered.

##### Scheduling settings

The scheduler is configured to run the offloading pipeline once an hour. The precise minute of the hour at which the offloading starts is shown in the pipeline configuration. This minute is assigned by the system to balance the load on the Operational Store of Cumulocity IoT, i.e., to avoid that all offloading jobs from different tenants run at the same time. The schedule settings cannot be modified.

##### Stopping periodic offloading

Use the **Active**/**Inactive** toggle in an offloading card to stop the periodic offloading. Then the scheduler stops scheduling new jobs; active jobs will complete.

##### Viewing the execution status

At the bottom of each pipeline card, the execution status is shown:

* **Last execution** is empty if the offloading has not been executed yet.
* **Last execution** shows the execution time and whether the execution was successful or not, indicated by a success or failure icon right next to the time. An additional icon on the left shows whether the execution was scheduled, indicated by a calendar icon, or manually triggered, indicated by a spot icon.
* **Next execution** shows the point in time for which the next execution is planned. It is only shown if the previous execution was a scheduled one.

#### Managing an offloading pipeline

In the context menu of each offloading pipeline, you will find actions for managing and monitoring the pipeline.

<img src="/images/datahub-guide/datahub-offloading-context-menu.png" alt="Context menu of an offloading configuration" style="max-width: 40%">

##### Editing/showing an offloading pipeline

Click **Edit** to edit the current settings. Only inactive pipelines can be edited. Note that you cannot change the Cumulocity IoT base collection selected for this pipeline. For the measurements collection, the target table layout cannot be changed as well. Also note that changes to additional filter predicates, and additional result columns are not applied to already exported data, i.e., a change to the offloading pipeline only affects data to be exported in the future.

For active pipelines, click **Show** to browse through the configuration. You cannot edit the settings.

##### Copying an offloading pipeline

Click **Copy** to copy the current configuration. The new configuration is an identical copy of the selected configuration except for the task name and the target table, both of which will have a unique suffix appended. You can change the settings according to your needs.

A TrendMiner offloading configuration cannot be copied, as only one TrendMiner configuration is allowed. 

##### Deleting an offloading pipeline

Click **Delete** to delete a configuration. Only inactive pipelines can be deleted. Data in the data lake which has already been exported by this offloading pipeline is not deleted. To delete the actual data in your data lake, you have to use the tooling offered by the data lake provider, e.g. AWS S3 Console or Azure Storage Explorer.

##### Triggering a manual offloading job

If the periodic offloading is enabled, you can also manually trigger an offloading job between two scheduled executions. For example, you might not want to wait for the next scheduled execution to offload recent data into the data lake. Click **Offload now** to trigger a manual offloading. As with periodic offloading, a manual offloading execution processes only incremental data that has been added since the last offloading execution (independent of whether this last execution was triggered manually or by the scheduler).

However, we recommend you to rely on the periodic offloading instead of triggering it manually.

##### Monitoring an offloading pipeline

Click **Show offloading history** to examine the execution history of a pipeline. See section [Monitoring offloading jobs](/datahub/working-with-datahub/#monitoring-offloading-jobs) for details.

#### Importing/exporting offloading configurations

The import/export functionality allows you to copy offloading configurations from one DataHub instance to another. Import/export solely includes the configuration of a pipeline; it includes neither the runtime status of a pipeline nor already exported data.

##### Export of offloading configurations

The action bar provides an **Export** button, which exports all offloading configurations. The button is disabled if no offloading configurations are defined. If you click **Export**, all offloading configurations are exported into a file. The file is located in the local download folder used by your browser.

>**Warning:** You must not modify the contents of the export file as this might corrupt the import step.

##### Import of offloading configurations

The action bar provides an **Import** button, which imports offloading configurations from a file with previously exported configurations.

Click **Import** to open the import dialog. Either drop the file in the import canvas or click into the canvas to browse your file system to select the import file. Once the file is selected, a table with all configurations in the file is shown. For each entry, the table lists the task name, the description, and the internal UUID of the original configuration. The **IMPORT** checkbox defines whether the configuration is imported or not. Duplicate entries cannot be imported and therefore the checkbox is not shown for such an entry. An entry to import is a duplicate if an already existing configuration has the same target table name or the same internal UUID.

To import the selected configurations, click **Import**. Click **Cancel** to cancel the import process.

To change the import file, click the delete icon next to the file name and select a new file to import the configurations from.

### Offloading the base collections

The following tables summarize the resulting schemas for each of the Cumulocity IoT standard collections. These schemas additionally include virtual columns "dir0", ..., "dir3", which are used for internal purposes. The columns are generated during the extraction process, but neither do they have corresponding data in the Operational Store of Cumulocity IoT, nor are they persisted in the data lake. You must not use "dir0", ..., "dir3" as additional columns or you must rename them accordingly in your offloading configuration.

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

The alarms collection keeps track of alarms. An alarm may change its status over time. The alarms collection also supports updates to incorporate these changes. Therefore an offloading pipeline for the alarms collection encompasses additional steps:

1. Offload those entries of the alarms collection that were added or updated since the last offload. They are offloaded with the above mentioned standard schema into the target table of the data lake. 
2. Two views over the target table are defined in the tenant's space in Dremio. Their names are defined as target table name plus "_all" and "_latest" respectively. The following examples use "alarms" as target table name:
    * **alarms_all**: A view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of an alarm is ACTIVE. Then it changes its status from ACTIVE to INACTIVE and afterwards back to ACTIVE. When the next offloading is executed, it will persist the latest status ACTIVE, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
    * **alarms_latest**: A view with the latest status of all alarms, with all previous transitions being discarded.

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

Events, just like alarms, are mutable, i.e., they can be changed after their creation. Thus, the same logic as for alarms applies. 

Two views over the target table are defined in the tenant's space in Dremio. Their names are defined as target table name plus *_all* and *_latest* respectively. The following examples use *events* as target table name:

* **events_all**: Contains all states (that were captured by DataHub's period offloading) of all events 
* **events_latest**: Contains only the latest state of all events without prior states
  
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
| c8y_IsDeviceGroup | BOOLEAN |
| c8y_IsDevice | BOOLEAN |
| childAssets | OTHER |
| childDevices | OTHER |

The inventory collection keeps track of managed objects. Note that DataHub automatically filters out internal objects of the Cumulocity IoT platform. These internal objects are also not returned when using the Cumulocity IoT REST API. A managed object may change its state over time. The inventory collection also supports updates to incorporate these changes. Therefore an offloading pipeline for the inventory encompasses additional steps: 

1. Offload the entries of the inventory collection that were added or updated since the last offload. They are offloaded with the above mentioned standard schema into the target table of the data lake. 
2. Two views over the target table are defined in the tenant's space in Dremio. Their names are defined as target table name plus *_all* and *_latest* respectively. The following examples use *inventory* as target table name:
    * **inventory_all**: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of a device is ACTIVE. Then it changes its state from ACTIVE to INACTIVE and afterwards to ERROR. When the next offloading is executed, it will persist the status ERROR, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
    * **inventory_latest**: a view with the latest status of all managed objects, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity IoT Data](/datahub/working-with-datahub/#refining-offloaded).

#### Offloading the measurements collection

The measurements collection stores device measurements. Offloading the measurements collection differs from the other collections as you have to explicitly select a target table layout, which is either having one table for one type or for the TrendMiner case one table with measurements of all types. 

##### Offloading measurements with the default target table layout

When using the default layout, you have to select a measurement type, so that all offloaded data is of the same type. During offloading, the data of the measurements collection is flattened, with the resulting schema being defined as follows:

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

The following excerpt of a measurement document in the base collection

````json
{
    ...
     "c8y_Temperature": {
         "T": {
             "unit": "C",
             "value": 2.0791169082
         }

     }
}
````

is represented in the target table in the data lake as

| ... | c8y_Temperature.T.unit | c8y_Temperature.T.value |... |
| ---- | ---- | ---- | ---- |
| ... | C | 2.0791169082 | ... |

##### Offloading measurements with the TrendMiner target table layout

When using the TrendMiner layout, all measurements are offloaded into one table. Their corresponding type is stored in column **type**. The column **unit** defines the unit, while the column **value** defines the value of the measurement. The column **tagname** is used by TrendMiner to search for specific series. It is composed of the source, the fragment, and the series as stored in the measurements collection. 

The resulting schema is defined as follows:

| Column name | Column type |
| -----       | -----       |
| id | VARCHAR |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| time | TIMESTAMP |
| timeOffset | INTEGER |
| timeWithOffset | TIMESTAMP |
| source | VARCHAR |
| type | VARCHAR |
| tagname | VARCHAR |
| value | VARCHAR |
| unit | VARCHAR |

###### Example mapping

The following excerpt of a measurement document in the base collection

````json
{
    ...
    "source": "857",
    "type": "Temperature",
    ...
     "c8y_Temperature": {
         "T": {
             "unit": "C",
             "value": 2.0791169082
         }
     }
}
...
{
    ...
    "source": "311",
    "type": "Pressure",
    ...
     "c8y_Pressure": {
         "P": {
             "unit": "kPa",
             "value": 98.0665
         }
     }
}
````

is represented in the target table in the data lake as

| ... | type | tagname | unit | value | ... |
| ---- | ---- | ----- | ----- | ----- | ----- |
| ... | Temperature | 857.c8y_TemperatureMeasurement.T | C | 2.0791169082 |... |
| ... | Pressure | 311.c8y_PressureMeasurement.P | kPa | 98.0665 |... |

For more details on the TrendMiner/DataHub interaction see also [Integrating DataHub with TrendMiner](/datahub/integrating-datahub-with-sag-products/#integration-trendminer).