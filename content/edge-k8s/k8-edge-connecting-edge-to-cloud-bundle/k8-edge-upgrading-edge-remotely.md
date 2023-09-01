---
weight: 10
title: Upgrading Edge remotely
layout: redirect
---

You can remotely update your Edge using the {{< product-c8y-iot >}}'s firmware update feature. This process requires you to upload a YAML file specifying the Edge version to your  tenant account. For more information about the firmware feature, see [Device Management > Managing device data > Managing device firmware](/users-guide/device-management/#managing-device-firmware) in the *User guide*.

Update the [sample version file](/files/edge-k8s/c8y-edge-version.yaml) to specify the Edge version follow the steps below to upgrade:

1. Log in to your {{< product-c8y-iot >}} tenant account.

2. Go to the Device Management application.

3. Click **Firmware repository** in the **Management** menu in the navigator.

   ![Firmware list](/images/edge-k8s/edge-k8s-firmware-repository.png)

4. Click **Add firmware** at the right of the top menu bar.

5. Provide a name for the firmware, add a description and its version (all required).

6. Optionally, you can define the device type filter when adding a new firmware. For example, *c8y_EdgeAgent*.

7. Select the **Provide a file path** option to specify an HTTPS URL of a server from where the version file can be downloaded.

8. Click **Add firmware**. The firmware object appears in the firmware list.

9. Click **All devices** in the **Devices** menu in the navigator, select your Edge from the device list.

10. Click **Firmware**. The **Firmware** tab shows the current Edge version.

    ![Edge version](/images/edge-k8s/edge-k8s-firmware-current-version.png)

    You can also see the current Edge version in the **Info** tab.

    ![Edge version](/images/edge-k8s/edge-k8s-firmware-version-info-tab.png)

11. Click **Replace firmware**.

12. Select the firmware that you just uploaded and click **Install**.
    ![Edge version](/images/edge-k8s/edge-k8s-select-firmware.png)

    - To check the status of the update, hover over the refresh icon as shown in the figure below:
    ![Edge version](/images/edge-k8s/edge-k8s-check-remote-update-status.png)
    - To check the details of the update, click the text outlined in red in the figure below:
    ![Edge version](/images/edge-k8s/edge-k8s-check-remote-update-full-log.png)
    
### Updating Edge appliances using bulk operations

For information about updating Edge using bulk operations, see [Updating Edge using bulk operations](edge/remote-connectivity/#updating-edge-appliances-using-bulk-operations).