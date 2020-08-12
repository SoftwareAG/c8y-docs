---
weight: 60
title: Managing device data
layout: redirect
---

### <a name="software-repo"></a> Managing device firmware

In the firmware repository, Cumulocity IoT offers to collect reference firmware for devices.

In Cumulocity IoT a firmware is any kind of installable of which kind only one exists on the device. Therefore, you can only apply one firmware for any given device. 

#### Viewing firmware 

Click **Firmware repository** in the **Management** menu in the navigator.

The available firmware objects will be displayed, presented as a list.

![Firmware List](/images/users-guide/DeviceManagement/devmgmt-firmware-list.png)

When clicking on an entry, the details for this firmware are displayed along with all available versions and patches. 

![Firmware details](/images/users-guide/DeviceManagement/devmgmt-firmware-details.png)

At the top, the firmware name, an optional description and the device type filter are shown. If a filter is set, the firmware will show up for installation only for devices of that type. If no filter is set, it will be available for all devices. 

The list of versions and patches show the version name, an optional description, the the name of the file containing the firmware. Moreover, the list indicates if a firmware version has patches, which can be viewed by expanding the version entry. 

#### Adding firmwares, firmware versions, or firmware patches
 
##### To add a new firmware

1. In the **Firmware repository** page, click **Add firmware** at the right of the top menu bar. 
2. In the resulting dialog box, enter a name for the firmware, a description and its version (all required).
3. Specify the file for the firmware by either uploading it from the file system or specifying a URL from where the firmware can be downloaded.
4. Click **Save**.

![Add firmware](/images/users-guide/DeviceManagement/devmgmt-firmware-add.png)

The firmware object will be added to the firmware list.

##### To add a new firmware version

1. In the **Firmware repository** page, click **Add firmware** at the right of the top menu bar. 
2. In the resulting dialog box, select the firmware, for which you want to add a new version, from the dropdown list in the **Name** field. 
3. Enter a version.
3. Specify the file for the firmware by either uploading it from the file system or specifying a URL from where the firmware can be downloaded.
4. Click **Save**.

If you click **Add firmware** from within the details of a specific firmware, the dialog box looks slightly different as the firmware is already selected. 

![Add firmware version](/images/users-guide/DeviceManagement/devmgmt-firmware-add-version.png)

The firmware version will be added to the firmware details. Moreover, the firmware list indicates that a version is available for the specific firmware. 

![Version label](/images/users-guide/DeviceManagement/devmgmt-firmware-version-label.png)

##### To add a new firmware patch

1. In the **Firmware repository** page, click **Add firmware patch** at the right of the top menu bar. 
2. In the resulting dialog box, select the firmware, for which you want to add a patch, from the dropdown list in the **Name** field. 
3. in the **Version** field, select the version, for which you want to add a patch, from the dropdown list.  
3. In the **Patch** field, enter a patch.
3. Specify the file for the firmware by either uploading it from the file system or specifying a URL from where the firmware can be downloaded.
4. Click **Save**.

As with adding versions, if you click **Add firmware patch** from within the details of a specific firmware, the dialog box looks slightly different as the firmware is already selected. 

The firmware patch will be added to the version details within the firmware details.

![Versions and patches](/images/users-guide/DeviceManagement/devmgmt-firmware-versions-and-patches.png)

#### To edit a firmware

1. Click the menu icon at the right of a specific firmware entry and in the context menu click **Edit**.
2. Update the name, description or device type filter by clicking the pencil icon next to it. Make the desired changes and click **Save**. 

The firmware will be updated.

#### To download a firmware

<No longer possible?>

#### Deleting firmwares, firmware versions, or firmware patches 

##### To delete a firmware

Click the menu icon at the top right of a firmware entry and in the context menu click **Delete**.

The object will be deleted from the list.

##### To delete a firmware version

In the details of a specific firmware, hover over the version entry you want to delete and click the delete icon. The firmware version will be deleted from the firmware details.


##### To delete a firmware patch

In the version details of a specific firmware, hover over the patch entry you want to delete and click the delete icon. The firmware will be deleted from the version details.






#### To install firmware on a device

