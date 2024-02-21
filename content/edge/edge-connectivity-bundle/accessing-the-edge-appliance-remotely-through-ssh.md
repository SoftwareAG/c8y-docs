---
weight: 35
title: Accessing the Cumulocity IoT Edge appliance remotely through SSH
layout: bundle
section:
  - edge_server
---

You can access the {{< product-c8y-iot >}} Edge appliance from the {{< product-c8y-iot >}} tenant through SSH.

**Info:** Ensure that you have registered your {{< product-c8y-iot >}} Edge appliance with the {{< product-c8y-iot >}} tenant. See [Registering the {{< product-c8y-iot >}} Edge appliance in the {{< product-c8y-iot >}} tenant](/edge/edge-connectivity/#registering-the-edge-appliance-in-the-cumulocity-iot-tenant).

To access and connect to the {{< product-c8y-iot >}} Edge appliance:

1. In the {{< product-c8y-iot >}} tenant for your registered {{< product-c8y-iot >}} Edge appliance, add a remote access endpoint. See [To add a remote access endpoint via SSH](/cloud-remote-access/using-cloud-remote-access/#to-add-a-remote-access-endpoint-via-ssh). If you select the **Sign-in method** as **Username and password**, you must enter the operating system's administrator credentials. By default, the port number should always be 22.

2. Connect to the endpoint. See [To connect to an endpoint](/cloud-remote-access/using-cloud-remote-access/#to-connect-to-an-endpoint).
