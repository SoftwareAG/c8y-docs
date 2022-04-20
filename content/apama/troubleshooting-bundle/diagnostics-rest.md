---
weight: 30
title: Diagnostics REST endpoints
layout: redirect
---

> **Info:** These endpoints are not available for the Apama Smart Rules-only microservice.

The following diagnostics endpoints are available for REST requests. These require authentication as a user with READ permission for "CEP management": 

- `/service/cep/diagnostics/metrics`  
    GET only. Plain text format.  
    Prometheus metrics from the correlator. For details, see "Monitoring with Prometheus" in the Apama documentation.
- `/service/cep/diagnostics/overview`  
    GET only. ZIP file download.  
    Obtains the *diagnostic-overview&lt;timestamp&gt;.zip* file as described above. 
- `/service/cep/diagnostics/enhanced`  
    GET only. ZIP file download.  
    Obtains the *diagnostic-enhanced&lt;timestamp&gt;.zip* file as described above. 
- `/service/cep/diagnostics/request`  
    PUT only. JSON.  
    Gives access to generic management requests against the correlator. For details, see "Shutting down and managing components" in the Apama documentation.
- `/service/cep/diagnostics/correlator/info`  
    GET only. JSON.  
    Obtains the `engine_inspect` information.
