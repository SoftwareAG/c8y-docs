---
title: AutoML
layout: redirect
weight: 20


aliases:
  - /machine-learning/api-reference-mlw/#autoML
---

Operations on MLW Automated ML.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### GET - Start the AutoML process

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/automl
```

Start the AutoML process by passing the data to the engine and get the initial information to start the AutoML process.

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl' \
--header 'Authorization: {{auth}}'
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
                "Replace with NA",
                "Most Frequent"
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
            },
            "metics_for_models": {
                "Regression": [
                    "neg_log_loss",
                    "neg_mean_absolute_error",
                    "neg_mean_squared_error",
                    "neg_median_absolute_error",
                    "r2",
                    "roc_auc"
                ],
                "Classification": [
                    "accuracy",
                    "adjusted_rand_score",
                    "average_precision",
                    "balanced_accuracy",
                    "f1",
                    "f1_macro",
                    "f1_micro",
                    "f1_samples",
                    "f1_weighted",
                    "precision",
                    "precision_macro",
                    "precision_micro",
                    "precision_samples",
                    "precision_weighted",
                    "recall",
                    "recall_macro",
                    "recall_micro",
                    "recall_samples",
                    "recall_weighted"
                ]
            },
            "anomaly_model_parameters": {
                "IsolationForest": [
                    "n_estimators",
                    "max_samples",
                    "contamination",
                    "max_features",
                    "bootstrap"
                ],
                "OneClassSVM": [
                    "kernel",
                    "degree",
                    "gamma",
                    "tol",
                    "nu",
                    "shrinking",
                    "cache_size",
                    "max_iter"
                ]
            }
        },
        "idforData": "656ea4"
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl'
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

Train an AutoML model by using pre-processing options for variables and using the hyper-parameter given by the user in the form.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|resourceID (string)|{{resource ID}}
|data |filled form values as body parameter
|idforData |required description of the project as body parameter
|target_variable|column name which is target as body parameter
|problem_type|Classification/Regression as body parameter

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

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"data_details":{"data":[{"position":1,"variable":"col1","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":false},{"position":2,"variable":"col2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":3,"variable":"col3","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":4,"variable":"col4","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":5,"variable":"target","dtype":"int64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true}],"problem_type":"Classification","target_variable":"col1","idforData":"656ea4","newPMMLFileName":"sampleClassifiactionModel","parameters":{"generation":5,"population_size":25,"model_name":"sampleClassifiactionModel","scoring":"accuracy","algorithm":["DecisionTreeClassifier","RandomForestClassifier","GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"]}}}'
```

**Example Response**

```
200 - OK

{
    "id": "656ea4",
    "name": "sampleClassifiactionModel2",
    "createdAt": "2021-09-16T09:01:36.773619Z",
    "type": "AUTOML",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "targetVar": "col1",
            "problem_type": "Classification",
            "id": "656ea4",
            "tasksID": "656ea4",
            "shape": [
                150,
                5
            ],
            "executedAt": "2021-09-16T09:01:36.773619Z",
            "taskName": "sampleClassifiactionModel2",
            "type": "AUTOML",
            "listOfModelAccuracy": [],
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "status": "RUNNING",
            "message": "In progress"
        }
    ],
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
    "projectName": "Sample Project",
    "properties": [
        {
            "key": "data",
            "label": "Data Used",
            "value": "irisDataset.csv"
        },
        {
            "key": "targetVar",
            "label": "Target variable",
            "value": "col1"
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
            "value": "sampleClassifiactionModel2"
        },
        {
            "key": "alogrithm",
            "label": "Algorithms Size",
            "value": [
                "DecisionTreeClassifier",
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
            "value": 25
        },
        {
            "key": "generation",
            "label": "Generation",
            "value": 5
        },
        {
            "key": "scoring_type",
            "label": "Scoring type",
            "value": "accuracy"
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1631782896
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl' \
--data-raw '{"data_details":{"data":[{"position":1,"variable":"col1","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":false},{"position":2,"variable":"col2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":3,"variable":"col3","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":4,"variable":"col4","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":5,"variable":"target","dtype":"int64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true}],"problem_type":"Classification","target_variable":"col1","idforData":"656ea4","newPMMLFileName":"sampleClassifiactionModel","parameters":{"generation":5,"population_size":25,"model_name":"sampleClassifiactionModel","scoring":"accuracy","algorithm":["DecisionTreeClassifier","RandomForestClassifier","GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"]}}}'
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
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl' \
--data-raw '{"data_details":{"data":[{"position":1,"variable":"col1","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":false},{"position":2,"variable":"col2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":3,"variable":"col3","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":4,"variable":"col4","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":5,"variable":"target","dtype":"int64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true}],"problem_type":"Classification","target_variable":"col1","idforData":"656ea4","newPMMLFileName":"sampleClassifiactionModel","parameters":{"generation":5,"population_size":25,"model_name":"","scoring":"accuracy","algorithm":["DecisionTreeClassifier","RandomForestClassifier","GradientBoostingClassifier","KNeighborsClassifier","LinearSVC","LogisticRegression","XGBClassifier","LGBMClassifier"]}}}'
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
                "model_name"
            ],
            "msg": "Invalid characters in attribute name",
            "type": "value_error"
        }
    ]
}
```

