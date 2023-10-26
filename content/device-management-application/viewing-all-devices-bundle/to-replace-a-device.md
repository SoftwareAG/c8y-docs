---
weight: 20
title: To replace a device
layout: redirect
---

The device list offers a functionality to support the physical exchange of one device with another by preserving the original device representation on the platform including all its generated data. A wizard will guide you through the steps in this process. You can start the wizard by hovering over the device you want to replace in the device list and clicking the "Replace device" button.

In the "Replacement device" step you will see the list of devices available on the platform excluding the device which will be replaced. You need to select the device which will physically replace the device you started the replacement process for.

{{< c8y-admon-info >}}
In order to find the replacement device in the list you need to first register it through the corresponding [registration process](/device-management-application/registering-devices/) appropriate for this device.
{{< /c8y-admon-info >}}

The "Select external IDs" step will list the external IDs assigned to the replacement device. You can select the ones you want to be assigned to device representation of the replaced device. You must select at least one external ID. This will link the data your new physical devices sends to the original device representation object.

Before proceeding with the actual replacement process you would need to confirm this action. Hitting "Replace" in the "Replace device" prompt will trigger the replacement.

{{< c8y-admon-important >}}
The replacement process will remove the selected replacement device from the {{< product-c8y-iot >}} database including all its generated data.
{{< /c8y-admon-important >}}

The "Replace" step will display the progress of the replacement process and the result of every step executed.

![Replace device](/images/users-guide/DeviceManagement/devmgmt-replace-device-wizard.png)<br>

If a step has been skipped you will find an icon with a tooltip containg information about the reason for the step being skipped.

Should the execution of a given step have failed you will be able to see the error details by expanding step details. Note that an error in one of the steps will not prevent the next ones from an attempt to get executed. The wizard will try to execute as many steps as possible automatically and give you information about the failed ones. If the reason for the failure(s) can be removed you can retry all failed steps by clicking the "Retry" button in the bottom bar. If you wish to retry a single failed step only you can do so by clicking the "Retry this step" button form the step actions dropdown.

The "Close" button will bring you back the the updated device list. The replacement device will have been removed from {{< product-c8y-iot >}} while all data sent by the new physical device will be linked to the platform representation of the original physical device thus ensuring that the physical replacement would remain transparent to users.

In order to keep track of the replacements done for a given device an [event](/device-management-application/viewing-device-details/#events) and an [audit log](/standard-tenant/audit-logs/) are created for every replacement.
