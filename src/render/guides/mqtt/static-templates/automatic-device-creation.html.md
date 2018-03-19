---
order: 20
layout: redirect
title: Automatic device creation
---

The topic for static templates supports an automatic creation of devices. Whenever there is no child associated with your MQTT ClientID and you send data Cumulocity will automatically create a device for the MQTT ClientID. If you want to create the device on your own your first message must be the device creation.
In this case Cumulocity will create the device from the template.

The automatic creation of devices is also supported for 1st level child devices.
For child devices on a deeper level you must use the template for creating a child devices by sending it to the topic of the child device under which you want to place the new child.


