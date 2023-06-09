---
weight: 20
title: Managing firmware on a device
layout: redirect
---

In the **Firmware** tab of a device you can manage the installed firmware for the device.

{{< c8y-admon-info >}}
The **Firmware** tab shows up for a device if the device supports `c8y_Firmware` operations.
{{< /c8y-admon-info >}}

Click **All devices** in the **Devices** menu in the navigator, select the desired device from the device list and open its **Firmware** tab.

The **Firmware** tab shows the current firmware installed on the device.

![Firmware tab](/images/users-guide/DeviceManagement/devmgmt-firmware-tab.png)

Additionally, it shows the operation status for the last operation (one of SUCCESSFUL, PENDING, EXECUTING, FAILED). Clicking on the operation will show you the operation details.

### To install/replace firmware on a device

1. In the **Firmware** tab, click **Install firmware** (or **Replace firmware** if there is already firmware installed on the device).
2. Select a firmware and the desired version from the list, which contains all firmware available for the particular device type in the firmware repository.
3. Click **Install**.

The install operation to be executed by the device will be created. The firmware installation is completed as soon as the device has executed the operation.

Click on the operation to view its details. The status of the last operation is also shown on the **Firmware** tab.


### To install/update firmware on multiple devices

{{< product-c8y-iot >}} offers the option to execute firmware updates for multiple devices at once.

1. Execute the firmware operation (install or replace) on a single device to test that the new version works.
2. Navigate to the operation in the **Control** tab and in the context menu select **Schedule as bulk operation**.
3. Fill in the fields to schedule the bulk operation and click **Create**. For details on bulk operations, see [Monitoring and controlling devices](/users-guide/device-management/#monitoring-and-controlling-devices).

The status of the bulk operation is shown in the **Bulk operations** tab under **Device control**.

Moreover, the operation details are shown in the **Control** tab of the selected devices.
