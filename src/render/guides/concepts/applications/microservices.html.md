---
order: 30
title: Cumulocity microservices
layout: redirect
---

### Overview

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of Cumulocity:

* Integrations
* Batch analytics
* Decoder
* Backend applications 

Microservices are deployed as docker images to Cumulocity, and follow specific conventions. They typically provide one REST API, which is available under /service/&lt;microservice-name&gt;. They typically access Cumulocity using the documented REST API.

When developing a Cumulocity microservice, a developer is not restricted to any programming language. However, a microservice must serve as a HTTP server working on port 80 and must be encapsulated in a docker image.

The hosting of the Microservice is provided by Cumulocity. This way developers can focus on business logic and leave scaling, security, high availability and monitoring to Cumulocity. Microservices can be built on the top of the API exposed by the Cumulocity platform. This way, Cumulocity microservices are a comfortable means to provide new functionality and extend existing one. 

![microservice_infrastructure](/guides/images/concepts-guide/microservice_infrastructure.png)

For detailed information on developing and deploying microservices on top of Cumulocity refer to the [Microservice SDK guide](/guides/microservice-sdk) which information on the general concept of microservices in Cumulocity as well as specific descriptions for various programming languages. 

>**Info:** For Microservice developers Cumulocity provides Microservice SDK in [Java programming language](/guides/java/developing-microservice) and C# programming language for .Net Core. Refer to the relevant sections in the [Microservice SDK guide](/guides/microservice-sdk).



#**From here on move to Microservice SDK guide!**

The Cumulocity microservice is based on docker. This requires that a microservice is packaged as docker image in order to run on the Cumulocity platform. Docker image is an executable package that includes everything needed to run an application. For more information on docker refer to the [Docker documentation](https://docs.docker.com/get-started/)). 

During run-time, the microservice is executed in a docker container. A docker container ensures that the microservices cannot harm other microservices running in Cumulocity. To execute docker containers, Cumulocity uses kubernetes. Kubernetes provides many enterprise-grade features for hosting docker containers, including auto-scaling, high availability, load balancing, rolling upgrades to limit downtime, resource quota and more.

>**Info:** Currently kubernetes is not exposed to developers or users. This allows changing of the underlying infrastructure in the future.

### Microservice manifest

The microservice manifest provides the required settings to manage microservice instances and the Cumulocity application.
Refer to the [Microservice manifest reference](/guides/reference/microservice-manifest) in the Reference guide to see the full list of options.

### Microservice isolation levels

* Multi-tenant: Single microservice docker container instantiated for all subscribed tenants unless microservice is scaled.
* Single tenant: Dedicated microservice docker container instantiated for each subscribed tenant.

The isolation level is set using the microservice manifest.

### Scaling

If scaling is enabled, the microservice is horizontally auto-scaled in case of high CPU usage. 

The scale option is set using the microservice manifest.

### Security

Microservices typically provide a REST API. For inbound REST requests, Cumulocity provides a light API gateway (“Proxy”) and inbound websocket requests are not supported. This API gateway is located between the client and the microservice container. The API gateway provides:

* Authorization: All calls are authenticated using Cumulocity users and Basic authorization.
* TLS Termination: TLS inbound calls are terminated and only HTTP is used inside the cluster.
* Metering: The API calls are metered in the “API calls” tenant statistics.
* Routing: The API gateway routes requests for “/service/&lt;name&gt;” to the microservice “&lt;name&gt;”. The request routed to the microservice container and tenant options are added to the request headers.

* Tenant platform user: The user that logs into the application. Created using the Cumulocity Administration application. 
* Microservice Bootstrap user: The user being created for microservice bootstrap operations, it is connected to application itself. This user is authorized to get the microservice subscriptions and do requests for its application. Refer to [Microservice development](/guides/rest/microservice-development) in the Rest Developer`s guide for more details.
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

### Environment variables

Microservices need to understand certain details about the specific Cumulocity cluster they are running in. For example, a microservice needs to know the endpoint address of the Cumulocity REST APIs. This information is provided in environment variables. The environment variables are injected by Cumulocity when the container is started.

Refer to [Microservice container runtime reference](/guides/reference/microservice-runtime) in the Reference guide for a list of provided environment variables.

### <a name="packaging"></a>Packaging

To deploy a microservice, it needs to be packaged as docker image. It requires a docker image.tar and cumulocity.json files packed into a zip file. For your convenience, Cumulocity provides a script. 

Refer to [Microservice package reference](/guides/reference/microservice-package) in the Reference guide in order to prepare and deploy the microservice package.

### Request routing

The request is redirected to a microservice depending on isolation level (auto-scaling is ignored at this moment for clarity), subscription and authorization. A typical request to the platform looks like

    {METHOD} /service/{MICROSERVICE}/{MICROSERVICE_ENDPOINT} 
    Host: ...
    Authorization: Basic ...

First, credentials are used to verify if a requesting user is authorized to access the microservice. Secondly, tenant subscription is verified. If both checks pass, the request is routed to a dedicated microservice deployment in case of PER_TENANT isolation, or to a shared deployment in case of MULTI_TENANT isolation. 

The routed request is stripped of /service/{MICROSERVICE} part, however the Authorization header is not modified, thus a request is still executed as a tenant platform user. 

    {METHOD} /{MICROSERVICE_ENDPOINT} 
    Host: ...
    Authorization: Basic ...


### Microservice requirements

The following requirements towards Cumulocity microservices must be met:

* A microservice MUST be a (linux/amd64) docker image run.
* The docker image MUST be packaged as “image.tar” and MUST include a manifest file (cumulocity.json).
* A microservice MUST be stateless, i.e. it must contain only ephemeral state. Reason is that the microservice must be able to survive (random) restarts because of hardware (server failure) and operations reasons (upgrade, migration).
* All persistent state MUST be stored at the Cumulocity platform via inventory, binary, tenant options and other APIs. Persistent volumes are not supported.
* A microservice cannot access the database directly and must use Cumulocity API.
* A microservice must provide one inbound REST API. Additional inbound ports are not supported.
* A microservice can use multiple outbound ports.
* The request lifetime MUST have the maximum. The infrastructure might terminate too long running requests. 
* Log informations needs to be send to standard output to be captured and persisted by infrastructure.


### Operating microservices

Cumulocity manages microservices by monitoring the microservice instance and storing the metrics. In case a microservice exceeds the memory limit, it is restarted automatically. Microservices can be scaled in case of high CPU usage.

### Deploying microservices

For a microservice to be available it has to be deployed at the Cumulocity platform. This is done by uploading a zip file with the microservice package. A user cannot directly push to the docker registry. 

For further information on deploying microservices to Cumulocity, refer to [Administration > Managing applications](/guides/users-guide/administration#applications) in the User guide. 

The microservice package must contain the manifest file and docker image of the microservice.

Refer to [Microservice manifest reference](/guides/reference/microservice-manifest) in the Reference guide for details on how to create a manifest file with applicable settings.

Refer to [Packaging](#packaging) above for details on how to prepare and deploy the microservice package.

>**Info:** In case of microservices, you need to subscribe to the application to use it. 


