---
order: 200
title: Microservice container runtime
layout: default
---

## Overview

Microservices deployed on the platform have a specific runtime environment. The following document explains which environment variables are available for a microservice. 

Moreover, the communication with the Cumulocity platform and other microservices is described. 

## Environment variables

The following environment variables are available for microservices:

    APPLICATION_NAME - Application name
    SERVER_PORT - Default open port (80)
    MICROSERVICE_SUBSCRIPTION_ENABLED - True by default
    C8Y_BASEURL - Platform address
    C8Y_BASEURL_MQTT - Platform address of mqtt server (contains port number)
    C8Y_MICROSERVICE_ISOLATION - Isolation level (MULTI_TENANT or PER_TENANT)
    C8Y_BOOTSTRAP_REGISTER - Indicator whether microservice should perform self registration, false by default 
    C8Y_BOOTSTRAP_TENANT - Bootstrap user tenant, for MULTI_TENANT - microservice owner
    C8Y_BOOTSTRAP_USER - Bootstrap user name
    C8Y_BOOTSTRAP_PASSWORD - Bootstrap user password
    C8Y_TENANT - Application user tenant (available only for PER_TENANT isolation)
    C8Y_USER - Application user name (available only for PER_TENANT isolation)
    C8Y_PASSWORD - Application user password (available only for PER_TENANT isolation)
    MEMORY_LIMIT - Memory limit, default value: 256M

### Example usage

Prerequisite:

Microservice docker repository image is visible with the command:

    $ docker images 

Execute to run docker container with environment variables:

    $ docker run -e C8Y_BASEURL={URL} -e C8Y_BOOTSTRAP_TENANT={BOOTSTRAP_TENANT} -e C8Y_BOOTSTRAP_USER={BOOTSTRAP_USERNAME} -e C8Y_BOOTSTRAP_PASSWORD={BOOTSTRAP_USER_PASSWORD} -i -t {DOCKER_REPOSITORY_IMAGE}:{TAG}

Please use backslash (\\) before the special characters such as &, !, ;, \\ and etc. 

## Access to the platform and other microservices

To execute requests against the Cumulocity platform running the microservice, you have to send requests to the host specified by the C8Y_BASEURL variable. 

A microservice does not have direct access to other microservices running on the platform. Rather than that, a microservice must use the platform as a proxy. The endpoint used to access other applications is:
    
    {C8Y_BASEURL}/service/{OTHER_APPLICATION_NAME}/
