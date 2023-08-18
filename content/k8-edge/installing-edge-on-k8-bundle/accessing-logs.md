---
weight: 30
title: Accessing logs
layout: redirect
---

The Operator deploys and configures a Fluent Bit daemonset on the node to collect container and application logs from the node file system. Fluent Bit queries the Kubernetes API, enriches the logs with metadata about the pods (in the Edge Namespaces), and transfers both logs and metadata to Fluentd. Fluentd receives, filters, and persists the logs in the node's file system.

You can find the logs, including the ones from the Edge Operator, at `/var/log/cumulocity-iot-edge/<EDGE-CR-NAME>`. Logs for the sample deployment can be found under `/var/log/cumulocity-iot-edge/cumulocity-iot-edge` folder.
