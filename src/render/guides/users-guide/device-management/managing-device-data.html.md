---
order: 60
title: Managing device data
layout: redirect
---

### <a name="software-repo"></a> Managing device firmware and software

In the Firmware and in the Software repository Cumulocity offers to collect reference firmware and software for devices respectively.

The description below exemplarily refers to firmware but also applies to device software.

Open the **Firmware repository** from the **Management** menu in the navigator.

The available firmware objects will be displayed, presented as cards in a grid.

![Firmware List](/guides/images/users-guide/DeviceManagement/devmgmt-management-firmwarerepo.png)

Click **Details** on a specific object to "turn around" its card and display details.

![Firmware details](/guides/images/users-guide/DeviceManagement/devmgmt-firmware-details.png)

In addition to the object name and version, you will here find the name of the file containing the firmware. 

Moreover, several buttons allow you to update the information (see the following section below).

**How to add a firmware object**

To add a firmware object, follow these steps:

1. Upload the firmware file in the [Administration application](/guides/users-guide/administration#files). This step is not necessarily required since some manufacturers offer the firmware online.
2. In the **Firmware repository** page, click **Add firmware** at the right of the top bar menu. <br><br>![Add firmware](/guides/images/users-guide/DeviceManagement/devmgmt-firmware-add.png)

3. In the upcoming window, enter a name for the firmware and its version.
4. Specify the file for the firmware by choosing or uploading it or enter the URL from which the device can download the firmware. 
5. Click **Save** to save your settings.

Similarly, you can add a new software object to the Software repository.

**How to install firmware on a device**

Open the device list by clicking **All devices** in the navigator and select a device from the device list.

Open the **Software** tab for the device and click **Install firmware**. 

For further information on these steps, refer to the description of the [Software](#software) tab.

>**Info:** To store other types of binaries in Cumulocity, switch to the [Administration application](/guides/users-guide/administration#files).

**How to install firmware on multiple devices**

Cumulocity offers the option to execute firmware or software updates for multiple devices at once. To do so, follow these steps:

1. Execute the software update in a single device to test that the new version really works.
2. Navigate to operation and select **Execute for the whole group**.
3. Fill the form to schedule the bulk operation and click **Create**.

The operation status can be viewed in the **Bulk operations** tab of the selected group. For further information, refer to [Bulk operations](#bulk-operations).


### <a name="configuration-repository"></a>Configuration repository

Cumulocity allows to retrieve configuration data and store and manage it in a Configuration repository. The configuration data contains the parameters and the initial settings of your device.

Configuration snapshots help you, for example, to apply the same configuration to multiple devices as described below. 

In the **Configuration repository** page which you open from the **Management** menu in the navigator, all available configurations are listed. Each entry shows the configuration name, the device from which it has been uploaded and the upload timestamp.

![Configuration Repository](/guides/images/users-guide/DeviceManagement/devmgmt-management-configrepo.png)

Click a configuration in the list to open it. You may modify the settings here and apply them by clicking **Save**. Refer to the section below for details on the fields.

![Configuration Repository](/guides/images/users-guide/DeviceManagement/devmgmt-management-configrepoedit.png)

#### How to add a snapshot configuration from a file

To add a new configuration from a file, follow these steps:

1. Click **Add configuration snapshot** at the right of the top menu bar. 
2. In the upcoming window, enter a unique name and optional description for the configuration.
3. In the **Device type** field, enter a device type. The device type can be found in the **Info** tab of the target device.
4. Select the configuration snapshot file by uploading or choosing a file or providing an external URL. 
5. Click **Add configuration snapshot** to save your settings.

The snapshot will be added to the Configuration repository.

![Configuration Snapshot Repository](/guides/images/users-guide/DeviceManagement/devmgmt-management-configrepo-addsnapshot.png)


#### How to retrieve a current snapshot from a device

In addition to adding configurations from a file you can also add configurations by retrieving them from a device.

In order to retrieve a current configuration snapshot from a device, follow these steps:

1. Navigate to the desired device and open its **Configuration** tab. 
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right. 

The retrieved snapshot can be found in the **Configuration repository**, accessed through the **Management** menu of the navigator.

![Retrieve Configuration Snapshot](/guides/images/users-guide/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

#### How to apply a configuration snapshot to a device

In order to apply a configuration snapshot to a device, follow these steps:

1. Navigate to the desired device and open its **Configuration** tab. 
2. Under **Configuration snapshot**, select a configuration from the dropdown field.
3. Click **Put new snapshot to device** to apply the selected snapshot to the device.

![Apply new snapshot to a device](/guides/images/users-guide/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

#### How to apply a snapshot configuration from one device to another

In order to apply a configuration snapshot from one device to another, follow these steps:

1. Navigate to the device which has your desired configuration and open the **Configuration** tab.
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right.
3. Navigate to the other device and open its **Configuration** tab.
4. Under **Configuration snapshot**, select the new configuration from the dropdown field and click **Put new snapshot to device**.
 
>**Info**: When you apply snapshot configuration from one device to another, the configuration may contain data which is device-specific.

### <a name="credentials"></a>Managing device credentials

The **Device credentials** tab lists all credentials that have been generated for your connected devices. Each device that has been [registered](#device-registration) shows up here with the naming convention "device_&lt;id&gt;".

![Device credentials](/guides/images/users-guide/DeviceManagement/devmgmt-device-credentials.png)

Click the arrow in the **Global roles** column of a device to open a list with available global roles. Assign or remove permissions for an individual device by selecting/deselecting roles, and click **Apply** to save your settings.

Click the menu icon at the right of a device to access the following functionalities:

* **Edit** - To open the device credential details (see below).
* **Disable** - To temporarily disconnect a device.
* **Delete** - To delete the credentials of a device. This might be required if you have carried out a factory reset on a device. In this case, the device will often loose its assigned credentials. Delete it and continue with the normal [registration process](#device-registration) to re-register the device.

In the details page of any particular device credentials you can

* disable/enable a device with the **Active** slider,
* change the password for a device,
* assign or remove permissions for an individual device by selecting/deselecting roles in the **Global roles** list. 

![Device credentials details](/guides/images/users-guide/DeviceManagement/devmgmt-device-credential-details.png)


<!--
![Bulk provisioning](/guides/images/users-guide/autoregister.png)

Device credentials can also be provided from a CSV file. Files can be uploaded using the button pointed with an arrow. More details on the file structure can be found in under [Bulk-registering devices](#creds-upload) above.-->

