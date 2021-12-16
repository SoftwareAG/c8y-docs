---
weight: 10
title: Overview
layout: redirect
---

The device management library defines the data structures that are used in {{< product-c8y-iot >}} for device management activities like for example software management and configuration management. The data structures are expressed as fragments that can be used inside managed objects, operations and other resources. More information on the fragment concept can be found in the [{{< product-c8y-iot >}} domain model](/concepts/domain-model/) in the *Concepts guide*. 

In the following section you will find descriptions of the most important functionalities of a device, its managed objects and all its corresponding fragments to them. We will explain the relation between the {{< product-c8y-iot >}} UI, the device object managed in our databases and what is being communicated to and from the device itself. 

If you are interested in details on exposing the {{< product-c8y-iot >}}´s functionalities through our Rest API, see the [{{< openapi >}}](https://{{< domain-c8y >}}/api/) for further information.

To start with device management, open the **All devices** tab in the **Devices** menu of the Device Management application. Click on a device in the list to open the device details of this particular device. You will see various tabs and particular information on each of them. 

![Device details](/images/reference-guide/device-details.png)

This list can be manipulated through the device fragments, i.e. which tabs are shown depends on the capability the device supports. This is mainly operated by one fragment called ```c8y_SupportedOperations```. Based on what is put in the array of this fragment, functionality such as tabs, buttons, etc. are enabled. For example if the ```c8y_SupportedOperations``` fragment contains ```c8y_Firmware```, the firmware tab will be visible in the **Device details** page and the device can manage firmware objects.

For a detailed explanation of each tab and its related configuration via the UI, see also [Device Management > Device details](/users-guide/device-management/#device-details) in the *User guide*. 
