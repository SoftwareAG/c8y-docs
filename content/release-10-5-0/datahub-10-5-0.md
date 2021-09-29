---
weight: 90
title: DataHub
layout: bundle
---

Cumulocity IoT DataHub Release 10.5, November 2019, includes the following improvements and limitations:

### Cumulocity IoT DataHub

Cumulocity IoT DataHub is now available in the Cumulocity IoT Cloud platform. With easy-to-use data pipelines you can extract data from Cumulocity IoT’s Operational Store to a data lake for long-term archival and efficient analytical querying. With a SQL-based Query Interface you can query the data lake and connect arbitrary applications that support either ODBC, JDBC, or REST protocols.

See section [Cumulocity IoT DataHub at a glance](https://cumulocity.com/guides/10.5.0/datahub/datahub-overview/#datahub-at-a-glance) to learn more about DataHub.

### Limitations

|<div style="width:250px">Description</div>
|:---
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded.|
|If an attribute of a collection has varying types associated, the result table will contain a mixed type which may render query writing difficult or lead to problems with subsequent consumer applications.|
|DataHub requires a separate Kubernetes instance with version 1.9 or higher for running the Dremio cluster; it cannot run within the Kubernetes instance of the Cumulocity platform.|

### Known issues

|<div style="width:250px">Edition</div>|Description|
|:---|:---|
|Edge & cloud|Attributes in the **measurements** collection should always have a two-level hierarchy, e.g. *my_sensor.current_temperature.value*. If an attribute is stored in a single-level hierarchy, e.g. *my_sensor.value*, the offloading of the **measurements** collection is handled incorrectly: the attribute is offloaded automatically and cannot be configured as **additional result column**. With version 10.5.7 of the Cumulocity IoT platform, the correct handling of such an attribute is enforced: the attribute is not offloaded automatically, but must be explicitly configured as **additional result column**. If you have an attribute modeled in a single-level hierarchy and the offloading pipelines were configured against a core platform with version below 10.5.7, you will observe *NULL* values in the offloading results after an upgrade of the core platform to version 10.5.7. <br>**Workaround**:<br> 1. Stop the corresponding offloading pipeline. 2. Delete the Parquet files from the data lake having the unintended *NULL* values. 3. Reconfigure the offloading pipeline by adding an additional filter so that only entries from before the platform update are offloaded. If known, use for the filter predicate the timestamp of the platform update or alternatively the timestamp of the first entry with an unintended *NULL* value. Trigger the offloading pipeline manually and wait for its completion. 4. Stop the offloading pipeline. 5. Reconfigure the pipeline to add the relevant columns as additional result columns and remove the additional filter from step 3. Activate the scheduled offloading.|
|Cloud|Data lake configuration validation is broken in terms of wrong bucket names (AWS S3) and wrong account names (Azure Storage). When saving the settings with an invalid bucket/account name, DataHub fails to quickly detect the problem and will instead run a time-consuming check, which shows up as an ongoing save request in the UI. Eventually the request will fail in the UI with a timeout and the save request in the backend will fail as well. In such a case, please carefully check the bucket/account name and try saving again.|
