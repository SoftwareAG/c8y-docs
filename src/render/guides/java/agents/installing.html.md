---
order: 30
layout: redirect
title: Installing
---

Binary packages are available for the Raspberry Pi, the Kontron M2MSSDK, Mac OS X, Linux and Windows.

* On a Linux OS (including Embedded Linux distributions such as Kontron Linux), please download the [latest Linux Agent Archive](http://resources.cumulocity.com/examples/cumulocity-linux-agent-latest.tar.gz).
* For the Raspberry Pi and similar Embedded Linux devices, please [check the Raspberry Pi guide](/guides/devices/raspberry-pi).
* On a Mac OS X, please download the [latest Mac Agent Archive](http://resources.cumulocity.com/examples/cumulocity-mac-agent-latest.tar.gz).
* On a Windows OS, please download the [latest Windows Agent Archive](http://resources.cumulocity.com/examples/cumulocity-win-agent-latest.zip).

Unpack your respective package in a new folder. After unpacking, use the script "c8y-agent" to run the agent. If you need more debug information, run the script "c8y-agent-debug" or change the file cfg/logback.xml to use a more fine granular logging.

### Configuration

All the configuration files are located in the *cfg/* folder.

1. The cumulocity.porperties file has the following example structure:

		host=<host>
		bootstrap.tenant = <bootstrap tenant>
		bootstrap.user = <bootstrap  username>
		bootstrap.password = <bootstrap password>

	* The host is the http/https address of your Cumulocity instance. By default it points to http://developer.cumulocity.com/ , which is the Cumulocity production environment.
	* The bootstrap.* properties define the bootstrap user for your isntance. Their default value is the default Cumulocity bootstrap user.

	If your tenant is *&lt;tenant&gt;.cumulocity.com* you don't need to change anything here.

	*On the Raspberry Pi this file is a symbolic link pointing to /etc/cumulocity-agent.properties.*

2. The device.properties file contains the credentials the device uses to connect to your tenant. They are automatically filled in once you register the device in Cumulocity. If you would like to move your device to a different tenant you have to delete the content of this file.

3. The cumulocity-config.properties persists the device specific configuration that can be set in the Cumulocity front-end. Here is an example configuration of a device that has one ThinkerForge temperature senesor connected to it:

		#Tue Apr 28 16:03:53 UTC 2015
		c8y_temperature.interval=5000
		c8y.log.eventLevel=INFO
		c8y.log.alarmLevel=ERROR

	* The c8y_temperature.interval property defines the reporting rate of the TinkerForge temperature sensor. It is measured in milliseconds.
	* The c8y.log.* properties defines the severity of log entries to be reported by the device as events and alarms respectively. The possible values are *TRACE*, *DEBUG*, *INFO*, *WARN* and *ERROR*

	This file is automatically created by the device.

4. The logback.xml and logback-debug.xml files define the logging for running the agent normally and in debug mode respectively.

*On the Raspberry Pi the agent is implemented as a service. The configuration files are located in /usr/share/cumulocity-rpi-agent/cfg/*.
