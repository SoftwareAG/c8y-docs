---
title: AutoML
layout: redirect
weight: 20


aliases:
  - /machine-learning/api-reference-mlw/#autoML
---

Operations on MLW Projects.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### GET - Start the AutoML process by passing the data to the engine and get the initial information to start AutoML process.

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/automl
```

Retrieves the list of projects available in MLW.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/automl' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0'
```

**Example Response**

```
200 - OK

{
    "data_details": {
        "data": [
            {
                "position": 1,
                "variable": "col1",
                "dtype": "float64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 2,
                "variable": "col2",
                "dtype": "float64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 3,
                "variable": "col3",
                "dtype": "float64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 4,
                "variable": "col4",
                "dtype": "float64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 5,
                "variable": "target",
                "dtype": "int64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            }
        ],
        "options": {
            "changedataTypes": [
                "None",
                "Continuous",
                "Categorical"
            ],
            "imputation_methods": [
                "None",
                "Mean",
                "Median",
                "Mode"
            ],
            "data_transformation_steps": [
                "None",
                "One Hot Encoding",
                "Label Encoding",
                "Normalize",
                "Scaling Standard",
                "Scaling Min Max",
                "Scaling Max Absolute"
            ],
            "algorithmTypes": {
                "Regression": [
                    "GradientBoostingRegressor",
                    "DecisionTreeRegressor",
                    "LinearSVR",
                    "RandomForestRegressor",
                    "XGBRegressor",
                    "KNeighborsRegressor",
                    "LinearRegression",
                    "LGBMRegressor"
                ],
                "Classification": [
                    "DecisionTreeClassifier",
                    "RandomForestClassifier",
                    "GradientBoostingClassifier",
                    "KNeighborsClassifier",
                    "LinearSVC",
                    "LogisticRegression",
                    "XGBClassifier",
                    "LGBMClassifier"
                ],
                "Anomaly": [
                    "IsolationForest",
                    "OneClassSVM"
                ]
            }
        },
        "idforData": "1601284185_autoML"
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/automl'
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

### POST - Start the training process of the AutoML 

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/automl
```

Creates a new project with given project name and desciption.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|data |Filled form values
|idforData |required description of the project
|target_variable|column name which is target
|problem_type|Classification/Regression

|HYPER- PARAMS||
|:---|:---|
|algorithm| Selected Algorithms
|generation| integer
|population_size| integer
|model_name| name
|scoring| select one of the option

**Example Request**

```
200 - OK

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/automl' \
--header 'Authorization: Basic YWRtaW46VGVzdGluZ0AxMjM0' \
--header 'Content-Type: application/json' \
--data-raw '{"data_details": {"data": [{"position": 1,
    "variable": "col1","dtype": "float64","missing_val": 0,"changedataType": "Continuous",
    "imputation_method": "None","data_transformation_step": "None","use_for_model": true},
   {"position": 2,"variable": "col2","dtype": "float64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": true},
   {"position": 3,"variable": "col3","dtype": "float64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": true},
   {"position": 4,"variable": "col4","dtype": "float64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": true},
   {"position": 5,"variable": "target","dtype": "int64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": false}],
  "options": {"changedataTypes": ["None", "Continuous", "Categorical"],
   "imputation_methods": ["None", "Mean", "Median", "Mode"],
   "data_transformation_steps": ["None","One Hot Encoding",    "Label Encoding",
    "Normalize",    "Scaling Standard","Scaling Min Max",    "Scaling Max Absolute"],
   "algorithmTypes": {"Regression": ["ExtraTreeRegressor","GradientBoostingRegressor","DecisionTreeRegressor",
                                     "LinearSVR","RandomForestRegressor","XGBRegressor","KNeighborsRegressor", 
                                     "LinearRegression","LGBMRegressor"],
    "Classification": ["DecisionTreeClassifier","ExtraTreesClassifier","RandomForestClassifier",
    "GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"],
    "Anomaly": ["IsolationForest", "OneClassSVM"]}},
    "idforData": "1601284185_autoML",
    "target_variable":"target",
    "problem_type":"Classification",
                  "newPMMLFileName": "SampleModel",
    "parameters": {"generation": 10, "population_size": 2,
                   "model_name": "SampleModel", "scoring": "accuracy",
                   "algorithm": ["DecisionTreeClassifier","ExtraTreesClassifier","RandomForestClassifier",
    "GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"]}}}'
```

