---
weight: 140
title: Device profile
layout: redirect
---

From a device agent perspective, device profiles are a combination of firmware update, software update, and typed file based device configuration. Large parts of the agent code to support these capabilities can be reused.

Device profile functionality is enabled when the device announces the c8y_DeviceProfile operation in its c8y_SupportedOperations. The device profile tab allows users to apply a profile to a device. This creates a *c8y_DeviceProfile* operation according to the configured profile. If present the firmware, software, and configuration should be handled exactly like their individual operations (*c8y_Firmware*, *c8y_SoftwareUpdate*, and typed *c8y_DownloadConfigFile*). We recommend to execute a *c8y_Profile* operation by installing firmware first, software second and configuration third to minimize potential of later actions overriding earlier ones.

<table>
<tbody>
<td style="text-align:center"> &#x1f4f1;&#11013;&#65039; receive operation &#11013;&#65039;&#9729;&#65039;</td>
</tbody>
</table>

```
{
   "profileName": "my profile",
   "profileId": "158751",
   "c8y_DeviceProfile": {
       "software": [
           {
               "name": "curl",
               "action": "install",
               "version": "2.3.4",
               "url": "http://my.url.com"
           },
           {
               "name": "cumulocity_agent",
               "action": "install",
               "version": "1.2.3",
               "url": "https://cumulocity.com/agent"
           }
       ],
       "configuration": [
           {
               "name": "ssh_conf",
               "type": "ssh_conf",
               "url": "http://cumulocity.com/conf"
           },
           {
               "name": "agent_conf",
               "type": "agent_conf",
               "url": "https://demos.cumulocity.com/inventory/binaries/156719"
           }
       ],
       "firmware": {
           "name": "device_fw",
           "version": "1.0.1",
           "url": "https://cumulocity.com/fw"
       }
   },
}
```

<table>
<colgroup>
<col width="30%">
<col width="10%">
<col width="10%">
<col width="50%">
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
<td>profileName</td>
<td>string</td>
<td>Yes</td>
<td>Name of the device profile being applied</td>
</tr>
<tr>
<td>profileId</td>
<td>string</td>
<td>Yes</td>
<td>ID reference to the device profile object</td>
</tr>
<tr>
<td>c8y_DeviceProfile</td>
<td>object</td>
<td>Yes</td>
<td>Device profile object containing all information necessary for the installation</td>
</tr>
<tr>
<td>c8y_DeviceProfile.software</td>
<td>array</td>
<td>No</td>
<td>Array of software objects to install or remove</td>
</tr>
<tr>
<td>c8y_DeviceProfile.software.name</td>
<td>string</td>
<td>Yes</td>
<td>Name of the software package</td>
</tr>
<tr>
<td>c8y_DeviceProfile.software.action</td>
<td>string</td>
<td>Yes</td>
<td>Action to perform on the packaged describing if the software shall be installed or removed</td>
</tr>
<tr>
<td>c8y_DeviceProfile.software.version</td>
<td>string</td>
<td>Yes</td>
<td>Version of the software</td>
</tr>
<tr>
<td>c8y_DeviceProfile.software.url</td>
<td>string</td>
<td>Yes</td>
<td>URL where the software binary shall be obtained from</td>
</tr>
<tr>
<td>c8y_DeviceProfile.configuration</td>
<td>array</td>
<td>No</td>
<td>Array of configuration objects to apply</td>
</tr>
<tr>
<td>c8y_DeviceProfile.configuration.name</td>
<td>string</td>
<td>Yes</td>
<td>Name of the configuration</td>
</tr>
<tr>
<td>c8y_DeviceProfile.configuration.type</td>
<td>string</td>
<td>Yes</td>
<td>Type of the configuration</td>
</tr>
<tr>
<td>c8y_DeviceProfile.configuration.url</td>
<td>string</td>
<td>Yes</td>
<td>URL where the configuration file shall be obtained from</td>
</tr>
<tr>
<td>c8y_DeviceProfile.firmware</td>
<td>object</td>
<td>No</td>
<td>Firmware object containing target firmware details</td>
</tr>
<tr>
<td>c8y_DeviceProfile.firmware.name</td>
<td>string</td>
<td>Yes</td>
<td>Name of the firmware to install</td>
</tr>
<tr>
<td>c8y_DeviceProfile.firmware.version</td>
<td>string</td>
<td>Yes</td>
<td>Version of the firmware</td>
</tr>
<tr>
<td>c8y_DeviceProfile.firmware.url</td>
<td>string</td>
<td>Yes</td>
<td>URL where the firmware binary shall be obtained from</td>
</tr>
</tbody>
</table>

