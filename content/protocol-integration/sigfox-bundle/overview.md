---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} can interface with Sigfox devices through the Sigfox Cloud. You can:

- Provision Sigfox devices easily using {{< product-c8y-iot >}} Device Management.
- Decode upstream payload packets using a web-based user interface.
- Debug and post-process raw device data through {{< product-c8y-iot >}} events.
- Send downstream data to the device using {{< product-c8y-iot >}} operations.
- Make use of existing {{< product-c8y-iot >}} features with Sigfox devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration grants you a quick overview of the {{< product-c8y-iot >}} Sigfox integration:

![{{< product-c8y-iot >}} Sigfox integration](/images/device-protocols/sigfox/sigfox-cumulocity-integration.png)

The following sections describe how to:

- [Manage the connectivity settings](#connectivity-sigfox) in {{< product-c8y-iot >}}.
- [Create device protocols](#device-protocols) with {{< product-c8y-iot >}}'s device database.
- [Register devices](#register-device-sigfox) and visualize the Sigfox payload using {{< product-c8y-iot >}}.
- [Update devices](#old-registration) registered with the general device registration.
- [Send operations](#operations-sigfox) to devices.

Moreover, check out

* [Uplink message processing](#uplink-message) for information on measurements and events created while processing the uplink message.
* [Troubleshooting](#sigfox-troubleshooting) in case of any issues.

{{< c8y-admon-info >}}
To be able to use the Sigfox agent, your tenant needs to be subscribed to the application sigfox-agent. In case of any issues, please contact [product support](/welcome/contacting-support/).
{{< /c8y-admon-info >}}
