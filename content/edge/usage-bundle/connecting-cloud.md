---
weight: 30
title: Connecting to the Cloud
layout: redirect
---

### Remote Device Management

The Cumulocity tenant allows you to remotely manage your Edge device by registering the Edge device in the tenant account. To do so, you must first configure the Cumulocity tenant account in the Edge agent and then register your Edge device in the tenant account.

To configure the tenant account in your Edge device, run the post-installation script and select [Configuring Edge Agent](/guides/edge/installation/#configuring-edge-agent). For more information, see [Configuring the Edge server](/guides/edge/installation/#configuring-the-edge-server).

The Cumulocity tenant uses the SSH protocol to access the remote Edge device through a web browser.

### Registering the Edge device with the Cumulocity tenant

Before performing these steps, ensure that you have provided the URL for the Cumulocity tenant in the post-installation procedure.   

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

### Accessing the Edge device from the Cumulocity tenant

The Cumulocity Cloud Remote Access microservice allows you to remotely access the Edge device through a web browser. The remote Edge VM is represented as a device in the Device Management application of Cumulocity.

#### Supported protocols

The following protocols are supported to connect to the Edge device through remote access from the Cumulocity tenant:

* Remote Desktop (VNC). See [Accessing the Edge device remotely through VNC](/guides/edge/usage/#accessing-the-edge-device-remotely-through-vnc).
	* Shares the desktop of the remote device
	* Mouse and keyboard for interaction
* Secure Shell (SSH)
	* Console for command line access
	* Keyboard for interaction
* Terminal (Telnet)
	* Console for command line access
	* Keyboard for interaction

For more information about remote access, see [Cloud Remote Access](/guides/users-guide/optional-services/#cloud-remote-access) in the User guide.

### Accessing the Edge device remotely through VNC

You can access the Edge VM from the Cumulocity tenant by installing the VNC components on your Edge VM. 

**Info:** Ensure that you have registered your Edge device with the Cumulocity tenant. See [Registering the Edge device with the Cumulocity tenant](/guides/edge/usage/#registering-the-edge-device-with-the-cumulocity-tenant).

#### Step 1: Installing the VNC components

**Info:** The Edge VM must be connected to the internet to install the VNC components.

1. Run the script *vnc-setup.sh*.

	` [admin@server ~]$ sudo /opt/c8y/utilities/vnc-setup.sh`

The *vnc-setup.sh* script installs the VNC components. After installing the VNC components, you should configure the VNC server for each user.

#### Step 2: Configuring VNC server for a user

To configure the VNC server, run the *vnc-user-setup.sh* script. Each user should run this script to set up VNC components and be able to connect to the Edge device. The *vnc-user-setup.sh* script enables the current user to use VNC functionality and set a VNC password for the current user. 
 
1. Run the script *vnc-user-setup.sh*.

	` [admin@server ~]$ /opt/c8y/utilities/vnc-user-setup.sh`

2. Provide and verify the password.

3. Select **Y** or **N** to enter a view-only password.

Record the allocated port number. This port number will be used to connect to the VNC server on your Edge device.

**Info:** You can also get the allocated port number from the */opt/c8y/utilities/vnc-display-mapping* file. In this file, you will find the VNC display number allocated for each user. For example, admin:1. You must add 5900 to the number associated with the user. In this example, the port number for the user **admin** is 5901.

#### Step 3: Connecting to the Edge device using VNC

To access and connect to the Edge device, you must create a remote access point.

1. In the Cumulocity tenant for your registered Edge device, add a remote access endpoint. See [Adding remote access endpoints](/guides/users-guide/optional-services/#adding-remote-access-endpoints-via-vnc). You must use the same port number that is allocated for you.

2. Connect to the endpoint. See [Connecting to endpoints](/guides/users-guide/optional-services/#connecting-to-endpoints).

The connection to the Edge VM is established and the GUI appears for the Edge VM. Right-click in the screen to open the desktop components **xterm** and **firefox**.

<img src="/guides/images/edge/edge-vnc-gui-screen.png" alt="Edge VNC" style="max-width: 75%">

#### Changing the VNC password

You can change the VNC password for the current user by running the *vnc-user-setup.sh* script. After changing the password, you must update the password in the remote access endpoint.

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

<img src="/guides/images/users-guide/data-broker-navigator.png" alt="Data broker menus">

In the same way, you can push operations from a Cumulocity tenant account to Cumulocity IoT Edge devices.
 
For details about sending and receiving data in Cumulocity, see [Enterprise Tenant > Using the Data Broker](/guides/users-guide/enterprise-edition#data-broker).

   