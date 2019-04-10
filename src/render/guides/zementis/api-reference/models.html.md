---
title: Models
layout: redirect
order: 10
---

Operations on predictive analytics models.

### GET List Available Models

```
{{url}}/service/zementis/models
```

This operation retrieves the model names of all available PMML models. Use these model names as identifiers for all operations requiring the model_name path variable.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK
curl --request GET "{{url}}/service/zementis/models" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK
{
  "models": [
    "Iris_ME_Classification",
    "Iris_NN"
  ]
}
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/models"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```


### GET Get Model Information

```
{{url}}/service/zementis/model/{{model_name}}
```

Get model name, description, and information about input, output, or derived fields.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name


**Example Request**

```
200 - OK
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK  Expand source
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request GET "{{url}}/service/zementis/model/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

### GET Get Model Source 

```
{{url}}/service/zementis/model/{{model_name}}/source
```

Get annotated or original PMML file. Annotated source may contain warning or error messages embedded in XML comments that are useful for verifying that the PMML code is correct.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name
|annotated (boolean)|optional query parameter used to request the annotated version of the PMML file


**Example Request**

```
200 - OK
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification/source?annotated=true" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK  Expand source
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification/source?annotated=true"
```

**Example Respons**e

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request PUT "{{url}}/service/zementis/model/dummy/source?" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

### GET Get Model Serialized Source

```
{{url}}/service/zementis/model/{{model_name}}/serialized
```

Get binary file containing serialized representation of the model.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name

**Example Request**

```
200 - OK
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification/serialized" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK
Binary file
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification/serialized"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request GET "{{url}}/service/zementis/model/dummy/serialized" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

###GET Model Metrics Information

```
{{url}}/service/zementis/model/{{model_name}}/metrics
```

Get the memory metrics and prediction metrics of an uploaded model.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name


**Example Request**

```
200 - OK
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification/metrics" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK
{
  "modelSize": ".04 MB",
  "usedMemory": "460.845 MB",
  "freeMemory": "2346.49 MB",
  "totalMemory": "2807.375 MB",
  "predictionMetrics": {
    "Iris-versicolor": 156,
    "Iris-virginica": 144,
    "Iris-setosa": 159
  }
}
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/model/Iris_ME_Classification/metrics"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request GET "{{url}}/service/zementis/model/dummy/metrics" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

###POST Upload New Model

```
{{url}}/service/zementis/model
```

Upload new PMML model. If the PMML file is large, such as Random Forest model, we recommend compressing the file using ZIP/GZIP before uploading. This will reduce the upload time drastically. 

Note that the size of the uploaded PMML file/zip should not exceed 500 MB.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with two accepted values: application/octet-stream or multipart/form-data

|PARAMS||
|:---|:---|
|file|required query parameter for PMML file name, if Content-Type is application/octet-stream<br> or a body parameter for PMML file, if Content-Type is multipart/form-data
|applyCleanser (boolean)|optional parameter used to automatically perform comprehensive syntactic and semantic checks, correct known issues and convert your PMML file to version 4.3 (default is true)

**Example Request**

```
200 - OK
curl --request POST "{{url}}/service/zementis/model?applyCleanser=false" --header "Authorization: {{auth}}" --form "file=@Iris_KM.pmml"
```

**Example Response**

```
200 - OK  Expand source
```

**Example Request**

```
201 - Created
curl --request POST "{{url}}/service/zementis/model" --header "Authorization: {{auth}}" --form "file=@Iris_KM.pmml"
```

**Example Response**

```
201 - Created  Expand source
```

**Example Request**

```
400 - Bad Request
curl --request POST "{{url}}/service/zementis/model" --header "Authorization: {{auth}}" --form "file=@Invalid.pmml"
```

**Example Response**

```
400 - Bad Request
{
  "errors": [
    "Invalid XML format."
  ]
}
```

**Example Request**

```
401 - Unauthorized
curl --request POST "{{url}}/service/zementis/model"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
409 - Conflict
curl --request POST "{{url}}/service/zementis/model" --header "Authorization: {{auth}}" --form "file=@Iris_KM.pmml"
```

**Example Response**

```
409 - Conflict
{
  "errors": [
    "A model with the name 'Iris_KM' already exists."
  ]
}
```

### PUT Activate an Existing Model

```
{{url}}/service/zementis/model/{{model_name}}/activate
```

Activates the model with name model_name if it was inactive. Activating an active model has no effect. After activation, the model is immediately available for handling data processing requests. Note that an active model consumes runtime resources, especially Heap.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name


**Example Request**

```
200 - OK
curl --request PUT "{{url}}/service/zementis/model/Iris_KM/activate" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK  Expand source
```

**Example Request**

```
401 - Unauthorized
curl --request PUT "{{url}}/service/zementis/model/Iris_KM/activate"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request PUT "{{url}}/service/zementis/model/dummy/activate" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

###PUT Deactivate an Existing Model

```
{{url}}/service/zementis/model/{{model_name}}/deactivate
```

Deactivates the model with name model_name by making it inactive. After deactivation, the model is still available, but it no longer consumes runtime resources, especially Heap. Deactivating an inactive model has no effect.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name


**Example Request**

```
200 - OK
curl --request PUT "{{url}}/service/zementis/model/Iris_KM/deactivate" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK  Expand source
```

**Example Request**

```
401 Unauthorized
curl --request PUT "{{url}}/service/zementis/model/Iris_KM/deactivate"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request PUT "{{url}}/service/zementis/model/dummy/deactivate" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

###DEL Remove Model

```
{{url}}/service/zementis/model/{{model_name}}
```

Remove the specified model and list the remaining models.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name


**Example Request**

```
200 - OK
curl --request DELETE "{{url}}/service/zementis/model/Iris_KM" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK
{
  "models": [
    "Iris_ME_Classification",
    "Iris_NN"
  ]
}
```

**Example Request**

```
401 - Unauthorized
curl --request DELETE "{{url}}/service/zementis/model/Iris_KM"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request DELETE "{{url}}/service/zementis/model/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

###DEL Remove All Models

```
{{url}}/service/zementis/models
```

Remove all available models and list the remaining models.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

**Example Request**

```
200 OK
curl --request DELETE "{{url}}/service/zementis/models" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK
{
  "models": []
}
```

**Example Request**

```
401 - Unauthorized
curl --request DELETE "{{url}}/service/zementis/models"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

