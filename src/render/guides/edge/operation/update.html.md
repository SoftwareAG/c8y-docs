---
order: 25
title: Upgrading the system
layout: redirect
---

Follow the steps below to upgrade the system. 

1. To power off the VM, right-click on the respective VM (e.g. EDGE-server) in the VirtualBox Manager click **Close** and then **Power off**.
<img src="/guides/images/edge/edge-poweroff.jpg" name="Poweroff Edge" style="width:75%;"/> 

2. Navigate to the VirtualBox VMs folder (e.g. C:\Users\edge\VirtualBox VMs) and move the entire VM folder (e.g. EDGE-server) to a safe location.
<img src="/guides/images/edge/edge-update-move.jpg" name="Move folder" style="width:75%;"/> 

3. In the VirtualBox Manager, right-click on the VM and then click **Remove**. In the upcoming window, select **Remove Only** so that the VM will not be deleted. 
<img src="/guides/images/edge/edge-update-remove.jpg" name="Remove VM" style="width:75%;"/> 

4. In the VirtualBox Manager, click **File** and then **Import Appliance**. Select the new OVA file (upgraded one supplied by Cumulocity) and click **Open** to import it. 
<img src="/guides/images/edge/edge-update-import.jpg" name="Import VM" style="width:75%;"/> 

The new Edge version should now be visible in the VirtualBox Manager in powered-off state. 

5. Right-click on the VM and select **Settings**. In the upcoming window, select **Storage**. Two disks should be visible called "disk001.vmdk" and "disk002.vmdk". 

6. Right-click on the second disk i.e. disk002.vmdk, and select **Remove attachment**. 
<img src="/guides/images/edge/edge-update-storage.jpg" name="Storage" style="width:75%;"/> 
<br>

7. Right-click on the second controller i.e. SATA controller and select **Add Hard Disk**. In the upcoming window, select **Choose existing disk**. 
<img src="/guides/images/edge/edge-update-harddisk.jpg" name="Add hard disk" style="width:75%;"/> 
<br>

8. In the explorer, navigate to the Edge VM folder. Select the secondary disk, i.e. disk002.vmdk, and click **OK**.<br>
<img src="/guides/images/edge/edge-update-choose-disk.jpg" name="Choose disk" style="width:75%;"/> 
<br>

9. Power on the VM by clicking the **Start** button. 

10. Verify, whether DB and property files are intact and unchanged.
