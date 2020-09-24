---
title: Projects
layout: redirect
weight: 10
---

aliases:
    - /predictive-analytics/api-reference/#models

Operations on MLW Projects.

Info: An active subscription of the Onnx microservice is required to perform operations on ONNX models by leveraging the ONNX APIs.

GET - List of available projects
{{url}}/service/mlw/projects
Retrieves the list of projects available in MLW.

HEADERS	
Authorization	{{auth}}
Example Request

200 - OK

curl --request GET "{{url}}/service/mlw/projects" --header "Authorization: {{auth}}"
Example Response

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
Example Request

401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects"
Example Response

401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
POST - Create a new project
{{url}}/service/mlw/projects
Creates a new project with given project name and desciption.

HEADERS	
Authorization	{{auth}}
PARAMS	
name (string)	required name for the project
description (string)	required description of the project
Example Request

200 - OK

curl --request POST "{{url}}/service/mlw/projects" --header "Authorization: {{auth}}" -F "name=EI0BD2UFTH" -F "description=A dummy project"
Example Response

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
Example Request

401 - Unauthorized

curl --request GET "{{url}}/service/mlw/projects"
Example Response

401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
Example Request

409 - Error

curl --request POST "{{url}}/service/mlw/projects" --header "Authorization: {{auth}}" -F "name=EI0BD2UFTH" -F "description=A dummy project"
Example Response

409 - Error

{'message': 'Project Name already exist',
 'errorCode': 409,
 'exception': 'Project Exist'}
PUT - Update existing project name and description
{{url}}/service/mlw/projects/{{projectID}}
Updates the exiting project name and description with given new project name and desciption.

HEADERS	
Authorization	{{auth}}
PARAMS	
projectID (string)	project ID of the project for which the name needs to be changed
name (string)	required name for the project
description (string)	required description of the project
Example Request

201 - OK

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" -F "name=Newname" -F "description=A dummy project"
Example Response

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
Example Request

409 - OK

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" -F "name=ExistingName" -F "description=A dummy project"
Example Response

409 - OK

{'message': 'Project Name already exist for another project, Description also same',
 'errorCode': 409,
 'exception': 'Project Name Exist'}
Example Request

401 - Unauthorized

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" -F "name=Newname" -F "description=A dummy project"
Example Response

401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
DELETE - Delete an existing project
{{url}}/service/mlw/projects/{{projectID}}
Deletes the exiting project.

HEADERS	
Authorization	{{auth}}
PARAMS	
projectID (string)	project ID of the project for which the name needs to be changed
Example Request

200 - OK

curl --request DELETE "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}" 
Example Response

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
Example Request

401 - Unauthorized

curl --request PUT "{{url}}/service/mlw/projects/1600932615_Project" --header "Authorization: {{auth}}"
Example Response

401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}