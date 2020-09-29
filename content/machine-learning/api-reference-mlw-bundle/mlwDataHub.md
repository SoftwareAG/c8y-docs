---
title: DataHub Data Pull
layout: redirect
weight: 40

aliases:
  - /machine-learning/api-reference-mlw-bundle/#mlwDataHub
---

Data pull from Cumulocity IoT DataHub.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### POST - Pull Data from Cumulocity IoT DataHub

```
{{url}}/service/mlw-cdh/projects/{{projectID}}/resources/importFromDatahub/data
```

Pulls the data with the given query from Cumulocity IoT DataHub.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|sql (string)|required SQL query to pull the data
|fileName (string)|required file name to store the pulled data

**Example Request**

```
200 - OK

curl --request POST "{{url}}/service/mlw-cdh/projects/{{projectID}}/resources/importFromDatahub/data" \
      --header "Authorization: {{auth}}" -F "sql=select * from \
            from t71836DataLake.c8y-dremio.t71836.measurements_Sensor1 \
            where MONTH=9 \
            LIMIT 800;" -F "fileName=cdhData"
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
 'projectID': '1596437282_Project',
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

curl --request GET "{{url}}/service/mlw-cdh/projects/{{projectID}}/resources/importFromDatahub/data"
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```

**Example Request**

```
409 - Error

curl --request POST "{{url}}/service/mlw-cdh/projects/{{projectID}}/resources/importFromDatahub/data" \
      --header "Authorization: {{auth}}" -F "sql=select * from \
            from t71836DataLake.c8y-dremio.t71836.measurements_Sensor1 \
            where MONTH=9 \
            LIMIT 800;" -F "fileName=cdhData"
```

**Example Response**

```
409 - Error

{
    "message": "File name already exists. Please provide another name",
    "errorCode": 409,
    "exception": "Duplicate name"
}
```




