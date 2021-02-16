---
title: Pipelines

layout: redirect
weight: 20

aliases:
  - /predictive-analytics/api-reference/#pipelines
---

Operations on pipelines.

>**Info:** Currently, only ONNX pipelines are supported. An active subscription of the Onnx microservice is required to leverage these pipeline APIs.

### GET - List ONNX pipelines

```
{{url}}/service/zementis/onnx/pipelines
```

Retrieves all the available ONNX pipelines.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/onnx/pipelines" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "pipelines": [
    {
      "pipelineName": "DetectFabricOrientation",
      "preProcessing": "PreprocessFabricImage.py",
      "modelName": "e1f07d8cd1f64c97ae94fb55534565e7",
      "postProcessing": "ClassifyFabricFace.py"
    },
    {
      "pipelineName": "ClassifyManufacturingActivity",
      "preProcessing": "PreprocessCSVData.py",
      "modelName": "GradientBoostClassifier",
      "postProcessing": "StorePredictionsAsMeasurement.py"
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/onnx/pipelines"
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


### GET - Get ONNX pipeline information

```
{{url}}/service/zementis/onnx/pipelines/{{pipeline_name}}
```

Get details of the ONNX pipeline.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|pipeline_name (string)|required path variable for existing pipeline name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/onnx/pipelines/DetectFabricOrientation" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "pipelineName": "DetectFabricOrientation",
    "preProcessing": "PreprocessFabricImage.py",
    "modelName": "e1f07d8cd1f64c97ae94fb55534565e7",
    "postProcessing": "ClassifyFabricFace.py"
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/onnx/pipelines/DetectFabricOrientation"
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

curl --request GET "{{url}}/service/zementis/onnx/pipelines/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Pipeline 'dummy' not found."
    ]
}
```

### POST - Create ONNX pipeline

```
{{url}}/service/zementis/onnx/pipelines
```

Create new ONNX pipeline.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with value as 'application/json'

**BODY**
```
{
    "pipelineName": "<pipelineName>",
    "preProcessing": "<pre_processing_script.py>",
    "modelName": "<modelName>",
    "postProcessing": "<post_processing_script.py>"
}
```

**Example Request**

```
201 - Created

curl --request POST "{{url}}/service/zementis/onnx/pipelines" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "pipelineName": "ClassifyFaultyWelds",
    "preProcessing": "PreprocessWeldImage.py",
    "modelName": "FaultyWeldClassifier"
}
```

**Example Response**

```
201 - Created

{
    "pipelineName": "ClassifyFaultyWelds",
    "preProcessing": "PreprocessWeldImage.py",
    "modelName": "FaultyWeldClassifier"
}
```

**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/onnx/pipelines" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "pipelineName": "PipelineDemo",
    "model": "FaultyWeldClassifier"
}
```

**Example Response**

```
400 - Bad Request

{
    "errors": [
        "Invalid key 'model' found. Valid keys are - ['pipelineName', 'modelName', 'preProcessing', 'postProcessing']."
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/onnx/pipelines" --header "Content-Type: application/json"
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

curl --request POST "{{url}}/service/zementis/onnx/pipelines" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "pipelineName": "ClassifyWelds",
    "preProcessing": "PreprocessWeldImage.py",
    "modelName": "Dummy"
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
**Example Request**

```
409 - Conflict

curl --request POST "{{url}}/service/zementis/onnx/pipelines" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "pipelineName": "DetectFabricOrientation",
    "preProcessing": "PreprocessWeldImage.py",
    "modelName": "FaultyWeldClassifier"
}
```

**Example Response**

```
409 - Conflict

{
    "errors": [
        "A pipeline with the name 'DetectFabricOrientation' already exists."
    ]
}
```

### DEL - Remove ONNX pipeline

```
{{url}}/service/zementis/onnx/pipelines/{{pipeline_name}}
```

Remove the specified ONNX pipeline and list the remaining pipelines.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|pipeline_name (string)|required path variable for existing pipeline name


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/onnx/pipelines/ClassifyFaultyWelds" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "pipelines": [
    {
      "pipelineName": "DetectFabricOrientation",
      "preProcessing": "PreprocessFabricImage.py",
      "modelName": "e1f07d8cd1f64c97ae94fb55534565e7",
      "postProcessing": "ClassifyFabricFace.py"
    },
    {
      "pipelineName": "ClassifyManufacturingActivity",
      "preProcessing": "PreprocessCSVData.py",
      "modelName": "GradientBoostClassifier",
      "postProcessing": "StorePredictionsAsMeasurement.py"
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/onnx/pipelines/ClassifyFaultyWelds"
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

curl --request DELETE "{{url}}/service/zementis/onnx/pipelines/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Pipeline 'dummy' not found."
    ]
}
```

### DEL - Remove ONNX pipelines

```
{{url}}/service/zementis/onnx/pipelines
```

Remove all available ONNX pipelines.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

**Example Request**

```
200 OK

curl --request DELETE "{{url}}/service/zementis/onnx/pipelines" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "pipelines": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/onnx/pipelines"
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
