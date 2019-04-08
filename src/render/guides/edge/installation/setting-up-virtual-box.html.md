---
order: 50
title: Example setup for VirtualBox
layout: redirect
---

### Setting up VirtualBox

Download the VirtualBox package for your operating system from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) and install it.

>**Important**: VirtualBox support is deprecated, therefore we do not recommended to use it in a production environment.

>**Info**: Depending on the operating system and VirtualBox version you are using, the following steps and especially the screenshots might slightly differ.

1. In the VirtualBox, click **Global Tools** in the top right.<br><br>
<img src="/guides/images/edge/edge-vb-01a.png" name="Configure network" style="width:75%;"/>

2. Click **Create** to set a host-only network interface for VM.<br><br>
<img src="/guides/images/edge/edge-vb-02a.png" name="Configure network" style="width:75%;"/>

3. Navigate to **File** > **Preferences** > **Network** to check the network settings. <br><br>
<img src="/guides/images/edge/edge-vb-03.png" name="Configure network" style="width:75%;"/>

4. In the **NAT Networks** tab, click the plus icon to add a new network.

5. Click the settings icon on the right and make sure that **Enable network** is activated, which is the default. This network interface is used for outbound Internet/Intranet access. <br><br>
<img src="/guides/images/edge/edge-vb-04.png" name="NAT network details" style="width:75%;"/>

6. Click **OK** to save your settings.

7. Click **Global Tools** in the top right. Select VirtualBox Host-Only Ethernet Adapter.<br><br>
<img src="/guides/images/edge/edge-vb-05.png" name="NAT network details" style="width:75%;"/>

8. Click the properties icon on the right and make sure that **IPv4 Address** and **IPv4 Mask** are set to the following values: IPv4 Adress = 192.168.56.1, IPv4 Mask = 255.255.255.0 <br><br>
<img src="/guides/images/edge/edge-vb-06.png" name="NAT network details" style="width:75%;"/><br>
If, in your VirtualBox, there already is a Host-Only Ethernet Adapter configured with the same IPv4 address, then update its properties as described in the next steps.

9. Click the **DHCP Server** tab and make sure that the DHCP server is not enabled.<br><br>
<img src="/guides/images/edge/edge-vb-07.png" name="NAT network details" style="width:75%;"/>

The VirtualBox now is installed and the network is set.

### Starting the virtual machine

In the VirtualBox, the virtual machine is imported via **File** > **Import Appliance** > Select .ova file. 

Alternatively, you can double-click on the provided .ova file. The machine will automatically be added to the VirtualBox VM Manager. 

The machine has predefined settings for disk, CPU and memory.

Once the machine has been imported it will show up in the Manager application.

<img src="/guides/images/edge/edge-vm-import.PNG" name="Import VM" style="width:75%;"/>

Start the virtual machine by clicking **Start** on the top left.

**Info**: The machine description can be found on the **Description** tab (right-click on **Machine** > **Settings** > **General** > **Description**).

#### Troubleshooting

In case of the following error, proceed as described below. 

![Error](/guides/images/edge/edge-vb-error.png)

Click **Change network setting** and select the VirtualBox Host-Only Ethernet Adapter which has been configured in Step 8 above. 

The VirtualBox metadata files for VM appliance keep the "VirtualBox Host-Only Ethernet Adapter" name based on the host OS. If this adapter name differs with what is bundled in Edge, it has to be manually selected.


### <a name="port-forwarding"></a>Setting up port forwarding

Follow the steps below, to setup port forwarding.

1. In the Virtual Box, click **Machine Tools** in the top right.<br><br>
<img src="/guides/images/edge/edge-port-forwarding1.png" name="Port forwarding Step 1" style="width:75%;"/>

2. Click **Settings** in the top left. Under settings, click **Network**, open the network you previously created and then click **Port forwarding**.<br><br>
<img src="/guides/images/edge/edge-port-forwarding2.png" name="Port forwarding Step 2" style="width:75%;"/>

3. In the **Port Forwarding Rules** window, click the plus icon. Add the following details for HTTP:<br>
**Name**: HTTP <br>
**Protocol**: TCP<br>
**Host IP**: The Operating System IP address on which Edge VM is running. <br>
**Host port**: 80 <br>
**Guest IP**: The Edge VM IP address which is always 192.168.56.120.<br>
**Guest port**: 80<br><br>
<img src="/guides/images/edge/edge-port-forwarding3.png" name="Port forwarding Step 3" style="width:75%;"/>

4. Follow the same steps and add details for other incoming and outgoing traffic, see [Prerequisites > Network connectivity](#prerequisites).
Once all port details have been added, it should look similar to the following screenshot:<br><br>
<img src="/guides/images/edge/edge-port-forwarding4.png" name="Port forwarding result" style="width:75%;"/>
 
5. Click **OK** in the **Port Forwarding Rules** window and then in the **Settings** window to complete port forwarding on Edge VM.