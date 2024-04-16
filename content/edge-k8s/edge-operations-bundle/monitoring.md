---
weight: 10
title: Monitoring
layout: redirect
---
Edge on Kubernetes allows for monitoring of the Edge Deployment using Prometheus, an open-source project that is used for monitoring application state. See https://prometheus.io/ for detailed information on Prometheus and how to use it.

The Edge operator exposes a Prometheus-compatible metrics endpoint, 'https://\<domain>:8443/metrics', where the domain is the one you specified in the {{< product-c8y-iot >}} Edge CR (or myown.iot.com if you followed the Quickstart installation steps). This endpoint provides a quick overview of essential metrics, designed for efficient data retrieval where in-depth analysis is not required.
You can monitor the recommended list of metrics below or for more comprehensive metrics details, including granular data points and extended analytics for in-depth analysis, use the detailed metrics endpoint, 'https://\<domain>:8443/metrics-detailed'.

### Edge Operator Metrics {#operator-metrics}
Metrics related to the Edge Operator, prefixed by 'c8yedge_'

#### Deployment {#deployment-metrics}
These metrics represent the health status of Deployments in the environment. Deployments are another type of Kubernetes workload that manage stateless applications, ensuring that a specified number of replicas of the application are running at any given time.<br>The labels under _c8yedge_deployment_, such as _apama-ctrl-scope-edge-c8yedge_deployment_, _c8yedge-operator-controller-manager_, _logging-operator-c8yedge-edge-sample_, and so on, are different Deployment applications within your environment. A gauge value of 1 for a Deployment indicates that it is healthy, meaning all desired replicas of the application are up and serving without issues. A value of 0 indicates a failure, such as one or more replicas not running as expected.
|<div style="width:300px">Metrics</div>|Label Options
|:---|:---
|c8yedge_deployment{deployment="apama-ctrl-scope-edge-deployment"}|- apama-ctrl-scope-edge-deployment<br> - c8yedge-operator-controller-manager<br> - logging-operator-c8yedge-edge-sample<br> - microservices-registry<br> - opcua-mgmt-service-scope-management-deployment<br> - psmdb-operator-c8yedge-edge-sample<br> - smartrule-scope-management-deployment<br> - thin-edge

#### Pod CPU Usage {#cpu-metrics}
**Understanding the Metrics**<br>
* c8yedge_pod_cpu_usage: This metric indicates the CPU usage of containers within pods. CPU usage is a critical performance metric, indicating how much of the allocated CPU resources are being utilized by a container.
* container: This label specifies the name of the container within the pod for which the CPU usage is being measured. Containers are the smallest deployable units of computing that can be created and managed in Kubernetes.
* pod: This label indicates the name of the pod that contains the specified container. A pod is a group of one or more containers, with shared storage/network, and a specification for how to run the containers.

**Examples Explained**<br>
For c8yedge_pod_cpu_usage{container=""apama-ctrl-scope-edge-pod"",pod=""apama-ctrl-scope-edge-deployment-76fc99878-x7fft""}, the metric is tracking the CPU usage of the container named apama-ctrl-scope-edge-pod within the pod named apama-ctrl-scope-edge-deployment-76fc99878-x7fft.

**Monitoring Through Pod Restarts**<br>
Pod names often contain a unique hash or a set of alphanumeric characters that change every time the pod is restarted, redeployed, or rescheduled on a different node. This unique hash is part of the pod's name (apama-ctrl-scope-edge-deployment-76fc99878-x7fft, for example, where 76fc99878-x7fft is likely a unique part that changes upon restarts).

To continuously monitor the CPU usage of a container across pod restarts without specifying the dynamic part of the pod's name, you can use regular expressions (regex) in your monitoring queries to match only the static part of the pod name. For example, if you want to monitor the apama-ctrl-scope-edge-pod container regardless of pod restarts, you must construct a query that matches any pod name starting with apama-ctrl-scope-edge-deployment without specifying the unique hash.

**Practical Use in Monitoring Tools**<br>
In monitoring tools like Prometheus, Grafana, or others that support querying with regex, you can use a query similar to c8yedge_pod_cpu_usage{container=""apama-ctrl-scope-edge-pod"",pod=~""apama-ctrl-scope-edge-deployment.*""} to match any pod name that begins with apama-ctrl-scope-edge-deployment, thus covering all lifecycle phases of the pod, regardless of how many times it gets restarted or rescheduled.

|<div style="width:200px">Metrics</div>|<div style="width:400px">Label Options</div>
|:---|:---
|c8yedge_pod_cpu_usage{container="apama-ctrl-scope-edge-pod",pod="apama-ctrl-scope-edge-deployment-76fc99878-x7fft"}|- apama-ctrl-scope-edge-pod<br>- config-reloader<br>- cumulocity-core<br>- event-tailer<br>- fluent-bit<br>- fluentd<br>- kedge-agent<br>- logging-operator<br>- manager<br>- microservices-registry<br>- microservices-registry-config<br>- mongod<br>- mongodb-exporter<br>- mosquitto<br>- opcua-mgmt-service-scope-management-pod<br>- openresty<br>- psmdb-operator<br>- smartrule-scope-management-pod<br>

