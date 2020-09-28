---
title: Projects
layout: redirect
weight: 10


aliases:
  - /machine-learning/api-reference-mlw/#projects
---

Operations on MLW Projects.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### GET - List of available projects

```
{{url}}/service/mlw/projects
```

Retrieves the list of projects available in MLW.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```

**Example Response**

```
200 - OK

{
   {'data': [{'id': '1600926359_Project',
   'name': 'Casting defect',
   'description': 'Casting defect use-case',
   'createdAt': 'Thu Sep 24 05:45:59 2020',
   'properties': [],
   'isModified': True,
   'isFreeze': False,
   'selectedVersion': '',
   'versions': [],
   'resourcesCount': {'data': 3,
    'model': 0,
    'code': 2,
    'workflow': 0,
    'pipeline': 0,
    'nn-designer': 1,
    'totalCount': 6}},]}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects"
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

### POST - Create a new project

```
{{url}}/service/mlw/projects
```

Creates a new project with given project name and desciption.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|name (string)|required name for the project
|description (string)|required description of the project

**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"ExampleProject","description":"A dummy project"}'
```

**Example Response**

```
200 - OK

{
    "id": "1601283001_Project",
    "name": "ExampleProject",
    "description": "A dummy project",
    "createdAt": "Mon Sep 28 08:50:01 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resourcesCount": {
        "data": 0,
        "model": 0,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 0
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"ExampleProject","description":"A dummy project"}'
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
409 - Error

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"ExampleProject","description":"A dummy project"}'
```
**Example Response**

```
409 - Error

{
    "message": "Project Name already exist",
    "errorCode": 409,
    "exception": "Project Exist"
}
```

### POST - Commit the resources of the project

```
{{url}}/service/mlw/projects/{{projectID}}/commit
```

Commit the resources of project for version control.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|listOfResources (list)|List of resources


**Example Request**

```
200 - OK

curl --request POST "{{url}}/service/mlw/projects" --header "Authorization: {{auth}}" -F "listOfResources=EI0BD2UFTH" -F ""
```

**Example Response**

```
200 - OK

{'id': '1600932615_Project',
 'name': 'EI0BD2UFTH',
 'description': 'A dummy project',
 'createdAt': 'Thu Sep 24 07:30:15 2020',
 'properties': [],
 'isModified': True,
 'isFreeze': False,
 'selectedVersion': '',
 'versions': [],
 'resourcesCount': {'data': 0,
  'model': 0,
  'code': 0,
  'workflow': 0,
  'pipeline': 0,
  'nn-designer': 0,
  'totalCount': 0}}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects"
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
409 - Error

curl --request POST "{{url}}/service/mlw/projects/1600932615_Project/commit" --header "Authorization: {{auth}}" 
```
**Example Response**

```
409 - Error

{'message': 'Please select files',
 'errorCode': 409,
 'exception': 'No file to Commit'}
```

### PUT - Update existing project name and description

```
{{url}}/service/mlw/projects/{{projectID}}
```

Updates the exiting project name and description with given new project name and desciption.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project for which the name needs to be changed
|name (string)|required name for the project
|description (string)|required description of the project

**Example Request**

```
201 - OK

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" -F "name=Newname" -F "description=A dummy project"
```

**Example Response**

```
201 - OK

{'id': '1600932615_Project',
 'name': 'Newname',
 'description': 'description',
 'createdAt': 'Thu Sep 24 07:30:15 2020',
 'properties': [],
 'isModified': True,
 'isFreeze': False,
 'selectedVersion': '',
 'versions': [],
 'resourcesCount': {'data': 0,
  'model': 0,
  'code': 0,
  'workflow': 0,
  'pipeline': 0,
  'nn-designer': 0,
  'totalCount': 0}}
```
**Example Request**

```
409 - OK

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" -F "name=ExistingName" -F "description=A dummy project"
```

**Example Response**

```
409 - OK

{'message': 'Project Name already exist for another project, Description also same',
 'errorCode': 409,
 'exception': 'Project Name Exist'}
```
**Example Request**

```
401 - Unauthorized

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" -F "name=Newname" -F "description=A dummy project"
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

### DELETE - Delete an existing project 

```
{{url}}/service/mlw/projects/{{projectID}}
```

Deletes the exiting project.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project for which the name needs to be changed

