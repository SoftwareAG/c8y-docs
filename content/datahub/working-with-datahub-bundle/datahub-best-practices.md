---
weight: 50
title: Cumulocity IoT DataHub best practices
layout: redirect
---

Learn from well-established usage patterns in order to ensure a robust and scalable processing of your SQL queries.

### Naming policies

When defining an offloading configuration, you have to specify the task name, the target table, and a description. You should ensure that you provide reasonable names for each of these settings so that afterwards you can easily find the offloading pipelines you are interested in. A reasonable naming scheme also facilitates writing queries.

Also when defining an offloading configuration, you must always define a target table that is unique among the currently saved configurations. You should not re-use a target table from an old offloading configuration which was deleted in the meantime. Otherwise, you might run into the problem that your target table consists of data from multiple configurations with potentially different schemas.

### Careful definition of additional columns and filter predicate

An offloading configuration allows you to specify additional columns to be offloaded as well as filter predicates for filtering the data. For both settings, you should carefully think about which data you actually need for your processing. Data being filtered out cannot be retrieved any more. Even if you adapt the filter predicate afterwards, the data which would have qualified in previous offloading executions will not be offloaded. You can, however, stop an offloading, change the configuration to include additional fields, etc., and then restart it. When it is restarted, {{< product-c8y-iot >}} DataHub will ask you whether you want to flush existing data or append. Flushing will delete all data in the data lake so that with the next offloading execution the complete collection will be offloaded again. Note that {{< product-c8y-iot >}} DataHub can only import data that is still present in the Operational Store of {{< product-c8y-iot >}}, i.e., be careful with this option and keep in mind that data retention policies in {{< product-c8y-iot >}} might have deleted data.

On the other side, data which will definitely be irrelevant for further analysis should not be included in the offloading process.

### Decomposition of complex additional columns

You may have stored complex data using JSON fragments as an additional column in a {{< product-c8y-iot >}} collection. As described in section [Configuring offloading jobs](/datahub/working-with-datahub/#configuring-offloading-jobs), you can add additional columns so that they are included in the offloading process. Within these additional columns, you can apply functions to decompose the fragments into flat data.

Writing these functions is often an iterative process that requires multiple adaptations of the underlying logic. Leverage the Dremio SQL editor and define a dummy offloading configuration which moves a *small portion of the data into the data lake for testing purposes*. You can use the filter predicate to retrieve such a portion of the data; see below for time filter examples. Then you can open the table created by the offloading configuration with Dremio; using Dremio's SQL editor, you can develop the extraction logic. Once your decomposition logic for your additional columns is complete, you can copy the column transformations and use them to define a corresponding offloading configuration in {{< product-c8y-iot >}} DataHub. Once that is done, the dummy offloading pipeline can be deleted.

#### Examples for time filters
Depending on the collection, you can use different time filters. All collections support `creationTime` which represents the timestamp when the entity was persisted by the platform (UTC timezone). Mutable entities (alarms, events, inventory) also support `lastUpdated` which is the timestamp when the entity was last changed (UTC timezone). `time` is the application timestamp written by the client; it is supported in alarms, events, and measurements.

The below time filters are examples only; you can use much more complex or simpler combinations with a mixture of AND/OR-connected conditions.

##### Alarms/events
To offload all alarms or events which have the application time set to between 2020-02-08 14:00:00.000 and 2020-02-08 15:00:00.000, use:

```
src."time"."date" >= {ts '2020-02-08 14:00:00.000'} AND
src."time"."date" <= {ts '2020-02-08 15:00:00.000'}
```
To offload all alarms or events which were persisted after 2020-02-08 15:00:00.000, use:

```
src."creationTime"."date" > {ts '2020-02-08 15:00:00.000'}
```
Restricting the offloading to alarms and events last modified before 2020-02-08 14:00:00.000, use:
```
src."lastUpdated"."date" < {ts '2020-02-08 14:00:00.000'}
```
##### Inventory
To offload all data which was persisted between 2020-02-08 14:00:00.000 and 2020-02-08 15:00:00.000, use:
```
src."creationTime"."date" >= {ts '2020-02-08 14:00:00.000'} AND
src."creationTime"."date" <= {ts '2020-02-08 15:00:00.000'}
```
or, to offload all data that was last updated after 2020-02-08 14:00:00.000, use:
```
src."lastUpdated"."date" > {ts '2020-02-08 14:00:00.000'}
```

##### Measurements
To offload all data with application time between 2020-02-08 14:00:00.000 and 2020-02-08 15:00:00.000, use:
```
src."time"."date" >= {ts '2020-02-08 14:00:00.000'} AND
src."time"."date" <= {ts '2020-02-08 15:00:00.000'}
```
or, to offload all data received by the platform after 2020-02-08 14:00:00.000, use:
```
src."creationTime"."date" > {ts '2020-02-08 14:00:00.000'}
```

### Querying additional data with {{< product-c8y-iot >}} DataHub

Main use-case of {{< product-c8y-iot >}} DataHub is to offload data from the internal {{< product-c8y-iot >}} database to a data lake and query the data lake contents afterwards. In some use cases {{< product-c8y-iot >}} DataHub is required to query additional data which is not kept in the {{< product-c8y-iot >}} database. For a cloud environment, the additional data must be provided as Parquet files and must be located in the specific bucket of the data lake as configured in the offloading settings of {{< product-c8y-iot >}} DataHub. The Parquet files must not be in folders that are used as target tables for offloadings as this would corrupt query processing of {{< product-c8y-iot >}} DataHub. The Parquet files themselves must be compliant with the [https://docs.dremio.com/data-formats/parquet-files/](Dremio limitations for Parquet files).

For a dedicated environment, the additional data can be located somewhere else, provided it can be accessed via Dremio, e.g. in a relational database. For performance and cost reasons, however, data and processing should always be colocated.