#### Pod Memory Usage {#memory-metrics}
**Understanding the Metrics**<br>
* c8yedge_pod_memory_usage: This metric tracks the memory usage of containers within pods. Monitoring memory usage helps in managing application scalability, optimizing resource allocation, and preventing out-of-memory (OOM) issues that could lead to application downtime.
* container: This label specifies the name of the container for which the memory usage is being measured. It's essential to monitor memory usage at the container level because each container has its own memory limit and request settings in Kubernetes.
* pod: This label indicates the name of the pod containing the specified container. Pods are the smallest deployable units in Kubernetes that can contain one or more containers.

**Examples Explained**<br>
c8yedge_pod_memory_usage{container=""apama-ctrl-scope-edge-pod"",pod=""apama-ctrl-scope-edge-deployment-76fc99878-x7fft""}: This metric measures the memory usage of the apama-ctrl-scope-edge-pod container within the apama-ctrl-scope-edge-deployment-76fc99878-x7fft pod.

**Monitoring Through Pod Restarts**<br>
Similar to CPU usage metrics, pod names often include a unique hash that changes when pods are restarted. This behaviour means direct monitoring using the full pod name would only track the pod until it restarts. To monitor memory usage continuously through pod restarts, regular expressions (regex) can be used in monitoring queries to match the static part of the pod name, thus abstracting away the dynamic hash.

**Practical Use in Monitoring Tools**<br>
In tools that support regex for querying (e.g., Prometheus, Grafana), you can construct a query like c8yedge_pod_memory_usage{container=""apama-ctrl-scope-edge-pod"",pod=~""apama-ctrl-scope-edge-deployment.*""} to monitor memory usage of the apama-ctrl-scope-edge-pod container across all lifecycle stages of the pod, regardless of restarts. This approach ensures you maintain visibility into your application's memory consumption over time, allowing for effective capacity planning and issue mitigation.

|<div style="width:200px">Metrics</div>|<div style="width:400px">Label Options</div>
|:---|:---
|c8yedge_pod_memory_usage{container="apama-ctrl-scope-edge-pod",pod="apama-ctrl-scope-edge-deployment-76fc99878-x7fft"}|- apama-ctrl-scope-edge-pod<br>- config-reloader<br>- cumulocity-core<br>- event-tailer<br>- fluent-bit<br>- fluentd<br>- kedge-agent<br>- logging-operator<br>- manager<br>- microservices-registry<br>- microservices-registry-config<br>- mongod<br>- mongodb-exporter<br>- mosquitto<br>- opcua-mgmt-service-scope-management-pod<br>- openresty<br>- psmdb-operator<br>- smartrule-scope-management-pod<br>

#### StatefulSet {#statefulset-metrics}
This metric tracks the health status of StatefulSets in the Edge environment. StatefulSets are Kubernetes workloads that manage stateful applications, ensuring that the deployment and scaling of the application are handled properly, and that the application maintains its state across restarts and migrations.

The labels under _c8yedge_statefulset_, such as _c8ycore-sts_, _edge-db-rs0_, _event-tailer-event-tailer_, and _logging-fluentd_, represent different StatefulSet applications deployed within your Edge environment. A healthy StatefulSet (with a gauge value of 1) means that the expected number of pods are up and running for that application. An unhealthy StatefulSet (with a gauge value of 0) indicates issues such as pods not starting up, crashing, or not meeting the application's defined health checks.
|<div style="width:450px">Metrics</div>|Label Options
|:---|:---
|c8yedge_statefulset{statefulset="c8ycore-sts"}|- c8ycore-sts<br>- edge-db-rs0<br>- event-tailer-event-tailer<br>- logging-fluentd

