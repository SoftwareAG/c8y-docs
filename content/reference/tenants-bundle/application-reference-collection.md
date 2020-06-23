---
weight: 40
title: Application reference collection
layout: redirect
---

### ApplicationReferenceCollection [application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|references|array|0..n|List of Options, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of options.|
|next|string|0..1|A URI linking to a potential next page of options.|

### POST application to tenant applications

Example Request: Adds application reference to tenant's applications.

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN or ROLE\_TENANT\_MANAGEMENT\_UPDATE

    POST /tenant/tenants/<<tenantId>>/applications
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...
    {
        "application":{"self":"<<Application URL>>"}
    }


Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...
    Content-Length: ...
    {
        "application":{"self":"<<Application URL>>", "id":...}
    }

### GET a representation of a ApplicationReferenceCollection.

Response body: ApplicationReferenceCollection

Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get Application reference collection.


    GET /tenant/tenants/<<tenantId>>/applications
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
      "references": [
        {
          "application": {
              "availability": "PRIVATE",
              "id": "5",
              "key": "<<hashed value>>",
              "name": "sample_private_application",
              "owner": {
                  "self":"<<Application Owner Tenant URL>>",
                  "tenant": {
                      "id": "sample_tenant"
                  }
              },
              "self":"<<Application 5 URL>>",
              "type": "EXTERNAL"
          },
          "self":"<<This Tenant Application 5 URL>>",
        },
            ...
      ],
      "statistics" : {
        "totalPages" : 1,
        "pageSize" : 5,
        "currentPage" : 1
      },
      "next" : "...",
      "prev" : "..."
    }
