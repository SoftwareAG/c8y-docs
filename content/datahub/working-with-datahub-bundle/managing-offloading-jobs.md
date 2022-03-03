---
weight: 40
title: Managing offloading jobs
layout: redirect
---

The following steps describe how to start and manage an offloading pipeline.

#### Scheduling an offloading job

Once you have defined an offloading configuration and saved it, you can start the offloading pipeline.

##### Starting periodic offloading

Click the **Active**/**Inactive** toggle in an offloading configuration to activate the periodic execution of the offloading pipeline, if it was not already activated when configuring the pipeline. The scheduler component of {{< product-c8y-iot >}} DataHub will then periodically trigger the pipeline.

The initial offload denotes the first execution of an offloading pipeline. While subsequent executions only offload data increments, the initial offload moves all collection data from the Operational Store of {{< product-c8y-iot >}} to the data lake. Thus, the initial offload may need to deal with vast amounts of data. For this reason, the initial offload does not process one big data set, but instead partitions the data into batches and processes the batches. If the initial offload fails, e.g. due to a data lake outage, the next offload checks which batches were already completed and continues with those not yet completed.

If the same pipeline has already been started and stopped in the past, a new start of the pipeline opens a dialog asking you whether you want to flush the existing data or append the data to the existing data. The latter option offloads only data that has been added after the last execution. The first option flushes the data lake. Then the next execution will offload the complete collection. This option should be used with caution as data deleted in the data lake cannot be recovered.

Before restarting the periodic offloading, you may have changed the result schema by adding or removing columns (via adding or removing additional result columns). When you restart the pipeline, existing data in the data lake is not modified, but the new data being offloaded incorporates the new schema. When querying such a data set comprising different schemas, the system computes a merged schema and (virtually) fills it up with null values where fields have not yet been provided. This usually works without problems if additional attributes are included or removed from the offloading configuration. However, schema merging might fail or lead to unexpected behavior in certain cases. One example is if you change data types. For example, if the old configuration contained "myCustomField1" as a string and you change it to a number via "CAST(myCustomField1 AS Integer) AS myCustomField1". Therefore you should take care that the data you offload is consistent.

A previous offloading pipeline may have already written into the same target table, i.e., the data is stored in the same folder on the data lake. In this case, when starting the new offloading pipeline, you are asked whether you want to flush the existing data or append the data to the existing data. You should only append the data if old and new data share the same schema. Otherwise, you might end up with a table consisting of disparate data, which hinders meaningful analysis. If the new data differs from the old data, you should use a new target table. Alternatively, you can flush the existing table if its old contents are not needed anymore. Again, you should be careful when flushing a table as the data most likely cannot be recovered.

##### Scheduling settings

The scheduler is configured to run the offloading pipeline once an hour. The precise minute of the hour at which the offloading starts is shown in the pipeline configuration. This minute is assigned by the system to balance the load on the Operational Store of {{< product-c8y-iot >}}, i.e., to avoid that all offloading jobs from different tenants run at the same time. The schedule settings cannot be modified.

##### Stopping periodic offloading

Use the **Active**/**Inactive** toggle in an offloading configuration to stop the periodic offloading. Then the scheduler stops scheduling new jobs; active jobs will complete.

##### Viewing the execution status

Each offloading configuration shows the execution status:

* **Last execution** is empty if the offloading has not been executed yet. If the offloading has been executed, **Last execution** shows the execution time and whether the execution was successful or not, indicated by a success or failure icon right next to the time. An additional icon on the left shows whether the execution was scheduled, indicated by a calendar icon, or manually triggered, indicated by a spot icon.
* **Next execution** shows the point in time for which the next execution is planned. It is only shown if the previous execution was a scheduled one.

#### Managing an offloading pipeline

In the context menu of each offloading pipeline, you will find actions for managing and monitoring the pipeline.

<img src="/images/datahub-guide/datahub-offloading-context-menu.png" alt="Context menu of an offloading configuration" style="max-width: 40%">

##### Editing/showing an offloading pipeline

Click **Edit** to edit the current settings. Only inactive pipelines can be edited. Note that you cannot change the {{< product-c8y-iot >}} base collection selected for this pipeline. For the measurements collection, the target table layout cannot be changed as well. Also note that changes to additional filter predicates, and additional result columns are not applied to already exported data. A change to the offloading pipeline only affects data to be exported in the future.

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

<a name="import-export"></a>
#### Importing/exporting offloading configurations

The import/export functionality allows you to backup your offloading configurations to a file. You can use the backup when editing the data lake settings or to copy offloading configurations from one {{< product-c8y-iot >}} DataHub instance to another. Import/export solely includes the configuration of a pipeline; it includes neither the runtime status of a pipeline nor already exported data.

##### Export of offloading configurations

The action bar provides an **Export** button, which exports all offloading configurations. The button is disabled if no offloading configurations are defined. If you click **Export**, all offloading configurations are exported into a file. The file is located in the local download folder used by your browser.

>**Warning:** You must not modify the contents of the export file as this might corrupt the import step.

##### Import of offloading configurations

The action bar provides an **Import** button, which imports offloading configurations from a file with previously exported configurations.

Click **Import** to open the import dialog. Either drop the file in the import canvas or click into the canvas to browse your file system to select the import file. Once the file is selected, a table with all configurations in the file is shown. For each entry, the table lists the task name, the description, and the internal UUID of the original configuration. The **IMPORT** checkbox defines whether the configuration is imported or not. Duplicate entries cannot be imported and therefore the checkbox is not shown for such an entry. An entry to import is a duplicate if an already existing configuration has the same target table name or the same internal UUID.

To change the import file, click the delete icon next to the file name and select a new file to import the configurations from.

To import the selected configurations, click **Import**. Click **Cancel** to cancel the import process.

As the export does not include whether a configuration was active, you have to manually activate the configurations after an import.