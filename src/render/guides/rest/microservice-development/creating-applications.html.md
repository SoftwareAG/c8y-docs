---
order: 10
title: Creating applications
layout: redirect
---

In order to start working with microservices an instance of application must be created first. It can be done using the following endpoint:

    POST /application/applications
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json
    {
      "key": "{APPLICATION_NAME}-key",
      "name": "{APPLICATION_NAME}",
      "type": "MICROSERVICE",
      "requiredRoles": ["ROLE_INVENTORY_READ"],
      "roles": ["ROLE_CUSTOM_MICROSERVICE"]
    }

Success response consists of 201 status and location header similar to

    {HOST}/application/applications/{APPLICATION_ID}
    
In the request body there are two fields requiring description:

* requiredRoles - list of Cumulocity permissions, the microservice user needs in order to get data from Cumulocity, e.g. if the microservice creates a managed object, then one of the requiredRoles should be ROLE_INVENTORY_CREATE
* roles - list of microservice permissions. If the microservice exposes own REST API, it can be secured with an own set of permissions, e.g. SMS microservice would require SMS_ADMIN permission to send SMS. These permissions become available in the tenant after microservice subscription. Afterwards, user admin can grant such permission to a user that wants to send SMS via the Cumulocity platform.

    
The application ID for created applications can be found by executing
    
    GET /application/applicationsByName/{APPLICATION_NAME}
        Host: ...
        Authorization: Basic ...
        Accept: application/vnd.com.nsn.cumulocity.application+json
    
The success response will look similar to

    {
        "applications": [
            {
                "activeVersionId": "329",
                "availability": "MARKET",
                "id": "174",
                "key": "{APPLICATION_NAME}-microservice-key",
                "manifest": {
                    "imports": [],
                    "noAppSwitcher": true
                },
                "name": "{APPLICATION_NAME}",
                "owner": {
                    "self": "{HOST}/tenant/tenants/{TENANT}",
                    "tenant": {
                        "id": "{TENANT}"
                    }
                },
                "requiredRoles": [],
                "roles": [],
                "self": "{HOST}/application/applications/174",
                "type": "MICROSERVICE"
            }
        ],
        "next": "{HOST}/application/applications?pageSize=5&currentPage=2",
        "statistics": {
            "currentPage": 1,
            "pageSize": 5
        },
        "self": "{HOST}/application/applications?pageSize=5&currentPage=1"
    }

Application can be updated later on using

    PUT /application/applications/{APPLICATION_ID}
        Host: ...
        Authorization: Basic ...
        Content-Length: ...
        Content-Type: application/vnd.com.nsn.cumulocity.application+json
    {
          "key": "{APPLICATION_NAME}-key",
          "name": "{APPLICATION_NAME}",
          "type": "MICROSERVICE",
          "requiredRoles": ["ROLE_INVENTORY_READ"],
          "roles": ["ROLE_CUSTOM_MICSROSERVICE"]
        }