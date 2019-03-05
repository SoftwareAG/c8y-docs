---
weight: 90
title: Request routing
layout: redirect
---

The request is redirected to a microservice depending on isolation level (auto-scaling is ignored at this moment for clarity), subscription and authorization. A typical request to the platform looks like

    {METHOD} /service/{MICROSERVICE}/{MICROSERVICE_ENDPOINT} 
    Host: ...
    Authorization: Basic ...

First, credentials are used to verify if a requesting user is authorized to access the microservice. Secondly, tenant subscription is verified. If both checks pass, the request is routed to a dedicated microservice deployment in case of PER_TENANT isolation, or to a shared deployment in case of MULTI_TENANT isolation. 

The routed request is stripped of /service/{MICROSERVICE} part, however the Authorization header is not modified, thus a request is still executed as a tenant platform user. 

    {METHOD} /{MICROSERVICE_ENDPOINT} 
    Host: ...
    Authorization: Basic ...
