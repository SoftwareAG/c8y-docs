---
weight: 30
title: Accessing logs
layout: redirect
---

The Operator deploys and configures a Fluent Bit daemonset on the node to collect the container and application logs from the node file system. Fluent Bit queries the Kubernetes API, enriches the logs with metadata about the pods (in the Edge namespaces), and transfers both logs and metadata to Fluentd. Fluentd receives, filters, and persists the logs in the persistent volume claim configured for logging.

Download the log archives by running the following script:
```shell
##########################################################################################################\ 
# Execute this script to download diagnostic logs into your local file system\ 
# Prerequisites:\ 
#  - kubectl tool to communicating with Kubernetes cluster's control plane in which Edge is deployed.\ 
#  - For configuration, kubectl looks for a file named config in the $HOME/.kube directory.\ 
#    You can specify other kubeconfig files by setting the KUBECONFIG environment variable.\ 
#########################################################################################################\ 
FILE_NAME="edge-diagnostic-archive-$(date +%Y%m%d%H%M%S).tar.gz" && \ 
kubectl exec -n ` + ns + ` logging-fluentd-0 -c fluentd -- tar -czvf /var/log/$FILE_NAME /var/log/edge && \ 
kubectl cp ` + ns + `/logging-fluentd-0:/var/log/$FILE_NAME -c fluentd ./$FILE_NAME && \ 
kubectl exec -n ` + ns + ` logging-fluentd-0 -c fluentd -- rm /var/log/$FILE_NAME` 
```

Download the log archives remotely from your cloud tenant. For more information, see [Downloading diagnostics remotely](/edge-k8s/k8-edge-connecting-edge-to-cloud/#downloading-diagnostics-remotely).

