---
order: 60
title: Microservices
layout: default
---
## Overview

Cumulocity supports microservice development and deployment to its environment.

For Java developers, Cumulocity Java Microservice SDK makes microservice prototyping, development and package creation for deployment even easier. Please check the Java developer's guide for [Hello, Microservice!](/guides/java/java-microservice) and [developing microservices](/guides/java/developing-microservice).

The overall microservice lifecycle can be categorized in 5 steps.
![Microservice Lifecycle](/guides/concepts-guide/microservicelifecycle.png)

* Developer: A system integrator
* Service Provider: Cumulocity
* Enterprise: A tenant making use of a microservice.

## Develop

The concepts that are used for developing microservice is defined as below.

### Microservice Manifest

Microservice manifest gives the required setting to manage microservice instance and the Cumulocity application.
Please check [microservice manifest reference](/guides/reference/microservice-manifest) to see full list of options.

### Microservice isolation levels

* Multi tenant: Single microservice container instantiated for all subscribed tenants unless microservice is scaled.
* Single tenant: Dedicated microservice container instantiated for each subscribed tenant.

The isolation level is given using manifest file.

### Scaling

If this scale option is enabled, microservice is horizontally auto-scaled in case of high CPU usage.

This scale option is given in microservice manifest.

### Security

Cumulocity proxies the microservice requests to the microservice container. Therefore, the incoming request for the microservices goes through Cumulocity with authorization and HTTP over TLS secures the communication.

The authorization can be done with the following tenant users.

* Tenant User: The user which is created using the Cumulocity Administration application.
* Microservice Bootstrap User: The user which is created for each microservice for microservice bootstrap operations. This user is authorized to get the microservice subscriptions and do requests for its application. Please check [microservice development](/guides/rest/microservice-development) for more details.
* Service User: The user created, when a tenant subscribes to the microservice application.
The roles that are required for microservice's operations to Cumulocity platform should be given to this user.
It is a good practice to switch context to subscribed tenant's service user instead of using the tenant user when doing any request from microservice to Cumulocity platform.

These roles are separated in two categories.

* Required roles: The roles that are predefined to allow access to use Cumulocity Rest APIs.
As an example, if microservice creates measurements using service user, measurement admin role has to be added as a required role of the application.

* Roles: The custom roles that is given by microservice developer. This roles can be given in order to have custom security logic.

### Environment variables

Each environment can have the setting for microservice runtime which is used after deployment of the microservice package.
Please check [microservice container runtime reference](guides/reference/microservice-runtime) for more information.

### Packaging

Cumulocity provides a tool for microservice package preperation and deployment. Please check [microservice package reference](/guides/reference/microservice-package).

### Subscription

In order to use any microservice, a tenant subscription should be created.
Microservice application subscriptions for the subtenants can be created using Administration application.
![Application Subscription](/guides/concepts-guide/applicationsubscription.png)

### Additional Microservice Development Requirements
* Use external endpoints, if declared in metadata
* Use other microservices, if user has permission
* Stateless: Ephemeral State, both for in-process state and disk state
* All persistent state must be stored externally, e.g. in MongoDB, e.g. using Cumulocity Inventory, Binary, Tenant Options API
* No additional inbound ports except REST endpoint
* Request lifetime has maximum setting.

## Register
Developer can register the microservice package using their tenant after development phase.
Microservice package should contain the manifest file and docker image of the microservice.

Please check [microservice manifest reference](/guides/reference/microservice-manifest) to create a manifest file with applicable setting.

Cumulocity provides a tool for microservice package preperation and deployment. Please check [microservice package reference](/guides/reference/microservice-package).

## Publish & Subscribe
In this step Cumulocity publish the microservice to the marketplace and gives access to the enterprise tenant(s).

Please contact [Cumulocity Support](https://support.cumulocity.com/hc/en-us) to publish microservices.

## Run
Enterprise tenant(s) can start using the microservice at this stage.

## Operate
Cumulocity manages microsevice by monitoring microservice instance and storing the metrics. In case microservice exceeds the memory limit, it is restarted automatically. Microservices can be scaled in high CPU usage.
