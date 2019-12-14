---
weight: 20
title: Access to data lake contents
layout: redirect
---

You require a separate Dremio account to access the data lake contents. The Dremio account is required to authenticate your requests when running queries against the data lake using Dremio. Contact your tenant administrator for the Dremio account settings.

When you have established a connection to Dremio, you can run SQL queries against your tables in the data lake (to which new data is appended whenever the offloading pipeline has successfully run). The source you refer to in the query is defined by your account name and the target table you have specified in the offloading configuration. The identifier to be used as the source in a SQL query is defined as follows for the different data lake providers:

* Azure Storage: YourAccountNameDataLake.<FileSystem>.YourAccountName.TargetTable with <FileSystem> denoting the file system within your Azure Storage account
* Amazon S3: YourAccountNameDataLake.<Bucket>.YourAccountName.TargetTable with <Bucket> denoting the bucket within your Amazon S3 account
* Others: YourAccountNameDataLake.YourAccountName.TargetTable

For example, if your account name is JohnSmith and you have defined an offloading configuration to write the alarms collection to the target table `JohnsAlarms` in an Azure Storage account containing a file system named Dremio, then an example query would be:

```
SELECT * FROM JohnSmithDataLake.Dremio.JohnSmith.JohnsAlarms;
```

> **Info:** The offloading pipeline has to be executed at least once with corresponding data being offloaded before you can run a query.

