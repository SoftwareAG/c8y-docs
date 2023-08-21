---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} Edge can be deployed on a single node Kubernetes cluster and managed using {{< product-c8y-iot >}} Edge Kubernetes operator. 

The {{< product-c8y-iot >}} Edge Kubernetes operator automates the deployment and management of {{< product-c8y-iot >}} Edge on Kubernetes. The operator manages a [Custom Resource Definition (CRD)](/files/k8-edge/edge.cumulocity.com_edges.yaml) to extend the Kubernetes API for {{< product-c8y-iot >}} Edge. You can deploy and manage {{< product-c8y-iot >}} Edge on a Kubernetes cluster by updating {{< product-c8y-iot >}} Edge Custom Resource (CR). Specify the changes in the {{< product-c8y-iot >}} Edge CR file and use `kubectl apply -f` to apply the changes. The operator uses the CR file to deploy these changes.

This documentation includes a sample manifest [Cumulocity IoT Edge Manifest](/files/k8-edge/cumulocity-iot-edge-manifest.yaml) you can use to deploy Edge on Kubernetes.

In contrast to {{< product-c8y-iot >}} platform, which is available in the cloud (for example, using AWS, Azure or other data centers), {{< product-c8y-iot >}} Edge is installed in factories, that is, in the same site ("onsite") in which the IoT assets are located.    

Reasons for using an onsite installation of {{< product-c8y-iot >}} Edge include:

* **Autonomy**: Even if there is no cloud connection, tasks like data collection and data analysis can still be performed.
* **Data reduction**: Data is analyzed and aggregated close to assets, and thus less data needs to be sent to the cloud.
* **Reactivity**: Both {{< product-c8y-iot >}} Edge and {{< product-c8y-iot >}} platform include real-time streaming analytics engines. However, placing the rule execution in {{< product-c8y-iot >}} Edge reduces latency, because the round-trip to cloud is omitted.

Features of {{< product-c8y-iot >}} Edge include:

* Edge Agent, which enables remote monitoring and management of an Edge instance from the {{< product-c8y-iot >}} tenant.
* Data Broker to send IoT data to the cloud and receive operations from the cloud, with web-based UI to filter data.
* Streaming Analytics engine for real-time local data analysis including the {{< product-c8y-iot >}} Analytics Builder.
* Ready-to-use Cockpit and Device Management applications.
* Native protocol support for MQTT and REST.
* Edge database for operational data storage.
* Cloud Fieldbus with web-based UI to create local Modbus and OPC UA connections.
* Easy installation, upgrades and backup/restore.
* Microservice hosting, which allows to run server-side applications which may be used to extend the {{< product-c8y-iot >}} platform with customer-specific functionality (optional component).
* [DataHub Edge](/datahub/running-datahub-on-the-edge/) for historical data storage and analytics (optional component).
* [Machine Learning](/machine-learning/introduction/) to train and deploy your machine learning models (optional component).

Henceforth, Cumulocity IoT Edge will be referred to as Edge.
