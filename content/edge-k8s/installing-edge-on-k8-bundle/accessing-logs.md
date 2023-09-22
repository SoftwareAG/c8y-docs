---
weight: 30
title: Accessing logs
layout: redirect
---

The Edge Operator deploys and configures a Fluent Bit daemonset on the Kubernetes node to collect the container and application logs from the node file system. Fluent Bit queries the Kubernetes API, enriches the logs with metadata about the pods (in the Edge namespace), and transfers both the logs and metadata to Fluentd. Fluentd receives, filters, and persists the logs in the persistent volume claim configured for logging.

To download the diagnostic log archive, run the command below. It generates a file named *c8yedge-logs-{current date}.tar.gz* in the current directory. 

```shell
kubectl get edge c8yedge -n c8yedge --output jsonpath='{.status.helpCommands.downloadLogs}' | sh 
```

{{< c8y-admon-info >}}
Substitute the {{< product-c8y-iot >}} Edge name and namespace name, which is currently **c8yedge** in the command, with the specific {{< product-c8y-iot >}} Edge name and namespace name you've specified in your Edge CR. 
{{< /c8y-admon-info >}}

Download the log archives remotely from your cloud tenant. For more information, see [Downloading diagnostics remotely](/edge-k8s/k8-edge-connecting-edge-to-cloud/#downloading-diagnostics-remotely).

