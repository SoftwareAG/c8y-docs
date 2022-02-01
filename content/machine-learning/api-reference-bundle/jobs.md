---
title: Jobs
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/api-reference/#jobs
---

Operations on jobs scheduled for processing device data.

>**Info:** Currently, jobs can be scheduled using PMML models and model groups only.

### Domain model
#### JobConfiguration
|Name|Type|Description|
|:-----|:-----|:-----|
|jobName|String|Name of the job.|
|jobDescription|String|Description of the job.|
|groupOrDeviceId|Number|ID of the device or device group whose measurements will be <br> processed when the job executes.|
|modelOrGroup|String|Name of the model or model group which will be used to process the device measurements.|
|applyAllModels|boolean|Boolean value to specify if the data needs to be processed against all the models <br> in a model group.|
|modelToDeviceMappings|Map|Map with the model's inputs as the keys and the measurements as the <br> corresponding values. These mappings ensure which measurement <br> reading maps to which model input.|
|jobSchedule|JobSchedule|Information about when the job should be scheduled for executions.|

#### JobSchedule
|Name|Type|Description|
|:-----|:-----|:-----|
|frequency|String|Frequency of job execution. Can be either `periodic` or `once`.|
|cronExpression|String|CRON expression to specify the execution schedule for a periodic job. Follow <br> [http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) <br> for more info on CRON.|
|dataFromPreviousNSeconds|Number| Number of seconds in the past from which <br> data should be fetched for processing. The value must not exceed 86400 i.e. 24 hours.|
|timeZone|String|Time zone in which the periodic job should be scheduled.|
|scheduleAt|String|Datetime string in the future when the job should be scheduled.|
|dataFrom|String|Datetime string from the past which should be considered as the starting point <br> for data to be fetched for processing.|'
|dataTo|String|Datetime string from the past which should be considered as the ending point <br> for data to be fetched for processing.|

>**Info:**
<br>1. For *periodic* frequency, `cronExpression`, `dataFromPreviousNSeconds` and `timeZone` fields are mandatory.
<br>2. For *once* frequency, `scheduleAt`, `dataFrom` and `dataTo` fields are mandatory and should adhere to the ISO-8601 date-time format
<br> &emsp; i.e. "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", for instance "2019-12-30T22:59:50.235+05:30".
<br> &emsp; The difference between `dataFrom` and `dateTo` must not exceed 24 hours.

### POST - Create new job

```
{{url}}/service/zementis/job
```

Create a new job for scheduled data processing.

On creation, a `jobId` is automatically assigned to the job and `jobCreationDate` will also be added to the response.

Note that if the job name or description contain any unsafe characters, all such characters will be converted to underscore automatically.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type| application/json

**BODY**
```
{
   "jobName": "<jobName>",
   "jobDescription": "<jobDescription>",
   "groupOrDeviceId" : <groupOrDeviceId>,
   "modelOrGroup": "<modelOrGroup>",
   "applyAllModels": <true | false>,
   "modelToDeviceMappings": {
      "<Model_Input1>": "<measurementType>.<seriesName1>.value",
      "<Model_Input2>": "<measurementType>.<seriesName2>.value",
      "<Model_Input3>": "<measurementType>.<seriesName3>.value"
   },
   "jobSchedule": {
      "frequency": "<periodic | once>",
      "cronExpression": "<cronExpression>",
      "dataFromPreviousNSeconds": <dataFromPreviousNSeconds>,
      "timeZone":"<timeZone>",
      "scheduleAt": "<scheduleAt>",
      "dataFrom": "<dataFrom>",
      "dataTo": "<dataTo>"
   }
}
```

**Example Request**

```
201 - Created

curl --request POST "{{url}}/service/zementis/job" --header "Authorization: {{auth}}"

{
    "jobName": "ActivityDetectionJob",
    "jobDescription": "Detect activities",
    "modelOrGroup": "DecisionTreeClassifier",
    "groupOrDeviceId": 15889549,
    "applyAllModels": false,
    "modelToDeviceMappings": {
        "accelerationY": "c8y_Acceleration.accelerationY.value",
        "accelerationX": "c8y_Acceleration.accelerationX.value",
        "accelerationZ": "c8y_Acceleration.accelerationZ.value"
    },
    "jobSchedule": {
        "frequency": "once",
        "scheduleAt": "2020-03-18T17:42:00.000Z",
        "dataFrom": "2020-02-26T10:20:00.000Z",
        "dataTo": "2020-02-27T10:20:00.000Z"
    }
}
```

