---
title: Jupyter Integration
layout: redirect
weight: 100


aliases:
  - /machine-learning/api-reference-mlw-bundle/#jnbIntegration
---

Operations on Jupyter Notebook.

>**Info:** An active subscription of the MLW microservice is required to perform operations.

### GET - Preview the Notebook Code along with the Session creation

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
```

To get the content of the Jupyter Notebook file and also create a Jupyter Session

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

curl --location --request GET '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": {
        "name": "untitled.ipynb",
        "path": "1601355085_Project/Code/untitled.ipynb",
        "last_modified": "2020-09-30T07:31:59.062747Z",
        "created": "2020-09-30T07:31:59.062747Z",
        "content": {
            "cells": [],
            "metadata": {},
            "nbformat": 4,
            "nbformat_minor": 4
        },
        "format": "json",
        "mimetype": null,
        "size": 78,
        "writable": true,
        "type": "notebook"
    },
    "session": {
        "id": "e2ba72b2-2daf-4aa6-851d-1b3e491cc2f3",
        "path": "1601355085_Project/Code/untitled.ipynb",
        "name": "untitled",
        "type": "notebook",
        "kernel": {
            "id": "7fd616bf-1044-4954-a0cd-591c973ee950",
            "name": "python3",
            "last_activity": "2020-09-30T07:33:20.920222Z",
            "execution_state": "starting",
            "connections": 0
        },
        "notebook": {
            "path": "1601355085_Project/Code/untitled.ipynb",
            "name": "untitled"
        }
    }
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content' 

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

### PUT - Update the Jupyter Notebook contents

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
```

To update the contents of the Jupyter Notebook file 

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)|{{project ID}}
|resourceID (string)|{{resource ID}}
|content (string)|updated contents of Jupyter Notebook
|format (string)|required format (ex. 'json')
|type (string)|required type (ex. 'notebook')


**Example Request**

```
200 - OK

curl --location --request PUT '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content' \
--header 'Authorization: {{auth}} \
--header 'Content-Type: text/plain' \
--data-raw '{"content": {"cells": [{"cell_type": "code", "execution_count": 1, "metadata": {}, "outputs": [], "source": ["asdasfas"]}], "metadata": {"kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"}, "language_info": {"codemirror_mode": {"name": "ipython", "version": 3}, "file_extension": ".py", "mimetype": "text/x-python", "name": "python", "nbconvert_exporter": "python", "pygments_lexer": "ipython3", "version": "3.6.9"}}, "nbformat": 4, "nbformat_minor": 4},
"format": "json",
"type": "notebook"}'
```

**Example Response**

```
200 - OK

{
    "name": "untitled.ipynb",
    "path": "1601355085_Project/Code/untitled.ipynb",
    "last_modified": "2020-09-30T07:40:02.608464Z",
    "created": "2020-09-30T07:40:02.608464Z",
    "content": null,
    "format": null,
    "mimetype": null,
    "size": 571,
    "writable": true,
    "type": "notebook"
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request PUT '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content' \
--header 'Content-Type: text/plain' \
--data-raw '{"content": {"cells": [{"cell_type": "code", "execution_count": 1, "metadata": {}, "outputs": [], "source": ["asdasfas"]}], "metadata": {"kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"}, "language_info": {"codemirror_mode": {"name": "ipython", "version": 3}, "file_extension": ".py", "mimetype": "text/x-python", "name": "python", "nbconvert_exporter": "python", "pygments_lexer": "ipython3", "version": "3.6.9"}}, "nbformat": 4, "nbformat_minor": 4},
"format": "json",
"type": "notebook"}'

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
400 - Error

curl --location --request PUT '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content' \
--header 'Authorization: {{auth}}' \
--header 'Content-Type: text/plain' \
--data-raw '{"content": {"cells": [{"cell_type": "code", "execution_count": 1, "metadata": {}, "outputs": [], "source": ["asdasfas"]}], "metadata": {"kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"}, "language_info": {"codemirror_mode": {"name": "ipython", "version": 3}, "file_extension": ".py", "mimetype": "text/x-python", "name": "python", "nbconvert_exporter": "python", "pygments_lexer": "ipython3", "version": "3.6.9"}}, "nbformat": 4, "nbformat_minor": 4},
"format": "json",
"type": "jnb"}'

```

**Example Response**

```
400 - Error

{
    "message": "Unhandled contents type: jnb",
    "reason": null
}
```

### GET - List of created Jupyter Sessions

```
{{url}}/service/mlw/jnb-sessions
```

To get the list of created Jupyter Sessions

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw-cdh/jnb-sessions' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "e1b8e814-36c2-4e5a-ba2a-e3524fe2d03c",
            "path": "1600784593_Project/Code/untitled.ipynb",
            "name": "untitled",
            "type": "notebook",
            "kernel": {
                "id": "63b58129-f89e-4325-a069-ef010153ff46",
                "name": "python3",
                "last_activity": "2020-09-28T06:00:14.946977Z",
                "execution_state": "idle",
                "connections": 0
            },
            "notebook": {
                "path": "1600784593_Project/Code/untitled.ipynb",
                "name": "untitled"
            },
            "projectID": "1600784593_Project",
            "projectName": "blah project",
            "fileName": "untitled.ipynb"
        },
        {
            "id": "e2ba72b2-2daf-4aa6-851d-1b3e491cc2f3",
            "path": "1601355085_Project/Code/untitled.ipynb",
            "name": "untitled",
            "type": "notebook",
            "kernel": {
                "id": "7fd616bf-1044-4954-a0cd-591c973ee950",
                "name": "python3",
                "last_activity": "2020-09-30T07:33:20.920222Z",
                "execution_state": "starting",
                "connections": 0
            },
            "notebook": {
                "path": "1601355085_Project/Code/untitled.ipynb",
                "name": "untitled"
            },
            "projectID": "1601355085_Project",
            "projectName": "vinsy",
            "fileName": "untitled.ipynb"
        }
    ]
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content' 

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