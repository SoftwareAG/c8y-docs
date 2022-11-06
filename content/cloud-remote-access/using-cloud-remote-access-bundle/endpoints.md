---
title: Managing endpoints
weight: 30
layout: bundle
---

The "endpoint" is the IP address and port of the VNC, SSH or Telnet server running on the remote device. The IP address and port must be reachable from the gateway. 	

#### To configure a new remote device

1. Click **Add endpoint** at the right of the top menu bar.

	![Endpoints](/images/cra/cra-endpoint-add.png)

2. Enter a name for the new endpoint and select the protocol to be used.
3. Follow the descriptions below for the protocol-specific settings.

{{< c8y-admon-info >}}
To be able to configure an endpoint, you need ADMIN permission for "Remote access" and "Device control". To read data, a READ permission is sufficient. For more information on permissions, refer to [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the *User guide*.
{{< /c8y-admon-info >}}

<a name="adding-remote-access-endpoints-via-vnc"></a>
#### To add a remote access endpoint via VNC

1. Enter the host (IP address or hostname) and the port of the server.
2. Select a sign-in method. If you select "Password only", provide the password for the VNC server.
3. Click **Save** to add the endpoint.

![Remote access endpoint](/images/cra/cra-endpoint-vnc.png)

Once the connection is established, a new browser tab will open displaying the front screen or operating panel of the remote device you are connected to. The top bar of the screen will show "starting VNC handshake" when the process is starting.


#### To add a remote access endpoint via SSH

1. Enter the host (IP address or hostname) and the port of the server.
2. Select a sign-in method.<br>

	Username and password: If this method is selected, it is mandatory to enter a username and password.

	![SSH username and password sign in](/images/cra/cra-endpoint-ssh-username.png)

	Public/private keys: Automatically generate public and private keys or simply paste pre-generated keys. The keys can also be uploaded from a file.

	![SSH public/private keys sign in](/images/cra/cra-endpoint-ssh-publicprivatekeys.png)

	{{< c8y-admon-info >}}
The public key needs to be installed on the remote device as authorized key.
	{{< /c8y-admon-info >}}

	Optionally, you can also add a host key to ensure connection to the correct device. This key can also be uploaded from a file.

3. Click **Save** to add the endpoint.


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

#### To add a remote access endpoint via Telnet

1. Enter the host (IP address or hostname) and the port of the server.
2. Click **Save** to add the endpoint.
![Remote access Telnet endpoint](/images/cra/cra-endpoint-telnet.png)

{{< c8y-admon-important >}}
Telnet is considered to be an insecure protocol lacking built-in security measures. For network communication in a production environment we highly recommend you to use the SSH protocol instead.
{{< /c8y-admon-important >}}

#### To edit an endpoint

To edit an endpoint, click the menu icon at the right of the respective entry and select **Edit** from the context menu.

#### To delete an endpoint

To delete an endpoint, click the menu icon at the right of the respective entry and select **Remove** from the context menu.

{{< c8y-admon-info >}}
An active connection will not be terminated automatically after the endpoint was deleted.
{{< /c8y-admon-info >}}

<a name="connecting-to-endpoints"></a>
#### To connect to an endpoint

To connect to configured endpoints, select an endpoint in the **Remote access** tab and click **Connect**.

![Connect Endpoint](/images/cra/cra-endpoint-connect.png)

The connection to the configured remote device is established and the VNC, SSH or Telnet screen is shared in the client area.

![Telnet connection](/images/cra/cra-connect-telnet.png)

To terminate the connection, click **Disconnect**.


#### Auto-saving host key functionality

A host key is a public key of the server which is generated when an SSH server is installed. It is used to verify the identity of the server.

By enabling the auto-saving host key functionality you will no longer need to enter the host key after each connection. Instead, the host key can be automatically saved after the first successfully established connection to a remote access endpoint.

In order to enable the auto-save host key functionality, navigate to the **Remote access** page under the **Settings** menu in the **Administration** application. Activate the checkbox and then click **Save**.

![Save host key](/images/cra/cra-administration-settings.png)
