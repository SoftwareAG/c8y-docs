---
weight: 10
title: Overview
layout: redirect
---

{{< product-name-1 >}} can interface with Sigfox devices through the Sigfox Cloud. You can:

- Provision Sigfox devices easily using {{< product-name-1 >}} Device Management.
- Decode upstream payload packets using a web-based user interface.
- Debug and post-process raw device data through {{< product-name-1 >}} events.
- Send downstream data to the device using {{< product-name-1 >}} operations.
- Make use of existing {{< product-name-1 >}} features with Sigfox devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration grants you a quick overview of the {{< product-name-1 >}} Sigfox integration:

![{{< product-name-1 >}} Sigfox integration](/images/device-protocols/sigfox/sigfox-cumulocity-integration.png)

The following sections describe how to:

- [Manage the connectivity settings](#connectivity-sigfox) in {{< product-name-1 >}}.
- [Create device protocols](#device-protocols) with {{< product-name-1 >}}'s device database.
- [Register devices](#register-device-sigfox) and visualize the Sigfox payload using {{< product-name-1 >}}.
- [Update devices](#old-registration) registered with the general device registration.
- [Send operations](#operations-sigfox) to devices.

Moreover, check out the [Troubleshooting](#sigfox-troubleshooting) section in case of any issues.

> **Info:** To be able to use the Sigfox agent, your tenant needs to be subscribed to the application sigfox-agent. In case of any issues, please contact [product support](/welcome/contacting-support/).
