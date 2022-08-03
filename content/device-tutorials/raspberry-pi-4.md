---
weight: 30
title: Raspberry Pi 4 Model B
layout: bundle
---


### Overview

This tutorial describes how to register a Raspberry Pi 4 Model B device to the {{< product-c8y-iot >}} platform.

The [Raspberry Pi](http://en.wikipedia.org/wiki/Raspberry_Pi) is a popular, low-cost mini computer. It is ideally suited for prototyping machine-to-machine solutions through its GPIO pins, USB support and inbuilt WLAN support. Its operating system is [Raspbian](http://www.raspberrypi.org/downloads), which is the default Linux distribution of the Raspberry Pi.

The tutorial describes how to install a {{< product-c8y-iot >}} agent with all relevant drivers on the Raspberry Pi to be able to remotely manage the Raspberry Pi and its connected sensors and controls. This allows you to

* Use basic device management functionality.
* Identify individual Raspberry Pis remotely based on their hardware serial number.
* Update the Pi's firmware remotely through the firmware repository on GitHub.
* Use the [PiFace Digital 2](https://www.element14.com/community/docs/DOC-69001) adapter board from the cloud.
* Use [TinkerForge](/device-tutorials/tinkerforge) sensors and controls from the cloud.

{{< c8y-admon-info >}}
The agent is provided in open source form as-is without support or warranty. For commercial use, we recommend you to use industrial hardware and/or the {{< product-c8y-iot >}} C++ SDK.
{{< /c8y-admon-info >}}

### Prerequisites

#### Hardware

During the tutorial you will require the following hardware:

 * Raspberry Pi 4 Model B
 * Monitor
 * Display Cable (Micro HDMI cable)
 * Power supply
 * Mouse
 * Keyboard

#### Software

There's a pre-installed OpenJDK Runtime Environment in the Raspbian distribution.  

To verify, type

```shell
$ java -version
```

You also need to know the serial number of your Raspberry Pi to register it with {{< product-c8y-iot >}}. To get the serial number, use the following command:

```shell
$ cat /proc/cpuinfo
```

The output of this command contains the serial number in a line like:

```shell
Serial		: 1000000017b769d5
```

Write down the number in the line "Serial". The serial number is the device ID that you will require in a later step when you register the device to the {{< product-c8y-iot >}} platform.

#### Internet

The tutorial assumes that the Raspberry Pi has an active connection to the internet, so that you can connect to the {{< product-c8y-iot >}} server. You can use the Raspberry Pi's inbuilt WLAN capabilities for this if there is an available WLAN network, otherwise you could consider adding a mobile broadband network connection by use of an add-on component such as a third-party USB dongle.


### Setting up and registering the device

#### To install the agent

Log into the Raspberry Pi and install the agent with the following command:

```shell
$ wget http://resources.cumulocity.com/examples/cumulocity-rpi-agent-latest.deb
$ sudo dpkg -i cumulocity-rpi-agent-latest.deb
```

#### To set up the tenant URL in the properties file

When the {{< product-c8y-iot >}} agent on the Raspberry Pi connects to {{< product-c8y-iot >}}, it uses the host URL that is defined in the file
*/usr/share/cumulocity-rpi-agent/cfg/cumulocity.properties* on the Raspberry Pi. The URL is defined in a line like:

````shell
host = https://<YourTenantName>.{{< domain-c8y >}}
````

Ensure that you have set up the correct host URL here before proceeding. Here, `<YourTenantName>` is the name of your {{< product-c8y-iot >}} tenant on the {{< product-c8y-iot >}} platform.

The file is by default read-only, so you need superuser privileges to edit it.
To go into "su" mode, use the following command on a command line console on the Raspberry Pi:

````console
sudo su -
````

To do the edit, you can start the "vi" editor in the superuser console and make the changes there. The vi editor is available with the Raspbian delivery.

If you prefer to use another editor, you may have to install it first. After the editor is installed, ensure that you start it from a console with superuser privileges.

When you have updated *cumulocity.properties*, restart the agent using:

````shell
$ sudo service cumulocity-agent restart
````


#### To activate SPI

You must activate the SPI (Serial Peripheral Interface) on the Raspberry Pi, if it is not already activated. You can do this as follows:

1.	On the command line, enter this command to start the `raspi-config` tool:

````shell
sudo raspi-config
````

2.	In the tool, select **Interfacing Options**, then select the **SPI** option, then select the option to activate the SPI interface.

Alternatively, you can use the desktop method:

1.	Select **Preferences > Raspberry Pi Configuration** from the desktop main menu.

2.	Open the tab **Interfaces**.

3.	Set **SPI** to "Enabled".


#### To register the device to the platform

1. Open the {{< product-c8y-iot >}} platform in a web browser. The URL must match the host URL that you defined in the *cumulocity.properties* file on the Raspberry Pi, as described above.

2. To register the device, follow the general instructions for registration of devices in the section [Device Management > Connecting devices](/users-guide/device-management/#connecting-devices) in the *User guide*. When you follow the instructions, select the option **General device registration**, and use the Raspberry PI's serial number (as described in the [Prerequisites](#prerequisites) section above) as the device ID.

To view the device in your {{< product-c8y-iot >}} account, click **All devices** in the **Devices** menu in the navigator. By default, the device is displayed as "RaspPi \<hardware model> \<serial number>".

### Interacting with the platform

After the Raspberry Pi has been successfully registered, you can view the device's status in the {{< product-c8y-iot >}}´s standard applications (Device Management, Cockpit and Administration).

If you have reached this part of the tutorial successfully, you have the proof-of-concept that you can attach a device such as a Raspberry Pi to a {{< product-c8y-iot >}} server and view its status information. Congratulations!

The Raspberry Pi by itself delivers only static information, so if you want to view real-time measurements coming from the device, you generally must attach hardware components that deliver this data, such as components provided by the third-party suppliers Tinkerforge and PiFace Digital. See the following sections for details.

#### Tinkerforge bricks and bricklets

The agent supports Tinkerforge devices out of the box, provided that the [Tinkerforge daemon for Raspberry Pi](http://www.tinkerforge.com/en/doc/Embedded/Raspberry_Pi.html) is installed. See the [Tinkerforge tutorial](../tinkerforge) in this guide for further details.

#### PiFace Digital

The agent includes a simple [PiFace Digital](http://www.element14.com/community/docs/DOC-52857/l/piface-digital-for-raspberry-pi) driver. The driver will create events when switches are pressed and will react to remote control commands to the relays.

Before using your PiFace Digital make sure you have tested it following the instructions on the [official website](http://www.piface.org.uk/guides/Install_PiFace_Software/). You don't have to go through the whole guide. Following it up to the "Testing your PiFace" part is enough.

#### Remote firmware upgrade

The {{< product-c8y-iot >}} agent permits you to upgrade the firmware of a Raspberry Pi through the [rpi-update](https://github.com/Hexxeh/rpi-update) tool. You might want to check from time to time if an upgrade is available.  

##### To configure a firmware version

1. In the Device Management application, click **Firmware Repository** in the **Management** menu in the navigator.

2. Click **Add Firmware**.

3. Enter a name for the firmware. As URL, use the Git hash of the firmware version at https://github.com/Hexxeh/rpi-firmware. To get the Git hash, click **Commits** and select a particular version there. The hash is the seemingly random set of characters at the end of the URL.

4. Save the firmware version.

##### To roll out the firmware to a Raspberry Pi

1. Switch to the **Software** tab of the Raspberry Pi.

2. Click **Install firmware**.

3. Select the firmware version to install.

4. Click **Install**.

The Raspberry Pi will install the firmware and will reboot. Go to the **Control** tab of the device to follow the upgrade process. At the next reboot, the firmware should be successfully installed.

### Troubleshooting

The agent writes debug information to the Pi's syslog. To troubleshoot, for example, connectivity problems, use:

```shell
$ tail -f /var/log/syslog
```
