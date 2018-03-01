---
order: 40
title: Developing applications
layout: default
---

## Overview

Cumulocity is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. Cumulocity applications can have two forms:

* web-based user interface applications (“web applications”)
* server-side business logic through microservices (“microservices”)

Web applications are HTML5 single page applications, that appear in the Cumulocity app switcher and that are hosted on Cumulocity.

Microservices are docker containers, hosted by Cumulocity and exposing a REST API.

Applications regardless of form are identified by a so-called *application key*. The application key enables Cumulocity to associate a REST request from an application with the particular application, see the section on "Application Management" in the [Reference Guide](guides/reference/rest-implementation)).

Super tenants (management tenants or enterprise edition tenants) can subscribe subtenants to Cumulocity applications deployed by them. This provides a basic application marketplace. 

This section introduces the basic concepts around applications in Cumulocity.

## Cumulocity web applications

### Overview

A Cumulocity web application can be a

* a user interface application built on any web framework of your choice
* a user interface application built using the Cumulocity user interface framework as a set of user interface plugins.

All subscribed web applications of a tenant appear in the application switcher on the top right of Cumulocity, so that users can navigate between the applications. They are hosted by Cumulocity and the application will be made available through a URL <tenant>.cumulocity.com/apps/<application>.

<img src="/guides/concepts-guide/Admin_AppSwitcher.png" alt="App switcher" style="max-width: 50%">

The Cumulocity user interface itself is built around a framework based on AngularJS and Bootstrap, the modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins so that developers can create their own configurations of the Cumulocity user interfaces. For more information on developing plugins, refer to the [Web SDK for Plugins](/guides/web/introduction) in the Web Developer's Guide.

### Deploying web applications

For an application to be available it has to be deployed at the Cumulocity platform. 

