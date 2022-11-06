---
weight: 60
title: Managing device data
layout: redirect
helpcontent:
- label: firmware-repo
  title: Firmware repository
  content: "In the firmware repository, you can collect reference firmware for devices. At the top left, you can filter the firmware items by name, description, or device type.


	See the *User guide* for details on managing firmware, firmware versions and patches, and on how to install or update them on devices."
- label: software-repo
  title: Software repository
  content: "In the software repository, you can collect reference software for devices. Multiple software packages can be installed on a device. At the top left, you can filter the repository entries by name, description, or device type.


	See the *User guide* for details on managing software and software versions and on how to install or update them on devices."
- label: configuration-repository
  title: Configuration repository
  content: "In the configuration repository, you can store and manage configuration data retrieved from your devices as 'configuration snaphots'. The configuration data contains the parameters and the initial settings of a device. Such configuration snapshots help you, for example, to apply the same configuration to multiple devices.


  See the *User guide* for details on how to retrieve configuration data, and how to store and manage it in the configuration repository as snapshot."
- label: credentials
  title: Device credentials
  content: "Manage the device credentials that have been generated for your connected devices. Edit, disable, or delete device credentials as required or modify its permissions in the **Global roles** field, see the *User guide* for details."
- label: device-profiles
  title: Device profiles
  content: "Device profiles represent a set of a firmware version, one or multiple software packages, and one or multiple configuration files which can be deployed on a device. Based on device profiles, you can easily deploy a specific target configuration on devices by using bulk operations.


  See the *User guide* for details on managing device profiles and on applying device profiles to devices."
- label: trusted-certificates
  title: Trusted certificates
  content: "Cumulocity IoT allows devices to connect via MQTT protocol using a X.509 certificate for authentication. To do so, a certificate must be 'trusted' by Cumulocity IoT, that is, added to the trusted certificates."
---

### Overview

The Device Management application provides various features that support you in efficiently managing your devices:

