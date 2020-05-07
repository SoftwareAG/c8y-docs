---
weight: 12
title: Installation & operations notes
layout: redirect
---

The following information is only relevant for customers deploying and operating their own instance of Cumulocity IoT. 

### Memory configuration

An issue has been identified that can lead to excessive RAM usage which finally leads to problems with the Linux OOM-Killer mechanism. Customers deploying and operating their own instance of Cumulocity IoT, are asked to follow the updated instructions on the configuration of memory settings  described here:

* *Backend installation > Create the Cumulocity environment file > Important configuration items* in the *Multi-node installation guide*.
* *Operational procedures > Karaf memory considerations* in the *Operations guide*.


### Kubernetes

#### Network Plugin

When installing an 10.6.0 environment specify flannel as the Kubernetes network plugin. See *Specify flannel as Kubernetes network plugin* in the *Multi-node installation guide*.

#### Pod Network CIDR

In order to avoid a conflict with any host network you can define an individual CIDR range for the Kubernetes network plugin. See *Kubernetes Pod Network CIDR* in the *Multi-node installation guide*.

