---
title: Script execution
layout: redirect
weight: 90


aliases:
  - /machine-learning/api-reference-mlw-bundle/#codeExecution
---

Operations on MLW projects.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### POST - Execute a script

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/execute
```

Execute a python script.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|resourceID (string)|{{resource ID}}

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/execute' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":"script1"}'

```

**Example Response**

```
200 - OK

{
   "id":"160136083625_Tasks",
   "name":"script1",
   "createdAt":"Tue Sep 29 06:27:16 2020",
   "sortTime":1601360836,
   "type":"CODE",
   "individualTasks":[
      {
         "type":"CODE",
         "projectID":"1600784593_Project",
         "tasksID":"160136083625_Tasks",
         "taskName":"script1",
         "id":"160136083614_Tasks",
         "executedAt":"Tue Sep 29 06:27:16 2020",
         "pID":"140281294558976",
         "status":"RUNNING"
      }
   ],
   "projectID":"1600784593_Project",
   "projectName":"blah project",
   "startDate":"2020-09-29",
   "startTimeH":"06",
   "startTimeM":"27",
   "properties":[
      
   ],
   "cronExpression":"",
   "status":"EXECUTED",
   "recurrence":"ONE_TIME"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/execute' \
--header 'Content-Type: application/json' \
--data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":"script1"}'
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

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/execute' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"recurrence":"ONE_TIME","cronExpression":""}'
```

**Example Response**

```
400 Bad Request

{
   "message":"Missing parameter taskName",
   "errorCode":400,
   "exception":"Missing parameters"
}
```
