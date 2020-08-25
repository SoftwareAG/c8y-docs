---
weight: 60
title: Managing device data
layout: redirect
---

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

### <a name="device-profiles"></a>Managing device profiles

Device profiles consist of a set of firmware version, software packages and configuration files which can be deployed on a device. Based on device profiles, users can deploy specific definitions on devices by using bulk operations.

*Device profiles describe a list of basic, mandatory software packages, to be applied for initial setup of devices after they come out of the factory and are taken into production. After the initial setup of the device, platform users can still use bulk operations (or single operations) to install new versions of software/firmware or additional software/configurations – beyond the initial versions applied by the profile. 
*
#### To view device profiles

Click **Device profiles** in the **Management** menu in the navigator to to access the **Device profiles** page, which lists all available device profiles.

Each device profile entry shows the profile name and the selected device type(s), if any.

Click a device profile name to view its details.

In the **Name and device type** section, the name of the profile and optionally selected device types are shown.

In the **Firmware** section, a firmware and its version is shown.

In the **Software** section, one or multiple softwares and their versions is shown.

In the **Configuration** section,

#### To add a device profile

Click **Add device profile** at the right of the top menu bar, to add a new device profile.

In the **Add device profile** window, provide a name for the profile and optionally enter one or more device types. If a device type is provided, the device profile can only be assigned to devices of the specified type. If left empty, it will be available for all device types.

#### <a name="to-add-items"></a>To add items to a device profile

In the device profile details, you can add firmware versions, software packages and configuration files.

Click **Add firmware** to add a firmware version to the profile. Select a firmware and a version from the list and click **Save** to add the selection to the profile. If a device type has been defined for the profile, only those firmware versions can be selected that match the device type.

Click **Add software** to add a software package to the profile. Select a software and a software version from the list and click **Save** to add the selection to the profile. As opposed to firmware, you can add more than one software package to a profile. If a device type has been defined for the profile, only those firmware versions can be selected that match the device type.

Click **Add configuration** to add a configuration file to the profile. Select a configuration file from the list and click **Save** to add the selection to the profile. You can add more than one configuration file to a profile.

#### To update device profiles

To update a device profile click the menu icon at the right of the respective device profile entry and then click **Edit**.

You may edit the name and the device types by clicking the pencil icon next to the respective fields. Make the desired changes and click **Save** to save your edits.

Moreover, you can delete firmware, software or configuration items or add new ones. 

To delete an item, hover over it and click the delete icon.

See [To add items to a device profile](#to-add-items) for details on how to add firmware, software or configuration items.

Note that in case of firmware, only one item is allowed in a profile at a time.


#### To duplicate device profiles

To duplicate a device profile click the menu icon at the right of the respective device profile entry and then click **Duplicate**. 

Duplicating a profile creates another instance of the profile with the same content. You may give the profile a more appropriate name by clicking the pencil icon next to the name field and editing it.

#### To delete device profiles

To delete a device profile click the menu icon at the right of the respective device profile entry and then click **Delete**. 

> **Info:** Deleting a profile deletes the entry from the device profile repository. It has no affect towards the devices that currently use the profile.

#### To apply a device profile to one or more devices

Device profiles can be applied to devices by operations. 

Click **Device control** in the **Overview** menu to navigate to the **Device control** page. In the **Device control** page, a new bulk operation can be created to apply a device profile.

In the **Bulk operations** tab, click **New bulk operation** at the right of the top menu bar and in the resulting dialog, select **Apply device profile**.

Follow the steps described in [Monitoring and controlling devices > Working with operations > To add a bulk operation](/users-guide/device-management/#bulk-operations) to schedule a bulk operation which applies a device profile.



The execution of a Device Profile (applying a Device Profile to a device) is an operation with the same fragment (c8y_DeviceProfile) as also shown in the data model for the repository entry.

The device takes care of applying firmware, software and configurations part of the profile and reports back the status of the operation. Additionally, the device updates the device object after successfully applying a profile with the information of the currently applied profile. In case of the operation failing this will not happen.

Since we have only one operation to apply a profile, this approach also provides visibility if a profile has been completely applied for a given device. Via the failureReason the device can report back on which step it failed in case it couldn’t apply the profile.

Rolling out an update for all devices that already use the profile would be running a bulk operation where the filter selects all devices with this profile.  

Device profiles can be assigned to devices using Bulk Operations

Devices can be filtered by applied device profile
