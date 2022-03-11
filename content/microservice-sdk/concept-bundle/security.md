---
weight: 60
title: Security
layout: redirect
---

Microservices typically provide a REST API and {{< product-c8y-iot >}} provides a light API gateway ("Proxy") for inbound REST requests. Inbound WebSocket requests are supported. The API gateway – located between the client and the microservice container – provides:

* Authorization: All calls are authenticated using {{< product-c8y-iot >}} credentials with basic or OAuth authorization.
* TLS Termination: TLS inbound calls are terminated and only HTTP is used inside the cluster.
* Metering: The API calls are metered in the API calls tenant statistics.
* Routing: The API gateway routes requests for <kbd>/service/&lt;name&gt;</kbd> to the microservice _&lt;name&gt;_. The request routed to the microservice container and tenant options are added to the request headers. If `contextPath` is defined in the application manifest, the API gateway routes requests for <kbd>/service/&lt;contextPath&gt;</kbd>.

### Authentication and authorization

A request to a microservice can be authenticated using various authentication mechanisms supported by {{< product-c8y-iot >}} like:
1. Basic authentication
2. OAI-Secured
3. SSO
4. JWT token authentication (depricated)

  If you use Java for development, we recommend you to use the Microservice SDK Version 10.4.6 or later versions to gain support for all available authentication ways in {{< product-c8y-iot >}}. In the case of other programming languages for which {{< product-c8y-iot >}} does not provide SDK developer needs to ensure support for all authentication mechanisms available in the Cumulocity platform by its own means. 

  The {{< product-c8y-iot >}} exposes rest endpoint <kbd>/user/currentUser</kbd>. Microservice should retrieve the {{< product-c8y-iot >}} address from <kbd>C8Y_BASEURL</kbd> operating system environment variable. The microservice can verify if credentials which are embedded in HTTP request which is handled by the microservice are valid or not by the usage of REST endpoint <kbd>/user/currentUser</kbd>. If credentials are correct then response status from <kbd>/user/currentUser</kbd> endpoint is <kbd>200 OK</kbd>. Otherwise, the response contains a <kbd>401 Unauthorized</kbd> status code. To verify if credentials are correct the microservice must copy them from ongoing requests and send them to <kbd>/user/currentUser</kbd> endpoint. Depending on the authentication method used by a user who originated the HTTP request the credentials can be passed to microservice in various ways. The credentials can be present in:
  1. <kbd>Authorization</kbd> HTTP header
  2. Cookie with name <kbd>authorization</kbd>
  3. Custom HTTP header called <kbd>X-XSRF-TOKEN</kbd>
  4. Custom HTTP header called <kbd>tfatoken</kbd>

If the incoming request contains cookie <kbd>authorization</kbd> then the microservice should copy the cookie and header <kbd>X-XSRF-TOKEN</kbd> to the request to the <kbd>/user/currentUser</kbd> endpoint. In other cases, the <kbd>Authorization</kbd> header should be copied. Additionally, if a request contains header <kbd>tfatoken</kbd> the header should be always included in the request to <kbd>/user/currentUser</kbd>. 

Credential validation flow is visible on the below sequence diagram:
![OAuth](/images/microservices-sdk/ms-oauth.png)

For example the microservice can receive the HTTP requests with the following header (basic authentication and SMS based TFA is used for authentication):

```
GET http://cumulocity.default.svc.cluster.local/test HTTP/1.1
accept: */*
authorization: Basic dGVuYW50X2lkL3VzZXJuYW1lOnBhc3N3b3JkCg==
connection: close
content-length: 0
cookie: REQUEST_ORIGIN=
host: auth-scope-management.default.svc.cluster.local:80
tfatoken: 23b75292468e0ba7fe03245d502d9c29e21e8a997fc7dd7e1a1df7fe31cbfb17
x-forwarded-host: cumulocity.default.svc.cluster.local:80
x-forwarded-prefix: /service/auth
x-forwarded-proto: http
x-real-ip: 192.168.1.20
```

