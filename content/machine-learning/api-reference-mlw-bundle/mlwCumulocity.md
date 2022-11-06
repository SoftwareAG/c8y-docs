---
title:  Cumulocity data pull
layout: redirect
weight: 30


aliases:
  - /machine-learning/api-reference-mlw/#autoML
---

Operations on MLW data connectors - Data pull from Cumulocity IoT.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### GET - Get the list of devices from the C8Y inventory

```
{{url}}/service/mlw/listDevices
```

Gets the list of devices from the C8Y inventory.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/listDevices' \
--header 'Authorization: {{auth}}'
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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl'
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

### GET - Get the list of measurements from the C8Y inventory

```
{{url}}/service/mlw/listDevices/{{deviceID}}
```

Gets the list of measurements from the C8Y inventory.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|deviceID (string)| device ID of the registered device

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/listDevices/446' \
--header 'Authorization: {{auth}}'
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

curl --location --request GET '{{url}}/service/mlw/listDevices/446' \
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
{{url}}/service/mlw/projects/{{projectID}}/resources/importFromCumulocity/data
```

Downloads the data in the data section from Cumulocity IoT inventory wih given aggregation, it is a long running process.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|resourceID (string)|{{resource ID}}
|fileName |name of the file as body parameter
|dateFrom |date from as body parameter
|timeFromH|time from (hour) as body parameter
|timeFromM|time from (minute) as body parameter
|dateTo|date to  as body parameter
|timeToH|time to (hour) as body parameter
|timeToM|time to (minute) as body parameter
|source| device ID as body parameter
|series| list of measurement names as body parameter

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/importFromCumulocity/data' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"fileName":"sensorData2","dateFrom":"2020-07-03T06:00:00.000Z","timeFromH":11,"timeFromM":30,"dateTo":"2020-09-28T07:00:10.509Z","timeToH":12,"timeToM":30,"source":"446","series":["sensor4","sensor2","sensor3","sensor1"]}'
```

**Example Response**

```
200 - OK

{
    "id": "656ea4",
    "name": "sensorData2",
    "createdAt": "Mon Sep 28 10:06:49 2020",
    "type": "C8YDATA",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "656ea5",
            "tasksID": "656ea4",
            "taskName": "sensorData2",
            "type": "C8YDATA",
            "executedAt": "Mon Sep 28 10:06:49 2020",
            "deviceID": "446",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "fileName": "./MLW/0f981b26132d412097ee5e54a257ce9f/Data/sensorData2.csv",
            "pID": "987",
            "status": "In Progress"
        }
    ],
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/importFromCumulocity/data' \
--data-raw '{"fileName":"sensorData2","dateFrom":"2020-07-03T06:00:00.000Z","timeFromH":11,"timeFromM":30,"dateTo":"2020-09-28T07:00:10.509Z","timeToH":12,"timeToM":30,"source":"446","series":["sensor4","sensor2","sensor3","sensor1"]}'
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
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/importFromCumulocity/data' \
--data-raw '{"fileName":"","dateFrom":"2020-07-03T06:00:00.000Z","timeFromH":11,"timeFromM":30,"dateTo":"2020-09-28T07:00:10.509Z","timeToH":12,"timeToM":30,"source":"446","series":["sensor4","sensor2","sensor3","sensor1"]}'
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
