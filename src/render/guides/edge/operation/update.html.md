---
order: 25
title: Upgrading the system
layout: redirect
---

Follow the steps below to upgrade the system. 

1. Power off the VM by right-clicking the VM (e.g. EDGE-server) in the VirtualBox Manager, and click **Close** -> Power off. 

2. Navigate to the VirtualBox VMs folder (e.g. C:\Users\edge\VirtualBox VMs) and copy the entire VM folder (e.g. EDGE-server) to a safe location.

3. In the VirtualBox Manager, right-click on the VM and then click **Remove**. In the upcoming window, select **Remove Only** so that the VM will not be deleted. 

4. Import the new OVA file (upgraded one supplied by Cumulocity) by clicking  **File** -> **Import Appliance** in the VirtualBox Manager, and browsing for it. 

5. The new Edge version should now be visible in the VirtualBox Manager in powered-off state. 

6. Right-click on the VM and select **Settings**. In the upcoming window, select **Storage**. Two disks should be visible called "disk001.vmdk" and "disk002.vmdk". 

7. Right-click on the second disk i.e. disk002.vmdk, and select **Remove attachment**. 

8. Right-click on the second controller i.e. SATA controller and select **Add Hard Disk**. In the upcoming window, select **Choose existing disk**. 

9. In the explorer, navigate to the Edge VM folder. Select the secondary disk, i.e. disk002.vmdk, and click **OK**.

10. Power on the VM by clicking the **Start** button. 

11. Verify, whether DB and property files are intact and unchanged.
