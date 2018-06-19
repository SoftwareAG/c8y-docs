---
order: 30
title: Setting up the environment
layout: redirect
---

### Setting up VirtualBox

Download the VirtualBox package for your operating system from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) and install it.

>**Info**: In the Virtualbox, the configuration is in the “Global Tools” tab in the upper right corner.

1. Click **Create** to set a host only network interface for VM. 

1. Navigate to **File** > **Preferences** > **Network** to check the network settings. <br>
<img src="/guides/images/edge/edge-vm-nat-network.png" name="Configure network" style="width:75%;"/>

1. In the "NAT Network" tab, click the plus icon to add a new network.

1. In the "Name" field, enter a name for the new network, e.g. "NatNetwork". 

1. Click the settings icon on the right and make sure that “Enable network” is activated, which is the default. This network interface is used for outbound Internet/Intranet access. <br>
<img src="/guides/images/edge/edge-vm-nat-network-details.png" name="NAT network details" style="width:75%;"/>

1. Switch to the “Host-only Networks” tab and click the plus icon to add a new host-only network. “VirtualBox Host-Only Ethernet Adapter” will be created.>br>
<img src="/guides/images/edge/edge-vm-host-only-networks.png" name="NAT network details" style="width:75%;"/>

1. Click the settings icon on the right and make sure that IP and mask is set to the following values:

* IP: 192.168.56.1
* Mask: 255.255.255.0

<img src="/guides/images/edge/edge-vm-host-only-details.png" name="NAT network details" style="width:75%;"/>

1. Click the "DHCP Server" tab and make sure that the DHCP server is not enabled.

<img src="/guides/images/edge/edge-vm-dhcp.png" name="NAT network details" style="width:75%;"/>

The VirtualBox now is installed and the network is set.

### Setting up port forwarding

Follow the steps below, to setup port forwarding.

1. In the Virtual Box, click **Settings**. Under settings, click **Network** and then click **Port forwarding**.

2. In the “Port Forwarding Rules” window, click the plus (+) icon. Add the details for the HTTP port as shown below.<br>
The Host IP is the Operating System IP address on which Edge VM is running. Host port is "80" for HTTP. Guest IP is the Edge VM IP address which is always "192.168.56.120" and Guest port is "80".

1. Follow the same steps and add details for other incoming and outgoing traffic, see [Prerequisites -> Network connectivity](#prerequisites).
Once all port details have been added, it should look similar to the following screenshot:
 
1. Click **OK** in the "Port Forwarding Rules" window and then in the "Settings" window to complete port forwarding on Edge VM.
1. 


### Starting the virtual machine

In the VirtualBox, the virtual machine is imported via File > Import Appliance > Select .ova file. 

Alternatively, you can double-click on the provided .OVA file. The machine will automatically be added to the Virtualbox VM Manager. 

The machine has predefined settings for disk, CPU and memory.

Once the machine has been imported it will show up in the Manager application.

<img src="/guides/images/edge/edge-vm-import.png" name="Import VM" style="width:75%;"/>

Start the virtual machine by clicking the **Start** button on the top left.

>**Info**: The machine description can be found in the "Description" tab (right-click on machine > Settings > General > Description).

### VM login details

Use the following login credentials for SSH login into the Edge instance:
 
* Username: admin
* Password: manage

Use the following command to log into Edge server via SSH:

	$ Password: manage
	
>**Info**: The default user for Edge is “admin”. The admin user has root privileges for the machine.  