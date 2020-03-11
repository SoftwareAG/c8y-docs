---
weight: 20
title: Metadata
layout: redirect
---

#### c8y\_IsDevice

A device marked in the inventory with a *c8y\_IsDevice* fragment supports device management. Only devices with this fragment appear in the device management user interface.

    "c8y_IsDevice": {}

![Device in Device Management](/images/reference-guide/devicemanagement.png)

#### c8y\_SupportedOperations

*c8y\_SupportedOperations* lists the operations that are available for a particular device, so that applications can trigger the operations. For example, if the supported operations list contains "c8y\_Restart" (see below), a restart button will be available under the dropdown menu in the top menu bar.


    "c8y_SupportedOperations": [ "c8y_Restart" ]

![Device supports restart](/images/reference-guide/restartsupported.png)
