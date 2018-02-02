---
order: 60
title: Microservices
layout: default
---
## Overview

Cumulocity supports microservice development and deployment to its environment.
The lifecycle consists of the following steps:
* Cumulocity application creation
* Development
* Deployment
* Subscription

Cumulocity also provides a Java Microservice SDK to make microservice prototyping, development and package creation for deployment even easier. Please check the user's guide for more information.

## Microservice Application Creation

As a first step to use a microservice, its Cumulocity microservice application should be created for the Cumulocity tenant. [Create microservice application](/guides/rest/microservice-development#create-application) using Rest API.

## Microservice Development

### Creation of Microservice Bootstrap User
All microservices should use their own bootstrap user in order to authorize to use microservice related endpoints such as getting its subscriptions or updating the current application. The user should be created using Rest Api for [acquiring bootstrap user](/guides/rest/microservice-development/#acquire-microservice-credentials).

### Defining required roles and roles for the microservice
When a tenant subscribes to the microservice application, a service user is created which can be used for the request that a microservice does to the Cumulocity platform. The service user will have the roles that are defined for the microservice.

* Required roles: The roles that are predefined to allow access to use Cumulocity Rest APIs.
As an example, if microservice creates measurements using service user, ROLE_MEASUREMENT_ADMIN has to be added to be required role of the application.
Required role naming has following syntax: ROLE_{name of the API}_{access level}

* Roles: The custom roles that is given by microservice developer. This roles can be given in order to have custom security logic.

The microservice application can be updated with the required roles and roles data using microservice bootstrap user.

    POST /application/currentApplication
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json
    {
      "requiredRoles": ["ROLE_INVENTORY_READ"],
      "roles": ["ROLE_CUSTOM_MICROSERVICE"]
    }

### Getting Subscriptions
Getting microservice subscription can be done using bootstrap user.

    GET /application/currentApplication/subscriptions
    Host: ...
    Authorization: Basic …

## Microservice Deployment
Microservice application can be deployed to Cumulocity after development phase.
Create a manifest file with applicable setting. Please check [microservice manifest reference](/guides/reference/microservice-manifest) for more details.
Cumulocity provides a tool for microservice package preperation and deployment. Please check [microservice package reference](/guides/reference/microservice-package).

## Subscribe Tenants To Microservice
A tenant that has the microservice application can create subscriptions to its subtenants.
Creation of subscription for the applications are possible using Administration application.
![Application Subscription](/guides/concepts-guide/applicationsubscription.png)