1. Click **All devices** in the **Devices** menu in the navigator and select a device from the device list.
2. Open the **Software** tab for the device and click **Install firmware**, see also the description of the **Software** tab in [Device details](/users-guide/device-management#software).

>**Info:** To store other types of binaries in Cumulocity IoT, switch to the [Administration application](/users-guide/administration#files).

#### To install firmware on multiple devices

Cumulocity IoT offers the option to execute firmware or software updates for multiple devices at once. To do so, follow these steps:

1. Execute the software update in a single device to test that the new version really works.
2. Navigate to operation and select **Execute for the whole group**.
3. Fill in the fields to schedule the bulk operation and click **Create**.

The operation status can be viewed in the **Bulk operations** tab of the selected group, see [Bulk operations](#bulk-operations).


### <a name="software-repo"></a> Managing device firmware and software

In the firmware and in the software repository, Cumulocity IoT offers to collect reference firmware and software for devices respectively.

> **Info:** The descriptions below refer to firmware but also apply to device software.

Click **Firmware repository** in the **Management** menu in the navigator.

The available firmware objects will be displayed, presented as cards in a grid.

![Firmware List](/images/users-guide/DeviceManagement/devmgmt-management-firmwarerepo.png)

Click **Details** on a specific object to "turn around" its card and display details.

![Firmware details](/images/users-guide/DeviceManagement/devmgmt-firmware-details.png)

In addition to the object name and version, you will here find the name of the file containing the firmware.

Moreover, several action buttons are provided which are explained below.


#### To add a firmware object

1. In the **Firmware repository** page, click **Add firmware** at the right of the top menu bar. <br><br>![Add firmware](/images/users-guide/DeviceManagement/devmgmt-firmware-add.png)
2. In the resulting dialog box, enter a name for the firmware and its version.
3. Specify the file for the firmware by either uploading it from the file system, specifying a URL from where the firmware can be obtained or choosing a file previously added in the [Administration application](/users-guide/administration#files).
4. Click **Save**.

The firmware object will be added to the firmware list.

Similarly, you can add a new software object to the Software repository.

#### To update a firmware/software object

1. Click **Details** on a specific object to "turn around" its card and display details.
3. Update the name or description, or specify a new file for the firmware by either uploading it from the file system or choosing a file.
4. Click **Save**.

The object will be updated.

#### To download a firmware/software object

1. Click **Details** on a specific object to "turn around" its card and display details.
2. Click the download icon.

The object will be downloaded to your file system.

#### To install firmware/software on a device

1. Click **All devices** in the **Devices** menu in the navigator and select a device from the device list.
2. Open the **Software** tab for the device and click **Install firmware**, see also the description of the **Software** tab in [Device details](/users-guide/device-management#software).

>**Info:** To store other types of binaries in Cumulocity IoT, switch to the [Administration application](/users-guide/administration#files).

#### To install firmware/software on multiple devices

Cumulocity IoT offers the option to execute firmware or software updates for multiple devices at once. To do so, follow these steps:

1. Execute the software update in a single device to test that the new version really works.
2. Navigate to operation and select **Execute for the whole group**.
3. Fill in the fields to schedule the bulk operation and click **Create**.

The operation status can be viewed in the **Bulk operations** tab of the selected group, see [Bulk operations](#bulk-operations).

#### To delete a firmware/software object

Click the menu icon at the top right of a firmware/software card and click **Delete firmware** (or **Delete software**).

The object will be deleted from the list.


### <a name="configuration-repository"></a>Configuration repository

Cumulocity IoT allows to retrieve configuration data and store and manage it in a configuration repository. The configuration data contains the parameters and the initial settings of your device.

Configuration snapshots help you, for example, to apply the same configuration to multiple devices as described below.

Click **Configuration repository** in the the **Management** menu in the navigator. In the **Configuration repository** page, all available configuration snapshots are listed. Each entry shows the configuration name, the description of the configuration, the device type and the configuration type. 

![Configuration Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepo.png)

#### <a name="add-snapshot"></a> To add a configuration snapshot 

1. Click **Add configuration snapshot** at the right of the top menu bar.
2. In the resulting dialog box, enter a unique name.
3. In the **Device type** field, enter a device type. The device type can be found in the **Info** tab of the target device.
4. Optionally enter a description for the configuration.
5. Enter the configuration type, for example "ssh".
6. Specify the configuration snapshot file by either uploading it from the file system, specifying a URL from where the configuration snapshot can be obtained or choosing a file.
7. Click **Add configuration**.

The configuration snapshot will be added to the configuration repository.

#### To edit a configuration snapshot

To edit a configuration snapshot, click on the menu icon at the right of the row and then click **Edit**.

For details on the fields, see [To add a configuration snapshot](/users-guide/device-management#add-snapshot).

![Configuration Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepoedit.png)

Click **Update configuration** to save your changes.

#### To delete a configuration snapshot

To delete a configuration snapshot, click on the menu icon at the right of the row and then click **Delete**.

The configuration snapshot will be deleted from the configuration snapshot repository.

#### To retrieve and apply a configuration snapshot

>**Info:** The following steps apply to devices which do not support multiple configuration types. For information on devices that support multiple configuration types, see the section below.

1. Navigate to the desired device in **Devices** > **All devices** and open its **Configuration** tab.
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right.

The retrieved snapshot can be found in the **Configuration repository**, under **Management** menu in the navigator.

![Retrieve Configuration Snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-old-getnewsnapshot.png)

To apply a configuration snapshot to a device:

1. Navigate to the desired device and open its **Configuration** tab.
2. Under **Configuration snapshot**, select a configuration from the dropdown field.
3. Click **Put new snapshot to device** to apply the selected snapshot to the device.

![Apply new snapshot to a device](/images/users-guide/DeviceManagement/devmgmt-devices-config-putsnapshot-old.png)

#### To retrieve and apply a configuration snapshot to a device which supports multiple configuration types

1. Navigate to the desired device in **Devices** > **All devices** and open its **Configuration** tab.
2. Under **Device-supported configurations**, select the desired configuration type and click 
**Get snapshot from device** at the right.

Once retrieved, you can save or download the snapshot in the **Preview** section. The snapshot will be added to the **Configuration repository**, accessible from the **Management** menu in the navigator.

![Retrieve Configuration Snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

> **Info:** Clicking **Get snapshot from device** creates a new operation. If the operation is in status PENDING
or EXECUTING, it is not possible to trigger another configuration request for the configuration type. Navigate to the **Control** tab of a device to cancel the operation or view the history of operation changes.

To apply a configuration snapshot to a device which supports multiple configuration types:

1. Navigate to the desired device and open its **Configuration** tab.
2. Under **Device-supported configurations**, select the desired configuration type.
3. Under **Available supported configurations**, select a configuration file.
4. Click **Send configuration to device** at the right to apply the selected snapshot to the device.

![Apply new snapshot to a device](/images/users-guide/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

> **Info:** Under **Available supported configurations**, only configuration files with a matching configuration type property or without a configuration type defined are displayed. Also, configuration files are filtered based on the device type.

### <a name="credentials"></a>Managing device credentials

The **Device credentials** page lists all credentials that have been generated for your connected devices. Each device that has been [registered](#dev-registration) shows up here with the naming convention "device_&lt;id&gt;".

![Device credentials](/images/users-guide/DeviceManagement/devmgmt-device-credentials.png)

#### To manage permissions for a device

1. Click the arrow in the **Global roles** column of a device to open a list with available global roles.
2. Assign or remove permissions for an individual device by selecting/deselecting roles.
3. Click **Apply**.

The roles for the device will be updated accordingly.

#### To edit device credentials

1. Click the menu icon at the right of a device credentials entry and then click **Edit** to open the device details.

2. In the details page, you may disable/enable a device by clicking the **Active** toggle, change the password for a device, or assign or remove permissions by selecting/deselecting roles in the **Global roles** list.

	![Device credentials details](/images/users-guide/DeviceManagement/devmgmt-device-credentials-details.png)

3. Click **Save**.

The device credentials will be updated accordingly.


#### To disable device credentials

Click the menu icon at the right of a device credentials entry and then click **Disable**.

The device credentials will be temporarily disabled.

#### To delete device credentials

Click the menu icon at the right of a device credentials entry and then click **Delete**.

The device credentials will be permanently deleted.

Deleting device credentials might be required if you have carried out a factory reset on a device. In this case, the device will often loose its assigned credentials. Delete it and continue with the normal [registration process](#dev-registration) to re-register the device.
