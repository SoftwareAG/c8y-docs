---
title: Resources
layout: redirect
weight: 20

aliases:
  - /predictive-analytics/api-reference/#resources
---

Operation on resources.

>**Info:**
<br>1. For PMML, the resources are typically JAR files or excel sheets containing custom functions and look up tables respectively.
<br>2. For ONNX, the resources are typically python files containing some pre-processing or post-processing logic which can be embedded into a pipeline.

### GET - List available PMML resources

```
{{url}}/service/zementis/resources
```

This operation retrieves information on all available resource files associated with PMML models. Use file names as identifiers for all operations requiring a file_name path variable.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/resources" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "resources": [
    {
      "fileName": "custom-functions.jar",
      "resourceType": "Custom Functions",
      "resourceIdentifier": "Function Namespace",
      "resourceNames": [
        "fraud"
      ]
    },
    {
      "fileName": "customerAreaMappingTable.xls",
      "resourceType": "Lookup Tables",
      "resourceIdentifier": "Table Name",
      "resourceNames": [
        "AreaPoints"
      ]
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/resources"
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

### GET - Get PMML resource information

```
{{url}}/service/zementis/resource/{{file_name}}
```

Get information on the specified PMML resource file.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|file_name (string)|required path variable for an existing resource file name

**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "fileName": "customerAreaMappingTable.xls",
  "resourceType": "Lookup Tables",
  "resourceIdentifier": "Table Name",
  "resourceNames": [
    "AreaPoints"
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls"
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

curl --request GET "{{url}}/service/zementis/resource/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}
```

### GET - Get PMML resource file

```
{{url}}/service/zementis/resource/{{file_name}}/source
```

Download a PMML resource file.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|file_name (string)|required path variable for an existing resource file name


**Example Request**

```
200 OK

curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls/source" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

Resource file
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls/source"
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

curl --request GET "{{url}}/service/zementis/resource/dummy/source" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}
```

### POST - Upload new PMML resource file

```
{{url}}/service/zementis/resource
```

Upload a new resource file associated with a PMML model. The file name in the 'file' body parameter will be used to identify this resource. Note that the size of the uploaded resource file must not exceed 500 MB.

If the resource file name contains any unsafe characters, all such characters will be converted to underscore automatically.
Hence, all subsequent calls should refer to the converted name as listed in the properties of the resource.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with two accepted values: application/octet-stream or multipart/form-data

|PARAMS||
|:---|:---|
|file|required query parameter for resource file name, if Content-Type is application/octet-stream, <br>or a body parameter for resource file, if Content-Type is multipart/form-data


**Example Request**

```
201 - Created

curl --request POST "{{url}}/service/zementis/resource" --header "Authorization: {{auth}}" --form "file=@customerAreaMappingTable.xls"
```

**Example Response**

```
201 - Created

{
  "fileName": "customerAreaMappingTable.xls",
  "resourceType": "Lookup Tables",
  "resourceIdentifier": "Table Name",
  "resourceNames": [
    "AreaPoints"
  ]
}
```

**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/resource" --header "Authorization: {{auth}}" --form "file=@Empty.jar"
```

**Example Response**

```
400 - Bad Request

{
  "errors": [
    "Empty input stream."
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/resource" --form "file=@custom-functions.jar"
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

curl --request POST "{{url}}/service/zementis/resource" --header "Authorization: {{auth}}" --form "file=@customerAreaMappingTable.xls"
```

**Example Response**

```
409 - Conflict

{
  "errors": [
    "A resource file with the name 'customerAreaMappingTable.xls' already exists."
  ]
}
```

### DEL - Remove PMML resource file

```
{{url}}/service/zementis/resource/{{file_name}}
```

Remove the specified resource file and list all remaining PMML resources.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|file_name (string)|required path variable for an existing resource file name


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/resource/customerAreaMappingTable.xls" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "resources": [
    {
      "fileName": "custom-functions.jar",
      "resourceType": "Custom Functions",
      "resourceIdentifier": "Function Namespace",
      "resourceNames": [
        "fraud"
      ]
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/resource/customerAreaMappingTable.xls"
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

curl --request DELETE "{{url}}/service/zementis/resource/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}
```

### DEL - Remove all PMML resource files

```
{{url}}/service/zementis/resources
```

Remove all available PMML resources and list the remaining ones, if any.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/resources" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "resources": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/resources"
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

### GET - List available ONNX resources

```
{{url}}/service/zementis/onnx/resources
```

This operation retrieves information on all available resource files associated with ONNX pipelines. Use file names as identifiers for all operations requiring a file_name path variable.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/onnx/resources" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "resources": [
        "PreprocessFabricImage.py",
        "ClassifyFabricFace.py",
        "StorePredictionsAsMeasurement.py"
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/onnx/resources"
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

### GET - Get ONNX resource

```
{{url}}/service/zementis/onnx/resources/{{file_name}}
```

Get contents of the specified ONNX resource file.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ or ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|file_name (string)|required path variable for an existing resource file name

**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/onnx/resources/PreprocessFabricImage.py" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

def process(content):
    import numpy as np
    from PIL import Image
    import io
    im = Image.open(io.BytesIO(content))
    im = im.resize((224,224))
    x = np.array(im,dtype=np.float32)
    x = x[..., ::-1]
    mean = [103.939, 116.779, 123.68]
    x[..., 0] -= mean[0]
    x[..., 1] -= mean[1]
    x[..., 2] -= mean[2]
    x = np.expand_dims(x,0)
    return {"input_1":x}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/onnx/resources/PreprocessFabricImage.py"
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

curl --request GET "{{url}}/service/zementis/onnx/resources/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{    
	"errors": [
        "Resource file 'dummy' not found."
    ]
}
```

### POST - Upload new ONNX resource file

```
{{url}}/service/zementis/onnx/resources
```

Upload a new resource file containing a pre-processing or post-processing script. The file name in the 'file' body parameter will be used to identify this resource. Note that the size of the uploaded resource file must not exceed 500 MB.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with two accepted values: application/octet-stream or multipart/form-data

|PARAMS||
|:---|:---|
|file|required query parameter for resource file name, if Content-Type is application/octet-stream, <br>or a body parameter for resource file, if Content-Type is multipart/form-data


**Example Request**

```
201 - Created

curl --request POST "{{url}}/service/zementis/onnx/resources" --header "Authorization: {{auth}}" --form "file=@PreprocessData.py"
```

**Example Response**

```
201 - Created

{
    "resources": [
        "PreprocessData.py",
        "PreprocessFabricImage.py",
        "ClassifyFabricFace.py",
        "StorePredictionsAsMeasurement.py"
    ]
}
```

**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/onnx/resources" --header "Authorization: {{auth}}" --form "file=@Invalid.txt"
```

**Example Response**

```
400 - Bad Request

{
    "errors": [
        "Invalid python format."
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/onnx/resources" --form "file=@PreprocessData.py"
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

curl --request POST "{{url}}/service/zementis/onnx/resources" --header "Authorization: {{auth}}" --form "file=@PreprocessData.py"
```

**Example Response**

```
409 - Conflict

{
  "errors": [
    "A resource file with the name 'PreprocessData.py' already exists."
  ]
}
```

### DEL - Remove ONNX resource file

```
{{url}}/service/zementis/onnx/resources/{{file_name}}
```

Remove the specified resource file and list all remaining ONNX resources.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|file_name (string)|required path variable for an existing resource file name


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/onnx/resources/PreprocessData.py" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "resources": [
        "PreprocessFabricImage.py",
        "ClassifyFabricFace.py",
        "StorePredictionsAsMeasurement.py"
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/onnx/resources/PreprocessData.py"
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

curl --request DELETE "{{url}}/service/zementis/onnx/resources/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}
```

**Example Request**

```
500 - Internal Server Error

curl --request DELETE "{{url}}/service/zementis/onnx/resources/PreprocessFabricImage.py" --header "Authorization: {{auth}}"
```

**Example Response**

```
500 - Internal Server Error

{
    "errors": [
        "The resource [PreprocessFabricImage.py] is required by the Pipeline(s) [['ClassifyFabricFace']]. Please delete these pipeline(s) before deleting the resource [PreprocessFabricImage.py]."
    ]
}
```

### DEL - Remove all ONNX resource files

```
{{url}}/service/zementis/onnx/resources
```

Remove all available ONNX resources and list the remaining ones, if any.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/onnx/resources" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "resources": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/onnx/resources"
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
500 - Internal Server Error

curl --request DELETE "{{url}}/service/zementis/onnx/resources" --header "Authorization: {{auth}}"
```

**Example Response**

```
500 - Internal Server Error

{
    "errors": [
        "The resource [PreprocessFabricImage.py] is required by the Pipeline(s) [['ClassifyFabricFace']]. Please delete these pipeline(s) before deleting the resource [PreprocessFabricImage.py]."
    ]
}
```