| Feature                                              | Description                                                                                                                                 |
|:-----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| [Managing device firmware](#firmware-repo)           | How to retrieve and manage firmware, firmware versions, and patches in the firmware repository and how to install or update them on devices. |
| [Managing device software](#software-repo)           | How to retrieve and manage software and software versions in the software repository and how to install or update them on devices.          |
| [Managing configurations](#configuration-repository) | How to retrieve configuration data, store and manage it in a configuration repository as configuration snapshot.                         |
| [Device credentials](#credentials)                   | How to manage all credentials generated for your connected devices.                                                                         |
| [Device profiles](#device-profiles)                  | How to manage device profiles - a set of firmware, software, and configuration - and apply them to devices.                                 |
| [Trusted certificates](#trusted-certificates)        | How to manage trusted certificates.                                                                                                         |

All features are accessible through the **Management** menu in the navigator:

![Management menu](/images/users-guide/DeviceManagement/devmgmt-management-menu.png)

<a name="firmware-repo"></a>
### Managing device firmware

In the firmware repository, {{< product-c8y-iot >}} offers to collect reference firmware for devices.

Only one firmware package version can be applied per device.

#### Viewing firmware

Click **Firmware repository** in the **Management** menu in the navigator.

The available firmware objects will be displayed as a list.

![Firmware list](/images/users-guide/DeviceManagement/devmgmt-firmware-list.png)

Each entry shows the firmware name, the device type it is applicable for (if set), and a label indicating if and how many versions are available for a particular firmware.
At the left in the top menu bar, you can filter the repository entries by name, description or device type. For details on the filtering functionality, see [Getting started > UI functionalities and features > Filtering](/users-guide/getting-started/#filtering).

When clicking on an entry, the details for this firmware are displayed along with all available versions and patches.

![Firmware details](/images/users-guide/DeviceManagement/devmgmt-firmware-details.png)

At the top, the firmware name, a description, and optional device type filter(s) are shown. If a filter is set, the firmware will show up for installation only for devices of that type. If no filter is set, it will be available for all devices.

The list of versions and patches shows the version name and the name of the firmware binary. Moreover, the list indicates if a firmware version has patches, which can be viewed by expanding the version entry. The versions and patches are ordered by their creation time (descending).

#### Adding firmwares, firmware versions, or firmware patches

##### To add a new firmware or firmware version

1. In the **Firmware repository** page, click **Add firmware** at the right of the top menu bar.
2. In the resulting dialog box,
	* to add a new firmware, enter a name for the firmware (and confirm it by clicking **Create new** in the resulting window), add a description and its version (all required).
	* to add a new version, select the firmware for which you want to add a new version from the dropdown list in the **Firmware** field and enter a version.
3. Optionally, you can define the device type filter when adding a new firmware.
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

<a name="managing-firmware"></a>
#### Managing firmware on a device

In the **Firmware** tab of a device you can manage the installed firmware for the device.

{{< c8y-admon-info >}}
The **Firmware** tab shows up for a device if the device supports `c8y_Firmware` operations.
{{< /c8y-admon-info >}}

Click **All devices** in the **Devices** menu in the navigator, select the desired device from the device list and open its **Firmware** tab.

The **Firmware** tab shows the current firmware installed on the device.

![Firmware tab](/images/users-guide/DeviceManagement/devmgmt-firmware-tab.png)

Additionally, it shows the operation status for the last operation (one of SUCCESSFUL, PENDING, EXECUTING, FAILED). Clicking on the operation will show you the operation details.
![Firmware operation details](/images/users-guide/DeviceManagement/devmgmt-firmware-operation-details.png)

##### To install/replace firmware on a device

1. In the **Firmware** tab, click **Install firmware** (or **Replace firmware** if there is already firmware installed on the device).
2. Select a firmware and the desired version from the list, which contains all firmware available for the particular device type in the firmware repository.
3. Click **Install**.

![Install firmware](/images/users-guide/DeviceManagement/devmgmt-firmware-install.png)

The install operation to be executed by the device will be created. The firmware installation is completed as soon as the device has executed the operation.

Click on the operation to view its details. The status of the last operation is also shown on the **Firmware** tab.


##### To install/update firmware on multiple devices

{{< product-c8y-iot >}} offers the option to execute firmware updates for multiple devices at once.

1. Execute the firmware operation (install or replace) on a single device to test that the new version works.
2. Navigate to the operation in the **Control** tab and in the context menu select **Schedule as bulk operation**.
3. Fill in the fields to schedule the bulk operation and click **Create**. For details on bulk operations, see [Monitoring and controlling devices](/users-guide/device-management/#monitoring-and-controlling-devices).

The status of the bulk operation is shown in the **Bulk operations** tab under **Device control**.

Moreover, the operation details are shown in the **Control** tab of the selected devices.

<a name="software-repo"></a>
### Managing device software

In the software repository, {{< product-c8y-iot >}} offers to collect reference software for devices. Multiple software packages can be installed on a device.

#### Viewing software

Click **Software repository** in the **Management** menu in the navigator.

The available software objects will be displayed as a list.

![Software list](/images/users-guide/DeviceManagement/devmgmt-software-repository.png)

Each entry shows the software name, the device type it is applicable for (if set), the software type (if set), and a badge indicating if and how many versions are available for a particular software.
The values in every column except for the **Versions** column can be filtered and sorted by clicking the filter and sort icons in the column header.

When clicking on an entry, the details for this software are displayed along with all available versions.

![Software details](/images/users-guide/DeviceManagement/devmgmt-software-details.png)

At the top, the software name, a description, an optional device type filter(s), and a software type are shown.
If a device type filter is set, the software will show up for installation only for devices of that type.
If no filter is set, it will be available for all devices.
The software type will make the software installable only on devices that specifically support the particular software type.

{{< c8y-admon-info >}}
The **Software type** field suggests you a list of types already used in your software repository. Before you consider defining a new software type (the field accepts new values directly) check if the type you need has already been defined before for another software by looking at the suggestions in the dropdown. This will help you keep software types consistent within your organization. If you use, for example, container images you may look for `container` or `image`, or try to search for more specific types like `docker`, `lxc`, and so on. This may prevent you from scattering your software types and using different names for effectively the same software type.
{{< /c8y-admon-info >}}

The list of versions shows the version name and the name of the software binary.
The versions are ordered by their creation time (descending).

#### To add a new software or software version

1. In the **Software repository** page, click **Add software** at the right of the top menu bar.
2. In the resulting dialog box,
	* to add a new software, enter a name for the software (and confirm it by clicking **Create new** in the resulting window), a description, and its version (all required).
	* to add a new version, select the software for which you want to add a new version from the dropdown list in the **Software** field and enter a version.
3. Optionally, you can define the device type filter when adding a new software.
4. Define the software type. It will make the software installable only on devices that have declared to support the particular software type.
5. Either upload a binary from the file system or specify a URL from where the software can be downloaded.
6. Click **Add software**.

![Add software](/images/users-guide/DeviceManagement/devmgmt-software-add.png)

The software object will be added to the software list or the software version will be added to the software details and the version count label will be updated accordingly.

If you click **Add software** from within the details of a specific software, the dialog box looks slightly different as the software is already selected.

![Add software version](/images/users-guide/DeviceManagement/devmgmt-software-add-version.png)


#### To edit a software

1. Click the menu icon at the right of a specific software item and in the context menu click **Edit**.
2. Update the name, description, device type filter or software type by clicking the pencil icon next to it. Make the desired changes and click **Save**.

The software will be updated accordingly.


#### Deleting software items or software versions

##### To delete a software

Click the menu icon at the right of a specific software item and in the context menu click **Delete**.

The software and all its versions will be deleted from the software repository.

##### To delete a software version

In the details of a specific software, hover over the version entry you want to delete and click the delete icon. The software version will be deleted from the software details.

<a name="managing-software"></a>
#### Managing software on a device

In the **Software** tab of a device you can manage the software for the particular device.

{{< c8y-admon-info >}}
The **Software** tab shows up for a device if the device supports one of the following operations: c8y&#95;SoftwareUpdate, c8y&#95;SoftwareList, c8y&#95;Software.
{{< /c8y-admon-info >}}

Click **All devices** in the **Devices** menu in the navigator, select the desired device from the device list and open its **Software** tab.

The **Software** tab shows a list of all available software installed on the device. If a given software has a type, it will be displayed next to its name. You can search for a particular software by its name or filter the list by software type.

![Software tab](/images/users-guide/DeviceManagement/devmgmt-software-tab.png)

Additionally, it shows the operation status for the last operation (one of SUCCESSFUL, PENDING, EXECUTING, FAILED). Clicking on the operation will show you the operation details.

![Software operation details](/images/users-guide/DeviceManagement/devmgmt-software-operation-details.png)

##### To install software on a device

1. In the **Software** tab, click **Install software**.<br><br>	 ![Install software](/images/users-guide/DeviceManagement/devmgmt-software-install.png)

    {{< c8y-admon-info >}}
The **Install software** dialog will only display software items matching the device type. Additionally, if the device has any `c8y_SupportedSoftwareTypes` declared the dialog will only display the software items matching the supported software types.
    {{< /c8y-admon-info >}}

2. Select one or multiple software items by selecting the respective version from the list which contains all software items for the particular device type available in the software repository.  
For devices supporting advanced software management features, already installed software items cannot be pre-filtered from the list of available software items. Thus, after a particular software version has been selected, a check is done if the selected software is already installed on the device. If this is the case, a warning next to the selected version indicates that this software version is already present on the device.  
You can remove the already installed software item under **Software changes** or leave it and apply it as part of the changes. It is up to the device agent to decide how to handle such an update.

3. Click **Install**.

4. Under **Software changes** at the right, review your planned changes and confirm the software update operation by clicking **Apply changes**.

	 ![Apply changes](/images/users-guide/DeviceManagement/devmgmt-software-changes.png)

The install operation to be executed by the device will be created. The software installation is completed as soon as the device has executed the operation.

Click on the operation to view its details. The status of the last operation is also shown on the **Software** tab.

![Installed software](/images/users-guide/DeviceManagement/devmgmt-software-installed.png)


##### To update software on a device

Hover over the software item which you want to update and click **Update**.
Select a version from the list and click **Update** again.

![Update software](/images/users-guide/DeviceManagement/devmgmt-software-update.png)

The software will be updated with the selected version.

##### To delete software from a device

Hover over the software item which you want to delete and click the delete icon.

##### To install software on multiple devices

{{< product-c8y-iot >}} offers the option to execute software updates for multiple devices at once.

1. Execute the software operation (install or update) on a single device to test that the new version works.
2. Navigate to the operation in the **Control** tab and in the context menu select **Schedule as bulk operation**.
3. Fill in the fields to schedule the bulk operation and click **Create**. For details on bulk operations, see [Monitoring and controlling devices](/users-guide/device-management/#monitoring-and-controlling-devices).

The status and details of the bulk operation are shown in the **Bulk operations** tab under **Device control**.

Moreover, the operation details are shown in the **Control** tab of the selected devices.

<a name="configuration-repository"></a>
### Managing configurations

{{< product-c8y-iot >}} allows to retrieve configuration data and store and manage it in a configuration repository. The configuration data contains the parameters and the initial settings of your device.

Configuration snapshots help you, for example, to apply the same configuration to multiple devices as described below.

Click **Configuration repository** in the the **Management** menu in the navigator. In the **Configuration repository** page, all available configuration snapshots are listed. Each entry shows the configuration name, the description of the configuration, the device type, and the configuration type.

![Configuration Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepo.png)

<a name="add-snapshot"></a>
#### To add a configuration snapshot

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

Managing configurations, that is requesting a configuration from a device and sending a configuration to a device, can be done in multiple ways. Depending on user permissions and device settings, you can work with text based, typed file-based or legacy file-based configuration. Refer to [Device management library > Configuration](/reference/device-management-library/#configuration) in the *Reference guide* for more detailed and technical information.

#### To retrieve and apply a configuration snapshot to a device which supports typed file-based configuration

We recommend you to use typed file-based configuration. With typed file-based configuration, devices can manage multiple configurations at the same time. You can upload or retrieve different configurations for different types. Using this approach is more versatile because the configurations are handled as events rather than as files, which is more efficient.

1. Navigate to the desired device in **Devices** > **All devices** and open its **Configuration** tab.
2. Under **Device-supported configurations**, select the desired configuration type and click
   **Get snapshot from device** at the right.

Once retrieved, you can save or download the snapshot in the **Preview** section. The snapshot will be added to the **Configuration repository**, accessible from the **Management** menu in the navigator.

![Retrieve Configuration Snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

{{< c8y-admon-info >}}
Clicking **Get snapshot from device** creates a new operation. If the operation is in status PENDING or EXECUTING, it is not possible to trigger another configuration request for the configuration type. Navigate to the **Control** tab of a device to cancel the operation or view the history of operation changes.
{{< /c8y-admon-info >}}

To apply a configuration snapshot to a device which supports multiple configuration types:

1. Navigate to the desired device and open its **Configuration** tab.
2. Under **Device-supported configurations**, select the desired configuration type.
3. Under **Available supported configurations**, select a configuration file.
4. Click **Send configuration to device** at the right to apply the selected snapshot to the device.

![Apply new snapshot to a device](/images/users-guide/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

{{< c8y-admon-info >}}
Under **Available supported configurations**, only configuration files with a matching configuration type property or without a configuration type defined are displayed. Also, configuration files are filtered based on the device type.
{{< /c8y-admon-info >}}

#### To retrieve and apply a configuration snapshot to a device which supports legacy file-based configuration

Devices managing configuration as files can do so in a basic form using legacy file-based configuration. Legacy file-based configuration only allows a single configuration to be set per a device.

![Retrieve Configuration Snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-old-getnewsnapshot.png)

#### To retrieve and apply a configuration snapshot to a device which supports text-based configuration

The most basic form of configuration is text-based configuration. A text command can be sent or received from a device. We recommend you to use text-based configuration for short human readable configuration files only.

![Send Text Configuration](/images/users-guide/DeviceManagement/devmgmt-devices-config-text-getnewsnapshot.png)

<a name="credentials"></a>
### Managing device credentials

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

<a name="device-profiles"></a>
### Managing device profiles

Device profiles represent a combination of a firmware version, one or multiple software packages, and one or multiple configuration files which can be deployed on a device. Based on device profiles, users can deploy a specific target configuration on devices by using bulk operations.

#### To view device profiles

Click **Device profiles** in the **Management** menu in the navigator to access the **Device profiles** page, which lists all available device profiles.

![Device profiles list](/images/users-guide/DeviceManagement/devmgmt-device-profile-list.png)

Each device profile entry shows the profile name and the selected device type(s), if any.

Click a device profile name to view its details.

The **Name and device type** section shows the name of the profile and optionally selected device types.

The sections below list the firmware version, software packages, and configuration files for this particular device profile.

![Device profile details](/images/users-guide/DeviceManagement/devmgmt-device-profile-details.png)

#### To add a device profile

Click **Add device profile** at the right of the top menu bar, to add a new device profile.

In the **Add device profile** window, provide a name for the profile and optionally enter one or more device types. If a device type is provided, the device profile can only be assigned to devices of the specified type. If left empty, it will be available for all device types.

<a name="to-add-items"></a>
#### To add items to a device profile

In the device profile details, you can add firmware versions, software packages, and configuration files.

Click **Add firmware** to add a firmware version to the profile. Select a firmware and a version from the list and click **Save** to add the selection to the profile. If a device type has been defined for the profile, only those firmware versions can be selected that match the device type. Only one firmware version can be added to a profile.

For details on firmware, see [Managing device firmware](#firmware-repo).

Click **Add software** to add a software package to the profile. Select a software and a software version from the list and click **Save** to add the selection to the profile. If a device type has been defined for the profile, only those software versions can be selected that match the device type. You can add multiple software packages to a profile.

For details on software, see [Managing device software](#software-repo).

Click **Add configuration** to add a configuration file to the profile. Select a configuration file from the list and click **Save** to add the selection to the profile. You can add multiple configuration files to a profile.

For details on configuration snapshots, see [Managing configuration snapshots](#configuration-repository).

#### To update device profiles

To update a device profile click the menu icon at the right of the respective device profile entry and then click **Edit**.

You may edit the name and the device types by clicking the pencil icon next to the respective fields. Make the desired changes and click **Save** to save your edits.

Moreover, you can delete firmware, software or configuration items or add new ones.

To delete an item, hover over it and click the delete icon.

See [To add items to a device profile](#to-add-items) for details on how to add firmware, software or configuration items.

Note that in case of firmware, only one item is allowed in a profile at a time.


#### To duplicate device profiles

To duplicate a device profile, click the menu icon at the right of the respective device profile entry and then click **Duplicate**.

Duplicating a profile creates another instance of the profile with the same content. Per default, the original profile name is extended with "Copy of". You may give the profile a more appropriate name by clicking the pencil icon next to the name field and editing it.

#### To delete device profiles

To delete a device profile, click the menu icon at the right of the respective device profile entry and then click **Delete**.

{{< c8y-admon-info >}}
Deleting a profile deletes the entry from the device profile repository. It has no affect towards the devices that currently use the profile.
{{< /c8y-admon-info >}}

<a name="applying-device-profiles"></a>
### Applying device profiles to devices

Device profiles can be assigned to

* [individual devices](#to-apply-profiles-to-single-devices)
* [multiple devices through bulk operations](#to-apply-profiles-to-multiple-devices)

The **Device profile** tab of a particular device shows the details of the currently installed profile on a device.

![Currently installed profile](/images/users-guide/DeviceManagement/devmgmt-device-profile-tab.png)

{{< c8y-admon-info >}}
The **Device profile** tab shows up for a device if the device supports `c8y_DeviceProfile` operations.
{{< /c8y-admon-info >}}

Moreover, you can filter for devices in the devices list based on their applied profile name and whether the profile has been applied in the past.

![Device profile filter](/images/users-guide/DeviceManagement/devmgmt-device-profile-filter.png)


<a name="to-apply-profiles-to-single-devices"></a>
#### To apply device profiles to a single device

Device profiles can be applied to individual devices in the **Device Profile** tab of the particular device.

1. In the **Device profile** tab, select a device profile from the dropdown list. Only profiles that match the device type (if specified) or have no device type specified are displayed.

	![Assign device profile](/images/users-guide/DeviceManagement/devmgmt-device-profile-assign.png)

2. Click **Assign device profile** to start the update operation.

<a name="to-apply-profiles-to-multiple-devices"></a>
#### To apply device profiles to multiple devices

Device profiles can be applied to multiple devices by using bulk operations.

1. Click **Device control** in the **Overview** menu to navigate to the **Device control** page. In the **Device control** page, a new bulk operation can be created to apply a device profile.
2. In the **Bulk operations** tab, click **New bulk operation** at the right of the top menu bar and in the resulting dialog select **Apply device profile**.
3. Follow the steps described in [Monitoring and controlling devices > Working with operations > To add a bulk operation](/users-guide/device-management/#bulk-operations) to schedule a bulk operation which applies a device profile.

The devices will install the firmware, software, and configurations items of the profile and report back the status of the operation. After applying the profile, the device objects in the platform are updated accordingly with the new profile information.

{{< c8y-admon-info >}}
When creating bulk operations, it is possible to use filters, and by this create bulk operations only for those devices where a profile has not been applied yet.
{{< /c8y-admon-info >}}

<a name="trusted-certificates"></a>
### Managing trusted certificates

{{< product-c8y-iot >}} allows devices to connect via MQTT protocol using a X.509 certificate for authentication. To do so, a certificate must be trusted by {{< product-c8y-iot >}}. A certificate is trusted when it is added to the trusted certificates and is in activated state.

{{< c8y-admon-info >}}
This section describes how to manage trusted certificates. For information on connecting devices using certificates refer to [Device integration using MQTT > Device certificates](/device-sdk/mqtt#device-certificates) in the *Device SDK guide*.
{{< /c8y-admon-info >}}

Click **Trusted certificates** in the **Management** menu in the navigator.

All certificates owned by the tenant will be displayed.

![Trusted certificates List](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-list.png)

The icon on the left of each entry indicates if the certificate is active (green) or inactive (red). At any given time a tenant can have any number of active or inactive certificates.

Expand a certificate by clicking the arrow icon at the right to view more details.

![Trusted certificates Entry](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-entry.png)

The information in the table at the right side is extracted from the provided certificate. The content is read-only and cannot be changed.

![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-details.png)


#### To add a certificate

Before adding a new trusted certificate, make sure that:

* It s a X.509 certificate in PEM format.
* It is in version 3.
* It contains `BasicConstraints:[CA:true]`.
* It has not already been uploaded to {{< product-c8y-iot >}}.
* It is still valid (not expired).

To add a certificate perform these steps:

1. Click **Add trusted certificate** at the right of the top menu bar.

	![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-new.png)

2. In the resulting dialog box, provide the following information:

| Field             | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Certificate name  | User-provided name for the certificate. This name is not used by {{< product-c8y-iot >}} and can serve as a description of the certificate.         |
| Certificate       | File containing the certificate in PEM format. Add the file by dropping it into this field or browsing for it in your file system.            |
| Auto registration | If selected, new devices which use a certificate signed by the authority owning this trusted certificate will automatically be registered. |
| Enabled/ Disabled | When disabled, devices which use a certificate signed by the authority owning this certificate, will not be able to connect.               |

3. Click **Add Certificate** to validate and save the certificate.

{{< c8y-admon-info >}}
For performance reasons, you shouldn't add the certificates of each device you want to connect, but only add the root certificate or one of the intermediate certificates from the chain which has been used to sign certificates used by devices.
{{< /c8y-admon-info >}}

#### To edit a trusted certificate

In the detail view of a certificate you may change the parameters on the left, that is, the certificate name, and the settings for the auto registration and enabled/disabled option.

For details on the fields, see the description on adding certificates above.

#### To delete a trusted certificate

To permanently delete a certificate from the trusted certificates list, click the menu icon at the right of the respective entry and in the context menu click **Delete**.

![Trusted certificates delete](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-delete.png)

The certificate will be permanently deleted.
