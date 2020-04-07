---
title: Jobs
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/api-reference/#jobs
---

Operations on jobs scheduled for processing device data.

### Domain Model
#### JobConfiguration
|Name|Type|Description|
|:-----|:-----|:-----|
|jobName|String|Name of the job.|
|jobDescription|String|Description of the job.|
|associatedGroupOrDeviceId|Number|Id of the device or device group whose measurements will be <br> processed when the job executes.|
|associatedModel|String|Name of the model which will process the device measurements.|
|modelToDeviceMappings|Map|Map with the model’s inputs as the keys and the measurements as the <br> corresponding values. These mappings ensure which measurement <br> reading maps to which model input.|
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

>**Note**:
<br>1. For *periodic* frequency, `cronExpression`, `dataFromPreviousNSeconds` and `timeZone` fields are mandatory.
<br>2. For *once* frequency, `scheduleAt`, `dataFrom` and `dataTo` fields are mandatory and should adhere to the ISO-8601 date-time format
<br> &emsp; i.e. "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", for instance "2019-12-30T22:59:50.235+05:30". 
<br> &emsp; The difference between `dataFrom` and `dateTo` must not exceed 24 hours.

### POST - Create New Job

```
{{url}}/service/zementis/job
```

Create a new job for scheduled data processing.

On creation, a `jobId` is automatically assigned to the job and `jobCreationDate` will also be added to the response.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type| application/json

**BODY**
```
{
   "jobName": "<jobName>",
   "jobDescription": "<jobDescription>",
   "associatedGroupOrDeviceId" : <associatedGroupOrDeviceId>,
   "associatedModel": "<associatedModel>",
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
   "jobName": "SampleJob",
   "jobDescription": "SampleDescription",
   "associatedGroupOrDeviceId" : 123456,
   "associatedModel": "ActivityRecognitionModel",
   "modelToDeviceMappings": {
      "accelerationX": "c8y_Acceleration.c8y_AccelerationX.value",
      "accelerationY": "c8y_Acceleration.c8y_AccelerationY.value",
      "accelerationZ": "c8y_Acceleration.c8y_AccelerationZ.value"
   },
   "jobSchedule": {
      "frequency": "periodic",
      "cronExpression": "10 * * ? * *",
      "dataFromPreviousNSeconds": 10,
      "timeZone":"Asia/Kolkata"
   }
}
```

**Example Response**

```
201 - Created

{
   "jobId": 11058170, 
   "jobName": "SampleJob",
   "jobDescription": "SampleDescription",
   "jobCreationDate": "2019-10-05T08:12:21.340Z",
   "associatedGroupOrDeviceId" : 123456,
   "associatedModel": "ActivityRecognitionModel",
   "modelToDeviceMappings": {
      "accelerationX": "c8y_Acceleration.c8y_AccelerationX.value",
      "accelerationY": "c8y_Acceleration.c8y_AccelerationY.value",
      "accelerationZ": "c8y_Acceleration.c8y_AccelerationZ.value"
   },
   "jobSchedule": {
      "frequency": "periodic",
      "cronExpression": "10 * * ? * *",
      "dataFromPreviousNSeconds": 10,
      "timeZone":"Asia/Kolkata",
      "scheduleAt": null,
      "dataFrom": null,
      "dataTo": null
   }
}
```

**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/job" --header "Authorization: {{auth}}"