**Example Response**

```
201 - Created

{
    "jobId": 15898918,
    "jobName": "ActivityDetectionJob",
    "jobDescription": "Detect activities",
    "jobCreationDate": "2020-03-18T17:41:25.901Z",
    "modelOrGroup": "DecisionTreeClassifier",
    "applyAllModels": false,
    "groupOrDeviceId": 15889549,
    "modelToDeviceMappings": {
       "accelerationY": "c8y_Acceleration.accelerationY.value",
       "accelerationX": "c8y_Acceleration.accelerationX.value",
       "accelerationZ": "c8y_Acceleration.accelerationZ.value"
    },
    "jobSchedule": {
       "frequency": "once",
       "cronExpression": "",
       "timeZone": "Asia/Kolkata",
       "dataFromPreviousNSeconds": 0,
       "scheduleAt": "2020-03-18T17:42:00.000Z",
       "dataFrom": "2020-02-26T10:20:00.000Z",
       "dataTo": "2020-02-27T10:20:00.000Z"
    }
}
```

**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/job" --header "Authorization: {{auth}}"

{
    "jobName": "ActivityDetectionJob",
    "jobDescription": "Detect activities",
    "modelOrGroup": "DecisionTreeClassifier",
    "groupOrDeviceId": 15889549,
    "applyAllModels":false,
    "modelToDeviceMappings": {
        "accelerationY": "c8y_Acceleration.accelerationY.value",
        "accelerationX": "c8y_Acceleration.accelerationX.value",
        "accelerationZ": "c8y_Acceleration.accelerationZ.value"
    },
    "jobSchedule": {
        "frequency": "invalid",
        "scheduleAt": "2020-04-18T17:42:00.000Z",
        "dataFrom": "2020-02-26T10:20:00.000Z",
        "dataTo": "2020-02-27T10:20:00.000Z"
    }
}
```

**Example Response**

```
400 - Bad Request