### GET - Start the Anomaly detection model training process

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/automl
```

Start the Anomaly detection model training process by passing the data to the engine and get the initial information to start the training.

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

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data_details": {
        "data": [
            {
                "position": 1,
                "variable": "time",
                "dtype": "object",
                "missing_val": 0,
                "changedataType": "Categorical",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 2,
                "variable": "Sensor1_temperature2",
                "dtype": "float64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 3,
                "variable": "Sensor1_temperature1",
                "dtype": "float64",
                "missing_val": 0,
                "changedataType": "Continuous",
                "imputation_method": "None",
                "data_transformation_step": "None",
                "use_for_model": true
            },
            {
                "position": 4,
                "variable": "Sensor1_pressure2",
                "dtype": "float64",
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
                "Replace with NA",
                "Most Frequent"
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
            },
            "metics_for_models": {
                "Regression": [
                    "neg_log_loss",
                    "neg_mean_absolute_error",
                    "neg_mean_squared_error",
                    "neg_median_absolute_error",
                    "r2",
                    "roc_auc"
                ],
                "Classification": [
                    "accuracy",
                    "adjusted_rand_score",
                    "average_precision",
                    "balanced_accuracy",
                    "f1",
                    "f1_macro",
                    "f1_micro",
                    "f1_samples",
                    "f1_weighted",
                    "precision",
                    "precision_macro",
                    "precision_micro",
                    "precision_samples",
                    "precision_weighted",
                    "recall",
                    "recall_macro",
                    "recall_micro",
                    "recall_samples",
                    "recall_weighted"
                ]
            },
            "anomaly_model_parameters": {
                "IsolationForest": [
                    "n_estimators",
                    "max_samples",
                    "contamination",
                    "max_features",
                    "bootstrap"
                ],
                "OneClassSVM": [
                    "kernel",
                    "degree",
                    "gamma",
                    "tol",
                    "nu",
                    "shrinking",
                    "cache_size",
                    "max_iter"
                ]
            }
        },
        "idforData": "656ea4"
    }
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/automl' \

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

### POST - Start the training process of the Anomaly detection model

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/anomaly
```

Train an Anomaly detection model by using pre-processing options for variables and using the model options given by the user in the form.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_CREATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|resourceID (string)|{{resource ID}}
|data |filled form values as body parameter
|idforData |required description of the project as a body parameter


|HYPER- PARAMS||
|:---|:---|
|algorithm| selected algorithms


**Example Request**

