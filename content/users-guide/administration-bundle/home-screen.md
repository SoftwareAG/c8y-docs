---
weight: 11
title: Home screen

---


The Home screen of the Administration application provides the following content:

* A welcome message
* Quick links to the main parts of the Administration application
* Your capacity usage for the current and for the last month
* The optional applications you are subscribed to

<img src="/images/users-guide/Administration/admin-home.png" alt="Home screen">

The capacity sections show:

* API requests - the total number of API requests, counting whenever some function in {{< product-c8y-iot >}} is invoked, regardless of whether the function is invoked from a device (for example sending a measurement) or from an application (for example viewing the list of devices).
* Device API requests - counting only when the API is called from a device (for example sending a measurement).
* Storage - the total amount of data stored in your account. This amount can be changed by [retention rules](/users-guide/administration/#retention-rules) and by the amount and size of [stored files](/users-guide/administration#files).
* Storage quota - if the storage limit per device is set, the user is restricted to a [maximum data usage](/users-guide/enterprise-tenant/#storage-quota).
* Root devices - the number of root devices connected to your account, excluding child devices.
* Devices - the total number of devices connected to your account. This is the sum of the devices listed in the [All devices](/users-guide/device-management#viewing-devices) page of the Device management application and their direct and indirect child devices.
* Users - the sum of all users configured in this account, active and inactive.
