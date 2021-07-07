---
weight: 30
title: Querying offloaded Cumulocity IoT data
layout: redirect
---

Cumulocity IoT DataHub offers an SQL interface so that you can efficiently query offloaded (device) data and leverage the results in your own applications. A prerequisite for running SQL queries over device data is that you have configured and executed offloading pipelines that replicate and transform data from the Operational Store of Cumulocity IoT to the data lake.

### Overview

As described in section [Cumulocity IoT DataHub at a glance](/datahub/datahub-overview/#datahub-at-a-glance), Cumulocity IoT DataHub manages offloading pipelines which periodically extract data from the Operational Store of Cumulocity IoT, transform the data into a relational format, and finally store it in a data lake. Instead of querying the Operational Store, you run your queries against the data lake. The distributed SQL engine Dremio provides the query interfaces to access the data lake.

Different standard interfaces exist for that purpose, namely JDBC, ODBC, and REST. In order to work with one of those interfaces, select **Home** in the navigation bar. Under **Quick links** you will find starting points for the different interfaces.

### Access to data lake contents

You need a separate Dremio account to run SQL queries. The Dremio account is required to authenticate your requests when running queries against the data lake using Dremio. Contact the administrator for the Dremio account settings.

When you have established a connection to Dremio, you can run SQL queries against your tables in the data lake (to which new data is appended whenever the offloading pipeline has successfully run). The source you refer to in the query is defined by your account name and the target table you have specified in the offloading configuration. The identifier to be used as the source in a SQL query is defined as follows for the different data lake providers:

* Azure Storage: YourTenantIdDataLake.`FileSystem`.YourAccountName.TargetTable with `FileSystem` denoting the file system within your Azure Storage account
* Amazon S3: YourTenantIdDataLake.`Bucket`.YourAccountName.TargetTable with `Bucket` denoting the bucket within your Amazon S3 account
* Others: YourTenantIdDataLake.YourAccountName.TargetTable

For example, if your tenantId is `t47110815` and you have defined an offloading configuration to write the alarms collection to the target table `JohnsAlarms` in an Azure Storage account containing a file system named `Dremio`, then an example query would be:

```
SELECT * FROM t47110815DataLake.Dremio.t47110815.JohnsAlarms;
```
You can easily look up the paths to the tables in Dremio's UI. Click on your data lake under "Sources" at the left, then navigate to the table in the right canvas. When you hover over the table name, a small "copy" icon with the tool tip "Copy Path" will appear right of the table name. Clicking on it will copy the table name into your clipboard.

> **Info:** The offloading pipeline has to be executed at least once with corresponding data being offloaded before you can run a query.

### Connecting via JDBC

If you have a Java client, you can use JDBC to run SQL queries against the data lake.  You have to download the [Dremio JDBC driver](https://www.dremio.com/drivers/). You can obtain the JDBC connection string and the required driver version from DataHub by clicking the **JDBC** icon in the **Quick links** section of the **Home** page. When setting up your JDBC client use as username and password the credentials from your Dremio account.

For additional JDBC settings of Dremio see also the associated [Dremio documentation](https://docs.dremio.com/drivers/dremio-jdbc-driver.html).

### Connecting via ODBC

If you want to use an ODBC client to run SQL queries against the data lake, you have to configure the platform-specific driver, following the associated [Dremio installation instructions](https://docs.dremio.com/drivers/dremio-odbc-driver.html). To obtain the ODBC connection string, click the **ODBC** icon in the **Quick links** section of the **Home** page. When setting up your ODBC client use as username and password the credentials from your Dremio account.

### Connecting via Dremio REST API

Dremio offers a [SQL REST API](https://docs.dremio.com/rest-api/sql/) which you can use to run SQL queries against tables in the data lake. You need to authenticate with your Dremio account against Dremio in order to use the API.

Note that the API might change any time and {{< company-name-2 >}} does not provide any guarantees. Dremio does not send any CORS headers, so direct access from a browser-based application is not possible. It is highly recommended to use DataHub's REST API, see below.

### Connecting via DataHub REST API

The DataHub server also can handle REST requests for Dremio query processing. DataHub offers two REST APIs for running queries against Dremio. The standard REST API for small to moderate query result sizes and a high-performance REST API for large query result sizes. See the [DataHub REST API documentation](https://cumulocity.com/api/#tag/Overview) for details on the endpoints.

### Connecting other clients

Dremio offers support for connecting a variety of clients, including reporting tools like PowerBI and common analytics languages like Python. The [Dremio documentation](https://docs.dremio.com/client-applications/clients.html) discusses how to connect these clients to Dremio and leverage its query capabilities.

See also [Integrating DataHub with TrendMiner](/datahub/integrating-datahub-with-sag-products/#integration-trendminer) to learn how other {{< company-name-2 >}} products can connect to DataHub and leverage its query capabilities.
