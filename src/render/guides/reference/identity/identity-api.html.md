---
order: 10
title: Identity API
layout: redirect
---

### Identity [application/vnd.com.nsn.cumulocity.identityApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|externalId|ExternalID URI template|1|Single external ID, represented by type of the external ID and the value of the external ID, both as strings (placeholders {type} and {value}).|
|externalIdsOfGlobalId|ExternalIDCollection URI template|1|Represents a collection of external ids for a specified global id (placeholder {globalId}).|

### GET the Identity API resource

Response body: identityApi
  
Required role: ROLE\_IDENTITY\_READ

Example request: 

	GET /identity
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.identityApi+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Identity API URL>>",
      "externalId" : "<<ExternalId URL>>/{type}/{externaId}",
      "externalIdsOfGlobalId" : "<<GlobalIdCollection URL>>/{globalId}/externalIds"
    }
