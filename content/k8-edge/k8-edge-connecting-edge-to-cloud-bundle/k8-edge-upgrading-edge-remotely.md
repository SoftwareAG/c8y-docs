---
weight: 10
title: Upgrading Edge remotely
layout: redirect
---

You can upgrade your Edge remotely from your cloud tenant. Before you upgrade Edge, you must register Edge as a device in your cloud tenant. For information about registering Edge on the cloud tenant, see [Registering Edge in the cloud tenant](/k8-edge/k8-edge-connecting-edge-to-cloud/#k8-edge-register-edge-on-cloud).

To remotely update your Edge appliance:

1. Log in to your {{< product-c8y-iot >}} tenant account.

2. Go to the Device Management application.

3. Click **Firmware repository** in the **Management** menu in the navigator.

   ![Firmware list](/images/users-guide/DeviceManagement/devmgmt-firmware-list.png)

4. Click **Add firmware** at the right of the top menu bar.

5. Provide a name for the firmware, add a description and its version (all required).

6. Optionally, you can define the device type filter when adding a new firmware. For example, *c8y_EdgeAgent*.

7. Select the **Provide a file path** option to specify an HTTPS URL of a server from where the archive file can be downloaded.

8. Click **Add firmware**. The firmware object appears in the firmware list.

9. Click **All devices** in the **Devices** menu in the navigator, select your Edge appliance from the device list.

10. Click **Firmware**. The **Firmware** tab shows the current Edge appliance version.

    ![Edge version](/images/edge/edge-firmware-current-version.png)

    You can also see the current Edge appliance version in the **Info** tab.

    ![Edge version](/images/edge/edge-firmware-version-info-tab.png)

11. Click **Replace firmware**.

12. Select the firmware that you just uploaded and click **Install**.
    ![Edge version](/images/edge/edge-select-firmware.png)

    - To check the status of the update, hover over the refresh icon as shown in the figure below:
    ![Edge version](/images/edge/edge-check-remote-update-status.png)
    - To check the details of the update, click the text outlined in red in the figure below:
    ![Edge version](/images/edge/edge-check-remote-update-full-log.png)

13. Restart your Edge appliance after the firmware update is complete. You can remotely restart your Edge appliance from your tenant account as shown in the figure below:
    ![Edge version](/images/edge/edge-firmware-update-restart.png)

### Updating Edge appliances using bulk operations

In your tenant account, you can update multiple Edge appliances using the bulk operations feature. To do so, follow the steps below:

1. Log in to your {{< product-c8y-iot >}} tenant account.

2. Go to the Device Management application.

3. Click **Device control** in the **Overviews** menu in the navigator.
   ![Edge version](/images/edge/edge-bulk-operation-page.png)

4. Click **Bulk operations** and then click **New bulk operation**.
   ![Edge version](/images/edge/edge-new-bulk-operation.png)

5. Click **Firmware update**.
   ![Edge version](/images/edge/edge-bulk-operation-firmware-update.png)

6. Select a firmware from the list. The list can be filtered by firmware name. Click **Next**.

7. Expand the version and select the archive file. Click **Next**.
   ![Edge version](/images/edge/edge-bulk-operation-select-version.png)

8. Select the Edge appliances that you want to update by applying filters to the paginated list of all devices.

   You can filter by status, name, type, model, group, registration date and alarms. You may apply multiple filters. To apply a filter, click the column header,  make your filter option choices in the context menu and click **Apply**.
   ![Edge version](/images/edge/edge-bulk-operation-filter.png)

9. Enter a new title or use the preset title. Optionally enter a  description. Select a start date and a delay. The delay may either be in seconds or milliseconds and is the time spent between each single operation of the bulk operation. Click **Schedule bulk operation** to create the bulk operation.
   ![Edge version](/images/edge/edge-schedule-bulk-operation.png)

For more information about bulk operations, see [Device Management > Monitoring and controlling devices > Working with operations](/users-guide/device-management/#to-view-bulk-operations) in the *User guide*.
