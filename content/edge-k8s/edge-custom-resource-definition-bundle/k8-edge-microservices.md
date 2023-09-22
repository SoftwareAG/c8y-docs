---
weight: 41
title: Microservices
layout: redirect
---

Microservices spec allows specifying resources to allocate to a default microservices, which include the Apama, Smart Rules, OPCUA Management Server and Device Simulator microservices.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|name|Yes|String|| The name of the {{< product-c8y-iot >}} microservice. The allowed values are apama-ctrl, smartrule, ssl-management-server, device-simulator, and opcua-mgmt-service
|resources.limits|No|Structure|Defaults to CPU Limit: 1000m<br>Memory Limit: 1 GB|Specify resource limits for the {{< product-c8y-iot >}} microservice container. For more information, see [Resource Limits Specification](/edge-k8s/edge-custom-resource-definition/#k8-edge-resources-limits-spec).