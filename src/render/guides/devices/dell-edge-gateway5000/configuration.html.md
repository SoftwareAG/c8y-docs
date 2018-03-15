---
title: Configuration
layout: redirect
order: 20
---

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


