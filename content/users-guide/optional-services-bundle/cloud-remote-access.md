---
weight: 20
title: Cloud Remote Access
layout: redirect
---

The Cumulocity IoT Cloud Remote Access microservice allows you to remotely access operating panels and other devices via a web browser.

### When to use Cloud Remote Access

To provide the best level of control, remote devices should be represented as devices in the Device Management of Cumulocity IoT, with the corresponding reporting, remote control and real-time functionality.

In some cases however, it is not possible or not economic to implement every aspect of a machine or remote device in a Cumulocity IoT agent. For example, it might be a legacy device that does not have APIs for accessing certain parts of the functionality, or it may have many very low-level configuration parameters that would be very involved to map to Cumulocity IoT.

In this case, you can use Cloud Remote Access to securely manage remote devices. The benefit is that you manage the device in the same way as if you had it physically close to you.

>**Important:** Be aware that using Cloud Remote Access includes administrative intervention:
>
>* Often, devices have no detailed permission management, so you give a user very fundamental access to the device.
* When using Cumulocity IoT to remotely operate machinery, make sure that all remote operations follow the safety standards.

### Supported protocols and gateways

The following protocols are supported:

* Remote Desktop (VNC)
	* Shares the desktop of the remote device
	* Mouse and keyboard for interaction
* Secure Shell (SSH)
	* Console for command line access
	* Keyboard for interaction
* Terminal (Telnet)
	* Protocol used for old device types
	* Console for command line access
	* Keyboard for interaction

The following gateways are supported:

* Netcomm NTC 6200
	* Gateway router device
	* Latest Firmware (4.2.1)
	* VNCProxy plugin
* Linux agent
	* Can be used on any linux-based gateway device
	* Latest version required
