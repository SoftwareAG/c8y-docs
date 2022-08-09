---
title: Jupyter integration
layout: redirect
weight: 100


aliases:
  - /machine-learning/api-reference-mlw-bundle/#jnbIntegration
---

Operations on Jupyter Notebook.

{{< c8y-admon-info >}}
An active subscription of the MLW microservice is required to perform operations.
{{< /c8y-admon-info >}}

### GET - Preview the Notebook code along with the session creation

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
```
Gets the content of the Jupyter Notebook file and also creates a Jupyter session.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID


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
        "name": "untitled.ipynb",
        "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
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
        "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
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
            "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
            "name": "untitled"
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

### PUT - Update the Jupyter Notebook contents

```
{{url}}/service/mlw/projects/{{projectID}}/resources/{{resourceID}}/jnb-content
```

Updates the contents of the Jupyter Notebook file.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_UPDATE

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|projectID (string)| required path variable of an existing project ID
|resourceID (string)| required path variable of an existing resource ID
|content (string)| required body parameter for updated contents of Jupyter Notebook
|format (string)| required body parameter for format (ex. 'json')
|type (string)| required body parameter for type (ex. 'notebook')
|export (Boolean)| required body parameter to export notebook to Python file.


**Example Request**

```
200 - OK

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/jnb-content' \
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
    "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
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

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/jnb-content' \
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
    "message": "No auth information found",
    "info": "https://cumulocity.com/guides/reference/rest-implementation/#error_reporting"
}
```

**Example Request**

```
400 - Error

curl --location --request PUT '{{url}}/service/mlw/projects/0f981b26132d412097ee5e54a257ce9f/resources/72c0673497344164a80e298f679b8139/jnb-content' \
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

### GET - List of created Jupyter sessions

```
{{url}}/service/mlw/jnb-sessions
```

Gets the list of created Jupyter sessions.

**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}


**Example Request**

```
200 - OK

curl --location --request GET '{{url}}/service/mlw/jnb-sessions' \
--header 'Authorization: {{auth}}'
```

**Example Response**

```
200 - OK

{
    "data": [
        {
            "id": "e1b8e814-36c2-4e5a-ba2a-e3524fe2d03c",
            "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
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
                "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
                "name": "untitled"
            },
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "projectName": "blah project",
            "fileName": "untitled.ipynb"
        },
        {
            "id": "e2ba72b2-2daf-4aa6-851d-1b3e491cc2f3",
            "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
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
                "path": "0f981b26132d412097ee5e54a257ce9f/Code/untitled.ipynb",
                "name": "untitled"
            },
            "projectID": "0f981b26132d412097ee5e54a257ce9f",
            "projectName": "vinsy",
            "fileName": "untitled.ipynb"
        }
    ]
}

```
**Example Request**

```
401 - Unauthorized

curl --location --request GET '{{url}}/service/mlw/jnb-sessions'

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
