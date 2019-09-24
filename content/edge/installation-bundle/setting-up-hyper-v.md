---
weight: 80
title: Example setup for Hyper-V
layout: redirect
---

To set up Hyper-V, you must first enable Hyper-V on your system, and  create Network Address Translation (NAT) adapter. For enabling Hyper-V, see the Microsoft documentation.

### Creating a NAT adapter

Run all the commands in Windows PowerShell as an administrator.

>**IMPORTANT**: You must use the same adapter name and IP addresses as mentioned in these steps.

1. Create a new NAT adapter.
```
PS C:\WINDOWS\system32> New-VMSwitch -SwitchName "NATSwitchForEDGE" -SwitchType Internal
```
2. Verify that the new NAT adapter is created.
```
PS C:\WINDOWS\system32> Get-NetAdapter
```
<br>
<img src="/guides/images/edge/edge-hyper-v-get-netadapter.png" name="Get-NetAdapter" style="width:75%;"/>
Note down the `ifIndex` of the adapter. The `ifIndex` in the above screenshot is 31. The `ifIndex` may vary in your system and the same `ifIndex` should be used in the next step. 

3. Assign an IP address for the adapter.
```
PS C:\WINDOWS\system32> New-NetIPAddress -IPAddress 192.168.66.1 -PrefixLength 24 -InterfaceIndex 31
```
4. Create a NAT rule.
```
PS C:\WINDOWS\system32> New-NetNat -Name NATSwitchForEDGE -InternalIPInterfaceAddressPrefix 192.168.66.0/24
```

### Setting up Hyper-V

After creating a NAT adapter, you must import the Edge VM image into Hyper-V.

1. In Hyper-V Manager, go to **Action** > **Import Virtual Machine**. <br>
<img src="/guides/images/edge/edge-hyper-v-001.png" name="Import Virtual Machine" style="width:75%;"/>

2. In the **Before You Begin** wizard, click **Next**. <br>

3. Provide the location of the Edge VM image and click **Next**. <br>
<img src="/guides/images/edge/edge-hyper-v-003.png" name="Locate Folder" style="width:75%;"/>

4. Select the Edge VM and click **Next**. <br>

5. In the **Choose Import Type** wizard, select **Register the virtual machine in-place (use the existing unique ID)**. <br>
<img src="/guides/images/edge/edge-hyper-v-005.png" name="Choose Import Type" style="width:75%;"/>

6. Click **Finish**. The Edge VM image appears in the Hyper-V Manager. <br>

7. Right-click the Edge VM image and click **Connect**. <br>
<img src="/guides/images/edge/edge-hyper-v-007.png" name="Connecting to Edge VM" style="width:75%;"/>

>**Info**: By default, the NTP servers are configured to Europe NTP servers. You can configure the NTP server as per your requirements. 