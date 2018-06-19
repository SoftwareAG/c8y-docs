---
order: 30
title: Setting up the environment
layout: redirect
---

### Setting up VirtualBox

Download the VirtualBox package for your operating system from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) and install it.

>**Info**: In the Virtualbox, the configuration is in the “Global Tools” tab in the upper right corner.

Click **Create** to set a host only network interface for VM. 

Navigate to **File** > **Preferences** > **Network** to check the network settings. 

<img src="/guides/images/edge/edge-vm-nat-network.png" name="Configure network" style="width:75%;"/>

In the "NAT Network" tab, click the plus icon to add a new network.

In the "Name" field, enter a name for the new network, e.g. "NatNetwork". 

Click the settings icon on the right and make sure that “Enable network” is activated, which is the default. This network interface is used for outbound Internet/Intranet access.

<img src="/guides/images/edge/edge-vm-nat-network-details.png" name="NAT network details" style="width:75%;"/>

Switch to the “Host-only Networks” tab and click the plus icon to add a new host-only network. “VirtualBox Host-Only Ethernet Adapter” will be created.

<img src="/guides/images/edge/edge-vm-host-only-networks.png" name="NAT network details" style="width:75%;"/>

Click the settings icon on the right and make sure that IP and mask is set to the following values:

* IP: 192.168.56.1
* Mask: 255.255.255.0

<img src="/guides/images/edge/edge-vm-host-only-details.png" name="NAT network details" style="width:75%;"/>

Click the "DHCP Server" tab and make sure that the DHCP server is not enabled.

<img src="/guides/images/edge/edge-vm-dhcp.png" name="NAT network details" style="width:75%;"/>

The VirtualBox now is installed and the network is set.


### Starting the virtual machine

In the VirtualBox, the virtual machine is imported via File > Import Appliance > Select .ova file. 

Alternatively, you can double-click on the provided .OVA file. The machine will automatically be added to the Virtualbox VM Manager. 

The machine has predefined settings for disk, CPU and memory.

Once the machine has been imported it will show up in the Manager application.

<img src="/guides/images/edge/edge-vm-import.png" name="Import VM" style="width:75%;"/>

Start the virtual machine by clicking the **Start** button on the top left.

>**Info**: The machine description can be found in the "Description" tab (right-click on machine > Settings > General > Description).

### VM login details

The default user for EDGE is “admin”. This is the only user customer will be logging in as. Root privileges for the machine are restricted to customer. 


Use the following login credentials for SSH login into the Edge instance:
 
* Username: admin
* Password: manage

Use the following command to log into Edge server via SSH:

	$ Password: manage