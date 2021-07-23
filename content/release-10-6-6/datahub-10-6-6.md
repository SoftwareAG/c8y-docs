---
weight: 90
title: DataHub
layout: bundle
---

Cumulocity IoT DataHub Release 10.6.6, July 2020, includes the following improvements, limitations, and known issues:

### Robustness of initial offload

The initial offload refers to the first execution of an offloading pipeline, which transforms and moves all current data in the Operational Store of Cumulocity IoT into the data lake. As the initial offload may need to deal with vast amounts of data, its execution was enhanced so that batches of data are processed instead of one big data set. If an initial offload fails, e.g. due to the data lake being unavailable, the next offload will pick up the intermediate state and complete it. This enhancement improves the stability of the initial offload.

### Various improvements of web application

The DataHub web application has been improved with various minor enhancements, including for example: The DataHub configuration now allows you to select the data lake provider hosting your data lake, e.g. Azure Storage or Amazon S3. If you modify an offloading pipeline by setting additional columns or a filter predicate and the modifications are erroneous, you get an improved error report.

### Limitations

|<div style="width:250px">Description</div>
|:---
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded.|
|If an attribute of a collection has varying types associated, the result table will contain a mixed type which may render query writing difficult or lead to problems with subsequent consumer applications.|
|DataHub requires a separate Kubernetes instance with version 1.9 or higher for running the Dremio cluster; it cannot run within the Kubernetes instance of the Cumulocity IoT platform.|
|Duplicate attribute names wrt. case-insensitivity may lead to data loss during offloading. This refers to the case that the data has two or more attributes with the same name in terms of case-insensitivity, e.g. *myDevice* and *Mydevice* would be equal. Instead of the actual payload of the data, the value *null* will be offloaded for one of the two attributes, as case-insensitive handling of attributes is not properly supported.|

### Known issues

|<div style="width:250px">Edition|Description|
|:---|:---|
|Cloud|Data lake configuration validation is broken in terms of wrong bucket names (AWS S3) and wrong account names (Azure Storage). When saving the settings with an invalid bucket/account name, DataHub fails to quickly detect the problem and will instead run a time-consuming check, which shows up as an ongoing save request in the UI. Eventually the request will fail in the UI with a timeout and the save request in the backend will fail as well. In such a case, please carefully check the bucket/account name and try saving again.|