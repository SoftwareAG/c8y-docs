---
title: Model groups
layout: redirect
weight: 11

aliases:
  - /predictive-analytics/api-reference/#model-groups
---

Operations on model groups.

>**Info:** Currently, model groups can be used for grouping PMML models only.

### GET - List PMML groups

```
{{url}}/service/zementis/pmml/groups
```

Retrieves all the available PMML model groups.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "next": null,
  "prev": null,
  "statistics": {
    "currentPage": 1,
    "totalPages": 1,
    "pageSize": 5
  },
  "groups": [
    {
      "groupName": "AnomalyDetectionModels",
      "models": [
        "IsolationForestV2",
        "IsolationForest",
        "IsolationForestV3",
        "IsolationForestV4"
      ],
      "primaryModel": "IsolationForestV4"
    },
    {
      "groupName": "IrisClassification",
      "models": [
        "Iris_NN_V1",
        "Iris_NN_V2"
      ],
      "primaryModel": "Iris_NN_V1"
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/pmml/groups"
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


### GET - Get PMML group information

```
{{url}}/service/zementis/pmml/groups/{{group_name}}
```

Get details of the PMML model group.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|group_name (string)|required path variable for existing group name


**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/pmml/groups/AnomalyDetectionModels" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "groupName": "AnomalyDetectionModels",
  "models": [
    "IsolationForestV2",
    "IsolationForest",
    "IsolationForestV3",
    "IsolationForestV4"
  ],
  "primaryModel": "IsolationForestV4"
}
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/pmml/groups/AnomalyDetectionModels"
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

curl --request GET "{{url}}/service/zementis/pmml/groups/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
  "errors": [
    "Model group with name 'dummy' does not exist."
  ]
}
```

### POST - Create PMML group

```
{{url}}/service/zementis/pmml/groups
```

Create new PMML model group.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with value as 'application/json'

**BODY**
```
{
    "groupName": "<groupName>",
    "models": [
        "<ModelName1>",
        "<ModelName2>",
        "<ModelName3>"
    ],
    "primaryModel": "<ModelNameFromModelsList>"
}
```

**Example Request**

```
201 - Created

curl --request POST "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "groupName": "ActivityDetectionModels",
    "models": [
        "ActivityClassifier",
        "ActivityClassifier_V2"
    ],
    "primaryModel": "ActivityClassifier"
}
```

**Example Response**

```
201 - Created

{
    "groupName": "ActivityDetectionModels",
    "models": [
      "ActivityClassifier",
      "ActivityClassifier_V2"
    ],
    "primaryModel": "ActivityClassifier"
}

```

**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "groupName": "GroupWithDuplicateModel",
    "models": [
        "DecisionTreeClassifier",
        "ActivityClassifier_V2"
    ],
    "primaryModel": "DecisionTreeClassifier"
}
```

**Example Response**

```
400 - Bad Request

{
    "errors": [
        "The model 'ActivityClassifier_V2' cannot be added to group because it is used in some other group."
    ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request POST "{{url}}/service/zementis/pmml/groups" --header "Content-Type: application/json"
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

curl --request POST "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
   "groupName": "IrisClassification",
   "models": [
     "Iris_NN_V3",
     "Iris_NN_V4"
   ],
   "primaryModel": "Iris_NN_V3"
}
```

**Example Response**

```
409 - Conflict

{
    "errors": [
        "A model group with the name 'IrisClassification' already exists."
    ]
}
```

### PUT - Update PMML group

```
{{url}}/service/zementis/pmml/groups
```

Update an existing PMML model group by editing the list of models which are part of it or by editing the group's primary model or both.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

**BODY**
```
{
    "groupName": "<existingGroupName>",
    "models": [
        "<ModelName1>",
        "<ModelName2>",
        "<ModelName3>"
    ],
    "primaryModel": "<ModelNameFromModelsList>"
}
```

**Example Request**

```
200 - OK

curl --request PUT "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "groupName": "IrisClassification",
    "models": [
     "Iris_NN_V3",
     "Iris_NN"
    ],
    "primaryModel": "Iris_NN"
}
```

**Example Response**

```
200 - OK 

{
    "groupName": "IrisClassification",
    "models": [
      "Iris_NN_V3",
      "Iris_NN"
    ],
    "primaryModel": "Iris_NN"
}
```

**Example Request**

```
401 - Unauthorized

curl --request PUT "{{url}}/service/zementis/pmml/groups" --header "Content-Type: application/json"
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

curl --request PUT "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}" --header "Content-Type: application/json"

{
    "groupName": "Dummy",
    "models": [
     "Iris_NN_V3",
     "Iris_NN"
    ],
    "primaryModel": "Iris_NN"
}
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Model group with name 'Dummy' does not exist."
    ]
}
```

### DEL - Remove PMML group

```
{{url}}/service/zementis/pmml/groups/{{group_name}}
```

Remove the specified PMML model group and list the remaining groups.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|group_name (string)|required path variable for existing group name


**Example Request**

```
200 - OK

curl --request DELETE "{{url}}/service/zementis/pmml/groups/IrisClassification" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "next": null,
  "prev": null,
  "statistics": {
    "currentPage": 1,
    "totalPages": 1,
    "pageSize": 5
  },
  "groups": [
    {
      "groupName": "AnomalyDetectionModels",
      "models": [
        "IsolationForestV2",
        "IsolationForest",
        "IsolationForestV3",
        "IsolationForestV4"
      ],
      "primaryModel": "IsolationForestV4"
    },
    {
      "groupName": "ActivityDetectionModels",
      "models": [
        "ActivityClassifier",
        "ActivityClassifier_V2"
      ],
      "primaryModel": "ActivityClassifier"
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/pmml/groups/AnomalyDetectionModels"
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

curl --request DELETE "{{url}}/service/zementis/pmml/groups/dummy" --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found

{
    "errors": [
        "Model group with name 'dummy' does not exist."
    ]
}
```

### DEL - Remove PMML groups

```
{{url}}/service/zementis/pmml/groups
```

Remove all available PMML model groups.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

**Example Request**

```
200 OK

curl --request DELETE "{{url}}/service/zementis/pmml/groups" --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK

{
  "next": null,
  "prev": null,
  "statistics": {
    "currentPage": 1,
    "totalPages": 0,
    "pageSize": 5
  },
  "groups": []
}
```

**Example Request**

```
401 - Unauthorized

curl --request DELETE "{{url}}/service/zementis/pmml/groups"
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
