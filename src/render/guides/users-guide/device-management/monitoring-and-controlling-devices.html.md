---
order: 40
title: Monitoring and controlling devices
layout: redirect
---


### <a name="map"></a>Locating devices

Cumulocity provides the option to view all devices in your account on a map.

Click **Map** in the **Devices** menu in the navigator to display a map showing all devices in realtime. 

Devices are represented as "pins". Click a pin to see the name of the respective device. Click the device name to switch to the device details. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_Map.png" alt="Device Map" style="max-width: 100%">

### <a name="connection-monitoring"></a>Connection monitoring

In the Device Management application you have the option to monitor the connections to your devices. 

This can be done at the level of individual devices (see below) or across multiple devices in a list.

To monitor the connections for multiple devices, open any device list.

The connection status is represented by arrows in the **Status** column in the device list.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_ConnectionStatus.png" alt="Connection Status" style="max-width: 100%">

**Send connections**

The top arrow represents the Send connection (traffic from the device to Cumulocity). The status for the Send connections may be one of:

* Online (data was sent within the required interval)- indicated by a green arrow
* Offline (data was not sent within the required interval) - indicated by a red arrow
* Unknown or not monitored (no interval configured) - indicated by a grey arrow

Hovering over the arrow displays the timestamp of the last request from the device to the server. 

When a device is detected to be offline (stops sending data within required interval and top arrow changes to red color), an unavailability alarm is created for the device reading "No data received from device within required interval".

**Push connections**

The bottom arrow represents the Push connection (from Cumulocity to the device). The status for the Push connections may be one of:

* Online (connection established)- indicated by a green arrow
* Offline (connection not established) - indicated by a red arrow
* Not monitored - indicated by a grey arrow

>**Info**: The Push connection means the connection from Cumulocity to /devicecontrol/notifications API, **not** to realtime API.

**Maintenance mode**

Moreover, the device may be in "Maintenance" mode, indicated by the tool icon in the **Status** column. This is a special connection status indicating that the device is currently being maintained and cannot be monitored. While a device is being maintained, no alarms for that device are raised. 

You can turn maintenance mode on or off for a device through a slider in the **Connection monitoring** card in its **Info** tab. 


**Connection monitoring in the "Info" tab**

To monitor the connections of a particular device, go to the **Info** tab of this device. Under **Device status**, the connection status for the device is displayed. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_DeviceInfoStatus.png" alt="Device Status" style="max-width: 50%">

Below the send connection and push connection status, the time of the last communication is displayed. 

> **Info**: "Last communication" and "Last updated" are two entirely different time stamps. "Last communication" indicates when a device has last sent data. "Last updated" indicates when the inventory entry of the device was last updated. This update may have originated from the device, from the web user interface or from another application.

In the  **Required interval** field you can specify an interval. This parameter defines how often you expect to hear from the device. If, for example, you set the required interval to 60, you expect the device at least to communicate once in an hour with Cumulocity. The interval is either set by the device itself, based on the device's knowledge how often it will try to send data, or it is set manually by you.

If an interval is set, you will find the **Maintenance** slider below it.

With the **Maintenance** slider you can turn the maintenance mode for the device on or off which is immediately reflected in the connection status. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_DeviceInfoStatusMaintenance.png" alt="Device status maintenance" style="max-width: 50%">

>**Info**: Connection monitoring is not realtime. This means that the connection status will not change immediately when you switch off a device. Depending on your network, it may take about 20 minutes until a broken connection is discovered, since the network will retry sending data for a significant amount of time.

### <a name="monitoring-services"></a>Service monitoring

Cumulocity distinguishes between connection monitoring and service monitoring. Connection monitoring, as described in the previous section, only indicates if the device is communicating with Cumulocity, it does not automatically indicate if it is functional or not.

Service monitoring indicates if a device is in service. For example, a vending machine is in service if it is ready to sell goods. A vending machine can sell goods using cash money without a connection to Cumulocity. From the perspective of a merchant, it is in service. Similar, if you switch off the power on a gateway, the devices behind the gateway can still continue to work.