{
    "errors": [
        "frequency can be either once or periodic."
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/job"
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

curl --request POST "{{url}}/service/zementis/job" --header "Authorization: {{auth}}"

{
    "jobName": "ActivityDetectionJob",
    "jobDescription": "Detect activities",
    "modelOrGroup": "DecisionTreeClassifier",
    "groupOrDeviceId": 123456,
    "applyAllModels":false,
    "modelToDeviceMappings": {
        "accelerationY": "c8y_Acceleration.accelerationY.value",
        "accelerationX": "c8y_Acceleration.accelerationX.value",
        "accelerationZ": "c8y_Acceleration.accelerationZ.value"
    },
    "jobSchedule": {
        "frequency": "once",
        "scheduleAt": "2020-04-18T17:42:00.000Z",
        "dataFrom": "2020-02-26T10:20:00.000Z",
        "dataTo": "2020-02-27T10:20:00.000Z"
    }
}
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Device or group with id 123456 does not exist or it is invalid"
    ]
}
```

### GET - List available jobs

```
{{url}}/service/zementis/jobs
```

Retrieves all the available jobs. Use the `jobId` of these jobs as identifiers for all operations requiring the {{jobId}} path variable.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|withTotalPages (boolean)|optional request parameter for displaying total pages; default value is true.
|currentPage (Number)|optional request parameter for navigating to a particular page; default value is 1.
|pageSize (Number)|optional request parameter for specifying number of entries to be shown in a single page; default value is 5.


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/jobs" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "next": null,
    "prev": null,
    "statistics": {
      "currentPage": 1,
      "totalPages": 1,
      "pageSize": 5
    },
    "jobs": [
      {
        "jobId": 15898918,
        "jobName": "ActivityDetectionJob",
        "jobDescription": "Detect activities",
        "jobCreationDate": "2020-03-18T17:41:25.901Z",
        "modelOrGroup": "DecisionTreeClassifier",
        "applyAllModels": false,
        "groupOrDeviceId": 15889549,
        "modelToDeviceMappings": {
            "accelerationY": "c8y_Acceleration.accelerationY.value",
            "accelerationX": "c8y_Acceleration.accelerationX.value",
            "accelerationZ": "c8y_Acceleration.accelerationZ.value"
        },
        "jobSchedule": {
            "frequency": "once",
            "cronExpression": "",
            "timeZone": "Asia/Kolkata",
            "dataFromPreviousNSeconds": 0,
            "scheduleAt": "2020-03-18T17:42:00.000Z",
            "dataFrom": "2020-02-26T10:20:00.000Z",
            "dataTo": "2020-02-27T10:20:00.000Z"
        }
      },
      {
        "jobId": 15896925,
        "jobName": "AnomalyDetectionJob",
        "jobDescription": "Job involving many versions of Isolation Forest model to detect anomalies in devices",
        "jobCreationDate": "2020-02-27T14:23:16.557Z",
        "modelOrGroup": "AnomalyDetectionModels",
        "applyAllModels": true,
        "groupOrDeviceId": 15896385,
        "modelToDeviceMappings": {
            "rssi": "c8y_SignalStrengthWifi.rssi.value",
            "accelerationY": "c8y_Acceleration.accelerationY.value",
            "accelerationX": "c8y_Acceleration.accelerationX.value",
            "accelerationZ": "c8y_Acceleration.accelerationZ.value",
            "air_pressure": "c8y_Gyroscope.gyroX.value",
            "gyroX": "c8y_Gyroscope.gyroX.value",
            "gyroY": "c8y_Gyroscope.gyroY.value",
            "gyroZ": "c8y_Gyroscope.gyroZ.value",
            "lux": "c8y_Luxometer.lux.value",
            "compassX": "c8y_Compass.compassX.value",
            "compassY": "c8y_Compass.compassY.value",
            "compassZ": "c8y_Compass.compassZ.value"
        },
        "jobSchedule": {
            "frequency": "once",
            "cronExpression": "",
            "timeZone": "Asia/Calcutta",
            "dataFromPreviousNSeconds": 0,
            "scheduleAt": "2020-02-27T14:24:00.000Z",
            "dataFrom": "2020-02-26T12:30:00.000Z",
            "dataTo": "2020-02-27T12:30:00.000Z"
        }
      }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/jobs"
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


### GET - Get job information

```
{{url}}/service/zementis/job/{{jobId}}
```

Get information about a specific job.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job ID


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/15896925" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "jobId": 15896925,
    "jobName": "AnomalyDetectionJob",
    "jobDescription": "Job involving many versions of Isolation Forest model to detect anomalies in devices",
    "jobCreationDate": "2020-02-27T14:23:16.557Z",
    "modelOrGroup": "AnomalyDetectionModels",
    "applyAllModels": true,
    "groupOrDeviceId": 15896385,
    "modelToDeviceMappings": {
        "rssi": "c8y_SignalStrengthWifi.rssi.value",
        "accelerationY": "c8y_Acceleration.accelerationY.value",
        "accelerationX": "c8y_Acceleration.accelerationX.value",
        "accelerationZ": "c8y_Acceleration.accelerationZ.value",
        "air_pressure": "c8y_Gyroscope.gyroX.value",
        "gyroX": "c8y_Gyroscope.gyroX.value",
        "gyroY": "c8y_Gyroscope.gyroY.value",
        "gyroZ": "c8y_Gyroscope.gyroZ.value",
        "lux": "c8y_Luxometer.lux.value",
        "compassX": "c8y_Compass.compassX.value",
        "compassY": "c8y_Compass.compassY.value",
        "compassZ": "c8y_Compass.compassZ.value"
    },
    "jobSchedule": {
        "frequency": "once",
        "cronExpression": "",
        "timeZone": "Asia/Calcutta",
        "dataFromPreviousNSeconds": 0,
        "scheduleAt": "2020-02-27T14:24:00.000Z",
        "dataFrom": "2020-02-26T12:30:00.000Z",
        "dataTo": "2020-02-27T12:30:00.000Z"
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/15896925"
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

curl --request GET "{{url}}/service/zementis/job/000000" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Zementis job ID '00000' not found."
    ]
}
```

