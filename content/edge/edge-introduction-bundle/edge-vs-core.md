---
weight: 30
title: Cumulocity IoT Edge versus other Cumulocity IoT deployments
layout: redirect
---

{{< product-c8y-iot >}} Edge uses the same software as {{< product-c8y-iot >}} platform.

However, while the base software is the same, there are differences regarding the activated optional features and pre-installed agents.

The following differences apply:

|<div style="width:250px">Area</div>|{{< product-c8y-iot >}} Edge|{{< product-c8y-iot >}} platform
|:---|:---|:--
|Multi-tenancy|No; single tenant|Yes
|Cluster|No; single server|Yes
|High availability|HA capabilities depend on the underlying virtualization technology, server failure could lead to temporary downtime*|Full HA: No downtime on server failure, optionally even for data center failure
|Vertical scalability|Yes, limited to appr. 100 tps per CPU core|Yes, but not used
|Horizontal scalability|No|Yes, nearly unlimited scalability
|Upgrades with no downtime|No|Yes
|Root access|Yes|Yes, if customer is hosting
|Installation|Offline, with VM image<br>Online, with [Kubernetes Operator](/edge-k8s/k8-edge-introduction/)|Online, with chef & RPM
|Cloud Field Bus|Included|Optional
|Streaming Analytics|Included|Optional
|Data Broker|Included|Optional
|OPC UA|Included|Optional
|Microservice Hosting|Optional|Optional
|Machine Learning|Optional|Optional
|Data Hub|Optional|Optional

**Footnote**: * The underlying infrastructure including the virtualization is not part of the product. For further details on high availability or fault tolerance options, refer to the relevant information provided by third parties (for example, [vSphere Availability](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-63F459B7-8884-4818-8872-C9753B2E0215.html)).