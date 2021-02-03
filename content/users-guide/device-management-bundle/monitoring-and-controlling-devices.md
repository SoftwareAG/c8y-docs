---
weight: 40
title: Monitoring and controlling devices
layout: redirect
---


### <a name="map"></a>Locating devices

Cumulocity IoT provides the option to view all devices in your account on a map.

Click **Map** in the **Devices** menu in the navigator to display a map showing all devices in real time.

Devices are represented as "pins". Click a pin to see the name of the respective device. Click the device name to switch to its device details.

![Device map](/images/users-guide/DeviceManagement/devmgmt-devices-map.png)

### <a name="connection-monitoring"></a>Connection monitoring

In the Device Management application you can monitor the connections to your devices.

This can be done at the level of individual devices (see below) or across multiple devices in a list.

#### To monitor the connection for multiple devices

Open a device list to monitor the connections for multiple devices.

The connection status is represented by arrows in the **Status** column in the device list.

<img src="/images/users-guide/DeviceManagement/devmgmt-devices-connectionstatus.png" alt="Connection Status">

**Send connections**

The top arrow represents the send connection (traffic from the device to Cumulocity IoT). The status for the send connections may be one of:

* Online (data was sent within the required interval)- indicated by a green arrow
* Offline (data was not sent within the required interval) - indicated by a red arrow
* Unknown or not monitored (no interval configured) - indicated by a grey arrow

Hovering over the arrow displays the timestamp of the last request from the device to the server.

When a device is detected to be offline (stops sending data within required interval and top arrow changes to red color), an unavailability alarm is created for the device: "No data received from device within required interval".

**Push connections**

The bottom arrow represents the push connection (from Cumulocity IoT to the device). The status for the push connections may be one of:

* Online (connection established)- indicated by a green arrow
* Offline (connection not established) - indicated by a red arrow
* Not monitored - indicated by a grey arrow

Push connection means the connection from Cumulocity IoT to /notification/operations API, **not** to real-time API.

>**Info:** Connection monitoring is not real time. This means that the displayed connection status will not change immediately after switching off a device. Depending on the used protocol for push connection monitoring this can take a couple of minutes.

<a name="maintenance-mode"></a> **Maintenance mode**

Moreover, the device may be in "Maintenance" mode, indicated by the tool icon in the **Status** column. This is a special connection status indicating that the device is currently being maintained and cannot be monitored. While a device is being maintained, no alarms for that device are raised.

You can turn the maintenance mode on or off for a device through a toggle in the **Connection monitoring** card in its **Info** tab, see below.


#### To monitor the connection of a particular device

Navigate to the **Info** tab of a particular device to monitor the connections of this device. Under **Device status**, the connection status for the device is displayed.

<img src="/images/users-guide/DeviceManagement/devmgmt-devices-deviceinfostatus.png" alt="Device Status">

Below the send connection and push connection status, the time of the last communication is displayed.

> **Info:** "Last communication" and "Last updated" are two entirely different time stamps. "Last communication" indicates when a device has last sent data. "Last updated" indicates when the inventory entry of the device was last updated. This update may have originated from the device, from the web user interface or from another application.

In the  **Required interval** field you can specify an interval. This parameter defines how often you expect to hear from the device. If, for example, you set the required interval to 60, you expect the device at least to communicate once in an hour with Cumulocity IoT. The interval is either set by the device itself, based on the device's knowledge how often it will try to send data, or it is set manually by you.

If an interval is set, you will find the **Maintenance** toggle below it.

With the **Maintenance** toggle you can turn the maintenance mode for the device on or off which is immediately reflected in the connection status.

<img src="/images/users-guide/DeviceManagement/devmgmt-devices-deviceinfomaintenance.png" alt="Device status maintenance">

### <a name="monitoring-services"></a>Service monitoring

Cumulocity IoT distinguishes between connection monitoring and service monitoring. Connection monitoring, as described in the previous section, only indicates if the device is communicating with Cumulocity IoT, it does not automatically indicate if it is functional or not.

Service monitoring indicates if a device is in service. For example, a vending machine is in service if it is ready to sell goods. A vending machine can sell goods using cash money without a connection to Cumulocity IoT. From the perspective of a merchant, it is in service. Similar, if you switch off the power on a gateway, the devices behind the gateway can still continue to work.

Cumulocity IoT considers a device to be in service while there is no critical, unresolved alarm present for the machine. This is displayed as a share of time such an alarm was present. If a machine didn't have any critical alarms whatsoever during a time period, it was 100% in service. If half of the time there was some critical, unresolved alarm, the machine was 50% in service.

