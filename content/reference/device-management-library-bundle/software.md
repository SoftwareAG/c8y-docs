---
weight: 110
title: Software
layout: redirect
---

The **Software** tab allows to install and uninstall a set of software files for a device. The files can be located using an URL or they can be hosted in the Cumulocity IoT Software Repository. Device agents are fully responsible for their local installation, management, and uninstall procedures and any kind of error handling during the operation.

The **Device details** page offers a **Software** tab for devices that announce *c8y_SoftwareList* and/or *c8y_SoftwareUpdate* in their *c8y_SupportedOperations* fragment in their device managed objects.

### Installed software

First a device may announce its current status of installed software to the platform by adding the *c8y_SoftwareList* fragment to its device managed object. This fragment is an array that should contain all installed software packages as individual objects with a name, version, and url property. The url field is optional since it is often difficult for devices to retain information about where a software package originated from. The other two properties are required to correctly identify packages and their versions.

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
<td style="text-align:center"> <b>PUT</b>
</td>
<td style="text-align:center"> <em> /inventory/managedObjects/&lt;deviceId&gt; </em>
</td>
</tr>
</tbody>
</table>


```
{
   "c8y_SoftwareList": [
       {
           "name": "software_a",
           "version": "3.0.0",
           "url": "http://example.com/software_a"
       },
       {
           "name": "software_b",
           "version": "2.0.0",
           "url": "http://example.com/software_b"
       }
   ]
}
```

| Field | DataType | Mandatory | Details |
|----|----|----|----|
| name | String | Yes | Name of the software. |
| version | String | Yes | A version identifier of the software |
| url | String | No | A URL pointing to the location where the software file was obtained from. |


Devices should upload the complete list of installed software during startup. Additionally the list should be updated any time a local change is triggered or detected. This includes cases where a change was requested through Cumulocity UI.

**SmartREST example**

The static SmartREST template 116 is provided for devices to upload their installed software. It takes a dynamic length list of triples per software package as parameters. Each triple is interpreted as the name, version, and url property of an individual package.

`116,software_a,3.0.0,http://example.com/software_a,software_b,2.0.0,http://example.com/software_b`

### Changing installed software

Within the **Software** tab users are able to select software to install, to update, and to uninstall for a device. After confirming, the desired software configuration is sent to the device as an operation. The operation format depends on the device's *c8y_SupportedOperations* fragment.

#### Software list

If the device only supports the *c8y_SoftwareList* operation and the *c8y_SupportedOperations* fragment does not contain *c8y_SoftwareUpdate*, a *c8y_SoftwareList* operation is sent to the device. This operation contains a very similar *c8y_SoftwareList* fragment to the one that is already present in the device’s own managed object. The *c8y_SoftwareList operation* always contains the entire list of software that should be installed on the device. Exactly the packages in the list should be installed. Any installed packages not contained in the list should be removed.

<table>
<tbody>
<td style="text-align:center">
&#x1f4f1;&#11013;&#65039; receive operation &#11013;&#65039;&#9729;&#65039;
</td>
</tbody>
</table>

```
{
   "c8y_SoftwareList": [
       {
           "name": "software_a",
           "version": "4.0.0",
           "url": "http://example.com/software_a"
       },
       {
           "name": "software_b",
           "version": "3.0.0",
           "url": "http://example.com/software_b"
       }
   ]
}
```

| Field | DataType | Mandatory | Details |
| ---- | ---- | ---- | ---- |
| name | String | Yes | Name of the software. |
| version | String | Yes | A version identifier of the software. |
| url | String | Yes | A URL pointing to the location where the software file should be downloaded from. |

The device is expected to perform the following actions
1. Set operation status to EXECUTING
2. Uninstall software that should be uninstalled
3. Install software that should be installed
4. Update the software list in the device’s own managed object
5. Set operation status to SUCCESSFUL

If the desired state cannot be achieved for any reason the operation should be concluded with status FAILED.

**SmartREST example**

The 516 static response template is available for dealing with software list operations. It works very similarly to the 116 template used for updating the device’s own managed object

1. Receive c8y_SoftwareList operation <br>
  `516,deviceSerial,software_a,4.0.0,http://example.com/software_a,software_b,3.0.0,http://example.com/software_b`
2. Set operation status to EXECUTING <br>
  `501,c8y_SoftwareList`
3. Uninstall and install software
4. Update device’s software list in inventory <br>
  `116,software_a,4.0.0,http://example.com/software_a,software_b,3.0.0,http://example.com/software_b`
5. Set operation status to SUCCESSFUL <br>
  `503,c8y_SoftwareList`

#### Software update

If a device supports the *c8y_SoftwareUpdate* operation in it's *c8y_SupportedOperations* fragment the **Software** tab will create *c8y_SoftwareUpdate* operations for the device. Conceptually the software update is very similar to the software list. A desired state of software is sent to the device in form of a list of packages. The difference is that the *c8y_SoftwareUpdate* should be considered as a partial list. Each list element contains an additional instruction whether the package should be installed or uninstalled. Any package not listed in the software update list should not be touched.

<table>
<tbody>
<td style="text-align:center">
&#x1f4f1;&#11013;&#65039; receive operation &#11013;&#65039;&#9729;&#65039;
</td>
</tbody>
</table>

```
{
   "c8y_SoftwareUpdate": [
       {
           "name": "software_a",
           "version": "4.0.0",
           "url": "http://example.com/software_a",
           "action": "install"
       },
       {
           "name": "software_b",
           "version": "3.0.0",
           "url": "http://example.com/software_b",
           "action": "delete"
       }
   ]
}
````

| Field | DataType | Mandatory | Details |
| ---- | ---- | ---- | ---- |
|name |String |Yes |Name of the software.|
|version |String | Yes | A version identifier of the software.|
|url |String |Yes |A URL pointing to the location where the software file should be downloaded from.|
|action |String |Yes |Action to be executed from the device on the software (possible values: "install" or "delete").|

The device is expected to perform the following actions
1. Set operation status to EXECUTING
2. Iterate through the list of packages contained in the operation and perform the respective action for each one
3. Update the software list in the device’s own managed object
4. Set operation status to SUCCESSFUL

#### SmartREST example

The 528 static response template is available for dealing with software update operations.
1. Receive c8y_SoftwareUpdate operation <br>
  `528,deviceSerial,software_a,4.0.0,http://example.com/software_a,install,software_b,3.0.0,http://example.com/software_b,delete`
2. Set operation status to EXECUTING <br>
  `501,c8y_SoftwareUpdate`
3. Uninstall and install software
4. Update device’s software list in inventory <br>
  `116,software_a,3.0.0,http://example.com/software_a`
5. Set operation status to SUCCESSFUL <br>
  `503,c8y_SoftwareUpdate`
