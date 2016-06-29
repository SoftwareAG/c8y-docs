---
order: 160
title: Applications
layout: default
---

The API below is not published in "/platform" but can be reached using "/application".

The application interface consists of the following parts:

-   The *application API* resource returns URIs and URI templates to collections of applications, so that all applications, all applications with a particular name and all applications owned by particular tenant can be queried.
-   The *application collection* resource retrieves sets of applications and enables creating new application.
-   The *application* resource represents application that can be queried and deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Application API

### ApplicationAPI [application/vnd.com.nsn.cumulocity.applicationApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|applicationById|Application/URI-Template|1|A reference to resource of type Application (placeholder {id})|
|applications|ApplicationCollection|1|Collection of all applications|
|applicationsByName|ApplicationCollection URI-Template|1|Read-only collection of all applications with a particular name (placeholder {name}).|
|applicationsByTenant|ApplicationCollection URI-Template|1|Read-only collection of all applications subscribed by particular tenant (placeholder {tenant}).|
|applicationsByOwner|ApplicationCollection URI-Template|1|Read-only collection of all applications owned by particular tenant (placeholder {tenant}).|

### GET the Application API resource

Response body: ApplicationApi
  
Required role: ROLE\_Application\_READ

Example request:

	GET /application
	Host: ...
	Authorization: Basic ...

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

## Application collection

### ApplicationCollection [application/vnd.com.nsn.cumulocity.applicationCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|applications|Application|0..n|List of applications, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of applications.|
|next|URI|0..1|Link to a potential next page of applications.|

### GET an application collection

Response body: ApplicationCollection

Required role: ROLE\_APPLICATIN\_MANAGEMENT\_READ

Example request:

	GET /application/applications
	Host: ...
	Authorization: Basic ...

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

### POST - Create a new Application

Request body: Application

Response body: Application 

Required role: ROLE\_APPLICATION\_MANAGEMENT\_ADMIN.

Example request:

    POST /application/applications
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

## Application

### Application [application/vnd.com.nsn.cumulocity.application+json;ver=0.9]

|Field Name|Type|Occurs|Description|PUT/POST|
|:---------|:---|:-----|:----------|:-------|
|self|URL|1|Link to this Resource|No|
|id|String|1|Unique identifier for an application|No|
|name|String|1|Name of the application|POST: Mandatory PUT: Optional|
|key|String|1|Shared secret of the application|POST: Mandatory PUT: Optional|
|type|String|1|Type of application. Possible values are : EXTERNAL, HOSTED, MICROSERVICE|POST: Mandatory PUT: No|
|availability|String|0..1|Access level for other tenants.  Possible values are : "MARKET", "PRIVATE"(default)|Optional|
|owner|TenantReference| 1|Reference to tenant owning this application|No |
|contextPath|String|0..1|contextPath of hosted application |POST: Mandatory (when application type is HOSTED) PUT: Optional|
|resourcesUrl|String|0..1|URL to application base directory hosted on external server|POST: Mandatory (when application type is HOSTED) PUT: Optional|
|resourcesUsername|String|0..1|authorization username to access resourcesUrl |Optional|
|resourcesPassword|String|0..1|authorization password to access resourcesUrl |Optional|
|externalUrl|String|0..1|URL to external application|POST: Mandatory (when application type is EXTERNAL)
PUT: Optional|

### POST - Refresh an application

A POST request to the "refresh" resource redeploys CEL modules that may be contained within an application. Use this request if you performed updates of your CEL code inside the application. Request and response have no body.

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN

Example request:

	POST /applications/application/<<applicationId>>/refresh
	Host: ...
	Authorization: Basic ...

Example response:

	204 No Content

### POST - Copy an application

A POST request to the "clone" resource creates new application based on already existing one. 
Properties are copied to newly created application.
For name, key and context path there is added "clone" prefix in order to be unique. 
If target application is hosted and have active version then new application will have the active version with the same content.
Response contains representation of newly created application.

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN

Example request:

    POST /application/applications/<<application_id>>/clone HTTP/1.1
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.application+json

Example response:

    HTTP/1.1 201 Created
    Location: .../application/applications/{{application_id}}
    Content-Type: application/vnd.com.nsn.cumulocity.application+json; charset=UTF-8; ver=0.9
    
    {
        "activeVersionId": "10414",
        "availability": "MARKET",
        "contextPath": "clonetest",
        "id": "1115",
        "key": "clonesecretKeyForTheApplication",
        "manifest": {},
        "name": "clonetestApplicationName",
        "owner": {
            "self": ".../tenant/tenants/management",
            "tenant": {
                "id": "management"
            }
        },
        "resourcesUrl": "/test",
        "self": ".../application/applications/1115",
        "type": "HOSTED"
    }

### PUT - Update an Application

Request body: Application

Response body: Application (if "ACCEPT" header specified).

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN

Example request:

    PUT /application/applications/<<applicationId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    {
      "availability" : "MARKET"
    }

### GET an Application

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

### DELETE an application

Request Body: N/A.
 
Response Body: N/A.

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN and owner

Note: Application can be only removed when is availability is PRIVATE or in other case when has no subscriptions.

Example Request: Delete a application

    DELETE /application/applications/<<applicationId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT
