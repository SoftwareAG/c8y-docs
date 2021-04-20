---
weight: 10
title: Module API
layout: redirect
---

### CepApi [application/vnd.com.nsn.cumulocity.cepApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|modules|ModuleCollection|1|Collection of all modules.|

### GET the CepApi resource

Response body: CepApi

Required role: ROLE\_CEP\_MANAGEMENT\_READ

Example request: Retrieve the CepApi resource collection

	GET /cep
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.cepapi+json;ver=...
    Content-Length: ...
    {
       "self":"<<CepAPI URL>>",
       "modules":{
          "self":"<<ModuleCollection URL>>"
       }
    }
