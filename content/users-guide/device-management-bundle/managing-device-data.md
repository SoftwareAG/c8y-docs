---
weight: 60
title: Managing device data (contains beta changes)
layout: redirect
---

### Overview

The Device Management application provides various features that support you in efficiently managing your devices:

|Feature|Description|
|:---|:---|
|[Managing device firmware](#firmware-repo)|Allows you to retrieve and manage firmware, firmware versions and patches in the firmware repository and to install or update them.
|[Managing device software](#software-repo)|Allows you to retrieve and manage software and software versions in the software repository and to install or update them.
|[Managing configurations](#configuration-repository)|Allows you to retrieve configuration data and store and manage it in a configuration repository as configuration snapshot. 
|[Device credentials](#credentials)|Allows you to manage all credentials that have been generated for your connected devices.
|[Trusted certificates](##managing-trusted-certificates)|<to be added>
|[Device profiles](#device-profiles)|<to be added>


All features are accessible through the **Management** menu in the navigator:

![Management menu](/images/users-guide/DeviceManagement/devmgmt-management-menu.png)

### <a name="firmware-repo"></a> Managing device firmware

In the firmware repository, Cumulocity IoT offers to collect reference firmware for devices.

Only one firmware package version can be applied per device.

#### Viewing firmware 

Click **Firmware repository** in the **Management** menu in the navigator.

The available firmware objects will be displayed as a list.

![Firmware list](/images/users-guide/DeviceManagement/devmgmt-firmware-list.png)

Each entry shows the firmware name, the device type it is applicable for (if set), and a label indicating if and how many versions are available for a particular firmware.

When clicking on an entry, the details for this firmware are displayed along with all available versions and patches. 

![Firmware details](/images/users-guide/DeviceManagement/devmgmt-firmware-details.png)

At the top, the firmware name, a description and optional device type filter(s) are shown. If a filter is set, the firmware will show up for installation only for devices of that type. If no filter is set, it will be available for all devices. 

The list of versions and patches shows the version name and the name of the firmware binary. Moreover, the list indicates if a firmware version has patches, which can be viewed by expanding the version entry. The versions and patches are ordered by their creation time (descending).

#### Adding firmwares, firmware versions, or firmware patches
 
##### To add a new firmware or firmware version

1. In the **Firmware repository** page, click **Add firmware** at the right of the top menu bar. 
2. In the resulting dialog box, 
	* to add a new firmware, enter a name for the firmware (and confirm it by clicking **Create new** in the upcoming window), add a description and its version (all required).
	* to add a new version, select the firmware for which you want to add a new version from the dropdown list in the **Firmware** field and enter a version.
3. Either upload a binary from the file system or specify a URL from where the firmware can be downloaded.
4. Click **Save**.

![Add firmware](/images/users-guide/DeviceManagement/devmgmt-firmware-add.png)

The firmware object will be added to the firmware list or the firmware version will be added to the firmware details and the version label will be updated accordingly. 

If you click **Add firmware** from within the details of a specific firmware, the dialog box looks slightly different as the firmware is already selected. 

![Add firmware version](/images/users-guide/DeviceManagement/devmgmt-firmware-add-version.png)


##### To add a new firmware patch

1. In the **Firmware repository** page, click **Add firmware patch** at the right of the top menu bar. 
2. In the resulting dialog box, select the firmware, for which you want to add a patch, from the dropdown list in the **Firmware** field. 
3. in the **Version** field, select the version, for which you want to add a patch.  
3. In the **Patch** field, enter a name for the patch.
3. Either upload a binary from the file system or specify a URL from where the firmware can be downloaded.
4. Click **Save**.

As with adding versions, if you click **Add firmware patch** from within the details of a specific firmware, the dialog box looks slightly different as the firmware is already selected. 

The firmware patch will be added to the version details within the firmware details.

![Versions and patches](/images/users-guide/DeviceManagement/devmgmt-firmware-versions-and-patches.png)

#### To edit a firmware

1. Click the menu icon at the right of a specific firmware entry and in the context menu click **Edit**.
2. Update the name, description or device type filter by clicking the pencil icon next to it. Make the desired changes and click **Save**. 

The firmware will be updated accordingly.

#### Deleting firmwares, firmware versions, or firmware patches 

##### To delete a firmware

Click the menu icon at the right of a specific firmware entry and in the context menu click **Delete**.

The object will be deleted from the firmware repository.

##### To delete a firmware version or patch

In the details of a specific firmware, hover over the version or patch entry you want to delete and click the delete icon. The firmware version or patch will be deleted from the firmware details.


#### Managing firmware on a device

In the **Firmware** tab of a device you can manage the installed firmware for the device.

>**Info:** The **Firmware** tab shows up for a device if the device supports c8y_Firmware operations.

Click **All devices** in the **Devices** menu in the navigator, select the desired device from the device list and open its **Firmware** tab. 

The **Firmware** tab shows the current firmware installed on the device.

![Firmware tab](/images/users-guide/DeviceManagement/devmgmt-firmware-tab.png)

Additionally, it shows the operation status for the last operation (one of SUCCESSFUL, PENDING, EXECUTING, FAILED). Clicking on the operation will take you to the **Control** tab where you can see further details on the operation, see also [Device details > Control](/users-guide/device-management/#control).  


##### To install/replace firmware on a device

1. In the **Firmware** tab, click **Install firmware** (or **Replace firmware** if there is already firmware installed on the device).
2. Select a firmware and the desired version from the list, which contains all firmware available for the particular device type in the firmware repository.
3. Click **Install**.

![Install firmware](/images/users-guide/DeviceManagement/devmgmt-firmware-install.png)

The install operation to be executed by the device will be created. The firmware installation is completed as soon as the device has executed the operation.

The operation details are shown in the **Control** tab of the device. The status of the last operation is also shown on the **Firmware** tab. 

##### To install/update firmware on multiple devices

Cumulocity IoT offers the option to execute firmware updates for multiple devices at once. 

1. Execute the firmware operation (install or replace) on a single device to test that the new version works.
2. Navigate to the operation in the **Control** tab and in the context menu select **Schedule as bulk operation**. 
3. Fill in the fields to schedule the bulk operation and click **Create**. For details on bulk operations, see [Monitoring and controlling devices](/users-guide/device-management/#monitoring-and-controlling-devices).

The status of the bulk operation is shown in the **Bulk operations** tab under **Device control**. 

Moreover, the operation details are shown in the **Control** tab of the selected devices. 

>**Info:** Bulk operations that have been created with a version earlier then 10.7.0 can be viewed in the **Bulk operations** tab of the selected group, see also [Bulk operations](#bulk-operations).

### <a name="software-repo"></a> Managing device software

In the software repository, Cumulocity IoT offers to collect reference software for devices. Multiple software packages can be installed on a device.

#### Viewing software 

Click **Software repository** in the **Management** menu in the navigator.

The available software objects will be displayed as a list.

![Software list](/images/users-guide/DeviceManagement/devmgmt-software-repository.png)

Each entry shows the software name, the device type it is applicable for (if set), and a label indicating if and how many versions are available for a particular software.

When clicking on an entry, the details for this software are displayed along with all available versions. 

![Software details](/images/users-guide/DeviceManagement/devmgmt-software-details.png)

At the top, the software name, a description and optional device type filter(s) are shown. If a filter is set, the software will show up for installation only for devices of that type. If no filter is set, it will be available for all devices. 

The list of versions shows the version name and the name of the software binary. 
The versions are ordered by their creation time (descending).
 
#### To add a new software or software version

1. In the **Software repository** page, click **Add software** at the right of the top menu bar. 
2. In the resulting dialog box, 
	* to add a new software, enter a name for the software (and confirm it by clicking **Create new** in the upcoming window), a description and its version (all required).
	* to add a new version, select the software for which you want to add a new version from the dropdown list in the **Software** field and enter a version.
3. Either upload a binary from the file system or specify a URL from where the firmware can be downloaded.
4. Click **Save**.

![Add software](/images/users-guide/DeviceManagement/devmgmt-software-add.png)

The software object will be added to the software list or the software version will be added to the software details and the version count label will be updated accordingly.

If you click **Add software** from within the details of a specific software, the dialog box looks slightly different as the software is already selected. 

![Add software version](/images/users-guide/DeviceManagement/devmgmt-software-add-version.png)


#### To edit a software

1. Click the menu icon at the right of a specific software entry and in the context menu click **Edit**.
2. Update the name, description or device type filter by clicking the pencil icon next to it. Make the desired changes and click **Save**. 

The software will be updated accordingly.


#### Deleting softwares or software versions

##### To delete a software

Click the menu icon at the right of a specific software entry and in the context menu click **Delete**.

The software and all its versions will be deleted from the software repository.

##### To delete a software version

In the details of a specific software, hover over the version entry you want to delete and click the delete icon. The software version will be deleted from the software details.


#### Managing software on a device

In the **Software** tab of a device you can manage the software for the particular device.

>**Info:** The **Software** tab shows up for a device if the device supports one of the following operations: c8y&#95;SoftwareUpdate, c8y&#95;SoftwareList, c8y&#95;Software.

Click **All devices** in the **Devices** menu in the navigator, select the desired device from the device list and open its **Software** tab. 

The **Software** tab shows a list of all available software installed on the device.

![Software tab](/images/users-guide/DeviceManagement/devmgmt-software-tab.png)

Additionally, it shows the operation status for the last operation (one of SUCCESSFUL, PENDING, EXECUTING, FAILED). Clicking on the operation will take you to the **Control** tab where you can see further details on the operation, see also [Device details > Control](/users-guide/device-management/#control).  

##### To install software on a device

1. In the **Software** tab, click **Install software**.<br><br>	 ![Install software](/images/users-guide/DeviceManagement/devmgmt-software-install.png)
2. Select one or multiple software items by selecting the respective version from the list, which contains all software for the particular device type available in the software repository.
4. Click **Install**.
5. In the **Software changes** panel at the right, review your planned changes and confirm the software update operation by clicking **Apply changes**.<br><br>
	![Apply changes](/images/users-guide/DeviceManagement/devmgmt-software-changes.png)

The install operation to be executed by the device will be created. The software installation is completed as soon as the device has executed the operation.

The operation details are shown in the **Control** tab of the device. The status of the last operation is also shown on the **Software** tab. 

![Installed software](/images/users-guide/DeviceManagement/devmgmt-software-installed.png)


##### To update software on a device

Hover over the software entry which you want to update and click **Update**.
Select a version from the list and click **Update** again.

![Update software](/images/users-guide/DeviceManagement/devmgmt-software-update.png)

The software will be updated with the selected version.

##### To delete software from a device

Hover over the software entry which you want to delete and click the delete icon.

##### To install software on multiple devices

Cumulocity IoT offers the option to execute software updates for multiple devices at once. 

1. Execute the software operation (install or update) on a single device to test that the new version works.
2. Navigate to the operation in the **Control** tab and in the context menu select **Schedule as bulk operation**. 
3. Fill in the fields to schedule the bulk operation and click **Create**. For details on bulk operations, see [Monitoring and controlling devices](/users-guide/device-management/#monitoring-and-controlling-devices).

The status and details of the bulk operation are shown in the **Bulk operations** tab under **Device control**. 

Moreover, the operation details are shown in the **Control** tab of the selected devices. 

>**Info:** Bulk operations that have been created with a version earlier then 10.7.0 can be viewed in the **Bulk operations** tab of the selected group, see also [Bulk operations](#bulk-operations).


### <a name="configuration-repository"></a>Managing configurations

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

> **Info:** Clicking **Get snapshot from device** creates a new operation. If the operation is in status PENDING or EXECUTING, it is not possible to trigger another configuration request for the configuration type. Navigate to the **Control** tab of a device to cancel the operation or view the history of operation changes.

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
