---
weight: 20
title: Viewing diagnostics information
layout: redirect
---

If a user has READ permission for "CEP management", then two links for downloading diagnostics information are available in both the Apama EPL Apps and Apama Analytics Builder web applications: one for downloading basic diagnostics information and another one for downloading enhanced (more resource-intensive) diagnostics information. These links are shown at the bottom of the web application's starting page (that is, in the EPL application manager and in the model manager). 

It may be useful to capture this diagnostics information when experiencing problems, or for debugging EPL applications. It is also useful to provide to support if you are filing a support ticket. 

Basic diagnostics information is provided in a ZIP file named *diagnostic-overview&lt;timestamp&gt;.zip* and includes the following information (this should be typically a few Megabytes, and be generated in about 5 seconds):

- The microservice log file contents, if available, including a record of the correlator's startup logging and the last hour or maximum of 20,000 lines of logging (this may require the "microservice hosting feature" in the subscribed applications).
- Apama-internal diagnostics information (similar to the `engine_watch` and `engine_inspect` command-line tools available in Apama).
- A copy of all EPL applications, Smart Rules and Analytics Builder models.
- A copy of any alarms that the Apama-ctrl microservice has raised.
- CPU profiling (over a duration of 5 seconds).
- Some information from the environment (tenant details, environment variables).
- Version numbers of the components.

Enhanced diagnostics information is provided in a ZIP file named *diagnostic-enhanced&lt;timestamp&gt;.zip* and includes the following information:

- Contains what is in the above-mentioned *diagnostic-overview&lt;timestamp&gt;.zip* file. 
- In addition, it includes requests that are more resource-intensive and may significantly slow down the correlator, including EPL memory profiler snapshots and contents of queues. 

The following endpoints are also available for REST requests. These require authentication as a user with READ permission for "CEP management": 

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

What a user can see or do depends on the permissions:

- A user with only READ permission for "CEP management" has read-only access to the Apama EPL applications and Analytics Builder models. 
- Without ADMIN permission for "CEP management", the user is not able to activate or edit Apama EPL applications or Analytics Builder models.
- If a user has both READ and ADMIN permissions for "CEP management", the user has read-write access and can access the diagnostics information.
- If a user has only the ADMIN permission for "CEP management" and no READ permission, the user is able to load, edit and deploy Apama EPL applications and Analytics Builder models, but is not able to see or access the diagnostics information.

All users can see a version number in the EPL application manager and in the model manager. 