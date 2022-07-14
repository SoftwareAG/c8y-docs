---
weight: 50
title: Handling LWM2M shell commands
layout: redirect
---


In the **Shell** tab of a device, LWM2M shell commands can be performed. Each command has a different functionality. Find all available placeholders (for example "objectID", "instanceID") and commands with their respective descriptions below:

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
<td align="left">The ID of the instance. Some objects can have multiple instances. For example, "3300" is a temperature sensor object. Each device can have up to 10 sensors. In this case the instance ID would be 3300/1…10 depending on the sensor that you would like to focus.</td>
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
<td align="left">parameters</td>
<td align="left">The optional parameters of the "execute" operation. Must be expressed in plain text and follow the ABNF grammar rule.</td>
</tr>
<tr>
<td align="left">Firmware version</td>
<td align="left">The current version of the firmware.</td>
</tr>
<tr>
<td align="left">Firmware url</td>
<td align="left">The URL from which the new version of the firmware will be downloaded.</td>
</tr>
<tr>
<td align="left">SER</td>
<td align="left">The supported data formats are TLV, TEXT, JSON and OPAQUE.</td>
</tr>
</tbody>
</table>


In the next table you will see all available commands and a brief description of their functionality.

<table>
<col style="width:60%">
<col style="width:40%">
<thead>
<tr>
<th align="left">Command</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">read /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;</td>
<td align="left">Reads a resource path.</td>
</tr>
<tr>
<td align="left">observe /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;</td>
<td align="left">Enables the observe functionality.</td>
</tr>
<tr>
<td align="left">execute /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt; [&lt;parameters&gt;]</td>
<td align="left">Executes a resource on the device with optional parameters.</td>
</tr>
<tr>
<td align="left">write /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt; &lt;value&gt;</td>
<td align="left">Writes value to a resource on the device.</td>
</tr>
<tr>
<td align="left">cancelobservation /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;</td>
<td align="left">Cancels the observation functionality from the desired resource.</td>
</tr>
<tr>
<td align="left">delete /&lt;objectID&gt;/&lt;instanceID&gt;[/&lt;resourceID&gt;]</td>
<td align="left">Deletes a given object/instance/resource.</td>
</tr>
<tr>
<td align="left">discover /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt;</td>
<td align="left">Shows all resources of the given object.</td>
</tr>
<tr>
<td align="left">create /&lt;objectID&gt; [JSON]</td>
<td align="left">Creates a new object. The JSON argument is optional.</td>
</tr>
<tr>
<td align="left">writeattr /&lt;objectID&gt;/&lt;instanceID&gt;/&lt;resourceID&gt; pmin=&lt;sec&gt;&pmax=&lt;sec&gt;&amp;gt=&lt;num&gt;&amp;lt=&lt;num&gt;&st=&lt;num&gt;&cancel
</td>
<td align="left">Writes additional attributes to the object. Typically used for conditional observes.</td>
</tr>
<tr>
<td align="left">fwupdate &lt;Firmware name&gt;;&lt;firmware version&gt;;&lt;firmware_url&gt;</td>
<td align="left">Updates the firmware of the agent.</td>
</tr>
<tr>
<td align="left">serialization &lt;SER&gt;</td>
<td align="left">Sets the data format.</td>
</tr>

</tbody>
</table>

{{< c8y-admon-info >}}
A shell command can also be used to send multiple operations to a LWM2M device at once. To do that, simply enter all instructions with a line break between them. Make sure that the shell command does not carry any leading or trailing white spaces. The LWM2M agent then uses the line break to split a multi-line operation into separate LWM2M shell operations.
{{< /c8y-admon-info >}}

## Shell command lifecycle
The handling of LWM2M shell commands follows the following lifecycle:

1. When a shell command is created the corresponding operation status is set to PENDING. This means that the corresponding CoAP request has not yet been sent to the device.
2. The {{< product-c8y-iot >}} platform processes the shell command. It sends a corresponding CoAP request to the device and updates the operation status to EXECUTING.
3. The next status update depends on the response of the device.
    - *Successful request*: In case the device signals a successful operation using a 2.XX CoAP response code, the operation result is updated and the operation status is turned to SUCCESSFUL.
    - *Failed requests*: If the CoAP request fails with a 4.XX or 5.XX error on the device, the operation is marked as FAILED. The operation result contains a possible response of the device.
    - *Not-responding*: When sending a LWM2M command to a device the {{< product-c8y-iot >}} platform is not precisely aware if the device can be reached using a UDP datagram. If the request times out {{< product-c8y-iot >}} assumes that there is no connectivity. It puts the operation back to PENDING. A redelivery of the operation is triggered as soon as the device sends a registration update or a new LWM2M registration request.
