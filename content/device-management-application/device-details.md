---
weight: 31
title: Device details
layout: bundle
section:
  - device_management
---
For each device, detailed information is available. The kind of information actually provided for a device depends on the device type, device usage and the configuration of your user interface.

To view detailed information on the device, click a device in the device list.

![Device info](/images/users-guide/DeviceManagement/devmgmt-devices-info.png)

The device details are divided into tabs. The number of tabs is dynamic and depends on the available information, that means, tabs are only displayed if the kind of information is available for the particular device. For a detailed description of the operations and fragments related to each device detail tab see the [Device management library](/reference/device-management-library/#overview) in the *Reference guide*.

Initially the **Info** tab is shown, which offers general information on a device and is available for each device.

Each device at least shows the following tabs: **Info**, **Alarms**, **Control**, **Events**, **Availability**, **Identity** (also see the tab list below).

The following tabs are the most common ones, each described in detail in a separate section:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup><thead>
<tr>
<th align="left">Tab</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lora-actility">Actility LoRa</a></td>
<td style="text-align:left">Provides details for devices connected via Actility LoRa. For details, see <a href="../../protocol-integration/lora-actility">Actility LoRa</a>.</td>
</tr>
<tr>
<td align="left"><a href="#alarms">Alarms</a></td>
<td align="left">Provides information on the alarms for a device. See <a href="#alarm-monitoring">Working with alarms</a>. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#availability">Availability</a></td>
<td align="left">Allows the availability monitoring of machines. For details, see <a href="#monitoring-availability">Availability</a>. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#child-devices">Child Devices</a></td>
<td align="left">Lists devices being connected to the current device.</td>
</tr>
<tr>
<td align="left"><a href="#config">Configuration</a></td>
<td align="left">Allows manual configuration of device parameters and settings entered in a text format. For details, see <a href="#configuration-repository">Managing configurations</a> for binary configuration.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../users-guide/device-management/#connectivity">Connectivity</a></td>
<td style="text-align:left">Provides SIM management functionality. For details, see <a href="../../users-guide/device-management/#connectivity">Connectivity</a>.</td>
</tr>
<tr>
<td align="left"><a href="#control">Control</a></td>
<td align="left">Displays operations being sent to a device. Also refer to <a href="#operation-monitoring">Working with operations</a>. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#dev-profile">Device profile</a></td>
<td align="left">Shows the details of the currently installed profile on a device.</td>
</tr>
<tr>
<td align="left"><a href="#events">Events</a></td>
<td align="left">Displays events related to a device, helpful for low-level troubleshooting. Also refer to <a href="#events-all">Troubleshooting devices</a>. Available for each device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/cloud-fieldbus">Fieldbus</a></td>
<td style="text-align:left">Provides details for fieldbus devices. For details, see <a href="../../protocol-integration/cloud-fieldbus">Cloud Fieldbus</a>.</td>
</tr>
<tr>
<td align="left"><a href="#firmware">Firmware</a></td>
<td align="left">Manages firmware of a device. See <a href="#managing-firmware">Managing firmware on a device</a>.</td>
</tr>
<tr>
<td align="left"><a href="#identity">Identity</a></td>
<td align="left">Displays identities recorded for a particular device. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#info">Info</a></td>
<td align="left">Provides general information on a device. Available for each device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lwm2m">LWM2M</a></td>
<td style="text-align:left">Provides details for devices connected via LightweightM2M. For details, see <a href="../../protocol-integration/lwm2m">LightweightM2M</a>.</td>
</tr>
<tr>
<td align="left"><a href="#location">Location</a></td>
<td align="left">Shows the location of a device, if available.</td>
</tr>
<tr>
<td align="left"><a href="#logs">Logs</a></td>
<td align="left">Allows requesting log information for a device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lora-loriot">LORIOT LoRa</a></td>
<td style="text-align:left">Provides details for devices connected via LORIOT LoRa. For details, see <a href="../../protocol-integration/lora-loriot">LORIOT LoRa</a> for more details.</td>
</tr>
<tr>
<td align="left"><a href="#measurements">Measurements</a></td>
<td align="left">Provides a default visualization of numeric data provided by the device in the form of charts.</td>
</tr>
<tr>
<td align="left"><a href="#network">Network</a></td>
<td align="left">Displays network information for a device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/opcua">OPC UA server</a></td>
<td style="text-align:left">Provides details for devices connected via an OPC UA server. For details, see <a href="../../protocol-integration/opcua">OPC UA</a>.</td>
</tr>
<tr>
<td align="left"><a href="#services">Services</a></td>
<td align="left">Provides an overview of the services running on a device.</td>
</tr>
<tr>
<td align="left"><a href="#shell">Shell</a></td>
<td align="left">Enables you to interact with remote devices via a command prompt.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/sigfox">Sigfox</a></td>
<td style="text-align:left">Provides details for devices connected via Sigfox. For details, see <a href="../../protocol-integration/sigfox">Sigfox</a> for more details.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/snmp">SNMP</a></td>
<td style="text-align:left">Provides details for devices connected via SNMP. For details, see <a href="../../protocol-integration/snmp">SNMP</a>.</td>
</tr>
<tr>
<td align="left"><a href="#software">Software</a></td>
<td align="left">Manages software installed on a device. For details, see <a href="#managing-software">Managing software on a device</a>.</td>
</tr>
<tr>
<td align="left"><a href="#tracking">Tracking</a></td>
<td align="left">Shows the movement of a device, if available.</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
Several individual tabs, which you do not find listed here, may be described in a different context in another section of the {{< product-c8y-iot >}} documentation. Use the Search function to switch to the relevant sections. A detailed description on the **Modbus** tab, for example, can be found in [Cloud fieldbus](/protocol-integration/cloud-fieldbus) in the *Protocol integration guide*.
{{< /c8y-admon-info >}}

Below the name, a list of breadcrumbs is displayed. If the device is part of an asset hierarchy (such as a group), you can use the breadcrumbs to easily navigate up that hierarchy. Since devices can be part of multiple hierarchies, several rows of breadcrumbs may be shown.

Depending of the type and usage of a device, further actions are provided in an action menu when clicking **More...** at the right of the top menu bar.

![More menu](/images/users-guide/DeviceManagement/devmgmt-devices-more.png)

Details on these additional menu items are provided where required.
