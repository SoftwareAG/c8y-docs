---
title: Data created by SIGFOX devices
layout: redirect
order: 30
---

The full payload contained in the data callback will be created as an event.

![SIGFOX event](/guides/images/devices/sigfox/sigfox_event.png)

The signal strength values from in the data callback and the battery and temperature values contained in the service status callback will be created as measurements.

![SIGFOX signal strength](/guides/images/devices/sigfox/sigfox_signalstrength.png)

![SIGFOX battery](/guides/images/devices/sigfox/sigfox_battery.png)

![SIGFOX temperature](/guides/images/devices/sigfox/sigfox_temperature.png)

Data from the error callback and the downlinkOverusage flag will be created as alarms.

![SIGFOX temperature](/guides/images/devices/sigfox/sigfox_alarms.png)

Using the device shell you can send direct commands to a SIGFOX device. SIGFOX commands are 8 bytes in hexadecimal format. You need to put a 16 character (2 characters per byte) hexadecimal string to the shell.

![SIGFOX temperature](/guides/images/devices/sigfox/sigfox_shell.png)
