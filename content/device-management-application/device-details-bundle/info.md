---
weight: 90
title: Info
layout: redirect
---

The **Info** tab summarizes management-relevant device information in a dashboard.

![Device Info](/images/users-guide/DeviceManagement/devmgmt-devices-infotab.png)

The information is provided on the following cards:

<table>
<col width = 20%>
<col width = 80%>
<thead>
<tr>
<th style="text-align:left">Card</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Notes</td>
<td style="text-align:left">Provides optional notes to inform about current activities. Notes usually may only be edited by an administrator. To add or edit a note, click <strong>Edit</strong>, enter your note or your modifications in the text box and save your edits by clicking the green checkmark at the right of the text box. </td>
</tr>
<tr>
<td style="text-align:left">Device status</td>
<td style="text-align:left">Displays connection-relevant information, as described in detail in <a href="#connection-monitoring" class="no-ajaxy">Connection monitoring</a>. </td>
</tr>
<tr>
<td style="text-align:left">Device and communication</td>
<td style="text-align:left">Shows a data point graph displaying real-time data on particular measurements. Drag the x-axis to move the data point time measurement. To zoom in select a time period, double click to zoom out of the graph. For details on data point graphs, refer to <a href="/users-guide/cockpit#data-explorer" class="no-ajaxy">Using the data explorer</a> in the Cockpit documentation.<br> The following measurements may be shown here: <br>
<strong>Data points</strong>: c8y_Battery.level, c8y_SignalStrength.rssi, c8y_MemoryMeasurement.Used, c8y_CPUMeasurement.Workload, c8y_NetworkStatistics.Upload, c8y_SignalStrength.RCSP, c8y_SignalStrength.ber, c8y_SignalStrength.ECN0, c8y_NetworkStatistics.Download, c8y_MemoryMeasurement.Total <br>
<strong>Alarms</strong>: c8y_UnavailabilityAlarm<br>
<strong>Events</strong>: c8y_LocationUpdate</td>
</tr>
<tr>
<td style="text-align:left">Device data</td>
<td style="text-align:left">Displays general information on the device (ID, name, type, owner, last update). The fields <strong>Name</strong> and <strong>Type</strong> can be edited. Below the general device information, the card shows status information for active alarms, availability and connection (not editable). Moreover, various device-specific information like hardware and firmware is displayed here (editable).</td>
</tr>
<tr>
<td style="text-align:left">Active, critical alarms</td>
<td style="text-align:left">Shows the active critical alarms for the device.</td>
</tr>
<tr>
<td style="text-align:left">Groups assignment</td>
<td style="text-align:left">Displays the groups the device belongs to. Moreover you can add the device to groups here or unassign it from groups, see <a href="#grouping-devices" class="no-ajaxy">Grouping devices</a>.</td>
</tr>
<tr>
<td style="text-align:left">Location</td>
<td style="text-align:left">Shows the location of a device on a map as reported by the device or as manually set, see <a href="#location" class="no-ajaxy">Location</a>.</td>
</tr>
</tbody>
</table>
