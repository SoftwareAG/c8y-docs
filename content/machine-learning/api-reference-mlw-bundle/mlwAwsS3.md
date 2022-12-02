---
title: AWS S3 data pull
layout: redirect
weight: 45

aliases:
  - /machine-learning/api-reference-mlw-bundle/#mlwAwsS3
---

Operations on MLW data connectors - Download files from AWS S3.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### GET - Names of all AWS S3 buckets

```
{{url}}/service/mlw/downloadFromS3/buckets
```

List names of all AWS S3 buckets.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/downloadFromS3/buckets' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "c8y-checkmarx-scan",
            "name": "c8y-checkmarx-scan"
        },
        {
            "id": "mlwbucket",
            "name": "mlwbucket"
        },
        {
            "id": "pmml-xsd",
            "name": "pmml-xsd"
        },
        {
            "id": "zementis-server-10504",
            "name": "zementis-server-10504"
        },
        {
            "id": "zementis.test",
            "name": "zementis.test"
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/downloadFromS3/buckets' \
--header 'Content-Type: application/json'
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

### GET - Names of all files within an AWS S3 bucket

```
{{url}}/service/mlw/downloadFromS3/{{bucketName}}/files
```

Lists the names of all files within an AWS S3 buckets.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|bucketName (string)| required path variable of an existing AWS S3 bucket name

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/downloadFromS3/mlwbucket/files' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "ZADDrinking.png",
            "name": "ZADDrinking.png",
            "size": 78109
        },
        {
            "id": "admissions.csv",
            "name": "admissions.csv",
            "size": 17192
        },
        {
            "id": "admissionstest.json",
            "name": "admissionstest.json",
            "size": 35854
        },
        {
            "id": "casting_data.zip",
            "name": "casting_data.zip",
            "size": 72256364
        },
        {
            "id": "identationError.py",
            "name": "identationError.py",
            "size": 68
        },
        {
            "id": "mlwfiles/2ndfolder/cast_def_0_9921.png",
            "name": "mlwfiles/2ndfolder/cast_def_0_9921.png",
            "size": 10947
        },
        {
            "id": "mlwfiles/anomalySampleData.csv",
            "name": "mlwfiles/anomalySampleData.csv",
            "size": 8004
        },
        {
            "id": "mob.ipynb",
            "name": "mob.ipynb",
            "size": 48499
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/downloadFromS3/mlwbucket/files' \
--header 'Content-Type: application/json'
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
404 - Not Found

curl --location --request GET '{{url}}/service/mlw/downloadFromS3/nomlwbucket/files' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json'
```

**Example Response**

```
404 - Not Found

{
    "message": "The specified bucket does not exist",
    "errorCode": 404,
    "exception": "invalid/error"
}
```

### POST - Download a file from AWS S3 bucket

```
{{url}}/service/mlw/projects/{{projectID}}/resources/downloadFromS3/{{bucketName}}/download
```

Downloads the file from AWS S3 bucket.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|bucketName (string)| required path variable of an existing AWS bucket name
|name (string)| required name body parameter to download an existing file from AWS S3

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/downloadFromS3/mlwbucket/download' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"mlwfiles/anomalySampleData.csv"}'
```

**Example Response**

```
200 - OK

{
    "id": "656ea4",
    "name": "anomalySampleData_1613992681",
    "createdAt": "Mon Feb 22 11:18:01 2021",
    "type": "S3",
    "cronExpression": "",
    "status": "RUNNING",
    "individualTasks": {
        "656ea4": {
            "pID": "140239630587648",
            "status": "RUNNING",
            "type": "S3",
            "id": "656ea4",
            "message": "Downloading Data from S3",
            "executedAt": "Mon Feb 22 11:18:01 2021"
        }
    },
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
    "sortTime": 1613992681,
    "projectName": "DemoProject",
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "properties": [
        {
            "key": "file_name",
            "label": "File Name",
            "value": "anomalySampleData.csv"
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/downloadFromS3/mlwbucket/download' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"mlwfiles/anomalySampleData.csv"}'
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

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/downloadFromS3/mlwbucket/download' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"mlwfiles/anomalySampleData.csv"}'
```

**Example Response**

```
409 - Conflict

{
    "message": "File already exists.",
    "errorCode": 409,
    "exception": "Duplicate name"
}
```
