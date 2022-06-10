---
weight: 25
title: Accessing the Edge appliance from the Cumulocity IoT tenant
layout: redirect
---

The {{< product-c8y-iot >}} Cloud Remote Access allows you to remotely access the Edge appliance through a web browser. The remote Edge appliance is represented as a device in the Device Management application of {{< product-c8y-iot >}}.

#### Prerequisites

To use Cloud Remote Access, you need:

* "Remote access" permission granted to the tenant user.
* The Cloud Remote Access microservice included into your subscription plan.

#### Supported protocols

The following protocols are supported to connect to the Edge appliance through remote access from the {{< product-c8y-iot >}} tenant:

* Remote Desktop (VNC). See [Accessing the Edge device remotely through VNC](/edge/remote-connectivity/#accessing-the-edge-appliance-remotely-through-vnc).
  * Shares the desktop of the remote device
  * Mouse and keyboard for interaction
* Secure Shell (SSH)
  * Console for command line access
  * Keyboard for interaction
* Terminal (Telnet)
  * Console for command line access
  * Keyboard for interaction

For more information about remote access, see [Cloud Remote Access](/cloud-remote-access/cra-general-aspects).
