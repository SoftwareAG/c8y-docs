---
weight: 10
title: Monitoring
layout: redirect
---
Edge on Kubernetes allows for monitoring of the Edge Deployment using Prometheus, an open-source project that is used for monitoring application state. See https://prometheus.io/ for detailed information on Prometheus and how to use it.

The Edge operator exposes a Prometheus-compatible metrics endpoint, 'https://\<domain>:8443/metrics', where the domain is the one you specified in the {{< product-c8y-iot >}} Edge CR (or myown.iot.com if you followed the Quickstart installation steps).
You can monitor the recommended list of metrics below, with more available at the above endpoint as described in the [Metric Reference](/edge-k8s/metric-reference/).

### Edge Operator Metrics {#operator-metrics}
Metrics related to the Edge Operator, prefixed by 'c8yedge_'
|<div style="width:250px">Metric</div>|Type|Description
|:---|:---|:---
|c8yedge_pod_cpu_usage|Type|CPU usage of the controller pods and their containers
|c8yedge_pod_memory_usage|Type|Memory usage of the controller pods and their containers
HEALTH

### MongoDB Metrics {#mongodb-metrics}
Metrics related to MongoDB, prefixed by 'c8yedge_db_'
|<div style="width:250px">Metric</div>|Type|Description
|:---|:---|:---
|c8yedge_db_monc8yedge_db_godb_up|Type|Whether MongoDB is up.
POD METRICS (CPU + MEMORY + DISK)

### {{< product-c8y-iot >}} Core Metrics {#core-metrics}
Metrics related to {{< product-c8y-iot >}} Core, prefixed by 'c8yedge_core_'
|<div style="width:250px">Metric</div>|Type|Description
|:---|:---|:---
|c8yedge_core_sag_c8y_jvm_memory_used_bytes{area="nonheap",id="CodeHeap'profiled nmethods'",}|Type|The amount of used memory. The possible ID options for this metric are:<br>- "CodeHeap'profiled nmethods'"<br>- "Metaspace"<br>- "CodeHeap'non-nmethods'"<br>- "CompressedClass Space"<br>- "CodeHeap'non-profiled nmethods'"
|c8yedge_core_sag_c8y_jvm_memory_used_bytes{area="heap",id="G1 SurvivorSpace",}|Type|The amount of used memory. The possible ID options for this metric are:<br>- "G1 SurvivorSpace"<br>- "G1 Old Gen"<br>- "G1 EdenSpace"
|c8yedge_core_sag_c8y_jvm_memory_max_bytes{area="nonheap",id="CodeHeap'profiled nmethods'",}|Type|The maximum amount of memory in bytes for the specified memory area and ID. The possible ID options for this metric are:<br>- "CodeHeap'profiled nmethods'"<br>- "Metaspace"<br>- "CodeHeap'non-nmethods'"<br>- "CompressedClass Space"<br>- "CodeHeap'non-profiled nmethods'"
|c8yedge_core_sag_c8y_jvm_memory_max_bytes{area="heap",id="G1 SurvivorSpace",}|Type|The maximum amount of memory in bytes for the specified memory area and ID. The possible ID options for this metric are:<br>- "G1 SurvivorSpace"<br>- "G1 Old Gen"<br>- "G1 EdenSpace"
|c8yedge_core_sag_c8y_mqtt_connections|Type| Number of MQTT connections
|c8yedge_core_sag_c8y_jetty_responses_total{status="2xx",}|Type|Number of requests with response status
|c8yedge_core_sag_c8y_device_authentication_fail_number_total{authenticationMethod="certificates",}|Type|Number of devices, which failed to authenticate themselves. The possible authenticationMethod options for this metric are:<br>- "certificates"<br>- "noCredentials"<br>- "basic"
|c8yedge_core_sag_c8y_jetty_async_requests_total|Type|Total number of async requests
|c8yedge_core_sag_c8y_jetty_requests_active|Type|Number of requests currently active
|c8yedge_core_sag_c8y_jetty_async_requests_waiting|Type|Currently waiting async requests

### Apama Metrics {#apama-metrics}
Metrics related to the Apama Microservice, prefixed by 'c8yedge_apama_'
For more details, see [Monitoring with Prometheus]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-DepAndManApaApp_monitoring_with_prometheus.html) in the Apama documentation.

|<div style="width:250px">Metric</div>|Type|Description
|:---|:---|:---
|c8yedge_apama_controller_runtime_reconcile_errors_total|Type|Total number of reconciliation errors per c8yedge_apama_controller.
|c8yedge_apama_controller_runtime_reconcile_time_seconds|Type|Length of time per reconciliation per c8yedge_apama_controller.
|c8yedge_apama_controller_runtime_webhook_requests_total|Type|Total number of admission requests by HTTP status code.
|c8yedge_apama_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="active"}|Type|c8yedge_apama_logging resource state
|c8yedge_apama_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="inactive"}|Type|c8yedge_apama_logging resource state
|c8yedge_apama_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="active"}|Type|c8yedge_apama_logging resource state
|c8yedge_apama_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="inactive"}|Type|c8yedge_apama_logging resource state

### Logging Operator Metrics {#logging-metrics}
Metrics related to the Logging Operator, prefixed by 'c8yedge_logging_'
|<div style="width:250px">Metric</div>|Type|Description
|:---|:---|:---
|c8yedge_logging_c8yedge_logging_controller_runtime_reconcile_errors_total|Type|Total number of reconciliation errors per |c8yedge_logging_c8yedge_logging_controller.
|c8yedge_logging_c8yedge_logging_controller_runtime_webhook_requests_total|Type|Total number of admission requests by HTTP status code
|c8yedge_logging_c8yedge_logging_controller_runtime_reconcile_time_seconds|Type|Length of time per reconciliation per |c8yedge_logging_c8yedge_logging_controller.
|c8yedge_logging_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="active"}|Type|c8yedge_logging_logging resource state
|c8yedge_logging_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="inactive"}|Type|c8yedge_logging_logging resource state
|c8yedge_logging_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="active"}|Type|c8yedge_logging_logging resource state
|c8yedge_logging_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="inactive"}|Type|c8yedge_logging_logging resource state
