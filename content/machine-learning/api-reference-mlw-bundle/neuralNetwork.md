---
title: Neural network
layout: redirect
weight: 80


aliases:
  - /machine-learning/api-reference-mlw-bundle/#neuralNetwork
---

Neural network training.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### POST - Start the training process of the neural network

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/trainNN
```

Train a neural network model using architecture file.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID
|batchSize (integer)| required batchSize body parameter to train model
|epoch (integer)| required epoch body parameter to train model
|stepPerEpoch (integer)| required stepPerEpoch body parameter to train model
|learningRate (float)| required learningRate body parameter to train model
|loss (string)| required loss function body parameter to train model
|metrics (list)| required metrics body parameter to train model
|optimizer (string)| required optimizer body parameter to train model
|testSize (float)| required testSize body parameter to train model
|recurrence (string)| required ONE_TIME/REPEAT
|cronExpression (string)| mandatory Cron expression body parameter if recurrence is "REPEAT"
|modelName (string)| required modelName body parameter
|dataID (string)| required resource ID of data (body parameter)
|codeID (string)| optional resource ID of pre-processing script (body parameter)
|problemType (string)| required classification/regression
|startDate (string)| optional startDate body parameter in "%Y-%m-%dT%H:%M:%S.%fZ" format 

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/projects/{{projectID}}/resources/{{resourceID}}/trainNN' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"batchSize":15,"epoch":100,"stepPerEpoch":10,"learningRate":0.001,"loss":"categorical_crossentropy","metrics":["accuracy","f1"],"optimizer":"adam","testSize":0.3,"scriptOutput":"NA","recurrence":"ONE_TIME","cronExpression":"","modelName":"modelName","dataID":"1601289034_0614_Resource","codeID":"1601282978_0253_Resource","problemType":"classification","startDate": "2020-03-08T18:30:00.000Z"}'

```

**Example Response**

```
200 - OK

{
   "id":"1601358322415",
   "name":"modelName",
   "createdAt":"Tue Sep 29 05:45:22 2020",
   "sortTime":1601358322,
   "type":"NN",
   "individualTasks":[
      {
         "status":"INITIALISING",
         "type":"NN",
         "projectID":"1600784593_Project",
         "log":{

         },
         "properties":[

         ],
         "message":"Initialising",
         "history":[

         ],
         "tasksID":"1601358322415",
         "taskName":"modelName",
         "id":"1601358322191",
         "executedAt":"Tue Sep 29 05:45:22 2020",
         "pID":"1394"
      }
   ],
   "projectID":"1600784593_Project",
   "projectName":"blah project",
   "startDate":"2020-03-08",
   "startTimeH":"18",
   "startTimeM":"30",
   "timeZone":"UTC",
   "properties":[
      {
         "key":"problemType",
         "label":"Problem Type",
         "value":"classification"
      },
      {
         "key":"optimizer",
         "label":"Optimizer",
         "value":"adam"
      },
      {
         "key":"learningRate",
         "label":"Learning Rate",
         "value":0.001
      },
      {
         "key":"loss",
         "label":"Loss",
         "value":"categorical_crossentropy"
      },
      {
         "key":"metrics",
         "label":"Metrics",
         "value":[
            "accuracy",
            "f1"
         ]
      },
      {
         "key":"epoch",
         "label":"Epoch",
         "value":100
      },
      {
         "key":"testSize",
         "label":"Test Size",
         "value":0.3
      },
      {
         "key":"batchSize",
         "label":"Batch Size",
         "value":15
      }
   ],
   "cronExpression":"",
   "status":"NOT SCHEDULED",
   "recurrence":"ONE_TIME"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/projects/{{projectID}}/resources/{{resourceID}}/trainNN' \
--header 'Content-Type: text/plain' \
--data-raw '{"batchSize":15,"epoch":100,"stepPerEpoch":10,"learningRate":0.001,"loss":"categorical_crossentropy","metrics":["accuracy","f1"],"optimizer":"adam","testSize":0.3,"scriptOutput":"NA","recurrence":"ONE_TIME","cronExpression":"","modelName":"someName","dataID":"1601289034_0614_Resource","codeID":"1601282978_0253_Resource","problemType":"classification"}'
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
400 Bad Request

curl --location --request POST '{{url}}/projects/{{projectID}}/resources/{{resourceID}}/trainNN' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"batchSize":15,"epoch":100,"stepPerEpoch":10,"learningRate":0.001,"loss":"categorical_crossentropy","metrics":["accuracy","f1"],"optimizer":"Adam","testSize":0.3,"scriptOutput":"NA","recurrence":"ONE_TIME","cronExpression":"","modelName":"someName","dataID":"1600786268_0337_Resource"}'
```

**Example Response**

```
400 Bad Request

{
   "message":"one of mandatory hyperparameter not found",
   "errorCode":400,
   "exception":"one of mandatory hyperparameter not found"
}
```
