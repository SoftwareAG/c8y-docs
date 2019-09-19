---
weight: 40
title: Registering an Edge device with Cumulocity tenant
layout: redirect
---

Before performing these steps, ensure that you have provided the URL for the Cumulocity tenant in the post installation procedure.   

1. Log in to your Cumulocity tenant. 
2. Go to **Device Management**.
3. Click **Registration** in the **Devices** menu and then click **Register device**.
4. Select **General device registration**.

	<img src="/guides/images/users-guide/DeviceManagement/devmgmt-registration-general.png" alt="General device registration" style="max-width: 100%">

5. In the **Device ID** field, enter the Edge device ID. The Edge device ID is available at */usr/edge/properties/edge-agent/device-id* in your Edge device.
6. Click **Next**.
7. Click **Complete** to register your Edge device.<br>
After successful registration, the Edge device appears in the [**Device registration**](/guides/users-guide/device-management/#dev-registration) page with the status **Waiting for connection**.<br>
Turn on the Edge device and wait for the connection to be established.
Once the device is connected, the device status changes to **Pending acceptance**.
8. Click **Accept** to confirm the connection. The status of the device changes to **Accepted**.