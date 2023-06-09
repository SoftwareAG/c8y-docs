---
weight: 40
title: Managing software on a device
layout: redirect
---

In the **Software** tab of a device you can manage the software for the particular device.

{{< c8y-admon-info >}}
The **Software** tab shows up for a device if the device supports one of the following operations: c8y&#95;SoftwareUpdate, c8y&#95;SoftwareList, c8y&#95;Software.
{{< /c8y-admon-info >}}

Click **All devices** in the **Devices** menu in the navigator, select the desired device from the device list and open its **Software** tab.

The **Software** tab shows a list of all available software installed on the device. If a given software has a type, it will be displayed next to its name. You can search for a particular software by its name or filter the list by software type.

![Software tab](/images/users-guide/DeviceManagement/devmgmt-software-tab.png)

Additionally, it shows the operation status for the last operation (one of SUCCESSFUL, PENDING, EXECUTING, FAILED). Clicking on the operation will show you the operation details.

### To install software on a device

1. In the **Software** tab, click **Install software**.

    {{< c8y-admon-info >}}
The **Install software** dialog will only display software items matching the device type. Additionally, if the device has any `c8y_SupportedSoftwareTypes` declared the dialog will only display the software items matching the supported software types.
    {{< /c8y-admon-info >}}

2. Select one or multiple software items by selecting the respective version from the list which contains all software items for the particular device type available in the software repository.  
For devices supporting advanced software management features, already installed software items cannot be pre-filtered from the list of available software items. Thus, after a particular software version has been selected, a check is done if the selected software is already installed on the device. If this is the case, a warning next to the selected version indicates that this software version is already present on the device.  
You can remove the already installed software item under **Software changes** or leave it and apply it as part of the changes. It is up to the device agent to decide how to handle such an update.

3. Click **Install**.

4. Under **Software changes** at the right, review your planned changes and confirm the software update operation by clicking **Apply changes**.

The install operation to be executed by the device will be created. The software installation is completed as soon as the device has executed the operation.

Click on the operation to view its details. The status of the last operation is also shown on the **Software** tab.


### To update software on a device

Hover over the software item which you want to update and click **Update**.
Select a version from the list and click **Update** again.

The software will be updated with the selected version.

### To delete software from a device

Hover over the software item which you want to delete and click the delete icon.

### To install software on multiple devices

{{< product-c8y-iot >}} offers the option to execute software updates for multiple devices at once.

1. Execute the software operation (install or update) on a single device to test that the new version works.
2. Navigate to the operation in the **Control** tab and in the context menu select **Schedule as bulk operation**.
3. Fill in the fields to schedule the bulk operation and click **Create**. For details on bulk operations, see [Monitoring and controlling devices](/users-guide/device-management/#monitoring-and-controlling-devices).

The status and details of the bulk operation are shown in the **Bulk operations** tab under **Device control**.

Moreover, the operation details are shown in the **Control** tab of the selected devices.
