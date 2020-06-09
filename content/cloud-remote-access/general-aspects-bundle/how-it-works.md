---
title: How Cloud Remote Access works
weight: 20
layout: bundle
---

Cloud Remote Access is a secure way to directly access remote devices through a web browser.

![VNC](/images/users-guide/cra/cra-VNC1a.png)

The following protocols are supported:

* Remote Desktop (VNC)
* Secure Shell (SSH)
* Terminal (Telnet)

Cloud Remote Access works as in the illustration below. The remotely controlled device runs a VNC, SSH or Telnet server and is connected to a gateway compatible with Cloud Remote Access. This gateway must be registered as a device within the Device Management application in Cumulocity IoT. More information about registering devices and instructions can be found in [Device Management > Device Registration](/users-guide/device-management/#connecting-devices) in the User guide.

![VNC2](/images/users-guide/cra/cra-VNC2.png)

With Cloud Remote Access users can

* view status visualizations and track updates of remote devices directly in the same way as if you were at the device location,
* connect to remote devices easily as complex VPN setups are not required,
* establish connection via Telnet or SSH to the gateway itself or to any device in the local area network.

![VNC1b](/images/users-guide/cra/cra-VNC1b.png)

The connection to remote devices is securely encrypted through TLS technology. Additionally, passwords are encrypted in your Cumulocity IoT account, so that you do not need to manage them elsewhere.