Cumulocity considers a device to be in service while there is no critical, unresolved alarm present for the machine. This is displayed as a share of time such an alarm was present. If a machine didn't have any critical alarms whatsoever during a time period, it was 100% in service. If half of the time there was some critical, unresolved alarm, the machine was 50% in service.

While a machine is offline, Cumulocity assumes by default 

* that the machine continues to stay in service during the connection outage, if this was the status before it lost connection.
* that the machine continues to stay out of service, if this was the status before it lost connection.

There may be exceptions from this rule. If your vending machines rely exclusively on cashless payment, losing the connection to the network means that your machine is out of service and stops selling. In this case, unavailability alarms must be set in the [Administration application](/guides/users-guide/administration#reprio-alarms) which have CRITICAL severity instead of MAJOR severity.

Cumulocity displays service availability at the level of individual devices and across all devices. 

To check the service monitoring of this specific device, click the **Service monitoring** tab in the details of a particular device.

To display the overall service across all devices, click **Service monitoring** in the navigator.
 
![Service monitoring](/guides/images/users-guide/servicemonitoring.png)

The **Service monitoring** page shows the availability percentage of devices for the last day, last week and last month. 


### <a name="alarm-monitoring"></a>Working with alarms

Devices can raise alarms to indicate that there is a problem requiring an intervention. 

Cumulocity displays alarms at the level of individual devices and across all devices:

* Click **Alarms** in the **Overview** menu in the navigator, to check the alarms for all devices. 
* Switch to the **Alarm** tab in the details of a particular device, to check the alarms of this specific device.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-alarm-device.png" alt="Alarms" style="max-width: 100%">

By default, 

* only unresolved alarms are shown. If you turn on **Show cleared alarms** at the right of the top menu bar, you will see the entire alarm history.
* alarms are shown as coming in from the devices in realtime. Click **Realtime** in the top menu bar to disable realtime updates.

Alarms are classified according to their severity. Cumulocity includes four different alarm types:

|Severity|Description|
|:---|:--|
|Critical|The device is out of service and should be fixed immediately.
|Major|The device has a problem that should be fixed.
|Minor|The device has a problem that may be fixed.
|Warning|There is a warning.

The **Alarm** tab is split into four sections corresponding to these alarm types.

By clicking one of the buttons at the top, the corresponding section will be hidden. Click it again to show the section again.
 
Within each section, the alarms are sorted by their occurrence, displaying the most recent alarm first.

In each row, the following information for an alarm is provided:

|Info|Description|
|:---|:---|
|Severity|One of critical, major, minor, warning (see above).
|Count|The number of times this alarm was sent by the device. Only one alarm of a particular type can be active for a certain device. If another alarm of the same type is sent by the device, the number is increased by 1.
|Description|An arbitrary text describing the alarm.
|Status|The status of the alarm. An alarm can be: <br/> **Active**: When it was raised and nobody is so far working on the alarm. <br/>**Acknowledged**: When someone changed the status to "Acknowledged" to indicate that someone is working on the alarm.<br/>**Cleared**: When either someone manually set the status to "Clear" or when the device detected by itself that the problem has gone.
|Last occurrence|Timestamp of the last occurrence of the alarm (device time).
|Device|The name of the device. Clicking the name leads you to the detailed view of the device.

Click the arrow on the right of a row to expand it and display further details on the alarm.

* **Status**: Providing further information on the alarm status and showing the type of the alarm. The type info is used for duplicating alarms and for configuring the priority of alarms in the [Administration application](/guides/users-guide/administration#reprio-alarms).
* **Change Log**: Providing the server time when the alarm was created, which may differ from the device time.

To change the status of an alarm, hover over it and click the button for the desired status or click the menu icon and from the context menu select the desired status.

![Alarm change status](/guides/images/users-guide/DeviceManagement/devmgmt-alarm-change-status.png)

It is also possible to change the status of all alarms to "clear" at once. Click **Clear all** in the top menu bar, to clear all alarms of the selected severities.

<!-- Seems to be no longer relevant
* **Additional information**: An alarm can contain arbitrary additional information provided by the device.
* **Audit log**: Along with the alarm, a log of changes to the alarm is stored. This creates an alarm history with various data. -->

### <a name="operation-monitoring"></a>Working with operations

Operations are used to remote control devices. 

Cumulocity displays operations at the level of individual devices and across all devices:

* Click **Device control** in the **Overview** menu in the navigator to see the operations for all devices. 
* * Switch to the **Control** tab in the details of a particular device to see the operations of this specific device.

![Device Control](/guides/images/users-guide/DeviceManagement/DevMgmt_DeviceControl.png)

Operations can be in any of four states, indicated by meaningful icons:

|State|Description|
|:---|:--|
|Pending|The operation has just been created and is waiting for the device to pick it up.
|Executing|The operation has been picked up by the device and is being executed.
|Successful|The operation has been successfully executed by the device.
|Failed|The operation could not be executed by the device.

By clicking one of the state buttons at the top, the corresponding operations will be hidden. Click it again to show the operations again.

Click **Realtime** at the right of the top menu bar to see operations coming in from the devices in realtime.

Operations are listed in descending time order. Operations are executed strictly according to this order.

For each operation, the following information is provided:

|Info|Description|
|:---|:---|
|Status|One of pending, executing, successful, failed (see above).
|Name|Name of the operation.
|Device|The name of the device. Clicking the name leads you to the detailed view of the device.

Clicking a row expands it and displays further details on the operation.

* **Details**: Providing information on the operation name and status. In case of status = FAILED the reason for the failure is provided. 
* **History of Changes**: Providing information on the past changes of the operation.

![Operation Details](/guides/images/users-guide/DeviceManagement/DevMgmt_OperationDetails.png)

<a name="bulk-operations"></a>**Bulk Operations**

For easier handling of devices, Cumulocity offers bulk operations. With bulk operations you can at once execute operations for each device within one group.

To execute bulk operations for a group, follow these steps:

1. Select a device and open the **Control** tab.
2. Create an operation.
3. Hover over the operation you want to execute.
4. Click the menu icon.
5. In the context menu click **Execute for whole group**.

![Execute bulk operations](/guides/images/users-guide/executebulkoperations.png)

In order to view the status and progress of your operations, simply select the desired group and click the **Bulk operations** tab.

![Bulk operations tab](/guides/images/users-guide/DeviceManagement/DevMgmt_BulkOperations.png)

To edit a bulk operation, follow these steps:

1. Hover over the bulk operation you want to edit and click the menu icon. 
2. In the context menu click **Edit operation schedule**.
3. In the upcoming window you may change the **Start date** and **Delay** values.
4. To change operation details, click **Show operation details**. 
5. Click **Reschedule** to apply your changes. 

![Edit bulk operations](/guides/images/users-guide/DeviceManagement/DevMgmt_BulkOperationsEdit.png)

To delete a bulk operation, hover over the bulk operation you want to delete and click the menu icon. In the context menu, click **Cancel operation**.

### <a name="events-all"></a>Troubleshooting devices

Troubleshooting devices at a more detailed level can be done with the help of events. Events are low-level messages sent by devices that are usually used for application-specific processing. For example, a vending device sends its realtime sales in the form of events. 

Cumulocity displays events at the level of individual devices and across all devices: 

* To see the events of this specific device, click the **Events** tab.
* To see the operations for all devices, click **Events** in the **Overview** menu in the navigator.
*  
![Events](/guides/images/users-guide/DeviceManagement/DevMgmt_Events.png)

Per default, events are shown as coming in from the devices in realtime. To disable realtime updates, click **Realtime** at the right of the top menu bar.

For each event, the following information is provided:

|Info|Description|
|:---|:---|
|Timestamp|Timestamp when the event has been executed.
|Name|Name of the event.
|Device|The name of the device sending the event. Clicking the name leads you to the detailed view of the device.

In the event list the latest entry is displayed on top.

Clicking a row expands it and displays further details on the event (as type and position of the device).

Since devices may send large amounts of event data, you can filter the data to be displayed by date. 

Select a start date and an end date from the fields in the top menu bar and click the **Filter** button to apply the filter. Click the **Clear** button to clear the filter again.








