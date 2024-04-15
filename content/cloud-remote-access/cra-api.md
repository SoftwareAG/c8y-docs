---
title: Cloud Remote Access API
weight: 40
layout: bundle
section:
  - device_management
---

{{< product-c8y-iot >}} offers a public API which enables device integrators to support the Cloud Remote Access feature on their devices.

For this functionality, the gateway needs to listen for an operation which establishes a new tunnel to a device endpoint. For this purpose, the gateway needs to create a WebSocket connection to the cloud and a TCP connection to the device. Using these connections, simple tunneling of protocol data is done on a binary level.
