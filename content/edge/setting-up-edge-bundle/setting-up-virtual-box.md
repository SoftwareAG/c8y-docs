---
weight: 90
title: Experimental example set up on VirtualBox
layout: redirect
---

Cumulocity IoT Edge does not officially support VirtualBox. If you want to convert a VMWare image (OVF file) to VirtualBox image (OVA file), and run Cumulocity IoT Edge on VirtualBox for experimental or trial purposes, follow the example below.

### Converting VMWare OVF file to VirtualBox OVA file

1. Download and install the VMWare Open Virtualization Format Tool (OVF Tool) on the host machine from the VMWare website.

2. Go to the location of the OVF file.

3. Run the following command to convert the OVF file to OVA file:

	`"C:\Program Files (x86)\VMware\VMware Player\OVFTool\ovftool.exe" <source_ovf_file> <target_ova_file>`

	For example:

	`"C:\Program Files (x86)\VMware\VMware Player\OVFTool\ovftool.exe" EDGE-10.7.0-2059-VMware.ovf EDGE-10.7.0-2059-VBox.ova`

	A sample screenshot:

	<img src="/images/edge/edge-ovftool-command.png" name="OVF tool command" style="width:75%;"/>

4. Import the converted VirtualBox image (OVA file) in VirtualBox Manager.

