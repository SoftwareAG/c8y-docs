---
title: MLE Integration
layout: redirect
weight: 70


aliases:
  - /machine-learning/api-reference-mlw-bundle/#mleIntegration
---

Operations on Models.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### GET - List of deployed PMML models

```
{{url}}/resources/deploy?type=PMML
```

Retrieves the list of PMML models deployed to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/resources/deploy?type=PMML' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "admissionsModel",
            "name": "admissionsModel",
            "type": "PMML"
        },
        {
            "id": "admissionsScenario",
            "name": "admissionsScenario",
            "type": "PMML"
        },
        {
            "id": "admsModel",
            "name": "admsModel",
            "type": "PMML"
        },
        {
            "id": "anomalyModelISO",
            "name": "anomalyModelISO",
            "type": "PMML"
        }
    ]
}
```

### GET - List of deployed ONNX models

```
{{url}}/resources/deploy?type=ONNX
```

Retrieves the list of ONNX models deployed to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/resources/deploy?type=ONNX' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "retrainCasting",
            "name": "retrainCasting",
            "type": "ONNX"
        },
        {
            "id": "sodaBottleModel",
            "name": "sodaBottleModel",
            "type": "ONNX"
        },
        {
            "id": "nnAdms",
            "name": "nnAdms",
            "type": "ONNX"
        },
        {
            "id": "cast",
            "name": "cast",
            "type": "ONNX"
        }
    ]
}
```

### GET - List of deployed PIPELINES

```
{{url}}/resources/deploy?type=PIPELINE
```

Retrieves the list of PIPELINES deployed to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/resources/deploy?type=PIPELINE' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "inferencePipeline",
            "name": "inferencePipeline",
            "type": "PIPELINE"
        },
        {
            "id": "castPipelineNew",
            "name": "castPipelineNew",
            "type": "PIPELINE"
        },
        {
            "id": "admsPipelineTest",
            "name": "admsPipelineTest",
            "type": "PIPELINE"
        },
        {
            "id": "castingNewModel",
            "name": "castingNewModel",
            "type": "PIPELINE"
        }
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/resources/deploy?type=PIPELINE"
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
404 - Error

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw//resources/deploy?type=H5' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```

**Example Response**

```
404 - Error

{
    "message": "Invalid Model Type",
    "errorCode": 404,
    "exception": "invalid model"
}
```

### POST - Deploy model to MLE (PMML)

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Deploys the model PMML to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601355165_0193_Resource",
    "name": "deployModel.pmml",
    "description": "",
    "createdAt": "Tue Sep 29 04:52:45 2020",
    "properties": [
        {
            "key": "version",
            "label": "Version",
            "value": "4.4"
        },
        {
            "key": "fileCreated",
            "label": "Time File Created",
            "value": "2020-09-29 04:52:42.843828"
        },
        {
            "key": "desc",
            "label": "Description",
            "value": "Default Description"
        },
        {
            "key": "columns",
            "label": "Column names",
            "value": [
                "gpa",
                "gre",
                "target"
            ]
        },
        {
            "key": "functionName",
            "label": "Function Name",
            "value": "classification"
        },
        {
            "key": "modelType",
            "label": "Model Type",
            "value": "Tree Based Model"
        },
        {
            "key": "modelName",
            "label": "Model Name",
            "value": "deployModel"
        },
        {
            "key": "numberOfTrees",
            "label": "Number of trees",
            "value": 100
        },
        {
            "key": "modelInformation",
            "label": "Model information",
            "value": 10
        }
    ],
    "editedAt": "",
    "type": "PMML",
    "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
    "size": 699812,
    "mimeType": "application/PMML",
    "extension": ".pmml",
    "category": "Model",
    "deployed": true,
    "mleID": "deployModel"
}
```

### POST - Deploy model to MLE (ONNX)

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Deploys the model ONNX to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357305_0916_Resource",
    "name": "admsNNN_1601357289.onnx",
    "description": "",
    "createdAt": "Tue Sep 29 05:28:25 2020",
    "properties": [],
    "editedAt": "",
    "type": "ONNX",
    "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
    "size": 204024,
    "mimeType": "application/ONNX",
    "extension": ".onnx",
    "category": "Model",
    "deployed": true,
    "mleID": "admsNNN"
}
```

