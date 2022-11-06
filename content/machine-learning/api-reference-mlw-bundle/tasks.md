---
title: Tasks
layout: redirect
weight: 10


aliases:
  - /machine-learning/api-reference-mlw/#tasks
---

Operations on MLW tasks.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### GET - Get the list of tasks in the system

```
{{url}}/service/mlw/tasks
```

Gets the list of tasks running or completed in the system.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/tasks' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "656ea4",
            "name": "sensorData2",
            "createdAt": "Mon Sep 28 10:06:49 2020",
            "type": "C8YDATA",
            "cronExpression": "",
            "status": "Not Scheduled",
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
        },

    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/tasks'
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

### GET - Get the details of a parent task

```
{{url}}/service/mlw/tasks/{{parenttaskID}}
```

Gets the details of the parent task running or completed.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|parenttaskID|{{parenttaskID}}



**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/tasks/656ea4' \
--header 'Authorization: {{auth}}'
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
            "status": "COMPLETED",
            "dateFrom": "2020-07-03T06:00:00.000Z",
            "dateTo": "2020-09-28T07:00:10.509Z",
            "message": "Data Saved to Data Section",
            "fileSaved": true
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

curl --location --request GET '{{url}}/service/mlw/tasks/656ea4'
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

### DELETE - Delete a parent task

```
{{url}}/service/mlw/tasks/{{parenttaskID}}
```

