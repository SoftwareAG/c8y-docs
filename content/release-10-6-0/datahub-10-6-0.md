---
weight: 90
title: DataHub
layout: bundle
---

Cumulocity IoT DataHub Release 10.6, April 2020, includes the following improvements, limitations, and known issues:

### DataHub Edge

Cumulocity IoT DataHub is now also available as an add-on to Cumulocity IoT Edge, the local version of Cumulocity IoT. DataHub Edge offers the same capabilities as the cloud variant, namely data pipelines for moving data from Cumulocity's Operational Store to a local data lake and an SQL query interface for querying that data in an efficient manner.

Learn more about DataHub Edge in section [Running DataHub on the Edge](https://cumulocity.com/guides/10.6.0/datahub/running-datahub-on-the-edge).

### Limitations

|<div style="width:250px">Description</div>
|:---
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded.|
|If an attribute of a collection has varying types associated, the result table will contain a mixed type which may render query writing difficult or lead to problems with subsequent consumer applications.|
|DataHub requires a separate Kubernetes instance with version 1.9 or higher for running the Dremio cluster; it cannot run within the Kubernetes instance of the Cumulocity IoT platform.|

### Known issues

|<div style="width:250px">Edition|Description|
|:---|:---|
|Edge & cloud|If you define an offloading pipeline and insert an invalid additional filter predicate or additional column expression, the resulting error message can be hard to read.|
|Edge & cloud|If you do not have the required roles for DataHub and log in to DataHub UI, you will not get a notification for the missing roles. The menu bar at the left of the UI is not shown. Thus, you cannot interact with the UI.|
|Edge|There are no retention policies in place that prevent the data lake contents from exceeding the hard disk limits.|
|Edge|TLS is not supported for ODBC and JDBC.|
|Cloud|Data lake configuration validation is broken in terms of wrong bucket names (AWS S3) and wrong account names (Azure Storage). When saving the settings with an invalid bucket/account name, DataHub fails to quickly detect the problem and will instead run a time-consuming check, which shows up as an ongoing save request in the UI. Eventually the request will fail in the UI with a timeout and the save request in the backend will fail as well. In such a case, please carefully check the bucket/account name and try saving again.|