### POST - Deploy model to MLE (PIPELINE)

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Deploys the model PIPELINE to MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357604_0359_Resource",
    "name": "PPP.pipeline",
    "description": "",
    "createdAt": "Tue Sep 29 05:33:24 2020",
    "properties": [
        {
            "key": "modelID",
            "label": "ONNX Model",
            "value": "admsNNN_1601357289.onnx"
        },
        {
            "key": "preProcessingID",
            "label": "Pre-Processing Script",
            "value": "preScriptCastDefect.py"
        },
        {
            "key": "postProcessingID",
            "label": "Post-Processing Script",
            "value": "postScriptCastDefect.py"
        }
    ],
    "editedAt": "Tue Sep 29 05:33:24 2020",
    "type": "PIPELINE",
    "url": "./MLW/1601355085_Project/Pipeline/PPP.pipeline",
    "size": 134,
    "mimeType": "application/PIPELINE",
    "extension": ".pipeline",
    "category": "Pipeline",
    "preProcessingID": "1601357477_0219_Resource",
    "modelID": "1601357305_0916_Resource",
    "postProcessingID": "1601357477_0011_Resource",
    "deployed": true,
    "mleID": "PPP"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy'
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

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```
**Example Response**

```
409 - Error

{
    "message": "A model with the name 'deployModel' already exists.",
    "errorCode": 409,
    "exception": "invalid/error"
}
```


### DELETE - Remove model from MLE (PMML) 

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Removes the PMML model from MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request DELETE 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601355165_0193_Resource",
    "name": "deployModel.pmml",
    "description": "",
    "createdAt": "Tue Sep 29 04:52:45 2020",
    "properties": [
        {
            "key": "version",
            "label": "Version",
            "value": "4.4"
        },
        {
            "key": "fileCreated",
            "label": "Time File Created",
            "value": "2020-09-29 04:52:42.843828"
        },
        {
            "key": "desc",
            "label": "Description",
            "value": "Default Description"
        },
        {
            "key": "columns",
            "label": "Column names",
            "value": [
                "gpa",
                "gre",
                "target"
            ]
        },
        {
            "key": "functionName",
            "label": "Function Name",
            "value": "classification"
        },
        {
            "key": "modelType",
            "label": "Model Type",
            "value": "Tree Based Model"
        },
        {
            "key": "modelName",
            "label": "Model Name",
            "value": "deployModel"
        },
        {
            "key": "numberOfTrees",
            "label": "Number of trees",
            "value": 100
        },
        {
            "key": "modelInformation",
            "label": "Model information",
            "value": 10
        }
    ],
    "editedAt": "",
    "type": "PMML",
    "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
    "size": 699812,
    "mimeType": "application/PMML",
    "extension": ".pmml",
    "category": "Model",
    "deployed": false,
    "mleID": "deployModel"
}
```

### DELETE - Remove model from MLE (ONNX)

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Removes the ONNX model from MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request DELETE 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357305_0916_Resource",
    "name": "admsNNN_1601357289.onnx",
    "description": "",
    "createdAt": "Tue Sep 29 05:28:25 2020",
    "properties": [],
    "editedAt": "",
    "type": "ONNX",
    "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
    "size": 204024,
    "mimeType": "application/ONNX",
    "extension": ".onnx",
    "category": "Model",
    "deployed": false,
    "mleID": "admsNNN"
}
```

### DELETE - Remove model from MLE (PIPELINE)

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy
```

Removes the PIPELINE from MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request DELETE 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: {{auth}}' \
```

