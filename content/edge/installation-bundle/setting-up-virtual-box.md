---
weight: 90
title: Experimental example set up on VirtualBox
layout: redirect
---

Cumulocity IoT Edge does not officially support VirtualBox. If you want to convert a VMWare image (OVF file) to VirtualBox image (OVA file), and run Cumulocity IoT Edge on it for experimental or trial purposes, you can follow the example below.

### Converting VMWare OVF file to VirtualBox OVA file

1. Download and install the VMWare Open Virtualization Format Tool (OVF Tool) on the host machine.

2. Go to the location of the OVF file.

3. Run the following command to convert the OVF file to OVA file:

	`ovftool.exe source_ovf_file target_ova_file`

	For example:

	`ovftool.exe EDGE-server-10.7.0.0-2059-VMware.ovf EDGE-server-10.7.0.0-2059-VBox.ova`

	<img src="/images/edge/edge-ovftool-command.png" name="OVF tool command" style="width:75%;"/>

4. Import the converted VirtualBox image (OVA file) in VirtualBox Manager.

5. Create a host-only network adapter for the virtual machine. See [Creating a host-only network interface](/edge/installation/#creating-a-host-only-network-adapter).

6. Click **Settings** > **Network** > **Adapter 2**.

7. Select **Enable Network Adapter**.

8. Select **Host-only Adapter** from the **Attached to:** dropdown list.

9. Select the host-only network adapter that you created before, from the **Name** dropdown list.

	<img src="/images/edge/edge-host-only-adapter.png" name="OVF tool command" style="width:75%;"/>

10. Start the Edge VM and log in as **root** user. See [Starting the virtual machine](/edge/installation/#starting-the-virtual-machine).

11. Configure and activate the network adapter.
    
    - Start the *NetworkManager* service.
	 
		`[root@server ~]# systemctl start NetworkManager`

	- Update the name of the newly added connection.
		 
		`[root@server ~]# nmcli connection modify “Wired connection 2” connection.id “enp0s8"`

	- Activate the connection.

		`[root@server ~]# nmcli connection up enp0s8`

		This command provides an error **Error: Connection activation failed: IP configuration could not be reserved (no available address, timeout, etc.)**. You can ignore this error.

12. Restart the Edge VM.

13. Log in as **admin** user.

14. Configure the Edge VM network using the post-installer. See [Configuring the Edge network](/edge/installation/#configuring-the-edge-network).

15. Run the post installation process. [Running the post installation process](/edge/installation/#running-the-post-installation-process).

### Creating a host-only network adapter

>**Info:** Depending on the operating system and VirtualBox version you are using, the following steps and the screenshots might differ. The sample screenshots shared below were created using VirtualBox 5.2.8.

1. In the VirtualBox, click **Tools** > **Network** in the top left.<br>
<img src="/images/edge/edge-vb-01.png" name="Configure network" style="width:75%;"/>

2. Click **Create** to set a host-only network interface for VM.<br>
<img src="/images/edge/edge-vb-02.png" name="Configure network" style="width:75%;"/>

3. Navigate to **File** > **Preferences** > **Network** to check the network settings. <br>
<img src="/images/edge/edge-vb-03.png" name="Configure network" style="width:75%;"/>

4. In the **NAT Networks** tab, click the plus icon to add a new network.

5. Click the settings icon on the right and make sure that **Enable network** is activated, which is the default. This network interface is used for outbound Internet/Intranet access. <br>
<img src="/images/edge/edge-vb-05.png" name="NAT network details" style="width:75%;"/>

6. Click **Tools** > **Network** in the top left. Select VirtualBox Host-Only Ethernet Adapter.<br>
<img src="/images/edge/edge-vb-06.png" name="NAT network details" style="width:75%;"/>

7. Click the properties icon on the right and make sure that **IPv4 Address** and **IPv4 Mask** are set to the following values: IPv4 Adress = 192.168.56.1, IPv4 Mask = 255.255.255.0 <br>
<img src="/images/edge/edge-vb-07.png" name="NAT network details" style="width:75%;"/><br>
If, in your VirtualBox, there already is a Host-Only Ethernet Adapter configured with the same IPv4 address, then update its properties as described in the next steps.

8. Click the **DHCP Server** tab and make sure that the DHCP server is not enabled.<br>
<img src="/images/edge/edge-vb-08.png" name="NAT network details" style="width:75%;"/>

The VirtualBox now is installed and the network is set.

### Starting the virtual machine

In the VirtualBox, the virtual machine is imported via **File** > **Import Appliance** > Select .ova file. 

The machine will automatically be added to the VirtualBox VM Manager. The machine has predefined settings for disk, CPU and memory.

Start the virtual machine by clicking **Start** on the top left.

**Info:** The machine description can be found on the **Description** tab (right-click on **Machine** > **Settings** > **General** > **Description**).

#### Troubleshooting

In case of the following error, proceed as described below. 

![Error](/images/edge/edge-vb-error.png)

Click **Change network setting** and select the VirtualBox Host-Only Ethernet Adapter which has been configured in Step 8 above. 

The VirtualBox metadata files for VM appliance keep the "VirtualBox Host-Only Ethernet Adapter" name based on the host OS. If this adapter name differs with what is bundled in Cumulocity IoT Edge, it has to be manually selected.


### <a name="port-forwarding"></a>Setting up port forwarding

Follow the steps below, to setup port forwarding.

1. In the Virtual Box, click **Machine Tools** in the top right.<br>
<img src="/images/edge/edge-port-forwarding1.png" name="Port forwarding Step 1" style="width:75%;"/>

2. Click **Settings** in the top left. Under settings, click **Network**, open the network you previously created and then click **Port forwarding**.<br>
<img src="/images/edge/edge-port-forwarding2.png" name="Port forwarding Step 2" style="width:75%;"/>

3. In the **Port Forwarding Rules** window, click the plus icon. Add the following details for HTTP:<br>
**Name**: HTTP <br>
**Protocol**: TCP<br>
**Host IP**: The operating system IP address on which the Edge VM is running. <br>
**Host port**: 80 <br>
**Guest IP**: The Edge VM IP address is always 192.168.56.120.<br>
**Guest port**: 80<br><br>
<img src="/images/edge/edge-port-forwarding3.png" name="Port forwarding Step 3" style="width:75%;"/>

4. Follow the same steps and add details for other incoming and outgoing traffic, see [Prerequisites > Network connectivity](#prerequisites).
Once all port details have been added, it should look similar to the following screenshot:<br>
<img src="/images/edge/edge-port-forwarding4.png" name="Port forwarding result" style="width:75%;"/>
 
5. Click **OK** in the **Port Forwarding Rules** window and then in the **Settings** window to complete port forwarding on Edge VM.

### Upgrading on VirtualBox

>**Info:** Upgrading OPC UA artifact from an older version to the newer version is not supported.

To upgrade the Edge VM on VirtualBox:

1. Power off the VM. To do so, access the VM and run the following command in the terminal:

```
[admin@server ~]$ sudo shutdown
```
2. Navigate to the VM directory. For VirtualBox it is *[USER-DIRECTORY]\VirtualBox VMs*. Move the entire VM folder (e.g. EDGE-server) to a safe location.

3. In the VirtualBox Manager, right-click on the VM and then click **Remove**. In the upcoming window, select **Remove Only** so that the VM will not be deleted. 
<img src="/images/edge/edge-update-remove.jpg" name="Remove VM" style="width:75%;"/> 

4. Import the new version of EDGE server. To do so, click **File** and then **Import Appliance** in the VirtualBox Manager. Select the new OVA file (upgraded one supplied by Cumulocity IoT) and click **Open** to import it. 
<br>The new Edge version should now be visible in the VirtualBox Manager in powered-off state. 

5. Right-click the VM and select **Settings**. In the upcoming window, select **Storage**. Two disks should be visible called *disk001.vmdk* and *disk002.vmdk*. 

6. Right-click the second disk i.e. *disk002.vmdk*, and select **Remove attachment**. 

7. Right-click the second controller i.e. SATA controller and select **Add Hard Disk**. In the upcoming window, select **Choose existing disk**. 
<img src="/images/edge/edge-update-harddisk.jpg" name="Add hard disk" style="width:75%;"/> 

8. In the explorer, navigate to the previously backed-up EDGE folder as per step 2. Select the secondary disk, i.e. *disk002.vmdk*, and click **OK**.

9. Start the Edge VM by clicking **Start**. 

10. Run the post-upgrade task to complete the upgrade process. See [Running post-upgrade](/edge/installation/#running-post-upgrade).

		