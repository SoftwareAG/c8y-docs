---
title: Projects
layout: redirect
weight: 6


aliases:
  - /machine-learning/api-reference-mlw/#projects
---

Operations on Machine Learning Workbench (MLW) Projects.

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

curl --location --request GET '{{url}}/service/mlw/projects'
--header 'Authorization: {{auth}}'
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
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

### POST - Create a new project

```
{{url}}/service/mlw/projects
```

Creates a new project with given project name and description.

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

curl --location --request POST '{{url}}/service/mlw/projects' \
--header 'Authorization: {{auth}}' \
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

curl --location --request POST '{{url}}/service/mlw/projects' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"ExampleProject","description":"A dummy project"}'
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

curl --location --request POST '{{url}}/service/mlw/projects' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"ExampleProject","description":"A dummy project"}'
```
**Example Response**

```
409 - Conflict

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
|projectID (string)|{{project ID}}
|listOfResources (list)|list of resource IDs


**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1600753202_Project/commit' \
--header 'Authorization: {{auth}}
--header 'Content-Type: application/json' \
--data-raw '{"listOfResources":["1601506946_0758_Resource","1600753264_0658_Resource","1600753348_0604_Resource","1600753265_0780_Resource","1601507104_0819_Resource"]}'
```

**Example Response**

```
200 - OK

