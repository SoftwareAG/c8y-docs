---
weight: 50
title: Application reference
layout: redirect
---

### ApplicationReference [application/vnd.com.nsn.cumulocity.applicationReference+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|reference|Application|0..n|The Application being referenced.|

### DELETE application reference from tenant's applications.

Response body: ApplicationReference

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example Request: Delete reference.


    DELETE /tenant/tenants/<<tenantId>>/applications/<<applicationId>>
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1  204 NO CONTENT
