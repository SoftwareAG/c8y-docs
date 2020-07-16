---
weight: 20
title: Application collection
layout: redirect
---

### ApplicationCollection [application/vnd.com.nsn.cumulocity.applicationCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|applications|array|0..n|List of applications, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of applications.|
|next|string|0..1|A URI linking to a potential next page of applications.|

### GET an application collection

Response body: ApplicationCollection

Required role: ROLE\_APPLICATION\_MANAGEMENT\_READ

Example request:

	GET /application/applications
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationcollection+json;ver=...
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

### POST - create a new application

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
