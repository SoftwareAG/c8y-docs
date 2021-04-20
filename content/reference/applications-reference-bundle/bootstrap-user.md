---
weight: 40
title: Bootstrap user
layout: redirect
---

### GET bootstrap user

Response body: ApplicationUser

Required role: ROLE_APPLICATION_MANAGEMENT_ADMIN

Example request:
    
    GET /application/applications/{microservice-applicationId}/bootstrapUser
    Host: ...
    Authorization: Basic ....
    Accept: application/vnd.com.nsn.cumulocity.user+json;ver=...
    
Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=...
    Content-Length: ...
    {
        "name": "servicebootstrap_hello-world",
        "password": "9HqBc0miL5",
        "tenant": "dariusz"
    }

