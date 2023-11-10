---
title: Device management
layout: change_log
section:
  - change_log
weight: 10
---


### October 2023


#### -Change- Improved smart group filter layout

In subasset views, smart group filters are now represented by a filter chips dropdown instead of displaying the raw text filter. [DM-1615]


#### -Feature-  Customizable dashboard in the device details

Users can now customize the dashboard on the <b>Info</b> tab in the device details. Widgets can be moved and resized, and new widgets can be added from a list of available widgets. The dashboard can be reset anytime to the default dashboard settings. By default, the "Asset notes" widget has been removed. [DM-2279]


#### -Change- Removal of software item

If the last version of a software is deleted, the software is entirely removed from the repository. [DM-2266]


#### -Feature-  Customizable home dashboard

The Device management home page now also provides a customizable dashboard which lets users add customized widgets. [DM-1644]


#### -Change-  Improved device registration process

If a pending device in the registration list has been accepted, the device is now removed from the list instead of the list showing the "accepted" status for the device. [DM-1723]


#### -Feature-  New wizard for device replacement

In the Device management application, a wizard has been implemented which guides users through replacing a physical device with another one. The replacing device must be registered in the platform in advance and is removed after the replacement procedure has been finished. [DM-2168]
