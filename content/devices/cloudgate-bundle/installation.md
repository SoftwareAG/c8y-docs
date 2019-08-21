---
title: Configuration
layout: redirect
weight: 20
---

After setting up the CloudGate device, make sure to have the latest firmware installed. To install firmware on your CloudGate device, you can either register your CloudGate to the Option provisioning server or you can upload it manually. In both cases you have to [create an account](https://cloudgateuniverse.com/) first.

### To upgrade your CloudGate remotely

1. Log into [CloudGate Universe](https://cloudgateuniverse.com/).
2. Navigate to the **Devices** tab.
3. Before activating a new device, you first need to create a new group. Click **New group** and provide the required information.
4. Click **Activate new device** and provide the required information.
5. Navigate to your device and click **Change version** in the **Firmware** section.
6. Select the version you want to install on your CloudGate device and click **Apply changes**.

### To upgrade your CloudGate manually

- Log into [CloudGate Universe](https://cloudgateuniverse.com/).
- Navigate to the **Library** tab.
- Click **View firmware** in the **Firmware** section.
- Search for the firmware matching your device type and click **View details**.
- Click the download icon next to the version you want to install.
- Access your CloudGate device via web browser.
- Log into the CloudGate web interface. The default username and password are both "admin".
- Navigate to the **Provisioning** tab and in the left menu select **Upload device provisioning file**.
- Click **Browse** and navigate to the zip archive.
- Click **Upload** and wait for the file to be sent.

After the device has restarted, you can check the firmware version under **Home > System Information** in the web interface of the CloudGate device.

To connect your CloudGate device to Cumulocity, the LuvitRED plugin needs to be installed. The installation is similar to the firmware upgrade described above.  The plugin can be found in the **Application** section instead of the **Firmware** section.

If you upgrade your CloudGate device remotely, it will automatically check for updates. This means that in case the version which is installed on your CloudGate device differs from the version specified in your [CloudGate Universe](https://cloudgateuniverse.com/) account, the device will automatically download and install the version specified in your account. This is, for example, useful if you have to perform a factory reset on your device which would reset the firmware on the device. 