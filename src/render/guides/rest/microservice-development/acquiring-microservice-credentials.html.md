---
order: 30
title: Acquiring microservice credentials
layout: redirect
---

The following section is a wrap up for user management as described in Managing application > [Cumulocity microservices](/guides/concepts/applications/microservices) in the Concepts guide.

Microservice related endpoints require a microservice bootstrap user, which can be obtained by a service provider using

    GET /application/applications/{APPLICATION_ID}/bootstrapUser
    Host: ...
    Authorization: Basic ...
    
Response:

    HTTP/1.1 200 Ok
    Content-Type: application/vnd.com.nsn.cumulocity.user+json
    {
      "tenant": "...",
      "name": "...",
      "password": "..."
    }
    
The credentials allow access to the following endpoints:

    GET /tenant/currentTenant
    GET /user/currentUser
    GET /application/currentApplication
    GET /application/currentApplication/subscription
    PUT /application/currentApplication
        
For example, get current application:

    GET /application/currentApplication
    Authorization: Basic ...
    Content-Type: application/json
    
Response:
    
    {
        "activeVersionId": "329",
        "availability": "MARKET",
        "id": "...",
        "key": "...",
        "manifest": {
            "imports": [],
            "noAppSwitcher": true
        },
        "name": "hello-world",
        "owner": {
            "self": "...",
            "tenant": {
                "id": "..."
            }
        },
        "requiredRoles": [],
        "roles": [],
        "self": "...",
        "type": "MICROSERVICE"
    }
