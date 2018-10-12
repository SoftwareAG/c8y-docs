---
order: 60
title: Security
layout: redirect
---

Microservices typically provide a REST API. For inbound REST requests, Cumulocity provides a light API gateway (“Proxy”) and inbound websocket requests are not supported. This API gateway is located between the client and the microservice container. The API gateway provides:

* Authorization: All calls are authenticated using Cumulocity users and Basic authorization.
* TLS Termination: TLS inbound calls are terminated and only HTTP is used inside the cluster.
* Metering: The API calls are metered in the “API calls” tenant statistics.
* Routing: The API gateway routes requests for “/service/&lt;name&gt;” to the microservice “&lt;name&gt;”. The request routed to the microservice container and tenant options are added to the request headers.

* Tenant platform user: The user that logs into the application. Created using the Cumulocity Administration application. 
* Microservice Bootstrap user: The user being created for microservice bootstrap operations, it is connected to application itself. This user is authorized to get the microservice subscriptions and do requests for its application. Refer to [Microservice development](/guides/microservice-sdk/rest#microservice-development) for more details.
* Service user: Reflects tenant subscription to a microservice.

Any request to the platform must be done with the platform user. For microservices, it is best practice to switch context to the subscribed tenant's service user instead of using the tenant's platform user when doing a request from microservice to the Cumulocity platform. The reason is that a service user always has roles defined in requiredRoles parameter, thus always has the same permissions. On the other hand it is common for tenant platform users to have different permissions, thus a microservice can misbehave. 

A microservice runtime provides bootstrap user and service user credentials in form of environment variables. These can be also acquired via platform API. Note that depending on the isolation level the environment variables differ.

Per tenant scope:  
C8Y_BOOTSTRAP_TENANT - application owner tenant id  
C8Y_BOOTSTRAP_USER - username of bootstrap user   
C8Y_BOOTSTRAP_PASSWORD - password of bootstrap user  
C8Y_TENANT - subscribed tenant id  
C8Y_USER - username of service user of a subscribed tenant   
C8Y_PASSWORD - password of service user of a subscribed tenant 

Multi tenant scope:  
C8Y_BOOTSTRAP_TENANT - application owner tenant id  
C8Y_BOOTSTRAP_USER - username of bootstrap user   
C8Y_BOOTSTRAP_PASSWORD - password of bootstrap user   

In multi tenant scope there is a single microservice deployment reused by multiple tenants. This is why service user credentials are not provided as hardcoded environment properties. However a microservice running in multi tenant isolation can retrieve all subscriptions via 

    GET /application/currentApplication/subscriptions 
    Host: ...
    Authorization: Basic ...

using bootstrap credentials. 

Bootstrap user credentials can be also retrieved using 
    
    GET /application/applications/{APPLICATION_ID}/bootstrapUser
    Host: ...
    Authorization: Basic ...

 authorized with an application owner credentials. 

Example of a typical user switching in multi tenant isolation is presented below, where in a hypothetical scenario there is a need to send an alarm to each tenant subscribed to a microservice. 

![microservice_user_switch_example](/guides/images/concepts-guide/microserviceusersexample.png)

Steps:
1. User wants to use microservice capabilities to raise alarms to all subscribed tenants calls and calls platform /service/{microservice}/createAlarms. 
2. Platform verifies user credentials and redirects request to a microservice. 
3. Microservice reads bootstrap credentials (from environment variables) and uses them to retrieve service user credentials for all subscribed tenants.
4. Microservice iterates over service user credentials and uses them to create alarms to each tenant. 
5. Microservice returns result to platform, and platform to invoking user.    

The following role types are defined for users:

* Required roles: The roles that are predefined to allow access to Cumulocity Rest APIs.
As an example, if a microservice creates measurements using the service user, measurement admin role must be added as a required role of the application.
Required roles are added to the service users.
* Roles: The custom roles provided to tenant platform users by the microservice developer.
These roles can be assigned or revoked to the tenant platform users or groups using the Administration application.

The roles are provided in the microservice manifest.

