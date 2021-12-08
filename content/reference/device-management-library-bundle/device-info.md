---
weight: 30
title: Device information
layout: redirect
---

The **Info** tab of a device is a predefined dashboard with several widgets that combine default device information. For example the status widget will get its information from the ```c8y_Availability``` fragment, which holds information about the device's status and when it was last available. More information can be found in [Service monitoring](/users-guide/device-management/#service-monitoring)

![Device status](/images/reference-guide/device-status.png)

### Device marker

 A device is marked in the inventory with a ```c8y_IsDevice``` fragment in its own managed object. Only devices with this fragment appear in the all **All devices** list in the Device Management application.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1"> &#x1f4f1;&#10145; &#65039; update inventory &#10145;&#65039; &#9729;&#65039;</td>
</tr>
<tr>
<td style="text-align:center"><b>PUT</b>
</td>
<td style="text-align:center"><em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_IsDevice": {}
}
```

> **Info:** Devices created through SmartREST 2.0 will automatically contain this fragment.

### Agent marker

In order to receive any operation a device must declare the agent marker fragment in its own managed object. This will enable the platform to send operations to this device and for all child devices in its child hierarchy that don’t carry this fragment themselves.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1"> &#x1f4f1;&#10145; &#65039; update inventory &#10145;&#65039; &#9729;&#65039;</td>
</tr>
<t>
<td style="text-align:center"><b>PUT</b>
</td>
<td style="text-align:center"><em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "com_cumulocity_model_Agent": {}
}
```

> **Info:** Devices created through SmartREST 2.0 will automatically contain this fragment.

### Device restart

Devices capable of restarting remotely can announce this capability by adding the ```c8y_Restart``` operation to the device's own ```c8y_SupportedOperations``` fragment. Then the device details page will enable a restart button within its context menu.

#### Restart operation

Upon clicking the restart button in Device management UI an operation as follows is sent:

<table>
<tbody>
<tr>
<td style="text-align:center">
&#x1f4f1;&#11013;&#65039;receive operation&#11013;&#65039;&#9729;&#65039;
</td>
</tr>
</tbody>
</table>

```
{
  "c8y_Restart": {}
}
```

|Field|Data type|Mandatory|Details|
|----|----|----|----|
|c8y_Restart|Object|Yes|Restart marker fragment, that designates this operation as a restart operation|

The device is expected to perform the following actions:
1. Set the operation status to EXECUTING
2. Perform the requested restart
3. Set the operation status to SUCCESSFUL

**SmartREST example**

1. Device receives command via 510 static response template <br>
  `510,DeviceSerial`
2. Device sets operation status to EXECUTING <br>
  `501,c8y_Restart`
3. Device confirms successful execution by setting operation status to SUCCESSFUL <br>
  `503,c8y_Restart`


### Hardware information

Devices may announce their underlying hardware information to Cumulocity IoT using the ```c8y_Hardware``` fragment in the device’s own managed object.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1"> &#x1f4f1;&#10145; &#65039; update inventory &#10145;&#65039; &#9729;&#65039;</td>
</tr>
<tr>
<td style="text-align:center"><b>PUT</b>
</td>
<td style="text-align:center"><em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_Hardware": {
       "serialNumber": "1234567890",
       "model": "myModel",
       "revision": "1.2.3"
   }
}
```

|Field|Data type|Mandatory|Details|
|----|----|----|----|
|serialNumber|String|No|The hardware serial number of the device.|
|model|String|No|A text identifier of the hardware model.|
|revision|String|No|A text identifier of the hardware revision.|

**SmartREST example**

Upload hardware information using the 110 static template. Usually this can be done once during agent application startup.

`110,1234567890,myModel,1.2.3`
