---
weight: 10
title: Overview
layout: redirect
---


This section describes the device managed object and more importantly its fragments. Here you will find the most important functionalities a device has and all of the corresponding fragments to them. We will show the connection between the UI view, the device object managed in our databases and what is being communicated to and from the device itself.

To begin with device management, opp

Let's start from the **Device details** page. What we see there is a list of tabs and information within every one of them.

![Device details](/images/reference-guide/device-details.png)

This list can be manipulated through the device fragments.
Which tabs are shown depends on which capability the device supports. This is mostly operated by one fragment called ```c8y_SupportedOperations```. Based on what is put in the array of this fragment, functionality such as tabs, buttons, etc. are enabled. For example if the ```c8y_SupportedOperations``` fragment contains ```c8y_Firmware```, the firmware tab will be visible in the **Device details** page and the device can manage firmware objects. This will be explained in more details in the firmware section.
