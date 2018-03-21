---
order: 11
title: Home screen
layout: redirect
---


The Home screen of the Administration application provides 

* a welcome message,
* quick links to the main parts of the Administration application,
* your capacity usage for the current and for the last month,
* the optional applications you are subscribed to. 

<img src="/guides/images/users-guide/Administration/Admin_HomeScreen.png" alt="Home screen" style="max-width: 100%">

The capacity sections show:

* API requests: The total number of API requests, counting whenever some function in Cumulocity is invoked, regardless of whether the function is invoked from a device (for example, sending a measurement) or from an application (for example, viewing the list of devices).
* Device API requests: Counting only when the API is called from a device (for example, sending a measurement).
* Storage: The total amount of data stored in your account. This amount can be changed by [retention policies](/guides/users-guide/administration/#data-retention#retention-rules) and by the amount and size of [stored files](/guides/users-guide/administration/#data-retention#files).
* Storage quota: If the storage limit per device is set, the user is restricted to a [maximum data usage](/guides/users-guide/enterprise-edition#storageQuota).
* Root devices: The number of root devices connected to your account, excluding child devices.
* Devices: The total number of devices connected to your account. This is the sum of the devices listed in the "[All devices](/guides/users-guide/device-management#viewing-devices)" page of the Device Management application and their direct and indirect child devices.
* Users: The sum of all users configured in this account, active and inactive.