---
order: 170
title: Applications
layout: default
---

The API below is not published in "/platform" but can be reached using "/application".

The application interface consists of the following parts:

-   The *application API* resource returns URIs and URI templates to collections of applications, so that all applications, all applications with a particular name and all applications owned by particular tenant can be queried.
-   The *application collection* resource retrieves sets of applications and enables creating new application.
-   The *application* resource representsapplication that can be queried and deleted.

# Application API

## ApplicationAPI [application/vnd.com.nsn.cumulocity.applicationApi+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URL
1
Link to this resource.</td>
<td align="left">applicationById
Application/URI-Template
1
A reference to resource of type Application (placeholder &lt;&lt;id&gt;&gt;)</td>
<td align="left">applications
ApplicationCollection
1
Collection of all applications</td>
<td align="left">applicationsByName
ApplicationCollection URI-Template
1
Read-only collection of all applications with a particular name (placeholder &lt;&lt;name&gt;&gt;).</td>
</tr>
</tbody>
</table>

## GET the Application API resource

Response body: application/vnd.com.nsn.cumulocity.ApplicationApi+json  
Required role: ROLE\_Application\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.ApplicationApi+json;ver=...
    Content-Length: ...
    {
        "self" : "<<ApplicationAPI URL>>",
        "applicationsByID" : "<<ApplicationCollection URL>>/{id}",
        "applications" : "<<ApplicationCollection URL>>",
        "applicationsByName" : "<<ApplicationAPI URL>>/applicationByName/{name}",
        "applicationsByOwner" : "<<ApplicationAPI URL>>/applicationsByOwner/{tenantName}",
        "applicationsByTenant" : "<<ApplicationAPI URL>>/applicationsByTenant/{tenantName}"
    }

# Application collection

## ApplicationCollection [application/vnd.com.nsn.cumulocity.applicationCollection+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">applications
Application
0..n
List of applications, see below.</td>
<td align="left">statistics
PagingStatistics
1
Information about paging statistics.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of applications.</td>
</tr>
</tbody>
</table>

## GET an application collection

Response body: ApplicationCollection
  
Required role: ROLE\_APPLICATIN\_MANAGEMENT\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationCollection+json;ver=...
    Content-Length: ...
    {
        "self" : "...",
        "next" : "...",
        "prev" : "...",
        "applications": [
            {
                "availability": "PRIVATE",
                "id": "101",
                "key": "...",
                "name": "myOwnApplcation",
                "owner": {
                    "self": "...",
                    "tenant": {
                        "id": "test"
                    }
                },
                "self": "...",
                "type": "HOSTED",
                "contextPath": "/my_own_application",
                "resourcesUrl":"...",
                "resourcesUsername": "...",
                "resourcesPassword": "..."
            },
            {
                "availability": "MARKET",
                "id": "3",
                "key": "...",
                "name": "energyapp",
                "owner": {
                    "self": "...",
                    "tenant": {
                        "id": "management"
                    }
                },
                "self": "...",
                "type": "EXTERNAL",
                "externalUrl": "..."
                
            }
        ],
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 1
        }
    } 

## POST - Create a new Application

Request body: Application
 Response body: Application (when Accept header is not provided, empty response body is returned)
  
Required role: ROLE\_APPLICATION\_MANAGEMENT\_ADMIN.

Example request:

    POST ...
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
     
    {
      "key": "vehicleControlApplicationSecretKey",
      "name": "vehicleControlApplication",
      "type": "HOSTED",
      "contextPath": "/vehicleControlApplication",
      "resourcesUrl":"http://external.host.com/basedir"
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    Content-Length: ...
    Location: <<URL of new application>>
     
    {
      "availability": "PRIVATE",
      "id": "105",
      "key": "...",
      "name": "vehicleControlApplication",
      "owner": {
          "self": "...",
          "tenant": {
              "id": "taxiCorp"
          }
      },
      "self": "...",
      "type": "HOSTED",
      "contextPath": "/vehicleControlApplication",
      "resourceUrl":"http://external.host.com/basedir",
      "resourcesUsername": "..."
    }

# Application

## Application [application/vnd.com.nsn.cumulocity.application+json;ver=0.9]

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field Name
Type
Occurs
Description
PUT/POST</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URL
1
Link to this Resource
No</td>
<td align="left">id
String
1
Unique identifier for an application
No</td>
<td align="left">name
String
1
Name of the application
POST: Mandatory PUT: Optional</td>
<td align="left">key
String
1
Shared secret of the application
POST: Mandatory PUT: Optional</td>
<td align="left">type
String
1
Type of application. Possible values are : EXTERNAL, HOSTED
POST: Mandatory PUT: No</td>
</tr>
</tbody>
</table>

## PUT - Update an Application

Request body: Application
 Response body: Application (if "ACCEPT" header specified).
  
Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN

Example Request:

    PUT ...
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    { 
      "availability" : "MARKET"
    }

## GET an Application

Response body: Application
  
Required role: ROLE\_APPLICATION\_MANAGEMENT\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    Content-Length: ...
    {
      "availability": "PRIVATE",
      "id": "105",
      "key": "...",
      "name": "vehicleControlApplication",
      "owner": {
          "self": "...",
          "tenant": {
              "id": "taxiDrive"
          }
      },
      "self": "...",
      "type": "EXTERNAL",
      "externalUrl":"http://external.host.com/application"
    }

## DELETE an application

Request Body: N/A.
 Response Message Body: N/A.
  
Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN and owner

Note: Application can be only removed when is availability is PRIVATE or in other case when has no subscriptions.

Example Request: Delete a application

    DELETE [URL to the application]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT
