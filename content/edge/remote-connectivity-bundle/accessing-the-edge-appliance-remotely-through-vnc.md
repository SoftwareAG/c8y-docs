---
weight: 30
title: Accessing the Edge appliance remotely through VNC
layout: redirect
---

You can access the Edge appliance from the {{< product-c8y-iot >}} tenant by installing the VNC components on your Edge appliance.

**Info:** Ensure that you have registered your Edge appliance with the {{< product-c8y-iot >}} tenant. See [Registering the Edge appliance in the {{< product-c8y-iot >}} tenant](/edge/remote-connectivity/#registering-the-edge-appliance-in-the-cumulocity-iot-tenant).

### Step 1: Installing the VNC components

**Info:** The Edge appliance must be connected to the internet to install the VNC components.

1. Run the script *vnc-setup.sh*.

   ` [admin@iot-edge-server ~]$ sudo /opt/c8y/utilities/vnc-setup.sh`

The *vnc-setup.sh* script installs the VNC components. After installing the VNC components, you should configure the VNC server for each user.

### Step 2: Configuring VNC server for a user

To configure the VNC server, run the *vnc-user-setup.sh* script. Each user should run this script to set up VNC components and be able to connect to the Edge appliance. The *vnc-user-setup.sh* script enables the current user to use VNC functionality and set a VNC password for the current user.

1. Run the script *vnc-user-setup.sh*.

   ` [admin@iot-edge-server ~]$ /opt/c8y/utilities/vnc-user-setup.sh`

2. Provide and verify the password.

3. Select **Y** or **N** to enter a view-only password.

Record the allocated port number. This port number will be used to connect to the VNC server on your Edge appliance.

**Info:** You can also get the allocated port number from the */opt/c8y/utilities/vnc-display-mapping* file. In this file, you will find the VNC display number allocated for each user. For example, admin:1. You must add 5900 to the number associated with the user. In this example, the port number for the user **admin** is 5901.

### Step 3: Connecting to the Edge appliance using VNC

To access and connect to the Edge appliance:

1. In the {{< product-c8y-iot >}} tenant for your registered Edge appliance, add a remote access endpoint. See [Adding remote access endpoints](/cloud-remote-access/using-cloud-remote-access/#adding-remote-access-endpoints-via-vnc). You must use the same port number that is allocated for you.

2. Connect to the endpoint. See [Connecting to endpoints](/cloud-remote-access/using-cloud-remote-access/#connecting-to-endpoints).

The connection to the Edge appliance is established and the UI appears for the Edge appliance. Right-click in the screen to open the desktop components **xterm** and **firefox**.

<img src="/images/edge/edge-vnc-gui-screen.png" alt="Edge VNC" style="max-width: 75%">

**Important:** Do not use the **Send Ctrl+Alt+Del** button in the VNC interface. If you do so, you will lose the VNC connection and not be able to reconnect until you restart the Edge appliance.

### Changing the VNC password

You can change the VNC password for the current user by running the *vnc-user-setup.sh* script. After changing the password, you must update the password in the remote access endpoint. x