**Example Response**

```
200 - OK

{
    "id": "1601284841_Tasks",
    "name": "SampleModel",
    "createdAt": "Mon Sep 28 09:20:41 2020",
    "type": "AUTOML",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "pID": "859",
            "status": "RUNNING",
            "message": "In Progress",
            "targetVar": "target",
            "problem_type": "Classification",
            "id": "1601284185_autoML",
            "tasksID": "1601284841_Tasks",
            "shape": [
                150,
                5
            ],
            "taskName": "SampleModel",
            "type": "AUTOML",
            "executedAt": "Mon Sep 28 09:20:41 2020",
            "listOfModelAccuracy": [],
            "projectID": "1601283001_Project"
        }
    ],
    "projectID": "1601283001_Project",
    "projectName": "ExampleProject",
    "properties": [
        {
            "key": "targetVar",
            "label": "Target variable",
            "value": "target"
        },
        {
            "key": "problem_type",
            "label": "Problem Type",
            "value": "Classification"
        },
        {
            "key": "dataSize",
            "label": "Data Size",
            "value": [
                150,
                5
            ]
        },
        {
            "key": "model_name",
            "label": "Model Name",
            "value": "SampleModel"
        },
        {
            "key": "alogrithm",
            "label": "Algorithms Size",
            "value": [
                "DecisionTreeClassifier",
                "ExtraTreesClassifier",
                "RandomForestClassifier",
                "GradientBoostingClassifier",
                "KNeighborsClassifier",
                "LinearSVC",
                "LogisticRegression",
                "XGBClassifier",
                "LGBMClassifier"
            ]
        },
        {
            "key": "population_size",
            "label": "Population Size",
            "value": 2
        },
        {
            "key": "generation",
            "label": "Generation",
            "value": 10
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1601284841
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST 'https://mlw.basic.stage.c8y.io/service/mlw/projects/1601283001_Project/resources/1601283851_0844_Resource/automl' \
--data-raw '{"data_details": {"data": [{"position": 1,
    "variable": "col1","dtype": "float64","missing_val": 0,"changedataType": "Continuous",
    "imputation_method": "None","data_transformation_step": "None","use_for_model": true},
   {"position": 2,"variable": "col2","dtype": "float64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": true},
   {"position": 3,"variable": "col3","dtype": "float64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": true},
   {"position": 4,"variable": "col4","dtype": "float64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": true},
   {"position": 5,"variable": "target","dtype": "int64","missing_val": 0,
    "changedataType": "Continuous","imputation_method": "None","data_transformation_step": "None",
    "use_for_model": false}],
  "options": {"changedataTypes": ["None", "Continuous", "Categorical"],
   "imputation_methods": ["None", "Mean", "Median", "Mode"],
   "data_transformation_steps": ["None","One Hot Encoding",    "Label Encoding",
    "Normalize",    "Scaling Standard","Scaling Min Max",    "Scaling Max Absolute"],
   "algorithmTypes": {"Regression": ["ExtraTreeRegressor","GradientBoostingRegressor","DecisionTreeRegressor",
                                     "LinearSVR","RandomForestRegressor","XGBRegressor","KNeighborsRegressor", 
                                     "LinearRegression","LGBMRegressor"],
    "Classification": ["DecisionTreeClassifier","ExtraTreesClassifier","RandomForestClassifier",
    "GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"],
    "Anomaly": ["IsolationForest", "OneClassSVM"]}},
    "idforData": "1601284185_autoML",
    "target_variable":"target",
    "problem_type":"Classification",
                  "newPMMLFileName": "SampleModel",
    "parameters": {"generation": 10, "population_size": 2,
                   "model_name": "SampleModel", "scoring": "accuracy",
                   "algorithm": ["DecisionTreeClassifier","ExtraTreesClassifier","RandomForestClassifier",
    "GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"]}}}'
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


