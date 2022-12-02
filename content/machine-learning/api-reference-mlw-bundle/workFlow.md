---
title: Training WorkFlow
layout: redirect
weight: 50

aliases:
  - /machine-learning/api-reference-mlw-bundle/#workFlow
---

Training WorkFlow in MLW.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### POST - Retrain Machine Learning models using WorkFlow

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourcesID}}/workflow
```

Trains the WorkFlow using the already created AutoML model, pre-processing script and the dataset.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID
|taskName (string)| required body parameter of a task name to start the re-training
|cronExpression (string)| required body parameter of a cron expression
|recurrence (string)| required body parameter of a recurrence (ONE_TIME or REPEAT)
|startDate (string)| optional startDate body parameter in "%Y-%m-%dT%H:%M:%S.%fZ" format
|testSize (float)| optional testSize body parameter for cross-validation (default is 0.2)

**Example Request**

```
200 - OK

curl --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/656ea5/workflow" \
     --header "Authorization: {{auth}}" \
     --header "Content-Type: application/json" \
     --data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":"workFlowTrain","startDate": "2020-03-08T18:30:00.000Z","testSize":0.33}'
```

**Example Response**

```
200 - OK

{
   "id":"656ea4",
   "name":"workFlowTrain",
   "createdAt":"Mon Sep 28 10:31:59 2020",
   "type":"WORKFLOW",
   "sortTime":1601289119,
   "cronExpression":"",
   "status":"RUNNING",
   "individualTasks":[
      {
         "status":"RUNNING",
         "type":"WORKFLOW",
         "message":"In Progress",
         "id":"656ea5",
         "projectID":"0f981b26132d412097ee5e54a257ce9f",
         "tasksID":"656ea4",
         "listOfModelAccuracy":[  
         ],
         "executedAt":"Mon Sep 28 10:31:59 2020",
         "pID":"140281294558976"
      }
   ],
   "projectID":"0f981b26132d412097ee5e54a257ce9f",
   "projectName":"Demo project",
   "recurrence":"ONE_TIME",
   "startDate":"2020-03-08",
   "startTimeH":"18",
   "startTimeM":"30",
   "timeZone":"UTC",
   "workflowName":"yyy",
   "testSize":"0.33"
   "properties":[
      {
         "key":"targetVar",
         "label":"Target variable",
         "value":"target"
      },
      {
         "key":"problem_type",
         "label":"Problem Type",
         "value":"Classification"
      },
      {
         "key":"dataSize",
         "label":"Data Size",
         "value":[
            "644",
            "3"
         ]
      },
      {
         "key":"model_name",
         "label":"Model Name",
         "value":"admsModel"
      }
   ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/656ea5/workflow" \
     --header "Content-Type: application/json" \
     --data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":"workFlowTrain"}'
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

curl --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/656ea5/workflow" \
     --header "Authorization: {{auth}}" \
     --header "Content-Type: application/json" \
     --data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":"workFlowTrain"}'
```

**Example Response**

```
409 - Conflict

{
    "message": "Task name already exists. Please provide another name",
    "errorCode": 409,
    "exception": "Duplicate name"
}
```

**Example Request**

```
409 - Conflict

curl --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/656ea5/workflow" \
     --header "Authorization: {{auth}}" \
     --header "Content-Type: application/json" \
     --data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":""}'
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
                "taskName"
            ],
            "msg": "Invalid characters in attribute name",
            "type": "value_error"
        }
    ]
}
```