Deletes and stops all the individual tasks running under a parent task and delete the parent task.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|parenttaskID|{{parenttaskID}}

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/tasks/656ea4' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK
{
    "data": {
        "1600941378514": {
            "id": "1600941378514",
            "name": "cast",
            "createdAt": "Thu Sep 24 09:56:18 2020",
            "sortTime": 1600941378,
            "type": "NN",
            "individualTasks": {
                "1600941378153": {
                    "status": "COMPLETED",
                    "type": "NN",
                    "projectID": "0f981b26132d412097ee5e54a257ce9f",
                    "log": {
                        "ARCH_READ": {
                            "timestamp": "2020-09-24 09:56:18.299939",
                            "type": "INFO",
                            "message": "File read successful.",
                            "error": ""
                        },
                        "ARCH_CREATE_LAYER": {
                            "timestamp": "2020-09-24 09:56:18.301050",
                            "type": "INFO",
                            "message": "layers are ordered.",
                            "error": ""
                        },
                        "DATA_INIT": {
                            "timestamp": "2020-09-24 09:56:19.628340",
                            "type": "INFO",
                            "message": "train and validation folder exist.",
                            "error": ""
                        },
                        "DATA_PROCESS": {
                            "timestamp": "2020-09-24 09:56:19.947158",
                            "type": "INFO",
                            "message": "Data processing complete",
                            "error": ""
                        },
                        "COMPILE": {
                            "timestamp": "2020-09-24 09:56:19.948185",
                            "type": "INFO",
                            "message": "Model compilation successful",
                            "error": ""
                        },
                        "TRAIN": {
                            "timestamp": "2020-09-24 11:03:40.438399",
                            "type": "INFO",
                            "message": "Model training complete",
                            "error": ""
                        },
                        "SAVE": {
                            "timestamp": "2020-09-24 11:03:41.259142",
                            "type": "INFO",
                            "message": "Model saved successfully. --> cast_1600941378.onnx",
                            "error": ""
                        }
                    },
                    "properties": [],
                    "message": "Model Saved to Model Section",
                    "history": [
                        {
                            "epoch": 1,
                            "acc": 0.6681777238845825,
                            "loss": 0.9347285657499664,
                            "lr": 9.999999747378752e-05,
                            "val_acc": 0.7475177049636841,
                            "val_loss": 0.5210347923826664
                        },
                        {
                            "epoch": 2,
                            "acc": 0.7357207536697388,
                            "loss": 0.5306199711164019,
                            "lr": 9.999999747378752e-05,
                            "val_acc": 0.8241134881973267,
                            "val_loss": 0.4010832756757736
                        },
                        {
                            "epoch": 3,
                            "acc": 0.8236627578735352,
                            "loss": 0.3880086645267816,
                            "lr": 9.999999747378752e-05,
                            "val_acc": 0.8794326186180115,
                            "val_loss": 0.2899192896612147
                        },
                        {
                            "epoch": 4,
                            "acc": 0.8703535795211792,
                            "loss": 0.3042577663546298,
                            "lr": 9.999999747378752e-05,
                            "val_acc": 0.9290780425071716,
                            "val_loss": 0.20286435729011576
                        },
                        {
                            "epoch": 5,
                            "acc": 0.9023874402046204,
                            "loss": 0.2476639048612642,
                            "lr": 9.999999747378752e-05,
                            "val_acc": 0.9517730474472046,
                            "val_loss": 0.16410305897923225
                        }
                    ],
                    "tasksID": "1600941378514",
                    "taskName": "cast",
                    "id": "1600941378153",
                    "executedAt": "Thu Sep 24 09:56:18 2020",
                    "pID": "68",
                    "fileName": "./MLW/0f981b26132d412097ee5e54a257ce9f/Model/cast_1600941378.onnx",
                    "completedAt": "Thu Sep 24 11:03:41 2020",
                    "fileSaved": true
                }
            },
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "projectName": "blah project",
            "startDate": "2020-09-24",
            "startTimeH": "09",
            "startTimeM": "56",
            "properties": [
                {
                    "key": "problemType",
                    "label": "Problem Type",
                    "value": "classification"
                },
                {
                    "key": "optimizer",
                    "label": "Optimizer",
                    "value": "adam"
                },
                {
                    "key": "learningRate",
                    "label": "Learning Rate",
                    "value": 0.0001
                },
                {
                    "key": "loss",
                    "label": "Loss",
                    "value": "categorical_crossentropy"
                },
                {
                    "key": "metrics",
                    "label": "Metrics",
                    "value": [
                        "accuracy"
                    ]
                },
                {
                    "key": "epoch",
                    "label": "Epoch",
                    "value": 5
                },
                {
                    "key": "testSize",
                    "label": "Test Size",
                    "value": 0.3
                },
                {
                    "key": "batchSize",
                    "label": "Batch Size",
                    "value": 15
                }
            ],
            "cronExpression": "",
            "status": "NOT SCHEDULED",
            "recurrence": "ONE_TIME"
        },

    }
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request DELETE '{{url}}/service/mlw/tasks/656ea4'
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


### GET - Get the details of the individual task within a parent task

```
{{url}}/service/mlw/tasks/{{parenttaskID}}/task/{{taskID}}
```

Provides the complete details of the individual task running under a parent task.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|taskID|{{taskID}}
|parenttaskID|{{parenttaskID}}

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/tasks/656ea4/task/656ea5' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

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
    "status": "COMPLETED",
    "dateFrom": "2020-07-03T06:00:00.000Z",
    "dateTo": "2020-09-28T07:00:10.509Z",
    "message": "Data Saved to Data Section",
    "fileSaved": true
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/tasks/656ea4/task/656ea5'
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

### PUT - Early stop the neural network training task

```
{{url}}/service/mlw/tasks/{{parenttaskID}}/task/{{taskID}}
```

Triggers an early stop callback for the neural network training task

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_UPDATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|taskID|{{taskID}}
|parenttaskID|{{parenttaskID}}

**Example Request**

```
200 - OK

curl --location --request PUT '{{url}}/service/mlw/tasks/656ea4/task/1601289809_Task' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "message": "Triggered early stopping"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request PUT '{{url}}/service/mlw/tasks/656ea4/task/1601289809_Task'
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

### DELETE - Delete an individual task within the parent task

```
{{url}}/service/mlw/tasks/{{parenttaskID}}/task/{{taskID}}
```

Deletes and stops the individual task running under a parent task.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|taskID|{{taskID}}
|parenttaskID|{{parenttaskID}}

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/tasks/656ea4/task/656ea5' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK
{
    "data": [
        {
            "id": "656ea4",
            "name": "sensorData2",
            "createdAt": "Mon Sep 28 10:06:49 2020",
            "type": "C8YDATA",
            "cronExpression": "",
            "status": "Not Scheduled",
            "individualTasks": [],
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
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request DELETE '{{url}}/service/mlw/tasks/656ea4/task/656ea5'
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
