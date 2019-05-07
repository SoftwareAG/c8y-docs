---
weight: 10
title: Cloud Fieldbus
layout: redirect
---

Cloud Fieldbus is a Cumulocity application with the ability to collect data from fieldbus devices and remotely manage them. This section describes how to

* [Connect](#connect) fieldbus devices.
* [Manage](#manage) the connected fieldbus devices.
* [Configure](#configure) the remote management capabilities of particular types of devices and [import and export](#import) them.

It is supported out of the box by the following terminals:

* [Pssystec Smartbox-Modbus](/guides/devices/smartbox-mini) for Modbus/RTU
* [Netcomm Wireless NTC-6200](/guides/devices/netcommwireless) for Modbus/TCP and Modbus/RTU
* [Cinterion Java modules](/guides/devices/cinterion) for Modbus/RTU and CAN bus
* [OPC-UA](/guides/devices/opcua) for OPC-UA Servers
* [Pssystec SmartBox DP](/guides/devices/smartbox-dp) for Profibus

OPC UA support is implemented in Java and runs on any system running JRE7 (Java Runtime Environment 7) or newer.

> If you want to support Cloud Fieldbus with your terminal, please contact info@cumulocity.com for more information.

### <a name="connect"></a>Connecting Fieldbus devices

For the following instructions, we assume you have a Cloud Fieldbus terminal available and it is registered as a device in your Cumulocity tenant. To register a terminal with Cumulocity, follow the instructions provided with the terminal.

#### Connecting Modbus/RTU devices

To connect a Modbus/RTU device:

1. Physically wire the Modbus/RTU device through RS/485 or RS/232 to the terminal.
2. Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g. by setting a jumper on the device).
3. Check the serial communication settings of the device according to the instructions provided with the device (i.e. baud rates and communication protocol). These have to match with all devices on the bus.
4. In the Device Management application, click **All devices** in the **Devices** menu in the navigator. In the device list, select the terminal and switch to the **Modbus** tab.
5. Change the communication settings shown in the section **Serial communication** to match the settings on the bus, if needed.
6. Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency where measurements are sent to Cumulocity.
7. Click **Save changes** if you made changes. <br> ![Add Modbus device](/guides/images/users-guide/newmodbusrtudevice.png)<br>
8. To start communication between the terminal and the Modbus device, click **Add new device**.
9. Enter a name for the device and select the type of the device from the drop-down field. To add new device types, see [Configuring Fieldbus device types](#configure) below. Set the Modbus address of the connected device.
10. Click **Add**. Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds.

After completion, a new child device has been added to the terminal and can now be managed. You can click on the name of the device in the table to navigate to the device. If you have not yet added Modbus devices to the terminal, you may have to reload your browser window to make the **Child Devices** tab visible.

#### Connecting Modbus/TCP devices

To connect a Modbus/TCP device:

1. Make sure that the Modbus/TCP device is connected to the terminal, i.e. directly through an Ethernet cable or through a switch. If you are using a Modbus gateway, configure the gateway in a way it can communicate with the Modbus devices behind the gateway.
2. Check the network settings of the device using the instructions provided with the device.
3. In the Device Management application, click **All devices** in the **Devices** menu in the navigator. In the device list, select the terminal and switch to the **Network** tab. Verify that the LAN settings of the terminal match the settings of the device so that TCP communication can be established.
4. Switch to the **Modbus** tab.
5. Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency at which measurements are sent to Cumulocity. 
6. Click **Save changes** if you made changes.

**Adding child devices**

1. To start communication between the terminal and the Modbus device, click **Add new device**.
2. Enter a name for the device and select the type of the device from the dropdown field. To add new device types, see [Configuring Fieldbus device types](#configure) below. Set the Modbus address and the IP address of the connected device.
3. Click **Add**. 

Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds.

![Add Modbus device](/guides/images/users-guide/newmodbustcpdevice.png)

> We assume that all Modbus/TCP communication uses the standard Modbus/TCP port 502. On the NTC-6200, the port to be used can be configured through the variable "service.cumulocity.plugin.lua__modbus.port" using, for example, Device Shell or the local web user interface of the device.

#### Connecting CAN devices

To connect a CAN device:

1. Physically wire the CAN device through to the terminal.
2. Check the serial communication baud rate of the device according to the instructions provided with the device. These have to match all devices on the bus.
3. In the Device Management application, click **All devices** in the **Devices** menu in the navigator. In the device list, select the terminal and switch to the **CAN bus** tab. 
4. Change the baud rate setting shown in the section **CAN bus communication** to match the settings on the bus, if needed.
5. Change the transmit rate according to your requirements. The transmit rate is the frequency where measurements are sent to Cumulocity.
6. Click **Save changes** if you made changes.

**Adding child devices**

1. To start communication between the terminal and the CAN device, click **Add CAN device**.
2. Enter a name for the device and select the type of the device from the dropdown field. To add new device types, see [Configuring Fieldbus device types](#configure) below.
3. Click **Add**. 

Cumulocity will now send a notification to the Fieldbus terminal that a new device is ready to be managed. This may take a few seconds.

After completion, a new child device has been added to the terminal and can now be managed. You can click on the name of the device in the table to navigate to the device. If you have not yet added Fieldbus devices to the terminal, you may have to reload your browser window to make the "Child Devices" tab visible.

![Add CAN device](/guides/images/users-guide/newcandevice.png)

#### <a name="connect-opcua"></a>Connecting OPC UA servers

To connect an OPC UA server to Cumulocity, you need a gateway or industrial PC running the Cumulocity OPC UA agent. 

1. Make sure that the OPC UA server is connected to the gateway or PC, i.e. directly through an Ethernet cable or through a switch. 
2. Check the network settings of the gateway and make sure that the OPC UA server is reachable from the gateway.
3. In the Device Management application, click **All devices** in the **Devices** menu in the navigator. In the device list, select the gateway and switch to the  **OPCUA** tab.
4. In the **URL** field, enter the URL of the OPC UA server as seen from the gateway.
5. Set the username and password to access the OPC UA server.
6. Change the transmit rate and the polling rate according to your requirements. The transmit rate is the frequency at which measurements are sent to Cumulocity. The polling rate is the frequency at which the OPC UA server polls for changes. Note that not all OPC UA servers support setting a polling rate. In such cases, the OPC UA server sends data usually whenever it changes.
7. Click **Save changes** if you made changes. 

**Adding child devices**

1. To start communication between the gateway and the OPC UA server, click **Add OPCUA device**. An OPC UA server may host many devices as part of its object model.
2. Enter a name for the OPC UA device.
3. Enter the absolute **Browse path** of the OPC UA device. The browse path of the device is configured on the OPC UA server and represents the "root" of the OPC UA device in the OPC UA server object model.
4. Select the type of the child device from the drop-down box. To add new device types, see [Configuring Fieldbus device types](#configure) below.
5. Click **Add**.

Cumulocity will now send a notification to the OPC UA agent that a new device is ready to be managed. This may take a few seconds. 

After completion, a new child device has been added to the gateway and can now be managed. You can click on the name of the device in the table to navigate to the device.

![Add OPCUA device](/guides/images/users-guide/newopcuadevice.png)

#### <a name="connect-profibus"></a>Connecting Profibus devices

Connecting Profibus differs slightly from the regular Plug & Play approach of Cloud Fieldbus. The gateway device acts as slave on the Profibus so it can easily be integrated into existing infrastructure. This means that Profibus data must be actively sent to the gateway though. Typically this is done by programming a PLC to actively send information to the gateway via it’s configured Profibus slave address.

1. Physically wire the Profibus device to the terminal.
2. In the Device Management application, click **All devices** in the **Devices** menu in the navigator. In the device list, select the terminal and switch to the "Profibus" tab. <br><br>
<img src="/guides/images/users-guide/profibus-settings.png" alt="Profibus settings" style="max-width: 100%"><br><br>
3. The baud rate is automatically detected by the gateway and is just being displayed here.
4. Change the transmit rate according to your requirements. The transmit rate is the interval at which measurements are sent to Cumulocity.
5. Set the slave address of the terminal.
6. Configure your Profibus Master device to communicate to that slave address. To do so, refer to the gateway manual (e.g. [SmartBox DP](/guides/devices/smartbox-db)).
7. Click **Save** to update the gateway with the new settings.

**Adding child devices**

1. To start communication between the gateway and the Profibus device, click **Add Profibus device**.
2. Enter a name for the new device.
3. Select the type of the child device from the drop-down box. To add new device types, see [Configuring Fieldbus device types](#configure) below.
4. Click **Add** to confirm and notify the gateway.

<img src="/guides/images/users-guide/profibus-device-add.png" alt="Add device" style="max-width: 100%">

Now A child device will be created containing the data configured in the selected device type.

Cumulocity will notify the gateway to send data for the newly created child device.

### <a name="manage"></a>Managing Fieldbus devices

Once connected, you can now manage your device. Switch to the **Child devices** tab of a device to list the connected Fieldbus devices and navigate to a Fieldbus device. Depending on the capabilities of the device and its configuration in Cumulocity, you can:

* [Collect measurements](#collect)
* [Send alarms on coil or register changes](#alarms)
* [Log coil and register changes as events](#logging)
* [Monitor the status of coils and registers](#status)

#### <a name="collect"></a>Collecting measurements

If the device type of the Fieldbus device is configured to collect measurements, these will be visible in the **Measurements** tab. They will also be available for usage in the [Data Explorer](/guides/users-guide/cockpit#visualize) and in [Dashboard widgets](/guides/users-guide/cockpit#dashboards).

Data is collected according to the interval specified in the "transmit rate" property of the terminal as described above. To optimize the data traffic, data that is exactly the same as collected previously may not be sent again.

![Fieldbus measurements](/guides/images/users-guide/modbusmeasurements.png)

#### <a name="alarms"></a>Monitoring alarms

If the device type of the Fieldbus device is configured to send alarms, these will be visible in the **Alarms** tab and usable in widgets. To determine the alarm status, the Fieldbus devices are monitored for changes according to the "polling rate" setting of the terminal. If a particular coil or register is non-zero, an alarm will be raised. If the value goes back to zero, the alarm will be cleared.

![Fieldbus alarms](/guides/images/users-guide/modbusalarms.png)

#### <a name="logging"></a>Logging events

Similar to alarms, changes in Fieldbus devices can be monitored and logged as events. Each time, the value of the monitored coil or register changes, an event is created. You can see the events in the "Events" tab of the device or use them in widgets. You can inspect the new value of the monitored coil or register by clicking on the event and unfolding the event details.

![Fieldbus events](/guides/images/users-guide/modbusevents.png)

#### <a name="status"></a>Monitor a device status

The status of devices can be monitored in real time using dashboard widgets in the Cockpit application. Navigate to the Cockpit application, create a dashboard or report, and add widgets as described in the [Cockpit section](/guides/users-guide/cockpit) in the User guide. The Cloud Fieldbus has two new widgets: The "Fieldbus Device" widget and the "SCADA" widget.

#### <a name="fieldbus-device-widget"></a>Monitoring device status using the Fieldbus Device widget

The Fieldbus Device widget provides you with a tabular display of the status of a device. The status of the device can also be modified through the widget. 

To use the Fieldbus Device widget, follow these steps:

1. Select a dashboard and click **Add widget** in the top menu bar.
2. Select the Fieldbus Device Widget and edit the title of the widget.
3. Choose the device that should be shown in the widget in the **Target assets or devices** section.
4. Select the coils and registers that should be shown on the widget.

![Adding the Fieldbus Device Widget](/guides/images/users-guide/modbusedit.png)

In the widget, the selected coils and registers are grouped into display categories as configured in the device type. The Fieldbus Device Widget updates automatically as soon as there is new data available. You do not need to click on reload.

![Use the Fieldbus Device Widget](/guides/images/users-guide/modbusstatus.png)

Registers and coils that can be changed are represented by active widgets. For example, in the screenshot above, the "Master switch" coil and the "Mode" register are editable. If you click a switch, an operation to change the corresponding coil or register is sent to the terminal. Similar, if you change a value and click **Set**, an operation is created. The terminal will then carry out the configuration change on the device, as requested through the operation. While the operation is being processed, a progress indicator is shown.

#### <a name="scada"></a>Monitoring status using the SCADA widget

The SCADA widget provides you with a graphic representation of the status of a device. 

To use the SCADA widget, follow these steps:

1. Select a dashboard and click **Add widget** in the top menu bar.
2. Select the SCADA widget and edit the title of the widget.
3. Choose the device that should be shown in the widget in the **Target assets or devices** section.
4. Upload an SVG file with the graphic representation of the device. SVG files are vector graphics that have to be specifically prepared with placeholders for the status information. See [Preparing SVG files for the SCADA widget](#scadasvg) below.
5. Assign placeholders to devices. Note that multiple devices can be taken as source.
6. You now need to assign each placeholder to a property of the device. Hover over each placeholder and select **Assign device property** or **Assign fieldbus property**. A dialog box comes up, in which you can choose basic device properties or fieldbus properties (i.e. status coils and registers). Select the desired property and click **Select**.
7. After assigning all placeholders, a preview of the widget with the current values of the properties is shown. Click **Save** to place the widget on the dashboard.

![Adding the SCADA Widget](/guides/images/users-guide/scadaedit.png)

#### <a name="scadasvg"></a>Preparing SVG files for the SCADA widget

The SCADA widgets inspect uploaded SVG files for placeholders. These placeholders are replaced by actual values from devices. Placeholders have a specific syntax and can be used anywhere in the SVG file. To add a placeholder, enter the name of the placeholder in double curly braces using your design application or a text editor. 

When creating svg files, we recommend you to use "https://boxy-svg.com/". It is easy to use, quality chrome extension. 

	<text class="text" xt-anchor="middle" x="100" y="236.982125" width="200" ...>
		{{batteryValue}}
	</text>


### <a name="configure"></a>Configuring Fieldbus device types

New Fieldbus device types can be set up in the **Device database** page which you open from the **Device Types** menu in the navigator. 

Click **New** in the top menu bar. In the **Device type** field, select the protocol of your device and enter a name for it. 

Now you can start adding coils and register definitions to the device type, depending on the selected protocol (see the descriptions below).

![Device Database](/guides/images/users-guide/devicedatabase.png)

#### <a name="configureModbus"></a>Configuring Modbus data

##### <a name="addCoil"></a>Adding a coil definition

Click **Add** at the top right of the **Coils (discrete inputs)** section, to add a coil definition. This will open a dialog to specify the coil. Enter the following information:

1. Enter the name of the coil as being displayed in the user interface.
2. Optionally, enter the display category to structure your data in widgets.
3. Enter the number of the coil in the Modbus device.
4. Select the **Show status** checkbox if you want to show the coil's current value in the Fieldbus Device Widget. In this case, you can enter the text that the Fieldbus Device Widget should show for unset and set coils.
5. Select the **Update status** checkbox if you want to be able to edit the coil from the Fieldbus Device Widget.
1. Select the **Raise alarm** checkbox if an alarm should be raised when the coil is set in the device. In this case, you can specify the type of the alarm that is raised, its text and its severity. Note that there can only be one alarm active of a particular type for a particular device.
1. Select the **Send event** checkbox if an event should be generated each time the value of the coil changes. If **Send event** is selected, you can specify the type of event and the text in the event.
1. Click **OK** to finish editing the coil.

![Add coil](/guides/images/users-guide/addcoil.png)

The same functions are available for discrete inputs. However, it is not possible to update the status of a discrete input.

##### <a name="addRegister"></a>Adding a register definition

Click **Add** at the top right of the **Holding registers** section, to add a register definition. This opens a dialog to enter the details of the register definition:

1. Enter the name of the register being displayed in the user interface.
2. Optionally, enter the display category to structure your data in widgets.
3. Enter the number of the register in the Modbus device. You can indicate a subset of bits to be used from a register by providing a start bit and a number of bits. This allows you to split a physical Modbus register into a set of "logical registers".
4. To scale the integer value read from the Modbus device, you can enter a multiplier, a divisor and a number of decimal places. The register value is first multiplied by the "multiplier", then divided by the "divisor" and then shifted by the number of decimal places. Note, that the terminal may use integer arithmetic to calculate values sent to Cumulocity. For example, if you use a divisor of one and one decimal place, a value of 231 read from the terminal will be sent as 23.1 to Cumulocity. If you use a divisor of ten and no decimal places, the terminal may send 23 to Cumulocity (depending on its implementation).
5. Indicate the unit of the data, for example, "C" for temperature values.
6. Select the **Signed** checkbox if the register value should be interpreted as signed number.
7. Select the **Enumeration type** checkbox if the register value should be interpreted as enumeration of discrete values. If **Enumeration type** is selected, you can click **Add value** to add mappings from a discrete value to a text to be shown for this value in the widget. Click **Remove value** to remove the mapping.
8. Select the **Show status** checkbox if you want to show the current value of the register in the Fieldbus Device Widget.
9. Select the **Update status** checkbox if you want to be able to edit the register from the Fieldbus Device Widget. If **Update status** is selected, two additional fields **Minimum** and **Maximum** appear. Using these fields, you can constrain numerical values entered in the widget.
10. Select the **Send measurement** checkbox if you want the values of the register to be regularly collected according to the transmit interval (see [above](#connect)). In this case, add a measurement type and a series to be used. For each measurement type, a chart is created in the **Measurements** tab. For each series, a graph is created in the chart. The unit is used for labelling the measurement in the chart and in the Fieldbus Device Widget.
11. Select the **Raise alarm** checkbox if an alarm should be raised when the register is not zero in the device measurement. In this case, you can specify the type of the alarm raised, its text and its severity. Note, that there can only be one alarm active of a particular type for a particular device.
12. Select the **Send event** checkbox if an event should be generated each time the value of the register changes. If **Send event** is selected, you can specify the type of event and the text in the event.
13. Click **OK** to save your settings.
 
![Add register](/guides/images/users-guide/addregister.png)

In the **Options** section, select the checkbox **Use server time** to create the time stamps for data on the server instead of on the terminal. If you need to support buffering of data on the terminal, leave this checkbox clear.

Finally, click **Save** to save your settings. 

If you edit a device type that is currently in use, you may need to

* restart the terminals that use the device type,
* reconfigure dashboards and widgets that use the device type.

#### <a name="configureCAN"></a>Configuring CAN bus data

CAN device types can be configured in a very similar way as Modbus device types. For more information, see [Configuring Modbus data](#configureModbus) above. The differences are:

* Holding registers are used to describe the different pieces of data inside CAN messages.
* Enter the CAN message ID of the specific message the data should be extracted from. Use a hexadecimal number for the message ID.
* Conversion of values is extended by an offset parameter. This will be added or substracted from the register value, depending on its sign. The offset calculation is done after applying multiplier and divisor, and before performing decimal shifting.

![Add CAN register](/guides/images/users-guide/addregisterCAN.png)

#### <a name="configureOPCUA"></a>Configuring OPC UA data

OPC UA device types can be configured in a very similar way as Modbus device types. For more information, see [Configuring Modbus data](#configureModbus) above. 

The main difference is how data is addressed. OPC UA servers provide a hierarchical object model of connected nodes. The nodes are addressed by the browse path from the root of the object model to the respective node. 

To simplify configuration, the browse path is split into two parts in Cloud Fieldbus: 

 * From the root to the OPC UA device (configured [above](#connect-opcua)).
 * From the OPC UA device to a node with data of that device.

When you click **Add**, enter the second part of the path into the **** field as shown in the image below. Note that the OPC UA agent currently only supports nodes of type "Variable". The description of the paths should be either provided with your OPC UA server or with your devices.

![Add OPCUA register](/guides/images/users-guide/addregisterOPCUA.png)

#### <a name="configureProfibus"></a>Configuring Profibus data

To configure a Profibus device type, select "Profibus" as device type from the dropdown list and enter a name for it. 

In the Register section, click **Add** at the right to add one or more register definitions as described exemplarily for Modbus devices in [Adding a register definition](#addRegister) above.  

In the **Options** section, select the checkbox **Use server time** to create the time stamps for data on the server instead of on the terminal. If you need to support buffering of data on the terminal, leave this checkbox clear.

Finally, click **Save** to save your settings. 

If you edit a device type that is currently in use, you may need to

* restart the terminals that use the device type,
* reconfigure dashboards and widgets that use the device type.

#### <a name="configure-canopen"></a>Configuring CANopen data

There are two ways to create a new device type. Either manually from scratch via the “New” operation or via import of an EDS file for the corresponding device.

**Manually creating a new device type from scratch**

Navigate to the **Device database** page and click **New**. The following window will open:

![New device type](/guides/images/users-guide/newtype.png)

Select “CANopen” as fieldbus type and enter a name for your device type. Specific to CANopen is the **CANopen device type** field which accepts a hex number.

In the **Variables** section, you determine the CANopen variables. Variables inside the “Object Dictionary”(OD) of the CANopen device can be accessed later by adding the variables to the device type definition. Via the **Add** button at the right of the **Variables** section, new variables can be configured.

![New variable](/guides/images/users-guide/newvariable.png)

The following fields can be observed:

- **Name:** The name of the variable.
- **Display category:** This field is used to group variables into sections in the visualization. 
- **Index:** Index of the variable in the OD of the device. 
- **Sub-index:** Sub-Index of the variable in the OD of the device.
- **Data type:** The type of the variable (e.g. boolean, unsigned).
- **Access type:** E.g. read only, write only, etc.
- **Unit:** Logical unit of the variable.
- **Show status:** Defines how the variable is shown in the inventory. 
- **Update status:** Defines how the variable is updated in Cumulocity.
- **Send measurement:** Create a measurement when the value of the variable is changed.
- **Raise alarm:** Create an alarm if a given mask matches with the value of the variable ((value & mask) == mask). Therefore, it is possible to raise alarms on single bits of e.g. an Unsigned8 variable, like the Error-Register.
- **Raise event:** Create an event, whenever the value of the variable is changed. 

After adding variables to the new device type, they are listed in the **Variables** section of the device type. All variables are grouped by the given display category, i.e. variables with same category are grouped together.

![category view](/guides/images/users-guide/category.png)

After completing your configuration, click **Save** to save your settings. The device type can be used now to add CANopen devices to the platform. The device type can be updated after creation.

**Importing a device type**

To import a new device type, see the [Exporting and importing device types](#import) section.

> After importing the EDS file, all variables defined in the file are listed in the **Variables** section of the device type. The user can then enrich the imported variable configurations by opening the configuration dialog for each variable (e.g. the missing display category can be set or mappings can be defined).

**Configuring CANopen device data**

To configure CANopen device data navigate to the desired device and switch to the **CANopen** tab.

In the **CANopen communication** section, the following parameters can be configured:

- **Baud rate:** This field must match with the used baud rate in the CANopen network.
- **Polling rate:** The rate at which the agent sends requests to the CANopen devices.
to determine changes in variables.
- **Transmit rate:** The transfer rate, i.e. the rate at which the terminal sends regular
measurements to Cumulocity.

In the **CANopen** section, up to 127 CANopen devices can be added to the gateway as child devices by giving the following parameters:

- **Name:** The name of the device used for visualization.
- **Device type:** The device type of the CANopen device. The user can select from a list of all CANopen device types which are stored in the device database.
- **Node ID:** The CANopen node ID of the device. It is used for addressing the device inside the CANopen network.

> The device type and node ID need to match with the real CANopen device, otherwise setting up the communication is not possible or wrong values will be transmitted.
 
### <a name="import"></a>Exporting and importing device types

To manage device types more conveniently, you can export device types to a file once they are edited in the user interface. The file can be re-imported to  set up other Cumulocity accounts easily or to restore the types from a backup. The import functionality also supports importing ready-made device types provided by device manufacturers.

To export a device type, hover over the device type that you would like to export and click **Export**. Your browser will download a file named "&lt;device type&gt;.json" with the device type definition.

![Export device type](/guides/images/users-guide/fieldbusexport.png)

To import a device type, click **Import** in the top menu bar. This will open a dialog that lets you choose between importing a ready-made device type and uploading a previously exported device type. You can change the name of the device type during import using the **New device type name** field.

![Import device type](/guides/images/users-guide/fieldbusimport.png)