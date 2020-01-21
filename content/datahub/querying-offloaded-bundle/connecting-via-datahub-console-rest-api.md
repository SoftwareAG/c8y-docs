---
weight: 60
title: Connecting via DataHub Console REST API
layout: redirect
---

DataHub Console server also can handle REST requests for Dremio query processing. DataHub Console server acts as a proxy for these requests and forwards them to Dremio for evaluation. Therefore this API might change any time as well.

In contrast to directly calling the Dremio REST API, in this case authentication is done against DataHub Console. In future releases it is planned that no authorization will be required due to the use of single sign-on.

### Request URLs

The URL paths of proxied requests consist of the corresponding Dremio REST API path, prefixed by "/dremio". Dremio's SQL and JOB APIs are supported. Headers and request body are as specified in the corresponding Dremio REST API documentation.

Note that you must not provide the authorization header for Dremio when using DataHub Console REST API. Instead you have to provide the authorization header for DataHub Console. 

The following APIs are available, followed by an example showing their usage. Each enlisted query functionality comprises:

* The request to send to the DataHub Console backend if you want to run the request using DataHub Console
* The equivalent request to send to the Dremio backend if you want to run the request directly against Dremio
* The associated Dremio documentation with details on the request

### Submitting a query

Submit a query and retrieve the ID of the Dremio job executing this query:

* CDH Backend request: POST /dremio/api/v3/sql
* Corresponding Dremio API: POST /api/v3/sql
* [Dremio POST SQL documentation](https://docs.dremio.com/rest-api/sql/post-sql.html)

### Retrieving job status

Retrieve the status of the query job given the job id:

* CDH Backend request: GET /dremio/api/v3/job/{id}
* Corresponding Dremio API: GET /api/v3/job/{id}
* [Dremio GET Job documentation](https://docs.dremio.com/rest-api/jobs/get-job.html)      

### Retrieving job results

Retrieve the results of the query job given the job ID and optional pagination settings:

* CDH Backend request: GET /dremio/api/v3/job/{id}/results?offset={offset}&limit={limit}
* Corresponding Dremio API:  GET /api/v3/job/{id}/results?offset={offset}&limit={limit}
* [Dremio GET Job documentation](https://docs.dremio.com/rest-api/jobs/get-job.html)

### Cancelling running jobs

Cancel a query job given the job id:

* CDH Backend request: POST /dremio/api/v3/job/{id}/cancel
* Corresponding Dremio API: POST /api/v3/job/{id}/cancel
* [Dremio POST Job documentation](https://docs.dremio.com/rest-api/jobs/post-job.html)

### Example

This example submits a Dremio SQL query to fetch the five most recent alarms which already were offloaded, waits for the query to complete, and fetches the result. 

The SQL query, assuming tenant name "Smith" and "Dremio" as name of your file system in Azure Storage, is:

```sql
SELECT creationTime, severity, text
FROM SmithDataLake.Dremio.Smith.alarms
ORDER BY creationTime DESC
LIMIT 5
```

This request submits the query, with the URL specific to your organization:

```console
POST /dremio/api/v3/sql HTTP/1.1
Host: mytenant.cumulocity.com:9090
Content-Type: application/json
{
    "sql": "SELECT creationTime, severity, text\nFROM SmithDataLake.Dremio.Smith.alarms\nORDER BY creationTime DESC\nLIMIT 5"
}
```

The response provides the job id:

```json
{
    "id": "22feee74-875a-561c-5508-04114bdda000"
}
```

The following request checks for job completion:

```console
GET /dremio/api/v3/job/22feee74-875a-561c-5508-04114bdda000 HTTP/1.1
Host: localhost:9090
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
Host: localhost:9090
```

The response might look as follows:

```json
{
    "rowCount": 5,
    "schema": [
        
            "name": "creationTime",
            "type": {
                "name": "TIMESTAMP"
            
        },
        
            "name": "severity",
            "type": {
                "name": "VARCHAR"
            
        },
        
            "name": "text",
            "type": {
                "name": "VARCHAR"
            
        
    ],
    "rows": [
        
            "creationTime": "2019-06-07 13:58:38.197",
            "severity": "MINOR",
            "text": "Something unfortunate went wrong (1)."
        
    
} 
```


