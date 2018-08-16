---
order: 20
title: Login options
layout: redirect
---

### Login options [application/vnd.com.nsn.cumulocity.loginOptionCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|loginOptions|LoginOption|0..n|Collection of all login options.|

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|type|String|1|Text containing type, basic or oauth2|
|buttonName|String|0..1|Text that must appear on login button|
|grantType|String|0..1|Text describing oauth2 flow used, for now AUTHORIZATION_CODE only|
|initRequest|String|0..1|Addres to initiate oauth login process|

### GET a representation of the Login options

Response body: application/vnd.com.nsn.cumulocity.loginOptionCollection+json
Required role: no authorization required

Example request: Get the login options resource

    GET /tenant/loginOptions
    Host: ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.inventoryApi+json;ver=...
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