{
    "id": "1601506976_Tasks",
    "name": "commitProject",
    "createdAt": "Wed Sep 30 23:02:56 2020",
    "type": "COMMIT",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "1601506976_0914_Commit",
            "pID": "68",
            "status": "COMPLETED",
            "message": "Version saved in Inventory",
            "tasksID": "1601506976_Tasks",
            "taskName": "commitProject",
            "type": "COMMIT",
            "executedAt": "Wed Sep 30 23:02:56 2020",
            "projectID": "1600753202_Project",
            "versionNumber": "v2"
        },
        {
            "id": "1601507162_0344_Commit",
            "pID": "69",
            "status": "RUNNING",
            "message": "In Progress",
            "tasksID": "1601506976_Tasks",
            "taskName": "commitProject",
            "type": "COMMIT",
            "executedAt": "Wed Sep 30 23:06:02 2020",
            "projectID": "1600753202_Project",
            "versionNumber": "v3"
        }
    ],
    "projectID": "1600753202_Project",
    "projectName": "commitProject",
    "properties": [
        {
            "key": "verison",
            "label": "Version",
            "value": "v3"
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1601507162
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/1600753202_Project/commit' \
--header 'Content-Type: application/json' \
--data-raw '{"listOfResources":["1601506946_0758_Resource","1600753264_0658_Resource","1600753348_0604_Resource","1600753265_0780_Resource","1601507104_0819_Resource"]}'
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

curl --request POST "{{url}}/service/mlw/projects/1600932615_Project/commit" --header "Authorization: {{auth}}" 
```
**Example Response**

```
409 - Conflict

{'message': 'Please select files',
 'errorCode': 409,
 'exception': 'No file to Commit'}
```

### PUT - Update existing project name and description

```
{{url}}/service/mlw/projects/{{projectID}}
```

Updates the exiting project name and description with given new project name and description.

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

curl --location --request PUT '{{url}}/service/mlw/projects/1601507741_Project/' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"ProjectNameChanged","description":"A dummy project New"}'
```

**Example Response**

```
201 - OK

{
    "id": "1601507741_Project",
    "name": "ProjectNameChanged",
    "description": "A dummy project New",
    "createdAt": "Wed Sep 30 23:15:41 2020",
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
409 - Conflict

curl --location --request PUT '{{url}}/service/mlw/projects/1601507741_Project/' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"ProjectNameChanged","description":"A dummy project New"}'
```

**Example Response**

```
409 - Conflict

{'message': 'Project Name already exist for another project, Description also same',
 'errorCode': 409,
 'exception': 'Project Name Exist'}
```
**Example Request**

```
401 - Unauthorized

curl --location --request PUT '{{url}}/service/mlw/projects/1601507741_Project/' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"ProjectNameChanged","description":"A dummy project New"}'
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

### DELETE - Delete an existing project 

```
{{url}}/service/mlw/projects/{{projectID}}
```

Delete the existing project.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/projects/1601507741_Project' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "type": "MLWData",
            "lastUpdated": "2020-09-22T11:18:29.399Z",
            "name": "Vinay",
            "createdAt": "Tue Sep 15 08:46:29 2020",
            "selectedVersion": "v2",
            "description": "Vinay project",
            "resourcesCount": {
                "data": 0,
                "model": 9,
                "code": 2,
                "workflow": 4,
                "pipeline": 1,
                "nn-designer": 1,
                "totalCount": 17
            },
            "projectID": "1600159589_Project",
            "properties": [],
            "versionNumber": "v2",
            "1600159589_Project": {},
            "id": "1600159589_Project",
            "isModified": false,
            "isFreeze": false,
            "versions": [
                "v0",
                "v1",
                "v2"
            ]
        },
        
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request DELETE '{{url}}/service/mlw/projects/1601507741_Project' \
--header 'Content-Type: application/json' \
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


### GET - List of available resources in a project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Retrieves the list of files available in the project. It contains info related to each file, counts of resources, all available  version information of the selected project.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1600750565_Project/resources' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'sampleDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v2',
 'description': 'sample Bottles NN IC Demo',
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
    'name': 'sample.zip',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/sample.zip',
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
    'name': 'sampleNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True},
   {'id': '1600754440_0307_Resource',
    'name': 'sampleBottleModel_1600753902.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleBottleModel_1600753902.onnx',
    'size': 8296340,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'samplePost.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'samplePre.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600828801_0334_Resource',
    'name': 'samplePipeline.pipeline',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'sampleBottleModel_1600753902.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'samplePre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'samplePost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/samplePipeline.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': False}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'sample.architecture',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/sample.architecture',
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

Scans the project structure to list any un-reported file in the system, which would have been generated by code execution or through notebook execution.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|refresh|{{True/False}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1600750565_Project/resources?refresh=true' \
--header 'Authorization: {{auth}}' 
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'sampleDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v2',
 'description': 'sample Bottles NN IC Demo',
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
    'name': 'sample.zip',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/sample.zip',
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
    'name': 'sampleNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True},
   {'id': '1600754440_0307_Resource',
    'name': 'sampleBottleModel_1600753902.onnx',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:25 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleBottleModel_1600753902.onnx',
    'size': 8296340,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'samplePost.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'samplePre.py',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600828801_0334_Resource',
    'name': 'samplePipeline.pipeline',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'sampleBottleModel_1600753902.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'samplePre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'samplePost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/samplePipeline.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': False}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'sample.architecture',
    'description': '',
    'createdAt': 'Thu Sep 24 09:05:24 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/sample.architecture',
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

Pulls all the resources from the C8Y inventory of the selected version of the project.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 
|versionNumber|{{versionNumber}}


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1600750565_Project/resources?versionNumber=v0' \
--header 'Authorization: {{auth}}' 
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'sampleDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v0',
 'description': 'sample Bottles NN IC Demo',
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
    'name': 'sample.zip',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/sample.zip',
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
    'name': 'sampleNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'samplePost.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'samplePre.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600753248_0497_Resource',
    'name': 'samplePipe.pipeline',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'sampleNewDemo_1600751365.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'samplePre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'samplePost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/samplePipe.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': True}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'sample.architecture',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/sample.architecture',
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

curl --location --request GET '{{url}}/service/mlw/projects/1600750565_Project/resources?versionNumber=v0' 
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


### POST - Upload files into the Project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

To upload the resource files to use in the project, files like csv, txt, json.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|file|{{file Object}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1601283001_Project/resources' \
--header 'Authorization: {{auth}}' \
--form 'file=@/../../iris Dataset.csv'
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

curl --location --request POST '{{url}}/service/mlw/projects/1601283001_Project/resources' \
--header '{{auth}}' \
--form 'file=@/../../LogisticR.pmml'
```

**Example Response**

```
409 - Not Supported

{'message': 'File type not supported',
 'errorCode': 409,
 'exception': 'Contact Admin for Support'}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/1601283001_Project/resources' \
--form 'file=@/../../iris Dataset.csv'
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


### POST - Create new resource files into the Project 

```
{{url}}/service/mlw/projects/{{projectID}}/resources/createnew
```

To create a new Python script.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


|PARAMS||
|:---|:---|
|name|{{name of the file}}
|type|py
|projectID (string)| project ID of the project 


To create a new Workflow file.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 
|type|{{type}}
|name|{{name of file}}
|modelID|{{modelID}}
|preProcessingID|{{preProcessingID}}
|dataID|{{dataID}}

To create a new Notebook file.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 
|type|{{type}}
|name|{{name of file}}

To create a new Architecture file for NN Designer.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 
|template|{{template}}
|type|{{type}}
|name|{{name of file}}


To create a new Pipeline file.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project 
|type|{{type}}
|name|{{name of file}}
|modelID|{{modelID}}
|preProcessingID|{{preProcessingID}}
|postProcessingID|{{postProcessingID}}

**Example Request**

```
200 - OK 

curl --location --request POST "{{url}}/service/mlw/projects/1600750565_Project/resources/createnew" \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"type":"py","name":"samplePY"}'
```

**Example Response**

```
200 - OK

{'type': 'MLWData',
 'lastUpdated': '2020-09-22T06:50:59.574Z',
 'name': 'sampleDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v0',
 'description': 'sample Bottles NN IC Demo',
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
    'name': 'sample.zip',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/1600750565_Project/Data/sample.zip',
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
    'name': 'sampleNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'samplePY.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '1600751640_0643_Resource',
    'name': 'samplePre.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '1600753248_0497_Resource',
    'name': 'samplePipe.pipeline',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [{'label': 'ONNX Model',
      'value': 'sampleNewDemo_1600751365.onnx',
      'key': 'modelID'},
     {'label': 'Pre-Processing Script',
      'value': 'samplePre.py',
      'key': 'preProcessingID'},
     {'label': 'Post-Processing Script',
      'value': 'samplePost.py',
      'key': 'postProcessingID'}],
    'editedAt': '',
    'type': 'PIPELINE',
    'url': './MLW/1600750565_Project/Pipeline/samplePipe.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': True}],
  'workflow': [],
  'nn-designer': [{'id': '1600750594_0269_Resource',
    'name': 'sample.architecture',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/1600750565_Project/NN-Designer/sample.architecture',
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
401 - Unauthorized

curl --location --request POST "{{url}}/service/mlw/projects/1600750565_Project/resources/createnew" \
--header 'Content-Type: application/json' \
--data-raw '{"type":"py","name":"samplePY"}'
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


### GET - Get the details of the resource file 

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}
```

Gets the details of a resource file.

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

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource' \
--header 'Authorization: {{auth}}' 
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
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

### GET - Preview the Code file

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/preview
```
Gets the content of the Code file.

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

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601419709_0877_Resource/preview' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "content": "def process(content):\n    import ssl\n    import requests\n    ssl._create_default_https_context = ssl._create_unverified_context\n    class_indexes = requests.get('https://storage.googleapis.com/download.tensorflow.org/data/imagenet_class_index.json').json()\n    preds = content[0]\n    results = []\n    for pred in preds:\n        top_indices = pred.argsort()[-5:][::-1]\n        result = [tuple(class_indexes[str(i)]) + (pred[i],) for i in top_indices]\n        result.sort(key=lambda x: x[2], reverse=True)\n        results.append(result)\n    contents = {}\n    contents[\"predicted_category\"] = {\n        results[0][0][1]: float(results[0][0][2])\n    }\n    contents[\"top_5_categories\"] = []\n    for pred in results[0]:\n        contents[\"top_5_categories\"].append({pred[1]:float(pred[2])})\n    return contents"
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601419709_0877_Resource/preview' \
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

### GET - Preview the Data file

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/preview
```

Gets the content of the Data file.

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

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/preview' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "columns": [
        "col1",
        "col2",
        "col3",
        "col4",
        "target"
    ],
    "rows": [
        {
            "col1": "5.1",
            "col2": "3.5",
            "col3": "1.4",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.9",
            "col2": "3.0",
            "col3": "1.4",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.7",
            "col2": "3.2",
            "col3": "1.3",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.6",
            "col2": "3.1",
            "col3": "1.5",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "5.0",
            "col2": "3.6",
            "col3": "1.4",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "5.4",
            "col2": "3.9",
            "col3": "1.7",
            "col4": "0.4",
            "target": "0"
        },
        {
            "col1": "4.6",
            "col2": "3.4",
            "col3": "1.4",
            "col4": "0.3",
            "target": "0"
        },
        {
            "col1": "5.0",
            "col2": "3.4",
            "col3": "1.5",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.4",
            "col2": "2.9",
            "col3": "1.4",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.9",
            "col2": "3.1",
            "col3": "1.5",
            "col4": "0.1",
            "target": "0"
        },
        {
            "col1": "5.4",
            "col2": "3.7",
            "col3": "1.5",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.8",
            "col2": "3.4",
            "col3": "1.6",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "4.8",
            "col2": "3.0",
            "col3": "1.4",
            "col4": "0.1",
            "target": "0"
        },
        {
            "col1": "4.3",
            "col2": "3.0",
            "col3": "1.1",
            "col4": "0.1",
            "target": "0"
        },
        {
            "col1": "5.8",
            "col2": "4.0",
            "col3": "1.2",
            "col4": "0.2",
            "target": "0"
        },
        {
            "col1": "5.7",
            "col2": "4.4",
            "col3": "1.5",
            "col4": "0.4",
            "target": "0"
        },
        {
            "col1": "5.4",
            "col2": "3.9",
            "col3": "1.3",
            "col4": "0.4",
            "target": "0"
        },
        {
            "col1": "5.1",
            "col2": "3.5",
            "col3": "1.4",
            "col4": "0.3",
            "target": "0"
        },
        {
            "col1": "5.7",
            "col2": "3.8",
            "col3": "1.7",
            "col4": "0.3",
            "target": "0"
        },
        {
            "col1": "5.1",
            "col2": "3.8",
            "col3": "1.5",
            "col4": "0.3",
            "target": "0"
        }
    ],
    "pagination": {
        "totalRecords": 150,
        "page": 1,
        "size": 20,
        "totalPages": 8
    }
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/preview' \

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
### GET - Preview the Notebook file

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
```

Gets the content of the Notebook file.

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

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601420557_0857_Resource/jnb-content' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": {
        "name": "sampleNotebook1.ipynb",
        "path": "1601283001_Project/Code/sampleNotebook1.ipynb",
        "last_modified": "2020-09-29T23:02:37.279122Z",
        "created": "2020-09-29T23:02:37.279122Z",
        "content": {
            "cells": [],
            "metadata": {},
            "nbformat": 4,
            "nbformat_minor": 4
        },
        "format": "json",
        "mimetype": null,
        "size": 65,
        "writable": true,
        "type": "notebook"
    },
    "session": {
        "id": "bce72e99-6e7b-47dd-b236-2852936147dd",
        "path": "1601283001_Project/Code/sampleNotebook1.ipynb",
        "name": "sampleNotebook1",
        "type": "notebook",
        "kernel": {
            "id": "caa3c162-6ee4-4021-b018-f2e19c97c403",
            "name": "python3",
            "last_activity": "2020-09-29T23:26:23.256662Z",
            "execution_state": "idle",
            "connections": 1
        },
        "notebook": {
            "path": "1601283001_Project/Code/sampleNotebook1.ipynb",
            "name": "sampleNotebook1"
        }
    }
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601420557_0857_Resource/jnb-content' 

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
### GET - Preview the Architecture file
```
{{url}}/service/mlw/projects/1600784593_Project/resources/1603290789_0699_Resource/preview
```
Gets the content of the Architecture file.

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

