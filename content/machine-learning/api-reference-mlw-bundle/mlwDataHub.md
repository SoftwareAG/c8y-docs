---
title: DataHub data pull
layout: redirect
weight: 40

aliases:
  - /machine-learning/api-reference-mlw-bundle/#mlwDataHub
---

Operations on MLW data connectors - Data pull from {{< product-c8y-iot >}} DataHub.

### POST - Pull data from DataHub

```
{{url}}/service/mlw/projects/{{projectID}}/resources/importFromDatahub/data
```

Pulls the data with the given query from {{< product-c8y-iot >}} DataHub.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/importFromDatahub/data' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"sql":"select * from t23897369DataLake.\"c8y-dremio\".t23897369.alarms","fileName":"cdhData"}'
```

**Example Response**

```
200 - OK

{'id': '656ea4',
 'name': 'cdhData',
 'createdAt': 'Mon Aug  3 12:28:08 2020',
 'type': 'DATAHUB',
 'cronExpression': '',
 'status': 'RUNNING',
 'individualTasks': {'656ea5': {'pID': '20432',
   'status': 'RUNNING',
   'type': 'DATAHUB',
   'id': '656ea5',
   'message': 'Pulling Data from DataHub',
   'executedAt': 'Mon Aug  3 12:28:08 2020'}},
 'projectID': '0f981b26132d412097ee5e54a257ce9f',
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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/importFromDatahub/data' \
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
**Example Request**

```
409 - Conflict

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/importFromDatahub/data' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"sql":"select * from t23897369DataLake.\"c8y-dremio\".t23897369.alarms","fileName":""}'
```


**Example Response**

```
400 - Conflict

{
    "error": "general/Internal Error",
    "message": "Variable issue",
    "info": [
        {
            "loc": [
                "fileName"
            ],
            "msg": "Invalid characters in attribute name",
            "type": "value_error"
        }
    ]
}
```