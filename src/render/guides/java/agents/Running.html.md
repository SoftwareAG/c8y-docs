---
order: 40
layout: redirect
title: Running
---

### Registering the device

When the agent is successfully started, open Cumulocity in a web browser and go to the "Registration" page. Enter the device ID of the device that the agent is running on. The device ID depends on the type of device.

* On a Raspberry Pi, it's the serial number of the Raspberry Pi (see the [instructions](/guides/devices/raspberry-pi)).
* On a Mac, it's the serial number of the Mac. Click on the Apple logo in the menu, "About This Mac", "More Info" to display the serial number.
* On Windows, it's the serial number of your PC. To get it, run "wmic csproduct get identifyingnumber" from a command prompt.
* On other Linux devices or as a fallback, the MAC address of the first network interface is used. Use "ifconfig" to print the network interfaces and check for the "HWaddr" entry. Keep in mind only the numbers are used, without any colons! Often, the MAC address is also printed on the board.

### Monitoring the connection

By default, the agent is "always on", i.e., it maintains a connection to Cumulocity to receive operations in real-time. Hence, the agent is shown as "Connected" in the user interface. If the connection breaks down, the agent will be shown as "Offline" and an alarm will be sent.

![Availability](/guides/images/devices/javaavailability.png)

### Restarting

To restart the device that the agent is running on, go to the "Control" tab and click "Restart".

![Restart and configure](/guides/images/devices/javarestartconfig.png)

### Tracing

The agent writes a log to Cumulocity. Low-severity log levels are sent to Cumulocity as events and are visible in the "Events" tab of the device. Higher-severity log levels are recorded as alarms and are visible in the "Alarms" tab of the device. To configure the verbosity of logging, go to the "Control" tab and edit the configuration.

* "c8y.log.eventLevel" is the minimum level of log entries that are sent as events. Default is "INFO".
* "c8y.log.alarmLevel" is the minimum level of log entries that are sent as alarms. Default is "ERROR".

Valid levels are "TRACE", "DEBUG", "INFO", "WARN" and "ERROR". Use "DEBUG" or "TRACE" only for troubleshooting purposes.

![Tracing](/guides/images/devices/javatracing.png).