curl --location --request GET '{{url}}/service/mlw/projects/1600784593_Project/resources/1603290789_0699_Resource/preview' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
  "content": {
    "class": "GraphLinksModel",
    "linkKeyProperty": "key",
    "linkFromPortIdProperty": "fromPort",
    "linkToPortIdProperty": "toPort",
    "modelData": {
      "prop": "value"
    },
    "nodeDataArray": [
      {
        "color": "white",
        "itemType": "LAYER",
        "layerType": "Dense",
        "trainable": true,
        "name": "Dense",
        "properties": [
          {
            "dataType": "string",
            "hint": "Activation function for the dense layer",
            "id": "activation",
            "label": "Activation Function",
            "options": [
              "linear",
              "tanh",
              "relu",
              "sigmoid",
              "softmax"
            ],
            "value": "relu"
          },
          {
            "dataType": "integer",
            "hint": "Neurons for fully connected layer",
            "id": "units",
            "label": "Units",
            "options": [],
            "value": "10"
          },
          {
            "dataType": "array",
            "hint": "only required if dragged first",
            "id": "inputDimension",
            "label": "Input Dimension",
            "options": [],
            "value": "none,2"
          }
        ],
        "text": "Dense",
        "key": "Dense",
        "loc": "600 90"
      },
      {
        "color": "white",
        "itemType": "LAYER",
        "layerType": "Dense",
        "trainable": true,
        "name": "Dense",
        "properties": [
          {
            "dataType": "string",
            "hint": "Activation function for the dense layer",
            "id": "activation",
            "label": "Activation Function",
            "options": [
              "linear",
              "tanh",
              "relu",
              "sigmoid",
              "softmax"
            ],
            "value": "relu"
          },
          {
            "dataType": "integer",
            "hint": "Neurons for fully connected layer",
            "id": "units",
            "label": "Units",
            "options": [],
            "value": "1000"
          },
          {
            "dataType": "array",
            "hint": "only required if dragged first",
            "id": "inputDimension",
            "label": "Input Dimension",
            "options": [],
            "value": ""
          }
        ],
        "text": "Dense",
        "key": "Dense2",
        "loc": "600 170"
      },
      {
        "color": "white",
        "itemType": "LAYER",
        "layerType": "Dense",
        "trainable": true,
        "name": "Dense",
        "properties": [
          {
            "dataType": "string",
            "hint": "Activation function for the dense layer",
            "id": "activation",
            "label": "Activation Function",
            "options": [
              "linear",
              "tanh",
              "relu",
              "sigmoid",
              "softmax"
            ],
            "value": "relu"
          },
          {
            "dataType": "integer",
            "hint": "Neurons for fully connected layer",
            "id": "units",
            "label": "Units",
            "options": [],
            "value": "2000"
          },
          {
            "dataType": "array",
            "hint": "only required if dragged first",
            "id": "inputDimension",
            "label": "Input Dimension",
            "options": [],
            "value": ""
          }
        ],
        "text": "Dense",
        "key": "Dense3",
        "loc": "600 250"
      },
      {
        "color": "white",
        "itemType": "LAYER",
        "layerType": "Dense",
        "trainable": true,
        "name": "Dense",
        "properties": [
          {
            "dataType": "string",
            "hint": "Activation function for the dense layer",
            "id": "activation",
            "label": "Activation Function",
            "options": [
              "linear",
              "tanh",
              "relu",
              "sigmoid",
              "softmax"
            ],
            "value": "sigmoid"
          },
          {
            "dataType": "integer",
            "hint": "Neurons for fully connected layer",
            "id": "units",
            "label": "Units",
            "options": [],
            "value": "1"
          },
          {
            "dataType": "array",
            "hint": "only required if dragged first",
            "id": "inputDimension",
            "label": "Input Dimension",
            "options": [],
            "value": ""
          }
        ],
        "text": "Dense",
        "key": "Dense4",
        "loc": "600 330"
      }
    ],
    "linkDataArray": [
      {
        "from": "Dense",
        "to": "Dense2",
        "fromPort": "b",
        "toPort": "t",
        "key": -1,
        "points": [
          600,
          109.69914805335318,
          600,
          119.69914805335318,
          600,
          130,
          600,
          130,
          600,
          140.30085194664682,
          600,
          150.30085194664682
        ]
      },
      {
        "from": "Dense2",
        "to": "Dense3",
        "fromPort": "b",
        "toPort": "t",
        "key": -2,
        "points": [
          600,
          189.69914805335318,
          600,
          199.69914805335318,
          600,
          210,
          600,
          210,
          600,
          220.30085194664684,
          600,
          230.30085194664684
        ]
      },
      {
        "from": "Dense3",
        "to": "Dense4",
        "fromPort": "b",
        "toPort": "t",
        "key": -3,
        "points": [
          600,
          269.6991480533532,
          600,
          279.6991480533532,
          600,
          290,
          600,
          290,
          600,
          300.3008519466468,
          600,
          310.3008519466468
        ]
      }
    ]
  }
}

