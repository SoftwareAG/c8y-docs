---
weight: 180
title: Child devices
layout: redirect
---

The child devices tab shows a list of all child devices. It will be available only if the device has any child devices assigned to it.

### Assign child device to parent device

In order to link a device the parent device should post to its inventory API the following request containing the id of the child device.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1">
&#x1f4f1;&#10145; &#65039; add child device &#10145;&#65039; &#9729;&#65039;
</td>
</tr>
<tr>
<td style="text-align:center">
<b>POST</b>
</td>
<td style="text-align:center">
<em>/inventory/managedObjects/{{deviceId}}/childDevices</em>
</td>
</tr>
</tbody>
</table>

```
{
   "managedObject": {
      "id": "28067400"
   }
}
```

|Field|DataType|Mandatory|Details|
|----|----|----|----|
|ManagedObject.id|String|Yes|ID of the child device to link|


**SmartREST2 example**

To add child device to existing device you need to connect as existing device and call child create template:
`101,uniqueChildId,myChildDevice,myChildType`

### Operating a gateway for child devices
Using the agent marker fragment *com_cumulocity_model_Agent* on the parent device, but not on child devices effectively declares the device as a connected gateway for its children. The children are not directly connected to Cumulocity IoT but send and receive data through the device and its integration.

In this case operations for the child devices are delivered to the connected parent device. The parent device then must determine the addressed child device based on the included device ID or other information. Then the command must be forwarded to the correct child.

Our built-in static SmartREST response templates always include a device identifier as first parameter to determine the targeted child device. Here is an example of the 510 static response template for the *c8y_Restart* operation with the device identifier highlighted.

`510,DeviceSerial`

Custom response templates also contain the targeted device's external ID as first parameter. We recommend implementing a similar mechanism there as well.
