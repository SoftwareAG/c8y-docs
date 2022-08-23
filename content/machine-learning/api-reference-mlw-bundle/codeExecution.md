---
title: Script execution
layout: redirect
weight: 90


aliases:
  - /machine-learning/api-reference-mlw-bundle/#codeExecution
---

Operations on MLW projects.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### POST - Execute a script

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/execute
```

Execute a python script.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID
|recurrence (string)| required ONE_TIME/REPEAT
|cronExpression (string)| mandatory Cron expression body parameter if recurrence is "REPEAT"
|taskName (string)| required taskName body parameter
|startDate (string)| optional startDate body parameter in "%Y-%m-%dT%H:%M:%S.%fZ" format

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/execute' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"recurrence":"ONE_TIME","cronExpression":"","taskName":"script1","startDate": "2020-03-08T18:30:00.000Z"}'

```

**Example Response**

```
200 - OK

{
   "id":"656ea4",
   "name":"script1",
   "createdAt":"Tue Sep 29 06:27:16 2020",
   "sortTime":1601360836,
   "type":"CODE",
   "individualTasks":[
      {
         "type":"CODE",
         "projectID":"0f981b26132d412097ee5e54a257ce9f",
         "tasksID":"656ea4",
         "taskName":"script1",
         "id":"656ea5",
         "executedAt":"Tue Sep 29 06:27:16 2020",
         "pID":"140281294558976",
         "status":"RUNNING"
      }
   ],
   "projectID":"0f981b26132d412097ee5e54a257ce9f",
   "projectName":"blah project",
   "startDate":"2020-03-08",
   "startTimeH":"18",
   "startTimeM":"30",
   "timeZone":"UTC",
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
