---
order: 20
title: Netcomm Agent User's Guide
layout: default
---

## Overview

The following shows how to use an Netcomm NTC-6200 with Cumulocity. It describes how to

* [Connect](#connect) the device to your Cumulocity account.
* Set WAN, LAN and DHCP parameters.
* Read and configure RDB parameters.
* Manage software and firmware.
* Use the built-in GPS functionality.
* Use the built-in GPIO ports.
* Connect Modbus devices.

It assumes that the device includes the support software for Cumulocity.

## <a name="connect"></a>Connecting the device

To connect your Netcomm device to your Cumulocity account, you need to register it using the MAC address of the device. The registration process is described in the section "[Connecting devices](/guides/users-guide/device-management/#device-registration)" of the User's Guide. The MAC address of the device is printed on the back side of the device as shown by the screenshot below.

![MAC address](/guides/devices/netcomm/mac.jpg)

After accepting the device, click on "All devices" to navigate to the device, or search for it. The default name of the device is "<model> <serial number>". For example, the above device would appear as "NTC-6200 165711141901036". Click on the device to view the details of the device and access the functionality described in the remaining sections of this document.

	
	* Info tab: You can edit the name in the "Info" tab and potentially change the connection monitoring options. Model and serial number is reported under "Hardware". Basic modem parameters are visible in "Mobile" (IMEI, LAC, Cell ID, ICCID, MCC, MNC).
	* Measurements tab: There is one measurement type "Analog input" showing the voltage of each input.
	* Alarms tab: Setting a digital I/O to "high" will trigger an alarm that can be shown here. Setting it to "low" will clear the alarm. A notification mode can be set in the configuration. Supported values are: "event", "alarm", "alarm-inverted" (the inverted polarity sends alarm on "low" level).
	* Control tab: Contains the controls for setting digital outputs as well as the option to get and edit RDB configuration dumps.
	* Software tab: Shows the currently installed firmware on the device. 
	* Location tab: Shows the current location of the device. 
	* Tracking tab: Shows a location trace of the device over time.
	* Network tab: Display and edit the networking configuration.

Note that the "Location" and the "Tracking" tab only appear when GPS is enabled in the device and when the device had the first GPS fix.

Now you can, for example, create KPIs that represent more closely what you have actually connected to the GPIOs and show these KPIs in a real-time dashboard.
* Reporting of model, serial number, firmware version and installed software.



## Using Modbus

