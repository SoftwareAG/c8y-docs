---
weight: 40
title: LWM2M device details
layout: redirect
---

{{< c8y-admon-info >}}
In the Device management application, you can view all details of a device. The following details are specific to LWM2M devices. For information on general details refer to [Device details](/users-guide/device-management#device-details) in the Device management section.
{{< /c8y-admon-info >}}

<a name="objects"></a>
### Objects

In the **Objects** tab of a LWM2M device, you can view all objects, resources and instances of the device. Additionally, you can create new operations, see all currently pending operations and view the history of all previous operations.

![Objects view](/images/device-protocols/lwm2m/lwm2m-objects.png)

{{< c8y-admon-info >}}
In order to see resources in the **Objects** tab, the resources first must be added in the **Device Protocols** page.
{{< /c8y-admon-info >}}

The following operations may be available in each instance:

- Read Object: Reads all instances for the selected object and lists all available resources for each instance.
<br><br>
![Read Objects](/images/device-protocols/lwm2m/lwm2m-devices-readobject.png)
<br><br>
- Read Instance: Reads the current instance of the given object and lists all available resources.
<br><br>
![Read Instance](/images/device-protocols/lwm2m/lwm2m-devices-readinstance.png)
<br><br>
- Create Instance: Creates a new instance for the selected object.
- Delete Instance: Deletes the selected instance.

{{< c8y-admon-info >}}
Some instances do not have all of the listed operations.
{{< /c8y-admon-info >}}

Some object cards show additional operations which can be performed. These operations become available after reading the object/instance, for example, device **Update**. In order to perform the operation without parameters, click **Execute**. To perform an operation with parameters click **Execute with parameters** and enter a value.

![Execute operation](/images/device-protocols/lwm2m/lwm2m-devices-execute.png)

More information can be acquired for each resource by hovering over the tooltip icon.

![Tooltip](/images/device-protocols/lwm2m/lwm2m-devices-tooltip.png)

Additional information on recent operations can be viewed by clicking the operations button located at the right side of an instance card. The button is only visible if any operation has been performed. The number of unread operations can be seen on the top right of the button. In the example below there is only one.

![Recent operations](/images/device-protocols/lwm2m/lwm2m-devices-operations.png)
![Recent operations 2](/images/device-protocols/lwm2m/lwm2m-devices-operations2.png)

To view the history of all operations, simply click **View history**. Note, that you will be redirected to the **Control** tab.

![View History control tab](/images/device-protocols/lwm2m/lwm2m-devices-control.png)

If enabled, the agent will periodically look for starved operations of a tenant and fail them automatically.
Starved operations are device operations which have had a status of EXECUTING and have not been updated for a long time.
Platform administrators can configure how long such operations stay alive (described in the *LWM2M agent installation & operations guide*).

#### Audit Configuration

In the **Audit configuration** page you can audit the current device by comparing it to a selected reference device. It is also possible to sync properties to the values of the referenced device.

Click **Audit configuration** in the right of the top menu bar to navigate to the **Audit configuration** page.

![Audit configuration](/images/device-protocols/lwm2m/lwm2m-devices-audit.png)

To sync properties, select the desired reference device from the dropdown list. Check the properties that you wish to sync and click **Sync selected properties**.

{{< c8y-admon-info >}}
The numbers in the green circles represent the number of properties in the instance which have the same value in both devices. Respectively, the numbers in the red circles represent the number of properties which have different values compared to the values of the referenced device. If an instance is expanded, you can select only specific properties which can be synced.
{{< /c8y-admon-info >}}

![Sync properties](/images/device-protocols/lwm2m/lwm2m-devices-sync.png)

<a name="lwm2m-bootstrap"></a>
### LWM2M bootstrap parameters

In the **LWM2M bootstrap parameters** tab, bootstrap parameters of the current device can be viewed and changed. To modify a parameter, enter the desired value in a field of your choice and click **Save.**

![Bootstrap customization](/images/device-protocols/lwm2m/lwm2m-devices-bootstrap.png)

{{< c8y-admon-important >}}
Currently only the "NO_SEC" and "PSK" security modes are supported.
{{< /c8y-admon-important >}}

For further information on the fields in the **LWM2M bootstrap parameters** tab, see [Registering LWM2M devices](#register-device).

<a name="lwm2m-client-awake-time"></a>
### LWM2M client awake time

LWM2M client awake time specifies how long a device can be expected to be listening for incoming traffic before it goes back to sleep. The LWM2M server uses the client awake time to determine if the operations are passed down to a device.
The operations are sent during the awake time after the registration or after the registration update request is received by the LWM2M server.
After the awake time has passed, the operations are being queued and will be sent to the device on the next registration or registration update.
This applies to all operations that can be applied to the device.

LWM2M client awake time is determined based on the following priority:
1. (If provided) Device managed object &ldquo;awakeTimeRegistrationParameter&rdquo; fragment.
2. (If provided) Registration awake time attribute &ldquo;at&rdquo; in the registration request by the LWM2M client.
3. Global setting of the LWM2M microservice.

Device managed object &ldquo;awakeTimeRegistrationParameter&rdquo; fragment can be provided during the device registration as explained in [Registering LWM2M devices](/protocol-integration/lwm2m#register-device) or set with the managed object update request as in the example:
```
PUT /inventory/managedObjects/<device-managed-object-id>

{
    "awakeTimeRegistrationParameter": 180000
}
```
The value is in milliseconds. If set to 0, the device will be considered as always online.
