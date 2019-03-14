---
order: 50
title: Managing device types
layout: redirect
---

To process data from devices types, Cumulocity uses so-called "device protocols" which are stored in a device database.

Click **Device database** in the **Device types** menu to access the **Device database** page.

In the **Device database** page you will find a list with all device protocols available in your account.

![Device protocols](/guides/images/users-guide/DeviceManagement/devmgmt-device-protocols.png)

The device protocol list shows the following information:

* the device protocol type (e.g. Modbus, CANOpen, LoRa, IMPACT)
* the device type name 
* the number of resources for the device (at the right)

### Adding or editing device protocols

To add a new device protocol, click **New device protocol** in the top menu bar. 

![Add device protocol](/guides/images/users-guide/DeviceManagement/devmgmt-device-protocol-add.png)

Select one of the available device protocol types from the list. In the upcoming window, enter a name and an optional description for the device protocol and click **Create**. The configuration of the device protocol depends on the protocol type.

For details on configuring device protocols, follow the documentation of the particular device type you want to create in [Optional services](/guides/users-guide/optional-services).

To edit a device protocol, just click on the protocol or click the menu icon at the right of the row and in the context menu click **Edit**. Details on the fields can be found in the documentation of the particular device type in [Optional services](/guides/users-guide/optional-services).

To remove a device protocol, click **Remove** in its context menu.

### Importing device protocols

To add a device protocol from an existing protocol, perform the following steps:

1. Click **Import** in the top menu bar.
 <br><br>![Import device protocol](/guides/images/users-guide/DeviceManagement/devmgmt-device-protocol-import.png)
 
2. Either select the device protocol to be imported from a list of predefined protocols or load it from a file by browsing.

3. Provide a name for the new protocol and click **Save** to save your settings.


