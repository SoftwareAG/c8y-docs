---
weight: 20
title: Configuring remote-connectivity
layout: redirect
---

The Cumulocity IoT tenant (remote tenant) allows you to remotely manage your Edge appliance by registering the Edge appliance in the Cumulocity IoT tenant account. To do so, you must first configure the Cumulocity IoT tenant account in the Edge agent and then register your Edge appliance in the remote tenant account. The Cumulocity IoT tenant uses the SSH protocol to access the remote Edge appliance through a web browser.

>**Important:** Ensure that the DNS entry is configured while configuring the network for your Edge appliance.

### Configuring remote-connectivity using the GUI

1. Log in to the **management** tenant.

2. Switch to the **Administration** application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge Configuration** > **Remote Connectivity** in the left navigation pane.

4. Click **Enable remote connectivity** toggle to enable remote-connectivity.

5. Provide the URL of the remote tenant in the **Remote tenant URL** field.

6. Click **Save**.

Next steps: Note down the Edge device ID and register your Edge appliance in the remote tenant.

### Configuring remote-connectivity using the REST APIs

### POST /edge/configuration/remote-connectivity

Use this endpoint to configure remote device management.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/configuration/remote-connectivity
Content-Type: application/json

{

    "enabled": true,

    "remote_tenant_url": "https://edge-testing.latest.stage.c8y.io/apps/cockpit/index.html"

}
```

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "6"
}
```

### GET /edge/configuration/remote-connectivity

Use this endpoint to get the remote device management configuration.

**Response**

```json
{

    "enabled": true,

    "remote_tenant_url": "https://edge-testing.latest.stage.c8y.io/apps/cockpit/index.html"

    "device_id": "a-device_id"

}
```

### Registering the Edge appliance in the remote tenant

Before performing these steps, ensure that you have configured the URL for the remote tenant in the Edge appliance.   

1. Log in to your remote tenant. 
2. Go to **Device Management**.
3. Click **Registration** in the **Devices** menu and then click **Register device**.
4. Select **General device registration**.

	<img src="/images/users-guide/DeviceManagement/devmgmt-registration-general.png" alt="General device registration" style="max-width: 100%">

5. In the **Device ID** field, enter the Edge device ID. The Edge device ID is also available at */usr/edge/properties/edge-agent/device-id* in your Edge appliance.
6. Click **Next**.
7. Click **Complete** to register your Edge VM.<br>
After successful registration, the Edge VM appears in the [**Device registration**](/users-guide/device-management/#dev-registration) page with the status **Waiting for connection**.<br>
Turn on the Edge VM and wait for the connection to be established.
Once the device is connected, the device status changes to **Pending acceptance**.
8. Click **Accept** to confirm the connection. The status of the device changes to **Accepted**.

### Accessing the Edge device from the Cumulocity IoT tenant

The Cumulocity IoT Cloud Remote Access microservice allows you to remotely access the Edge VM through a web browser. The remote Edge VM is represented as a device in the Device Management application of Cumulocity IoT.

#### Prerequisites

To use Cloud Remote Access, you need:

* "Remote access" permission granted to the tenant user.
* The Cloud Remote Access microservice included into your subscription plan.

#### Supported protocols

The following protocols are supported to connect to the Edge VM through remote access from the Cumulocity IoT tenant:

* Remote Desktop (VNC). See [Accessing the Edge device remotely through VNC](/edge/usage/#accessing-the-edge-device-remotely-through-vnc).
	* Shares the desktop of the remote device
	* Mouse and keyboard for interaction
* Secure Shell (SSH)
	* Console for command line access
	* Keyboard for interaction
* Terminal (Telnet)
	* Console for command line access
	* Keyboard for interaction

For more information about remote access, see [Cloud Remote Access](/cloud-remote-access/cra-general-aspects).

### Accessing the Edge device remotely through VNC

You can access the Edge VM from the Cumulocity IoT tenant by installing the VNC components on your Edge VM. 

**Info:** Ensure that you have registered your Edge VM with the Cumulocity IoT tenant. See [Registering the Edge device with the Cumulocity IoT tenant](/edge/usage/#registering-the-edge-device-with-the-cumulocity-iot-tenant).

#### Step 1: Installing the VNC components

**Info:** The Edge VM must be connected to the internet to install the VNC components.

1. Run the script *vnc-setup.sh*.

	` [admin@server ~]$ sudo /opt/c8y/utilities/vnc-setup.sh`

The *vnc-setup.sh* script installs the VNC components. After installing the VNC components, you should configure the VNC server for each user.

#### Step 2: Configuring VNC server for a user

To configure the VNC server, run the *vnc-user-setup.sh* script. Each user should run this script to set up VNC components and be able to connect to the Edge VM. The *vnc-user-setup.sh* script enables the current user to use VNC functionality and set a VNC password for the current user. 
 
1. Run the script *vnc-user-setup.sh*.

	` [admin@server ~]$ /opt/c8y/utilities/vnc-user-setup.sh`

2. Provide and verify the password.

3. Select **Y** or **N** to enter a view-only password.

Record the allocated port number. This port number will be used to connect to the VNC server on your Edge VM.

**Info:** You can also get the allocated port number from the */opt/c8y/utilities/vnc-display-mapping* file. In this file, you will find the VNC display number allocated for each user. For example, admin:1. You must add 5900 to the number associated with the user. In this example, the port number for the user **admin** is 5901.

#### Step 3: Connecting to the Edge VM using VNC

To access and connect to the Edge VM, you must create a remote access point.

1. In the Cumulocity IoT tenant for your registered Edge VM, add a remote access endpoint. See [Adding remote access endpoints](/cloud-remote-access/using-cloud-remote-access/#adding-remote-access-endpoints-via-vnc). You must use the same port number that is allocated for you.

2. Connect to the endpoint. See [Connecting to endpoints](/cloud-remote-access/using-cloud-remote-access/#connecting-to-endpoints).

The connection to the Edge VM is established and the GUI appears for the Edge VM. Right-click in the screen to open the desktop components **xterm** and **firefox**.

<img src="/images/edge/edge-vnc-gui-screen.png" alt="Edge VNC" style="max-width: 75%">

**Important:** Do not use the **Send Ctrl+Alt+Del** button in the VNC interface. If you do so, you will lose the VNC connection and not be able to reconnect until you restart the Edge VM.

#### Changing the VNC password

You can change the VNC password for the current user by running the *vnc-user-setup.sh* script. After changing the password, you must update the password in the remote access endpoint.