---
weight: 120
title: Firmware
layout: redirect
---

The **Firmware** tab displays currently installed firmware of a device and allows users to install a different version. A device can have only one firmware installed at a time. Cumulocity IoT does not provide a concrete definition of what a firmware is. This depends on the device and its use case. Typical use cases are: Operating system, micro controller firmware, or BIOS.

Firmware can be installed with a full installation, or with a patch. Which variant is sent to the device depends on how the firmware was created in the firmware repository.

#### Installed firmware

First a device should announce its current state to the platform. The installed firmware should be entered into the ```c8y_Firmware``` fragment into the device's own managed object. A device should upload its current state to Cumulocity IoT during startup and any time a local change is detected. This includes cases where an update was triggered remotely.

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
<td style="text-align:center"> <b>PUT</b> </td>
<td style="text-align:center"> </em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_Firmware": {
       "name": "ubuntu core",
       "version": "20.04.2",
       "url": "http://test.com"
   }
}
```

| Field | DataType | Mandatory | Details |
|----|----|----|----|
|name|String|Yes|Name of the firmware package.|
|version|String|Yes|A version identifier of the firmware.|
|url|String|No|A URL pointing to the location where the firmware file was obtained from.|

Similar to software the url field is optional and may be omitted by devices.

**SmartREST example**

The 115 static template is available for devices to communicate their currently installed firmware state.

`115,ubuntu core,20.04.3,http://test.com`

### Installing a firmware image

When a user selects a complete firmware image for installation, an operation with a similar `c8y_Firmware` fragment as found in the device managed object is created. This operation should be considered as the desired state, that should be achieved by the device.

<table>
<tbody>
<td style="text-align:center" colspan="1" rowspan="1">
&#x1f4f1;&#11013;&#65039; receive operation &#11013;&#65039;&#9729;&#65039;
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_Firmware": {
       "name": "ubuntu core",
       "version": "20.04.3",
       "url": "http://test.com"
   }
}
```

|Field|DataType|Mandatory|Details|
|----|----|----|----|
|name|String|Yes|Name of the firmware package.|
|version|String|Yes|A version identifier of the firmware.|
|url|String|Yes|A URL pointing to the location where the firmware file should be downloaded from.|

The device is expected to perform the following actions:
1. Set operation status to EXECUTING
2. Install firmware image
3. Update the installed firmware state in the device’s own managed object
4. Set operation status to SUCCESSFUL

Updating a devices often changes fundamental system components. This operation should always be considered as a critical operation. The device must ensure that all of its connection parameters to Cumulocity IoT are preserved through the upgrade and that connectivity can be resumed afterwards. We recommend that the device uses and A/B firmware switching mechanism with a possibility to roll back if necessary.

**SmartREST example**

The 515 static response template is designed to deal with installing firmware images

1. Receive c8y_Firmware (image) operation <br>
  `515,deviceSerial,ubuntu core,20.04.3,http://test.com`
2. Set operation status to EXECUTING <br>
  `501,c8y_Firmware`
3. Install firmware image
4. Update device’s installed firmware state in inventory <br>
  `115,ubuntu core,20.04.3,http://test.com`
5. Set operation status to SUCCESSFUL <br>
  `503,c8y_Firmware`

### Installing a firmware patch

In case a user selects a firmware patch to install on a device, a `c8y_Firmware` operation is created. In this case two additional parameters are included to help with installation of a firmware patch. The device agent is responsible to execute a firmware patch process instead of a regular installation.

<table>
<tbody>
<td style="text-align:center">
&#x1f4f1;&#11013;&#65039; receive operation &#11013;&#65039;&#9729;&#65039;
</td>
</tbody>
</table>

```
{
   "c8y_Firmware": {
       "name": "ubuntu core",
       "version": "20.04.4",
       "url": "http://test.com",
       "dependency": "20.04.3",
       "isPatch": true
   }
}
```

|Field|DataType|Mandatory|Details|
|----|----|----|----|
|name|String|Yes|Name of the firmware.|
|version|String|Yes|A version identifier of the firmware.|
|url|String|Yes|A url pointing to the location of the firmware file.|
|dependency|String|Yes|Version of the firmware the patch depends on.|
|isPatch|Boolean|Yes|Indicator showing that this firmware package is a patch.|


The device is expected to perform the following actions:
1. Set operation status to EXECUTING
2. Verify if the currently installed firmware version is equal to the dependency version
3. Install firmware patch
4. Update the installed firmware state in the device’s own managed object
5. Set operation status to SUCCESSFUL

**SmartREST example**

The 525 static response template is designed to deal with installing firmware patches. It works very similarly to the 515 template, it just adds the dependency parameter as fifth parameter. The fact that a patch instead of a complete image should be installed is implicit because this template is only triggered for patches.
1. Receive ```c8y_Firmware``` (patch) operation <br>
  `525,deviceSerial,ubuntu core,20.04.3,http://test.com,20.04.3`
2. Set operation status to EXECUTING <br>
  `501,c8y_Firmware`
3. Verify if currently installed firmware version and dependency version match
4. Install firmware image
5. Update device’s installed firmware state in inventory<br>
  `115,ubuntu core,20.04.3,http://test.com`
6. Set operation status to SUCCESSFUL<br>
  `503,c8y_Firmware`
