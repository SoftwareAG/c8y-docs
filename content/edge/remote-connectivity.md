---
weight: 40
title: Connecting Cumulocity IoT Edge to the cloud
layout: bundle
---

This section describes how to configure and manage your Edge appliance remotely.

{{< product-c8y-iot >}} Edge can be managed, configured and monitored remotely through a {{< product-c8y-iot >}} cloud tenant. You can control and troubleshoot your {{< product-c8y-iot >}} Edge deployments remotely.

To enable this, you must first register the Edge appliance as a device in a {{< product-c8y-iot >}} cloud tenant. You can register the Edge appliance by enabling remote connectivity and providing the {{< product-c8y-iot >}} cloud tenant account details. Once registered, you can access your Edge appliance remotely, monitor its metrics, update, reboot, and collect diagnostic data of your Edge appliance remotely. The {{< product-c8y-iot >}} cloud tenant uses the SSH protocol to access the remote Edge appliance through a web browser.

{{< c8y-admon-important >}}
If you want to configure remote connectivity, you must configure the DNS when configuring the network.
{{< /c8y-admon-important >}}