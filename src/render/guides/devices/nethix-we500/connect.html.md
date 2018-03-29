---
title: Interacting with Cumulocity
layout: redirect
order: 50
---
Once established an Internet connection and created at least one variable, it is possible to let WE500 interact with the [Cumulocity](www.cumulocity.com) platform using the account credentials.

To do so, navigate to **Administration > Cloud > Cumulocity** tab.

![Cumulocity](/guides/images/devices/we500/cumulocity.png)

On this page it’s possible to set the following parameters:

* **Enable:** It allows to enable or disable the data sending to the Cumulocity platform
* **URL:** It’s the URL for entering the own reserved area of Cumulocity
* **Username:** The username used for accessing the platform
* **Password:** The password used for accessing the platform
* **Data delivery frequency:** Sets the number of minutes between each data delivery by WE500 to **Cumulocity**

By clicking on the **Save** button, WE500 will register automatically in **Cumulocity** and will start sending variables that can be monitored from **Devices > All devices > Measurements**:

![Cumulocity_Measurements](/guides/images/devices/we500/cumulocity_device_measurements.png)

### <a name="info"></a>Device information
WE500 registers automatically in **Cumulocity** with default data that can be later changed in **Devices > All devices > Info**:

![Cumulocity_Device_Info](/guides/images/devices/we500/cumulocity_device_info.png)

### <a name="update"></a>Software update
The WE500 firmware can also be updated from **Devices > All devices > Software**:

![Cumulocity_Device_Software](/guides/images/devices/we500/cumulocity_device_software.png)

### <a name="restart"></a>Restart device
WE500 can also be remotely rebooted from **Devices > All devices > Control > Restart** device:

![Cumulocity_Device_Restart](/guides/images/devices/we500/cumulocity_device_restart.png)