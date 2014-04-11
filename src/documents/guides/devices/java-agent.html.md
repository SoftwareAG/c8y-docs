---
title: Java Reference Agent
---

## Overview

The Java Agent provides a Java-based reference implementation for all device management features of Cumulocity plus drivers for various device kits. There are multiple ways of using the agent:

* Use it as it is for managing your Java-enabled devices.
* Use it as a base for your own implementation by adding drivers for additional hardware.
* Use it as a reference for implementing device management features in other environments.

The Java agent supports Unix-based systems and contains the following functionality: 

* Discovery and hardware identification: Automatically registers a device, its supported functionality and its connected sensors and controls.
* Availability management: Determine if a device connects as expected and notify the user if not.
* Software management: Upgrade the software on the device and restart with the new software.
* Firmware management: Upgrade the firmware on the device and restart with the new firmware.
* Modem support: Provides basic modem information and signal statistics  (IMEI, ICCID, cell ID, signal strength, BER; depending on modem type).
* Extensibility through driver concept.
* Ready-made drivers for [Kontron M2M development kit](/guides/devices/smart-agent-for-kontron-m2m.html), [Raspberry Pi](/guides/devices/raspberry-pi.html), [PiFace Digital](/guides/devices/raspberry-pi.html) and [Tinkerforge](tinkerforge.html).

## Prerequisites

A Unix-based system with an installation of Java SE 7 is required (for example, Linux, MacOS). To verify the availability of Java on your system, type

	$ java -version
	java version "1.7.0_45"

To install Java, please visit http://java.com.

## Installing

Binary packages are available for the Raspberry Pi, the Kontron M2MSSDK and for MacOS. 

* For the Raspberry Pi, please [visit the Raspberry Pi page](/guides/devices/raspberry-pi.html).
* For the Kontron M2MSSDK, please [visit the Kontron M2MSSDK page](/guides/devices/smart-agent-for-kontron-m2m.html).
* On a Mac, download the package from http://resources.cumulocity.com/examples/cumulocity-mac-agent-latest.tar.gz and unpack it into a new folder.

The packages contain a script "c8y-agent.sh" that can be run at system startup. The script redirects output of the agent to the system log. In case of startup issue, examine the log.

	$ tail -f /var/log/syslog (On Linux)
	$ tail -f /var/log/system.log (On a Mac)

## Building

Source code is available at https://bitbucket.org/m2m/cumulocity-examples in the folder linux-agent. Instructions for building the agent using Maven are in the [README file](https://bitbucket.org/m2m/cumulocity-examples/src/c1ab2abac58e683697061d2f8740c54da055061b/linux-agent/README.md?at=default).

## Running

### Registering the device

When the agent is successfully started, open Cumulocity in a web browser and go to the "Registration" page. Enter the device ID of the device that the agent is running on. The device ID depends on the type of device.

* On a Raspberry Pi, it's the serial number of the Raspberry Pi (see the [instructions](/guides/devices/raspberry-pi.html)).
* On a Mac, it's the serial number of the Mac. Click on the Apple logo in the menu, "About This Mac", "More Info" to display the serial number.
* On other Linux devices or as a fallback, the MAC address of the first network interface is used. Use "ifconfig" to print the network interfaces and check for the "HWaddr" entry. Often, the MAC address is also printed on the board.

### Monitoring the connection

By default, the agent is "always on", i.e., it maintains a connection to Cumulocity to receive operations in real-time. Hence, the agent is shown as "Connected" in the user interface. If the connection breaks down, the agent will be shown as "Offline" and an alarm will be sent.

![Availability](/images/guides/devices/javaavailability.png)

### Restarting

To restart the device that the agent is running on, go to the "Control" tab and click "Restart".

![Restart and configure](/images/guides/devices/javarestartconfig.png).

### Tracing

The agent writes a log to Cumulocity. Low-severity log levels are sent to Cumulocity as events and are visible in the "Events" tab of the device. Higher-severity log levels are recorded as alarms and are visible in the "Alarms" tab of the device. To configure the verbosity of logging, go to the "Control" tab and edit the configuration.

* "c8y.log.eventLevel" is the minimum level of log entries that are sent as events. Default is "INFO".
* "c8y.log.alarmLevel" is the minimum level of log entries that are sent as alarms. Default is "ERROR".

Valid levels are "TRACE", "DEBUG", "INFO", "WARN" and "ERROR". Use "DEBUG" or "TRACE" only for troubleshooting purposes.

![Tracing](/images/guides/devices/javatracing.png).

## Extending

Extending the agent with drivers for new hardware and new devices requires the following steps:

* Create a Java class that implements the interface [Driver](https://bitbucket.org/m2m/cumulocity-examples/src/c1ab2abac58e683697061d2f8740c54da055061b/linux-agent/lx-driver/src/main/java/c8y/lx/driver/Driver.java?at=default).
* Create a jar file with the class and an additional text file "META-INF/services/c8y.lx.driver.Driver". The text file needs to contain the fully-qualified class name of the Java class.
* Deploy the jar file either by copying it to the "lib" folder of the agent or by deploying it through Cumulocity's software management.

The [BitBucket repository](https://bitbucket.org/m2m/cumulocity-examples) contains numerous examples of drivers. Usage of the Java client library is described in the [Java Developer's Guide](/guides/java/introduction.html).
