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
    "data": [
        {
            "id": "1631773118_Project",
            "name": "MLW Testing Trial",
            "description": "Regression tests",
            "createdAt": "2021-09-16T06:18:38.193833Z",
            "properties": [],
            "isModified": true,
            "isFreeze": false,
            "isFreezeProjectPull": false,
            "selectedVersion": "v0",
            "versions": [
                "v0"
            ],
            "resourcesCount": {
                "data": 15,
                "model": 15,
                "code": 25,
                "workflow": 0,
                "pipeline": 0,
                "nn-designer": 5,
                "totalCount": 60
            }
        }
    ]
}
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
|name (string)|required name for the project as body parameter
|description (string)|required description of the project as body parameter

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"Sample Project","description":"A dummy project"}'
```

**Example Response**

```
200 - OK

{
    "id": "1631774924_Project",
    "name": "Sample Project",
    "description": "A dummy project",
    "createdAt": "2021-09-16T06:48:44.995815Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
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
--data-raw '{"name":"Sample Project","description":"A dummy project"}'
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
--data-raw '{"name":"Sample Project","description":"A dummy project"}'
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

Commit the resources of project for version control. The response will be a long running task which runs in the background.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|listOfResources (list)|list of resource IDs as body parameter


**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1600753202_Project/commit' \
--header 'Authorization: {{auth}}
--header 'Content-Type: application/json' \
--data-raw '{"listOfResources":["1631777710_0928_Resource","1631777752_0720_Resource"]}'
```

**Example Response**

```
200 - OK

{
    "id": "1631777908_Tasks",
    "name": "Sample Project",
    "createdAt": "2021-09-16T07:38:28.712732Z",
    "type": "COMMIT/PULL",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "1631777908_0957_Commit",
            "pID": "140104349759232",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "1631777908_Tasks",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T07:38:28.712732Z",
            "projectID": "1631774924_Project",
            "versionNumber": "v0",
            "properties": [
                {
                    "key": "verison",
                    "label": "Version",
                    "value": "v0"
                },
                {
                    "key": "output",
                    "label": "Resources Commited to the Inventory",
                    "value": "admissions.csv\nirisDataset.csv"
                }
            ]
        }
    ],
    "projectID": "1631774924_Project",
    "projectName": "Sample Project",
    "properties": [
        {
            "key": "verison",
            "label": "Version",
            "value": "v0"
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1631777908
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
|name (string)|required name for the project as body parameter
|description (string)|required description of the project as body parameter

**Example Request**

```
201 - OK

curl --location --request PUT '{{url}}/service/mlw/projects/1631774924_Project/' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"ProjectNameChanged","description":"A dummy project New"}'
```

**Example Response**

```
201 - OK

{
    "id": "1631774924_Project",
    "name": "ProjectNameChanged",
    "description": "A dummy project",
    "createdAt": "2021-09-16T06:48:44.995815Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
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

Delete the existing project. The response will be the list of remaining projects, and the delete operation will happen in the background as a long-running task. The delete operation will remove all the tasks related to the project, and removes the notebook assets as well.

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
            "id": "1631773118_Project",
            "name": "MLW Testing Trial",
            "description": "Regression tests",
            "createdAt": "2021-09-16T06:18:38.193833Z",
            "properties": [],
            "isModified": false,
            "isFreeze": false,
            "isFreezeProjectPull": false,
            "selectedVersion": "v1",
            "versions": [
                "v0",
                "v1"
            ],
            "resourcesCount": {
                "data": 38,
                "model": 27,
                "code": 26,
                "workflow": 12,
                "pipeline": 3,
                "nn-designer": 5,
                "totalCount": 111
            }
        }
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

curl --location --request GET '{{url}}/service/mlw/projects/1631779101_Project/resources' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1631779101_Project",
    "name": "Sample Project",
    "description": "A dummy project",
    "createdAt": "2021-09-16T07:58:21.293930Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1631779109_0780_Resource",
                "name": "irisDataset.csv",
                "description": "",
                "createdAt": "2021-09-16T07:58:29.494787Z",
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
                "url": "./MLW/1631779101_Project/Data/irisDataset.csv",
                "downloadUrl": "/download/1631779101_Project/Data/irisDataset.csv",
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
### GET - Refresh the list of resources in a project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Scans the project structure to list any un-reported file in the system, which would have been generated by code execution or through notebook execution.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|refresh|{{True/False}}

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/1631779101_Project/resources?refresh=true' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1631779101_Project",
    "name": "Sample Project",
    "description": "A dummy project",
    "createdAt": "2021-09-16T07:58:21.293930Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1631779109_0780_Resource",
                "name": "irisDataset.csv",
                "description": "",
                "createdAt": "2021-09-16T07:58:29.494787Z",
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
                "url": "./MLW/1631779101_Project/Data/irisDataset.csv",
                "downloadUrl": "/download/1631779101_Project/Data/irisDataset.csv",
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


### GET - Pull data from a specific version of the project to work on

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Pulls all the resources from the {{ < product-c8y-iot > }} inventory of the selected version of the project.

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

curl --location --request GET '{{url}}/service/mlw/projects/1631779101_Project/resources?versionNumber=v0' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1631780828_Tasks",
    "name": "Sample Project",
    "createdAt": "2021-09-16T08:27:08.878904Z",
    "type": "COMMIT/PULL",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "1631780828_0963_Commit",
            "pID": "140106208573184",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "1631780828_Tasks",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T08:27:08.878904Z",
            "projectID": "1631779101_Project",
            "versionNumber": "v0",
            "properties": [
                {
                    "key": "verison",
                    "label": "Version",
                    "value": "v0"
                },
                {
                    "key": "output",
                    "label": "Resources Commited to the Inventory",
                    "value": "irisDataset.csv"
                }
            ]
        },
        {
            "id": "1631780859_0744_Commit",
            "pID": "140106208573184",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "1631780828_Tasks",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T08:27:39.810531Z",
            "projectID": "1631779101_Project",
            "versionNumber": "v1",
            "properties": [
                {
                    "key": "verison",
                    "label": "Version",
                    "value": "v1"
                },
                {
                    "key": "output",
                    "label": "Resources Commited to the Inventory",
                    "value": "irisDataset.csv\nadmissions.csv"
                }
            ]
        },
        {
            "id": "1631780908_0710_Pull",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "1631780828_Tasks",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T08:28:28.709415Z",
            "projectID": "1631779101_Project",
            "versionNumber": "v0",
            "properties": [
                {
                    "key": "verison",
                    "label": "Version",
                    "value": "v0"
                },
                {
                    "key": "output",
                    "label": "Resources Pulled from Inventory",
                    "value": "nameOfFiles"
                }
            ],
            "pID": "140106208573184"
        }
    ],
    "projectID": "1631779101_Project",
    "projectName": "Sample Project",
    "properties": [
        {
            "key": "verison",
            "label": "Version",
            "value": "v0"
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1631780908
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/1631779101_Project/resources?versionNumber=v0'
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


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|file|{{file Object}}

**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/1631779101_Project/resources' \
--header 'Authorization: {{auth}}' \
--form 'file=@/../../iris Dataset.csv'
```

**Example Response**

```
200 - OK

{
    "id": "1631774924_Project",
    "name": "Sample Project",
    "description": "A dummy project",
    "createdAt": "2021-09-16T06:48:44.995815Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1631777752_0720_Resource",
                "name": "irisDataset.csv",
                "description": "",
                "createdAt": "2021-09-16T07:35:52.294740Z",
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
                "url": "./MLW/1631774924_Project/Data/irisDataset.csv",
                "downloadUrl": "/download/1631774924_Project/Data/irisDataset.csv",
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


To create a new workflow file.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|type|wf
|name|{{name of file}}
|modelID|{{modelID}}
|preProcessingID|{{preProcessingID}}
|dataID|{{dataID}}

To create a new notebook file.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|type|ipynb
|name|{{name of file}}

To create a new architecture file for NN Designer.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|template|{{template}}
|type|arch
|name|{{name of file}}


To create a new pipeline file.


|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|type|pipeline
|name|{{name of file}}
|modelID|{{modelID}}
|preProcessingID|{{preProcessingID}}
|postProcessingID|{{postProcessingID}}

**Example Request**

```
200 - OK

curl --location --request POST "{{url}}/service/mlw/projects/1631779101_Project/resources/createnew" \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"type":"py","name":"samplePY"}'
```

**Example Response**

```
200 - OK



{ "id": "1631779101_Project",
    "name": "Sample Project",
    "description": "A dummy project",
    "createdAt": "2021-09-16T07:58:21.293930Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
    "selectedVersion": "v0",
    "versions": [
        "v0",
        "v1"
    ],
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
  'totalCount': 11}
}

