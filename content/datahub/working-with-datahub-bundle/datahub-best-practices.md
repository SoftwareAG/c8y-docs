---
weight: 50
title: DataHub best practices
layout: redirect
---

Learn from well-established usage patterns in order to ensure a robust and scalable processing of your SQL queries.

### Naming policies

When defining an offloading configuration, you have to specify the task name, the target table, and a description. You should ensure that you provide reasonable names for each of these settings so that afterwards you can easily find the offloading pipelines you are interested in. A reasonable naming scheme also facilitates writing queries.

Also when defining an offloading configuration, you must always define a target table that is unique among the currently saved configurations. You also should not re-use a target table from an old offloading configuration which was deleted in the meantime. Otherwise, you might run into the problem that your target table consists of data from multiple configurations with potentially different schemas.

### Careful definition of additional columns and filter predicate

An offloading configuration allows you to specify additional columns to be offloaded as well as filter predicates for filtering the data. For both settings, you should carefully think about which data you actually need for your processing. Data being filtered out cannot be retrieved any more. Even if you adapt the filter predicate afterwards, the data which would have qualified in previous offloading executions will not be offloaded. You can, however, stop an offloading, change the configuration to include additional fields, etc., and then restart it. When it is restarted, DataHub will ask you whether you want to flush existing data (i.e., re-import) or append. Note that DataHub can only re-import data that is still present in the Operational Store of Cumulocity IoT, i.e., be careful with this option and keep in mind that data retention policies in Cumulocity IoT might have deleted data.

On the other side, data which will definitely be irrelevant for further analysis should not be included in the offloading process.

### Decomposition of complex additional columns

You may have stored complex data using JSON fragments as an additional column in a Cumulocity IoT collection. As described in section [Configuring offloading jobs](/datahub/working-with-datahub/#configuring-offloading-jobs), you can add additional columns so that they are included in the offloading process. Within these additional columns, you can apply functions to decompose the fragments into flat data.

Writing these functions is often an iterative process that requires multiple adaptations of the underlying logic. Leverage the Dremio SQL editor and define a dummy offloading configuration which moves a small portion of the data into the data lake for testing purposes. You can use the filter predicate to retrieve such a portion of the data, e.g., by specifying a condition `creationTime BETWEEN '2019-10-01' AND '2019-10-27'`. Then you can open the table created by the offloading configuration with Dremio; using Dremio's SQL editor, you can develop the extraction logic.  Once your decomposition logic for your additional columns is complete, you can copy the column transformations and use them to define a corresponding offloading configuration in DataHub. Once that is done, the test offloading pipeline can be deleted.