### MongoDB Metrics {#mongodb-metrics}
Metrics related to MongoDB, prefixed by 'c8yedge_db_'
|<div style="width:350px">Metric</div>|<div style="width:300px">Description</div>|Interpretation
|:---|:---|:---
|c8yedge_db_mongodb_up|Indicates whether the MongoDB database instance is up and running.|A binary metric where 1 means the database is operational, and 0 indicates it is down. This metric is crucial for alerting on database availability.
|c8yedge_db_process_cpu_seconds_total|Cumulative CPU time used by the database process, measured in seconds.|This helps in understanding the total CPU time the MongoDB process has consumed since it started, allowing for analysis of CPU usage trends over time.
|c8yedge_db_process_max_fds|The maximum number of file descriptors the database process can open.|File descriptors are used by processes to access files and network sockets. This metric indicates the upper limit set for these resources, helping to anticipate and prevent resource exhaustion issues.
|c8yedge_db_process_open_fds|The current number of open file descriptors by the database process.|Monitoring this metric alongside c8yedge_db_process_max_fds can warn of potential resource exhaustion if the number of open file descriptors approaches the maximum limit.
|c8yedge_db_process_resident_memory_bytes|The amount of RAM currently being used by the database process, in bytes.|This metric is vital for understanding the database's memory footprint, helping to ensure that the database does not exceed available memory resources and to plan for scaling or optimization if necessary.
|c8yedge_db_process_start_time_seconds|The start time of the database process, measured in seconds since the Unix epoch.|This metric can be used to determine how long the database has been running since its last restart. It's useful for tracking uptime and correlating with other events or metrics.
|c8yedge_db_process_virtual_memory_bytes|The total virtual memory used by the database process, in bytes.|Virtual memory includes all memory that the process can access, including what is in RAM and on disk (swap). Monitoring this helps in understanding the database's overall memory demand, which is crucial for performance and stability.
|c8yedge_db_process_virtual_memory_max_bytes|The maximum amount of virtual memory the database process can use.|This metric often reflects a system or process-level limit on memory usage. While not all systems enforce a maximum virtual memory size, when present, this metric can help identify configurations that may limit database performance or scalability.

### {{< product-c8y-iot >}} Core Metrics {#core-metrics}
Metrics related to {{< product-c8y-iot >}} Core, prefixed by 'c8yedge_core_'
|<div style="width:400px">Metric</div>|<div style="width:300px">Description</div>|Interpretation
|:---|:---|:---
|c8yedge_core_sag_c8y_system_cpu_count|The total count of CPU cores available to the Cumulocity system.|Useful for understanding the computing capacity of the system and for scaling considerations.
|c8yedge_core_sag_c8y_system_load_average_1m|The 1-minute average system load.|Indicates the immediate demand placed on the system's resources, helping to identify spikes in usage.
|c8yedge_core_sag_c8y_process_files_open_files|The number of files currently open by Cumulocity processes.|Important for monitoring resource utilization and preventing potential exhaustion of file descriptors.
|c8yedge_core_sag_c8y_process_cpu_usage|CPU usage percentage of Cumulocity processes.|Key for monitoring the CPU demand of the core Cumulocity processes, helping in identifying high CPU consumption issues.

### Apama Metrics {#apama-metrics}
Metrics related to the Apama Microservice, prefixed by 'c8yedge_apama_'

For more details, see [Monitoring with Prometheus]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-DepAndManApaApp_monitoring_with_prometheus.html) in the Apama documentation.

|<div style="width:450px">Metric</div>|<div style="width:250px">Description</div>|Interpretation
|:---|:---|:---
|c8yedge_apama_sag_apama_in_c8y_is_starter_mode|Indicates whether Apama is running in starter mode within Cumulocity.|Starter mode may have different resource usage or limitations compared to full operation mode.
|c8yedge_apama_sag_apama_in_c8y_is_safe_mode|Flags if Apama is operating in a safe mode within Cumulocity.|Safe mode might restrict certain operations or functions to ensure stability or security.
|c8yedge_apama_sag_apama_in_c8y_uptime_secs|This metric measures the uptime of Apama and its correlator in seconds within the Cumulocity environment.|These are crucial for tracking the stability and reliability of the Apama service.
|c8yedge_apama_process_cpu_usage|CPU usage by Apama processes.|Essential for understanding how Apama impacts overall system CPU resources.
|c8yedge_apama_system_cpu_usage|The total CPU usage percentage by the system, including Apama and other processes.|Helps gauge the overall CPU load and identify potential bottlenecks.
|c8yedge_apama_jvm_threads_peak_threads|The peak thread count used by Apama's JVM (Java Virtual Machine).|Indicates the maximum concurrency level required by Apama, useful for JVM tuning and performance optimization.
|c8yedge_apama_process_uptime_seconds|Measures how long the Apama process has been running in seconds.|Similar to the uptime metrics above, this provides insights into Apama's process stability.
|c8yedge_apama_process_files_open_files|The number of files currently open by Apama processes.|Critical for ensuring Apama does not run into file descriptor limits, affecting its ability to operate.
|c8yedge_apama_process_start_time_seconds|The start time of the Apama process, measured in seconds since the Unix epoch.|Can be used to determine the Apama process's age, correlating with other events or metrics.
|c8yedge_apama_system_load_average_1m|The system's 1-minute load average, including Apama's impact.|Gives an immediate view of system demand, useful for identifying sudden increases in load.
|c8yedge_apama_sag_apama_correlator_uptime_seconds|metrics measure the uptime of Apama and its correlator in seconds within the Cumulocity environment.|These are crucial for tracking the stability and reliability of the Apama service.
