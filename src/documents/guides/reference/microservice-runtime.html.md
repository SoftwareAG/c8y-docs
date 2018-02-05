---
order: 200
title: Microservice container runtime
layout: default
---

## Overview
Microservice deployed on the platform has specific runtime environment. Following document explains what environment variables are available for a microservice to use. Next communication with platform and other microservices is described. 

## Environment variables
Following environment variables are available for microservice to use:

    APPLICATION_NAME - Application name
    SERVER_PORT - Default open port (80)
    MICROSERVICE_SUBSCRIPTION_ENABLED - True by default
    C8Y_BASEURL - Platform address
    C8Y_BASEURL_MQTT - Platform address of mqtt server. (contains port number)
    C8Y_MICROSERVICE_ISOLATION - Isolation level (MULTI_TENANT or PER_TENANT)
    C8Y_BOOTSTRAP_REGISTER - Indicator whether microservice should perform self registration. false by default. 
    C8Y_BOOTSTRAP_TENANT - Bootstrap user tenant. For MULTI_TENANT - microservice owner
    C8Y_BOOTSTRAP_USER - Bootstrap user name
    C8Y_BOOTSTRAP_PASSWORD - Bootstrap user password
    C8Y_TENANT - Application user tenant (available only for PER_TEANT isolation)
    C8Y_USER - Application user name (available only for PER_TEANT isolation)
    C8Y_PASSWORD - Application user password (available only for PER_TEANT isolation)
    MEMORY_LIMIT - Memory limit. Default value: 256M

## Access to platform and other microservices
To execute requests against platform running the microservice, one has to send requests to host specified by C8Y_BASEURL variable. 

A microservice does not have a direct access to other microservices running on the platform. Rather than that a microservice must use platform as a proxy. The endpoint used access other application is:
    
    {C8Y_BASEURL}/service/{OTHER_APPLICATION_NAME}/
