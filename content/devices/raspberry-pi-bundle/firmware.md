---
title: Remote firmware upgrade
layout: redirect
weight: 60
---

The agent permits you to upgrade the firmware of a Raspberry Pi through the [rpi-update](https://github.com/Hexxeh/rpi-update) tool. To configure a firmware version:

* Open Cumulocity and click on "Firmware".
* Click "Add Firmware". 
* Enter a name for the firmware. As URL, use the Git hash of the firmware version at https://github.com/Hexxeh/rpi-firmware. (I.e., click on commits and select a particular version there. The hash is the weird garbage at the end of the URL.)
* Save the firmware version.

To roll out the firmware to a Raspberry Pi:

* Click on the "Software" tab of the Raspberry Pi.
* Click "Install firmware".
* Select the firmware version to install.
* Click "Install".

The Raspberry Pi will install the firmware and will reboot. Go to the "Control" tab to follow the upgrade process. After reboot, the operation will be either "Successful" or "Failed". Good luck. 
