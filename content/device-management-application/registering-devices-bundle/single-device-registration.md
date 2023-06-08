---
weight: 10
title: Single device registration
layout: redirect
---

{{< product-c8y-iot >}} offers single device registration to connect devices manually one by one.

### To connect a device manually

{{< c8y-admon-info >}}
Depending on the type of device you want to connect, not all steps of the following process may be relevant.
{{< /c8y-admon-info >}}

1. Click **Registration** in the **Devices** menu of the navigator.
2. In the **Device registration** page, click **Register device** at the right of the top bar and from the dropdown menu select **Single registration** > **General**. The **Register devices** dialog box will be displayed.
3. In the **Device ID** field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration, see also [Grouping devices](#grouping-devices).
5. Click **Add device** to register one more device. Again, enter the device ID and optionally select a group. This way, you can add multiple devices in one step.
6. Click **Next** to register your device(s).

{{< c8y-admon-info >}}
In an {{< enterprise-tenant >}}, the {{< management-tenant >}} may also directly select a tenant to which the device will be added from here. Note that since the {{< management-tenant >}} does not have access to the subtenant's inventory you can either register devices to a tenant OR to a group, not both.

<img src="/images/users-guide/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration">
{{< /c8y-admon-info >}}

After successful registration the device(s) will be listed in the [Device registration](#dev-registration) page with the status "Waiting for connection".

Turn on the device(s) and wait for the connection to be established.

Once a device is connected, its status will change to "Pending acceptance".

{{< c8y-admon-info >}}
The **Pending acceptance** screen might differ depending on the [security token policy](#security-token-policy-for-device-registration).
{{< /c8y-admon-info >}}

Click **Accept** to confirm the connection. The status of the device will change to "Accepted".

{{< c8y-admon-info >}}
In case of any issues, consult the documentation applicable for your device type in the [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}) or look up the manual of your device.
{{< /c8y-admon-info >}}

<a name="creds-upload"></a>
