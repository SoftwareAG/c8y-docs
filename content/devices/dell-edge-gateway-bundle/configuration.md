---
title: Configuration
layout: redirect
weight: 20
---

Download the [Cumulocity Snap Agent](http://resources.cumulocity.com/examples/cumulocity-agent_1.0.2_amd64.snap) and copy it to a USB stick.

Insert the USB stick into the Edge Gateway and enter the following command in the terminal:

```shell
	mkdir usb
```

Then search for the USB name:

```shell
sudo fdisk -l
```

The USB partition name should be similar to "/dev/sdb..". Identify the partition name in the system and enter the following:

```shell
sudo mount /dev/sdb1 usb
sudo snap install usb/cumulocity-agent_1.0.2_amd64.snap --devmode
sudo unmount usb
tail -f /var/snap/cumulocity-agent/common/cumulocity-agent.log
```

The last command will display the device ID, which will be required to register the device in the Cumulocity platform. This is what the output should look like:

	Jan 06 17:15:33 DEBUG: HTTP: post: 61, <device_id>
	Jan 06 17:15:33 DEBUG: HTTP: recv: 50,1,404,Not Found

The agent will start automatically every time the system restarts.


