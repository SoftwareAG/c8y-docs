---
weight: 80
title: Applying device profiles to devices
layout: redirect
---

Device profiles can be assigned to:

* [Individual devices](#to-apply-profiles-to-single-devices)
* [Multiple devices through bulk operations](#to-apply-profiles-to-multiple-devices)

The **Device profile** tab of a particular device shows the details of the currently installed profile on a device.

![Currently installed profile](/images/users-guide/DeviceManagement/devmgmt-device-profile-tab.png)

{{< c8y-admon-info >}}
The **Device profile** tab shows up for a device if the device supports `c8y_DeviceProfile` operations.
{{< /c8y-admon-info >}}

<a name="to-apply-profiles-to-single-devices"></a>
### To apply device profiles to a single device

Device profiles can be applied to individual devices in the **Device Profile** tab of the particular device.

1. In the **Device profile** tab, select a device profile from the dropdown list. Only profiles that match the device type (if specified) or have no device type specified are displayed.
2. Click **Assign device profile** to start the update operation.

<a name="to-apply-profiles-to-multiple-devices"></a>
### To apply device profiles to multiple devices

Device profiles can be applied to multiple devices by using bulk operations.

1. Click **Device control** in the **Overview** menu to navigate to the **Device control** page. In the **Device control** page, a new bulk operation can be created to apply a device profile.
2. In the **Bulk operations** tab, click **New bulk operation** at the right of the top menu bar and in the resulting dialog select **Apply device profile**.
3. Follow the steps described in [Monitoring and controlling devices > Working with operations > To add a bulk operation](/users-guide/device-management/#bulk-operations) to schedule a bulk operation which applies a device profile.

The devices will install the firmware, software, and configurations items of the profile and report back the status of the operation. After applying the profile, the device objects in the platform are updated accordingly with the new profile information.

{{< c8y-admon-info >}}
When creating bulk operations, it is possible to use filters, and by this create bulk operations only for those devices where a profile has not been applied yet.
{{< /c8y-admon-info >}}
