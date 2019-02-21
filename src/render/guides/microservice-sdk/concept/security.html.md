---
order: 60
title: Security
layout: redirect
---

Microservices typically provide a REST API and Cumulocity provides a light API gateway (“Proxy”) for inbound REST requests. Inbound WebSocket requests are not supported. Between the client and the microservice container is the API gateway located and provides:

* Authorization: All calls are authenticated using Cumulocity users basic or OAuth authorization.
* TLS Termination: TLS inbound calls are terminated and only HTTP is used inside the cluster.
* Metering: The API calls are metered in the “API calls” tenant statistics.
* Routing: The API gateway routes requests for <kbd>/service/&lt;name&gt;</kbd> to the microservice _&lt;name&gt;_. The request routed to the microservice container and tenant options are added to the request headers.
* Tenant platform user: This is the user that logs into the application. Normally created using the Cumulocity Administration application.
* Microservice Bootstrap user: The user being created for microservice bootstrap operations and it is connected to the application itself. This user is authorized to get the microservice subscriptions and make requests for its application. Refer to [Microservice development](/guides/microservice-sdk/rest#microservice-development) for more details.
* Service user: Reflects tenant subscription to a microservice.

A request to a microservice can be authorized using basic or OAuth. In case of basic authentication the flow is fairly simple, as credentials can be read and utilized for further authentication to the platform. Authentication with OAuth is based on cookies technology, so the access token has to be read from the request Cookie header. There are two important parts of OAuth authorization: an access token stored in the authorization cookie and an X-XSRF-TOKEN header for XSRF attack prevention. Both must be forwarded with the request to the platform. Additionally, it is important to understand that the access token has a limited lifetime. Currently, support for OAuth is provided only for the Java Microservice SDK since 9.12.6. However, we recommend to use the newest version.

Any request to the platform must be done with the platform user. For microservices, it is a best practice to switch context to the subscribed tenant's service user instead of using the tenant's platform user when doing a request from microservice to the Cumulocity platform. The reason is that a service user always has roles defined in `requiredRoles` parameter, thus always has the same permissions. On the other hand, it is common for tenant platform users to have different permissions, thus a microservice can misbehave.

A microservice runtime provides bootstrap user and service user credentials in form of environment variables which can be also acquired via platform API. Note that depending on the isolation level, the environment variables differ.

| Variable | Description | Per tenant scope | Multi-tenant scope |
|:---------|:------------|:----------------:|:------------------:|
|C8Y_BOOTSTRAP_TENANT|Application owner tenant id | x | x |
|C8Y_BOOTSTRAP_USER|Username of the bootstrap user | x | x |
|C8Y_BOOTSTRAP_PASSWORD|Password of the bootstrap user | x | x |
|C8Y_TENANT|Subscribed tenant id | x | &nbsp; |
|C8Y_USER|Username of the service user of a subscribed tenant | x | &nbsp; |
|C8Y_PASSWORD|Password of the service user of a subscribed tenant | x | &nbsp; |


In multi-tenant scope, there is a single microservice deployment reused by multiple tenants. That is why service user credentials are not provided as hardcoded environment properties. However, a microservice running in multi-tenant isolation can retrieve all subscriptions via a GET request and using bootstrap credentials as follows:

```avrasm
GET /application/currentApplication/subscriptions
Host: ...
Authorization: Basic ...
```

Bootstrap user credentials can be retrieved with a GET request authorized with application owner credentials:

```avrasm
GET /application/applications/<APPLICATION_ID>/bootstrapUser
Host: ...
Authorization: Basic ...
```

An example of a typical user switching in multi-tenant isolation is presented below, where – in a hypothetical scenario – there is a need to send an alarm to each tenant subscribed to a microservice.

![microservice_user_switch_example](/guides/images/concepts-guide/microserviceusersexample.png)

Steps:
1. The User wants to employ microservice capabilities to raise alarms to all subscribed tenants calls. The user makes a request to the platform's endpoint <kbd>/service/&lt;microservice&gt;/createAlarms</kbd>.
2. The Platform verifies the user credentials and redirects the request to the microservice.
3. The Microservice reads the bootstrap credentials (from environment variables) and uses them to retrieve the service user credentials for all subscribed tenants.
4. The Microservice iterates over the service user credentials and uses them to create alarms to each tenant.
5. The Microservice returns the result to the platform, and the platform to the invoking user.

The following role types are defined for users:

* Required roles: The roles that are predefined to allow access to Cumulocity Rest APIs.
For instance, if a microservice creates measurements using the service user, measurement admin role must be added as a required role of the application.
Required roles are added to the service users.
* Roles: The custom roles provided to tenant platform users by the microservice developer.
These roles can be assigned or revoked to the tenant platform users or groups using the Administration application.

The roles are set in the [Microservice manifest](#manifest).