For details on how to deploy an application to Cumulocity, refer to [Administration > Managing applications](/guides/users-guide/administration#applications) in the User`s Guide. 

> **Info:** In case of a web application, the application is active for you as owner without subscribing to it.

### Web application hosting

You can host your own HTML5 and JavaScript web applications through Cumulocity by using the application manager under "Own applications" in the Cumulocity Administration application.

![List of own applications](/guides/concepts-guide/Admin_OwnApplications.png)

For details refer to  [Administration > Managing applications](/guides/users-guide/administration#applications) in the User's Guide. 

## Cumulocity microservices

### Overview

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of Cumulocity:

* Integrations
* Batch analytics
* Decoder
* Backend applications 

Microservices are deployed as docker images to Cumulocity, and follow specific conventions. They typically provide one REST API, which is available under /service/<microservice-name>. They typically access Cumulocity using the documented REST API.

When developing a Cumulocity microservice, a developer is not restricted  to any programming language. However, a microservice must serve as a HTTP server working on port 80 and must be encapsulated in a docker image. 

>**Info:** For Java developers Cumulocity provides a [Microservice SDK](/guides/java/developing-microservice) and a [Hello World](/guides/java/java-microservice) example for developing microservices in the Java Developer`s Guide.

The hosting of the Microservice is provided by Cumulocity. This way developers can focus on business logic and leave scaling, security, high availability and monitoring to Cumulocity. Microservices can be built on the top of the API exposed by the Cumulocity platform. This way, Cumulocity microservices are a comfortable means to provide new functionality and extend existing one. 

![microservice_infrastructure](/guides/concepts-guide/microservice_infrastructure.png)

The Cumulocity microservice is based on docker. This requires that a microservice is packaged as docker image in order to run on the Cumulocity platform. Docker image is an executable package that includes everything needed to run an application. For more information on docker refer to the [Docker documentation](https://docs.docker.com/get-started/)). 

During run-time, the microservice is executed in a docker container. A docker container ensures that the microservices cannot harm other microservice running in Cumulocity. To execute docker containers, Cumulocity uses kubernetes. Kubernetes provides many enterprise grade features for hosting docker containers, including auto-scaling, high availability, load balancing, rolling upgrades to limit downtime, resource quota and more. 

>**Info:** Currently kubernetes is not exposed to developers or users. This allows changing of the underlying infrastructure in the future.

### Microservice manifest

The microservice manifest provides the required settings to manage microservice instances and the Cumulocity application.
Refer to the [Microservice manifest reference](/guides/reference/microservice-manifest) in the Reference Guide to see the full list of options.

### Microservice isolation levels

* Multi-tenant: Single microservice docker container instantiated for all subscribed tenants unless microservice is scaled.
* Single tenant: Dedicated microservice docker container instantiated for each subscribed tenant.

The isolation level is set using the microservice manifest.

### Scaling

If scaling is enabled, the microservice is horizontally auto-scaled in case of high CPU usage. 

The scale option is set using the microservice manifest.

### Security

Microservices typically provide a REST API. For inbound REST requests, Cumulocity provides a light API gateway (“Proxy”). This API gateway is located between the client and the microservice container. The API gateway provides:

* Authorization: All calls are authenticated using Cumulocity users.
* TLS Termination: TLS inbound calls are terminated and only HTTP is used inside the cluster.
* Metering: The API calls are metered in the “API calls” tenant statistics.
* Routing: The API gateway routes requests for “/service/<name>” to the microservice “<name>”


There are three different user types related to managing microservices: 

* Tenant platform user: The user that logs into the application. Created using the Cumulocity Administration application. 
* Microservice Bootstrap user: The user being created for microservice bootstrap operations. This user is authorized to get the microservice subscriptions and do requests for its application. Refer to [Microservice development](/guides/rest/microservice-development) in the Rest Developer`s Guide for more details.
* Service user: The user that is created when a tenant subscribes to the microservice application.

Any request to the platform must be done with the platform user. For microservices, it is best practice to switch context to the subscribed tenant's service user instead of using the tenant's platform user when doing a request from microservice to the Cumulocity platform.

The following role types are defined for users:

* Required roles: The roles that are predefined to allow access to Cumulocity Rest APIs.
As an example, if a microservice creates measurements using the service user, measurement admin role must be added as a required role of the application.
Required roles are added to the service users.
* Roles: The custom roles provided to tenant platform users by the microservice developer.
These roles can be assigned or revoked to the tenant platform users or groups using the Administration application.

The roles are provided in the microservice manifest.

### Environment variables

Microservices need to understand certain details about the specific Cumulocity cluster they are running in. For example, a microservice needs to know the endpoint address of the Cumulocity REST APIs. This information is provided in environment variables. The environment variables are injected by Cumulocity when the container is started.

Refer to [Microservice container runtime reference](guides/reference/microservice-runtime) in the Reference Guide for a list of provided environment variables.

### <a name="packaging"></a>Packaging

To deploy a microservice, it needs to be packaged as docker image. It requires a docker image.tar and cumulocity.json files packed into a zip file. For your convenience, Cumulocity provides a script. 

Refer to [Microservice package reference](/guides/reference/microservice-package) in the Reference Guide in order to prepare and deploy the microservice package.

### Microservice requirements

The following requirements towards Cumulocity microservices must be met:

* A microservice MUST be a (Amd64/Linux) docker image run.
* The docker image MUST be packaged as “image.tar” and MUST include a manifest file (cumulocity.json).
* A microservice MUST be stateless, i.e. it must contain only ephemeral state. Reason is that the microservice must be able to survive (random) restarts because of hardware (server failure) and operations reasons (upgrade, migration).
* All persistent state MUST be stored at the Cumulocity platform via inventory, binary, tenant options and other APIs. Persistent volumes are not supported.
* A microservice must provide one inbound REST API. Additional inbound ports are not supported.
* The request lifetime MUST have the maximum. The infrastructure might terminate too long running requests. 
* Log informations needs to be send to standard output to be captured and persisted by infrastructure.


### Operating microservices

Cumulocity manages microservices by monitoring the microservice instance and storing the metrics. In case a microservice exceeds the memory limit, it is restarted automatically. Microservices can be scaled in case of high CPU usage.

### Deploying microservices

For microservice to be available it has to be deployed at the Cumulocity platform. This is done by uploading a zip file with the microservice package. 

For further information on deploying microservices to Cumulocity, refer to [Administration > Managing applications](/guides/users-guide/administration#applications) in the User`s Guide. 

The microservice package must contain the manifest file and docker image of the microservice.

Refer to [Microservice manifest reference](/guides/reference/microservice-manifest) in the Reference Guide for details on how to create a manifest file with applicable settings.

Refer to [Packaging](#packaging) above for details on how to prepare and deploy the microservice package.

>**Info:** In case of microservices, you need to subscribe to the application to use it. 


## Subscribing applications

The application concept of Cumulocity includes a basic application marketplace. 

Tenants can subscribe to applications which have been deployed by their super tenant (management tenant or enterprise edition tenant). 

Granting access to subtenants and subscribing to applications is done in the Administration application. 

![Application Subscription](/guides/concepts-guide/applicationsubscription.png)

For details refer to [Administration > Managing tenants](/guides/users-guide/administration#tenants) in the User`s Guide. 
