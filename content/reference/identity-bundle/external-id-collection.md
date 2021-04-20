---
weight: 20
title: External ID collection
layout: redirect
---

### ExternalIDCollection [application/vnd.com.nsn.cumulocity.externalIdCollection+json]

As returned by "externalIdsOfGlobalId".

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|externalIds|ExternalId|0..n|List of external IDs, see below.|
|prev|string|0..1|A URI linking to a potential previous page of external IDs.|
|next|string|0..1|A URI linking to a potential next page of external IDs.|

External IDs contained in the collection contain the properties "self", "externalId", "type" and reference to the managed object.

### GET an ExternalIdCollection

Response body: ExternalIdCollection

Required role: ROLE\_IDENTITY\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.externalidcollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<ExternalIdCollection URL>>",
      "externalIds" :[
        {
          "self" : "<<ExternalId URL>>",
          "externalId" : "42",
          "type" : "theregate",
          "managedObject" : {        "id" : "24",
            "self" : "<<URL to the Managed Object>>"
          }
        },
        {
           ...
        }
      ]
    }

### POST / Create an External ID

Request body: ExternalId

Response body: ExternalId

Required role: ROLE\_IDENTITY\_ADMIN

Example Request:

    POST /identity/globalIds/<<deviceId>>/externalIds
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.externalid+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.externalid+json;ver=...
    Content-Length: ...

    {
      "externalId" : "42",
      "type" : "theregate"
    }

Example Response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.externalid+json;ver=...
    Content-Length: ...
    Location: <<URL of new ExternalId mapping>>

    {
      "self" : "<<URL of new ExternalId mapping>>",
      "externalId" : "42",
      "type" : "theregate",
      "managedObject" : {
        "id" : "24",
        "self" : "<<URL to the Managed Object>>"
      }
    }

Note that the managed object has to be created first, then the mapping can be registered.
