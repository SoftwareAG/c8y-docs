---
weight: 90
title: Example setup for Hyper-V
layout: redirect
---

To set up Hyper-V, you must first enable Hyper-V on your system, and  create Network Address Translation (NAT) virtual switch. For enabling Hyper-V, see the Microsoft documentation.

### Creating a NAT virtual switch

The steps in this section show a reference example. Refer to the Microsoft documentation for the exact setup. The final configuration also depends on the end user setup.

Run all the commands in Windows PowerShell as an administrator.

1. Create a new NAT virtual switch.
```
PS C:\WINDOWS\system32> New-VMSwitch -SwitchName "NATSwitchForEDGE" -SwitchType Internal
```
2. Verify that the new virtual switch is created.
```
PS C:\WINDOWS\system32> Get-NetAdapter
```
<br>
<img align="centre" src="/guides/images/edge/edge-hyper-v-get-netadapter.png" name="Get-NetAdapter" style="width:75%;"/>
Note down the `ifIndex` of the adapter. The `ifIndex` in the above screenshot is 31. The same `ifIndex` should be used in the next step.

3. Assign an IP address for the adapter.
```
PS C:\WINDOWS\system32> New-NetIPAddress -IPAddress 192.168.66.1 -PrefixLength 24 -InterfaceIndex 31
```
4. Create a NAT rule.
```
PS C:\WINDOWS\system32> New-NetNat -Name NATSwitchForEDGE -InternalIPInterfaceAddressPrefix 192.168.66.0/24
```

### Setting up Hyper-V

After creating a NAT virtual switch, you must import the Edge VM image into Hyper-V.

1. In Hyper-V Manager, go to **Action** > **Import Virtual Machine**. <br>
<img src="/guides/images/edge/edge-hyper-v-001.png" name="Import Virtual Machine" style="width:75%;"/>

2. In the **Before You Begin** wizard, click **Next**. <br>
<img src="/guides/images/edge/edge-hyper-v-002.png" name="Before You Begin" style="width:75%;"/>

3. Provide the location of the Edge VM image and click **Next**. <br>
<img src="/guides/images/edge/edge-hyper-v-003.png" name="Locate Folder" style="width:75%;"/>

4. Select the Edge VM and click **Next**. <br>
<img src="/guides/images/edge/edge-hyper-v-004.png" name="Select Virtual Machine" style="width:75%;"/>

5. In the **Choose Import Type** wizard, select **Register the virtual machine in-place (use the existing unique ID)**. <br>
<img src="/guides/images/edge/edge-hyper-v-005.png" name="Choose Import Type" style="width:75%;"/>

6. Click **Finish**. The Edge VM image appears in the Hyper-V Manager. <br>
<img src="/guides/images/edge/edge-hyper-v-006.png" name="Completing Import Wizard" style="width:75%;"/>

7. Right-click the Edge VM image and click **Connect**. <br>
<img src="/guides/images/edge/edge-hyper-v-007.png" name="Connecting to Edge VM" style="width:75%;"/>

>**Note**: By default, the NTP servers are configured to Europe NTP servers. You can configure the NTP server as per your requirements before using the Edge VM on Hyper-V. 