**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" 
```

**Example Response**

```
200 - OK

{'data': [{'id': '1600926359_Project',
   'name': 'Casting defect',
   'description': 'Casting defect use-case',
   'createdAt': 'Thu Sep 24 05:45:59 2020',
   'properties': [],
   'isModified': True,
   'isFreeze': False,
   'selectedVersion': '',
   'versions': [],
   'resourcesCount': {'data': 3,
    'model': 0,
    'code': 2,
    'workflow': 0,
    'pipeline': 0,
    'nn-designer': 1,
    'totalCount': 6}}]}
```

**Example Request**

```
401 - Unauthorized

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}"
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


<!-- ''' -->
<!-- title: Resources -->
<!-- layout: redirect -->
<!-- weight: 10 -->

Operations on resources within Projects.


### GET - List of available resources in a project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Retrieves the list of files available in the project. It contains info related to each file, counts of resources, all available  version information of the selected project.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'SodaDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v2',
 'description': 'Soda Bottles NN IC Demo',
 'resources': {'data': [{'id': '1600829327_0380_Resource',
    'name': 'P.Zero.jpg',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/P.Zero.jpg',
    'size': 38797,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600829336_0326_Resource',
    'name': 'predicted_P_1600829336.json',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_P_1600829336.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600751893_0717_Resource',
    'name': 'MD.Diet.jpg',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Diet.jpg',
    'size': 42146,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600750617_0744_Resource',
    'name': 'soda.zip',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/soda.zip',
    'size': 22655457,
    'mimeType': 'application/zip',
    'extension': '.zip',
    'category': 'Data'},
   {'id': '1600828823_0064_Resource',
    'name': 'predicted_MD_1600828823.json',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600828823.json',
    'size': 220,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600829185_0391_Resource',
    'name': 'predicted_M_1600829185.json',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_M_1600829185.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600829163_1000_Resource',
    'name': 'M.Beer.jpg',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/M.Beer.jpg',
    'size': 43025,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1601012074_0042_Resource',
    'name': 'predicted_M_1601012074.json',
    'description': '',
    'createdAt': 'Fri Sep 25 05:34:34 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_M_1601012074.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1601012139_0815_Resource',
    'name': 'predicted_P_1601012139.json',
    'description': '',
    'createdAt': 'Fri Sep 25 05:35:39 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_P_1601012139.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'}],
  'model': [{'id': '1600751811_0233_Resource',
    'name': 'SodaNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/SodaNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True},
   {'id': '1600754440_0307_Resource',
    'name': 'sodaBottleModel_1600753902.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sodaBottleModel_1600753902.onnx',
    'size': 8296340,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'SodaPost.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/SodaPost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'sodaPre.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/sodaPre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600828801_0334_Resource',
    'name': 'sodaPipeline.pipeline',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'sodaBottleModel_1600753902.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'sodaPre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'SodaPost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/sodaPipeline.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': False}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'soda.architecture',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/soda.architecture',
    'size': 17176,
    'mimeType': 'application/ARCHITECTURE',
    'extension': '.architecture',
    'category': 'NN-Designer'}]},
 'resourcesCount': {'data': 9,
  'model': 2,
  'code': 2,
  'workflow': 0,
  'pipeline': 1,
  'nn-designer': 1,
  'totalCount': 15},
 'projectID': '1600750565_Project',
 'properties': [],
 'versionNumber': 'v1',
 '1600750565_Project': {},
 'id': '1600750565_Project',
 'isModified': True,
 'isFreeze': False,
 'versions': ['v0', 'v1', 'v2']}
```
### GET - Refresh the list of resources in a project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Scans the project structure to list any un reported file in the system, which would have been generated by code execution or through notebook execution.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|refresh|{{True/False}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources" --header "Authorization: {{auth}}" -F "refresh = True"
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'SodaDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v2',
 'description': 'Soda Bottles NN IC Demo',
 'resources': {'data': [{'id': '1600829327_0380_Resource',
    'name': 'P.Zero.jpg',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/P.Zero.jpg',
    'size': 38797,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600829336_0326_Resource',
    'name': 'predicted_P_1600829336.json',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_P_1600829336.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600751893_0717_Resource',
    'name': 'MD.Diet.jpg',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Diet.jpg',
    'size': 42146,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600750617_0744_Resource',
    'name': 'soda.zip',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/soda.zip',
    'size': 22655457,
    'mimeType': 'application/zip',
    'extension': '.zip',
    'category': 'Data'},
   {'id': '1600828823_0064_Resource',
    'name': 'predicted_MD_1600828823.json',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600828823.json',
    'size': 220,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600829185_0391_Resource',
    'name': 'predicted_M_1600829185.json',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_M_1600829185.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600829163_1000_Resource',
    'name': 'M.Beer.jpg',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/M.Beer.jpg',
    'size': 43025,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1601012074_0042_Resource',
    'name': 'predicted_M_1601012074.json',
    'description': '',
    'createdAt': 'Fri Sep 25 05:34:34 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_M_1601012074.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1601012139_0815_Resource',
    'name': 'predicted_P_1601012139.json',
    'description': '',
    'createdAt': 'Fri Sep 25 05:35:39 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_P_1601012139.json',
    'size': 229,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'}],
  'model': [{'id': '1600751811_0233_Resource',
    'name': 'SodaNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/SodaNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True},
   {'id': '1600754440_0307_Resource',
    'name': 'sodaBottleModel_1600753902.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sodaBottleModel_1600753902.onnx',
    'size': 8296340,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'SodaPost.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/SodaPost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'sodaPre.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/sodaPre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600828801_0334_Resource',
    'name': 'sodaPipeline.pipeline',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'sodaBottleModel_1600753902.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'sodaPre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'SodaPost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/sodaPipeline.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': False}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'soda.architecture',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/soda.architecture',
    'size': 17176,
    'mimeType': 'application/ARCHITECTURE',
    'extension': '.architecture',
    'category': 'NN-Designer'}]},
 'resourcesCount': {'data': 9,
  'model': 2,
  'code': 2,
  'workflow': 0,
  'pipeline': 1,
  'nn-designer': 1,
  'totalCount': 15},
 'projectID': '1600750565_Project',
 'properties': [],
 'versionNumber': 'v1',
 '1600750565_Project': {},
 'id': '1600750565_Project',
 'isModified': True,
 'isFreeze': False,
 'versions': ['v0', 'v1', 'v2']}
```


### GET - Pull data from a specific version of the project to work on

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Scans the project structure to list any un reported file in the system, which would have been generated by code execution or through notebook execution.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|versionNumber|{{versionNumber}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources" --header "Authorization: {{auth}}" -F "versionNumber = v0"
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'SodaDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v0',
 'description': 'Soda Bottles NN IC Demo',
 'resources': {'data': [{'id': '1600753567_0365_Resource',
    'name': 'MD.Orig.jpg',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Orig.jpg',
    'size': 39675,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600751893_0717_Resource',
    'name': 'MD.Diet.jpg',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Diet.jpg',
    'size': 42146,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600753267_0571_Resource',
    'name': 'predicted_MD_1600753267.json',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600753267.json',
    'size': 222,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600750617_0744_Resource',
    'name': 'soda.zip',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/soda.zip',
    'size': 22655457,
    'mimeType': 'application/zip',
    'extension': '.zip',
    'category': 'Data'},
   {'id': '1600753576_0003_Resource',
    'name': 'predicted_MD_1600753576.json',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600753576.json',
    'size': 235,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'}],
  'model': [{'id': '1600751811_0233_Resource',
    'name': 'SodaNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/SodaNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'SodaPost.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/SodaPost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'sodaPre.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/sodaPre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600753248_0497_Resource',
    'name': 'sodaPipe.pipeline',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'SodaNewDemo_1600751365.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'sodaPre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'SodaPost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/sodaPipe.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': True}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'soda.architecture',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/soda.architecture',
    'size': 17176,
    'mimeType': 'application/ARCHITECTURE',
    'extension': '.architecture',
    'category': 'NN-Designer'}]},
 'resourcesCount': {'data': 5,
  'model': 1,
  'code': 2,
  'workflow': 0,
  'pipeline': 1,
  'nn-designer': 1,
  'totalCount': 10},
 'projectID': '1600750565_Project',
 'properties': [],
 'versionNumber': 'v1',
 '1600750565_Project': {},
 'id': '1600750565_Project',
 'isModified': True,
 'isFreeze': False,
 'versions': ['v0', 'v1', 'v2']}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects"
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


### POST - Upload files into the Project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

To upload the resource files to use in the project, files like csv, txt, json.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|file|{{file Object}}


**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0' \
--form 'file=@/C:/Users/swsh/Desktop/ZMOD0203/MLW_07092020/zementis-mlw/mlw-core/ResourceFIles/TestFiles/iris Dataset.csv'
```

**Example Response**

```
200 - OK

{
    "id": "1601283001_Project",
    "name": "ExampleProject",
    "description": "A dummy project",
    "createdAt": "Mon Sep 28 08:50:01 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1601283851_0844_Resource",
                "name": "iris Dataset.csv",
                "description": "",
                "createdAt": "Mon Sep 28 09:04:11 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 150
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 5
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "col1",
                            "col2",
                            "col3",
                            "col4",
                            "target"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601283001_Project/Data/iris Dataset.csv",
                "size": 2878,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            }
        ],
        "model": [],
        "code": [],
        "pipeline": [],
        "workflow": [],
        "nn-designer": []
    },
    "resourcesCount": {
        "data": 1,
        "model": 0,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 1
    }
}

```
**Example Request**

```
409 - Not Supported

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources" --header "Authorization: {{auth}}" -F "file = ../DT.pmml"
```

**Example Response**

```
409 - Unauthorized

{'message': 'File type not supported',
 'errorCode': 409,
 'exception': 'Contact Admin for Support'}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources" -F "file = ../admissions.csv"
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


### POST - Create new resource files into the Project

```
{{url}}/service/mlw/projects/{{projectID}}/resources/createnew
```

To create new resource files to use in the project, files like neural network designer, workflow, jupyter notebook, pipeline, python script files

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|name|{{name of the file}}
|type|{{wf|py|ipynb|architecture|pipeline}}


**Example Request**

```
200 - OK (pending)

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources/createnew" --header "Authorization: {{auth}}" -F "type = py" -F "name='sampleWF"
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'SodaDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v0',
 'description': 'Soda Bottles NN IC Demo',
 'resources': {'data': [{'id': '1600753567_0365_Resource',
    'name': 'MD.Orig.jpg',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Orig.jpg',
    'size': 39675,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600751893_0717_Resource',
    'name': 'MD.Diet.jpg',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Diet.jpg',
    'size': 42146,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600753267_0571_Resource',
    'name': 'predicted_MD_1600753267.json',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600753267.json',
    'size': 222,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600750617_0744_Resource',
    'name': 'soda.zip',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/soda.zip',
    'size': 22655457,
    'mimeType': 'application/zip',
    'extension': '.zip',
    'category': 'Data'},
   {'id': '1600753576_0003_Resource',
    'name': 'predicted_MD_1600753576.json',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600753576.json',
    'size': 235,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1601252767_0581_Resource',
    'name': 'admissions.csv',
    'description': '',
    'createdAt': 'Mon Sep 28 00:26:07 2020',
    'properties': [{'key': 'numberOfRows',
      'label': 'Number of Rows',
      'value': 644},
     {'key': 'numberOfColumns', 'label': 'Number of Columns', 'value': 3},
     {'key': 'columnNames',
      'label': 'Column Names',
      'value': ['target', 'gpa', 'gre']}],
    'editedAt': '',
    'type': 'CSV',
    'url': './MLW/1600750565_Project/Data/admissions.csv',
    'size': 17192,
    'mimeType': 'text/csv',
    'extension': '.csv',
    'category': 'Data'}],
  'model': [{'id': '1600751811_0233_Resource',
    'name': 'SodaNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/SodaNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'SodaPost.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/SodaPost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'sodaPre.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/sodaPre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600753248_0497_Resource',
    'name': 'sodaPipe.pipeline',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'SodaNewDemo_1600751365.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'sodaPre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'SodaPost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/sodaPipe.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': True}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'soda.architecture',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/soda.architecture',
    'size': 17176,
    'mimeType': 'application/ARCHITECTURE',
    'extension': '.architecture',
    'category': 'NN-Designer'}]},
 'resourcesCount': {'data': 6,
  'model': 1,
  'code': 2,
  'workflow': 0,
  'pipeline': 1,
  'nn-designer': 1,
  'totalCount': 11},
 'projectID': '1600750565_Project',
 'properties': [],
 'versionNumber': 'v1',
 '1600750565_Project': {},
 'id': '1600750565_Project',
 'isModified': True,
 'isFreeze': False,
 'versions': ['v0', 'v1', 'v2']}

```
**Example Request**

```
409 - Not Supported

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources/createnew" --header "Authorization: {{auth}}" -F "type = py" -F "name='sampleWF"
```


**Example Response**

```
409 - Unauthorized

{'message': 'Either Data or the Pre-Processing should be selected',
 'errorCode': 409,
 'exception': 'Missing parameters'}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources/createnew"  -F "type = py" -F "name='sampleWF"
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


### GET - Get the details of the resource file from the Project

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}
```

To get the details of the a resource file

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

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0' \
--form 'file=@/C:/Users/swsh/Desktop/ZMOD0203/MLW_07092020/zementis-mlw/mlw-core/ResourceFIles/TestFiles/iris Dataset.csv'
```

**Example Response**

```
200 - OK

{
    "id": "1601283851_0844_Resource",
    "name": "iris Dataset.csv",
    "description": "",
    "createdAt": "Mon Sep 28 09:04:11 2020",
    "properties": [
        {
            "key": "numberOfRows",
            "label": "Number of Rows",
            "value": 150
        },
        {
            "key": "numberOfColumns",
            "label": "Number of Columns",
            "value": 5
        },
        {
            "key": "columnNames",
            "label": "Column Names",
            "value": [
                "col1",
                "col2",
                "col3",
                "col4",
                "target"
            ]
        }
    ],
    "editedAt": "",
    "type": "CSV",
    "url": "./MLW/1601283001_Project/Data/iris Dataset.csv",
    "size": 2878,
    "mimeType": "text/csv",
    "extension": ".csv",
    "category": "Data"
}

```
**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects/1600750565_Project/resources/1600786266_0437_Resource"
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

### DELETE - Delete the file from the Project

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}
```

To get the details of the a resource file

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

curl --request DELETE "{{url}}/service/mlw/projects/1600750565_Project/resources/1600786266_0437_Resource" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'SodaDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v0',
 'description': 'Soda Bottles NN IC Demo',
 'resources': {'data': [{'id': '1600753567_0365_Resource',
    'name': 'MD.Orig.jpg',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Orig.jpg',
    'size': 39675,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600751893_0717_Resource',
    'name': 'MD.Diet.jpg',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/1600750565_Project/Data/MD.Diet.jpg',
    'size': 42146,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '1600753267_0571_Resource',
    'name': 'predicted_MD_1600753267.json',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [{'key': 'numberOfobjects',
      'label': 'Number of Objects',
      'value': 2},
     {'key': 'keysInJson',
      'label': 'keys in Dictionary',
      'value': ['Dense3', 'PredictedClass']}],
    'editedAt': '',
    'type': 'JSON',
    'url': './MLW/1600750565_Project/Data/predicted_MD_1600753267.json',
    'size': 222,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '1600750617_0744_Resource',
    'name': 'soda.zip',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:55 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/soda.zip',
    'size': 22655457,
    'mimeType': 'application/zip',
    'extension': '.zip',
    'category': 'Data'}],
  'model': [{'id': '1600751811_0233_Resource',
    'name': 'SodaNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:55 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/SodaNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'SodaPost.py',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/SodaPost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'sodaPre.py',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/sodaPre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600753248_0497_Resource',
    'name': 'sodaPipe.pipeline',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'SodaNewDemo_1600751365.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'sodaPre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'SodaPost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/sodaPipe.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': True}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'soda.architecture',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/soda.architecture',
    'size': 17176,
    'mimeType': 'application/ARCHITECTURE',
    'extension': '.architecture',
    'category': 'NN-Designer'}]},
 'resourcesCount': {'data': 4,
  'model': 1,
  'code': 2,
  'workflow': 0,
  'pipeline': 1,
  'nn-designer': 1,
  'totalCount': 9},
 'projectID': '1600750565_Project',
 'properties': [],
 'versionNumber': 'v1',
 '1600750565_Project': {},
 'id': '1600750565_Project',
 'isModified': True,
 'isFreeze': False,
 'versions': ['v0', 'v1', 'v2']}

```
**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/mlw/projects/1600750565_Project/resources/1600786266_0437_Resource"
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
