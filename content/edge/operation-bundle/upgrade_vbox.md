---
weight: 40
title: Upgrading on VirtualBox
layout: redirect
---

>**Info:** Upgrading OPC UA artifact from an older version to the newer version is not supported.

To upgrade the Edge VM on VirtualBox:

1. Power off the VM. To do so, access the VM and run the following command in the terminal:

```
[admin@server ~]$ sudo shutdown
```
2. Navigate to the VM directory. For VirtualBox it is *[USER-DIRECTORY]\VirtualBox VMs*. Move the entire VM folder (e.g. EDGE-server) to a safe location.

3. In the VirtualBox Manager, right-click on the VM and then click **Remove**. In the upcoming window, select **Remove Only** so that the VM will not be deleted. 
<img src="/guides/images/edge/edge-update-remove.jpg" name="Remove VM" style="width:75%;"/> 

4. Import the new version of EDGE server. To do so, click **File** and then **Import Appliance** in the VirtualBox Manager. Select the new OVA file (upgraded one supplied by Cumulocity IoT) and click **Open** to import it. 
<br>The new Edge version should now be visible in the VirtualBox Manager in powered-off state. 

5. Right-click on the VM and select **Settings**. In the upcoming window, select **Storage**. Two disks should be visible called "disk001.vmdk" and "disk002.vmdk". 

6. Right-click on the second disk i.e. disk002.vmdk, and select **Remove attachment**. 

7. Right-click on the second controller i.e. SATA controller and select **Add Hard Disk**. In the upcoming window, select **Choose existing disk**. 
<img src="/guides/images/edge/edge-update-harddisk.jpg" name="Add hard disk" style="width:75%;"/> 

8. In the explorer, navigate to the previously backed-up EDGE folder as per step 2. Select the secondary disk, i.e. disk002.vmdk, and click **OK**.

9. Start the Edge VM by clicking **Start**. 

10. Run the post-upgrade task to complete the upgrade process. See [Running post-upgrade](/guides/edge/installation/#running-post-upgrade).