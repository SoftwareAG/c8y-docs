
---
order: 30
title: Zementis microservice API reference
layout: subsections
collection: 'guides/zementis/api-reference'
---

This API reference is meant to give you a complete idea of the APIs offered by the Zementis microservice in the Cumulocity platform.

The APIs use placeholders which need to be replaced with the values of your choice.

Note especially the following two placeholders:

* {{ url }} = the IP adress/domain of your Cumulocity server
* {{ auth }} = your base64-encoded tenant/username:password or username:password




Resources
Operation on resources.

GET  List Available Resources
{{url}}/service/zementis/resources

This operation retrieves information on all available resource files. Use file names as identifiers for all operations requiring a file_name path variable.



HEADERS

Authorization                          {{auth}}



Example Request

200 - OK
curl --request GET "{{url}}/service/zementis/resources" --header "Authorization: {{auth}}"
Example Response

200 - OK
{
  "resources": [
    {
      "fileName": "custom-functions.jar",
      "resourceType": "Custom Functions",
      "resourceIdentifier": "Function Namespace",
      "resourceNames": [
        "fraud"
      ]
    },
    {
      "fileName": "customerAreaMappingTable.xls",
      "resourceType": "Lookup Tables",
      "resourceIdentifier": "Table Name",
      "resourceNames": [
        "AreaPoints"
      ]
    }
  ]
}
Example Request

401 - Unauthorized
curl --request GET "{{url}}/service/zementis/resources"
Example Response

401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
GET Get Resource Information
{{url}}/service/zementis/resource/{{file_name}}

Get information on the specified resource file.



HEADERS

Authorization                          {{auth}}



PARAMS

file_name (string)                    required path variable for an existing resource file name



Example Request

200 - OK
curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls" --header "Authorization: {{auth}}"
Example Response

200 - OK
{
  "fileName": "customerAreaMappingTable.xls",
  "resourceType": "Lookup Tables",
  "resourceIdentifier": "Table Name",
  "resourceNames": [
    "AreaPoints"
  ]
}
Example Request

401 - Unauthorized
curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls"
Example Response

401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}


Example Request

404 - Not Found
curl --request GET "{{url}}/service/zementis/resource/dummy" --header "Authorization: {{auth}}"
Example Response

404 - Not Found
{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}


GET Get Resource File

{{url}}/service/zementis/resource/{{file_name}}/source

Download a resource file.



HEADERS

Authorization                          {{auth}}



PARAMS

file_name (string)                    required path variable for an existing resource file name



Example Request

200 OK
curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls/source" --header "Authorization: {{auth}}"
Example Response

200 - OK
Resource file
Example Request

401 - Unauthorized
curl --request GET "{{url}}/service/zementis/resource/customerAreaMappingTable.xls/source"
Example Response

401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}


Example Request

404 - Not Found
curl --request GET "{{url}}/service/zementis/resource/dummy/source" --header "Authorization: {{auth}}"
Example Response

404 - Not Found
{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}
POST Upload New Resource File
{{url}}/service/zementis/resource

Upload a new resource file. The file name in 'file' body parameter will be used to identify this resource. Kindly note that the size of the uploaded resource file should not exceed 500 MB.



HEADERS

Authorization                          {{auth}}

Content-Type                           required header parameter with two accepted values: application/octet-stream or multipart/form-data



PARAMS

file                                            required query parameter for Resource file name, if Content-Type is application/octet-stream, or a body parameter for Resource file, if Content-Type is multipart/form-data.



Example Request

201 - Created
curl --request POST "{{url}}/service/zementis/resource" --header "Authorization: {{auth}}" --form "file=@customerAreaMappingTable.xls"
Example Response

201 - Created
{
  "fileName": "customerAreaMappingTable.xls",
  "resourceType": "Lookup Tables",
  "resourceIdentifier": "Table Name",
  "resourceNames": [
    "AreaPoints"
  ]
}
Example Request

400 - Bad Request
curl --request POST "{{url}}/service/zementis/resource" --header "Authorization: {{auth}}" --form "file=@Empty.jar"
Example Response

400 - Bad Request
{
  "errors": [
    "Empty input stream."
  ]
}
Example Request

401 - Unauthorized
curl --request POST "{{url}}/service/zementis/resource" --form "file=@custom-functions.jar"
Example Response

401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}


Example Request

409 - Conflict
curl --request POST "{{url}}/service/zementis/resource" --header "Authorization: {{auth}}" --form "file=@customerAreaMappingTable.xls"
Example Response

409 - Conflict
{
  "errors": [
    "A resource file with the name 'customerAreaMappingTable.xls' already exists."
  ]
}
DEL Remove Resource File  
{{url}}/service/zementis/resource/{{file_name}}

Remove the specified resource file and list all remaining resources.



HEADERS

Authorization                          {{auth}}



PARAMS

file_name (string)                    required path variable for an existing resource file name



Example Request

200 - OK
curl --request DELETE "{{url}}/service/zementis/resource/customerAreaMappingTable.xls" --header "Authorization: {{auth}}"
Example Response

200 - OK
{
  "resources": [
    {
      "fileName": "custom-functions.jar",
      "resourceType": "Custom Functions",
      "resourceIdentifier": "Function Namespace",
      "resourceNames": [
        "fraud"
      ]
    }
  ]
}
Example Request

401 - Unauthorized
curl --request DELETE "{{url}}/service/zementis/resource/customerAreaMappingTable.xls"
Example Response

401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}


Example Request

404 - Not Found
curl --request DELETE "{{url}}/service/zementis/resource/dummy" --header "Authorization: {{auth}}"
Example Response

404 - Not Found
{
  "errors": [
    "Resource file 'dummy' not found"
  ]
}


DEL Remove All Resource Files
{{url}}/service/zementis/resources

Remove all available resources and list the remaining resources.



HEADERS

Authorization                          {{auth}}



Example Request

200 - OK
curl --request DELETE "{{url}}/service/zementis/resources" --header "Authorization: {{auth}}"
Example Response

200 - OK
{
  "resources": []
}
Example Request

401 - Unauthorized
curl --request DELETE "{{url}}/service/zementis/resources"
Example Response

401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}


No labels Edit Labels
User icon: Add a picture of yourself
Write a comment…