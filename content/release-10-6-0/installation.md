---
weight: 12
title: Installation & operations notes
layout: bundle
---

The following information is only relevant for customers deploying and operating their own instance of Cumulocity IoT. 


### Kubernetes

#### Network Plugin

When installing an 10.6.0 environment specify flannel as the Kubernetes network plugin. See *Specify flannel as Kubernetes network plugin* in the *Multi-node installation guide*.

#### Pod Network CIDR

In order to avoid a conflict with any host network you can define an individual CIDR range for the Kubernetes network plugin. See *Kubernetes Pod Network CIDR* in the *Multi-node installation guide*.

