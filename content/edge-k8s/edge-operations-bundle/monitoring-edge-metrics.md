---
weight: 10
title: Monitoring the Edge metrics
layout: redirect
---
Edge on Kubernetes allows for monitoring of the Edge Deployment using Prometheus, an open-source project that is used for monitoring application state. See https://prometheus.io/ for detailed information on Prometheus and how to use it.

The measurements and health of the Edge Deployment are exposed over HTTP on the endpoint, 'https://<domain>:8443/metrics', where the domain is the one you specified in the {{< product-c8y-iot >}} Edge CR (or myown.iot.com if you followed the Quickstart installation steps). Some useful metrics are listed in the tables below, with more available at the above endpoint. Prefixes are used to denote metrics from the same component (for example, metrics related to the Logging Operator are all prefixed by 'c8yedge_logging_').

#### Edge Operator Metrics {#operator-metrics}
Metrics related to the Edge Operator, prefixed by 'c8yedge_'
|<div style="width:250px">Metric Name</div>|Description
|:---|:---
|c8yedge_pod_cpu_usage|CPU usage of the controller pods and their containers
|c8yedge_pod_memory_usage|Memory usage of the controller pods and their containers
|c8yedge_go_memstats_alloc_bytes|Number of bytes allocated and still in use
|c8yedge_rest_client_requests_total|Number of HTTP requests, partitioned by status code, method, and host
|c8yedge_deployment|Total number of pods in the deployment size
|c8yedge_controller_runtime_reconcile_errors_total|Total number of reconciliation errors per controller

#### MongoDB Metrics {#mongodb-metrics}
Metrics related to MongoDB, prefixed by 'c8yedge_db_'
|<div style="width:250px">Metric Name</div>|Description
|:---|:---
|c8yedge_db_go_memstats_alloc_bytes|Number of bytes allocated and still in use.
|c8yedge_db_monc8yedge_db_godb_up|Whether MongoDB is up.

#### Logging Operator Metrics {#logging-metrics}
Metrics related to the Logging Operator, prefixed by 'c8yedge_logging_'
|<div style="width:250px">Metric Name</div>|Description
|:---|:---
|c8yedge_logging_c8yedge_logging_controller_runtime_reconcile_errors_total|Total number of reconciliation errors per |c8yedge_logging_c8yedge_logging_controller.
|c8yedge_logging_c8yedge_logging_controller_runtime_webhook_requests_total|Total number of admission requests by HTTP status code
|c8yedge_logging_c8yedge_logging_controller_runtime_reconcile_time_seconds|Length of time per reconciliation per |c8yedge_logging_c8yedge_logging_controller.
|c8yedge_logging_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="active"}|c8yedge_logging_logging resource state
|c8yedge_logging_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="inactive"}|c8yedge_logging_logging resource state
|c8yedge_logging_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="active"}|c8yedge_logging_logging resource state
|c8yedge_logging_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="inactive"}|c8yedge_logging_logging resource state

#### {{< product-c8y-iot >}} Core Metrics {#core-metrics}
Metrics related to {{< product-c8y-iot >}} Core, prefixed by 'c8yedge_core_'
|<div style="width:250px">Metric Name</div>|Description
|:---|:---
|c8yedge_core_sag_c8y_jvm_memory_used_bytes{area="nonheap",id="CodeHeap'profiled nmethods'",}|The amount of used memory. The possible ID options for this metric are:<br>- "CodeHeap'profiled nmethods'"<br>- "Metaspace"<br>- "CodeHeap'non-nmethods'"<br>- "CompressedClass Space"<br>- "CodeHeap'non-profiled nmethods'"
|c8yedge_core_sag_c8y_jvm_memory_used_bytes{area="heap",id="G1 SurvivorSpace",}|The amount of used memory. The possible ID options for this metric are:<br>- "G1 SurvivorSpace"<br>- "G1 Old Gen"<br>- "G1 EdenSpace"
|c8yedge_core_sag_c8y_jvm_memory_max_bytes{area="nonheap",id="CodeHeap'profiled nmethods'",}|The maximum amount of memory in bytes for the specified memory area and ID. The possible ID options for this metric are:<br>- "CodeHeap'profiled nmethods'"<br>- "Metaspace"<br>- "CodeHeap'non-nmethods'"<br>- "CompressedClass Space"<br>- "CodeHeap'non-profiled nmethods'"
|c8yedge_core_sag_c8y_jvm_memory_max_bytes{area="heap",id="G1 SurvivorSpace",}|The maximum amount of memory in bytes for the specified memory area and ID. The possible ID options for this metric are:<br>- "G1 SurvivorSpace"<br>- "G1 Old Gen"<br>- "G1 EdenSpace"
|c8yedge_core_sag_c8y_mqtt_connections| Number of MQTT connections
|c8yedge_core_sag_c8y_jetty_responses_total{status="2xx",}|Number of requests with response status
|c8yedge_core_sag_c8y_device_authentication_fail_number_total{authenticationMethod="certificates",}|Number of devices, which failed to authenticate themselves. The possible authenticationMethod options for this metric are:<br>- "certificates"<br>- "noCredentials"<br>- "basic"
|c8yedge_core_sag_c8y_jetty_async_requests_total|Total number of async requests
|c8yedge_core_sag_c8y_jetty_requests_active|Number of requests currently active
|c8yedge_core_sag_c8y_jetty_async_requests_waiting|Currently waiting async requests