The microservice should send the following requests to validate credentials (providing that C8Y_BASEURL is equal to http://cumulocity:8111)

```
GET http://cumulocity:8111/user/currentUser HTTP/1.1
Accept: text/plain, application/json, application/*+json, */*
Authorization: Basic dGVuYW50X2lkL3VzZXJuYW1lOnBhc3N3b3JkCg==
Content-Length: 0
tfatoken: 23b75292468e0ba7fe03245d502d9c29e21e8a997fc7dd7e1a1df7fe31cbfb17
```

When a user is authenticated with OAI-Secure then the following REST request can reach the microservice

```
GET http://cumulocity.default.svc.cluster.local/test HTTP/1.1
accept: */*
authorization: Basic dGVuYW50X2lkL3VzZXJuYW1lOjxmYWtlIHBhc3N3b3JkPgo=
connection: close
content-length: 0
cookie: authorization=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YzAwMGVlOC1hYjY5LTRiMzYtYWNhNC0xNzM4ZGYwZWNhZGIiLCJpc3MiOiJjdW11bG9jaXR5LmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJhdWQiOiJjdW11bG9jaXR5LmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJzdWIiOiJhZG1pbiIsInRjaSI6IjMxMWM3YjZiLWM1MmQtNGEzMC1iZDFlLWNiODdlMjNlODQyOSIsImlhdCI6MTY0NjkyODgxMywibmJmIjoxNjQ2OTI4ODEzLCJleHAiOjE2NDgxMzg0MTMsInRmYSI6ZmFsc2UsInRlbiI6Im1hbmFnZW1lbnQiLCJ4c3JmVG9rZW4iOiJHU0l6VFB4b2JQS1FJQmV2Uk1SWiJ9.NL5b9-iHSc3SLaPu87oazBd2_kjNiwO9tM_bXS3qCUd0_wTZ-BKc3q6sRHTKO_LNbtCQg3G6-7ZhD6TyvqjTLsyiZTsgMRtAE7ZiRPtXaFOA0_SDQ9kG_MztAZ3U9O008akgXcjEEAdphVv5eey_lADrg1BmIlqiBFoKts2JGSv1xFtXKIxpcVtRDGUkb-2qb8OhaHamT7b3HL628NSiH4VqfO38vkLLkimHEz-roqmbFGQ355TvA3-s_erO96j3rHbBPDsluFqFN0eOTCidBffKt6OvyKw-_64MaHHs6R9Ulsv-LuY-YAvlTZVxYwFAi3yn3mWlpXEAzvGYHMrx8A
host: auth-scope-management.default.svc.cluster.local:80
user-agent: insomnia/2022.1.1
x-forwarded-host: cumulocity.default.svc.cluster.local:80
x-forwarded-prefix: /service/auth
x-forwarded-proto: http
x-real-ip: 192.168.1.20
x-xsrf-token: GSIzTPxobPKQIBevRMRZ
```

To verify credentials from the above request the microservice should send the following request:

```
GET http://cumulocity:8111/user/currentUser HTTP/1.1
Accept: text/plain, application/json, application/*+json, */*
Content-Length: 0
Cookie: authorization=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YzAwMGVlOC1hYjY5LTRiMzYtYWNhNC0xNzM4ZGYwZWNhZGIiLCJpc3MiOiJjdW11bG9jaXR5LmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJhdWQiOiJjdW11bG9jaXR5LmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJzdWIiOiJhZG1pbiIsInRjaSI6IjMxMWM3YjZiLWM1MmQtNGEzMC1iZDFlLWNiODdlMjNlODQyOSIsImlhdCI6MTY0NjkyODgxMywibmJmIjoxNjQ2OTI4ODEzLCJleHAiOjE2NDgxMzg0MTMsInRmYSI6ZmFsc2UsInRlbiI6Im1hbmFnZW1lbnQiLCJ4c3JmVG9rZW4iOiJHU0l6VFB4b2JQS1FJQmV2Uk1SWiJ9.NL5b9-iHSc3SLaPu87oazBd2_kjNiwO9tM_bXS3qCUd0_wTZ-BKc3q6sRHTKO_LNbtCQg3G6-7ZhD6TyvqjTLsyiZTsgMRtAE7ZiRPtXaFOA0_SDQ9kG_MztAZ3U9O008akgXcjEEAdphVv5eey_lADrg1BmIlqiBFoKts2JGSv1xFtXKIxpcVtRDGUkb-2qb8OhaHamT7b3HL628NSiH4VqfO38vkLLkimHEz-roqmbFGQ355TvA3-s_erO96j3rHbBPDsluFqFN0eOTCidBffKt6OvyKw-_64MaHHs6R9Ulsv-LuY-YAvlTZVxYwFAi3yn3mWlpXEAzvGYHMrx8A
X-XSRF-TOKEN: GSIzTPxobPKQIBevRMRZ
```

Additionally, if a request to <kbd>/user/currentUser</kbd> REST endpoint contains correct credentials then the response body contains very useful information, like user roles assigned to the user account. This information can be very useful so that the microservice can carry out authorization.

When a microservice receives an HTTP request then it may be necessary to use REST API exposed by {{< product-c8y-iot >}} to fulfil the request. To access REST API exposed by {{< product-c8y-iot >}} the microservice must provide a valid credential. The microservice can use credentials that are present in incoming REST request or use a dedicated user account created for the microservice to access resources that belongs to tenants who subscribes microservice. Information related to microservice subscriptions is available in the ongoing section of this document. The choice between credentials provided together with incoming request to microservice REST or dedicated account depends on the use case. To use user credentials received by microservice in incoming HTTP request the microservice must copy the credentials according to rules described former in this section.

Additionally, most of the HTTP requests which are sent by microservices should contain HTTP header <kbd>X-Cumulocity-Application-Key</kbd>. The header indicates that some action is performed by some application. When the header is missing then {{< product-c8y-iot >}} assumes that the HTTP request is originated by an IoT device. Therefore request without <kbd>X-Cumulocity-Application-Key</kbd> affects e.g. device availability state, billing data, etc. Thus microservice should not include <kbd>X-Cumulocity-Application-Key</kbd> only if the microservice proxy requests from IoT device to the {{< product-c8y-iot >}} platform. If microservice include header <kbd>X-Cumulocity-Application-Key</kbd> then the header must contain the correct application key. The microservice can retrieve the application key by sending REST request to the endpoint <kbd>/application/currentApplication</kbd> exposed by the {{< product-c8y-iot >}} platform. The request must contain credentials for basic authentication in the following format: <kbd>tenantId/username:password</kbd>. Tenant id, username and password can be read by the microservice from the following operating system environment variables: <kbd>C8Y_BOOTSTRAP_TENANT</kbd>, <kbd>C8Y_BOOTSTRAP_USER</kbd>, <kbd>C8Y_BOOTSTRAP_PASSWORD</kbd>.

Moreover, microservice should implement some caching mechanism related to user credentials to increase performance.

#### Microservice authentication and multi-tenancy

In general, microservices use the standard {{< product-c8y-iot >}} authentication mechanisms. This is performed in two steps:

1. The microservice can be created in any tenant that have **feature-microservice-hosting** enabled.
2. The microservices access the Tenant API.

At installation time of the microservice, an application is created in the {{< management-tenant >}} reflecting the new microservice. In addition, a service user is created in the {{< management-tenant >}} that allows the microservice to retrieve subscriptions.
Whenever required, a platform administrator will subscribe a customer to the new microservice. As part of the subscription, a service user in the customer tenant is created using random credentials.

#### Microservice authorization

Authorization is relevant on two levels:

1. On the {{< management-tenant >}} level, the only authorization of a microservice is to access its own subscriptions.
2. For accessing customer tenants, the microservice installs a set of required permissions for being able to operate.

A microservice is associated with a service user in the {{< management-tenant >}}, which will make sure that only its subscriptions are returned. A microservice is also associated with a set of permissions that it requires for carrying out its function on a customer tenant.
These permissions are visualized in the Administration application. The permissions are associated with the service user that is created when a platform administration associates a microservice with a tenant.


### Users and roles

There are three types of users:

* Tenant user: The user that invokes a microservice through its REST API endpoints <kbd>/service/&lt;microservice-name>/&lt;path></kbd> passed through by the proxy.
* Service user: A generated user that allows a microservice to access a subscribed tenant independent of a REST API invocation, for example, for initialization or regular jobs.
* Microservice bootstrap user: A user passed to the microservice for requesting subscribed tenants and service users.

The following role types are defined for users:

* Required roles: The roles that are predefined to allow access to {{< product-c8y-iot >}} Rest APIs.
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

The roles are set in the [Microservice manifest](#manifest). For more details about users and roles, review the [User API](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/User-API) in the {{< openapi >}}.

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

Refer to the [Tenant API](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-API) in the {{< openapi >}} for more details.
