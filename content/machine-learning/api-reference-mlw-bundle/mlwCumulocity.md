---
title: Cumulocity Data Pull
layout: redirect
weight: 30


aliases:
  - /machine-learning/api-reference-mlw/#autoML
---

Operations on MLW Projects.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### GET - Get the list of devices in the C8Y inventory

```
{{url}}/service/mlw/listDevices
```

Get the list of devices in the C8Y inventory.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/listDevices' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "additionParents": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373/additionParents",
                "references": []
            },
            "owner": "vinayvinkumar@sag.com",
            "childDevices": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373/childDevices",
                "references": []
            },
            "childAssets": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373/childAssets",
                "references": []
            },
            "creationTime": "2020-09-15T12:43:07.121Z",
            "lastUpdated": "2020-09-15T12:43:07.121Z",
            "childAdditions": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373/childAdditions",
                "references": []
            },
            "name": "robot",
            "assetParents": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373/assetParents",
                "references": []
            },
            "deviceParents": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373/deviceParents",
                "references": []
            },
            "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/373",
            "id": "373",
            "c8y_IsDevice": {},
            "c8y_SupportedMeasurements": [
                "Sensor1"
            ],
            "c8y_SupportedOperations": [
                "c8y_Restart",
                "c8y_Configuration",
                "c8y_Software",
                "c8y_Firmware",
                "c8y_Command"
            ]
        },
        {
            "additionParents": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446/additionParents",
                "references": []
            },
            "owner": "vinayvinkumar@sag.com",
            "childDevices": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446/childDevices",
                "references": []
            },
            "childAssets": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446/childAssets",
                "references": []
            },
            "creationTime": "2020-09-15T12:44:39.791Z",
            "lastUpdated": "2020-09-15T12:44:39.791Z",
            "childAdditions": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446/childAdditions",
                "references": []
            },
            "name": "IoT_Robot",
            "assetParents": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446/assetParents",
                "references": []
            },
            "deviceParents": {
                "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446/deviceParents",
                "references": []
            },
            "self": "http://t71836.basic.stage.c8y.io/inventory/managedObjects/446",
            "id": "446",
            "c8y_IsDevice": [],
            "c8y_SupportedMeasurements": [
                "Sensors"
            ],
            "c8y_SupportedOperations": [
                "c8y_Restart",
                "c8y_Configuration",
                "c8y_Software",
                "c8y_Firmware",
                "c8y_Command"
            ]
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/automl'
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

### GET - Get the list of measurement from the C8Y inventory

```
{{url}}/service/mlw/listDevices/{{deviceID}}
```

Get the list of measurement from the C8Y inventory

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/listDevices/446' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```

**Example Response**

```
200 - OK

{
    "data": [
        "sensor4",
        "sensor2",
        "sensor3",
        "sensor1"
    ]
}

```

**Example Request**

```
401 - Unauthorized

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/listDevices/446' \
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


### POST - Download the data from the inventory for the selected device ID 

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/automl
```

Creates a new project with given project name and desciption.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|fileName |Filled form values
|dateFrom |required description of the project
|timeFromH|column name which is target
|timeFromM|
|dateTo|
|timeToH|
|timeToM|
|source|
|series|

**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/importFromCumulocity/data' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0' \
--header 'Content-Type: application/json' \
--data-raw '{"fileName":"sensorData2","dateFrom":"2020-07-03T06:00:00.000Z","timeFromH":11,"timeFromM":30,"dateTo":"2020-09-28T07:00:10.509Z","timeToH":12,"timeToM":30,"source":"446","series":["sensor4","sensor2","sensor3","sensor1"]}'
```

**Example Response**

```
200 - OK

{
    "id": "1601287609_Tasks",
    "name": "sensorData2",
    "createdAt": "Mon Sep 28 10:06:49 2020",
    "type": "C8YDATA",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "1601287609_0411_Cumulocity",
            "tasksID": "1601287609_Tasks",
            "taskName": "sensorData2",
            "type": "C8YDATA",
            "executedAt": "Mon Sep 28 10:06:49 2020",
            "deviceID": "446",
            "projectID": "1601283001_Project",
            "fileName": "./MLW/1601283001_Project/Data/sensorData2.csv",
            "pID": "987",
            "status": "In Progress"
        }
    ],
    "projectID": "1601283001_Project",
    "projectName": "ExampleProject",
    "properties": [
        {
            "key": "deviceID",
            "label": "Device ID",
            "value": "446"
        },
        {
            "key": "dateFrom",
            "label": "Date From",
            "value": "2020-07-03T06:00:00.000Z"
        },
        {
            "key": "dateTo",
            "label": "Date To",
            "value": "2020-09-28T07:00:10.509Z"
        },
        {
            "key": "columnNames",
            "label": "Measurements",
            "value": [
                "sensor4",
                "sensor2",
                "sensor3",
                "sensor1"
            ]
        },
        {
            "key": "aggregationType",
            "label": "Aggregation Type",
            "value": "None"
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1601287609
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/importFromCumulocity/data' \
--data-raw '{"fileName":"sensorData2","dateFrom":"2020-07-03T06:00:00.000Z","timeFromH":11,"timeFromM":30,"dateTo":"2020-09-28T07:00:10.509Z","timeToH":12,"timeToM":30,"source":"446","series":["sensor4","sensor2","sensor3","sensor1"]}'
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