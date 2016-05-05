---
order: 50
title: Cloud Fieldbus
layout: default
---

## <a name="overview"></a>Overview

Cloud Fieldbus is a Cumulocity application that lets you collect data from fieldbus devices and remotely manage them. This section describes how to

* [Connect](#connect) fieldbus devices.
* [Manage](#manage) the connected fieldbus devices.
* [Configure](#configure) the remote management capabilities of particular types of devices and [import and export](#import) them.

Cloud Fieldbus is currently in beta. It supports Modbus out of the box on the following terminals:

* Teleorigin RB900 for Modbus/RTU.
* [Netcomm Wireless NTC-6200](/guides/devices/netcommwireless) for Modbus/TCP.

> If you want to support Cloud Fieldbus in your terminal, please contact info@cumulocity.com for more information.

## <a name="connect"></a>Connecting Modbus devices

In the following, we assume that you have a Cloud Fieldbus terminal available, and that you have it registered and visible in your Cumulocity tenant. To register a terminal with Cumulocity, follow the instructions provided with the terminal.

### Connecting Modbus/RTU devices

To connect a Modbus/RTU device:

* Physically wire the Modbus/RTU device through RS/485 or RS/232 to the terminal.
* Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g., by setting a jumper on the device).
* Check the serial communication settings of the device according to the instructions provided with the device (i.e., baud rates and communication protocol). These have to match on all devices on the bus.
* Navigate to the terminal in Cumulocity and click on the "Modbus" tab.
* Change the communication settings shown in the section "Serial Communication" to match the settings on the bus, if needed. 
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency at which measurements are sent to Cumulocity.
* Click "Save changes" if you made changes.

![Add Modbus device](/guides/users-guide/newmodbusrtudevice.png)

* To start communication between the terminal and the Modbus device, click "Add new device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Modbus device types](#configure)" below. Set the Modbus address of the connected device.
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

After the progress indicator vanishes, a new child device has been added to the terminal and can now be managed. You can click on the name of the device in the table to navigate to the device. If you have not yet added Modbus devices to the terminal, you may have to reload your browser window to make the "Child Devices" tab visible.

### Connecting Modbus/TCP devices

To connect a Modbus/TCP device:

* Make sure that the Modbus/TCP device is connected to the terminal, e.g., directly through an Ethernet cable or through a switch. If you are using a Modbus gateway, configure the gateway so that it can communicate with the Modbus devices behind the gateway.
* Check the network settings of the device using the instructions provided with the device. 
* Navigate to the terminal in Cumulocity and click on the "Network" tab. Verify that the LAN settings of the terminal match the settings of the device so that TCP communication can be established.
* Navigate to the "Modbus" tab.
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency at which measurements are sent to Cumulocity. Click "Save changes" if you made changes.
* To start communication between the terminal and the Modbus device, click "Add new device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Modbus device types](#configure)" below. Set the Modbus address and the IP address of the connected device.
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

![Add Modbus device](/guides/users-guide/newmodbustcpdevice.png)

> We assume that all Modbus/TCP communication uses the standard Modbus/TCP port 502. On the NTC-6200, the port to be used can be configured through the variable "service.cumulocity.plugin.lua__modbus.port" using, for example, Device Shell or the local web user interface of the device.

## <a name="manage"></a>Managing Modbus devices

Once connected, you can now manage your device. Click "Child devices" on a terminal to list the connected Modbus devices and navigate to a Modbus device. Depending on the capabilities of the device and its configuration in Cumulocity, you can:

* [Collect measurements](#collect).
* [Send alarms on coil or register changes](#alarms).
* [Log coil and register changes as events](#logging).
* [Monitor the status of coils and registers](#status).

### <a name="collect"></a>Collecting measurements

If the device type of the Modbus device is configured to collect measurements, these will be visible in the "Measurements" tab. They will also be available for usage in the [Data Explorer](/guides/users-guide/cockpit#using-the-data-explorer-to-visualize-data) and in [Dashboard widgets](/guides/users-guide/cockpit#working-with-dashboards).

Data is collected according to the interval specified in the "transmit rate" property of the terminal as described above. To optimize the data traffic, data that is exactly the same as collected previously is not sent again.

![Modbus measurements](/guides/users-guide/modbusmeasurements.png)

### <a name="alarms"></a>Monitoring alarms

If the device type of the Modbus device is configured to send alarms, these will be visible in the "Alarms" tab and usable in widgets. To determine the alarm status, the Modbus devices are monitored for changes according to the "polling rate" setting of the terminal. If a particular coil or register is non-zero, an alarm will be raised. If the value goes back to zero, the alarm will be cleared.

![Modbus alarms](/guides/users-guide/modbusalarms.png)

### <a name="logging"></a>Logging events

Similar to alarms, changes in Modbus devices can be monitored and logged as events. Each time, the value of the monitored coil or register changes, an event is created. You can see the events in the "Events" tab of the device or use them in widgets. You can inspect the new value of the monitored coil or register by clicking on the event and unfolding the event details.

![Modbus events](/guides/users-guide/modbusevents.png)

### <a name="status"></a>Monitoring device status 

The status of devices can be monitored in real-time using dashboard widgets in the Cockpit application. Navigate to the Cockpit application, create a dashboard or report, and add widgets as described in the [Cockpit user's guide](/guides/users-guide/cockpit). Cloud Fieldbus adds two new widgets: The "Fieldbus Device" widget and the "SCADA" widget.

### Monitoring device status using the Fieldbus Device widget

The Fieldbus Device widget provides you with a tabular display of the status of a device. The status of the device can also be modified through the widget. To use the Fieldbus Device widget,

* Select a dashboard and click "Add widget to dashboard" using the cogwheel on the top right.
* Select the "Fieldbus Device Widget" and edit the title of the widget.
* Choose the device that should be shown in the widget in the "Target assets or devices" section.
* Select the coils and registers that should be shown on the widget.

![Adding the Fieldbus Device Widget](/guides/users-guide/modbusedit.png)

In the widget, the selected coils and registers are grouped into display categories as configured in the device type. The Fieldbus Device Widget updates automatically as soon as there is new data available. You do not need to click reload.

![Use the Fieldbus Device Widget](/guides/users-guide/modbusstatus.png)

Registers and coils that can be changed are represented by active widgets. For example, in the screenshot above, the "Master switch" coil and the "Mode" register are editable. If you click a switch, an operation to change the corresponding coil or register is sent to the terminal. Similar, if you change a value and click "Set", an operation is created. The terminal will then carry out the configuration change on the device, as requested through the operation. While the operation is being processed, a progress indicator is shown.

### Monitoring status using the SCADA widget

The SCADA widget provides you with a graphical representation of the status of a device. To use the SCADA widget:

* Select a dashboard and click "Add widget to dashboard" using the cogwheel on the top right.
* Select the "SCADA" widget and edit the title of the widget.
* Choose the device that should be shown in the widget in the "Target assets or devices" section.
* Upload an SVG file with the graphical representation of the device. SVG files are vector graphics that have to be specifically prepared with placeholders for the status information. See "[Preparing SVG files for the SCADA widget](#scadasvg)" below.

![Adding the SCADA Widget](/guides/users-guide/scadaedit.png)

After the upload, the placeholders in the SVG file are shown in a list. You now need to assign each placeholder to a property of the device. 

* Hover over each placeholder and select the "Assign device property" button or the "Assign fieldbus property" button.
* This will pop up a dialog box that allows you to choose basic device properties or fieldbus properties (i.e., status coils and registers). Select a property and click "Select".
* After assigning all placeholders, a preview of the widget with the current values of the properties is shown.
* Click "Save" to place the widget on the dashboard.

![Assigning properties](/guides/users-guide/scadaassign.png)


## <a name="configure"></a>Configuring Modbus device types

New Modbus device types can be set up in the "Device Database" menu. Click "New", give the new device type a name and start adding coils and register definitions to the device type.

![Device Database](/guides/users-guide/devicedatabase.png)

Click the "Add" link next to "Coils (discrete inputs)" to add a coil definition. This will open a dialog to specify the coil. Enter the following information:

* Enter the name of the coil as shown in the user interface.
* Optionally, enter the display category to structure your data in widgets.
* Enter the number of the coil in the Modbus device.
* Check "Show status" if you want to show the coil's current value in the Fieldbus Device Widget. In this case, you can enter the text that the Fieldbus Device Widget should show for unset and set coils.
* Check "Update status" if you want to be able to edit the coil from the Fieldbus Device Widget.
* Check "Raise alarm" if an alarm should be raised when the coil is set in the device. In this case, you can specify the type of the alarm that is raised, its text and its severity. Note that there can be only one alarm active of a particular type for a particular device.
* Check "Send event" if an event should be generated each time the value of the coil changes. If "Send event" is checked, you can specify the type of event and the text in the event.
* Click "OK" to finish editing the coil.

![Add coil](/guides/users-guide/addcoil.png)

The same functionality is available for discrete inputs. However, it is not possible to update the status of a discrete input.

Click the "Add" link next to "Holding Registers" to add a register definition. This opens a dialog to enter the details of the register definition:

* Enter the name of the register as shown in the user interface.
* Optionally, enter the display category to structure your data in widgets.
* Enter the number of the register in the Modbus device. You can indicate a subset of bits to be used from a register by providing a start bit and a number of bits. This allows you to split a physical Modbus register into a set of "logical registers".
* To scale the integer value read from the Modbus device, you can enter a multiplier, a divisor and a number of decimal places. The register value is first multiplied by the "multiplier", then divided by the "divisor" and then shifted by the number of decimal places. Note that the terminal may use integer arithmetic to calculate values sent to Cumulocity. For example, if you use a divisor of one and one decimal place, a value of 231 read from the terminal will be sent as 23.1 to Cumulocity. If you use a divisor of ten and no decimal places, the terminal may send 23 to Cumulocity (depending on its implementation).
* Indicate the unit of the data, for example, "C" for temperature values.
* Check "Signed" if the register value should be interpreted as signed number.
* Check "Enumeration type" if the register value should be interpreted as enumeration of discrete values. If "Enumeration type" is checked, you can click "Add value" to add mappings from a discrete value to a text to be shown for this value in the widget. Click "Remove value" to remove the mapping.
* Check "Show status" if you want to show the current value of the register in the Fieldbus Device Widget.
* Check "Update status" if you want to be able to edit the register from the Fieldbus Device Widget. If "Update status" is checked, two additional fields "Minimum" and "Maximum" appear. Using these fields, you can constrain numerical values entered in the widget.
* Click "Send measurement" if you want the values of the register to be regularly collected according to the transmit interval (see [above](#connect)). In this case, add a measurement type and a series to be used. For each measurement type, a chart is created in the "Measurements" tab. For each series, a graph is created in the chart. The unit is used for labeling the measurement in the chart and in the Fieldbus Device Widget.
* Check "Raise alarm" if an alarm should be raised when the register is non-zero in the device. In this case, you can specify the type of the alarm that is raised, its text and its severity. Note that there can be only one alarm active of a particular type for a particular device.
* Check "Send event" if an event should be generated each time the value of the register changes. If "Send event" is checked, you can specify the type of event and the text in the event.
* Click "OK" to finish editing the register.

![Add register](/guides/users-guide/addregister.png)

"Use server time" lets you select if the time stamps for data are generated on the terminal or on the server. If you need to support buffering of data on the terminal, leave this checkbox unchecked.

Finally, don't forget to click "Save" to store your edits. If you edit a device type that is currently in use, you may need to

* Restart the terminals that use the device type.
* Reconfigure dashboards and widgets that use the device type.

## <a name="import"></a>Importing and exporting device types

To more conveniently manage device types, you can export device types to a file once they are edited in the user interface. The file can be imported again to more easily set up other Cumulocity accounts or to restore the types from a backup. The import functionality also supports importing ready-made device types provided by device manufacturers.

To export a device type, hover over the device type that you would like to export and click the download symbol. You browser will download a file named "&lt;device type&gt;.json" with the device type definition.

![Export device type](/guides/users-guide/fieldbusexport.png)

To import a device type, click the "Import" link. This will open a dialog that lets you choose between importing a ready-made device type and uploading a previously exported device type. You can change the name of the device type during import using the "New device type name" field.

![Import device type](/guides/users-guide/fieldbusimport.png)

## <a name="scadasvg"></a>Preparing SVG files for the SCADA widget

The SCADA widgets inspects uploaded SVG files for placeholders. These placeholders are replaced by actual values from devices. Placeholders have a specific syntax and can be used anywhere in the SVG file. To add a placeholder, enter the name of the placeholder in double curly braces using your design application or a text editor. This is an example of a text element containing a placeholder "batteryValue", taken from our [sample SVG file](/guides/users-guide/scadademo.svg):

	<text class="text" xt-anchor="middle" x="100" y="236.982125" width="200" ...>
		{{batteryValue}}
	</text>