5. Create a host-only network adapter for the virtual machine. See [Creating a host-only network interface](/edge/installation/#creating-a-host-only-network-adapter).

6. Select the network adapter for the VirtualBox image. Click **Settings** > **Network** > **Adapter 2**.

7. Select **Enable Network Adapter**.

8. Select **Host-only Adapter** from the **Attached to:** dropdown list.

9. Select the host-only network adapter that you created before, from the **Name** dropdown list.

	<img src="/images/edge/edge-host-only-adapter.png" name="OVF tool command" style="width:75%;"/>

10. Start the Edge appliance and log in as **root** user. See [Starting the virtual machine](/edge/installation/#starting-the-virtual-machine).

11. Configure and activate the network adapter.
    
    - Start the *NetworkManager* service.
	 
		`[root@iot-edge-server ~]# systemctl start NetworkManager`

	- Update the name of the newly added connection.
		 
		`[root@iot-edge-server ~]# nmcli connection modify “Wired connection 2” connection.id “enp0s8"`

	- Activate the connection.

		`[root@iot-edge-server ~]# nmcli connection up enp0s8`

		This command provides an error **Error: Connection activation failed: IP configuration could not be reserved (no available address, timeout, etc.)**. Ignore this error.

12. Restart the Edge appliance.

13. Log in as **admin** user.

14. Configure the Edge appliance network using the post-installer. See [Configuring the Edge network](/edge/installation/#configuring-the-edge-network).

15. Run the post installation process. See [Running the post installation process](/edge/installation/#running-the-post-installation-process).

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

7. Click the properties icon on the right and make sure that **IPv4 Address** and **IPv4 Mask** are set to the following values: IPv4 Address = 192.168.56.1, IPv4 Mask = 255.255.255.0 <br>
<img src="/images/edge/edge-vb-07.png" name="NAT network details" style="width:75%;"/><br>
If, in your VirtualBox, there already is a Host-Only Ethernet Adapter configured with the same IPv4 address, then update its properties as described in the next steps.

8. Click the **DHCP Server** tab and make sure that the DHCP server is not enabled.<br>
<img src="/images/edge/edge-vb-08.png" name="NAT network details" style="width:75%;"/>

The VirtualBox now is installed and the network is set.

### Starting the virtual machine

In the VirtualBox Manager, import the virtual machine. Click **File** > **Import Appliance** > Select the OVA file. 

The machine will automatically be added to the VirtualBox Manager. The machine has predefined settings for disk, CPU and memory.

Click **Start** to start the virtual machine.

### <a name="port-forwarding"></a>Setting up port forwarding

To setup port forwarding, follow the steps below:

1. In the VirtualBox Manager, click **Machine Tools**.<br>
<img src="/images/edge/edge-port-forwarding1.png" name="Port forwarding Step 1" style="width:75%;"/>

2. Click **Settings** > **Network**. Open the network you previously created and then click **Port forwarding**.<br>
<img src="/images/edge/edge-port-forwarding2.png" name="Port forwarding Step 2" style="width:75%;"/>

3. In the **Port Forwarding Rules** window, click the plus icon. Add the following details for HTTP:<br>
**Name**: HTTP <br>
**Protocol**: TCP<br>
**Host IP**: The operating system IP address on which the Edge appliance is running. <br>
**Host port**: 80 <br>
**Guest IP**: The Edge appliance IP address is always 192.168.56.120.<br>
**Guest port**: 80<br><br>
<img src="/images/edge/edge-port-forwarding3.png" name="Port forwarding Step 3" style="width:75%;"/>

4. Follow the same steps and add details for other incoming and outgoing traffic, see [Prerequisites > Network connectivity](#prerequisites).
Once all port details have been added, it should look similar to the following screenshot:<br>
<img src="/images/edge/edge-port-forwarding4.png" name="Port forwarding result" style="width:75%;"/>
 
5. Click **OK** in the **Port Forwarding Rules** window.

6. Click **OK** in the **Settings** window to complete port forwarding on the Edge appliance.

### Upgrading on VirtualBox

>**Info:** Upgrading OPC UA artifact from an older version to the newer version is not supported.

1. Power off the VM. Right-click the respective VM (e.g. EDGE-server) and click **Close** > **Power off**.

2. Navigate to the VM directory. For VirtualBox it is *[USER-DIRECTORY]\VirtualBox VMs*. Move the entire VM folder (e.g. EDGE-server) to a safe location.

3. Right-click the VM and click **Remove**. Select **Remove Only**, so that the VM will not be deleted. 
<img src="/images/edge/edge-update-remove.jpg" name="Remove VM" style="width:75%;"/> 

4. Import the new version of Edge appliance. Click **File** > **Import Appliance** in the VirtualBox Manager. Select the new OVA file (upgraded one supplied by Cumulocity IoT) and click **Open** to import it. 

5. Right-click the VM and select **Settings**> **Storage**. Two disks should be visible called *disk001.vmdk* and *disk002.vmdk*. 

6. Right-click the second disk, that is *disk002.vmdk*, and select **Remove attachment**. 

7. Right-click the second controller, that is SATA controller and select **Add Hard Disk**. Select **Choose existing disk**. 
<img src="/images/edge/edge-update-harddisk.jpg" name="Add hard disk" style="width:75%;"/> 

8. Navigate to the previously backed-up EDGE folder as per step 2. Select the secondary disk, that is *disk002.vmdk*, and click **OK**.

9. Click **Start** to start the Edge appliance. 

10. Run the post-upgrade task to complete the upgrade process. See [Running post-upgrade](/edge/installation/#running-post-upgrade).

### Backup and restore

#### Backup

To back up the data: 

1. Power off the VM. Right-click the respective VM (e.g. EDGE-server) and click **Close** > **Power off**.<br><br>
<img src="/images/edge/edge-poweroff.jpg" name="Poweroff Edge" style="width:75%;"/> 
<br>
2. Click **File** > **Export Appliance**.<br><br>
<img src="/images/edge/edge-backup2.jpg" name="Backup Edge" style="width:75%;"/>  
<br>
3. Enter the location and name and click **Export**.<br><br>
<img src="/images/edge/edge-backup1.jpg" name="Backup Edge" style="width:75%;"/> 

#### Restore

To restore the data:

1. Click **File** > **Import Appliance**.<br><br>
<img src="/images/edge/edge-restore1.jpg" name="Restore Edge" style="width:75%;"/> 
<br> 
2. Browse for the OVA image and select the image. <br><br>
<br>
3. Click **Start** to power on the VM. 

		