```

**Example Request**

```
401 - Unauthorized

curl --location --request POST "{{url}}/service/mlw/projects/1631779101_Project/resources/createnew" \
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

curl --location --request GET '{{url}}/service/mlw/projects/1631779101_Project/resources/1631781323_0128_Resource' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1631781323_0128_Resource",
    "name": "samplePY.py",
    "description": "",
    "createdAt": "2021-09-16T08:35:23.743283Z",
    "properties": [],
    "editedAt": "2021-09-16T08:35:23.743283Z",
    "type": "PY",
    "url": "./MLW/1631779101_Project/Code/samplePY.py",
    "downloadUrl": "/download/1631779101_Project/Code/samplePY.py",
    "size": 0,
    "mimeType": "application/CODE",
    "extension": ".py",
    "category": "Code",
    "deployed": false
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

### GET - Preview the files (code/data/architecture)

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/preview
```
Gets the content of the code file.

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

### GET - Preview the notebook file

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
```

Gets the content of the notebook file.

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
|content|{{content}} as body parameter


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

curl --request DELETE "{{url}}/service/mlw/projects/1631779101_Project/resources/1631781323_0128_Resource" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "id": "1631779101_Project",
    "name": "Sample Project",
    "description": "A dummy project",
    "createdAt": "2021-09-16T07:58:21.293930Z",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "isFreezeProjectPull": false,
    "selectedVersion": "v0",
    "versions": [
        "v0",
        "v1"
    ],
    "resources": {
        "data": [],
        "model": [],
        "code": [
            {
                "id": "1631781425_0955_Resource",
                "name": "samplePY1.py",
                "description": "",
                "createdAt": "2021-09-16T08:37:05.724194Z",
                "properties": [],
                "editedAt": "2021-09-16T08:37:05.724194Z",
                "type": "PY",
                "url": "./MLW/1631779101_Project/Code/samplePY1.py",
                "downloadUrl": "/download/1631779101_Project/Code/samplePY1.py",
                "size": 0,
                "mimeType": "application/CODE",
                "extension": ".py",
                "category": "Code",
                "deployed": false
            }
        ],
        "pipeline": [],
        "workflow": [],
        "nn-designer": []
    },
    "resourcesCount": {
        "data": 0,
        "model": 0,
        "code": 1,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 1
    }
}

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
