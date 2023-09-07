---
weight: 30
title: Diagnostics REST endpoints
layout: redirect
---

{{< c8y-admon-info >}}
These endpoints are not available for the Apama-ctrl-smartrules and Apama-ctrl-smartrulesmt microservices.
{{< /c8y-admon-info >}}

The following diagnostics endpoints are available for REST requests. These require authentication as a user with READ permission for "CEP management":

- `/service/cep/diagnostics/metrics`  
    GET only. Plain text format.  
    Prometheus metrics from the correlator. For details, see [Monitoring with Prometheus]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-DepAndManApaApp_monitoring_with_prometheus.html) in the Apama documentation.
- `/service/cep/diagnostics/overview`  
    GET only. ZIP file download.  
    Obtains the *diagnostic-overview&lt;timestamp&gt;.zip* file as described above.
- `/service/cep/diagnostics/enhanced`  
    GET only. ZIP file download.  
    Obtains the *diagnostic-enhanced&lt;timestamp&gt;.zip* file as described above.
- `/service/cep/diagnostics/request`  
    PUT only. JSON.  
    Gives access to generic management requests against the correlator. For details, see [Shutting down and managing components]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fre-DepAndManApaApp_shutting_down_and_managing_components.html) in the Apama documentation.
- `/service/cep/diagnostics/correlator/info`  
    GET only. JSON.  
    Obtains the `engine_inspect` information.