While a machine is offline, Cumulocity IoT assumes by default

* that the machine continues to stay in service during the connection outage, if this was the status before it lost connection.
* that the machine continues to stay out of service, if this was the status before it lost connection.

There may be exceptions from this rule. If your vending machines rely exclusively on cashless payment, losing the connection to the network means that your machine is out of service and stops selling. In this case, unavailability alarms must be set in the [Administration application](/users-guide/administration#reprio-alarms) which have CRITICAL severity instead of MAJOR severity.

Cumulocity IoT displays service availability at the level of individual devices and across all devices.

#### To view the service monitoring of a particular device

Click the **Service monitoring** tab in the details of a particular device to check the service monitoring of this device.

#### To view the service monitoring across all devices

Click **Service monitoring** in the **Device** menu in the navigator to display the overall service across all devices.

![Service monitoring](/images/users-guide/DeviceManagement/devmgmt-devices-servicemonitoring.png)

The **Service monitoring** page shows the availability percentage of devices for the last 24 hours, last 7 days and last 30 days.


### <a name="alarm-monitoring"></a>Working with alarms

Devices can raise alarms to indicate that there is a problem requiring an intervention.

#### To view alarms

Cumulocity IoT displays alarms at the level of individual devices and across all devices:

* To check the alarms for all devices, click **Alarms** in the **Overview** menu in the navigator.
* To check the alarms of a particular device, switch to the **Alarm** tab in the details of this device.

![Alarms page](/images/users-guide/DeviceManagement/devmgmt-alarms.png)

By default,

* only unresolved alarms are shown. If you turn on **Show cleared alarms** at the right of the top menu bar, you will see the entire alarm history.
* alarms are shown as coming in from the devices in real time. Click **Realtime** in the top menu bar to disable real-time updates.

Alarms are classified according to their severity. Cumulocity IoT includes four different alarm types:

|Severity|Description|
|:---|:--|
|CRITICAL|The device is out of service and should be fixed immediately.
|MAJOR|The device has a problem that should be fixed.
|MINOR|The device has a problem that may be fixed.
|WARNING|There is a warning.

The **Alarm** tab is split into four sections corresponding to these alarm types.

By clicking one of the buttons at the top, the corresponding section will be hidden. Click it again to show the section again.

Within each section, the alarms are sorted by their occurrence, displaying the most recent alarm first.

In each row, the following information for an alarm is provided:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Info</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Severity</td>
<td align="left">One of CRITICAL, MAJOR, MINOR, WARNING (see above).</td>
</tr>
<tr>
<td align="left">Count</td>
<td align="left">The number of times this alarm was sent by the device. Only one alarm of a particular type can be active for a certain device. If another alarm of the same type is sent by the device, the number is increased by 1.</td>
</tr>
<tr>
<td align="left">Description</td>
<td align="left">An arbitrary text describing the alarm.</td>
</tr>
<tr>
<td align="left">Status</td>
<td align="left">The status of the alarm. An alarm can be: <br> <strong>Active</strong>: When it was raised and nobody is so far working on the alarm. <br><strong>Acknowledged</strong>: When someone changed the status to “Acknowledged” to indicate that someone is working on the alarm.<br><strong>Cleared</strong>: When either someone manually set the status to “clear” or when the device detected by itself that the problem has gone.</td>
</tr>
<tr>
<td align="left">Last occurrence</td>
<td align="left">Timestamp of the last occurrence of the alarm (device time).</td>
</tr>
<tr>
<td align="left">Device</td>
<td align="left">The name of the device. Clicking the name leads you to the detailed view of the device.</td>
</tr>
</tbody>
</table>

Click the arrow on the right of a row to expand it and display further details on the alarm.

* **Status**: Providing further information on the alarm status and showing the type of the alarm. The type info is used for duplicating alarms and for configuring the priority of alarms in the [Administration application](/users-guide/administration#reprio-alarms).
* **Change Log**: Providing the server time when the alarm was created, which may differ from the device time.

#### To change the status of an alarm

To change the status of an alarm, hover over it and click the button for the desired status or click the menu icon and select the desired status.

![Alarm change status](/images/users-guide/DeviceManagement/devmgmt-alarms-status.png)

It is also possible to change the status of all alarms to "clear" at once. Click **Clear all** in the top menu bar, to clear all alarms of the selected severities.

<!-- Seems to be no longer relevant
* **Additional information**: An alarm can contain arbitrary additional information provided by the device.
* **Audit log**: Along with the alarm, a log of changes to the alarm is stored. This creates an alarm history with various data. -->

### <a name="operation-monitoring"></a>Working with operations

Operations are used to remotely control devices.

#### To view operations

You can view operations at the level of individual devices and across all devices:

* To view the operations for all devices, click **Device control** in the **Overview** menu in the navigator.
* To view the operations of a particular device, switch to the **Control** tab in the details of this device.

![Device Control](/images/users-guide/DeviceManagement/devmgmt-devicecontrol.png)

Operations can be in one of the following four states:

|State|Description|
|:---|:--|
|PENDING|The operation has just been created and is waiting for the device to pick it up.
|EXECUTING|The operation has been picked up by the device and is being executed.
|SUCCESSFUL|The operation has been successfully executed by the device.
|FAILED|The operation could not be executed by the device.

In each row, the following information for an operation is provided:

|Info|Description|
|:---|:---|
|Status|One of PENDING, EXECUTING, SUCCESSFUL, FAILED (see above).
|Name|Name of the operation.
|Device|The name of the device. Clicking the name leads you to the detailed view of the device.

Clicking a row expands it and displays further details on the operation.

* **Details**: Providing information on the operation name and status. In case of status = FAILED the reason for the failure is provided.
* **History of Changes**: Providing information on the past changes of the operation.

![Operation Details](/images/users-guide/DeviceManagement/devmgmt-devicecontrol-history.png)


By clicking one of the state buttons at the top, the corresponding operations will be hidden. Click it again to show the operations again.

Click **Realtime** at the right of the top menu bar to see operations coming in from the devices in realtime.

>**Info:** Operations are listed in descending time order. Operations are executed strictly according to this order.

#### To create and execute operations

Operations for a specific device are created and executed in the **Shell** tab of the device, see [Device details > Shell](/users-guide/device-management#shell).

>**Important:** When using Cumulocity IoT to remotely operate machinery, make sure that all remote operations follow the safety standards and do not cause any harm.

##### <a name="bulk-operations"></a>To execute bulk operations

For easier handling of devices, Cumulocity IoT offers bulk operations. With bulk operations you can at once execute operations for each device within one group.

To execute bulk operations for a group, follow these steps:

1. Select a device and open the **Control** tab.
2. Create an operation.
3. Hover over the operation you want to execute.
4. Click the menu icon and then click **Execute for whole group**.

The operation will be executed for all devices in the group.

![Execute bulk operations](/images/users-guide/DeviceManagement/devmgmt-devicecontrol-bulk.png)

In order to view the status and progress of your operations, simply select the desired group and click the **Bulk operations** tab.

![Bulk operations tab](/images/users-guide/DeviceManagement/devmgmt-bulkoperations.png)

##### <a name="bulk-operations"></a>To edit bulk operations

1. Hover over the bulk operation you want to edit, click the menu icon and then click **Edit operation schedule**.
3. In the resulting dialog box you may change the **Start date** and **Delay** values.
4. To change operation details, click **Show operation details**.
5. Click **Reschedule** to apply your changes.

The changes will be applied to the bulk operation accordingly.

![Edit bulk operations](/images/users-guide/DeviceManagement/devmgmt-bulkoperations-reschedule.png)

##### <a name="bulk-operations"></a>To delete bulk operations

Hover over the bulk operation you want to delete, click the menu icon, and then click **Cancel operation**.

### <a name="events-all"></a>Troubleshooting devices

Troubleshooting devices at a more detailed level can be done with the help of events. Events are low-level messages sent by devices that are usually used for application-specific processing. For example, a vending device sends its real-time sales in the form of events.

#### To view events

Cumulocity IoT displays events at the level of individual devices and across all devices:

* To view the events for all devices, click **Events** in the **Overview** menu in the navigator.
* To view the events of a particular device, switch to the **Events** tab in the details of this device.

![Events](/images/users-guide/DeviceManagement/devmgmt-events.png)

Per default, events are shown as coming in from the devices in real time. To disable real-time updates, click **Realtime** at the right of the top menu bar.

For each event, the following information is provided:

|Info|Description|
|:---|:---|
|Timestamp|Timestamp when the event has been executed.
|Name|Name of the event.
|Device|The name of the device sending the event. Clicking the name leads you to the detailed view of the device.

In the event list, the latest entry is displayed on top.

Clicking a row expands it and displays further details on the event (as type and position of the device).

Since devices may send large amounts of event data, you can filter the data to be displayed by date.

Select a start date and an end date from the fields in the top menu bar and click **Apply** to apply the filter. Click **Clear** to clear the filter again.
