---
weight: 30
title: Raspberry Pi 4 Model B
layout: bundle
---


### Overview

This tutorial describes how to register a Raspberry Pi 4 Model B device on the Cumulocity IoT platform.

The [Raspberry Pi](http://en.wikipedia.org/wiki/Raspberry_Pi) is a popular, low-cost mini computer. It is ideally suited for prototyping machine-to-machine solutions through its GPIO pins, USB support and inbuilt WLAN support. Its operating system is [Raspbian](http://www.raspberrypi.org/downloads), which is the default Linux distribution of the Raspberry Pi.

The tutorial assumes that the Raspberry Pi has an active connection to the internet, so that you can connect to the Cumulocity server. You can use the Raspberry Pi's inbuilt WLAN capabilities for this if there is an available WLAN network, otherwise you could consider adding a mobile broadband network connection by use of an add-on component such as a third-party USB dongle.

The tutorial describes how to install a Cumulocity agent with all relevant drivers on the Raspberry Pi to be able to remotely manage the Raspberry Pi and its connected sensors and controls. This allows you to

* Use basic device management functionality.
* Identify individual Raspberry Pis remotely based on their hardware serial number.
* Update the Pi's firmware remotely through the firmware repository on GitHub.
* Use the [PiFace Digital](http://www.element14.com/community/docs/DOC-52857/l/piface-digital-for-raspberry-pi) adapter board from the cloud.
* Use [TinkerForge](/guides/images/devices/tinkerforge) sensors and controls from the cloud.

> **Info:** The agent is provided in open source form as-is without support or warranty. For commercial use, we recommend you to use industrial hardware and/or the Cumulocity C++ SDK.

#### Prerequisites

There's a pre-installed OpenJDK Runtime Environment in the Raspbian distribution.  

To verify, type

```shell
$ java -version
```

You also need to know the serial number of your Raspberry Pi to register it with Cumulocity. To get the serial number, use the following command:

```shell
$ cat /proc/cpuinfo
```

The output of this command contains the serial number in a line like:

```shell
Serial		: 1000000017b769d5
```

Write down the number in the line "Serial". The serial number is the device ID that you will require in a later step when you register the device on the Cumulocity IoT platform. 


### Installation and registration

#### Installing the Cumulocity agent

Log into the Raspberry Pi and install the agent.

```shell
$ wget http://resources.cumulocity.com/examples/cumulocity-rpi-agent-latest.deb
$ sudo dpkg -i cumulocity-rpi-agent-latest.deb
```

#### Setting up the tenant URL in the _cumulocity.properties_ file

When the Cumulocity agent on the Raspberry Pi connects to the Cumulocity platform, it uses the host URL that is defined in the file 
*/usr/share/cumulocity-rpi-agent/cfg/cumulocity.properties* on the Raspberry Pi. The URL is defined in a line like:

````shell
host = https://<YourTenantName>.cumulocity.com
````

Ensure that you have set up the correct host URL here before proceeding. Here, `<YourTenantName>` is the name of your Cumulocity tenant on the Cumulocity platform.

The file is by default read-only, so you need appropriate privileges to edit it. You can, for example, perform the edit with superuser privileges.
>
When you have updated *cumulocity.properties*, restart the agent using:

````shell
$ sudo service cumulocity-agent restart
````


#### Activating SPI

You need to activate the SPI (Serial Peripheral Interface) on the Raspberry Pi, if it is not already activated. You can do this as follows:

1.	On the command line, enter this command to start the `raspi-config` tool:

````shell
sudo raspi-config
````

2.	In the tool, select **Interfacing Options**, then select the **SPI** option, then select the option to activate the SPI interface.

Alternatively, you can use the desktop method:

1.	Select **Preferences > Raspberry Pi Configuration** from the desktop main menu.

2.	Open the tab **Interfaces**.

3.	Set **SPI** to "Enabled".


#### Registering the Raspberry Pi on Cumulocity

Open the Cumulocity UI in a web browser. The URL must match the host URL that you defined in the *cumulocity.properties* file on the Raspberry Pi, as described above.

To register the device, follow the general instructions for registration of devices in the section [Device Management > Connecting Devices](/users-guide/device-management/#connecting-devices) of the Cumulocity User Guide. When you follow the instructions, select the option **General device registration**, and use the Raspberry PI's serial number (as described in the [Prerequisites](#prerequisites) section above) as the device ID. 

To view the device in your Cumulocity account, click **All devices** in the **Device management** menu in the navigator. By default, the device is displayed as **RaspPi \<hardware model> \<serial number>**. 

### Managing the Raspberry Pi in Cumulocity

After the Raspberry Pi has been successfully registered, you can view the device's status in the Cumulocity UI's standard applications (Device nanagement, Cockpit and Administration).

If you have reached this part of the tutorial successfully, you have the proof-of-concept that you can attach a device such as a Raspberry Pi to a Cumulocity server and view its status information. Congratulations!

The Raspberry Pi by itself delivers only static information, so if you want to view real-time measurements coming from the device, you generally need to attach hardware components that deliver this data, such as components provided by the third-party suppliers Tinkerforge and PiFace Digital. See the following sections for details. 

### Tinkerforge bricks and bricklets

The agent supports Tinkerforge devices out of the box, provided the [Tinkerforge daemon for Raspberry Pi](http://www.tinkerforge.com/de/doc/Embedded/Raspberry_Pi.html) is installed. See the [Tinkerforge demo page](../tinkerforge) in this guide for further details.

### PiFace Digital

The agent includes a simple [PiFace Digital](http://www.element14.com/community/docs/DOC-52857/l/piface-digital-for-raspberry-pi) driver. The driver will create events when switches are pressed and will react to remote control commands to the relays.

Before using your PiFace Digital make sure you have tested it following the instructions on the [official website](http://www.piface.org.uk/guides/Install_PiFace_Software/). You don't have to go through the whole guide. Following it up to the "Testing your PiFace" part is enough.

### Remote firmware upgrade

The Cumulocity agent permits you to upgrade the firmware of a Raspberry Pi through the [rpi-update](https://github.com/Hexxeh/rpi-update) tool. You might want to check from time to time if an upgrade is available.  

To configure a firmware version:

1. Open the Cumulocity platform and click **Firmware**.

2. Click **Add Firmware**.

3. Enter a name for the firmware. As URL, use the Git hash of the firmware version at https://github.com/Hexxeh/rpi-firmware. To get the Git hash, click **Commits** and select a particular version there. The hash is the seemingly random set of characters at the end of the URL.

4. Save the firmware version.

To roll out the firmware to a Raspberry Pi:

1. Click the **Software** tab of the Raspberry Pi.

2. Click **Install firmware**.

3. Select the firmware version to install.

4. Click **Install**.

The Raspberry Pi will install the firmware and will reboot. Go to the **Control** tab to follow the upgrade process. At the next reboot, the firmware should be successfully installed.

### Troubleshooting

The agent writes debug information to the Pi's syslog. To troubleshoot, for example, connectivity problems, use:

```shell
$ tail -f /var/log/syslog
```
