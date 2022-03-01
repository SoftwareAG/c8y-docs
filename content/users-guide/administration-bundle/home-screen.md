---
weight: 11
title: Home screen

---


The Home screen of the Administration application provides

* a welcome message,
* quick links to the main parts of the Administration application,
* your capacity usage for the current and for the last month,
* the optional applications you are subscribed to.

<img src="/images/users-guide/Administration/admin-home.png" alt="Home screen">

The capacity sections show:

* API requests: The total number of API requests, counting whenever some function in {{< product-c8y-iot >}} is invoked, regardless of whether the function is invoked from a device (for example, sending a measurement) or from an application (for example, viewing the list of devices).
* Device API requests: Counting only when the API is called from a device (for example, sending a measurement).
* Storage: The total amount of data stored in your account. This amount can be changed by [retention policies](/users-guide/administration/#retention-rules) and by the amount and size of [stored files](/users-guide/administration#files).
* Storage quota: If the storage limit per device is set, the user is restricted to a [maximum data usage](/users-guide/enterprise-tenant/#storage-quota).
* Root devices: The number of root devices connected to your account, excluding child devices.
* Devices: The total number of devices connected to your account. This is the sum of the devices listed in the [**All devices**](/users-guide/device-management#viewing-devices) page of the Device Management application and their direct and indirect child devices.
* Users: The sum of all users configured in this account, active and inactive.
