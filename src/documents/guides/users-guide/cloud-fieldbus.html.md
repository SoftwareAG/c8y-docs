---
order: 50
title: Cloud Fieldbus
layout: default
---

## <a name="overview"></a>Overview

Cloud Fieldbus is a Cumulocity application with the ability to collect data from fieldbus devices and remotely manage them. This section describes how to

* [Connect](#connect) fieldbus devices.
* [Manage](#manage) the connected fieldbus devices.
* [Configure](#configure) the remote management capabilities of particular types of devices and [import and export](#import) them.

It is supported out of the box by the following terminals:

* [Pssystec Smartbox-Modbus](/guides/devices/smartbox-modbus) for Modbus/RTU.
* [Netcomm Wireless NTC-6200](/guides/devices/netcommwireless) for Modbus/TCP and Modbus/RTU.
* [Cinterion Java modules](/guides/devices/cinterion) for Modbus/RTU and CAN bus.

OPC UA support is implemented in Java and runs on any system running JRE7 (Java Runtime Environment 7) or newer.

> If you want to support Cloud Fieldbus with your terminal, please contact info@cumulocity.com for more information.

## <a name="connect"></a>Connecting Fieldbus devices

For the following instructions, we assume you have a Cloud Fieldbus terminal available and it is registered and visible in your Cumulocity tenant. To register a terminal with Cumulocity, follow the instructions provided with the terminal.

### Connecting Modbus/RTU devices

To connect a Modbus/RTU device:

* Physically wire the Modbus/RTU device through RS/485 or RS/232 to the terminal.
* Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g., by setting a jumper on the device).
* Check the serial communication settings of the device according to the instructions provided with the device (i.e., baud rates and communication protocol). These have to match with all devices on the bus.
* Navigate to the terminal in Cumulocity and click on the "Modbus" tab.
* Change the communication settings shown in the section "Serial Communication" to match the settings on the bus, if needed.
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency where measurements are sent to Cumulocity.
* Click "Save changes" if you made changes.

![Add Modbus device](/guides/users-guide/newmodbusrtudevice.png)

* To start communication between the terminal and the Modbus device, click "Add new device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Fieldbus device types](#configure)" below. Set the Modbus address of the connected device.
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds.

After the progress indicator vanishes, a new child device has been added to the terminal and can now be managed. You can click on the name of the device in the table to navigate to the device. If you have not yet added Modbus devices to the terminal, you may have to reload your browser window to make the "Child Devices" tab visible.

### Connecting Modbus/TCP devices

To connect a Modbus/TCP device:

* Make sure that the Modbus/TCP device is connected to the terminal, e.g., directly through an Ethernet cable or through a switch. If you are using a Modbus gateway, configure the gateway in a way it can communicate with the Modbus devices behind the gateway.
* Check the network settings of the device using the instructions provided with the device.
* Navigate to the terminal in Cumulocity and click on the "Network" tab. Verify that the LAN settings of the terminal match the settings of the device so that TCP communication can be established.
* Navigate to the "Modbus" tab.
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency at which measurements are sent to Cumulocity. Click "Save changes" if you made changes.
* To start communication between the terminal and the Modbus device, click "Add new device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Fieldbus device types](#configure)" below. Set the Modbus address and the IP address of the connected device.
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds.

![Add Modbus device](/guides/users-guide/newmodbustcpdevice.png)

> We assume that all Modbus/TCP communication uses the standard Modbus/TCP port 502. On the NTC-6200, the port to be used can be configured through the variable "service.cumulocity.plugin.lua__modbus.port" using, for example, Device Shell or the local web user interface of the device.

### Connecting CAN devices

To connect a CAN device:

* Physically wire the CAN device through to the terminal.
* Check the serial communication baud rate of the device according to the instructions provided with the device. These have to match all devices on the bus.
* Navigate to the terminal in Cumulocity and click on the "CAN bus" tab.
* Change the baud rate setting shown in the section "CAN bus communication" to match the settings on the bus, if needed.
* Change the transmit rate according to your requirements. The transmit rate is the frequency where measurements are sent to Cumulocity.
* Click "Save changes" if you made changes.
* To start communication between the terminal and the CAN device, click "Add CAN device".
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "[Configuring Fieldbus device types](#configure)" below.
* Click "Add". Cumulocity will now send a notification to the Fieldbus terminal that a new device is ready to be managed. This may take a few seconds.

After the progress indicator vanishes, a new child device has been added to the terminal and can now be managed. You can click on the name of the device in the table to navigate to the device. If you have not yet added Fieldbus devices to the terminal, you may have to reload your browser window to make the "Child Devices" tab visible.

![Add CAN device](/guides/users-guide/newcandevice.png)

### <a name="connect-opcua"></a>Connecting OPC UA servers

To connect an OPC UA server to Cumulocity, you need a gateway or industrial PC running the Cumulocity OPC UA agent. 

* Make sure that the OPC UA server is connected to the gateway or PC, e.g., directly through an Ethernet cable or through a switch. 
* Check the network settings of the gateway and make sure that the OPC UA server is reachable from the gateway.
* Navigate to the gateway in the platform and click on the "OPCUA" tab.
* Enter the URL of the OPC UA server as seen from the gateway into the field "URL".
* Set the username and password to access the OPC UA server.
* Change the transmit rate and the polling rate according to your requirements. The transmit rate is the frequency at which measurements are sent to Cumulocity. The polling rate is the frequency at which the OPC UA server polls for changes. Note that not all OPC UA servers support setting a polling rate. In such cases, the OPC UA server sends data usually whenever it changes.
* Click "Save changes" if you made changes. 
* To start communication between the gateway and the OPC UA server, click "Add OPCUA device". An OPC UA server may host many devices as part of its object model.
* Enter a name for the OPC UA device.
* Enter the absolute "browse path" of the OPC UA device. The browse path of the device is configured on the OPC UA server and represents the "root" of the OPC UA device in the OPC UA server object model.
* Select the type of the child device from the drop-down box. To add new device types, see "[Configuring Fieldbus device types](#configure)" below.
* Click "Add".

Cumulocity will now send a notification to the OPC UA agent that a new device is ready to be managed. This may take a few seconds. 
After the progress indicator vanishes, a new child device has been added to the gateway and can now be managed. You can click on the name of the device in the table to navigate to the device.

![Add OPCUA device](/guides/users-guide/newopcuadevice.png)

## <a name="manage"></a>Managing Fieldbus devices

Once connected, you can now manage your device. Click "Child devices" on a terminal to list the connected Fieldbus devices and navigate to a Fieldbus device. Depending on the capabilities of the device and its configuration in Cumulocity, you can:

* [Collect measurements](#collect).
* [Send alarms on coil or register changes](#alarms).
* [Log coil and register changes as events](#logging).
* [Monitor the status of coils and registers](#status).

### <a name="collect"></a>Collecting measurements

If the device type of the Fieldbus device is configured to collect measurements, these will be visible in the "Measurements" tab. They will also be available for usage in the [Data Explorer](/guides/users-guide/cockpit#using-the-data-explorer-to-visualize-data) and in [Dashboard widgets](/guides/users-guide/cockpit#working-with-dashboards).

Data is collected according to the interval specified in the "transmit rate" property of the terminal as described above. To optimize the data traffic, data that is exactly the same as collected previously may not be sent again.

![Fieldbus measurements](/guides/users-guide/modbusmeasurements.png)

### <a name="alarms"></a>Monitoring alarms

If the device type of the Fieldbus device is configured to send alarms, these will be visible in the "Alarms" tab and usable in widgets. To determine the alarm status, the Fieldbus devices are monitored for changes according to the "polling rate" setting of the terminal. If a particular coil or register is non-zero, an alarm will be raised. If the value goes back to zero, the alarm will be cleared.

![Fieldbus alarms](/guides/users-guide/modbusalarms.png)

### <a name="logging"></a>Logging events

Similar to alarms, changes in Fieldbus devices can be monitored and logged as events. Each time, the value of the monitored coil or register changes, an event is created. You can see the events in the "Events" tab of the device or use them in widgets. You can inspect the new value of the monitored coil or register by clicking on the event and unfolding the event details.

![Fieldbus events](/guides/users-guide/modbusevents.png)

### <a name="status"></a>Monitor a device status

The status of devices can be monitored in real-time using dashboard widgets in the Cockpit application. Navigate to the Cockpit application, create a dashboard or report, and add widgets as described in the [Cockpit user's guide](/guides/users-guide/cockpit). The Cloud Fieldbus has two new widgets: The "Fieldbus Device" widget and the "SCADA" widget.

### Monitoring device status using the Fieldbus Device widget

The Fieldbus Device widget provides you with a tabular display of the status of a device. The status of the device can also be modified through the widget. To use the Fieldbus Device widget,..

* Select a dashboard and click "Add widget to dashboard" using the cogwheel on the top right.
* Select the "Fieldbus Device Widget" and edit the title of the widget.
* Choose the device that should be shown in the widget in the "Target assets or devices" section.
* Select the coils and registers that should be shown on the widget.

![Adding the Fieldbus Device Widget](/guides/users-guide/modbusedit.png)

In the widget, the selected coils and registers are grouped into display categories as configured in the device type. The Fieldbus Device Widget updates automatically as soon as there is new data available. You do not need to click on reload.

![Use the Fieldbus Device Widget](/guides/users-guide/modbusstatus.png)

Registers and coils that can be changed are represented by active widgets. For example, in the screenshot above, the "Master switch" coil and the "Mode" register are editable. If you click a switch, an operation to change the corresponding coil or register is sent to the terminal. Similar, if you change a value and click "Set", an operation is created. The terminal will then carry out the configuration change on the device, as requested through the operation. While the operation is being processed, a progress indicator is shown.

### <a name="scada"></a>Monitoring status using the SCADA widget

The SCADA widget provides you with a graphic representation of the status of a device. To use the SCADA widget:

* Select a dashboard and click "Add widget to dashboard" using the cogwheel on the top right.
* Select the "SCADA" widget and edit the title of the widget.
* Choose the device that should be shown in the widget in the "Target assets or devices" section.
* Upload an SVG file with the graphic representation of the device. SVG files are vector graphics that have to be specifically prepared with placeholders for the status information. See "[Preparing SVG files for the SCADA widget](#scadasvg)" below.
* Assign placeholders to devices. Note that multiple devices can be taken as source.
* You now need to assign each placeholder to a property of the device. Hover over each placeholder and select the "Assign device property" button or the "Assign fieldbus property" button. A dialog box will pop-up, it allows you to choose basic device properties or fieldbus properties (i.e., status coils and registers). Select the desired property and click "Select".
* After assigning all placeholders, a preview of the widget with the current values of the properties is shown. Click "Save" to place the widget on the dashboard.

![Adding the SCADA Widget](/guides/users-guide/scadaedit.png)

## <a name="configure"></a>Configuring Fieldbus device types

New Fieldbus device types can be set up in the "Device Database" menu. Click "New". Define the protocol of your device, give it a name and start adding coils and register definitions to the device type. Depending on the selected protocol, the options below will change.

![Device Database](/guides/users-guide/devicedatabase.png)

### <a name="configureModbus"></a>Configuring Modbus data

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

The same functions are available for discrete inputs. However, it is not possible to update the status of a discrete input.

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
* Check "Raise alarm" if an alarm should be raised when the register is not zero in the device measurement. In this case, you can specify the type of the alarm raised, its text and its severity. Note that there can be only one alarm active of a particular type for a particular device.
* Check "Send event" if an event should be generated each time the value of the register changes. If "Send event" is checked, you can specify the type of event and the text in the event.
* Click "OK" to finish editing the register.

![Add register](/guides/users-guide/addregister.png)

"Use server time" is a tool to select if the time stamps for data is generated on the terminal or on the server. If you need to support buffering of data on the terminal, leave this checkbox unchecked.

Finally, don't forget to click "Save" to store your edits. If you edit a device type that is currently in use, you may need to

* Restart the terminals that use the device type.
* Reconfigure dashboards and widgets that use the device type.

### <a name="configureCAN"></a>Configuring CAN bus data

CAN device types can be configured in a very similar manner as Modbus device types. For more information on configuring Modbus device types, see [Configuring Modbus data](#configureModbus) above. The differences are:

* Holding registers are used to describe the different pieces of data inside CAN messages.
* Enter the CAN message ID of the specific message the data should be extracted from. Please use a hexadecimal number for the message ID.
* Conversion of values is extended by an offset parameter. This will be added or substracted from the register value, depending on its sign. The offset calculation is done after applying multiplier and divisor, and before performing decimal shifting.

![Add CAN register](/guides/users-guide/addregisterCAN.png)

### <a name="configureOPCUA"></a>Configuring OPC UA data

Again, OPC UA device types can be configured in a very similar manner as Modbus device types. For more information on configuring Modbus device types, see [Configuring Modbus data](#configureModbus) above. 

The main difference is how data is addressed. OPC UA servers provide a hierarchical object model of connected nodes. The nodes are addressed by the browse path from the root of the object model to the respective node. 

To simplify configuration, the browse path is split into two parts in Cloud Fieldbus: 

 * From the root to the OPC UA device (configured [above](#connect-opcua)).
 * From the OPC UA device to a node with data of that device.

When you click "Add", enter the second part of the path into the "browse path" field as shown in the image below. Note that the OPC UA agent currently only supports nodes of type "Variable". The description of the paths should be either provided with your OPC UA server or with your devices.

![Add OPCUA register](/guides/users-guide/addregisterOPCUA.png)

## <a name="import"></a>Importing and exporting device types

To manage device types more conveniently, you can export device types to a file once they are edited in the user interface. The file can be re-imported to  set up other Cumulocity accounts easily or to restore the types from a backup. The import functionality also supports importing ready-made device types provided by device manufacturers.

To export a device type, hover over the device type that you would like to export and click the download symbol. Your browser will download a file named "&lt;device type&gt;.json" with the device type definition.

![Export device type](/guides/users-guide/fieldbusexport.png)

To import a device type, click the "Import" link. This will open a dialog that lets you choose between importing a ready-made device type and uploading a previously exported device type. You can change the name of the device type during import using the "New device type name" field.

![Import device type](/guides/users-guide/fieldbusimport.png)

## <a name="scadasvg"></a>Preparing SVG files for the SCADA widget

The SCADA widgets inspect uploaded SVG files for placeholders. These placeholders are replaced by actual values from devices. Placeholders have a specific syntax and can be used anywhere in the SVG file. To add a placeholder, enter the name of the placeholder in double curly braces using your design application or a text editor. This is an example of a text element containing a placeholder "batteryValue", taken from our [sample SVG file](/guides/users-guide/scadademo.svg):

> When creating svg files, we recommend you to use "https://boxy-svg.com/". It is easy to use, quality chrome extension. 

	<text class="text" xt-anchor="middle" x="100" y="236.982125" width="200" ...>
		{{batteryValue}}
	</text>