{
   "jobName": "SampleJob",
   "jobDescription": "SampleDescription",
   "associatedGroupOrDeviceId" : 123456,
   "associatedModel": "ActivityRecognitionModel",
   "modelToDeviceMappings": {
      "accelerationX": "c8y_Acceleration.c8y_AccelerationX.value",
      "accelerationY": "c8y_Acceleration.c8y_AccelerationY.value",
      "accelerationZ": "c8y_Acceleration.c8y_AccelerationZ.value"
   },
   "jobSchedule": {
      "frequency": "Invalid",
      "cronExpression": "10 * * ? * *",
      "dataFromPreviousNSeconds": 10,
      "timeZone":"Asia/Kolkata"
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
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found

curl --request POST "{{url}}/service/zementis/job" --header "Authorization: {{auth}}"

{
   "jobName": "SampleJob",
   "jobDescription": "SampleDescription",
   "associatedGroupOrDeviceId" : 123456,
   "associatedModel": "Dummy",
   "modelToDeviceMappings": {
      "accelerationX": "c8y_Acceleration.c8y_AccelerationX.value",
      "accelerationY": "c8y_Acceleration.c8y_AccelerationY.value",
      "accelerationZ": "c8y_Acceleration.c8y_AccelerationZ.value"
   },
   "jobSchedule": {
      "frequency": "once",
      "scheduleAt": "2019-10-05T14:14:56.235+05:30",
      "dataFrom": "2019-10-04T12:01:55.235+05:30",
      "dataTo": "2019-10-05T12:01:55.235+05:30"
   }
}
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Model 'Dummy' not found."
    ]
}
```

### GET - List Available Jobs

```
{{url}}/service/zementis/jobs
```

Retrieves all the available jobs. Use the `jobId` of these jobs as identifiers for all operations requiring the {jobId} path variable.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/jobs" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

[
    {
        "jobId": 10979435,
        "jobName": "Job1",
        "jobDescription": "DemoJob",
        "jobCreationDate": "2019-09-30T15:58:20.749Z",
        "associatedModel": "IsolationForest",
        "associatedGroupOrDeviceId": 10417743,
        "modelToDeviceMappings": {
            "accelerationY": "c8y_Acceleration.accelerationY.value",
            "accelerationX": "c8y_Acceleration.accelerationX.value",
            "accelerationZ": "c8y_Acceleration.accelerationZ.value",
            "gyroX": "c8y_Gyroscope.gyroX.value",
            "gyroY": "c8y_Gyroscope.gyroY.value",
            "gyroZ": "c8y_Gyroscope.gyroZ.value"
        },
        "jobSchedule": {
            "frequency": "periodic",
            "cronExpression": "0 0 5 1/1 * ? *",
            "timeZone": "Asia/Calcutta",
            "dataFromPreviousNSeconds": 18000,
            "scheduleAt": null,
            "dataFrom": null,
            "dataTo": null
        },
        "jobStatus": "Warning",
        "lastExecutionDuration": "63"
    },
    {
        "jobId": 10852249,
        "jobName": "Job2",
        "jobDescription": "DemoJob",
        "jobCreationDate": "2019-09-30T05:47:33.772Z",
        "associatedModel": "IsolationForest",
        "associatedGroupOrDeviceId": 9304033,
        "modelToDeviceMappings": {
            "var1": "s7aFlowC.F.value",
            "var2": "s7aFlowC.F.value"
        },
        "jobSchedule": {
            "frequency": "periodic",
            "cronExpression": "5 18 11 1/1 * ? *",
            "timeZone": "Asia/Calcutta",
            "dataFromPreviousNSeconds": 3456000,
            "scheduleAt": null,
            "dataFrom": null,
            "dataTo": null
        },
        "jobStatus": "Failure",
        "lastExecutionDuration": "728339"
    }
]
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
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```


### GET - Get Job Information

```
{{url}}/service/zementis/job/{{jobId}}
```

Get information about a specific job.

Apart from **JobConfiguration**, the information contains the status of the job. If there is no ongoing execution, then the status is fetched from the job's last execution. 

Note that the unit of `lastExecutionDuration` is milliseconds.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job id


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/10979435" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "jobId": 10979435,
    "jobName": "Job1",
    "jobDescription": "DemoJob",
    "jobCreationDate": "2019-09-30T15:58:20.749Z",
    "associatedModel": "IsolationForest",
    "associatedGroupOrDeviceId": 10417743,
    "modelToDeviceMappings": {
        "accelerationY": "c8y_Acceleration.accelerationY.value",
        "accelerationX": "c8y_Acceleration.accelerationX.value",
        "accelerationZ": "c8y_Acceleration.accelerationZ.value",
        "gyroX": "c8y_Gyroscope.gyroX.value",
        "gyroY": "c8y_Gyroscope.gyroY.value",
        "gyroZ": "c8y_Gyroscope.gyroZ.value"
    },
    "jobSchedule": {
        "frequency": "periodic",
        "cronExpression": "0 0 5 1/1 * ? *",
        "timeZone": "Asia/Calcutta",
        "dataFromPreviousNSeconds": 18000,
        "scheduleAt": null,
        "dataFrom": null,
        "dataTo": null
    },
    "jobStatus": "Warning",
    "lastExecutionDuration": "63"
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/10979435"
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

