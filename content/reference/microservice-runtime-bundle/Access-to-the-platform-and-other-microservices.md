---
weight: 30
title: Access to the platform and other microservices
layout: redirect
---

To execute requests against the Cumulocity platform running the microservice, you have to send requests to the host specified by the C8Y_BASEURL variable. 

A microservice does not have direct access to other microservices running on the platform. Rather than that, a microservice must use the platform as a proxy. The endpoint used to access other applications is:
    
    {C8Y_BASEURL}/service/{OTHER_APPLICATION_NAME}/
