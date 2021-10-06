---
weight: 60
title: Security
layout: redirect
---

Microservices typically provide a REST API and Cumulocity IoT provides a light API gateway (“Proxy”) for inbound REST requests. Inbound WebSocket requests are supported. The API gateway – located between the client and the microservice container – provides:

* Authorization: All calls are authenticated using Cumulocity IoT credentials with basic or OAuth authorization.
* TLS Termination: TLS inbound calls are terminated and only HTTP is used inside the cluster.
* Metering: The API calls are metered in the API calls tenant statistics.
* Routing: The API gateway routes requests for <kbd>/service/&lt;name&gt;</kbd> to the microservice _&lt;name&gt;_. The request routed to the microservice container and tenant options are added to the request headers. If `contextPath` is defined in the application manifest, the API gateway routes requests for <kbd>/service/&lt;contextPath&gt;</kbd>.

### Authentication and authorization

A request to a microservice can be authenticated using basic authentication or OAuth. In case of basic authentication the flow is fairly simple, as credentials can be read and utilized for further authentication to the platform.

Authentication with OAuth is based on cookies technology, so the access token has to be read from the request cookie header. There are two important parts of OAuth authorization: an access token stored in the authorization cookie and an X-XSRF-TOKEN header for XSRF attack prevention. Both must be forwarded with the request to the platform. If you use Java for development, we recommend you to use the Microservice SDK Version 10.4.6 or later for supporting OAuth in Java microservices.

![OAuth](/images/microservices-sdk/ms-oauth.png)

Refer to the [OAuth Community Site](https://oauth.net) for more details about the OAuth authorization framework.

#### Microservice authentication and multi-tenancy

In general, microservices use the standard Cumulocity IoT authentication mechanisms. This is performed in two steps:

1. The microservice can be created in any tenant that have **feature-microservice-hosting** enabled.
2. The microservices access the Tenant API.

At installation time of the microservice, an application is created in the Management tenant reflecting the new microservice. In addition, a service user is created in the Management tenant that allows the microservice to retrieve subscriptions.
Whenever required, a platform administrator will subscribe a customer to the new microservice. As part of the subscription, a service user in the customer tenant is created using random credentials.

#### Microservice authorization

Authorization is relevant on two levels:

1. On the Management tenant level, the only authorization of a microservice is to access its own subscriptions.
2. For accessing customer tenants, the microservice installs a set of required permissions for being able to operate.

A microservice is associated with a service user in the Management tenant, which will make sure that only its subscriptions are returned. A microservice is also associated with a set of permissions that it requires for carrying out its function on a customer tenant.
These permissions are visualized in the Administration application. The permissions are associated with the service user that is created when a platform administration associates a microservice with a tenant.


### Users and roles

There are three types of users:

* Tenant user: The user that invokes a microservice through its REST API endpoints <kbd>/service/&lt;microservice-name>/&lt;path></kbd> passed through by the proxy.
* Service user: A generated user that allows a microservice to access a subscribed tenant independent of a REST API invocation, e.g., for initialization or regular jobs.
* Microservice bootstrap user: A user passed to the microservice for requesting subscribed tenants and service users.

The following role types are defined for users:

* Required roles: The roles that are predefined to allow access to Cumulocity IoT Rest APIs.
For instance, if a microservice creates measurements using the service user, measurement admin role must be added as a required role of the application.
Required roles are added to the service users.
* Roles: The custom roles provided to tenant platform users by the microservice developer.
These roles can be assigned or revoked to the tenant platform users or groups using the Administration application.

Custom roles need to adhere to this name format in order to be shown in the UI:

ROLE_<NAME>_(READ|ADMIN|CREATE)

You can add them to the [application manifest](#manifest) in the `roles` properties as follows:

```json
"roles": [
    "ROLE_MY_MICROSERVICE_READ",
    "ROLE_MY_MICROSERVICE_ADMIN"
]
```

<!-- TODO: add/describe a picture of "required roles" and "provided roles" showing a microservice as a block -->

The roles are set in the [Microservice manifest](#manifest). For more details about users and roles, review the [User API](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/User-API) in the Cumulocity IoT OpenAPI Specification.

### Microservice bootstrap

Each microservice receives a dedicated bootstrap user which ensures that a microservice can be identified by the platform and can have access only to the allowed resources. A microservice runtime provides bootstrap user and service user credentials as environment variables which can also be acquired via platform API. Note that depending on the isolation level, the environment variables differ.

| Variable | Description | Per tenant scope | Multi-tenant scope |
|:---------|:------------|:----------------:|:------------------:|
|C8Y&#95;BOOTSTRAP_TENANT|Application owner tenant ID | x | x |
|C8Y&#95;BOOTSTRAP_USER|Username of the bootstrap user | x | x |
|C8Y&#95;BOOTSTRAP_PASSWORD|Password of the bootstrap user | x | x |
|C8Y&#95;TENANT|Subscribed tenant ID | x | &nbsp; |
|C8Y&#95;USER|Username of the service user of a subscribed tenant | x | &nbsp; |
|C8Y&#95;PASSWORD|Password of the service user of a subscribed tenant | x | &nbsp; |

In multi-tenant scope, there is a single microservice deployment reused by multiple tenants and that is why service user credentials are not provided as hardcoded environment properties. However, a microservice running in multi-tenant isolation can retrieve all subscriptions via a GET request and using bootstrap credentials as follows:

```http
GET /application/currentApplication/subscriptions
Host: ...
Authorization: Basic ...
```

Bootstrap user credentials can be retrieved with a GET request authorized with application owner credentials:

```http
GET /application/applications/<APPLICATION_ID>/bootstrapUser
Host: ...
Authorization: Basic ...
```

An example of a typical user switching in multi-tenant isolation is presented below, where – in a hypothetical scenario – there is a need to send an alarm to each tenant subscribed to a microservice.

![microservice_user_switch_example](/images/concepts-guide/microserviceusersexample.png)

The user wants to employ microservice capabilities to raise alarms to all subscribed tenants calls.

Steps:

1. The user makes a request to the platform's endpoint <kbd>/service/&lt;microservice&gt;/createAlarms</kbd>.
2. The platform verifies the user credentials and redirects the request to the microservice.
3. The microservice reads the bootstrap credentials (from environment variables) and uses them to retrieve the service user credentials for all subscribed tenants.
4. The microservice iterates over the service user credentials and uses them to create alarms to each tenant.
5. The microservice returns the result to the platform, and the platform to the invoking user.

### Encryption

There is a mechanism to encrypt the tenant options that afterwards are automatically decrypted when injecting them into microservices requests.

If a tenant option is created with a key name that starts with "credentials.", it is automatically encrypted and can be fetched as unencrypted only by system users. For instance, when you create a tenant option in a category that matches to the application context path, the value is passed to the microservice by the microservice proxy on the platform as a header (key => value). All encrypted options are decrypted and passed. Moreover, the options can be fetched via REST using the options endpoint at microservice runtime.

Refer to the [Tenant API](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-API) in the Cumulocity IoT OpenAPI Specification for more details.
