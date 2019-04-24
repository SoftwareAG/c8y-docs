---
weight: 70
title: Configuration repository
layout: redirect
---

Cumulocity allows to retrieve configuration data and store and manage it in a Configuration repository. The configuration data contains the parameters and the initial settings of your device.

Configuration snapshots help you, for example, to apply the same configuration to multiple devices as described below. 

In the **Configuration repository** page which you open from the **Management** menu in the navigator, all available configurations are listed. Each entry shows the configuration name, the device from which it has been uploaded and the upload timestamp.

![Configuration Repository](/guides/images/users-guide/DeviceManagement/devmgmt-configuration-repository.png)

Click a configuration in the list to open it. You may modify the settings here and apply them by clicking **Save**. Refer to the section below for details on the fields.

![Configuration Repository](/guides/images/users-guide/DeviceManagement/devmgmt-configuration-details.png)

### How to add a snapshot configuration from a file

To add a new configuration from a file, follow these steps:

1. Click **Add configuration snapshot** at the right of the top menu bar. 
2. In the upcoming window, enter a unique name and optional description for the configuration.
3. In the **Device type** field, enter a device type. The device type can be found in the **Info** tab of the target device.
4. Select the configuration snapshot file by uploading or choosing a file or providing an external URL. 
5. Click **Add configuration snapshot** to save your settings.

The snapshot will be added to the Configuration repository.

![Configuration Snapshot Repository](/guides/images/users-guide/configsnaprepo.png)


### How to retrieve a current snapshot from a device

In addition to adding configurations from a file you can also add configurations by retrieving them from a device.

In order to retrieve a current configuration snapshot from a device, follow these steps:

1. Navigate to the desired device and open its **Configuration** tab. 
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right. 

The retrieved snapshot can be found in the **Configuration repository**, accessed through the **Management** menu of the navigator.

![Retrieve Configuration Snapshot](/guides/images/users-guide/retrievesnap.png)

### How to apply a configuration snapshot to a device

In order to apply a configuration snapshot to a device, follow these steps:

1. Navigate to the desired device and open its **Configuration** tab. 
2. Under **Configuration snapshot**, select a configuration from the dropdown field.
3. Click **Put new snapshot to device** to apply the selected snapshot to the device.

![Apply new snapshot to a device](/guides/images/users-guide/addsnap.png)

### How to apply a snapshot configuration from one device to another

In order to apply a configuration snapshot from one device to another, follow these steps:

1. Navigate to the device which has your desired configuration and open the **Configuration** tab.
2. Under **Configuration snapshot**, click **Get new snapshot from device** at the top right.
3. Navigate to the other device and open its **Configuration** tab.
4. Under **Configuration snapshot**, select the new configuration from the dropdown field and click **Put new snapshot to device**.
 
>**Info**: When you apply snapshot configuration from one device to another, the configuration may contain data which is device-specific.

