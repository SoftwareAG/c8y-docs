---
weight: 10
title: Introduction
layout: bundle
section:
  - edge_server
---

Edge uses REST and MQTT as protocols for external communication. Both protocols may be used to interface devices with Edge. For more information, see [Device integration using REST](/device-integration/device-integration-rest/) and [SmartREST 2.0](/smartrest/smartrest-two/).

Additionally, Edge offers:

* OPC UA protocol. OPC UA protocols support through the OPC UA device gateway and OPC UA management service.

* Cloud Fieldbus functionality to collect data from fieldbus devices and remotely manage them. For example, Modbus protocol. With the release of Cumulocity IoT Edge version 10.18, we are announcing the deprecation of the Cumulocity Linux Agent included in the Cumulocity IoT Edge offering. For further details see the **Deprecation of Cumulocity Linux Agent in Cumulocity IoT Edge** section in the [10.18 release notes](https://cumulocity.com/releasenotes/release-10-18-0/edge-10-18-0/).

For details on how to integrate devices using OPC UA protocols, see [Connecting an OPC UA device](/edge-kubernetes/k8-connecting-devices-to-edge/#connecting-opcua-device).

{{< c8y-admon-info >}}
Currently, only OPC UA protocols are supported.
{{< /c8y-admon-info >}}
