---
weight: 30
title: Module
layout: redirect
---

### Module [application/vnd.com.nsn.cumulocity.cepModule+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Uniquely identifies a module.|No|
|self|URI|1|Link to this resource.|No|
|lastModified|String|1|Time when module was created or modified.|No|
|name|String|1|The module name.|POST: Mandatory PUT: Optional|
|status|String|1|The module status: DEPLOYED, NOT\_DEPLOYED (default).|POST: No PUT: Optional|

### GET Module

Response body: Module

Required role: ROLE\_CEP\_MANAGEMENT\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.cepmodule+json;ver=...
    Content-Length: ...
    {
       "id":"1",
       "lastModified":"2013-04-08T14:35:29.879+02:00",
       "name":"the_module",
       "self":"<<URL of cepModule>>",
       "status":"NOT_DEPLOYED"
    }

### GET Module file with statements

Response body: text/plain

Required role: ROLE\_CEP\_MANAGEMENT\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: text/plain
    Content-Length: ...

    @Name('test1')select * from EventCreated.win:time(1 hour)@Name('test2')select id, count(*) from MyOffOnStream.win:time(1 hour) group by id;

Warning: if given statement has default name assigned by cumulocity platform, annotation @Name will not appear.

### Update Module

Request body: Module

Response body: Module (only if "Accept" header is provided)

Required : ROLE\_CEP\_MANAGEMENT\_ADMIN

Example Request:

    PUT /cep/modules/<<moduleId>>
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.cepmodule+json;ver=...
    {
      "name" : "the_module",
      "status" : "DEPLOYED"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.cepmodule+json;ver=...

### Update module file - Modify a Module with statements

Request body: module file
Response body: Module (if "Accept" header is provided)  
Required role: ROLE\_CEP\_MANAGEMENT\_ADMIN.

Example request:

    PUT /cep/modules/<<moduleId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: text/plain

Example file:

    module testmodule;
    @Name('test1')select * from EventCreated.win:time(1 hour)@Name('test2')select id, count(*) from MyOffOnStream.win:time(1 hour) group by id;

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.cepmodule+json;ver=...
    {
       "id":"3",
       "lastModified":"2013-06-27T15:37:51.091+02:00",
       "name":"management",
       "self":"http:\/\/localhost:8181\/cep\/modules\/3",
       "status":"DEPLOYED"
    }

During module modification old module is deleted and undeployed and new module is created and deployed, therefore module id changes.

### DELETE a module

Request Body: N/A.
Required : ROLE\_CEP\_MANAGEMENT\_ADMIN

Example Request: Delete a module

    DELETE /cep/modules/<<moduleId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT
