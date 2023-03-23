---
weight: 40
title: Connecting Cumulocity IoT Edge to the cloud
layout: bundle
---

This section describes how to configure and manage your Edge appliance remotely.

The {{< product-c8y-iot >}} cloud tenant allows you to remotely manage your Edge appliance. To do so, you must first enable the remote-connectivity feature in the Edge appliance, add the cloud tenant URL and then register your Edge appliance in the {{< product-c8y-iot >}} cloud tenant account. When registered, you will be able to access your Edge appliance remotely, monitor the metrics, update the firmware, reboot your Edge appliance remotely and so on. The {{< product-c8y-iot >}} cloud tenant uses the SSH protocol to access the remote Edge appliance through a web browser.

{{< c8y-admon-important >}}
If you want to configure remote-connectivity, you must configure the DNS when configuring the network.
{{< /c8y-admon-important >}}