* Third-party devices
	* Many third-party devices are supported, for details see [Cumulocity IoT Device Partner Portal](https://devicepartnerportal.softwareag.com/devices).

### How Cloud Remote Access works

Cloud Remote Access is a secure way to directly access remote devices through a web browser.

![VNC](/images/users-guide/cra/cra-VNC1a.png)

The following protocols are supported:

* Remote Desktop (VNC)
* Secure Shell (SSH)
* Terminal (Telnet)

Cloud Remote Access works as in the illustration below. The remotely controlled device runs a VNC, SSH or Telnet server and is connected to a gateway compatible with Cloud Remote Access. This gateway must be registered as a device within the Device Management application in Cumulocity IoT. More information about registering devices and instructions can be found in [Device Management > Device Registration](/users-guide/device-management/#connecting-devices) in the User guide.

![VNC2](/images/users-guide/cra/cra-VNC2.png)

With Cloud Remote Access users can

* view status visualizations and track updates of remote devices directly in the same way as if you were at the device location,
* connect to remote devices easily as complex VPN setups are not required,
* establish connection via Telnet or SSH to the gateway itself or to any device in the local area network.

![VNC1b](/images/users-guide/cra/cra-VNC1b.png)

The connection to remote devices is securely encrypted through TLS technology. Additionally, passwords are encrypted in your Cumulocity IoT account, so that you do not need to manage them elsewhere.


### Using Cloud Remote Access

Cloud Remote Access is available in the Device Management application.

To use Cloud Remote Access, the following prerequisites have to be met:

* a Cloud Remote Access compatible gateway connected to your Cumulocity IoT account;
* a remote device with a VNC, SSH or Telnet server that is connected to the gateway and reachable from the gateway;
* "Remote access" permission granted to the tenant user;
* Cloud Remote Access microservice included into your subscription plan.

Click **All devices** and select the desired gateway from the device list.

![Device list](/images/users-guide/cra/cra-device-list.png)

When you open the gateway you will find the **Remote access** tab in its tab list.

![Remote access tab](/images/users-guide/cra/cra-remote-access-tab.png)

In the **Remote Access** tab, you can configure devices for remote control, so-called "endpoints", and connect to remote devices.

Connections can be established to the gateway itself (localhost) or to any device in the local area network reachable by the device.

>**Info:** If you do not see the **Remote access** tab in the details of your gateway but all prerequisites are met, or if you are a gateway manufacturer and would like to support Cloud Remote Access on your gateway, please contact [product support](/about-doc/contacting-support).<br>

### Configuring endpoints

The "endpoint" is the IP address and port of the VNC, SSH or Telnet server running on the remote device. The IP address and port need to be reachable from the gateway. 	

![Endpoints](/images/users-guide/cra/cra-endpoint-add.png)

To configure new remote devices, click **Add endpoint**. Follow the descriptions below for configuring the various types of endpoints.

>**Info:** To be able to configure an endpoint, you need ADMIN permission for "Remote access" and "Device control". To read data, a READ permission is sufficient. For more information on permissions, refer to [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the User guide.

#### Adding remote access endpoints via VNC

To configure a remote access endpoint via VNC, enter a description for the remote access endpoint, the IP address and port, and the password of the VNC server. Click **Save** to add the endpoint to the list.

![Remote access endpoint](/images/users-guide/cra/cra-endpoint-vnc.png)

Once the connection is established, a new browser tab will open displaying the front screen or operating panel of the remote device you are connected to. The top bar of the screen will show “starting VNC handshake” when the process is starting.

#### Adding remote access endpoints via Telnet

Enter the name of the endpoint. Select the Telnet protocol from the dropdown menu. Enter the IP address and the port. When ready, click **Save**.

![Remote access Telnet endpoint](/images/users-guide/cra/cra-endpoint-telnet.png)

>**Important:** Be aware, that Telnet is considered to be an insecure protocol lacking built-in security measures. For network communication in a production environment we highly recommend to use the SSH protocol instead.


#### Adding remote access endpoints via SSH

To configure a remote access endpoint via SSH, enter the name of the endpoint, select the "SSH" protocol from the dropdown list, and enter the IP address and the port. There are two Sign-in methods to be selected:

- Username and password: If this method is selected, it is mandatory to enter username and password.

	![SSH username and password sign in](/images/users-guide/cra/cra-endpoint-ssh-username.png)

- Public/private keys: Automatically generate public and private keys or simply paste pre-generated keys. The keys can also be uploaded from a file.

	![SSH public/private keys sign in](/images/users-guide/cra/cra-endpoint-ssh-publicprivatekeys.png)

> **Info:** The public key needs to be installed on the remote device as authorized_key.

Optionally, you can also add a host key to ensure connection to the correct device. This key can also be uploaded from a file.

Click **Save** to save your settings.

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

#### Editing or removing endpoints

To edit or remove an endpoint, click the menu icon at the right of a row and select **Edit** or **Remove** from the context menu.

![Edit endpoints](/images/users-guide/cra/cra-endpoint-menu.png)

#### Auto-saving host key

A host key is a public key of the server which is generated when an SSH server is installed. It is used to verify the identity of the server.

By enabling the auto-saving host key functionality you will no longer need to enter the host key after each connection. Instead, the host key can be automatically saved after the first successfully established connection to a remote access endpoint.

In order to enable the auto-save host key functionality, navigate to the **Remote access** page under the **Settings** menu in the **Administration** application. Activate the checkbox and then click **Save**.

![Save host key](/images/users-guide/cra/cra-administration-settings.png)

### Connecting to endpoints

To connect to configured endpoints, choose an endpoint in the **Remote access** tab and click **Connect**.

![Connect Endpoint](/images/users-guide/cra/cra-endpoint-connect.png)

The connection to the configured remote device is established and the VNC, SSH or Telnet screen is shared in the client area.

![Telnet connection](/images/users-guide/cra/cra-connect-telnet.png)

To terminate the connection, click **Disconnect**.

### Audit logs

Audit logs are available for each gateway device.

For each connection the Cloud Remote Access microservice creates an operation in scope of the current user. The operation then will be updated by the device to reflect the current status. Finally the operation will be in state SUCCESSFUL or FAILED.

The audit logs can be found in the **Control** tab of the gateway device.

![Display Audit logs](/images/users-guide/cra/cra-control-tab.png)

### Compatibility and limitations

#### VNC protocol

The following versions of the VNC protocol are currently supported:

* RFB 003.003
* RFB 003.007
* RFB 003.008

The functionality has been tested on the following VNC servers:

* Real VNC 5.3.2
* Tiger VNC 1.6.0/1.7.0
* TightVNC 1.3.9
* EfonVNC 4.2
* Vino

The following operating systems/browsers are currently supported:

|Operating system|Browser|Touch|Swipe|Keyboard|Pointer
|:---|:---|:---|:---|:---|:---
|Windows 10|Edge 38|Yes|Yes|Yes|Minor
|Windows 10|Internet Explorer 11.5.6.7|Yes|Yes|Yes|Minor
|Windows 10|Firefox 51|Yes|Yes|Yes|Yes
|Ubuntu 16.04|Chrome 56|Minor|Yes|Yes|Yes
|Ubuntu 16.04|Firefox 51|Minor|Yes|Yes|Yes
|MacOS|Safari|Yes|Yes|Yes|Yes
|iOS 10.2.1|Safari|Yes|Minor|No|n/a
|Android 6.0.1|Chrome|Yes|Minor|No|n/a
|Android 6.0.1|Stock browser 5.0|Yes|Minor|No|n/a

#### Telnet protocol

The following limitations apply to Cloud Remote Access for Telnet:

|Area|Scrolling|Reflow on width change|Bitmap fonts|Vector fonts|Mouse tracking|Application keypad|Tabs|Split screen
|:---|:---|:---|:---|:---|:---|:---|:---|:---
|Console|Yes|No|Yes|Yes|Yes|Yes|?|Yes
|xterm|Yes|No|Yes|Yes|Yes|Yes|No|No


#### SSH protocol

For Cloud Remote Access for SSH the same limitations as mentioned for Telnet apply (see above). Also the following additional limitations are known:

* International characters are not to be supported yet.
* Only limited number of control characters are working. For example interrupt (CTRL+c) is not working yet.
* Mouse movements are not supported.
* Only SSHv2 protocol is supported.


### Troubleshooting

**Endpoints cannot be set up**

 If you cannot set up new endpoints, check if you have sufficient permissions.

To set up new endpoints, you need ADMIN permission for "Device control" to be able to register a device and ADMIN permission for "Remote access" to be able to add an endpoint.

To establish a connection to a remote operating panel, a READ permission for "Remote access" is sufficient.

For more information on permissions, refer to [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the User guide.

**Connection fails**

The connection via a gateway to a remote VNC, SSH or Telnet server can fail because of network problems. In this case you need to contact your network administrator.

**Unsupported protocol version**

In case of Real VNC, if you get an error message stating that you are using an unsupported protocol version (e.g. 005.00x), try the following workaround:

1. Open VNC.
2. Navigate to **Options**.
3. Select the **Export** tab.
4. Search for "ProtocolVersion".
5. Enter "3.8" as protocol version.x
