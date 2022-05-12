---
weight: 40
title: Monitoring REST endpoints
layout: redirect
---


The following monitoring endpoints are available for REST requests. These require authentication as a valid user, but do not require any special roles.

- `/service/cep/health`  
    GET only. JSON.  
    Obtains information on whether the microservice and correlator are up. 
    Also provides correlator and microservice status values. For details about the correlator status values, see "List of correlator status statistics" in the Apama documentation.  
    > **Info:** For the multi-tenant variant of the Apama Smart Rules-only microservice, only basic microservice status values are provided.
- `/service/cep/prometheus`  
    GET only. Plain text format.  
    Prometheus metrics from the correlator and microservice. For details, see "Monitoring with Prometheus" in the Apama documentation.
