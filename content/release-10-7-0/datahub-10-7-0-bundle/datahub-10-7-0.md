---
weight: 90
title: Release 10.7.0
---

Cumulocity IoT DataHub Release 10.7, October 2020, includes the following improvements, limitations, and known issues:

### Tracking of usage statistics

DataHub acquires usage statistics on the amount of data being processed. This includes the data volume offloaded from the Operational Store of Cumulocity IoT into the data lake as well as the data volume being queried from the data lake. These statistics can be utilized for a usage-based charging of customers. The web application provides an overview of the statistics and a drill-down into the associated queries.

### Support for HDFS as data lake

DataHub introduces Hadoop Distributed File System (HDFS) as another data lake option for storing offloaded data. The data is stored as Parquet files in a HDFS cluster, which can be queried using Dremio.

### Improvements of DataHub Edge

DataHub Edge has been improved with various minor enhancements, including for example: automated clean-up of job history without downtime, adaptation of the maximum wait time for the ETL queue to cope with lengthy offloads.

### Import/export of offloading configurations

The offloading configurations underlying the offloading pipelines can be exported into a file and re-imported on another DataHub instance. The version numbers of the exporting and importing DataHub instance must match exactly.
The import/export functionality is available in the web application.

### Help icons

Input fields whose meaning may not be obvious are equipped with a help icon providing more information.

### Limitations

|<div style="width:250px">Description</div>
|:---
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded.|
|If an attribute of a collection has varying types associated, the result table will contain a mixed type which may render query writing difficult or lead to problems with subsequent consumer applications.|
|DataHub does not work with Kubernetes version prior to 1.9.|

### Known issues

|<div style="width:250px">Edition|Description|
|:---|:---|
|Cloud|Data lake configuration validation is broken in terms of wrong bucket names (AWS S3) and wrong account names (Azure Storage). When saving the settings with an invalid bucket/account name, DataHub fails to quickly detect the problem and will instead run a time-consuming check, which shows up as an ongoing save request in the UI. Eventually the request will fail in the UI with a timeout and the save request in the backend will fail as well. In such a case, please carefully check the bucket/account name and try saving again.|
|Cloud|For older deployments, if the *track changes* feature of Cumulocity IoT was not enabled, the readings in the Operational Store of Cumulocity IoT do not have a creation timestamp. If more than 4096 of those readings exist, the offloading will fail, even if *track changes* was enabled afterwards. In that case a Dremio administrator must run a SELECT * query without limit or filter over the collection in order to gather the correct schema, which is required for a successful offloading.|
|Edge|There are no retention policies in place that prevent the data lake contents from exceeding the hard disk limits.|
|Edge|TLS is not supported for ODBC and JDBC.|
