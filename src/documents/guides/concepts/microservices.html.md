---
order: 60
title: Microservices
layout: default
---
## Overview

Cumulocity provides ability to extend Cumulocity via Cumulocity microservices. Microservices are standalone application, following specific convention and deployed within Cumulocity infrastructure. 

When developing a Cumulocity microservice a developer does not have to limit itself to any programming language. Although a microservice must serve as a HTTP server working on port 80 and be encapsulated in a docker image. For java developers we have provided [Microservice SDK](/guides/java/developing-microservice) and a [hello world](/guides/java/java-microservice) introduction to Cumulocity microservices.

Cumulocity implements PaaS paradigm, this way a developer can focus on business logic and leave hosting, scaling and availability monitoring to Cumulocity. What is more Cumulocity provides its API that you can build on top of, as well as other microservices that you can orchestrate. To sum it up Cumulocity microservices are a great way to provide new functionalities to the Cumulocity and extend existing ones. 

![microservice_infrastructure](/guides/concepts-guide/microservice_infrastructure.png)

The Cumulocity microservice infrastructure is built with docker. This require a program to be packaged as a docker image in order to be runnable on the Cumulocity. Docker image is an executable package that includes everything needed to run an application, while docker container is a running image (For more information about docker please refer to official [documentation](https://docs.docker.com/get-started/)). An application must be stateless as it can be restarted by the platform, scaled up or down based on CPU usage. Although a microservice can persist data on the Cumulocity platform using its API. 


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

* Multi tenant: Single microservice docker container instantiated for all subscribed tenants unless microservice is scaled.
* Single tenant: Dedicated microservice docker container instantiated for each subscribed tenant.

The isolation level is given using manifest file.

### Scaling

If this scale option is enabled, microservice is horizontally auto-scaled in case of high CPU usage.

This scale option is given in microservice manifest.

### Security

Cumulocity proxies the microservice requests to the microservice container. Therefore, the incoming request for the microservices goes through Cumulocity with authorization and HTTP over TLS secures the communication.

Type of users that are used for platform and managing microservices:

* Tenant Platform User: The user which is created using the Cumulocity Administration application. This is the user logs into the application.
* Microservice Bootstrap User: The user which is created for each microservice for microservice bootstrap operations. This user is authorized to get the microservice subscriptions and do requests for its application. Please check [microservice development](/guides/rest/microservice-development) for more details.
* Service User: The user created, when a tenant subscribes to the microservice application.

Any request to the platform must be done with platform user.
For microservices, it is a good practice to switch context to subscribed tenant's service user instead of using the tenant's platform user when doing a request from microservice to Cumulocity platform.

Type of roles that are defined for users:

* Required roles: The roles that are predefined to allow access to use Cumulocity Rest APIs.
As an example, if microservice creates measurements using service user, measurement admin role has to be added as a required role of the application.
Required roles are added to the service users.
* Roles: The custom roles provided to tenant platform users by microservice developer.
These roles can be assigned or revoked to the tenant platform users or groups using Administration application.

The roles is given in microservice manifest.

### Environment variables

A microservice running in a dedicated environment can retrieve and use the injected environment variables of the dedicated environment.
Please check [microservice container runtime reference](guides/reference/microservice-runtime) for more information.

### Packaging

To deploy a microservice, one needs to package it in a specific structure. It requires a docker image.tar and cumulocity.json files packed into a zip file. For your convenience Cumulocity provides a script. Please check [microservice package reference](/guides/reference/microservice-package) in order to prepare and deploy the microservice package.

### Additional Microservice Development Practices
* Use other microservices, if user has permission.
* Microservice must be stateless: Ephemeral State, both for in-process state and disk state
* All persistent state must be stored at Cumulocity Platform via Inventory, Binary, Tenant Options and other API
* Do not use additional inbound ports except REST endpoint.
* Request lifetime must have the maximum setting.

## Register
Developer can register the microservice package using their tenant after development phase.
Microservice package should contain the manifest file and docker image of the microservice.

Please check [microservice manifest reference](/guides/reference/microservice-manifest) to create a manifest file with applicable setting.

Cumulocity provides a tool for microservice package preperation and deployment. Please check [microservice package reference](/guides/reference/microservice-package).

### Subscription

For a microservice to be available it has to be registered and deployed on the platform and at least one subscription is required.
Microservice application subscriptions for the subtenants can be created using Administration application.
![Application Subscription](/guides/concepts-guide/applicationsubscription.png)
## Publish & Subscribe
In this step Cumulocity publish the microservice to the marketplace and gives access to the enterprise tenant(s).

Please contact [Cumulocity Support](https://support.cumulocity.com/hc/en-us) to publish microservices.

## Run
Enterprise tenant(s) can start using the microservice at this stage.

## Operate
Cumulocity manages microsevice by monitoring microservice instance and storing the metrics. In case microservice exceeds the memory limit, it is restarted automatically. Microservices can be scaled in high CPU usage.
