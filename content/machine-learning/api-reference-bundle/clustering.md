---
title: Clustering
layout: redirect
weight: 40
---

Operations for identifying clusters in given data using clustering models.

>**Info:** An active subscription of the Nyoka microservice is required to leverage the clustering APIs.


### POST – Generate clustering model based on multiple time series

```
{{url}}/service/zementis/train/clustering
```

Upload multiple time series data to generate a clustering model. This is an asynchronous call which returns a status URL that can be used to check the status of model creation.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

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
    "data": [
        <series1>:[<value1>, <value2>, ...., <valueN>],
        <series2>:[<value1>, <value2>, ...., <valueN>],
        <series3>:[<value1>, <value2>, ...., <valueN>],
        <series4>:[<value1>, <value2>, ...., <valueN>]
    ]
}
```

**Example Request**

```
202 - ACCEPTED

curl --request POST "{{url}}/service/zementis/train/clustering?autoDeploy=false" --header "Authorization: {{auth}}" \
	--header "Content-Type: application/json"

{
     "data": [
        "MAC000002": [ 1.945, 1.112, 0.6609999999999999, 0.23600000000000002, 0.20800000000000002, ... ],
        "MAC000003": [ 6.760999900000001, 6.884000099999999, 7.241000200000001, 6.3209999, 5.157000099999999, ... ],
        "MAC000004": [ 0.0, 0.175, 0.0, 0.0, 0.191, ... ],
        ...
    ]
}
```

**Example Response**

```
202 - ACCEPTED

{
    "modelName": "Clustering_19-10-2020_11-06-01_umGoj",
    "statusUrl": "/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj/status"
}
```


**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/train/clustering" --header "Authorization: {{auth}}" \
	--header "Content-Type: application/json"

{
    "data": [
        "MAC000002": [ 1.945, 1.112, 0.6609999999999999, 0.23600000000000002, 0.20800000000000002, ... ],
        "MAC000003": [ 6.760999900000001, 6.884000099999999, 7.241000200000001, 6.3209999, 5.157000099999999, ... ],
        "MAC000004":   0.0, 0.175, 0.0, 0.0, 0.191, ... ],
        ...
}
```

**Example Response**

```
400 - Bad Request

{
    "errors": [
        "Invalid json format."
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/train/clustering" --header "Content-Type: application/json"
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


### GET – Get status of generation of the clustering model

```
{{url}}/service/zementis/train/clustering/{{model_name}}/status
```

Get the status of generation of a specific clustering model. The status can either be IN_PROGRESS, SUCCESS or FAILURE.<br>
If the status is FAILURE, the `errorMessage` attribute in the response holds the reason for the failure.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for clustering model name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj/status" --header "Authorization: {{auth}}"
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

curl --request GET "{{url}}/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj/status"
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

curl --request GET "{{url}}/service/zementis/train/clustering/dummy/status" --header "Authorization: {{auth}}"
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


### GET – Get PMML source of the generated clustering model

```
{{url}}/service/zementis/train/clustering/{{model_name}}/pmml
```

Get the PMML file of the generated clustering model.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for clustering model name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj/pmml" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

<?xml version="1.0" encoding="UTF-8"?>
<PMML xmlns="http://www.dmg.org/PMML-4_4" version="4.4">
    <Header copyright="Copyright (c) 2018 Software AG" description="Default Description">
        <Application name="Nyoka" version="4.2.0"/>
        <Timestamp>2020-10-19 12:38:54.346416</Timestamp>
    </Header>
    <DataDictionary numberOfFields="168">
        <DataField name="X_0" optype="continuous" dataType="double"/>
        <DataField name="X_1" optype="continuous" dataType="double"/>
        <DataField name="X_2" optype="continuous" dataType="double"/>
        <DataField name="X_3" optype="continuous" dataType="double"/>
        <DataField name="X_4" optype="continuous" dataType="double"/>
        <DataField name="X_5" optype="continuous" dataType="double"/>
...
...
...
...
</PMML>
```

**Example Request**

```
401 – Unauthorized

curl --request GET "{{url}}/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj/pmml"
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

curl --request GET "{{url}}/service/zementis/train/clustering/dummy/pmml" --header "Authorization: {{auth}}"
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


### GET – Get cluster information

```
{{url}}/service/zementis/train/clustering/{{model_name}}
```

Get the information of clusters identified by the clustering model.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for clustering model name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "numberOfClusters": 4,
    "clusters": [
        {
            "centroid": [ 0.33884722222222224, 0.41218055555555555, 0.5330694430555556, ... ],
            "members": [ "MAC000002", "MAC000003", "MAC000021", ... ]
        },
        {
            "centroid": [ 1.55143749375, 1.41018749375, 1.5678125, ... ],
            "members": [ "MAC000004", "MAC000008", "MAC000033", ... ]
        },
        {
            "centroid": [ 2.45056251875, 2.3903124937499998, 2.2459999999999996, ... ],
            "members": [ "MAC000009", "MAC000023", "MAC000051", ... ]
        },
        {
            "centroid": [ 6.81100004, 6.5565999999999995, 5.298800020000001, ... ],
            "members": [ "MAC000006", "MAC000007", "MAC000047", ... ]
        }
}

```

**Example Request**

```
401 – Unauthorized

curl --request GET "{{url}}/service/zementis/train/clustering/Clustering_19-10-2020_11-06-01_umGoj"
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

curl --request GET "{{url}}/service/zementis/train/clustering/dummy" --header "Authorization: {{auth}}"
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
