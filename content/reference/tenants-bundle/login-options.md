---
weight: 85
title: Login options
layout: redirect
---

The following endpoint shows which login options are configured for a tenant. 

> **Info:** If OAuth external is the only login option shown in the response, the user will be automatically redirected to the SSO login screen.

### GET login options of a tenant.

Response body: loginOptions

Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get loginOptions

```
    GET <<tenantUrl>>/tenant/loginOptions
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.loginoptioncollection+json;charset=UTF-8;ver=...
```

Example Response:

```
    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.loginoptioncollection+json;charset=UTF-8;ver=...
    Content-Length: ...
    {
	    "self": "<<tenantUrl>>/tenant/loginOptions/",
	    "loginOptions": [
	        {
	            "userManagementSource": "INTERNAL",
	            "initRequest": "<<tenantUrl>>/tenant/oauth?tenant_id=<<tenantId>>",
	            "enforceStrength": "false",
	            "self": "<<tenantUrl>>/tenant/loginOptions/<<loginOptionsId>>",
	            "id": "<<loginOptionsId>>",
	            "grantType": "PASSWORD",
	            "visibleOnLoginPage": true,
	            "type": "OAUTH2_INTERNAL",
	            "tfaStrategy": "SMS"
	        }
	    ]
	}
```