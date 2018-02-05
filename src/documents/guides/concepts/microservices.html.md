---
order: 60
title: Microservices
layout: default
---
## Overview

Cumulocity supports microservice development and deployment to its environment.

For Java developers, Cumulocity Java Microservice SDK makes microservice prototyping, development and package creation for deployment even easier. Please check the Java developer's guide for more information.

The overall microservice lifecycle can be categorized in 5 steps.
![Microservice Lifecycle](/guides/concepts-guide/microservicelifecycle.png)

* Developer: A system integrator
* Service Provider: Cumulocity
* Enterprise: A tenant making use of a microservice.

## Develop

This section describes the process flow and requirements for microservices. Some of the steps are already implemented in Cumulocity Java Microservice SDK.

### Creation of Microservice Application

This step is already included in Cumulocity Java Microservice SDK.

For each microservice, its Cumulocity microservice application should be created for the Cumulocity tenant.
This can be accomplished by using Cumulocity Rest API.
Please see [create microservice application](/guides/rest/microservice-development#create-application) using Rest API.

### Creation of Microservice Bootstrap User

This step is already included in Cumulocity Java Microservice SDK.

All microservices should use their own bootstrap user in order to authorize to use microservice related endpoints such as getting its subscriptions or updating the current application. The user should be created using Rest API for [acquiring bootstrap user](/guides/rest/microservice-development/#acquire-microservice-credentials).

### Defining Required Roles and Roles for The Service User
When a tenant subscribes to the microservice application, a service user is created for the tenant.
It is a good practice to give the roles, which will be required for microservice's requests to the Cumulocity platform, to the service user.
As an example, a microservice has an endpoint that makes a couple of request to the Cumulocity platform. This endpoint can be called by any authorized tenant user and the user is not actually aware of what roles should it has. Therefore, it is important to switch context to service user of the tenant instead of using the current user.

These roles are in two categories which is given as application metadata.

* Required roles: The roles that are predefined to allow access to use Cumulocity Rest APIs.
As an example, if microservice creates measurements using service user, measurement admin role has to be added as a required role of the application.
Required role naming has following syntax:

      ROLE_{name of the API}_{access level}

* Roles: The custom roles that is given by microservice developer. This roles can be given in order to have custom security logic.

### Provide Application Metadata

Application metadata contains roles information which should be provided by REST endpoint /metadata in microservice.

Additionally, the microservice application should be updated with the required roles and roles using microservice bootstrap user.

    PUT /application/currentApplication
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json
    {
      "requiredRoles": ["ROLE_INVENTORY_READ"],
      "roles": ["ROLE_CUSTOM_MICROSERVICE"]
    }

The service users' roles are updated automatically.

The /metadata endpoint and updating current application is already included in Cumulocity Java Microservice SDK.

### Getting Subscriptions
Getting microservice subscription can be done using bootstrap user.

    GET /application/currentApplication/subscriptions
    Host: ...
    Authorization: Basic …

The Cumulocity Java Microservice SDK provides useful events by calling the endpoints. Please check Java developer's guide for more details.

### Additional Microservice Development Requirements
* Use API to retrieve tenant users with required permissions.
* Use Cumulocity REST API’s, if user has permission
* Use external endpoints, if declared in metadata
* Use other microservices, if user has permission
* Stateless: Ephemeral State, both for in-process state and disk state
* All persistent state must be stored externally, e.g. in MongoDB, e.g. using Cumulocity Inventory, Binary, Tenant Options API
* No additional inbound ports except REST endpoint
* Request lifetime has maximum setting.
* Microservices can be for multi-tenant or single-tenant: For single tenant microservices, Cumulocity creates a new container for each (microservice) application subscription.

### Subscribe to microservice
In order to test the microservice, the subscription can be created.
Creation of subscription for the applications are possible using Administration application.
![Application Subscription](/guides/concepts-guide/applicationsubscription.png)

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
