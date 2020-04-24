---
title: Troubleshooting
weight: 50
---

### Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (e.g. alarms, events) that occur in the future. This is also the reason why it may take a while until the **Location** and the **Measurement** tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the **auto APN** mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.
* After the new firmware is installed, all Cumulocity IoT agent packages (agent software, CA certificate bundle and VNC Proxy) will be deleted. There is a need to reinstall all again.