**Example Response**

```
200 - OK

{
    "id": "1601357604_0359_Resource",
    "name": "PPP.pipeline",
    "description": "",
    "createdAt": "Tue Sep 29 05:33:24 2020",
    "properties": [
        {
            "key": "modelID",
            "label": "ONNX Model",
            "value": "admsNNN_1601357289.onnx"
        },
        {
            "key": "preProcessingID",
            "label": "Pre-Processing Script",
            "value": "preScriptCastDefect.py"
        },
        {
            "key": "postProcessingID",
            "label": "Post-Processing Script",
            "value": "postScriptCastDefect.py"
        }
    ],
    "editedAt": "Tue Sep 29 05:33:24 2020",
    "type": "PIPELINE",
    "url": "./MLW/1601355085_Project/Pipeline/PPP.pipeline",
    "size": 134,
    "mimeType": "application/PIPELINE",
    "extension": ".pipeline",
    "category": "Pipeline",
    "preProcessingID": "1601357477_0219_Resource",
    "modelID": "1601357305_0916_Resource",
    "postProcessingID": "1601357477_0011_Resource",
    "deployed": false,
    "mleID": "PPP"
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request DELETE 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy'
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
404 - Error

curl --location --request DELETE 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/deploy' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```
**Example Response**

```
404 - Error

{
    "message": "Model 'deployModel' not found.",
    "errorCode": 404,
    "exception": "invalid/error"
}
```

