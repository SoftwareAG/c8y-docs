---
weight: 40
title: LWM2M device details
layout: redirect
---

>**Info**: In the Device management application, you can view all details of a device. The following details are specific to LWM2M devices. For information on general details refer to [Device details](/users-guide/device-management#device-details) in the Device management section.

### <a name="objects"></a> Objects

In the **Objects** tab of a LWM2M device, you can view all objects, resources and instances of the device. Additionally, you can create new operations, see all currently pending operations and view the history of all previous operations.

![Objects view](/images/device-protocols/lwm2m/lwm2m-objects.png)

> **Info**: In order to see resources in the **Objects** tab, the resources first have to be added in the **Device Protocols** page.

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

> **Info:**  Some instances do not have all of the listed operations.

Some object cards show additional operations which can be performed. These operations become available after reading the object/instance, for example, device **Update**. In order to perform the operation, click **Execute**.

![Execute operation](/images/device-protocols/lwm2m/lwm2m-devices-execute.png)

More information can be acquired for each resource by hovering over the tooltip icon.

![Tooltip](/images/device-protocols/lwm2m/lwm2m-devices-tooltip.png)

Additional information on recent operations can be viewed by clicking the operations button located at the right side of an instance card. The button is only visible if any operation has been performed. The number of unread operations can be seen on the top right of the button. In the example below there is only one.

![Recent operations](/images/device-protocols/lwm2m/lwm2m-devices-operations.png)
![Recent operations 2](/images/device-protocols/lwm2m/lwm2m-devices-operations2.png)

To view the history of all operations, simply click **View history**. Note, that you will be redirected to the **Control** tab.

![View History control tab](/images/device-protocols/lwm2m/lwm2m-devices-control.png)

#### Audit Configuration

In the **Audit configuration** page you can audit the current device by comparing it to a selected reference device. It is also possible to sync properties to the values of the referenced device.

Click **Audit configuration** in the right of the top menu bar to navigate to the **Audit configuration** page.

![Audit configuration](/images/device-protocols/lwm2m/lwm2m-devices-audit.png)

To sync properties, select the desired reference device from the dropdown list. Check the properties that you wish to sync and click **Sync selected properties**.

> **Info**: The numbers in the green circles represent the number of properties in the instance which have the same value in both devices. Respectively, the numbers in the red circles represent the number of properties which have different values compared to the values of the referenced device. If an instance is expanded, you can select only specific properties which can be synced.

![Sync properties](/images/device-protocols/lwm2m/lwm2m-devices-sync.png)

### <a name="lwm2m-bootstrap"></a> LWM2M bootstrap parameters

In the **LWM2M bootstrap parameters** tab, bootstrap parameters of the current device can be viewed and changed. To modify a parameter, enter the desired value in a field of your choice and click **Save.**

![Bootstrap customization](/images/device-protocols/lwm2m/lwm2m-devices-bootstrap.png)

> **Important:** Currently only the "NO_SEC" and "PSK" security modes are supported.

For further information on the fields in the **LWM2M bootstrap parameters** tab, see [Registering LWM2M devices](#register-device).

### <a name="lwm2m-client-awake-time"></a> LWM2M client awake time

LWM2M client awake time is used for sending the operations to the device during the awake time after the registration or after the registration update request is received by the LWM2M server.
After the awake time has passed, the operations are being queued and will be sent to the device on the next registration or registration update.
This applies to all operations that can be applied to the device.

LWM2M client awake time can be given by the LWM2M client with the registration awake time attribute &ldquo;at&rdquo;.
If the LWM2M client does not provide this information then the LWM2M server will use its global setting, which is defined with the &ldquo;C8Y.lwm2m.client_awake_time&rdquo; property in the LWM2M microservice property file.
It is also possible to override this client awake time value for the device by setting &ldquo;awakeTimeRegistrationParameter&rdquo; during the device registration as explained in [Registering LWM2M devices](/protocol-integration/lwm2m#register-device).
