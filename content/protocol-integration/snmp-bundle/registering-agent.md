---
weight: 30
title: Registering the agent
layout: redirect
---

Before any SNMP device can connect to the {{< product-c8y-iot >}} platform, first the SNMP agent needs to be registered in the platform.

### To register the agent from the UI {#to-register-the-agent-from-the-ui}

1. In the Device management application, click **Registration** in the **Devices** menu in the navigator.
2. Click **Register device** and then select **General device registration**.
3. In the resulting dialog box, enter the device ID. The device ID corresponds to the *gateway.identifier* value mentioned in the *snmp-agent-gateway.properties* file.
4. Click **Next** to proceed with the device registration and then click **Complete**.The device will be shown in the **Device registration** page with the status WAITING FOR CONNECTION.
5. If the agent process is started and the device ID is correct you will see an **Accept** button. If the agent is not started, start the agent application. Click **Accept** to complete the registration process.

After successful registration, the agent device will be added to the device list in the **All devices** page, with device ID as name.

![Device list](/images/device-protocols/snmp/snmp-devices-list.png)

### To register the agent via REST API {#to-register-the-agent-via-rest-api}

**Step-1:** Create a new device request:

	POST /devicecontrol/newDeviceRequests
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.newdevicerequest+json
    {
        "id": "snmp-agent" // should be the same as "gateway.identifier" value from the snmp-agent-gateway.properties file.
    }

**Step-2:** Accept the new device request:

	PUT /devicecontrol/newDeviceRequests/snmp-test
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.newdevicerequest+json
    {
        "status": "ACCEPTED"
    }
