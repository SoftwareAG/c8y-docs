---
weight: 40
title: Upgrading the system
layout: redirect
---

>**Info**: If you use **opcua-agent-server** and you are upgrading from an earlier version of Edge to the latest version, you must execute the below mentioned commands in your EDGE VM to backup **opcua-agent-server** data. This has to be performed before following any of the steps described below.<br>Additionally, please request the Cumulocity support for root user credentials if you don’t have it.

```shell
mkdir -p /usr/edge/properties/opcua/db
cp -a /etc/opcua/db/. /usr/edge/properties/opcua/db/
```
### Upgrading the system on VMware ESXi

To upgrade the Edge VM on VMware ESXi:

1. Power off the Edge VM from ESXi console.

2. Select the Edge VM and click **Actions** > **Export**.
<img src="/guides/images/edge/edge-esxi-update-export.png" name="Remove VM" style="width:85%;"/>

3. Click **OK** to download the files.<br>
This action downloads the following files:
	- disk-0.vmdk (primary disk)
	- disk-1.vmdk (secondary disk)
	- An OVF file (for example, Generic-Edge-10.4.0.0.8.ovf)

4. Download the latest version to a separate folder.<br>
For example, if you are upgrading to Cumulocity IoT Edge version 10.5, save the following files to a separate folder:
	- EDGE-server-10.5.0.0-147-ESXi-disk1.vmdk
	- EDGE-server-10.5.0.0-147-ESXi-disk2.vmdk
	- EDGE-server-10.5.0.0-147-ESXi.ovf
	- EDGE-server-10.5.0.0-147-ESXi.mf

5. Copy the DATA/secondary disk of the exported VM to the latest version.<br>
For example, copy the secondary disk **disk-1.vmdk** to the folder to which you have downloaded the latest version.

6. Remove the secondary disk of the latest version and rename the secondary disk of the exported version to the latest version.<br>
For example:
	- Delete **EDGE-server-10.5.0.0-147-ESXi-disk2.vmdk**
	- Rename **disk-1.vmdk** to **EDGE-server-10.5.0.0-147-ESXi-disk2.vmdk**.

7. If the size of the secondary disk has expanded, you must update the OVF file of the latest version accordingly. In the OVF file, search for the fields **ovf:capacity** and **ovf:capacityAllocationUnits** and update the values as per the values in the exported OVF file.

8. Import the Edge VM image as described in [Setting up ESXi](/guides/edge/installation/#setting-up-esxi).

### Upgrading the system on VirtualBox

To upgrade the Edge VM on VirtualBox:

1. Power off the VM. To do so, access the VM and run the following command in the terminal:<br>
```shell
sudo shutdown
```

2. Navigate to the VM directory. For VirtualBox it is *[USER-DIRECTORY]\VirtualBox VMs*. Move the entire VM folder (e.g. EDGE-server) to a safe location.
<img src="/guides/images/edge/edge-update-move.jpg" name="Move folder" style="width:75%;"/> 

3. In the VirtualBox Manager, right-click on the VM and then click **Remove**. In the upcoming window, select **Remove Only** so that the VM will not be deleted. 
<img src="/guides/images/edge/edge-update-remove.jpg" name="Remove VM" style="width:75%;"/> 

4. Import the new version of EDGE server. To do so, click **File** and then **Import Appliance** in the VirtualBox Manager. Select the new OVA file (upgraded one supplied by Cumulocity) and click **Open** to import it. 
<img src="/guides/images/edge/edge-update-import.jpg" name="Import VM" style="width:75%;"/> 
<br>The new Edge version should now be visible in the VirtualBox Manager in powered-off state. 

5. Right-click on the VM and select **Settings**. In the upcoming window, select **Storage**. Two disks should be visible called "disk001.vmdk" and "disk002.vmdk". 

6. Right-click on the second disk i.e. disk002.vmdk, and select **Remove attachment**. 
<img src="/guides/images/edge/edge-update-storage.jpg" name="Storage" style="width:75%;"/> 

7. Right-click on the second controller i.e. SATA controller and select **Add Hard Disk**. In the upcoming window, select **Choose existing disk**. 
<img src="/guides/images/edge/edge-update-harddisk.jpg" name="Add hard disk" style="width:75%;"/> 

8. In the explorer, navigate to the previously backed-up EDGE folder as per step 2. Select the secondary disk, i.e. disk002.vmdk, and click **OK**.<br>
<img src="/guides/images/edge/edge-update-choose-disk.JPG" name="Choose disk" style="width:75%;"/> 

9. Power on the VM by clicking the **Start** button. 

10. Invoke the post-installer by running the script *post-installation.sh* located in the directory */opt/c8y/utilities*.<br>
```shell
sudo ./post_installation.sh
```

11. Choose the post-upgrade task (option 4). Provide inputs if prompted and complete the post-upgrade task. For details see [Configuration](/guides/edge/installation#configuration).

10. Verify, whether DB and property files are intact and unchanged.
