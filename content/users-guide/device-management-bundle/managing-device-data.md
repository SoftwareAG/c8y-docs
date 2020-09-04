---
weight: 60
title: Managing device data (contains beta changes)
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


### <a name="configuration-repository"></a>Managing configuration snapshots

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

Device profiles represent a combination of a firmware version, one or multiple software packages and one or multiple configuration files which can be deployed on a device. Based on device profiles, users can deploy a specific target configuration on devices by using bulk operations.

#### To view device profiles

Click **Device profiles** in the **Management** menu in the navigator to access the **Device profiles** page, which lists all available device profiles.

![Device profiles list](/images/users-guide/DeviceManagement/devmgmt-device-profile-list.png)

Each device profile entry shows the profile name and the selected device type(s), if any.

Click a device profile name to view its details.

The **Name and device type** section shows the name of the profile and optionally selected device types.

The sections below list the firmware version, software packages and configuration files for this particular device profile.

![Device profile details](/images/users-guide/DeviceManagement/devmgmt-device-profile-details.png)

#### To add a device profile

Click **Add device profile** at the right of the top menu bar, to add a new device profile.

In the **Add device profile** window, provide a name for the profile and optionally enter one or more device types. If a device type is provided, the device profile can only be assigned to devices of the specified type. If left empty, it will be available for all device types.

#### <a name="to-add-items"></a>To add items to a device profile

In the device profile details, you can add firmware versions, software packages and configuration files.

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

> **Info:** Deleting a profile deletes the entry from the device profile repository. It has no affect towards the devices that currently use the profile.

#### To apply device profiles to devices

Device profiles can be applied to devices through operations, more precisely through bulk operations.

Click **Device control** in the **Overview** menu to navigate to the **Device control** page. In the **Device control** page, a new bulk operation can be created to apply a device profile.

In the **Bulk operations** tab, click **New bulk operation** at the right of the top menu bar and in the resulting dialog select **Apply device profile**.

Follow the steps described in [Monitoring and controlling devices > Working with operations > To add a bulk operation](/users-guide/device-management/#bulk-operations) to schedule a bulk operation which applies a device profile.

The devices will install the firmware, software and configurations items of the profile and report back the status of the operation. After successfully applying the profile, the device objects in the platform are updated accordingly with the new profile information.

If the operation fails, an error message is returned providing details on which step the operation failed.

In the **Device profile** tab of a particular device, you can see the details of the currently installed profile.

![Currently installed profile](/images/users-guide/DeviceManagement/devmgmt-device-profile-tab.png)

You may also select and apply another profile from here.

In the devices list, it is possible to filter for devices based on their applied profile name and whether the profile has been applied in the past.

![Device profile filter](/images/users-guide/DeviceManagement/devmgmt-device-profile-filter.png)

When creating bulk operations, it is also possible to use filters, and by this create bulk operations only for those devices where a profile has not been applied yet.

### <a name="trusted-certificates"></a> Managing trusted certificates

Cumulocity IoT allows devices to connect via MQTT protocol using a X.509 certificate for authentication. To do so, a certificate must be trusted by Cumulocity IoT. A certificate is trusted when it is added to the trusted certificates and is in activated state.

>**Info:** This section describes how to manage trusted certificates. For information on connecting devices using certificates refer to [Device integration using MQTT > Device certificates](/device-sdk/mqtt#device-certificates) in the Device SDK guide.

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
* It has not already been uploaded to Cumulocity IoT.
* It is still valid (not expired).

To add a certificate perform these steps:

1. Click **Add trusted certificate** at the right of the top menu bar.

	![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-new.png)

2. In the resulting dialog box, provide the following information:

|Field|Description|
|:---|:---|
|Certificate name|User-provided name for the certificate. This name is not used by Cumulocity IoT and can serve as a description of the certificate.|
|Certificate|File containing the certificate in PEM format. Add the file by dropping it into this field or browsing for it on your computer.|
|Auto registration| If selected, new devices which use a certificate signed by the authority owning this trusted certificate will automatically be registered.|
|Enabled/ Disabled| When disabled, devices which use a certificate signed by the authority owning this certificate, will not be able to connect.|

3. Click **Add Certificate** to validate and save the certificate.

>**Info:** For performance reasons, you shouldn't add the certificates of each device you want to connect, but only add the root certificate or one of the intermediate certificates from the chain which has been used to sign certificates used by devices.

#### To edit a trusted certificate

In the detail view of a certificate you may change the parameters on the left, i.e. the certificate name, and the settings for the auto registration and enabled/disabled option.

For details on the fields, see the description on adding certificates above.

#### To delete a trusted certificate

To permanently delete a certificate from the trusted certificates list, click the menu icon at the right of the respective entry and in the context menu click **Delete**.

![Trusted certificates delete](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-delete.png)

The certificate will be permanently deleted.