When a device receives a c8y_Profile operation it should announce the target profile in its own managed object first.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1">&#x1f4f1;&#10145; &#65039; update inventory &#10145;&#65039; &#9729;&#65039; </td>
</tr>
<tr>
<td style="text-align:center">
<b>PUT
</td>
<td style="text-align:center"><em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_Profile": {
       "profileName": "my profile",
       "profileId": "158751",
       "profileExecuted": false
   }
}
```

|Name|Type|Mandatory|Description|
|----|----|----|----|
|profileName|string|Yes|Name of the device profile.|
|profileId|string|Yes|The ID reference of the device profile object.|
|profileExecuted|boolean|Yes|Indicator showing if the profile has been applied fully. Must be false in this context.|

After completing each of the three subsections the device must announce its current state in its own managed object the same way as described in the individual operations using the fragments *c8y_Firmware*, *c8y_SoftwareList*, and *c8y_Configuration_<type>* respectively. Then the device shall update its installed profile state in its managed object by updating the *profileExecuted* property to true.

<table>
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr>
<td style="text-align:center" colspan="2" rowspan="1">
&#x1f4f1;&#10145; &#65039; update inventory &#10145;&#65039; &#9729;&#65039;
</td>
</tr>
<tr>
<td style="text-align:center"><b>PUT </b>
</td>
<td style="text-align:center"><em>/inventory/managedObjects/&lt;deviceId&gt;</em>
</td>
</tr>
</tbody>
</table>

```
{
   "c8y_Profile": {
       "profileName": "my profile",
       "profileId": "158751",
       "profileExecuted": true
   }
}
```

|Name|Type|Mandatory|Description|
|----|----|----|----|
|profileName|string|Yes|Name of the device profile.|
|profileId|string|Yes|The ID reference of the device profile object.|
|profileExecuted|boolean|Yes|Indicator showing if the profile has been applied fully. Must be true in this context.|

The device is expected to perform the following actions
1. Set operation status to EXECUTING
2. Set the *c8y_Profile* fragment in the device’s own managed object with profileExecuted = false
3. Install firmware if included and complete installation by updating the *c8y_Firmware* fragment in its own managed object
4. Install software if included and complete installation by updating the *c8y_SoftwareList* fragment in its own managed object
5. Install configuration if included and complete installation by updating the <em>c8y_Configuration_<type></em> fragment for each configuration in its own managed object
6. Set the *c8y_Profile* fragment in the device's own managed object with profileExecuted = true
7. Set the operation status to SUCCESSFUL


**SmartREST2 example**

In addition to the prepared static templates for firmware, software, and configuration there are specific templates available for handling device profiles. The 527 static response template is designed to receive the operation. The 121 static template can be used to set the current state of device profile.

1. Receive c8y_DeviceProfile operation <br>
  ```
  527,DeviceSerial,$FW,device_fw,1.0.1,https://cumulocity.com/fw,false,,$SW,curl,2.3.4,http://my.url.com,install,cumulocity_agent,1.2.3,https://cumulocity.com/agent,install,$CONF,http://cumulocity.com/conf,ssh_conf,https://demos.cumulocity.com/inventory/binaries/156719,agent_conf
  ```
2. Set operation status to EXECUTING <br>
  `501,c8y_DeviceProfile`
3. Set target profile <br>
  `121,false,`
4. Download, install and confirm firmware installation state <br>
  `115,device_fw,1.0.1,https://cumulocity.com/fw`
5. Download, install and confirm software installation state <br>
  `116,curl,2.3.4,http://my.url.com,cumulocity_agent,1.2.3,https://cumulocity.com/agent`
6. Download, install and confirm configuration installation state for each configuration <br>
  `120,ssh_conf,http://cumulocity.com/conf,config,` <br>
  `120,agent_conf,https://demos.cumulocity.com/inventory/binaries/156719,agent.cfg,` <br>
7. Set the target profile as executed<br>
  `121,true,`
8. Set operation status to SUCCESSFUL <br>
  `503,c8y_DeviceProfile`
