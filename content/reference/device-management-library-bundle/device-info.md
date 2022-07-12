---
weight: 80
title: Device information
layout: redirect
---

The **Device information** tab is a predefined dashboard with several widgets that combine default device information. The status widget, for example, will get its information from the ```c8y_Availability``` fragment, which holds information about the device's status and when it was last available. For details see [Device Management > Monitoring and controlling devices > Availability](/users-guide/device-management/#monitoring-availability) in the *User guide*.

![Device status](/images/reference-guide/device-status.png)

### Device status

The device status widgegt shows the device's availability and connection status. To achieve this the device must communicate its required interval using the ```c8y_RequiredAvailability``` fragment in the device's own managed object. This action activates availability and connection monitoring for the device.

```http
PUT /inventory/managedObjects/<deviceId>
```
```json
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
<td>Expected response interval of the device in minutes. If it is &lt;= 0 the device is considered in maintenance mode.</td>
</tr>
</tbody>
</table>


Usually devices should set their required interval only once during its first connection to the platform with a default value. Later changes can be left to platform users.

**SmartREST example**

The static template 117 is provided to set the required availability for SmartREST connected devices. This template can be sent in a fire-and-forget approach during device startup because it doesn't override already existing required availability configuration:

`117,15`

#### Availability monitoring

The response interval set in the ```c8y_RequiredAvailability``` fragment is used as interval in which the platform expects to receive data from the device. If no data is received in this interval the device will be marked as offline and an alarm of type ```c8y_UnavailabilityAlarm``` will be raised automatically. This alarm will also be cleared automatically when the device sends data again. No further action from the device is necessary.

The availability information computed by {{< product-c8y-iot >}} is stored in the fragments `c8y_Availability` and `c8y_Connection` of the device.

    "c8y_Availability": { "lastMessage": "2022-05-21...", "status": "AVAILABLE" },
    "c8y_Connection": {"status":"CONNECTED"}

|Name|Type|Description|
|:---|:---|:----------|
|lastMessage|Date|The date and time when the device sent the last message to {{< product-c8y-iot >}}.|
|status|String|The current status, one of AVAILABLE, UNAVAILABLE, MAINTENANCE.|


The following requests are considered a device's heartbeat and will mark the device as available and update the last message timestamp of a device,as long as the `X-Cumulocity-Application-Key` header is not set:

 * Creation of an event, measurement or alarm (for given device as source)
 * Updates to the device itself (with a given ID), in the form of empty PUT requests or requests with an ID only, that is `{}` or `{"id": ... }`

{{< c8y-admon-info >}}
Keep in mind that after updating the last message it may take some minutes until the new status has been saved in a database.
{{< /c8y-admon-info >}}

#### Connection monitoring

{{< product-c8y-iot >}} also provides connection monitoring for devices. When the device establishes a connection where it is able to receive operations the platform considers this device as connected. This applies to HTTP longpolling connection or a MQTT session equally.

A monitored device has one of the following statuses for `c8y_Connection`:

|Name| Description                                                                            |
|:---|:---------------------------------------------------------------------------------------|
|CONNECTED| A device push connection is established.                                               |
|DISCONNECTED| `responseInterval` is larger than 0 and the device is neither AVAILABLE nor CONNECTED. |
|MAINTENANCE| `responseInterval` is smaller or equal to 0; the device is under maintenance.          |

{{< c8y-admon-info >}}
If a device is not connected via device push, but a message was sent within the required response interval, `c8y_Availability` can still have the status AVAILABLE, even if `c8y_Connection` does not have the status CONNECTED.
{{< /c8y-admon-info >}}

### Device marker

 A device is marked in the inventory with a ```c8y_IsDevice``` fragment in its own managed object. Only devices with this fragment appear in the all **All devices** list in the Device Management application.

```http
PUT /inventory/managedObjects/<deviceId>
```
```json
{
   "c8y_IsDevice": {}
}
```

{{< c8y-admon-info >}}
Devices created through SmartREST 2.0 will automatically contain this fragment.
{{< /c8y-admon-info >}}

### Agent marker

In order to receive any operation a device must declare the agent marker fragment in its own managed object. This will enable the platform to send operations to this device to for all child devices in its child hierarchy that don’t carry this fragment themselves.

```http
PUT /inventory/managedObjects/<deviceId>
```
```json
{
   "com_cumulocity_model_Agent": {}
}
```

{{< c8y-admon-info >}}
Devices created through SmartREST 2.0 will automatically contain this fragment.
{{< /c8y-admon-info >}}

### Device restart

Devices capable of restarting remotely can announce this capability by adding the ```c8y_Restart``` operation to the device's own ```c8y_SupportedOperations``` fragment. Then the **Device details** page will enable a **Restart** button within its context menu.

#### Restart operation

Upon clicking the **Restart** button in the Device Management application an operation as follows is sent:

```json
{
  "c8y_Restart": {}
}
```

|Field|Data type|Mandatory|Details|
|----|----|----|----|
|c8y_Restart|object|Yes|Restart marker fragment, that designates this operation as a restart operation|

The device is expected to perform the following actions:
1. Set the operation status to EXECUTING
2. Perform the requested restart
3. Set the operation status to SUCCESSFUL

**SmartREST example**

{{< product-c8y-iot >}} provides the 510 static response template:

1. Device receives command via 510 static response template <br>
  `510,DeviceSerial`
2. Device sets operation status to EXECUTING <br>
  `501,c8y_Restart`
3. Device confirms successful execution by setting operation status to SUCCESSFUL <br>
  `503,c8y_Restart`


### Hardware information

Devices may announce their underlying hardware information to {{< product-c8y-iot >}} using the ```c8y_Hardware``` fragment in the device’s own managed object.

```http
PUT /inventory/managedObjects/<deviceId>
```
```json
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
|serialNumber|string|No|The hardware serial number of the device|
|model|string|No|A text identifier of the hardware model|
|revision|string|No|A text identifier of the hardware revision|

**SmartREST example**

Upload hardware information using the 110 static template. Usually this can be done once during agent application startup:

`110,1234567890,myModel,1.2.3`

### Agent information

All devices should provide information about the agent they are running, that is the software that integrates them with {{< product-c8y-iot >}}.

```http
PUT /inventory/managedObjects/<deviceId>
```

```json
{
   "c8y_Agent": {
       "name": "thin-edge.io",
       "version": "0.6",
       "url": "https://thin-edge.io/",
       "maintainer": "Software AG"
   }
}
```

| Field      | Data type | Mandatory | Details                 |
|------------|-----------|-----------|-------------------------|
| name       | string    | Yes       | Name of the agent       |
| version    | string    | Yes       | Version of the agent    |
| url        | string    | No        | The agent URL           |
| maintainer | string    | Yes       | Maintainer of the agent |

**SmartREST example**

Upload agent details using the [122](guides/reference/smartrest-two/#122) static template:

`122,thin-edge.io,0.6,https://thin-edge.io/,Software AG`

Do this once at agent initialization.
