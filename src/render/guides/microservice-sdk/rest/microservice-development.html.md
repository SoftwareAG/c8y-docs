---
order: 20
title: Microservice development
layout: redirect
---

The following guide will introduce you to basic REST endpoints required for REST microservice development. 

### <a name="creating-application"></a> Creating applications

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

* requiredRoles - List of Cumulocity permissions, the microservice user needs in order to get data from Cumulocity, e.g. if the microservice creates a managed object, then one of the requiredRoles should be ROLE_INVENTORY_CREATE
* roles - List of microservice permissions. If the microservice exposes own REST API, it can be secured with an own set of permissions, e.g. SMS microservice would require SMS_ADMIN permission to send SMS. These permissions become available in the tenant after microservice subscription. Afterwards, user admin can grant such permission to a user that wants to send SMS via the Cumulocity platform.
    
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

The application can be updated later on using

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


### Deploying applications

A microservice application gets available for Cumulocity platform users by uploading a binary ZIP file. 
     
     POST /application/applications/{APPLICATION_ID}/binaries
     Host: ...
     Authorization: Basic …
     Content-Type: multipart/form-data
     
The ZIP file must consist of:

* cumulocity.json - file describing the deployment
* image.tar - executable Docker image 


###<a name="acquiring-microservice-credentials"></a>Acquiring microservice credentials

The following section is a wrap up for user management as described under [General aspects of microservices in Cumulocity](/guides/microservice-sdk/concept).

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
    
    
### Subscriptions

Subscription in this scope means tenant subscription to a microservice application. The subscription is an important step after deployment. 
When a microservice application is deployed, it is subscribable to other tenants. Subscribing to a microservice is the same as subscribing to any other application and can be done in the Administration application. A tenant can be subscribed by executing the following:

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

