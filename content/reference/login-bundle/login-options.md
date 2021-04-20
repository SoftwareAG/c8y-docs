---
weight: 20
title: Login options
layout: redirect
---

### Login options [application/vnd.com.nsn.cumulocity.loginOptionCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URL linking to this resource|
|loginOptions|LoginOption|0..n|Collection of all login options|

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URL linking to this resource|
|type|string|1|Text containing type, one of "basic" or "oauth2"|
|buttonName|string|0..1|Text that appears on the Login button|
|grantType|string|0..1|Text describing oauth2 flow used, for now AUTHORIZATION_CODE only|
|initRequest|string|0..1|Address to initiate oauth login process|

### GET a representation of the login options

Response body: application/vnd.com.nsn.cumulocity.loginoptioncollection+json
Required role: no authorization required

Example request: Get the login options resource

    GET /tenant/loginOptions
    Host: ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.inventoryapi+json;ver=...
    Content-Length: ...
    {
        "loginOptions": [
            {
                "buttonName": "Login with oauth",
                "grantType": "AUTHORIZATION_CODE",
                "initRequest": "https://tenant_id.cumulocity.com/tenant/oauth?response_type=code&tenant_id=tenant_id",
                "self": "http://tenant_id.cumulocity.com/tenant/loginOptions/oauth2",
                "type": "oauth2"
            },
            {
                "self": "http://tenant_id.cumulocity.com/tenant/loginOptions/basic",
                "type": "basic"
            }
        ],
        "self": "http://tenant_id.cumulocity.com/tenant/loginOptions/"
    }
