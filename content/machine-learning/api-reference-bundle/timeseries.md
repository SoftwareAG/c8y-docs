---
title: Time series
layout: redirect
weight: 30

aliases:
  - /predictive-analytics/api-reference/#timeseries
---

Operations for time series data/model.

>**Info:** An active subscription of the Nyoka microservice is required to leverage the time series APIs.

### Domain model
#### TimeSeries
|Name|Type|Description|
|:-----|:-----|:-----|
|series|array|The time series data specified as an array of values representing multiple observations.|
|observationInterval|TimePeriod|The time interval between consecutive observations.|
|startDate|DateTime|The timestamp of the first observation in UTC format.|
|seasonality|TimePeriod|Optional parameter to specify the seasonal period in the data, if present.|

#### TimePeriod
|Name|Type|Description|
|:-----|:-----|:-----|
|timeUnit|ChronoUnit|The value has to be a valid [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html) – "SECONDS", "MINUTES", "HOURS", "DAYS", "MONTHS", "YEARS" etc.|
|periodLength|Number|Length of the period.|


### POST – Generate time series model using time series data

```
{{url}}/service/zementis/timeseries (deprecated)
{{url}}/service/zementis/train/timeseries
```

Upload the time series data to generate a model. This is an asynchronous call which returns a status URL that can be used to check the status of model creation.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with value application/json

|PARAMS||
|:---|:---|
|autoDeploy (boolean)|optional parameter used to determine whether or not the model should be deployed automatically once it is generated, default is true

**BODY**
```
{
    "series": [<value1>, <value2>, ...., <valueN>],
    "observationInterval": {
       "timeUnit": "<timeUnit>",
        "periodLength": <periodLength>
    },
    "startDate": "<startDate>",
    "seasonality": {
        "timeUnit": "<timeUnit>",
        "periodLength": <periodLength>
    }
}
```

**Example Request**

```
200 - OK

curl --request POST "{{url}}/service/zementis/train/timeseries?autoDeploy=true --header "Authorization: {{auth}}" \
	--header "Content-Type: application/json"

{
    "series": [
       112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115,
       126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140, 145, 150,
       178, 163, 172, 178, 199, 199, 184, 162, 146, 166, 171, 180, 193,
       181, 183, 218, 230, 242, 209, 191, 172, 194, 196, 196, 236, 235,
       229, 243, 264, 272, 237, 211, 180, 201, 204, 188, 235, 227, 234,
       264, 302, 293, 259, 229, 203, 229, 242, 233, 267, 269, 270, 315,
       364, 347, 312, 274, 237, 278, 284, 277, 317, 313, 318, 374, 413,
       405, 355, 306, 271, 306, 315, 301, 356, 348, 355, 422, 465, 467,
       404, 347, 305, 336, 340, 318, 362, 348, 363, 435, 491, 505, 404,
       359, 310, 337, 360, 342, 406, 396, 420, 472, 548, 559, 463, 407,
       362, 405, 417, 391, 419, 461, 472, 535, 622, 606, 508, 461, 390,
       432
    ],
    "observationInterval": {
       "timeUnit": "MONTHS",
       "periodLength": 1
    },
    "startDate": "2019-01-01T00:00:00+05:30",
    "seasonality": {
        "timeUnit": "YEARS",
        "periodLength": 1
    }
}
```

**Example Response**

```
200 - OK

{
	"modelName": "Timeseries_19-10-2020_14-23-00_jJgQK",
	"statusUrl": "/service/zementis/train/timeseries/Timeseries_19-10-2020_14-23-00_jJgQK/status"
}
```


**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/train/timeseries" --header "Authorization: {{auth}}" \
	--header "Content-Type: application/json"

{
    "series": [
       112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115,
       126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140, 145, 150,
       178, 163, 172, 178, 199, 199, 184, 162, 146, 166, 171, 180, 193,
       181, 183, 218, 230, 242, 209, 191, 172, 194, 196, 196, 236, 235,
       229, 243, 264, 272, 237, 211, 180, 201, 204, 188, 235, 227, 234,
       264, 302, 293, 259, 229, 203, 229, 242, 233, 267, 269, 270, 315,
       364, 347, 312, 274, 237, 278, 284, 277, 317, 313, 318, 374, 413,
       405, 355, 306, 271, 306, 315, 301, 356, 348, 355, 422, 465, 467,
       404, 347, 305, 336, 340, 318, 362, 348, 363, 435, 491, 505, 404,
       359, 310, 337, 360, 342, 406, 396, 420, 472, 548, 559, 463, 407,
       362, 405, 417, 391, 419, 461, 472, 535, 622, 606, 508, 461, 390,
       432
    ],
    "observationInterval": {
       "timeUnit": "MONTHS",
       "periodLength": 1
    },
    "startDate": "2019-01-01T00:00:00+05:3012",
    "seasonality": {
        "timeUnit": "YEARS",
        "periodLength": 1
    }
}
```

**Example Response**

```
400 - Bad Request

{
    "errors": [
        "'startDate' must be specified in yyyy-MM-dd'T'HH:mm:ss.SSSXXX format."
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/train/timeseries" --header "Content-Type: application/json"
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


### GET – Get status of generation of the time series model

```
{{url}}/service/zementis/timeseries/{{model_name}}/status (deprecated)
{{url}}/service/zementis/train/timeseries/{{model_name}}/status

```

Get the status of the generation of a specific time series model. The status can either be IN_PROGRESS, SUCCESS or FAILURE.<br>
If the status is FAILURE, the `errorMessage` attribute in the response holds the reason for the failure.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for time series model name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/train/timeseries/Timeseries_19-10-2020_14-23-00_jJgQK/status" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "status": "SUCCESS"
}
```

**Example Request**

```
401 – Unauthorized

curl --request GET "{{url}}/service/zementis/train/timeseries/Timeseries_19-10-2020_14-23-00_jJgQK/status"
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
404 – Not Found

curl --request GET "{{url}}/service/zementis/train/timeseries/dummy/status" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 – Not Found

{
    "errors": [
        "Model 'dummy' not found."
    ]
}
```


### GET – Get PMML source of the generated time series model

```
{{url}}/service/zementis/train/timeseries/{{model_name}}/pmml
```

Get the PMML file of the generated time series model.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for time series model name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/train/timeseries/Timeseries_19-10-2020_14-23-00_jJgQK/pmml" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

<?xml version="1.0" encoding="UTF-8"?>
<PMML xmlns="http://www.dmg.org/PMML-4_4" version="4.4">
    <Header copyright="Copyright (c) 2018 Software AG" description="State Space Model">
        <Application name="Nyoka" version="4.2.0"/>
        <Timestamp>2020-10-19 14:38:07.412179</Timestamp>
    </Header>
    <DataDictionary numberOfFields="2">
        <DataField name="value_0" optype="continuous" dataType="double"/>
        <DataField name="h" optype="continuous" dataType="integer"/>
    </DataDictionary>
    <TimeSeriesModel modelName="Timeseries_19-10-2020_14-23-00_jJgQK" functionName="timeSeries" bestFit="StateSpaceModel">...
...
...
...
</PMML>
```

**Example Request**

```
401 – Unauthorized

curl --request GET "{{url}}/service/zementis/train/timeseries/Timeseries_19-10-2020_14-23-00_jJgQK/pmml"
```

**Example Response**

```
401 - Unauthorised

{
    "error": "general/internalError",
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
404 – Not Found

curl --request GET "{{url}}/service/zementis/train/timeseries/dummy/pmml" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 – Not Found

{
    "errors": [
        "Model 'dummy' not found."
    ]
}
```
