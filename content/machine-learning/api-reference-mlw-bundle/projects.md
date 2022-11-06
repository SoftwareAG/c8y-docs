---
title: Projects
layout: redirect
weight: 6


aliases:
  - /machine-learning/api-reference-mlw/#projects
---

Operations on Machine Learning Workbench (MLW) Projects.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### GET - List of available projects

```
{{url}}/service/mlw/projects
```

Retrieves the list of projects available in MLW.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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
            "id": "0f981b26132d412097ee5e54a257ce9f",
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

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
    "id": "0f981b26132d412097ee5e54a257ce9f",
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
**Example Request**

```
409 - Conflict

curl --location --request POST '{{url}}/service/mlw/projects' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"name":"","description":"A dummy project"}'
```
**Example Response**

```
400 - Conflict

{
    "error": "general/Internal Error",
    "message": "Variable issue",
    "info": [
        {
            "loc": [
                "name"
            ],
            "msg": "Invalid characters in attribute name",
            "type": "value_error"
        }
    ]
}
```

### POST - Commit the resources of the project

```
{{url}}/service/mlw/projects/{{projectID}}/commit
```

Commit the resources of project for version control. The response will be a long running task which runs in the background.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/commit' \
--header 'Authorization: {{auth}}
--header 'Content-Type: application/json' \
--data-raw '{"listOfResources":["72c0673497344164a80e298f679b8139","72c0673497344164a80e298f679b8138"]}'
```

**Example Response**

```
200 - OK

{
    "id": "656ea4",
    "name": "Sample Project",
    "createdAt": "2021-09-16T07:38:28.712732Z",
    "type": "COMMIT/PULL",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "656ea5",
            "pID": "140104349759232",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "656ea4",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T07:38:28.712732Z",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
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
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/commit' \
--header 'Content-Type: application/json' \
--data-raw '{"listOfResources":["72c0673497344164a80e298f679b8139","72c0673497344164a80e298f679b8138","72c0673497344164a80e298f679b8137","72c0673497344164a80e298f679b8136","72c0673497344164a80e298f679b8131"]}'
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

curl --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/commit" --header "Authorization: {{auth}}"
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_UPDATE

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

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"ProjectNameChanged","description":"A dummy project New"}'
```

**Example Response**

```
201 - OK

