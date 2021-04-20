---
weight: 30
title: Upgrading on Hyper-V
layout: redirect
---

>**Info:** Upgrading OPC UA artifact from an older version to the newer version is not supported.

To upgrade the Edge VM on Hyper-V:

1. Shut down the Edge VM from Hyper-V console.

2. Right-click the Edge VM and click **Export**.
<img src="/images/edge/edge-hyper-v-update-export.png" name="Export VM" style="width:85%;"/>

3. Specify the location where you want to save the exported files and click **Export**.<br>
This action creates three folders: *Snapshots*, *Virtual Hard Disks*, and *Virtual Machines*. The *Virtual Hard Disks* folder contains the disk files:
	- *EDGE-server-10.5.0.0-582-HyperV.vhdx* (primary disk)
	- *EDGE-server-10.5.0.0-582-HyperV-0.vhdx* (secondary disk or data disk)

4. Download the latest version to a separate folder.<br>
For example, if you are upgrading to Cumulocity IoT Edge version 10.6, the 10.6 disk files are available in the *Virtual Hard Disks* folder:
	- *EDGE-server-10.6.0.0-1484-HyperV.vhdx*
	- *EDGE-server-10.6.0.0-1484-HyperV-0.vhdx*
	
5. Copy the secondary disk of the exported VM to the *Virtual Hard Disks* folder of the latest version.<br>
For example, copy the 10.5 version secondary disk *EDGE-server-10.5.0.0-582-HyperV-0.vhdx* to the 10.6 version.

6. Delete the secondary disk of the latest version and rename the secondary disk of the exported version to the latest version.<br>
For example:
	- Delete *EDGE-server-10.6.0.0-1484-HyperV-0.vhdx*.
	- Rename *EDGE-server-10.5.0.0-582-HyperV-0.vhdx* to *EDGE-server-10.6.0.0-1484-HyperV-0.vhdx*.

7. Import the Edge VM image as described in [Setting up Hyper-V](/edge/installation/#setting-up-hyper-v).

8. Start the Edge VM by clicking **Start**.

9. Run the post-upgrade task to complete the upgrade process. See [Running post-upgrade](/edge/installation/#running-post-upgrade).