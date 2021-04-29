---
title: DataHub data pull
layout: redirect
weight: 40

aliases:
  - /machine-learning/api-reference-mlw-bundle/#mlwDataHub
---

Operations on MLW data connectors - Data pull from Cumulocity IoT DataHub.

>**Info:** An active subscription of the MLW microservice (mlw-cdh) is required to perform operations.

### POST - Pull data from Cumulocity IoT DataHub

```
{{url}}/service/mlw/projects/{{projectID}}/resources/importFromDatahub/data
```

Pulls the data with the given query from Cumulocity IoT DataHub.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|sql (string)| required SQL query body parameter to pull the data
|fileName (string)| required file name body parameter to store the pulled data

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/importFromDatahub/data' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"sql":"select * from t23897369DataLake.\"c8y-dremio\".t23897369.alarms","fileName":"cdhData"}'
```

**Example Response**

```
200 - OK

{'id': '159643788874_Tasks',
 'name': 'cdhData',
 'createdAt': 'Mon Aug  3 12:28:08 2020',
 'type': 'DATAHUB',
 'cronExpression': '',
 'status': 'RUNNING',
 'individualTasks': {'159643788896_DataHub': {'pID': '20432',
   'status': 'RUNNING',
   'type': 'DATAHUB',
   'id': '159643788896_DataHub',
   'message': 'Pulling Data from DataHub',
   'executedAt': 'Mon Aug  3 12:28:08 2020'}},
 'projectID': '1601355085_Project',
 'projectName': 'DemoProject',
 'recurrence': 'ONE_TIME',
 'startDate': '',
 'startTimeH': '',
 'startTimeM': '',
 'properties': [{'key': 'file_name',
   'label': 'File Name',
   'value': 'cdhData'}]}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/1601355085_Project/resources/importFromDatahub/data' \
--header 'Content-Type: application/json' \
--data-raw '{"sql":"select * from t23897369DataLake.\"c8y-dremio\".t23897369.alarms","fileName":"cdhData"}'
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
409 - Conflict

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/importFromDatahub/data' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"sql":"select * from t23897369DataLake.\"c8y-dremio\".t23897369.alarms","fileName":"cdhData"}'
```

**Example Response**

```
409 - Conflict

{
    "message": "File name already exists. Please provide another name",
    "errorCode": 409,
    "exception": "Duplicate name"
}
```
