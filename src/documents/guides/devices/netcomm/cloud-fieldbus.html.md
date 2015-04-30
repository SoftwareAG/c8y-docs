---
order: 30
title: Cloud Fieldbus
layout: default
---

## <a name="overview"></a>Overview

Cloud Fieldbus is a Cumulocity application that lets you collect data from Modbus devices and remotely manage them. This section describes how to

* [Connect](#connect) Modbus devices.
* [Manage](#manage) the connected Modbus devices.
* [Configure](#configure) the remote management capabilities of particular Modbus device types.

It is applicable for Cloud Fieldbus Release 2. For connecting Modbus devices, you need a certified Cloud Fieldbus terminal. Currently, the following terminals are available:

* Teleorigin RB900 for Modbus/RTU.
* [Netcomm Wireless NTC-6200](/guides/devices/netcomm/netcomm-usersguide) for Modbus/TCP.

> Want to support Cloud Fieldbus in your terminal? Contact info@cumulocity.com for details.

## <a name="connect"></a>Connecting Modbus devices

In the following, we assume that you have a Cloud Fieldbus terminal available, and that you have it registered and visible in your Cumulocity tenant. To register a terminal with Cumulocity, follow the instructions provided with the terminal.

### Connecting Modbus/RTU devices

To connect a Modbus/RTU device:

* Physically wire the Modbus/RTU device through RS/485 or RS/232 to the terminal.
* Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g., by setting a jumper on the device).
* Check the serial communication settings of the device according to the instructions provided with the device (i.e., baud rates and communication protocol). These have to match on all devices on the bus.
* Navigate to the terminal in Cumulocity and click on the "Configuration" tab.
* Change the communication settings shown in the section "Serial Communication" to match the settings on the bus, if needed. 
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency at which measurements are sent to Cumulocity.
* Click "Save changes" if you made changes.

![Serial communication settings](/guides/users-guide/serial.png)

* To start communication between the terminal and the Modbus device, click "Add new device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Modbus device types](#configure)" below. Set the Modbus address of the connected device.
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

![Add Modbus device](/guides/users-guide/newmodbusrtudevice.png)

After the progress indicator vanishes, a new child device has been added to the terminal and can now be managed. You can click on the name of the device in the table to navigate to the device. If you have not yet added Modbus devices to the terminal, you may have to reload your browser window to make the "Child Devices" tab visible.

### Connecting Modbus/TCP devices

To connect a Modbus/TCP device:

* Make sure that the Modbus/TCP device is connected to the terminal, e.g., directly through an Ethernet cable or through a switch. If you are using a Modbus gateway, configure the gateway so that it can communicate with the Modbus devices behind the gateway.
* Check the network settings of the device using the instructions provided with the device. 
* Navigate to the terminal in Cumulocity and click on the "Network" tab. Verify that the LAN settings of the terminal match the settings of the device so that TCP communication can be established.
* Naviate to the "Configuration" tab.
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency at which measurements are sent to Cumulocity. Click "Save changes" if you made changes.
* To start communication between the terminal and the Modbus device, click "Add new device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Modbus device types](#configure)" below. Set the Modbus address and the IP address of the connected device.
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

![Add Modbus device](/guides/users-guide/newmodbustcpdevice.png)

> We assume that all Modbus/TCP communication uses the standard Modbus/TCP port 502.

## <a name="manage"></a>Managing Modbus devices

To manage a Modbus device, use the "Modbus Device Widget" as follows:

* Create a dashboard or edit an existing dashboard.
* Select "Add widget to dashboard" on the top right.
* Select the "Modbus Device Widget" and edit the title and the width of the widget.
* Choose the Modbus device that should be shown in the widget in the "Child devices" section.
* Select the coils and registers to be shown on the widget.

![Adding the Modbus Device Widget](/guides/users-guide/modbusedit.png)

In the widget, coils are represented by a switch icon as shown in the screenshot below. A small pencil icon indicates that you can change the value of the coil. In this case, you can click the switch, which will cause an operation to be sent to the device. While the operation is being processed, a progress indicator is shown.

Registers are shown as a numerical value and have a similar pencil icon to indicate that you can write the register. In this case, edit the value and click "Set". Again, there will be a progress indicator while the operation is being processed. 

All values shown in the Modbus Device Widget update automatically as soon as there is new data available. You do not need to click reload.

![Use the Modbus Device Widget](/guides/users-guide/modbusstatus.png)

Other than through the Modbus Device Widget, regularly collected registers can be visualized as measurements. To see the measurements, click on the "Measurement" tab, or create a dashboard with a measurement-related widget, such as the KPI Graph Widget.

Similar, coils can set off alarms. These will be shown in the "Alarms" tab of the device or in the general "Unresolved alarms" menu item.

## <a name="configure"></a>Configuring Modbus device types

New Modbus device types can be set up in the "Device Database" menu. Click "Add Device Type", give the new device type a name and start adding coils and register definitions to the device type.

![Device Database](/guides/users-guide/devicedatabase.png)

Click the "Add Coil" link to add a coil definition. This will open a dialog to specify the coil. Enter the following information:

* Enter the name of the coil as shown in the user interface.
* Enter the number of the coil in the Modbus device.
* Check "Show status" if the coil is read-only and you want to show its current value in the Modbus Device Widget. In this case, you can enter the text that the Modbus device widget should show for unset and set coils.
* Check "Update status" if the coil can be written and you want to edit it from the Modbus Device Widget.
* Check "Raise alarm" if an alarm should be raised when the coil is set in the device. In this case, you can specify the type of the alarm that is raised, its text and its severity. Note that there can be only one alarm active of a particular type for a particular device.
* Click "OK" to finish editing the coil.

![Add coil](/guides/users-guide/addcoil.png)

Click the "Add Register" link to add a register definition. This opens a dialog to enter the details of the register definition:

* Enter the name of the register as shown in the user interface.
* Enter the number of the register in the Modbus device.
* To scale the integer value read from the Modbus device, you can enter a multiplier, a divisor and a number of decimal places. The register value is first multiplied by the "multiplier", then divided by the "divisor" and then shifted by the number of decimal places. Note that the terminal may use integer arithmetics to calculate values sent to Cumulocity. For example, if you use a divisor of one and one decimal place, a value of 231 read from the terminal will be sent as 23.1 to Cumulocity. If you use a divisor of ten and no decimal places, the terminal may send 23 to Cumulocity (depending on its implementation).
* Check "Show status" if the register is read-only and you want to show its current value in the Modbus Device Widget.
* Check "Update status" if the register can be written and you want to edit it from the Modbus Device Widget.
* Click "Send measurement" if you want the values of the register to be regularly collected according to the transmit interval (see [above](#connect)). In this case, add a measurement type, a series and a unit. For each measurement type, a chart is created in the "Measurements" tab. For each series, a graph is created in the chart. The unit is used for labelling the measurement in the chart and in the Modbus Device Widget.
* Click "OK" to finish editing the register.

![Add register](/guides/users-guide/addregister.png)

"Use server time" lets you select if the time stamps for data are generated on the terminal or on the server. If you need to support buffering of data on the terminal, leave this checkbox unchecked.

Finally, don't forget to cick "Save" to store your edits.


