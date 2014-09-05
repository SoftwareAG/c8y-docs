---
order: 40
layout: default
title: The Java Agent
---

## Overview

The Java Agent provides a Java-based reference implementation for all device management features of Cumulocity plus drivers for various device kits. There are multiple ways of using the agent:

* Use it as it is for managing your Java-enabled devices.
* Use it as a base for your own implementation by adding drivers for additional hardware.
* Use it as a reference for implementing device management features in other environments.

The Java agent supports Windows and Unix-based systems and contains the following functionality: 

* Discovery and hardware identification: Automatically registers a device, its supported functionality and its connected sensors and controls.
* Availability management: Determine if a device connects as expected and notify the user if not.
* Software management: Upgrade the software on the device and restart with the new software.
* Modem support: Provides basic modem information and signal statistics  (IMEI, ICCID, cell ID, signal strength, BER; depending on modem type).
* Extensibility through driver concept.
* Ready-made drivers for [Kontron M2M development kit](/guides/devices/kontron), [Raspberry Pi](/guides/devices/raspberry-pi), [PiFace Digital](/guides/devices/raspberry-pi) and [Tinkerforge](/guides/devices/tinkerforge).

## Prerequisites

A Unix-based system with an installation of Java SE 7 is required (for example, Linux, MacOS). To verify the availability of Java on your system, type

	$ java -version
	java version "1.7.0_45"

To install Java, please visit http://java.com.

## Installing

Binary packages are available for the Raspberry Pi, the Kontron M2MSSDK, Mac OS X, Linux and Windows. 

* For the Raspberry Pi and similar Embedded Linux devices, please [check the Raspberry Pi guide](/guides/devices/raspberry-pi).
* For the Kontron M2MSSDK, please [check the Kontron M2MSSDK guide](/guides/devices/kontron).
* On a Mac OS X, please download the [latest Mac Agent Archive](http://resources.cumulocity.com/examples/cumulocity-mac-agent-latest.tar.gz).
* On a Windows OS, please download the [latest Windows Agent Archive](thttp://resources.cumulocity.com/examples/cumulocity-win-agent-latest.zip).
* On a Linux OS, please download the [latest Linux Agent Archive](http://resources.cumulocity.com/examples/cumulocity-linux-agent-latest.tar.gz).

Unpack your respective package in a new folder. It should contain 2 scripts c8y-agent and c8y-agent-debug(extension is OS dependent). 
You can run the agent by running c8y-agent. If you want more debug information you can run the agent via c8y-agent-debug or edit 
cfg/logback.xml to fit your needs.

## Building

Source code is available at https://bitbucket.org/m2m/cumulocity-examples in the folder java-agent. To build the agent simply run:

	mvn clean install

## Running

### Registering the device

When the agent is successfully started, open Cumulocity in a web browser and go to the "Registration" page. Enter the device ID of the device that the agent is running on. The device ID depends on the type of device.

* On a Raspberry Pi, it's the serial number of the Raspberry Pi (see the [instructions](/guides/devices/raspberry-pi)).
* On a Mac, it's the serial number of the Mac. Click on the Apple logo in the menu, "About This Mac", "More Info" to display the serial number.
* On Windows it's the serial number of your PC. To get it run "wmic csproduct get identifyingnumber" in the command prompt.
* On other Linux devices or as a fallback, the MAC address of the first network interface is used. Use "ifconfig" to print the network interfaces and check for the "HWaddr" entry. Often, the MAC address is also printed on the board.

### Monitoring the connection

By default, the agent is "always on", i.e., it maintains a connection to Cumulocity to receive operations in real-time. Hence, the agent is shown as "Connected" in the user interface. If the connection breaks down, the agent will be shown as "Offline" and an alarm will be sent.

![Availability](/guides/devices/javaavailability.png)

### Restarting

To restart the device that the agent is running on, go to the "Control" tab and click "Restart".

![Restart and configure](/guides/devices/javarestartconfig.png)

### Tracing

The agent writes a log to Cumulocity. Low-severity log levels are sent to Cumulocity as events and are visible in the "Events" tab of the device. Higher-severity log levels are recorded as alarms and are visible in the "Alarms" tab of the device. To configure the verbosity of logging, go to the "Control" tab and edit the configuration.

* "c8y.log.eventLevel" is the minimum level of log entries that are sent as events. Default is "INFO".
* "c8y.log.alarmLevel" is the minimum level of log entries that are sent as alarms. Default is "ERROR".

Valid levels are "TRACE", "DEBUG", "INFO", "WARN" and "ERROR". Use "DEBUG" or "TRACE" only for troubleshooting purposes.

![Tracing](/guides/devices/javatracing.png).

## Extending

Extending the agent with drivers for new hardware and new devices requires the following steps:

* Create a Java class that implements the interface [Driver](https://bitbucket.org/m2m/cumulocity-examples/src/c1ab2abac58e683697061d2f8740c54da055061b/linux-agent/lx-driver/src/main/java/c8y/lx/driver/Driver.java?at=default).
* Create a jar file with the class and an additional text file "META-INF/services/c8y.lx.driver.Driver". The text file needs to contain the fully-qualified class name of the Java class.
* Deploy the jar file either by copying it to the "lib" folder of the agent or by deploying it through Cumulocity's software management.

The [BitBucket repository](https://bitbucket.org/m2m/cumulocity-examples) contains numerous examples of drivers. Usage of the Java client library is described in [Developing Java clients](/guides/java/developing).

## Server-side agents

The [BitBucket repository](https://bitbucket.org/m2m/cumulocity-examples) also contains a complete example of a server-side agent for closed devices in the folder "tracker-agent". This example works with tracking devices from Telic and Queclink, see the Section "Devices". It demonstrates solutions to various challenges when developing server-side functionality for mobile devices.

