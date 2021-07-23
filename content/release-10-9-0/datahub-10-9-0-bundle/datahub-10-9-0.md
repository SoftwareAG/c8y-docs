---
weight: 90
title: Release 10.9.0
layout: bundle
---

Cumulocity IoT DataHub Release 10.9, April 2021, includes the following improvements, limitations, and known issues:

### Self-service analytics over Cumulocity IoT data with TrendMiner

TrendMiner provides self-service industrial analytics over manufacturing data. DataHub now enables TrendMiner to run analytics over data from the Cumulocity IoT platform as well. For that purpose DataHub offloads data in a specific format TrendMiner requires for its analytics. TrendMiner then uses the query capabilities of DataHub to retrieve offloaded as well as recent Cumulocity IoT data and run its analytical tasks.

### New wizard for offloading configurations

DataHub introduces a new wizard for creating offloading configurations. Offloading configurations are at the heart of DataHub and therefore need an intuitive way to be defined. The wizard guides you through the different settings of an offloading configuration in a step-wise and clearly arranged manner.

### Limitations

|<div style="width:250px">Description</div>
|:---
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded.|
|If an attribute of a collection has varying types associated, the result table will contain a mixed type which may render query writing difficult or lead to problems with subsequent consumer applications.|
|DataHub does not work with Kubernetes version prior to 1.9.|
|Dremio has announced in its [Dremio 4.0 release notes](https://docs.dremio.com/release-notes/40-release-notes.html#deprecations) to deprecate some functionality on mixed types. In Dremio 13.2, GROUP BY or DISTINCT over mixed type expressions are no longer supported. It is necessary to cast these expressions to a simple type before using them in a GROUP BY or DISTINCT clause. Also mixed type expressions cannot be used in the SELECT clause, when retrieving data over ODBC or JDBC.|
|Duplicate attribute names with respect to case-insensitivity may lead to data loss during offloading. This refers to the case that the data has two or more attributes with the same name in terms of case-insensitivity, e.g. *myDevice* and *Mydevice* would be equal. Instead of the actual payload of the data, the value *null* will be offloaded for one of the two attributes, as case-insensitive handling of attributes is not properly supported.|

### Known issues

|<div style="width:250px">Edition|Description|
|:---|:---|
|Cloud|Data lake configuration validation is broken in terms of wrong bucket names (AWS S3) and wrong account names (Azure Storage). When saving the settings with an invalid bucket/account name, DataHub fails to quickly detect the problem and will instead run a time-consuming check, which shows up as an ongoing save request in the UI. Eventually the request will fail in the UI with a timeout and the save request in the backend will fail as well. In such a case, please carefully check the bucket/account name and try saving again.|
|Cloud|For older deployments, if the *track changes* feature of Cumulocity IoT was not enabled, the readings in the Operational Store of Cumulocity IoT do not have a creation timestamp. If more than 4096 of those readings exist, the offloading will fail, even if *track changes* was enabled afterwards. In that case a Dremio administrator must run a SELECT * query without limit or filter over the collection in order to gather the correct schema, which is required for a successful offloading.|
|Edge|There are no retention policies in place that prevent the data lake contents from exceeding the hard disk limits.|
|Edge|TLS is not supported for ODBC and JDBC.|