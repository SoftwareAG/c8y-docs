---
order: 40
title: Subscriptions
layout: redirect
---

Subscription in this scope means tenant subscription to a microservice application. The subscription is an important step after deployment. 
When a microservice application is deployed, it is subscribable to other tenants. Subscribing to a microservice is the same as subscribing to any other application and can be done via in the Administration application. A tenant can be subscribed by executing the following:

    POST /tenant/tenants/{TENANT}/applications
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json
    Accept: application/vnd.com.nsn.cumulocity.tenant+json
    {
      "application":{
        "id":"{APPLICATION_ID}"
      }
    }

A successful response will look similar to

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json
    Content-Length: ...
    {
        "application": {
            "id": "{APPLICATION_ID}",
            "key": "...",
            "name": "...",
            "owner": {
                "self": ".../tenant/tenants/{TENANT}",
                "tenant": {
                    "id": "{TENANT}"
                }
            },
            "self": "...",
            "type": "MICROSERVICE"
        },
        "self": "..."
    }

The subscriptions are available to microservice user through authorized microservice bootstrap user. 

    GET /application/currentApplication/subscriptions
    Host: ...
    Authorization: Basic …

Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationUserCollection+json
    {
      "users": [{
        "tenant": "...",
        "name": "...",
        "password": "..."
      }]
      "self": ".../applications/application/285/users"
    }

The response consists of service user credentials dedicated for each tenant. A service user is a user account in the tenant that has the permissions ("roles") that the microservice requested on [registration](#creating-application) time. 