---
weight: 10
title: Overview
layout: redirect
---

The device management library defines the data structures that are used in {{< product-c8y-iot >}} for device management activities such as software management and configuration management. In the following section you will find descriptions of the most important functionalities of a device, its managed objects and all its corresponding fragments to them. We will explain the relation between the {{< product-c8y-iot >}} UI, the device object managed in our databases and what is being communicated to and from the device itself. The data structures are expressed as fragments that can be used inside managed objects, operations and other resources. More information on the fragment concept can be found in the [{{< product-c8y-iot >}} domain model](/concepts/domain-model/) in the *Concepts guide*. The same section also contains information on the process of running operations on devices and updating the inventory according to the result of the operation.



To get a first impression of device management, open the **All devices** tab in the **Devices** menu and select a device. Click on the device to open the device details of this particular device. You will see a list of tabs and particular information in each every one of them. For a detailed explanation of the UI usage of all tabs related to the operations described in the following sections, see [Device Management > Device details](/users-guide/device-management/#device-details) in the *User guide*. If you are interested in more information about the configuration of interfaces for your device, see the [{{< openapi >}}](https://cumulocity.com/api/10.11.0/#section/Device-management-library) for further information.

![Device details](/images/reference-guide/device-details.png)

This list can be manipulated through the device fragments, i.e. which tabs are shown.
Which tabs are shown depends on the capability the device supports. This is mainly operated by one fragment called ```c8y_SupportedOperations```. Based on what is put in the array of this fragment, functionality such as tabs, buttons, etc. are enabled. For example if the ```c8y_SupportedOperations``` fragment contains ```c8y_Firmware```, the firmware tab will be visible in the **Device details** page and the device can manage firmware objects.
