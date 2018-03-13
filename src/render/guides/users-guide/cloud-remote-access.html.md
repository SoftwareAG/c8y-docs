---
order: 130
title: Cloud Remote Access
layout: default
---

## <a name="cloud_remote_access"></a>Cloud Remote Access

### Introduction

Cumulocity Cloud Remote Access implements Virtual Network Computing (VNC) to remotely access operating panels and other devices via a web browser.

![VNC](/guides/images/users-guide/VNC1a.png)

Cloud Remote Access works as in the illustration below. Starting from the remote-controlled device: The device runs a VNC server and is connected to a gateway compatible with Cloud Remote Access. This gateway must be registered as a device within the Device Management application in Cumulocity. More information about registering devices and instructions can be found here: [Device Registration](https://www.cumulocity.com/guides/users-guide/device-management/#device-registration).

![VNC2](/guides/images/users-guide/VNC2.png)

With Cloud Remote Access users can

* view status visualizations and track updates of remote devices immediately as if the user were at the device location,
* connect to remote devices easily as complex VPN setups are not required. 

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

### How to add and connect to endpoints

The "endpoint" is the IP address and port of the VNC server running on the device. The IP address and port need to be reachable from the gateway. 

![Endpoints](/guides/images/users-guide/endpoints.png)

To configure remote devices, click **Add endpoint**. 

In the upcoming window, enter a description for the remote access endpoint, the IP address and port, and the password of the VNC server. Click **Save** to add the endpoint to the list.

![Remote access endpoint](/guides/images/users-guide/remoteaccess.png)

>**Info**: To be able to configure an endpoint, you need "Change" permission for "Remote access" and "Device control". To read data, a “Read” permission is sufficient. For more information on permissions, refer to the [*Administration Guide*](https://www.cumulocity.com/guides/users-guide/administration/#users).

To connect to configured endpoints, choose an endpoint in the "Remote access" tab and click **Connect**. The VNC connection will start. 

![Connect Endpoint](/guides/images/users-guide/connectendp.png)

A new browser tab will open displaying the front screen or operating panel of the device you are connected to. The top bar of the screen will show “starting VNC handshake” when the process is starting. 

To edit or remove an endpoint, click the menu icon at the right of a row and select **Edit** or **Remove** from the context menu.

![Edit endpoints](/guides/images/users-guide/editendpoint.png)

### Troubleshooting

If you cannot set up new endpoints, check if you have sufficient permissions.

To set up new endpoints, you need "Change" permission for "Device control" to be able to register a device and “Change” permission for "Remote access" to be able to add an endpoint. 

To establish a connection to a remote operating panel, a “Read” permission for "Remote access" is sufficient.

For more information on permissions, refer to the [*Administration Guide*](https://www.cumulocity.com/guides/users-guide/administration/#users).

The VNC connection via a gateway to a remote VNC server can fail because of network problems. In this case you need to contact your network administrator.

The functionality has been on the following VNC servers:

* Real VNC Connect 6.0.2	
* TightVNC 1.3.9
* TigerVNC 1.7.0
* EfonVNC 4.2
