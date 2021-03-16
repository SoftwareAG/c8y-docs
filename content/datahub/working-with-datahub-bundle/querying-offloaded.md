---
weight: 30
title: Querying offloaded Cumulocity IoT data
layout: redirect
---

Cumulocity IoT DataHub offers an SQL interface so that you can efficiently query offloaded (device) data and leverage the results in your own applications. A prerequisite for running SQL queries over device data is that you have configured and executed offloading pipelines that replicate and transform data from the Operational Store of Cumulocity IoT to the data lake.

### Overview

As described in section [Cumulocity IoT DataHub at a glance](/datahub/datahub-overview/#datahub-at-a-glance), Cumulocity IoT DataHub manages offloading pipelines which periodically extract data from the Operational Store of Cumulocity IoT, transform the data into a relational format and finally store it in a data lake. Instead of querying the Operational Store, you run your queries against the data lake. The distributed SQL engine Dremio provides the query interfaces to access the data lake.

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

If you have a Java client, you can use JDBC to run SQL queries against the data lake.  You have to download the [Dremio JDBC driver](https://www.dremio.com/drivers/). You can obtain the JDBC connection string from DataHub by clicking the **JDBC** icon in the **Quick links** section of the **Home** page. As username and password use the credentials from your Dremio account when setting up your JDBC client.

For additional JDBC settings of Dremio see also the associated [Dremio documentation](https://docs.dremio.com/drivers/dremio-jdbc-driver.html).

### Connecting via ODBC

If you want to use an ODBC client to run SQL queries against the data lake, you have to configure the platform-specific driver, following the associated [Dremio installation instructions](https://docs.dremio.com/drivers/dremio-odbc-driver.html). To obtain the ODBC connection string, click the **ODBC** icon in the **Quick links** section of the **Home** page. As username and password use the credentials from your Dremio account when setting up your ODBC client.

### Connecting via Dremio REST API

Dremio offers a [SQL REST API](https://docs.dremio.com/rest-api/sql/) which you can use to run SQL queries against tables in the data lake. You need to authenticate with your Dremio account against Dremio in order to use the API.

Note that the API might change any time and Software AG does not provide any guarantees. Dremio does not send any CORS headers, so direct access from a browser-based application is not possible. It is highly recommended to use DataHub's REST API, see below.

### Connecting via DataHub REST API

The DataHub server also can handle REST requests for Dremio query processing. The DataHub server acts as a proxy for these requests and forwards them to Dremio for evaluation.

In contrast to directly calling the Dremio REST API, in this case authentication is done against Cumulocity IoT (i.e., using the Cumulocity IoT DataHub user); thus, you need to provide Cumulocity IoT credentials instead of Dremio credentials. You need the corresponding Cumulocity IoT permission to use this API. See the section on [Defining DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions) for further details on the required permission.

 You will find an example request by clicking the **REST API** icon in the **Quick links** section of the **Home** page.

#### Request URLs

The URL paths of proxied requests consist of:

* the path of the microservice, which you will find in its application properties (see also section [Managing applications](/users-guide/administration#managing-applications))
* the corresponding Dremio REST API path, prefixed by "/dremio".

>**Info:** For the system eu-latest.cumulocity.com and tenant domain name `datahub-demo`, the base URL would be
https://datahub-demo.eu-latest.cumulocity.com/service/datahub/.

Dremio's SQL and JOB APIs are supported. Note that you must not provide the authorization header for Dremio when using DataHub REST API. Instead you have to provide the authorization header for DataHub. 

The following APIs are available, followed by an example showing their usage. Each enlisted query functionality comprises:

* The request to send to the DataHub backend if you want to run the request using DataHub 
* The equivalent request to send to the Dremio backend if you want to run the request directly against Dremio
* The associated Dremio documentation with details on the request

#### Submitting a query

Submit a query and retrieve the ID of the Dremio job executing this query:

* DataHub request: POST /dremio/api/v3/sql
* Corresponding Dremio API: POST /api/v3/sql
* [Dremio POST SQL documentation](https://docs.dremio.com/rest-api/sql/post-sql.html)

#### Retrieving job status

Retrieve the status of the query job given the job ID:

* DataHub request: GET /dremio/api/v3/job/{ID}
* Corresponding Dremio API: GET /api/v3/job/{ID}
* [Dremio GET Job documentation](https://docs.dremio.com/rest-api/jobs/get-job.html)      

#### Retrieving job results

Retrieve the results of the query job given the job ID and optional pagination settings:

* DataHub request: GET /dremio/api/v3/job/{ID}/results?offset={offset}&limit={limit}
* Corresponding Dremio API:  GET /api/v3/job/{ID}/results?offset={offset}&limit={limit}
* [Dremio GET Job documentation](https://docs.dremio.com/rest-api/jobs/get-job.html)

>**Info:** As the result set of a query might be potentially very large, the corresponding endpoint for retrieving the results returns per default the first 100 entries. You can optionally define the offset and the limit (at maximum 500) to paginate through all results.

#### Cancelling running jobs

Cancel a query job given the job ID:

* DataHub request: POST /dremio/api/v3/job/{ID}/cancel
* Corresponding Dremio API: POST /api/v3/job/{ID}/cancel
* [Dremio POST Job documentation](https://docs.dremio.com/rest-api/jobs/post-job.html)

#### Example

This example submits a Dremio SQL query to fetch the five most recent alarms which already were offloaded, waits for the query to complete, and fetches the result. 

Assuming tenantId `t47110815`, `Dremio` as name of your file system in Azure Storage, and the table name `JohnsAlarms`, the SQL query is:

```sql
SELECT creationTime, severity, text
FROM t47110815DataLake.Dremio.t47110815.JohnsAlarms
ORDER BY creationTime DESC
LIMIT 5
```

This request submits the query, with the URL specific to your organization:

```console
POST /dremio/api/v3/sql HTTP/1.1
Host: datahub-demo.eu-latest.cumulocity.com
Content-Type: application/json
{
    "sql": "SELECT creationTime, severity, text\nFROM t47110815DataLake.Dremio.t47110815.JohnsAlarms\nORDER BY creationTime DESC\nLIMIT 5"
}
```

The response provides the job ID:

```json
{
    "id": "22feee74-875a-561c-5508-04114bdda000"
}
```

The following request checks for job completion:

```console
GET /dremio/api/v3/job/22feee74-875a-561c-5508-04114bdda000 HTTP/1.1
Host:  datahub-demo.eu-latest.cumulocity.com
```

The response shows the job status:

```json
{
    "jobState": "COMPLETED",
    "rowCount": 5,
    "errorMessage": "",
    "startedAt": "2019-06-12T14:51:54.158Z",
    "endedAt": "2019-06-12T14:51:54.563Z",
    "queryType": "REST",
    "queueName": "Low Cost User Queries",
    "queueId": "f62caa92-c36b-4d5f-b20c-ff0ce3feff1c",
    "resourceSchedulingStartedAt": "2019-06-12T14:51:54.211Z",
    "resourceSchedulingEndedAt": "2019-06-12T14:51:54.240Z",
    "cancellationReason": ""
}
```

A job state of RUNNING is returned while the query is still being executed, and eventually it changes to COMPLETED or FAILED. Once the job has been completed, its results are returned by the following request:

```console
GET /dremio/api/v3/job/22feee74-875a-561c-5508-04114bdda000/results HTTP/1.1
Host:  datahub-demo.eu-latest.cumulocity.com
```

The response might look as follows:

```json
{
    "rowCount": 5,
    "schema": 
    [
        {
            "name": "creationTime",
            "type": {
                "name": "TIMESTAMP"
            }
        },
        {   
            "name": "severity",
            "type": {
                "name": "VARCHAR"  
            }
        },
        {
            "name": "text",
            "type": {
                "name": "VARCHAR"
            }
        }
    ],
    "rows": 
    [
        {   
            "creationTime": "2019-06-07 13:58:38.197",
            "severity": "MINOR",
            "text": "Something unfortunate went wrong (1)."
        }
    ]
} 
```

### Connecting other clients

Dremio offers support for connecting a variety of clients, including reporting tools like PowerBI and common analytics languages like Python. The [Dremio documentation](https://docs.dremio.com/client-applications/clients.html) discusses how to connect these clients to Dremio and leverage its query capabilities.