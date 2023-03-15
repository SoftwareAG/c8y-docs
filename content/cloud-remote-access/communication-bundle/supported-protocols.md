---
weight: 10
title: Supported protocols and gateways
layout: redirect
---

### Supported protocols

Cloud Remote Access supports the following protocols:

* Remote Desktop (VNC)
	* Shares the desktop of the remote device
	* Mouse and keyboard for interaction
* Secure Shell (SSH)
	* Console for command line access
	* Keyboard for interaction
* Terminal (Telnet)
	* Protocol used for old device types
	* Console for command line access
	* Keyboard for interaction

{{< c8y-admon-important >}}
Telnet is considered to be an insecure protocol lacking built-in security measures. For network communication in a production environment we highly recommend you to use the SSH protocol instead.
{{< /c8y-admon-important >}}

### Supported gateways

Cloud Remote Access supports the following gateways:

* Netcomm NTC 6200
	* Gateway router device
	* Agent software (4.2.1 or later)
	* VNCProxy plugin (2.0 or later)
* Casa Systems (NetComm) NTC-220 series
	- Gateway router device
	- Agent software (1.0.0 or later)
* Linux agent
	* Can be used on any linux-based gateway device
	* Version 4.0.0 or later
* Third-party devices
	* Many third-party devices are supported, for details see [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}).