### GET - Get job status

```
{{url}}/service/zementis/job/{{jobId}}/status
```

Get status and execution duration of a specific job. If there are no ongoing executions, then the job's last execution status and duration will be fetched.

Note that the unit of `jobExecutionDuration` is milliseconds.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job ID


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/15896925/status" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "jobExecutionStatus": "Success",
    "jobExecutionDuration": "8930"
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/15896925/status"
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

curl --request GET "{{url}}/service/zementis/job/000000/status" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Zementis job ID '00000' not found."
    ]
}
```

### GET - Job execution history

```
{{url}}/service/zementis/job/{{jobId}}/history
```

Get execution history of a particular job. Lists all executions of that specific job. Use the `jobExecutionNumber` of these executions as identifiers for all operations requiring the {{executionId}} path variable.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job ID
|withTotalPages (boolean)|optional request paramter for displaying total pages; default value is false.
|currentPage (Number)|optional request parameter for navigating to a particular page; default value is 1.
|pageSize (Number)|optional request parameter for specifying number of entries to be shown in a single page; default value is 5.


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/15896925/history?withTotalPages=false" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "next": "/service/zementis/job/15896925/history?pageSize=5&currentPage=2",
    "prev": null,
    "statistics": {
        "currentPage": 1,
        "totalPages": null,
        "pageSize": 5
    },
    "jobExecutions": [
        {
            "jobId": 15896925,
            "jobExecutionNumber": 1,
            "isExecutionForDeviceGroup": true,
            "jobExecutionStartTime": "2020-02-27T14:24:00Z",
            "jobExecutionEndTime": "2020-02-27T14:24:08.930Z",
            "jobExecutionDuration": "8930",
            "jobExecutionStatus": "Success",
            "jobExecutionStatusMessage": []
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/15896925/history"
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

curl --request PUT "{{url}}/service/zementis/job/00000/history" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Zementis job ID '00000' not found."
    ]
}
```

### GET - Job execution detail

```
{{url}}/service/zementis/job/{{jobId}}/history/{{executionId}}
```

Get details of a specific job execution.

Note that the unit of `jobExecutionDuration` is milliseconds.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job ID
|executionId (string)|required path variable for execution ID


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/15896925/history/1" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "jobId": 15896925,
    "jobExecutionNumber": 1,
    "isExecutionForDeviceGroup": true,
    "jobExecutionStartTime": "2020-02-27T14:24:00Z",
    "jobExecutionEndTime": "2020-02-27T14:24:08.930Z",
    "jobExecutionDuration": "8930",
    "jobExecutionStatus": "Success",
    "jobExecutionStatusMessage": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/15896925/history/1"
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

