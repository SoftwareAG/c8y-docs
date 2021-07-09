---
weight: 50
title: Handling LWM2M shell commands
layout: redirect
---


In the **Shell** tab of a device, LWM2M shell commands can be performed. Each command has a different functionality. Find all available placeholders (e.g. “objectID”, “instanceID”) and commands with their respective descriptions below:

<table>
<col style="width:30%">
<col style="width:70%">
<thead>
<tr>
<th align="left">Placeholder</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">objectID</td>
<td align="left">The ID of the object.</td>
</tr>
<tr>
<td align="left">instanceID</td>
<td align="left">The ID of the instance. Some objects can have multiple instances. For example, “3300” is a temperature sensor object. Each device can have up to 10 sensors. In this case the instance ID would be 3300/1…10 depending on the sensor that you would like to focus.</td>
</tr>
<tr>
<td align="left">resourceID</td>
<td align="left">The ID of the desired resource. The resources describe the characteristics of each object. All instances of a given object have the same resources, but the value of the resources may be different.</td>
</tr>
<tr>
<td align="left">value</td>
<td align="left">The value to be written to the resource. Must be given using the type of the resource.</td>
</tr>
<tr>
<td align="left">Firmware version</td>
<td align="left">The current version of the firmware.</td>
</tr>
<tr>
<td align="left">Firmware url</td>
<td align="left">The URL from which the new version of the firmware will be downloaded.</td>
</tr>
</tbody>
</table>


In the next table you will see all available commands and a brief description of their functionality.

|Command|Description|
|:------|:----------|
|read /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;|Reads a resource path|
|observe /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;|Enables the observe functionality|
|execute /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;|Executes a resource on the device|
|write /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt; &lt;value&gt;|Writes value to a resource on the device|
|cancelobservation /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;|Cancels the observation functionality from the desired resource|
|delete /&lt;objectID&gt;/&lt;instanceID&gt;[/&lt;resourceID&gt;]|Deletes a given object/instance/resource|
|discover /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;|Shows all resources of the given object|
|create /&lt;objectID&gt; [JSON]|Creates a new object. The JSON argument is optional|
|writeattr /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt; {pmin=&lt;sec&gt;}{&pmax=&lt;sec&gt;}{&greater=&lt;num&gt;}{&less=&lt;num&gt;}{&step=&lt;num&gt;}{&cancel}|Writes additional attributes to the object. Typically used for conditional observes|
|fwupdate /&lt;Firmware name&gt;/&lt;firmware version&gt;/&lt;firmware_url&gt;/|Updates the firmware of the agent|
