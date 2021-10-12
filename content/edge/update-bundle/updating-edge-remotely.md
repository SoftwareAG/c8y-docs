---
weight: 20
title: Updating Edge using tenant account (remotely)
layout: redirect
---

You can remotely update your Edge appliance using the {{< product-c8y-iot >}}'s firmware update feature. This process requires you to upload the Edge archive file (tar.gz) to your tenant account. For more information about firmware feature, see [Managing device firmware](/users-guide/device-management/#managing-device-firmware).

Before you update your Edge appliance remotely, you must:

- [Enable the remote-connectivity](/edge/configuration/#configuring-remote-connectivity) feature in your Edge appliance
- [Register your Edge appliance](/edge/configuration/#registering-the-edge-appliance-in-the-cumulocity-iot-tenant) in your {{< product-c8y-iot >}} tenant account

To remotely update your Edge appliance:

1. Log in to your {{< product-c8y-iot >}} tenant account.

2. Go to **Device Management**.

3. Click **Firmware repository** in the **Management** menu in the navigator.

   ![Firmware list](/images/users-guide/DeviceManagement/devmgmt-firmware-list.png)

4. Click **Add firmware** at the right of the top menu bar.

5. Provide a name for the firmware (and confirm it by clicking **Create new** in the resulting window), add a description and its version (all required).

6. Optionally, you can define the device type filter when adding a new firmware. For example, *c8y_EdgeAgent*.

7. Either upload a binary from the file system or specify a URL from where the firmware can be downloaded.

8. Click **Add firmware**.

   ![Add firmware](/images/edge/edge-firmware-upload.png)

   The firmware object appears in the firmware list.

9. Click **All devices** in the **Devices** menu in the navigator, select your Edge appliance from the device list.

10. Click **Firmware**. The **Firmware** tab shows the current Edge appliance version.

    ![Edge version](/images/edge/edge-firmware-current-version.png)

11. Click **Replace firmware**.

12. Select the firmware that you just uploaded and click **Install**.
    To check the status of the update, hover over the refresh icon as shown in the figure below:

    ![Edge version](/images/edge/edge-check-remote-update-status.png)

    To check the details of the update, click the text outlined in red in the figure below:

    ![Edge version](/images/edge/edge-check-remote-update-full-log.png)