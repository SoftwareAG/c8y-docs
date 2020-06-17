---
weight: 25
title: Upgrading on VMware Workstation Player
layout: redirect
---

>**Info:** Upgrading OPC UA artifact from an older version to the newer version is not supported.

To upgrade the Edge VM on VMware Workstation Player:

1. Power off the Edge VM from VMware Workstation Player.

2. Go to the disk folder of the Edge VM.<br>
To find the location of the disk folder, in VMware Workstation Player, click **Edit virtual machine settings** > **Hardware** > **Hard Disk 2 (SCSI)** and see **Disk file** field. 

3. Back up the data disk to a different folder.<br>
For example, if you are upgrading from Edge version 10.5 to version 10.6, back up *EDGE-server-10.5.0.0-584-VMware-disk2.vmdk*. 

4. Remove the Edge VM from VMware Workstation Player.<br>
To remove the Edge VM, right-click the Edge VM and click **Delete from Disk**.

5. Import the latest version of the Edge VM.<br>
For example, import the 10.6 version of the Edge VM.

6. Go to the disk folder of the Edge VM.

7. Copy the backed-up data disk to the disk folder of the Edge VM.<br>
For example, copy the data disk *EDGE-server-10.5.0.0-584-VMware-disk2.vmdk* to the disk folder of the Edge VM.

8. Delete the data disk of the latest version.<br>
For example, delete *EDGE-server-10.6.0.0-1483-VMware-disk2.vmdk*.

9. Rename the data disk of the previous version to the latest version.<br>
For example, rename *EDGE-server-10.5.0.0-584-VMware-disk2.vmdk* to *EDGE-server-10.6.0.0-1483-VMware-disk2.vmdk*.

10. Start the Edge VM by clicking **Power on**.

11. Run the post-upgrade task to complete the upgrade process. See [Running post-upgrade](/edge/installation/#running-post-upgrade).