<!-- ''' -->
<!-- title: Resources -->
<!-- layout: redirect -->
<!-- weight: 10 -->

Operations on resources within Projects.


### GET - Predict using the deployed PMML models

```
{{url}}/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=PMML
```

Predicts from the list of deployed PMML models in MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=PMML' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601355085_Project",
    "name": "vinsy",
    "description": "test project",
    "createdAt": "Tue Sep 29 04:51:25 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1601359513_0301_Resource",
                "name": "admissions_test.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:05:13 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 2
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "gpa",
                            "gre"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/admissions_test.csv",
                "size": 15897,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            },
            {
                "id": "1601359589_0521_Resource",
                "name": "predicted_admissions_test_1601359589.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:06:29 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 3
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "probability_0",
                            "probability_1",
                            "predicted_target"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/predicted_admissions_test_1601359589.csv",
                "size": 7439,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            }
        ],
        "model": [
            {
                "id": "1601355165_0193_Resource",
                "name": "deployModel.pmml",
                "description": "",
                "createdAt": "Tue Sep 29 04:52:45 2020",
                "properties": [
                    {
                        "key": "version",
                        "label": "Version",
                        "value": "4.4"
                    },
                    {
                        "key": "fileCreated",
                        "label": "Time File Created",
                        "value": "2020-09-29 04:52:42.843828"
                    },
                    {
                        "key": "desc",
                        "label": "Description",
                        "value": "Default Description"
                    },
                    {
                        "key": "columns",
                        "label": "Column names",
                        "value": [
                            "gpa",
                            "gre",
                            "target"
                        ]
                    },
                    {
                        "key": "functionName",
                        "label": "Function Name",
                        "value": "classification"
                    },
                    {
                        "key": "modelType",
                        "label": "Model Type",
                        "value": "Tree Based Model"
                    },
                    {
                        "key": "modelName",
                        "label": "Model Name",
                        "value": "deployModel"
                    },
                    {
                        "key": "numberOfTrees",
                        "label": "Number of trees",
                        "value": 100
                    },
                    {
                        "key": "modelInformation",
                        "label": "Model information",
                        "value": 10
                    }
                ],
                "editedAt": "",
                "type": "PMML",
                "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
                "size": 699812,
                "mimeType": "application/PMML",
                "extension": ".pmml",
                "category": "Model",
                "deployed": false,
                "mleID": "deployModel"
            },
            {
                "id": "1601357305_0916_Resource",
                "name": "admsNNN_1601357289.onnx",
                "description": "",
                "createdAt": "Tue Sep 29 05:28:25 2020",
                "properties": [],
                "editedAt": "",
                "type": "ONNX",
                "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
                "size": 204024,
                "mimeType": "application/ONNX",
                "extension": ".onnx",
                "category": "Model",
                "deployed": false,
                "mleID": "admsNNN"
            }
        ],
        "code": [
        ],
        "pipeline": [
        ],
        "workflow": [],
        "nn-designer": [
        ]
    },
    "resourcesCount": {
        "data": 2,
        "model": 2,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 4
    }
}
```

### GET - Predict using the deployed ONNX models

```
{{url}}/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=ONNX
```

Predicts from the list of deployed ONNX models in MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=ONNX' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601355085_Project",
    "name": "vinsy",
    "description": "test project",
    "createdAt": "Tue Sep 29 04:51:25 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1601359513_0301_Resource",
                "name": "admissions_test.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:05:13 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 2
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "gpa",
                            "gre"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/admissions_test.csv",
                "size": 15897,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            },
            {
                "id": "1601359589_0521_Resource",
                "name": "predicted_admissions_test_1601359589.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:06:29 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 3
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "probability_0",
                            "probability_1",
                            "predicted_target"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/predicted_admissions_test_1601359589.csv",
                "size": 7439,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            },
        ],
        "model": [
            {
                "id": "1601355165_0193_Resource",
                "name": "deployModel.pmml",
                "description": "",
                "createdAt": "Tue Sep 29 04:52:45 2020",
                "properties": [
                    {
                        "key": "version",
                        "label": "Version",
                        "value": "4.4"
                    },
                    {
                        "key": "fileCreated",
                        "label": "Time File Created",
                        "value": "2020-09-29 04:52:42.843828"
                    },
                    {
                        "key": "desc",
                        "label": "Description",
                        "value": "Default Description"
                    },
                    {
                        "key": "columns",
                        "label": "Column names",
                        "value": [
                            "gpa",
                            "gre",
                            "target"
                        ]
                    },
                    {
                        "key": "functionName",
                        "label": "Function Name",
                        "value": "classification"
                    },
                    {
                        "key": "modelType",
                        "label": "Model Type",
                        "value": "Tree Based Model"
                    },
                    {
                        "key": "modelName",
                        "label": "Model Name",
                        "value": "deployModel"
                    },
                    {
                        "key": "numberOfTrees",
                        "label": "Number of trees",
                        "value": 100
                    },
                    {
                        "key": "modelInformation",
                        "label": "Model information",
                        "value": 10
                    }
                ],
                "editedAt": "",
                "type": "PMML",
                "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
                "size": 699812,
                "mimeType": "application/PMML",
                "extension": ".pmml",
                "category": "Model",
                "deployed": false,
                "mleID": "deployModel"
            },
            {
                "id": "1601357305_0916_Resource",
                "name": "admsNNN_1601357289.onnx",
                "description": "",
                "createdAt": "Tue Sep 29 05:28:25 2020",
                "properties": [],
                "editedAt": "",
                "type": "ONNX",
                "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
                "size": 204024,
                "mimeType": "application/ONNX",
                "extension": ".onnx",
                "category": "Model",
                "deployed": false,
                "mleID": "admsNNN"
            }
        ],
        "code": [
        ],
        "pipeline": [
        ],
        "workflow": [],
        "nn-designer": [
        ]
    },
    "resourcesCount": {
        "data": 2,
        "model": 2,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 4
    }
}
```

### GET - Predict using the deployed PIPELINES

```
{{url}}/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=PIPELINE
```

Predicts from the list of deployed PIPELINE models in MLE.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=PIPELINE' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601355085_Project",
    "name": "vinsy",
    "description": "test project",
    "createdAt": "Tue Sep 29 04:51:25 2020",
    "properties": [],
    "isModified": true,
    "isFreeze": false,
    "selectedVersion": "",
    "versions": [],
    "resources": {
        "data": [
            {
                "id": "1601359513_0301_Resource",
                "name": "admissions_test.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:05:13 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 2
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "gpa",
                            "gre"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/admissions_test.csv",
                "size": 15897,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            },
            {
                "id": "1601360114_0707_Resource",
                "name": "predicted_admissions_test_1601360114.csv",
                "description": "",
                "createdAt": "Tue Sep 29 06:15:14 2020",
                "properties": [
                    {
                        "key": "numberOfRows",
                        "label": "Number of Rows",
                        "value": 644
                    },
                    {
                        "key": "numberOfColumns",
                        "label": "Number of Columns",
                        "value": 1
                    },
                    {
                        "key": "columnNames",
                        "label": "Column Names",
                        "value": [
                            "0"
                        ]
                    }
                ],
                "editedAt": "",
                "type": "CSV",
                "url": "./MLW/1601355085_Project/Data/predicted_admissions_test_1601360114.csv",
                "size": 12482,
                "mimeType": "text/csv",
                "extension": ".csv",
                "category": "Data"
            }
        ],
        "model": [
            {
                "id": "1601355165_0193_Resource",
                "name": "deployModel.pmml",
                "description": "",
                "createdAt": "Tue Sep 29 04:52:45 2020",
                "properties": [
                    {
                        "key": "version",
                        "label": "Version",
                        "value": "4.4"
                    },
                    {
                        "key": "fileCreated",
                        "label": "Time File Created",
                        "value": "2020-09-29 04:52:42.843828"
                    },
                    {
                        "key": "desc",
                        "label": "Description",
                        "value": "Default Description"
                    },
                    {
                        "key": "columns",
                        "label": "Column names",
                        "value": [
                            "gpa",
                            "gre",
                            "target"
                        ]
                    },
                    {
                        "key": "functionName",
                        "label": "Function Name",
                        "value": "classification"
                    },
                    {
                        "key": "modelType",
                        "label": "Model Type",
                        "value": "Tree Based Model"
                    },
                    {
                        "key": "modelName",
                        "label": "Model Name",
                        "value": "deployModel"
                    },
                    {
                        "key": "numberOfTrees",
                        "label": "Number of trees",
                        "value": 100
                    },
                    {
                        "key": "modelInformation",
                        "label": "Model information",
                        "value": 10
                    }
                ],
                "editedAt": "",
                "type": "PMML",
                "url": "./MLW/1601355085_Project/Model/deployModel.pmml",
                "size": 699812,
                "mimeType": "application/PMML",
                "extension": ".pmml",
                "category": "Model",
                "deployed": false,
                "mleID": "deployModel"
            },
            {
                "id": "1601357305_0916_Resource",
                "name": "admsNNN_1601357289.onnx",
                "description": "",
                "createdAt": "Tue Sep 29 05:28:25 2020",
                "properties": [],
                "editedAt": "",
                "type": "ONNX",
                "url": "./MLW/1601355085_Project/Model/admsNNN_1601357289.onnx",
                "size": 204024,
                "mimeType": "application/ONNX",
                "extension": ".onnx",
                "category": "Model",
                "deployed": false,
                "mleID": "admsNNN"
            }
        ],
        "code": [],
        "pipeline": [],
        "workflow": [],
        "nn-designer": []
    },
    "resourcesCount": {
        "data": 2,
        "model": 2,
        "code": 0,
        "workflow": 0,
        "pipeline": 0,
        "nn-designer": 0,
        "totalCount": 4
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=PIPELINE"
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
404 - Error

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/predict/{{modelID}}?type=H5' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```

**Example Response**

```
404 - Error

{
    "message": "Invalid Model Type/File Type.",
    "errorCode": 404,
    "exception": "invalid model"
}
```

