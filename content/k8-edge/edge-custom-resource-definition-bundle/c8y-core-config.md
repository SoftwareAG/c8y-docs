---
weight: 35
title: Cumulocity IoT Core configurations
layout: redirect
---

The core spec specifies the fields for configuring the Cumulocity IoT Core node and its resource limits.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
coreValues | No | Structure |  | Cumulocity IoT Core node configurations. See [Cumulocity IoT Core values](#cumulocity-iot-core-values) for details
resources | No | Structure | Defaults to CPU Limit: 4000m, Memory Limit: 6G, CPU Requests: 1000m, Memory Requests: 1G | Specify resource limits for the Cumulocity IoT Core node container. See [Resource Limits Spec](#resource-limits-spec) for details.