curl --request GET "{{url}}/service/zementis/job/15896925/history/0" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Job Execution number 0 does not exist."
    ]
}
```

### GET - Job execution results

```
{{url}}/service/zementis/job/{{jobId}}/history/{{executionId}}/inferences
```

Get the results/inferences generated in a single job execution. These inferences are the predictions of the machine learning model against the data from the associated device/device group.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job ID
|executionId (string)|required path variable for execution ID
|withTotalPages (boolean)|optional request paramter for displaying total pages; default value is false.
|currentPage (Number)|optional request parameter for navigating to a particular page; default value is 1.


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/15896925/history/1/inferences" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "next": "/service/zementis/job/15896915/history/1/inferences?currentPage=2",
    "prev": null,
    "statistics": {
        "currentPage": 1,
        "totalPages": null,
        "numberOfDevices": 2,
        "numberOfModels": 4
    },
    "inferenceCollection": [
        {
            "recordCollection": [
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638525916, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709038523208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.968584665454545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForest"
              },
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638525918, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709031523208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.962584665454545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForestV2"
              },
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638525816, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709038323208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.969584645454545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForestV3"
              },
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638526916, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709038523208243, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.961584665424545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForestV4"
              }				
            ],
            "deviceId": 103030,
            "recordSize": 2000
        },
        {
            "recordCollection": [
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638525916, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709038523208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.968584665454545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForest"
              },
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638525918, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709031523208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.962584665454545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForestV2"
              },
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638525816, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709038323208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.969584645454545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForestV3"
              },
              {
                 "outputRecords": {
                    "normalizedAnomalyScore": [0.30919784638526916, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656, ...],
                    "decisionFunction": [-0.30709038523208243, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746, ...],
                    "rawAnomalyScore": [4.68, 8.961584665424545, 5.52, 5.52, 9.205437462877498, ...],
                    "outlier": [false, true, false, false, true, ...],
                    "timestamp_15896925": ["2020-02-27T10:05:23.664Z", "2020-02-27T10:05:23.896Z", "2020-02-27T10:05:24.092Z", "2020-02-27T10:05:24.404Z", "2020-02-27T10:05:24.635Z", ...]
                 },
                 "modelName": "IsolationForestV4"
              }				
            ],
            "deviceId": 107742,
            "recordSize": 1500
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/15896925/history/1/inferences"
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

curl --request GET "{{url}}/service/zementis/job/15896925/history/0/inferences" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Job Execution number 0 does not exist."
    ]
}
```

### DEL - Remove job

```
{{url}}/service/zementis/job/{{jobId}}
```

Remove the specified job and list the remaining jobs, if any.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job ID


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/job/15898918" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "next": null,
    "prev": null,
    "statistics": {
        "currentPage": 1,
        "totalPages": 1,
        "pageSize": 5
    },
    "jobs": [
       {
           "jobId": 15896925,
           "jobName": "AnomalyDetectionJob",
           "jobDescription": "Job involving many versions of Isolation Forest model to detect anomalies in devices",
           "jobCreationDate": "2020-02-27T14:23:16.557Z",
           "modelOrGroup": "AnomalyDetectionModels",
           "applyAllModels": true,
           "groupOrDeviceId": 15896385,
           "modelToDeviceMappings": {
           	  "rssi": "c8y_SignalStrengthWifi.rssi.value",
           	  "accelerationY": "c8y_Acceleration.accelerationY.value",
           	  "accelerationX": "c8y_Acceleration.accelerationX.value",
           	  "accelerationZ": "c8y_Acceleration.accelerationZ.value",
           	  "air_pressure": "c8y_Gyroscope.gyroX.value",
           	  "gyroX": "c8y_Gyroscope.gyroX.value",
           	  "gyroY": "c8y_Gyroscope.gyroY.value",
           	  "gyroZ": "c8y_Gyroscope.gyroZ.value",
           	  "lux": "c8y_Luxometer.lux.value",
           	  "compassX": "c8y_Compass.compassX.value",
           	  "compassY": "c8y_Compass.compassY.value",
           	  "compassZ": "c8y_Compass.compassZ.value"
           },
           "jobSchedule": {
           	  "frequency": "once",
           	  "cronExpression": "",
           	  "timeZone": "Asia/Calcutta",
           	  "dataFromPreviousNSeconds": 0,
           	  "scheduleAt": "2020-02-27T14:24:00.000Z",
           	  "dataFrom": "2020-02-26T12:30:00.000Z",
           	  "dataTo": "2020-02-27T12:30:00.000Z"
           }
       }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/job/15896925"
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

curl --request DELETE "{{url}}/service/zementis/job/00000" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Zementis job ID '00000' not found."
    ]
}
```

### DEL - Remove all jobs

```
{{url}}/service/zementis/jobs
```

Remove all available jobs and list the remaining jobs, if any.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

**Example Request**

```
200 OK

curl --request DELETE "{{url}}/service/zementis/jobs" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "next": null,
    "prev": null,
    "statistics": {
        "currentPage": 1,
        "totalPages": 0,
        "pageSize": 5
    },
    "jobs": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/jobs"
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