### GET - Job Execution History

```
{{url}}/service/zementis/job/{{jobId}}/history
```

Get execution history of a particular job. Lists all executions of that specific job. Use the `jobExecutionNumber` of these executions as identifiers for all operations requiring the {executionId} path variable.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job id


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/10979435/history" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK 

[
    {
        "jobId": 10979435,
        "jobExecutionNumber": 1,
        "isExecutionForDeviceGroup": true,
        "jobExecutionStartTime": "2019-09-23T15:39:15Z",
        "jobExecutionEndTime": "2019-09-23T15:39:19.051Z",
        "jobExecutionDuration": "4051",
        "jobExecutionStatus": "Success",
        "jobExecutionStatusMessage": []
    },
	{
        "jobId": 10979435,
        "jobExecutionNumber": 2,
        "isExecutionForDeviceGroup": true,
        "jobExecutionStartTime": "2019-09-30T23:30:00.009Z",
        "jobExecutionEndTime": "2019-09-30T23:30:00.401Z",
        "jobExecutionDuration": "392",
        "jobExecutionStatus": "Warning",
        "jobExecutionStatusMessage": [
            "The device 107742 was not active or sending any measurements during the time specified for data range"
        ]
    }
]
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/10979435/history"
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

### GET - Job Execution Detail

```
{{url}}/service/zementis/job/{{jobId}}/history/{{executionId}}
```

Get details of a specific job execution.

Note that the unit of `jobExecutionDuration` is milliseconds.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job id
|executionId (string)|required path variable for execution id

**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/10979435/history/1" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "jobId": 10979435,
    "jobExecutionNumber": 1,
    "isExecutionForDeviceGroup": true,
    "jobExecutionStartTime": "2019-09-23T15:39:15Z",
    "jobExecutionEndTime": "2019-09-23T15:39:19.051Z",
    "jobExecutionDuration": "4051",
    "jobExecutionStatus": "Success",
    "jobExecutionStatusMessage": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/10979435/history/1"
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

**Example Request**

```
404 - Not Found

curl --request GET "{{url}}/service/zementis/job/10979435/history/0" --header "Authorization: {{auth}}"
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

### GET - Job Execution Results

```
{{url}}/service/zementis/job/{{jobId}}/history/{{executionId}}/inferences
```

Get the results/inferences generated in a single job execution. These inferences are the predictions of the machine learning model against the data from the associated device/device group.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job id
|executionId (string)|required path variable for execution id
|currentPage (string)|optional parameter for specifying which page to fetch; each page will contain maximum 2000 inferences


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/job/10979435/history/1/inferences" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "inferenceCollection": [
        {
            "recordCollection": {
                "normalizedAnomalyScore": [0.30919784638525916, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.5981812541231656],
                "decisionFunction": [-0.30709038523208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.22561825856400746],
                "rawAnomalyScore": [4.68, 8.968584665454545, 5.52, 5.52, 9.205437462877498],
                "outlier": [false, true, false, false, true]
            },
            "deviceId": 103030
        },
        {
            "recordCollection": {
                "normalizedAnomalyScore": [0.30919784638525916, 0.5981812541231656, 0.36394405330406093, 0.36394405330406093, 0.2981812541231656],
                "decisionFunction": [-0.30709038523208043, -0.237037401162047, -0.277037401162047, -0.277037401162047, -0.29561825856400746],
                "rawAnomalyScore": [4.68, 8.968584665454545, 5.52, 5.52, 4.29],
                "outlier": [false, true, false, false, false]
            },
            "deviceId": 107742
        }
    ],
    "currentPage": 1
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/job/10979435/history/1/inferences"
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

**Example Request**

```
404 - Not Found

curl --request GET "{{url}}/service/zementis/job/10979435/history/0/inferences" --header "Authorization: {{auth}}"
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

### DEL - Remove Job

```
{{url}}/service/zementis/job/{{jobId}}
```

Remove the specified job.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|jobId (string)|required path variable for job id


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/job/11058170" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

[]
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/job/11058170"
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

### DEL - Remove All Jobs

```
{{url}}/service/zementis/jobs
```

Remove all available jobs and list the remaining jobs, if any.

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

[]
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
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```