{
    "id": "0f981b26132d412097ee5e54a257ce9f",
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

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/' \
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

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/' \
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
**Example Response**

```
400 - Conflict

{
    "error": "general/Internal Error",
    "message": "Variable issue",
    "info": [
        {
            "loc": [
                "name"
            ],
            "msg": "Invalid characters in attribute name",
            "type": "value_error"
        }
    ]
}
```


### GET - Download a project

```
{{url}}/service/mlw/projects/{{projectID}}/dump
```

To facilitate collaboration and sharing, MLW allows you to export the contents of a project as a compressed file. Download a project by encapsulating all the resources of the project as a ZIP file. The response is a long running task which runs in the background.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/dump' \
--header 'Authorization: {{auth}}
--header 'Content-Type: application/json' \
```

**Example Response**

```
200 - OK

{
    "id": "ecebc016f83843859e06d10cddce59ec",
    "name": "WF_download",
    "createdAt": "2022-02-09T07:54:28.111972Z",
    "type": "PROJECT_DOWNLOAD",
    "cronExpression": "",
    "status": "RUNNING",
    "individualTasks": {
        "97f42d387a534ca9902dfaff9e945a6d": {
            "pID": "140571638638336",
            "status": "RUNNING",
            "type": "PROJECT_DOWNLOAD",
            "id": "97f42d387a534ca9902dfaff9e945a6d",
            "message": "Zipping your project",
            "executedAt": "2022-02-09T08:14:51.399136Z",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "tasksID": "ecebc016f83843859e06d10cddce59ec"
        }
    },
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
    "sortTime": 1644394491,
    "projectName": "WF",
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "properties": [
        {
            "key": "zip_name",
            "label": "ZIP Name",
            "value": "WF_download.zip"
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/dump' \
--header 'Content-Type: application/json'
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

curl --request GET "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/dump" --header "Authorization: {{auth}}"
```
**Example Response**

```
404 - Not Found

{
    "message": "Project with id '0f981b26132d412097ee5e54a257ce9f' not found.",
    "errorCode": 404,
    "exception": "Project not found"
}
```


### POST - Upload a project

```
{{url}}/service/mlw/projects/upload
```

To facilitate collaboration and sharing, MLW allows you to import the contents of a project from a compressed file. Upload a project ZIP file which encapsulates all the resources. The response is a long running task which runs in the background.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|file|{{file Object}}|Project ZIP file


**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/upload' \
--header 'Authorization: {{auth}}
--header 'Content-Type: application/json' \
--form 'file=@"/../../WorkFlow_project.zip"'
```

**Example Response**

```
200 - OK

{
    "id": "395dc2be201b418b97f56f213b820de5",
    "name": "WorkFlow_project_e02232",
    "createdAt": "2022-02-09T08:24:53.045752Z",
    "type": "PROJECT_UPLOAD",
    "cronExpression": "",
    "status": "RUNNING",
    "individualTasks": {
        "ca16d85213014c6a980afacf1ebd7798": {
            "pID": "140571638638336",
            "status": "RUNNING",
            "type": "PROJECT_UPLOAD",
            "id": "ca16d85213014c6a980afacf1ebd7798",
            "message": "Uploading your project",
            "executedAt": "2022-02-09T08:24:53.046085Z",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "tasksID": "395dc2be201b418b97f56f213b820de5"
        }
    },
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
    "sortTime": 1644395093,
    "projectName": "WorkFlow_project_e02232",
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": ""
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/upload' \
--header 'Content-Type: application/json'
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

{{< c8y-admon-info >}}
If there is any running task associated with the project, the delete operation won't be allowed until the task is completed.
{{< /c8y-admon-info >}}

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "0f981b26132d412097ee5e54a257ce9f",
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

curl --location --request DELETE '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f' \
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


**Example Request**

```
400 - Bad Request

curl --location --request DELETE '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f' \
--header 'Content-Type: application/json' \
```


**Example Response**

```
400 - Bad Request

{
    "error": "general/internalError",
    "message": "Running task(s) found associated with projectId: 0f981b26132d412097ee5e54a257ce9f. Project delete not allowed."
}
```


### DELETE - Delete an existing version of a project

```
{{url}}/service/mlw/projects/{{projectID}}?versionNumber={versionNumber}
```

Delete the existing version of a project. The response is the list of the remaining projects without the deleted version of the given project ID. The delete operation will happen in the background as a long-running task. It removes all the tasks related to the project, as well as the notebook assets.

{{< c8y-admon-info >}}
If there is any running task associated with the project, the delete operation won't be allowed until the task is completed.
{{< /c8y-admon-info >}}

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project
|versionNumber| version number to be deleted

**Example Request**

```
200 - OK

curl --location --request DELETE '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f?versionNumber=v0' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "0f981b26132d412097ee5e54a257ce9f",
            "name": "MLW Testing Trial",
            "description": "Regression tests",
            "createdAt": "2021-09-16T06:18:38.193833Z",
            "properties": [],
            "isModified": false,
            "isFreeze": false,
            "isFreezeProjectPull": false,
            "selectedVersion": "v1",
            "versions": [
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
        },
        {
            "id": "0f981b26132d412097ee5e54a257ce9f",
            "name": "MLW Testing Trial 2",
            "description": "Regression tests 2",
            "createdAt": "2021-09-16T06:18:30.193833Z",
            "properties": [],
            "isModified": false,
            "isFreeze": false,
            "isFreezeProjectPull": false,
            "selectedVersion": "v0",
            "versions": [
                "v0"
            ],
            "resourcesCount": {
                "data": 8,
                "model": 2,
                "code": 2,
                "workflow": 0,
                "pipeline": 0,
                "nn-designer": 0,
                "totalCount": 12
            }
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request DELETE '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f?versionNumber=v0' \
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


**Example Request**

```
400 - Bad Request

curl --location --request DELETE '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f?versionNumber=v0' \
--header 'Content-Type: application/json' \
```


**Example Response**

```
400 - Bad Request

{
    "error": "general/internalError",
    "message": "Running task(s) found associated with projectId: 0f981b26132d412097ee5e54a257ce9f. Project version delete not allowed.",
}
```



### GET - List of available resources in a project

```
{{url}}/service/mlw/projects/{{projectID}}/resources
```

Retrieves the list of files available in the project. It contains info related to each file, counts of resources, all available  version information of the selected project.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| project ID of the project

**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "url": "./MLW/0f981b26132d412097ee5e54a257ce9f/Data/irisDataset.csv",
                "downloadUrl": "/download/0f981b26132d412097ee5e54a257ce9f/Data/irisDataset.csv",
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources?refresh=true' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "url": "./MLW/0f981b26132d412097ee5e54a257ce9f/Data/irisDataset.csv",
                "downloadUrl": "/download/0f981b26132d412097ee5e54a257ce9f/Data/irisDataset.csv",
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources?versionNumber=v0' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "656ea4",
    "name": "Sample Project",
    "createdAt": "2021-09-16T08:27:08.878904Z",
    "type": "COMMIT/PULL",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "id": "656ea5",
            "pID": "140106208573184",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "656ea4",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T08:27:08.878904Z",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
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
            "id": "656ea5",
            "pID": "140106208573184",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "656ea4",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T08:27:39.810531Z",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
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
            "id": "656ea6",
            "status": "RUNNING",
            "message": "In progress",
            "tasksID": "656ea4",
            "taskName": "Sample Project",
            "type": "COMMIT/PULL",
            "executedAt": "2021-09-16T08:28:28.709415Z",
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
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
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources?versionNumber=v0'
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources' \
--header 'Authorization: {{auth}}' \
--form 'file=@/../../iris Dataset.csv'
```

**Example Response**

```
200 - OK

{
    "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "url": "./MLW/0f981b26132d412097ee5e54a257ce9f/Data/irisDataset.csv",
                "downloadUrl": "/download/0f981b26132d412097ee5e54a257ce9f/Data/irisDataset.csv",
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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources' \
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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources' \
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

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

curl --location --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/createnew" \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"type":"py","name":"samplePY"}'
```

**Example Response**

```
200 - OK



{ "id": "0f981b26132d412097ee5e54a257ce9f",
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
 'resources': {'data': [{'id': '72c0673497344164a80e298f679b8139',
    'name': 'MD.Orig.jpg',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Data/MD.Orig.jpg',
    'size': 39675,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '72c0673497344164a80e298f679b8138',
    'name': 'MD.Diet.jpg',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'IMAGE',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Data/MD.Diet.jpg',
    'size': 42146,
    'mimeType': 'image/jpeg',
    'extension': '.jpg',
    'category': 'Data'},
   {'id': '72c0673497344164a80e298f679b8137',
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
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Data/predicted_MD_1600753267.json',
    'size': 222,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '72c0673497344164a80e298f679b8136',
    'name': 'sample.zip',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ZIP',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Data/sample.zip',
    'size': 22655457,
    'mimeType': 'application/zip',
    'extension': '.zip',
    'category': 'Data'},
   {'id': '72c0673497344164a80e298f679b8135',
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
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Data/predicted_MD_1600753576.json',
    'size': 235,
    'mimeType': 'application/json',
    'extension': '.json',
    'category': 'Data'},
   {'id': '72c0673497344164a80e298f679b8134',
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
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Data/admissions.csv',
    'size': 17192,
    'mimeType': 'text/csv',
    'extension': '.csv',
    'category': 'Data'}],
  'model': [{'id': '72c0673497344164a80e298f679b8141',
    'name': 'sampleNewDemo_1600751365.onnx',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ONNX',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Model/sampleNewDemo_1600751365.onnx',
    'size': 8296336,
    'mimeType': 'application/ONNX',
    'extension': '.onnx',
    'category': 'Model',
    'deployed': True}],
  'code': [{'id': '72c0673497344164a80e298f679b8142',
    'name': 'samplePY.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Code/samplePost.py',
    'size': 260,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'},
   {'id': '72c0673497344164a80e298f679b8145',
    'name': 'samplePre.py',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'PY',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Code/samplePre.py',
    'size': 278,
    'mimeType': 'text/x-python',
    'extension': '.py',
    'category': 'Code'}],
  'pipeline': [{'id': '72c0673497344164a80e298f679b8187',
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
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/Pipeline/samplePipe.pipeline',
    'size': 134,
    'mimeType': 'application/PIPELINE',
    'extension': '.pipeline',
    'category': 'Pipeline',
    'deployed': True}],
  'workflow': [],
  'nn-designer': [{'id': '72c0673497344164a80e298f679b8177',
    'name': 'sample.architecture',
    'description': '',
    'createdAt': 'Fri Sep 25 09:49:29 2020',
    'properties': [],
    'editedAt': '',
    'type': 'ARCHITECTURE',
    'url': './MLW/0f981b26132d412097ee5e54a257ce9f/NN-Designer/sample.architecture',
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

curl --location --request POST "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/createnew" \
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

**Example Response**

```
400 - Conflict

{
    "error": "general/Internal Error",
    "message": "Variable issue",
    "info": [
        {
            "loc": [
                "type"
            ],
            "msg": "unexpected value; permitted: 'wf', 'py', 'ipynb', 'architecture', 'pipeline'",
            "type": "value_error.const",
            "ctx": {
                "given": "",
                "permitted": [
                    "wf",
                    "py",
                    "ipynb",
                    "architecture",
                    "pipeline"
                ]
            }
        }
    ]
}
```

### GET - Get the details of the resource file

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}
```

Gets the details of a resource file.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "0f981b26132d412097ee5e54a257ce9f",
    "name": "samplePY.py",
    "description": "",
    "createdAt": "2021-09-16T08:35:23.743283Z",
    "properties": [],
    "editedAt": "2021-09-16T08:35:23.743283Z",
    "type": "PY",
    "url": "./MLW/0f981b26132d412097ee5e54a257ce9f/Code/samplePY.py",
    "downloadUrl": "/download/0f981b26132d412097ee5e54a257ce9f/Code/samplePY.py",
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

curl --request GET "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139"
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/preview' \
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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/preview' \
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/jnb-content' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": {
        "name": "sampleNotebook1.ipynb",
        "path": "0f981b26132d412097ee5e54a257ce9f/Code/sampleNotebook1.ipynb",
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
        "path": "0f981b26132d412097ee5e54a257ce9f/Code/sampleNotebook1.ipynb",
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
            "path": "0f981b26132d412097ee5e54a257ce9f/Code/sampleNotebook1.ipynb",
            "name": "sampleNotebook1"
        }
    }
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/jnb-content'

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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_UPDATE

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

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/save' \
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
        "id": "0f981b26132d412097ee5e54a257ce9f",
        "name": "sampleCode.py",
        "description": "",
        "createdAt": "Tue Sep 29 23:37:56 2020",
        "properties": [],
        "editedAt": "Tue Sep 29 23:37:56 2020",
        "type": "PY",
        "url": "./MLW/0f981b26132d412097ee5e54a257ce9f/Code/sampleCode.py",
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

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/save' \
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_ADMIN

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

curl --request DELETE "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
    "id": "0f981b26132d412097ee5e54a257ce9f",
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
                "id": "0f981b26132d412097ee5e54a257ce9f",
                "name": "samplePY1.py",
                "description": "",
                "createdAt": "2021-09-16T08:37:05.724194Z",
                "properties": [],
                "editedAt": "2021-09-16T08:37:05.724194Z",
                "type": "PY",
                "url": "./MLW/0f981b26132d412097ee5e54a257ce9f/Code/samplePY1.py",
                "downloadUrl": "/download/0f981b26132d412097ee5e54a257ce9f/Code/samplePY1.py",
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

curl --request DELETE "{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139"
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

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/download' \
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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/download' \
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