```

### PUT - Add content to the file and save

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/save
```

Updates the contents of a file.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|resourceID (string)|{{resource ID}}
|content|{{content}}


**Example Request**

```
200 - OK

curl --location --request PUT '{{url}}/service/mlw/projects/1601283001_Project/resources/1601422676_0095_Resource/save' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"content":"def hello():\r\n    return '\''Hello'\''"}'
```

**Example Response**

```
200 - OK

{
    "message": "File updated successfully!",
    "data": {
        "id": "1601422676_0095_Resource",
        "name": "sampleCode.py",
        "description": "",
        "createdAt": "Tue Sep 29 23:37:56 2020",
        "properties": [],
        "editedAt": "Tue Sep 29 23:37:56 2020",
        "type": "PY",
        "url": "./MLW/1601283001_Project/Code/sampleCode.py",
        "size": 32,
        "mimeType": "application/CODE",
        "extension": ".py",
        "category": "Code"
    }
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request PUT '{{url}}/service/mlw/projects/1601283001_Project/resources/1601422676_0095_Resource/save' \
--header 'Content-Type: text/plain' \
--data-raw '{"content":"def hello():\r\n    return '\''Hello'\''"}'

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

### DELETE - Delete the file from the Project

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}
```

Deletes a resource file.

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
 'name': 'sampleDemo',
 'createdAt': 'Tue Sep 22 04:56:05 2020',
 'selectedVersion': 'v0',
 'description': 'sample Bottles NN IC Demo',
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
   ],
  'model': [{'id': '1600751811_0233_Resource',
    'name': 'sampleNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:55 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/1600750565_Project/Model/sampleNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '1600752121_0420_Resource',
    'name': 'samplePost.py',
    'description': '',
    'createdAt': 'Mon Sep 28 03:03:54 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/1600750565_Project/Code/samplePost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   ],
  'pipeline': [],
  'workflow': [],
  'nn-designer': []},
 'resourcesCount': {'data': 1,
  'model': 1,
  'code': 1,
  'workflow': 0,
  'pipeline': 0,
  'nn-designer': 0,
  'totalCount': 3},
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
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```


### GET - Download the file from the Project in local system

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/download
```

Downloads a resource file.

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

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/download' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

col1,col2,col3,col4,target
5.1,3.5,1.4,0.2,0
4.9,3.0,1.4,0.2,0
4.7,3.2,1.3,0.2,0
4.6,3.1,1.5,0.2,0
5.0,3.6,1.4,0.2,0
5.4,3.9,1.7,0.4,0
4.6,3.4,1.4,0.3,0
5.0,3.4,1.5,0.2,0
4.4,2.9,1.4,0.2,0


```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/download' \
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