```
200 - OK

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/anomaly' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: application/json' \
--data-raw '{"data_details":{"data":[{"position":1,"variable":"time","dtype":"object","missing_val":0,"changedataType":"Categorical","imputation_method":"None","data_transformation_step":"None","use_for_model":false},{"position":2,"variable":"Sensor1_temperature2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":3,"variable":"Sensor1_temperature1","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":4,"variable":"Sensor1_pressure2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true}],"idforData":"656ea4","newPMMLFileName":"sampleAnomaly","parameters":{"n_estimators":100,"max_samples":"auto","contamination":0.5,"max_features":1,"bootstrap":false,"algorithm":"IsolationForest","model_name":"sampleAnomaly"}}}'
```

**Example Response**

```
200 - OK

{
    "id": "656ea4",
    "name": "sampleAnomaly2",
    "createdAt": "2021-09-16T09:07:23.487543Z",
    "type": "ANOMALY",
    "cronExpression": "",
    "status": "Not Scheduled",
    "individualTasks": [
        {
            "status": "RUNNING",
            "message": "In progress",
            "problem_type": "Anomaly",
            "id": "656ea4",
            "tasksID": "656ea4",
            "shape": [
                106,
                4
            ],
            "taskName": "sampleAnomaly2",
            "type": "ANOMALY",
            "executedAt": "2021-09-16T09:07:23.487543Z",
            "listOfModelAccuracy": [],
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "pID": "140106208573184"
        }
    ],
    "projectID": "0f981b26132d412097ee5e54a257ce9f",
    "projectName": "Sample Project",
    "properties": [
        {
            "key": "data",
            "label": "Data Used",
            "value": "anomalySampleData.csv"
        },
        {
            "key": "problem_type",
            "label": "Problem Type",
            "value": "Anomaly"
        },
        {
            "key": "dataSize",
            "label": "Data Size",
            "value": [
                106,
                4
            ]
        },
        {
            "key": "model_name",
            "label": "Model Name",
            "value": "sampleAnomaly2"
        },
        {
            "key": "alogrithm",
            "label": "Algorithms Size",
            "value": "IsolationForest"
        }
    ],
    "recurrence": "ONE_TIME",
    "startDate": "",
    "startTimeH": "",
    "startTimeM": "",
    "sortTime": 1631783243
}
```

**Example Request**

```
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/anomaly' \
--header 'Content-Type: application/json' \
--data-raw '{"data_details":{"data":[{"position":1,"variable":"time","dtype":"object","missing_val":0,"changedataType":"Categorical","imputation_method":"None","data_transformation_step":"None","use_for_model":false},{"position":2,"variable":"Sensor1_temperature2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":3,"variable":"Sensor1_temperature1","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":4,"variable":"Sensor1_pressure2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true}],"idforData":"656ea4","newPMMLFileName":"sampleAnomaly","parameters":{"n_estimators":100,"max_samples":"auto","contamination":0.5,"max_features":1,"bootstrap":false,"algorithm":"IsolationForest","model_name":"sampleAnomaly"}}}'
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
401 - Unauthorized

curl --location --request POST '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/anomaly' \
--header 'Content-Type: application/json' \
--data-raw '{"data_details":{"data":[{"position":1,"variable":"time","dtype":"object","missing_val":0,"changedataType":"Categorical","imputation_method":"None","data_transformation_step":"None","use_for_model":false},{"position":2,"variable":"Sensor1_temperature2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":3,"variable":"Sensor1_temperature1","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true},{"position":4,"variable":"Sensor1_pressure2","dtype":"float64","missing_val":0,"changedataType":"Continuous","imputation_method":"None","data_transformation_step":"None","use_for_model":true}],"idforData":"656ea4","newPMMLFileName":"sampleAnomaly","parameters":{"n_estimators":100,"max_samples":"auto","contamination":0.5,"max_features":1,"bootstrap":false,"algorithm":"IsolationForest","model_name":""}}}'
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
                "model_name"
            ],
            "msg": "Invalid characters in attribute name",
            "type": "value_error"
        }
    ]
}
```
