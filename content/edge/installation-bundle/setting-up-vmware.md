---
weight: 70
title: Example setup for VMware Workstation Player
layout: redirect
---

### Setting up for VMware

To set up a VM in VMware Workstation Player, follow the steps below.

**Info**: The following steps show a reference example. Refer to the VMware documentation for the exact setup. The final configuration also depends on the end user setup.

1. In VMWare, navigate to **Player** > **File** > **Open** to import the Edge VM. <br>
<img src="/guides/images/edge/edge-vmware-01.png" name="Setting up VMware" />

2.	Navigate to the folder where the Edge VM files are located, select the OVF file and click **Open**.<br>
<img src="/guides/images/edge/edge-vmware-02.png" name="Setting up VMware"/>

3.	Change the VM name if required and click **Import**. You can also change the VM storage path here. <br>
<img src="/guides/images/edge/edge-vmware-03.png" name="Setting up VMware"/>

4.	Start the Edge VM by clicking **Play virtual machine**. <br>
<img src="/guides/images/edge/edge-vmware-04.png" name="Setting up VMware"/>


### Configuring Cumulocity IoT Edge

Once the VM starts up successfully, it's network has to be configured, so that it can be accessed from outside the VM.

To do so, the following information is required:

* Edge VM IP - Will be used to access the VM from outside
* Netmask
* Gateway IP
* DNS server IP (if unknown, you can use the gateway IP here as well)

If this information is not available to you, contact your network administrator.  

You may also use the vmnetcfg utility provided by VMware (see below) to obtain the netmask and gateway IP.

Configure the network by completing the "Configure network" task using the post-installer utility, see [Configuration](/guides/edge/installation/configuration).

Finish the Cumulocity IoT Edge configuration by completing the "Run post-installation" task using the post-installer utility, see [Configuration](/guides/edge/installation/configuration).

### Setting up for vmnetcfg utility

You can use the VMware vmnetcfg utility to get the necessary details like subnet mask and gateway IP required for completing the "Configure network" task using the post-installer.

>**Info**: The vmnetcfg utility is for Windows hosts only.

1. Download the correct version of the vmnetcfg utility from the internet. It can also be extracted from the VM Workstation Pro installer. 

2. Store the vmnetcfg binary file (*vmnetcfg.exe*) in the VMware Workstation Player installation directory. In a Windows environment, this is usually *C:\Program Files (x86)\VMware\VMware Player*.<br>
3. Open the file with the appropriate rights. <br>
<img src="/guides/images/edge/edge-vmware-05.png" name="Setting up VMware"/>

4. Select "NAT" as external connection.<br>
5. Click **NAT settings** to open the **NAT Settings** window.<br>

6. Note down the gateway IP address and close the **NAT settings** window.<br>
<img src="/guides/images/edge/edge-vmware-06.png" name="Setting up VMware"/>

7. Click **DHCP Settings** to open the **DHCP Settings** window.<br>
8. In the fields **Starting IP address** and **Ending IP address**, change the IP range from 3 to 254, i.e. if your gateway IP is 192.168.117.2, set the IP range from 192.168.117.3 to 192.168.117.254.<br>
<img src="/guides/images/edge/edge-vmware-07.png" name="Setting up VMware"/>

9. Click **OK** to save your settings.