#### Apama Metrics {#apama-metrics}
Metrics related to the Apama Microservice, prefixed by 'c8yedge_apama_'
For more details, see [Monitoring with Prometheus]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-DepAndManApaApp_monitoring_with_prometheus.html) in the Apama documentation.

|<div style="width:250px">Metric Name</div>|Description
|:---|:---
|c8yedge_apama_controller_runtime_reconcile_errors_total|Total number of reconciliation errors per c8yedge_apama_controller.
|c8yedge_apama_controller_runtime_reconcile_time_seconds|Length of time per reconciliation per c8yedge_apama_controller.
|c8yedge_apama_controller_runtime_webhook_requests_total|Total number of admission requests by HTTP status code.
|c8yedge_apama_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="active"}|c8yedge_apama_logging resource state
|c8yedge_apama_logging_resource_state{kind="Flow",name="flow",namespace="<example-ns>",status="inactive"}|c8yedge_apama_logging resource state
|c8yedge_apama_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="active"}|c8yedge_apama_logging resource state
|c8yedge_apama_logging_resource_state{kind="Output",name="output",namespace="<example-ns>",status="inactive"}|c8yedge_apama_logging resource state

#### Appendix {#appendix}

#### Installing Prometheus {#prometheus-install}
Prometheus is an open-source project that is used for monitoring application state. See https://prometheus.io/ for detailed information on Prometheus and how to use it. Installation steps can be found at [Installing Prometheus](https://prometheus.io/docs/prometheus/latest/installation/)

#### Installing Grafana {#Grafana-install}
Grafana is an open-source project which serves as an introductory tool for querying, visualising, alerting, and exploring metrics, logs, and traces from diverse storage locations. See https://grafana.com/docs/grafana/latest/ for detailed information on Grafana and how to use it. Installation steps can be found at [Installing Grafana](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

#### Configuring Prometheus {#prometheus-config}
Prometheus can be configured with a custom configuration file. The file should be placed into /etc/prometheus/prometheus.yml. Two example files are provided below, one for when certificate validation is skipped, and one for validating with certificates.

Configuration file when skipping certificate validation:
```
global:
  scrape_interval: 90s
  scrape_timeout: 90s
  evaluation_interval: 1m

scrape_configs:
- job_name: 'c8yedge-metrics'
  scrape_interval: 120s

  metrics_path: /metrics
  scheme: https
  tls_config:
    insecure_skip_verify: true
  static_configs:
    - targets:
      - <domain>:8443
```

Configuration file with certificate validation:
```
global:
  scrape_interval: 90s
  scrape_timeout: 90s
  evaluation_interval: 1m

scrape_configs:
- job_name: 'c8yedge-metrics'
  scrape_interval: 120s

  metrics_path: /metrics
  scheme: https
  tls_config:
    ca_file: /etc/ssl/ca.crt
    cert_file: /etc/ssl/client.crt
    key_file: /etc/ssl/client.key
  static_configs:
    - targets:
      - <domain>:8443
```
