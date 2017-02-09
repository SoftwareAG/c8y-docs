---
title: Dell Edge Gateway
layout: default
---

## Overview

The Edge Gateway 5000 Series for the Internet of Things (IoT) offers cost-effective security and manageability tools for operation professionals.

The following sections demonstrate how to use your device with Cumulocity. It describes how to

* [Configure](#configure) the Edge Gateway for use
* [Connect](#connect) your Gateway to your Cumulocity account
* [Data Visualization](#data) and Table Configuration at Cumulocity

>Dell Ubuntu Core image must be installed in the Edge Gateway. In case it is not installed, follow [Dell's Edge Gateway Installation and Operation Manual](http://www.dell.com/support/manuals/us/en/04/dell-edge-gateway-5000/dell-edge-gateway-5000_Users_Guide/Snappy-Ubuntu-Core-1504?guid=GUID-E8B1EE20-06D5-4517-9535-22CFBE8C9FD3&lang=en-us) for instructions on how to install it.


## <a name="configure"></a>Configuring your Edge Gateway for use

Download the [Cumulocity Snap Agent](http://resources.cumulocity.com/examples/cumulocity-agent_1.0.2_amd64.snap) and copy it to a USB stick.
Insert the USB into the Edge Gateway and type the following commands in the terminal:

	mkdir usd

Then search for the USB name with:

	sudo fdisk -l

The USB partition name should look like something as "/dev/sdb..", identify the partition name in the system and type the following:

	sudo mount /dev/sdb1 usb
	sudo snap install usb/cumulocity-agent_1.0.1_amd64.snap --devmode
	sudo umount usb
	tail -f /var/log/cumulocity-agent.log

The last command will display the device id, the id will be needed to register the device at Cumulocity. This is what the output should look like:

	Jan 06 17:15:33 DEBUG: HTTP: post: 61, <device_id>
	Jan 06 17:15:33 DEBUG: HTTP: recv: 50,1,404,Not Found

The device id will be where <device_id> is located, use this value to register the device at Cumulocity.

The agent will start automatically every time the system restarts.

## <a name="connect"></a>Connecting your Edge Gateway to your Cumulocity account

First you need a Cumulocity account, then on the left side panel click on "DEVICES > Registration"

Enter the Device ID in the proper field and click on "Register device". Wait for the "Accept" button to appear, then click on it to register the device.

Now click in "DEVICES > All devices", then search for your device to manage it.

To better understand how our platform works and custom configure the interface, consult our [guidelines](https://www.cumulocity.com/guides/).


