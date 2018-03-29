---
order: 110
title: Monitoring
layout: redirect
---
To see if hosted microservice is running successfully, microservice's health endpoint can be checked.
This endpoint is enabled by default for all microservices that is developed using Java Microservice SDK.

    GET {URL}/service/{APPLICATION_NAME}/health

Example response:

    HTTP/1.1 200 
    {
      "status":"UP"
    }

  or

    HTTP/1.1 503
    {
      "status":"DOWN"
    }

