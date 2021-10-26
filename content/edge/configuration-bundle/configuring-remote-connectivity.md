---
weight: 20
title: Configuring remote-connectivity
layout: redirect
---

The {{< product-c8y-iot >}} tenant allows you to remotely manage your Edge appliance by registering the Edge appliance in the {{< product-c8y-iot >}} tenant account. To do so, you must first enable remote-connectivity in the Edge appliance and then register your Edge appliance in the {{< product-c8y-iot >}} tenant account. The {{< product-c8y-iot >}} tenant uses the SSH protocol to access the remote Edge appliance through a web browser.

>**Important:** If you want to configure remote-connectivity, you must configure the DNS when configuring the network, for example, using the `/edge/configuration/network` endpoint.

### Configuring remote-connectivity using the UI

1. Log in to the {{< management-tenant >}}.

	- Username: management/<*username*>
	- Password: password provided during the installation

2. Switch to the **Administration** application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Remote Connectivity** in the navigator.

4. Click **Enable remote connectivity** toggle to enable remote-connectivity.

5. Provide the URL of the {{< product-c8y-iot >}} tenant in the **Remote tenant URL** field.

6. Click **Save**.

Next steps: Note down the Edge device ID and register your Edge appliance in the {{< product-c8y-iot >}} tenant.

### Configuring remote-connectivity using the REST APIs

To configure remote-connectivity, use the following endpoints:

