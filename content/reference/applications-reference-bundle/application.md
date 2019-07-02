---
weight: 30
title: Application
layout: redirect
---

### Application [application/vnd.com.nsn.cumulocity.application+json;ver=0.9]

|Field Name|Type|Occurs|Description|PUT/POST|
|:---------|:---|:-----|:----------|:-------|
|self|URL|1|Link to this resource|No|
|id|String|1|Unique identifier for the application|No|
|name|String|1|Name of application|POST: Mandatory PUT: Optional|
|key|String|1|Shared secret of application|POST: Mandatory PUT: Optional|
|type|String|1|Type of application. Possible values are : EXTERNAL, HOSTED, MICROSERVICE|POST: Mandatory PUT: No|
|availability|String|0..1|Access level for other tenants.  Possible values are : MARKET, PRIVATE (default)|Optional|
|owner|TenantReference| 1|Reference to the tenant owning this application|No |
|contextPath|String|0..1|contextPath of the hosted application |POST: Mandatory (when application type is HOSTED) PUT: Optional|
|resourcesUrl|String|0..1|URL to application base directory hosted on an external server|POST: Mandatory (when application type is HOSTED) PUT: Optional|
|resourcesUsername|String|0..1|authorization username to access resourcesUrl |Optional|
|resourcesPassword|String|0..1|authorization password to access resourcesUrl |Optional|
|externalUrl|String|0..1|URL to the external application|POST: Mandatory (when application type is EXTERNAL) PUT: Optional|

### POST - copy an application

A POST request to the "clone" resource creates a new application based on an already existing one. 

The properties are copied to the newly created application. For name, key and context path a "clone" prefix is added in order to be unique. 

If the target application is hosted and has an active version, the new application will have the active version with the same content.

The response contains a representation of the newly created application.

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

### PUT - update an application

Request body: Application

Response body: Application (if "ACCEPT" header is specified).

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

### GET an application

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

Request Body: n/a
 
Response Body: n/a

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN and owner

>Info: The application can only be removed when its availability is PRIVATE or in other case when it has no subscriptions.

Example Request: Delete an application

    DELETE /application/applications/<<applicationId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT
