---
order: 30
title: Setting up the environment
layout: redirect
---

### Setting up VirtualBox

Download the VirtualBox package for your operating system from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) and install it.

>**Info**: Depending on the operating system and VirtualBox version you are using, the following steps and especially the screenshots might slightly differ.

1. In the VirtualBox, click **Global Tools** in the top right.
<img src="/guides/images/edge/edge-vb-01.png" name="Configure network" style="width:75%;"/>

2. Click **Create** to set a host only network interface for VM.
<img src="/guides/images/edge/edge-vb-02.png" name="Configure network" style="width:75%;"/>

3. Navigate to **File** > **Preferences** > **Network** to check the network settings. <br>
<img src="/guides/images/edge/edge-vm-nat-network.png" name="Configure network" style="width:75%;"/>

4. In the "NAT Networks" tab, click the plus icon to add a new network.

5. Click the settings icon on the right and make sure that “Enable network” is activated, which is the default. This network interface is used for outbound Internet/Intranet access. <br>
<img src="/guides/images/edge/edge-vm-nat-network-details.png" name="NAT network details" style="width:75%;"/>

6. Click **OK** to save your settings.

7. Switch to the “Host-only Networks” tab (or depending on your VirtualBox version click the “Host-only Networks” button) and click the plus icon to add a new host-only network. “VirtualBox Host-Only Ethernet Adapter” will be created.<br>
<img src="/guides/images/edge/edge-vm-host-only-networks.png" name="NAT network details" style="width:75%;"/>

8. Click the settings icon on the right and make sure that IP and mask is set to the following values: IP = 192.168.56.1, Mask = 255.255.255.0 <br>
<img src="/guides/images/edge/edge-vm-host-only-details.png" name="NAT network details" style="width:75%;"/>

9. Click the "DHCP Server" tab and make sure that the DHCP server is not enabled.

<img src="/guides/images/edge/edge-vm-dhcp.png" name="NAT network details" style="width:75%;"/>

The VirtualBox now is installed and the network is set.

### Setting up port forwarding

Follow the steps below, to setup port forwarding.

1. In the Virtual Box, click **Machine Tools** in the top right.
<img src="/guides/images/edge/edge-port-forwarding1.png" name="Port forwarding Step 1" style="width:75%;"/>

2. Click **Settings** in the top left. Under settings, click **Network**, open the network you previously created and then click **Port forwarding**.
<img src="/guides/images/edge/edge-port-forwarding2.png" name="Port forwarding Step 2" style="width:75%;"/>

3. In the “Port Forwarding Rules” window, click the plus (+) icon. Add the following details for HTTP:<br>
**Name**: HTTP <br>
**Protocol**: TCP<br>
**Host IP**: The Operating System IP address on which Edge VM is running. <br>
**Host port**: 80 <br>
**Guest IP**: The Edge VM IP address which is always 192.168.56.120.<br>
**Guest port**: 80<br>
<img src="/guides/images/edge/edge-port-forwarding3.png" name="Port forwarding Step 3" style="width:75%;"/>

4. Follow the same steps and add details for other incoming and outgoing traffic, see [Prerequisites -> Network connectivity](#prerequisites).
Once all port details have been added, it should look similar to the following screenshot:<br>
<img src="/guides/images/edge/edge-port-forwarding4.png" name="Port forwarding result" style="width:75%;"/>
 
5. Click **OK** in the "Port Forwarding Rules" window and then in the "Settings" window to complete port forwarding on Edge VM.


### Starting the virtual machine

In the VirtualBox, the virtual machine is imported via File > Import Appliance > Select .ova file. 

Alternatively, you can double-click on the provided .OVA file. The machine will automatically be added to the VirtualBox VM Manager. 

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