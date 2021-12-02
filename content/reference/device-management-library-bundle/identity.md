---
weight: 50
title: Identity
layout: redirect
---

This tab shows all identities associated with the device. If no identities are available the tab is not shown. Identities map from a unique device identifier (IMEI, SN, etc.) to the device’s managed object in Cumulocity IoT. This allows the device to find its managed object.

#### REST

![REST](/images/reference-guide/rest.png)

#### MQTT (SmartREST 2.0)

In the context of MQTT the Client ID is used as the device’s external ID. Upon connecting the MQTT client ID is used to automatically associate the connection to a device in the inventory. Furthermore, no identity bindings need to be created by the device. They are created internally when the 100 and 101 templates are used. All messages to create data are automatically associated with the device context.

Creating device by a device connected to Cumulocity IoT:

`100,createdDeviceName,deviceType`

Creating a child device for a device connected to Cumulocity IoT:

`101,uniqueChildId,myChildDevice,myChildType`
