---
order: 70
title: Example setup for VMware Workstation Player
layout: redirect
---

### Setting up for VMware

To set up a VM in VMware workstation, follow the steps below.

**Info**: The following steps show a reference example. Refer to the VMware documentation for the exact setup. The final configuration also depends on the end user setup.

1. In VMWare, navigate to **Player** > **File** > **Open** to import the Edge VM. <br>
<img src="/guides/images/edge/edge-vmware-01.png" name="Setting up VMware" />

2.	Navigate to the folder where the Edge VM files are located, select the OVF file and click **Open**.
 <br>
<img src="/guides/images/edge/edge-vmware-02.png" name="Setting up VMware"/>

3.	Provide a name for the new VM and click **Import**. You can also change the VM storage path here.    <br>
<img src="/guides/images/edge/edge-vmware-03.png" name="Setting up VMware"/>

4.	Start the Edge VM by clicking **Play virtual machine**. <br>
<img src="/guides/images/edge/edge-vmware-04.png" name="Setting up VMware"/>


### Configuring the VM network

Once the VM has successfully been imported, the VM network has to be configured to access the Edge VM instance so that it is accessible from the host.

To do so, the following information is required:

* Edge VM IP - specifies which VM can be connected from outside
* Netmask
* Gateway IP
* DNS server IP (if unknown, you can use the gateway IP here as well)

If you are not aware of these details, you may use the "vmnetcfg" utility provided by VMware, see below.

Run the post installation to configure the network.

### Setting up for vmnetcfg utility

Alternatively, you can use the "vmnetcfg" utility to retrieve all network details like subnet IP and netmask, which will be required while configuring the network using post installation.

>**Info**: The "vmnetcfg" utility is for Windows hosts only.

1. Download the file *vmnetcfg.exe* from the internet. It can also be extracted from the VM Workstation Pro installer. 

2. Store the file *vmnetcfg.exe* in the directory, where the VMWare Workstation player is installed, usually *C:\Program Files (x86)\VMware\VMware Player*.<br>
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



