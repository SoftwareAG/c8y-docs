---
title: Installation
layout: redirect
order: 20
---

After setting up the CloudGate device, make sure to have the latest firmware installed. To install firmware on your CloudGate device, you can either register your CloudGate to the Option provisioning server or you can upload it manually. In both cases you have to [create an account](https://cloudgateuniverse.com/) first.

For upgrading your CloudGate remotely:

- Log in at [CloudGate Universe](https://cloudgateuniverse.com/).
- Go to the "Devices" tab.
- Before activating a new device, you need to create a new group first. Click on "New group" and fill out the form.
- After creating a group, click on "Activate new device" and fill out the form.
- Navigate to your device and click on the button "Change version" in the "Firmware" section.
- Select the version you intend to install on your CloudGate device and click on "Apply changes".

![CloudGate](/guides/images/devices/cloudgate/change_firmware.png)

For upgrading your CloudGate manually:

- Log in at [CloudGate Universe](https://cloudgateuniverse.com/).
- Go to the "Library" tab.
- Click on "View firmware" in the "Firmware" section.
- Go to the firmware matching your device type and click "View details".
- Click on the download icon next to the version you intend to install.
- Access your CloudGate device via web browser.
- Log into the CloudGate web interface. The default username and password are both admin.

![CloudGate web interface](/guides/images/devices/cloudgate/device_provisioning.png)

- Go to the "Provisioning" tab and in the left menu select "Upload device provisioning file".
- Click on "Browse..." and navigate to the zip archive.
- Click upload and wait for the file to be sent.

After the device restarted, you can confirm the firmware version by checking the web interface of the CloudGate device.

![CloudGate Universe](/guides/images/devices/cloudgate/firmware_version.png)

To connect your CloudGate device with Cumulocity, the "LuvitRED" plugin needs to be installed as well. Follow the instructions above. In this case the plugin can be found in the "Application" section and not in the "Firmware" section.

If you upgrade your CloudGate device remotely, it will automatically check for updates. To be precise, if the version which is installed on your CloudGate device differs from the version specified in your [CloudGate Universe](https://cloudgateuniverse.com/) account, the device will automatically download and install the version specified in your account. This is useful if you have to perform a factory reset on your device which would reset the firmware on the device. Therefore, you should always make sure that the newest version is selected in your account.
