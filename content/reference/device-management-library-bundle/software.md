---
weight: 170
title: Software
layout: redirect
---

The **Software** tab allows you to install and uninstall a set of software files for a device. The files can be located using an URL or they can be hosted in the {{< product-c8y-iot >}} Software Repository. Device agents are fully responsible for their local installation, management, and uninstall procedures and any kind of error handling during the operation.

The **Device details** page shows a **Software** tab for devices that announce ```c8y_SoftwareList``` and/or ```c8y_SoftwareUpdate``` in their ```c8y_SupportedOperations``` fragment in their device managed objects.
It also shows a **Services** tab for devices that have at least one software service running.
The service can have measurements, alarms and events assigned.

### Installed software

A device announces its current status of installed software to the platform by adding the `c8y_SoftwareList` fragment to its device managed object.
This fragment is an array that contains all installed software packages as individual objects with a name, version, URL and software type property.
Both the URL and the software type are optional.
The name and the version are required, so the software package can be identified.

```http
PUT /inventory/managedObjects/<deviceId>
```
```json
{
   "c8y_SoftwareList": [
       {
           "name": "software_a",
           "version": "3.0.0",
           "url": "http://example.com/software_a",
           "softwareType": "type A"
       },
       {
           "name": "software_b",
           "version": "2.0.0",
           "url": "http://example.com/software_b",
           "softwareType": "type B"
       }
   ]
}
```

| Field | Mandatory | Details |
|----|----|----|
| name | Yes | The name of the software|
| version | Yes | A version identifier of the software|
| url | No | A URL pointing to the location where the software file was obtained from|
| softwareType | No | An arbitrary string for organizing software artifacts|


Devices should upload the complete list of installed software during startup. Additionally the list should be updated any time a local change is triggered or detected. This includes cases where a change was requested through {{< product-c8y-iot >}} UI.

**SmartREST example**

{{< product-c8y-iot >}} provides the static SmartREST template 116 for devices to upload their installed software. It takes a dynamic length list of triples per software package as parameters. Each triple is interpreted as the name, version, and URL property of an individual package:

`116,software_a,3.0.0,http://example.com/software_a,software_b,2.0.0,http://example.com/software_b`

### Advanced Software Management microservice

To facilitate the management of large list of software packages, the Advanced Software Management microservice was introduced.
It represents software packages as managed object child additions, thus making them separate entities which can be added, removed, filtered or paginated.

Querying software packages with ASM:

```http
GET /service/advanced-software-mgmt/software?deviceId=<deviceId>
```

```json
{
   "softwareList": [
       {
           "name": "software_a",
           "version": "3.0.0",
           "url": "http://example.com/software_a",
           "softwareType": "type A"
       },
       {
           "name": "software_b",
           "version": "2.0.0",
           "url": "http://example.com/software_b",
           "softwareType": "type B"
       }
   ],
   "statistics": {
     "currentPage": 1,
     "pageSize": 5
   },
   "self": ...,
   "next": ...
}
```

| Query paramater | Mandatory | Details |
| --------------- | --------- | ------- |
| deviceId        | Yes       | ID of the device |
| name            | No        | Filter parameter for the software name |
| version         | No        | Filter parameter for the software version |
| type            | No        | Filter parameter for the software type |
| pageSize        | No        | The number of items on the page of the paginated result, between 1 and 2000 |
| currentPage     | No        | The current page of the paginated result |
| withTotalPages  | No | When set to `true`, the returned result will contain the total number of the pages in the statistics object |

Setting software packages with ASM:

```http
POST /service/advanced-software-mgmt/software?deviceId=<deviceId>
```

```json
[
  {
    "name": "software_a",
    "version": "3.0.0",
    "url": "http://example.com/software_a",
    "softwareType": "type A"
  },
  {
    "name": "software_b",
    "version": "2.0.0",
    "url": "http://example.com/software_b",
    "softwareType": "type B"
  }
]
```

You can also use the SmartREST static template 140 instead.
It takes a list of software packages of dynamic length, where each package is represented by its name, version, software type and URL:

`140,software_a,3.0.0,"type A",http://example.com/software_a,software_b,2.0.0,"type B",http://example.com/software_b`

Adding software packages with ASM:

```http
PUT /service/advanced-software-mgmt/software?deviceId=<deviceId>
```

```json
[
  {
    "name": "software_a",
    "version": "3.0.0",
    "url": "http://example.com/software_a",
    "softwareType": "type A"
  },
  {
    "name": "software_b",
    "version": "2.0.0",
    "url": "http://example.com/software_b",
    "softwareType": "type B"
  }
]
```

You can also use the SmartREST static template 141 instead.
Similarly, it takes a list of software packages of dynamic length, where each package is represented by its name, version, software type and URL:

`141,software_a,3.0.0,"type A",http://example.com/software_a,software_b,2.0.0,"type B",http://example.com/software_b`

Removing software packages by name and version with ASM:

```http
DELETE /service/advanced-software-mgmt/software?deviceId=<deviceId>
```

```json
[
  {
    "name": "software_a",
    "version": "3.0.0"
  },
  {
    "name": "software_b",
    "version": "2.0.0"
  }
]
```

You can also use the SmartREST static template 142 instead.
It takes a list of software packages of dynamic length, where each package is represented by its name and version, as URL and software type are not used to identify a package:

`142,software_a,3.0.0,software_b,2.0.0`

### Changing installed software

