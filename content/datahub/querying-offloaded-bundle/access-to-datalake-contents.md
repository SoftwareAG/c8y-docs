---
weight: 20
title: Access to data lake contents
layout: redirect
---

You require an account in both DataHub Console and Dremio, and these accounts use the same same username and password. You need these account settings to authenticate your requests when running queries using Dremio.

When you have established a connection to Dremio, you can run SQL queries against your tables in the data lake (to which new data is appended whenever the offloading pipeline has successfully run). The source you refer to in the query is defined by your account name and the target table you have specified in the offloading configuration. The identifier to be used as the source in a SQL query is:

	YourAccountNameDataLake.YourAccountName.TargetTable

For example, if your account name is JohnSmith and you have defined an offloading configuration to write the alarms collection to the target table `JohnsAlarms`, then an example query would be:

```
SELECT * FROM JohnSmithDataLake.JohnSmith.JohnsAlarms;
```

> **Info:** The offloading pipeline has to be executed at least once with corresponding data being offloaded before you can run a query.

