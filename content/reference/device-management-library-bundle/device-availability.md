---
weight: 60
title: Device availability
layout: redirect
---

The platform can monitor device availability and connection status. To achieve this the device must communicate its required interval using the *c8y_RequiredAvailability* fragment in the device's own managed . This action activates availability and connection monitoring for the device.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1"> &#x1f4f1;&#10145; &#65039; update inventory &#10145;&#65039; &#9729;&#65039;
</td>
</tr>
<tr>
<td style="text-align:center"> <b>PUT</b> </td>
<td style="text-align:center"> <em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_RequiredAvailability": {
       "responseInterval": 15
   }
}
```

<table>
<colgroup>
<col width="20%">
<col width="10%">
<col width="10%">
<col width="60%">
</colgroup>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>responseInterval</td>
<td>integer</td>
<td>No</td>
<td>Expected response interval of the device in minutes. If it is &lt;= 0 the device is considered in maintenance mode</td>
</tr>
</tbody>
</table>


Usually devices should set their required interval only once during its first connection to the platform with a default value. Later changes can be left to platform users.

**SmartREST2 example**

The static template 117 is provided to set the required availability for SmartREST connected devices. This template can be sent in a fire-and-forget approach during device startup because it doesn't override already existing required availability configuration.

`117,15`

### Availability monitoring

The response interval set in the *c8y_RequiredAvailability* fragment is used as interval in which the platform expects to receive data from the device. If no data is received in this interval the device will be marked as offline and an alarm of type *c8y_UnavailabilityAlarm* will be raised automatically. This alarm will also be cleared automatically when the device sends data again. No further action from the device is necessary.

### Connection monitoring

Cumulocity IoT also provides connection monitoring for devices. When the device establishes a connection where it is able to receive operations the platform considers this device as connected. This applies to HTTP longpolling connection or a MQTT session equally.