- [POST /edge/configuration/remote-connectivity](/edge/rest-api/#post-edgeconfigurationremote-connectivity)
- [GET /edge/configuration/remote-connectivity](/edge/rest-api/#get-edgeconfigurationremote-connectivity)

<a name="registering-the-edge-appliance-in-the-cumulocity-iot-tenant"></a>
### Registering the Edge appliance in the Cumulocity IoT tenant

Before performing these steps, ensure that you have configured the URL for the {{< product-c8y-iot >}} tenant in the Edge appliance.   

1. Log in to your {{< product-c8y-iot >}} tenant.
2. Go to **Device Management**.
3. Click **Registration** in the **Devices** menu and then click **Register device**.
4. Select **General device registration**.

	<img src="/images/users-guide/DeviceManagement/devmgmt-registration-general.png" alt="General device registration" style="max-width: 100%">

5. In the **Device ID** field, enter the Edge device ID.
6. Click **Next**.
7. Click **Complete** to register your Edge appliance.<br>
   After successful registration, the Edge appliance appears in the [**Device registration**](/users-guide/device-management/#dev-registration) page with the status **Waiting for connection**.<br>
   Turn on the Edge appliance and wait for the connection to be established.
   Once the device is connected, the device status changes to **Pending acceptance**.
8. Click **Accept** to confirm the connection. The status of the device changes to **Accepted**.

<a name="accessing-the-edge-appliance-from-the-cumulocity-iot-tenant"></a>
### Accessing the Edge appliance from the Cumulocity IoT tenant

The {{< product-c8y-iot >}} Cloud Remote Access allows you to remotely access the Edge appliance through a web browser. The remote Edge appliance is represented as a device in the Device Management application of {{< product-c8y-iot >}}.

#### Prerequisites

To use Cloud Remote Access, you need:

* "Remote access" permission granted to the tenant user.
* The Cloud Remote Access microservice included into your subscription plan.

#### Supported protocols

The following protocols are supported to connect to the Edge appliance through remote access from the {{< product-c8y-iot >}} tenant:

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

### Accessing the Edge appliance remotely through VNC

You can access the Edge appliance from the {{< product-c8y-iot >}} tenant by installing the VNC components on your Edge appliance.

**Info:** Ensure that you have registered your Edge appliance with the {{< product-c8y-iot >}} tenant. See [Registering the Edge appliance in the {{< product-c8y-iot >}} tenant](/edge/configuration/#registering-the-edge-appliance-in-the-cumulocity-iot-tenant).

#### Step 1: Installing the VNC components

**Info:** The Edge appliance must be connected to the internet to install the VNC components.

1. Run the script *vnc-setup.sh*.

	` [admin@iot-edge-server ~]$ sudo /opt/c8y/utilities/vnc-setup.sh`

The *vnc-setup.sh* script installs the VNC components. After installing the VNC components, you should configure the VNC server for each user.

#### Step 2: Configuring VNC server for a user

To configure the VNC server, run the *vnc-user-setup.sh* script. Each user should run this script to set up VNC components and be able to connect to the Edge appliance. The *vnc-user-setup.sh* script enables the current user to use VNC functionality and set a VNC password for the current user.

1. Run the script *vnc-user-setup.sh*.

	` [admin@iot-edge-server ~]$ /opt/c8y/utilities/vnc-user-setup.sh`

2. Provide and verify the password.

3. Select **Y** or **N** to enter a view-only password.

Record the allocated port number. This port number will be used to connect to the VNC server on your Edge appliance.

**Info:** You can also get the allocated port number from the */opt/c8y/utilities/vnc-display-mapping* file. In this file, you will find the VNC display number allocated for each user. For example, admin:1. You must add 5900 to the number associated with the user. In this example, the port number for the user **admin** is 5901.

#### Step 3: Connecting to the Edge appliance using VNC

To access and connect to the Edge appliance:

1. In the {{< product-c8y-iot >}} tenant for your registered Edge appliance, add a remote access endpoint. See [Adding remote access endpoints](/cloud-remote-access/using-cloud-remote-access/#adding-remote-access-endpoints-via-vnc). You must use the same port number that is allocated for you.

2. Connect to the endpoint. See [Connecting to endpoints](/cloud-remote-access/using-cloud-remote-access/#connecting-to-endpoints).

The connection to the Edge appliance is established and the GUI appears for the Edge appliance. Right-click in the screen to open the desktop components **xterm** and **firefox**.

<img src="/images/edge/edge-vnc-gui-screen.png" alt="Edge VNC" style="max-width: 75%">

**Important:** Do not use the **Send Ctrl+Alt+Del** button in the VNC interface. If you do so, you will lose the VNC connection and not be able to reconnect until you restart the Edge appliance.

#### Changing the VNC password

You can change the VNC password for the current user by running the *vnc-user-setup.sh* script. After changing the password, you must update the password in the remote access endpoint.

### Accessing the Edge appliance remotely through SSH

You can access the Edge appliance from the {{< product-c8y-iot >}} tenant through SSH.

**Info:** Ensure that you have registered your Edge appliance with the {{< product-c8y-iot >}} tenant. See [Registering the Edge appliance in the {{< product-c8y-iot >}} tenant](/edge/configuration/#registering-the-edge-appliance-in-the-cumulocity-iot-tenant).

To access and connect to the Edge appliance:

1. In the {{< product-c8y-iot >}} tenant for your registered Edge appliance, add a remote access endpoint. See [Adding remote access endpoints](/cloud-remote-access/using-cloud-remote-access/#to-add-a-remote-access-endpoint-via-ssh). You must use the same port number that is allocated for you.

2. Connect to the endpoint. See [Connecting to endpoints](/cloud-remote-access/using-cloud-remote-access/#connecting-to-endpoints).

### Data exchange using data broker

Data broker lets you upload the data to a {{< product-c8y-iot >}} tenant account selectively. Note that you must first create a {{< product-c8y-iot >}} tenant account.

You can share the following data with the tenant account:

* devices (and more generically, managed objects)
* events
* alarms
* measurements

>**Important:** Data broker in {{< product-c8y-iot >}} Edge does not support synchronization of the [operations](/concepts/domain-model/#operations).

To upload the data to a {{< product-c8y-iot >}} tenant account, you must first create a data connector in the Edge appliance and subscribe this connector in the tenant account. 

A data connector describes the subset of the data that you would like to send to a destination tenant. For more information, see [{{< enterprise-tenant >}} > Using the data broker > Data connector](/users-guide/enterprise-tenant/#data-connectors).

To create a data connector and upload the data to the tenant account, perform the following steps:

1. In your Edge applaince, log in to the *edge* tenant.

2. In your Edge appliance, go to the Administration application. Click **Data broker** > **Data connectors**.

   <img src="/images/users-guide/enterprise-tenant/et-data-broker-navigator.png" alt="Data broker menus">

3. Click **Add data connector** and provide all the information and filters. See [{{< enterprise-tenant >}} > Using the data broker > Data connector > To add a data connector](/users-guide/enterprise-tenant/#to-add-a-data-connector) in the *User guide*.

   Note down the security code. This security code will be used to subscribe the connector in the tenant account.

4. Log in to the {{< product-c8y-iot >}} tenant account.

5. In the tenant account, go to the Administration application. Click **Data broker** > **Data subscriptions** to subscribe the connector created in your Edge appliance.

   Click **Add data subscription** and provide the security code. Click **Submit** and accept the subscription. See [{{< enterprise-tenant >}} > Using the data broker > Data subscriptions](/users-guide/enterprise-tenant/#data-subscriptions) in the *User guide*.

   You can now navigate to the Device Management application or the Cockpit application. You will find a new “virtual group” with a specific icon showing the forwarded devices. The group will have the same name as your subscription. 

For more information about sending and receiving data in {{< product-c8y-iot >}}, see [{{< enterprise-tenant >}} > Using the data broker](/users-guide/enterprise-tenant#data-broker).
