---
weight: 70
title: Configuration repository
layout: redirect
---

Cumulocity allows to retrieve configuration data and store and manage it in a configuration repository. The configuration data contains the parameters and the initial settings of your device.

Configuration snapshots help you, for example, to apply the same configuration to multiple devices as described below. 

For details on configuration management also refer to [Device management library > Configuration management](/guides/reference/device-management/#configuration-management) in the Reference guide.

In the **Configuration repository** page which you open from the **Management** menu in the navigator, all available configurations are listed. Each entry shows the configuration name, the device from which it has been uploaded and the upload timestamp.

![Configuration repository](/images/users-guide/DeviceManagement/devmgmt-configuration-repository.png)

Click a configuration in the list to open it. You may modify the settings here and apply them by clicking **Save**. Refer to the section below for details on the fields.

![Configuration snapshot details](/images/users-guide/DeviceManagement/devmgmt-configuration-snapshot-details.png)

### To add a snapshot configuration from a file

1. Click **Add configuration snapshot** at the right of the top menu bar. 
2. In the resulting dialog box, enter a unique name and optional description for the configuration.
3. In the **Device type** field, enter a device type. The device type can be found in the **Info** tab of the target device.
4. Under **Configuration snapshot file** click one of the available options to select the file:
 
	* 	Upload - to upload a file from your file system
	* 	External URL - to provide an external URL
	* 	Choose file - to select a file  from a list

5. Click **Add configuration snapshot** to save your settings.

The snapshot will be added to the configuration repository.


### To retrieve a current snapshot from a device

In addition to adding configurations from a file you can also add configurations by retrieving them from a device.

1. Navigate to the desired device and open its **Configuration** tab. 
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right. 

The retrieved snapshot will be added to the configuration repository.

![Retrieve snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-getnewsnapshot.png)

### To apply a configuration snapshot to a device

1. Navigate to the desired device and open its **Configuration** tab. 
2. Under **Configuration snapshot**, select a configuration from the dropdown field.
3. Click **Put new snapshot to device** to apply the selected snapshot to the device.

![Apply snapshot](/images/users-guide/DeviceManagement/devmgmt-devices-config-putsnapshot.png)

### To apply a snapshot configuration from one device to another

1. Navigate to the device which has the desired configuration and open the **Configuration** tab.
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right.
3. Navigate to the other device and open its **Configuration** tab.
4. Under **Configuration snapshot**, select the new configuration from the dropdown field and click **Put new snapshot to device**.
 
>**Info**: When you apply a snapshot configuration from one device to another, the configuration may contain data which is device-specific.


