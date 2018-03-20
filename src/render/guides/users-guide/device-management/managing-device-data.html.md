---
order: 60
title: Managing device data
layout: redirect
---

### <a name="software-repo"></a> Managing device firmware and software

In the Firmware and in the Software repository Cumulocity offers to collect reference firmware and software for devices respectively.

The description below exemplarily refers to firmware but also applies to device software.

Open the "Firmware repository" from the "Management" menu in the navigator.

The available firmware objects will be displayed, presented as cards in a grid.

![Firmware List](/guides/images/users-guide/DeviceManagement/DevMgmt_FirmwareRepository.png)

Click **Details** on a specific object to "turn around" its card and display details.

In addition to the object name and version, you will here find the name of the file containing the firmware. 

Moreover, several buttons allow you to update the information (see also "How to add a firmware object" below).

**How to add a firmware object**

To add a firmware object, follow these steps:

1. Upload the firmware file in the [Administration application](/guides/users-guide/administration#files). This step is not necessarily required since some manufacturers offer the firmware online.
2. In the "Firmware repository" page, click **Add firmware** at the right of the top bar menu.
3. In the upcoming window, enter a name for the firmware and its version.
4. Specify the file for the firmware by choosing or uploading it or enter the URL from which the device can download the firmware. 
5. Click **Save** to save your settings.

Similarly, you can add a new software object to the Software repository.

**How to install firmware on a device**

Open the device list by clicking "All devices" in the navigator and select a device from the device list.

Open the "Software" tab for the device and click **Install firmware**. 

For further information on these steps, refer to the description of the ["Software"](#software) tab.

>**Info:** To store other types of binaries in Cumulocity, switch to the [Administration application](/guides/images/users-guide/administration#files).

**How to install firmware on multiple devices**

Cumulocity offers the option to execute firmware or software updates for multiple devices at once. To do so, follow these steps:

1. Execute the software update in a single device to test that the new version really works.
2. Navigate to operation and select **Execute for the whole group**.
3. Fill the form to schedule the bulk operation and click **Create**.

The operation status can be viewed in the "Bulk Operation" tab of the selected group. For further information, refer to [Bulk Operations](#bulk-operations).

### <a name="credentials"></a>Managing device credentials

The "Device credentials" tab lists all credentials that have been generated for your connected devices. Each device that has been [registered](#device-registration) shows up here with the naming convention "device_&lt;id&gt;".

Click the arrow in the "Global roles" column of a device to open a list with available global roles. Assign or remove permissions for an individual device by selecting/deselecting roles, and click **Apply** to save your settings.

Click the menu icon at the right of a device to access the following functionalities:

* **Edit** - To open the device credential details (see below).

* **Disable** - To temporarily disconnect a device.

* **Delete** - To delete the credentials of a device. This might be required if you have carried out a factory reset on a device. In this case, the device will often loose its assigned credentials. Delete it and continue with the normal [registration process](#device-registration) to re-register the device.

In the details page of any particular device credentials you can

* disable/enable a device with the "Active" slider,
* change the password for a device,
* assign or remove permissions for an individual device by selecting/deselecting roles in the "Global roles" list. 

<!--
![Bulk provisioning](/guides/images/users-guide/autoregister.png)

Device credentials can also be provided from a CSV file. Files can be uploaded using the button pointed with an arrow. More details on the file structure can be found in under [Bulk-registering devices](#creds-upload) above.-->
