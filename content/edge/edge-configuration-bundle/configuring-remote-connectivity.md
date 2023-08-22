---
weight: 20
title: Configuring remote connectivity
layout: bundle
section:
  - edge_server
---

The {{< product-c8y-iot >}} tenant allows you to remotely manage your Edge appliance by registering the Edge appliance in the {{< product-c8y-iot >}} tenant account. To do so, you must first enable remote-connectivity in the Edge appliance and then register your Edge appliance in the {{< product-c8y-iot >}} tenant account. The {{< product-c8y-iot >}} tenant uses the SSH protocol to access the remote Edge appliance through a web browser.

{{< c8y-admon-important >}}
If you want to configure remote-connectivity, you must configure the DNS when configuring the network, for example, using the `/edge/configuration/network` endpoint.
{{< /c8y-admon-important >}}

For more information, see [Remote connectivity](/edge/remote-connectivity/).
