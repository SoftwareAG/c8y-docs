---
weight: 40
title: Working with alarms
layout: redirect
---

Devices can raise alarms to indicate that there is a problem requiring an intervention.

### To view alarms {#to-view-alarms}

{{< product-c8y-iot >}} displays alarms at the level of individual devices and across all devices:

* To check the alarms for all devices, click **Alarms** in the **Overview** menu in the navigator.
* To check the alarms of a particular device, switch to the **Alarm** tab in the details of this device.

![Alarms page](/images/users-guide/DeviceManagement/devmgmt-alarms.png)

By default,

* only unresolved alarms are shown. If you turn on **Show cleared alarms** at the right of the top menu bar, you will see the entire alarm history.
* alarms are shown as coming in from the devices in real time. Click **Realtime** in the top menu bar to disable real-time updates.

Alarms are classified according to their severity. {{< product-c8y-iot >}} includes four different alarm types:

|Severity|Description|
|:---|:--|
|CRITICAL|The device is out of service and should be fixed immediately.
|MAJOR|The device has a problem that should be fixed.
|MINOR|The device has a problem that may be fixed.
|WARNING|There is a warning.

The **Alarm** tab is split into four sections corresponding to these alarm types.

In the top menu bar, buttons are provided to filter for severity. By clicking a button, the corresponding section will be hidden. Click it once more to make it visible again.

{{< c8y-admon-info >}}
The number provided on the buttons in the top menu bar refers to the number of active alarms for the given severity, as opposed to the counter provided as red circle next to an active alarm, which shows the number of times this same alarm has occurred (see also the table below).
{{< /c8y-admon-info >}}

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
<td align="left">Count (provided as number in a red circle) </td>
<td align="left">The number of times this alarm was sent by the device. Only one alarm of a particular type can be active for a certain device. If another alarm of the same type is sent by the device, the number is increased by 1.</td>
</tr>
<tr>
<td align="left">Description</td>
<td align="left">An arbitrary text describing the alarm.</td>
</tr>
<tr>
<td align="left">Status</td>
<td align="left">The status of the alarm. An alarm can be: <br> <strong>Active</strong>: When it was raised and nobody is so far working on the alarm. <br><strong>Acknowledged</strong>: When someone changed the status to "Acknowledged" to indicate that someone is working on the alarm.<br><strong>Cleared</strong>: When either someone manually set the status to "clear" or when the device detected by itself that the problem has gone.</td>
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

* **Status**: Providing further information on the alarm status and showing the type of the alarm. The type info is used for duplicating alarms and for configuring the priority of alarms in [Alarm mapping](/standard-tenant/alarm-mapping/).
* **Change Log**: Providing the server time when the alarm was created, which may differ from the device time.

### To change the status of an alarm {#to-change-the-status-of-an-alarm}

To change the status of an alarm, hover over it and click the button for the desired status or click the menu icon and select the desired status.
It is also possible to change the status of all alarms to "clear" at once. Click **Clear all** in the top menu bar, to clear all alarms of the selected severities.
