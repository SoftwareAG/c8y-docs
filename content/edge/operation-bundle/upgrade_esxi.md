---
weight: 20
title: Upgrading on VMware ESXi
layout: redirect
---

>**Info:** Upgrading OPC UA artifact from an older version to the newer version is not supported.

To upgrade the Edge VM on VMware ESXi:

1. Power off the Edge VM from the ESXi console.

2. Select the Edge VM and click **Actions** > **Export**.
<img src="/images/edge/edge-esxi-update-export.png" name="Remove VM" style="width:85%;"/>

3. Click **OK** to download the files.<br>
This action downloads the following files:
	- *disk-0.vmdk* (primary disk)
	- *disk-1.vmdk* (secondary disk)
	- An OVF file (for example, Generic-Edge-10.4.0.0.8.ovf)

4. Download the latest version to a separate folder.<br>
For example, if you are upgrading to Cumulocity IoT Edge version 10.5, save the following files to a separate folder:
	- *EDGE-server-10.5.0.0-147-ESXi-disk1.vmdk*
	- *EDGE-server-10.5.0.0-147-ESXi-disk2.vmdk*
	- *EDGE-server-10.5.0.0-147-ESXi.ovf*
	- *EDGE-server-10.5.0.0-147-ESXi.mf*

5. Copy the DATA/secondary disk of the exported VM to the latest version.<br>
For example, copy the secondary disk *disk-1.vmdk* to the folder to which you have downloaded the latest version.

6. Remove the secondary disk of the latest version and rename the secondary disk of the exported version to the latest version.<br>
For example:
	- Delete *EDGE-server-10.5.0.0-147-ESXi-disk2.vmdk*
	- Rename *disk-1.vmdk* to *EDGE-server-10.5.0.0-147-ESXi-disk2.vmdk*.

7. If the size of the secondary disk has expanded, you must update the OVF file of the latest version accordingly. In the OVF file, search for the fields **ovf:capacity** and **ovf:capacityAllocationUnits** and update the values as per the values in the exported OVF file.

8. Import the Edge VM image as described in [Setting up ESXi](/edge/installation/#setting-up-esxi).

9. Start the Edge VM by clicking **Power on**.

10. Run the post-upgrade task to complete the upgrade process. See [Running post-upgrade](/edge/installation/#running-post-upgrade).