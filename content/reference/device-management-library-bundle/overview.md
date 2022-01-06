---
weight: 10
title: Overview
layout: redirect
---

The device management library defines the data structures that are used in {{< product-c8y-iot >}} for device management activities like for example software management and configuration management. The data structures are expressed as fragments that can be used inside managed objects, operations and other resources. More information on the fragment concept can be found in the [{{< product-c8y-iot >}} domain model](/concepts/domain-model/) in the *Concepts guide*.

In the following section you will find descriptions of the most important functionalities of a device, its managed objects and all its corresponding fragments to them. We will explain the relation between the {{< product-c8y-iot >}} UI, the device object managed in our databases and what is being communicated to and from the device itself.

If you are interested in details on exposing the {{< product-c8y-iot >}}´s functionalities through our Rest API, see the [{{< openapi >}}](https://{{< domain-c8y >}}/api/) for further information.

Moreover, see [SmartREST](/reference/smartrest) for more information on SmartREST and a complete list of all SmartREST templates mentioned throughout the following sections.

To start with device management, open the **All devices** tab in the **Devices** menu of the Device Management application. Click on a device in the list to open the device details of this particular device. You will see various tabs and particular information on each of them.

>**Info:** For a detailed explanation of each tab and its related configuration via the UI, see also [Device Management > Device details](/users-guide/device-management/#device-details) in the *User guide*.

![Device details](/images/reference-guide/device-details.png)

This list can be manipulated through the device fragments, i.e. which tabs are shown depends on the capability the device supports. This is mainly operated by one fragment called ```c8y_SupportedOperations```. Based on what is put in the array of this fragment, functionality such as tabs, buttons, etc. are enabled. For example if the ```c8y_SupportedOperations``` fragment contains ```c8y_Firmware```, the firmware tab will be visible in the **Device details** page and the device can manage firmware objects.

#### ```c8y_SupportedOperations``` fragments

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<thead>
<tr>
<th>Fragment</th>
<th>Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="../../reference/device-management-library/#device-info"><code>c8y_Availability</code></a></td>
<td>Holds information about the device’s status and its availability</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#reference"><code>c8y_Command</code></a></td>
<td>Allows the user to carry out interactive sessions with a device</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#configuration"><code>c8y_Configuration</code></a></td>
<td>Contains the complete configuration state of the device including all control characters</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#legacy-file-based-configuration"><code>c8y_ConfigurationDump</code></a></td>
<td>An operation that permits managing binary configuration files of the device</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#install-legacy-configuration"><code>c8y_DownloadConfigFile</code></a></td>
<td>An operation that permits the download of configuration files as binaries</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#firmware"><code>c8y_Firmware</code></a></td>
<td>Contains information on a device’s firmware</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#hardware-information"><code>c8y_Hardware</code></a></td>
<td>Contains basic hardware information for a device, such as make and serial number</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#device-marker"><code>c8y_IsDevice</code></a></td>
<td>A fragment which identifies an object or an event</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#logs"><code>c8y_LogfileRequest</code></a></td>
<td>Request a device to send a log file and view the log file in the log viewer</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#connectivity"><code>c8y_Mobile</code></a></td>
<td>Holds basic connectivity-related information, such as the equipment identifier of the modem (IMEI) in the device or the SIM card (e.g. ICCID)</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#network"><code>c8y_Network</code></a></td>
<td>Sends data to the <strong>Network</strong> tab in the Device Management application and displays the network information</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#tracking"><code>c8y_Position</code></a></td>
<td>Reports the geographical location of an asset in terms of latitude, longitude and altitude</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#device-profile"><code>c8y_Profile</code></a></td>
<td>Announces the target profile</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#device-availability"><code>c8y_RequiredAvailability</code></a></td>
<td>Monitor devices for availability</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#device-restart"><code>c8y_Restart</code></a></td>
<td>Restart a device</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#upload-current-text-configuration"><code>c8y_SendConfiguration</code></a></td>
<td>Allows reloading a configuration through the user interface</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#installed-software"><code>c8y_SoftwareList</code></a></td>
<td>Contains the entire list of software that is installed on the device</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#software-update"><code>c8y_SoftwareUpdate</code></a></td>
<td>Contains a list of software to be installed or uninstalled</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#typed-file-based-configuration"><code>c8y_SupportedConfiguration</code></a></td>
<td>Activates typed file configuration</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#setting-supported-logs"><code>c8y_SupportedLogs</code></a></td>
<td>Holds an array for types a log that a device supports</td>
</tr>
<tr>
<td><a href="../../reference/device-management-library/#upload-current-legacy-configuration"><code>c8y_UploadConfigFile</code></a></td>
<td>An operation that permits the upload of configuration files as binaries</td>
</tr>
</tbody>
</table>
