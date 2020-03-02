---
weight: 30
title: Connecting to the Cloud
layout: redirect
aliases:
  - /edge/usage/#connecting-cloud
---

### Remote Device Management

The Cumulocity tenant allows you to remotely manage your Edge device by registering the Edge device in the tenant account. To do so, you must first configure the Cumulocity tenant account in the Edge agent and then register your Edge device in the tenant account.

To configure the tenant account in your Edge device, run the post-installation script and select [Option 7 - Configure Edge Agent](/edge/installation/#option-7-configure-edge-agent). For more information, see [Configuring the Edge server](/edge/installation/#configuring-the-edge-server).

The Cumulocity tenant uses the SSH protocol to access the remote Edge device through a web browser.

### Registering the Edge device with the Cumulocity tenant

Before performing these steps, ensure that you have provided the URL for the Cumulocity tenant in the post-installation procedure.   

1. Log in to your Cumulocity tenant. 
2. Go to **Device Management**.
3. Click **Registration** in the **Devices** menu and then click **Register device**.
4. Select **General device registration**.

	<img src="/images/users-guide/DeviceManagement/devmgmt-registration-general.png" alt="General device registration" style="max-width: 100%">

5. In the **Device ID** field, enter the Edge device ID. The Edge device ID is available at */usr/edge/properties/edge-agent/device-id* in your Edge device.
6. Click **Next**.
7. Click **Complete** to register your Edge device.<br>
After successful registration, the Edge device appears in the [**Device registration**](/users-guide/device-management/#dev-registration) page with the status **Waiting for connection**.<br>
Turn on the Edge device and wait for the connection to be established.
Once the device is connected, the device status changes to **Pending acceptance**.
8. Click **Accept** to confirm the connection. The status of the device changes to **Accepted**.

### Accessing the Edge device from the Cumulocity tenant

The Cumulocity Cloud Remote Access microservice allows you to remotely access the Edge device through a web browser. The remote Edge device is represented as a device in the Device Management application of Cumulocity. For more information about remote access, see [Cloud Remote Access](/users-guide/optional-services/#cloud-remote-access).

>**Info**: Currently, only the SSH protocol is supported.

### Data exchange using Data Broker

Cumulocity IoT Edge provides the option to upload Edge data to a Cumulocity tenant account selectively. Note that you must first create a Cumulocity tenant account.

You can share the following data:

* devices (and more generically, managed objects)
* events
* alarms
* measurements
* operations

Go to **Data Broker** > **Data connectors** if you would like to send data to the tenant account. 

Go to **Data Broker** > **Data subscriptions** in your tenant account to receive the data from Edge.

<img src="/images/users-guide/enterprise-tenant/et-data-broker-navigator.png" alt="Data broker menus">

In the same way, you can push operations from a Cumulocity tenant account to Cumulocity IoT Edge devices.
 
For details about sending and receiving data in Cumulocity, see [Enterprise Tenant > Using the Data Broker](/users-guide/enterprise-edition#data-broker).

   