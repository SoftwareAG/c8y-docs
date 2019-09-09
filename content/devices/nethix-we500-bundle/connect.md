---
title: Connecting to Cumulocity
layout: redirect
weight: 30
---
Once an internet connection has been established and at least one variable has been created, it is possible to let WE500 interact with the Cumulocity platform using the account credentials.

To do so, navigate to the **Administration > Cloud > Cumulocity** tab.

![Cumulocity](/guides/images/devices/we500/cumulocity.png)

Here you can specify the following parameters:

* **Enable:** Allows to enable or disable sending data to the Cumulocity platform
* **URL:** URL for entering the own reserved area of Cumulocity
* **Username:** Username for accessing the platform
* **Password:** Password for accessing the platform
* **Data delivery frequency:** Specifies the number of minutes between each data delivery from WE500 to Cumulocity

By clicking **Save**, WE500 will automatically register in **Cumulocity** and will start sending variables. 

The variables can be monitored in the Device Management application of the Cumulocity platform. Click **All devices** in the **Devices** menu in the navigator and select your device from the devices list. Switch to the **Measurements** tab of the device:

![Cumulocity_Measurements](/guides/images/devices/we500/cumulocity_device_measurements.png)

### Modify the registration information

WE500 registers automatically in the Cumulocity platform with default data that can later be changed in the **Info** tab of the device. For details, see [Device Management > Device details > Info](/guides/users-guide/device-management/#info) in the User guide.

### Update the firmware

You can update the WE500 firmware in the **Software** tab of your device. For details, see [Device Management > Device details > Software](/guides/users-guide/device-management/#software) in the User guide.


### Restart the device

WE500 can be remotely rebooted from the Control tab of your device. For details, see [Device Management > Device details > Control](/guides/users-guide/device-management/#control) in the User guide.

![Cumulocity_Device_Restart](/guides/images/devices/we500/cumulocity_device_restart.png)