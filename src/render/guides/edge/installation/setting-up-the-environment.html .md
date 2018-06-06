---
order: 20
title: Setting up the environment
layout: redirect
---

### Setting up VirtualBox

Download the VirtualBox package for your operating system from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) and install it.

After installation, navigate to **File** > **Preferences** > **Network** to check the network settings. 

<img src="/guides/images/edge/vb_configure-network-ports.png" name="Configure network" style="width:75%;"/>

In the "NAT Network" tab, click the plus icon to add a new network.

In the "Name" field, enter a name for the new network, e.g. "myNewNetwork". 

Click the settings icon on the right and make sure that “Enable network” is enabled, which is the default. This network is used by hosts (VMs) for Internet access.

The Network CIDR must be set to "10.0.2.0/24", which is the default.

Switch to the “Host-only Networks” tab and click the plus icon to add a new host-only network. “VirtualBox Host-Only Ethernet Adapter” will be created.

Click the settings icon on the right and make sure that IP and mask is set to the following values:

IP: 192.168.56.1
Mask: 255.255.255.0

Click the "DHCP Server" tab and make sure that the DHCP server is not enabled.

The VirtualBox now is installed and the network is set.


### Starting VM

In the VirtualBox, importing is done via File > Import Appliance > Select .ova file. Once the machine has been imported it will show up in the Manager Application.

Alternatively, you can double-click on the provided .OVA file. The machine will automatically be added to the Virtualbox VM Manager. 

The machine has predefined settings for disk, CPU and memory.

Start VM by clicking the **Start** button on top left.

>**Info**: The machine description can be found in the "Description" tab (right click on machine > Settings > General > Description).

Username: root
Password: C8Y#2018

The machine can be reached via its IP address:

	192.168.56.101

The following users have been created:

Username: management/admin
Password: admin-pass

Username: edge/edge
Password: C8Y#2018

### Importing the certificate in the browser

For a secure communication (HTTPS) with the server you need to import a security certificate in your browser.

> **Info**: The following step refer to importing a security certificate for the Chrome browser. The procedure is similar for any other browser.

1. Click "Chrome" > "Preferences" to open the settings section. 
2. Click "Manage Certificates" in the "Privacy & Security" section (under "Advanced").
3. Import the provided .crt file from the folder "cert" in the file "cert-tools.zip".
4. Activate all three check boxes under "Trust settings" and click **OK**.

The certificate is imported. To view it, select it in the browser and click **View**.
