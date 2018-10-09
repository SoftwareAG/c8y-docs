---
order: 50
title: Example setup for VMWare
layout: redirect
---

### Setting up ESXi

To set up an EXSi virtual machine, follow these steps:

1. Click **Create/Register VM** to open a window to select the creation type.<br>
<img src="/guides/images/edge/edge-esxi-00.png" name="Setting up ESXi" style="width:75%;"/>

2.	Under **Select creation type**, select **Deploy a virtual machine from OVA or OVF template** and click **Next**. <br>
<img src="/guides/images/edge/edge-esxi-01.png" name="Setting up ESXi" style="width:75%;"/>

3.	In the next window, provide a name for the VM, e.g. EDGE-server, and drag and drop the required files (ovf, vmdk1, vmdk2) and click **Next**. <br>
<img src="/guides/images/edge/edge-esxi-02.png" name="Setting up ESXi" style="width:75%;"/>

4.	Under **Select storage**, select the datastore where the VM will reside and click **Next**.
<img src="/guides/images/edge/edge-esxi-03.png" name="Setting up ESXi" style="width:75%;"/>

5.	Under **Deployment options**, select options like thin/thick provisioning and click **Next**.
<img src="/guides/images/edge/edge-esxi-04.png" name="Setting up ESXi" style="width:75%;"/>

6.	Review the machine settings and click **Finish** to complete the setup.
<img src="/guides/images/edge/edge-esxi-05.png" name="Setting up ESXi" style="width:75%;"/>

A VM with the provided name, e.g. "EDGE-server", should now show up in the **Virtual Machines** section. Notifications will appear accordingly in the **Recent tasks** pane.

<img src="/guides/images/edge/edge-esxi-06.png" name="Setting up ESXi" style="width:75%;"/>

### VM hardware configuration

* Change VM compatibility to the latest ESXi version.
* Make sure that only one network interface is configured. Use VMXNET3 as type.
* Edit VM Settings -> VMware Tools: Check time synchronization
* Edit VM Settings -> General Options: Set guest OS to CentOs 7 (64bit)

### Network configuration

Perform the following steps to configure the network once the image is imported into ESXi.

1. Log in as root to the image via the ESXi console and check how the ethernet interface was named. <br>

		[root@server ~]# ip link 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00 2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000 link/ether 00:0c:29:fd:35:9e brd ff:ff:ff:ff:ff:ff
	
2. Edit the content that the DEVICE directive matches your interface name and enter your desired network parameters.

		[root@server ~]# vi /etc/sysconfig/network-scripts/ifcfg-ens160
		DEVICE=ens160
		BOOTPROTO=none
		ONBOOT=yes
		NETMASK=255.255.255.0
		IPADDR=192.168.207.64
		USERCTL=no
		GATEWAY=192.168.207.1
		DNS1=8.8.8.8

3. Rename the network script /etc/sysconfig/network-scripts/ens160 to match the name of your interface.

4. Edit /etc/hosts to match the IP and host name.
 
		192.168.207.64 management.cumulocity.com <domain name entered during post-installation>
 
5. Restart the network config. **service network restart** (which might fail but that is not an issue).

6. Run `ifconfig`. The IP entered should be shown in the interface.

