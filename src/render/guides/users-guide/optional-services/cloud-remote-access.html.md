---
order: 30
title: Cloud Remote Access
layout: redirect
---


### Introduction

Cumulocity Cloud Remote Access implements Virtual Network Computing (VNC) to remotely access operating panels and other devices via a web browser.

![VNC](/guides/images/users-guide/VNC1a.png)

Cloud Remote Access works as in the illustration below. Starting from the remote-controlled device: The device runs a VNC server and is connected to a gateway compatible with Cloud Remote Access. This gateway must be registered as a device within the Device Management application in Cumulocity. More information about registering devices and instructions can be found here: [Device Registration](/guides/users-guide/device-management/#device-registration).

![VNC2](/guides/images/users-guide/VNC2.png)

With Cloud Remote Access users can

* view status visualizations and track updates of remote devices immediately as if the user were at the device location,
* connect to remote devices easily as complex VPN setups are not required. 
* establish connection via Telnet or SSH to the gateway itself or to any device in the local area network. 

![VNC1b](/guides/images/users-guide/VNC1b.png)

The connection to remote devices is securely encrypted through TLS technology. Additionally, passwords are encrypted in your Cumulocity account, so that you do not need to manage them elsewhere.

### Using Cloud Remote Access

Cloud Remote Access is available in the Device Management application. 

To use Cloud Remote Access, the following prerequisites have to be met:

* a Cloud Remote Access compatible gateway connected to your Cumulocity account;
* a device with a VNC server that is connected to the gateway and reachable from the gateway;
* Cloud Remote Access included into your subscription plan. 

>**Info**: If the prerequisites are met and you do not see the "Remote access" tab in the tab list of your gateway contact sales@cumulocity.com.

Click "All devices" and select the desired gateway from the device list. 

![router device](/guides/images/users-guide/routerdevice.png)

When you open the device you will find the “Remote access” tab in the tab list of the device. 

In the "Remote Access" tab you will find a list of devices for remote control, so-called "endpoints".

### Adding new endpoints

The "endpoint" is the IP address and port of the VNC, SSH or Telnet server running on the device. The IP address and port need to be reachable from the gateway. 	

![Endpoints](/guides/images/users-guide/endpoints.png)

To configure remote devices, click **Add endpoint**. 

>**Info**: To be able to configure an endpoint, you need "Change" permission for "Remote access" and "Device control". To read data, a “Read” permission is sufficient. For more information on permissions, refer to the [Administration Guide](/guides/users-guide/administration/#managing-permissions).

**Adding remote access endpoints via VNC**

In the upcoming window, enter a description for the remote access endpoint, the IP address and port, and the password of the VNC server. Click **Save** to add the endpoint to the list.

![Remote access endpoint](/guides/images/users-guide/remoteaccess.png)

Once the connection is established new browser tab will open displaying the front screen or operating panel of the device you are connected to. The top bar of the screen will show “starting VNC handshake” when the process is starting. 

**Adding remote access endpoints via Telnet**

Enter the name of the endpoint. Select the Telnet protocol from the dropdown menu. Enter the IP address and the port. When ready, click **Save**.

![Remote access Telnet endpoint](/guides/images/users-guide/telnetendpoint.png)

**Adding remote access endpoints via SSH**

First enter the name of the endpoint. Then, select the "SSH" protocol from the dropdown menu. Enter the IP address and the port. There are two Sign-in methods which can be selected:

- Username and password: If this method is selected, it is mandatory to enter username and password.
![SSH username and password sign in](/guides/images/users-guide/sshusernameandpass.png)

- Public/private keys: Automatically generate public and private keys or simply paste pre-generated keys. The keys can also be uploaded from a file. 
![SSH public/priave keys sign in](/guides/images/users-guide/publicprivatekeys.png)

Optionally you can also add a host key to ensure connection to the right device. This key can also be uploaded from a file.

When ready, click **Save**.

The following formats are supported when adding new keys:
- OpenSSHv1
- OpenSSHv2
- PEM
- SSH2

The following algorithms are supported when adding new keys:

- RSA
- DSA
- ECDSA
- ED25519

**Editing or removing endpoints**

To edit or remove an endpoint, click the menu icon at the right of a row and select **Edit** or **Remove** from the context menu.

![Edit endpoints](/guides/images/users-guide/editendpoint.png)

### Connecting to endpoints

To connect to configured endpoints, choose an endpoint in the "Remote access" tab and click **Connect**. The connection will then start. 

![Connect Endpoint](/guides/images/users-guide/connectendp.png)

To close the connection at any time, click **Disconnect**.

### Displaying the audit logs

Audit logs are displayed as usual for each device. For each connection the Cloud Remote Access microservice creates an operation in scope of the current user. The operation then will be updated by the device to reflect the current status. Finally the operation will be in state SUCCESSFUL or FAILED.

The audit logs can be found in the "Control" tab of the device.

![Display Audit logs](/guides/images/users-guide/displayauditlogs.png)

### Troubleshooting

If you cannot set up new endpoints, check if you have sufficient permissions.

To set up new endpoints, you need "Change" permission for "Device control" to be able to register a device and “Change” permission for "Remote access" to be able to add an endpoint. 

To establish a connection to a remote operating panel, a “Read” permission for "Remote access" is sufficient.

For more information on permissions, refer to the [Administration Guide](/guides/users-guide/administration/#managing-permissions).

The VNC connection via a gateway to a remote VNC server can fail because of network problems. In this case you need to contact your network administrator.

The functionality has been on the following VNC servers:

* Real VNC Connect 6.0.2	
* TightVNC 1.3.9
* TigerVNC 1.7.0
* EfonVNC 4.2