Within the **Software** tab users can select software to install, to update, and to uninstall for a device. After confirming, the desired software configuration is sent to the device as an operation. The operation format depends on the device's ```c8y_SupportedOperations``` fragment.

#### Software list

If the device only supports the ```c8y_SoftwareList``` operation and the ```c8y_SupportedOperations``` fragment does not contain ```c8y_SoftwareUpdate```, a ```c8y_SoftwareList``` operation is sent to the device. This operation contains a very similar ```c8y_SoftwareList``` fragment to the one that is already present in the device’s own managed object. The ```c8y_SoftwareList``` operation always contains the entire list of software that should be installed on the device. Exactly the packages in the list should be installed. Any installed packages not contained in the list should be removed.

```json
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
| name | string | Yes | Name of the software|
| version | string | Yes | A version identifier of the software|
| url | string | Yes | A URL pointing to the location where the software file should be downloaded from|

The device is expected to perform the following actions:

1. Set operation status to EXECUTING
2. Uninstall software that should be uninstalled
3. Install software that should be installed
4. Update the software list in the device’s own managed object
5. Set operation status to SUCCESSFUL

If the desired state cannot be achieved for any reason the operation should be concluded with status FAILED.

**SmartREST example**

The 516 static response template is available for dealing with software list operations. It works very similarly to the 116 template used for updating the device’s own managed object:

1. Receive ```c8y_SoftwareList``` operation <br>
  `516,deviceSerial,software_a,4.0.0,http://example.com/software_a,software_b,3.0.0,http://example.com/software_b`
2. Set operation status to EXECUTING <br>
  `501,c8y_SoftwareList`
3. Uninstall and install software
4. Update device’s software list in inventory <br>
  `116,software_a,4.0.0,http://example.com/software_a,software_b,3.0.0,http://example.com/software_b`
5. Set operation status to SUCCESSFUL <br>
  `503,c8y_SoftwareList`

#### Software update

If a device supports the ```c8y_SoftwareUpdate``` operation in its ```c8y_SupportedOperations``` fragment the **Software** tab will create ```c8y_SoftwareUpdate``` operations for the device. Conceptually the software update is very similar to the software list. A desired state of software is sent to the device in form of a list of packages. The difference is that the ```c8y_SoftwareUpdate``` should be considered as a partial list. Each list element contains an additional instruction whether the package should be installed or uninstalled. Any package not listed in the software update list should not be touched.

```json
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
```

| Field | DataType | Mandatory | Details |
| ---- | ---- | ---- | ---- |
|name |string |Yes |Name of the software|
|version |string | Yes | A version identifier of the software|
|url |string |Yes |A URL pointing to the location where the software file should be downloaded from|
|action |string |Yes |Action to be executed from the device on the software (possible values: "install" or "delete")|

The device is expected to perform the following actions:

1. Set operation status to EXECUTING
2. Iterate through the list of packages contained in the operation and perform the respective action for each one
3. Update the software list in the device’s own managed object
4. Set operation status to SUCCESSFUL

**SmartREST example**

The 528 static response template is available for dealing with software update operations:

1. Receive ```c8y_SoftwareUpdate``` operation <br>
  `528,deviceSerial,software_a,4.0.0,http://example.com/software_a,install,software_b,3.0.0,http://example.com/software_b,delete`
2. Set operation status to EXECUTING <br>
  `501,c8y_SoftwareUpdate`
3. Uninstall and install software
4. Update device’s software list in inventory <br>
  `116,software_a,3.0.0,http://example.com/software_a`
5. Set operation status to SUCCESSFUL <br>
  `503,c8y_SoftwareUpdate`

### Services

Software services running on a device are modeled as child additions with `c8y_Service` type.

The **Device details** page shows a **Services** tab for devices that have at least one software service.
The service can have measurements, alarms and events assigned.


Querying services:

```http
GET /inventory/managedObjects/<deviceId>/childAdditions?query=type eq 'c8y_Service' and name eq '*<serviceName>*'
```

```json
{
  "references": [
    {
      "name": "<serviceName>",
      "id": "123",
      "type": "c8y_Service",
      "serviceType": "systemd",
      "status": "up",
      ...
    }
  ],
  "statistics": {
    "currentPage": 1,
    "pageSize": 5
  },
  "self": ...,
  "next": ...
}
```

Adding a service:

```http
POST /inventory/managedObjects/<deviceId>/childAdditions

Content-Type: "application/vnd.com.nsn.cumulocity.managedObject+json"
```

```json
{
  "name": "<serviceName>",
  "id": "123",
  "type": "c8y_Service",
  "serviceType": "systemd",
  "status": "up",
  ...
}
```

Updating a service:

```http
PUT /inventory/managedObjects/<managedObjectId>

Content-Type: "application/vnd.com.nsn.cumulocity.managedObject+json"
```

```json
{
  "name": "<serviceName>",
  "id": "123",
  "type": "c8y_Service",
  "serviceType": "systemd",
  "status": "up",
  ...
}
```

Removing a service:

```http
DELETE /inventory/managedObjects/<managedObjectId>
```

For devices supporting the Advanced Software Management feature, a static SmartREST 2.0 template is available.
Devices may use this template to announce installed services:

`102,<serviceUniqueID>,<serviceType>,<serviceName>,<status>`

Additionally devices may publish messages on the SmartREST 2.0 topic `s/us/<serviceUniqueId>` to update the status of given service:

`104,<newServiceStatus>`
