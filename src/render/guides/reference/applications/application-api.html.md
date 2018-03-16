---
order: 10
title: Application API
layout: redirect
---

### ApplicationAPI [application/vnd.com.nsn.cumulocity.applicationApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource|
|applicationById|Application/URI-Template|1|A reference to a resource of type Application (placeholder {id})|
|applications|ApplicationCollection|1|Collection of all applications|
|applicationsByName|ApplicationCollection URI-Template|1|Read-only collection of all applications with a particular name (placeholder {name})|
|applicationsByTenant|ApplicationCollection URI-Template|1|Read-only collection of all applications subscribed by a particular tenant (placeholder {tenant})|
|applicationsByOwner|ApplicationCollection URI-Template|1|Read-only collection of all applications owned by a particular tenant (placeholder {tenant})|


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
