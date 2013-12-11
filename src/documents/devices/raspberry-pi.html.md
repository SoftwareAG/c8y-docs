---
title: Raspberry Pi
---

# Overview

The [Raspberry Pi](http://en.wikipedia.org/wiki/Raspberry_Pi) is a popular, low-cost mini
computer running Linux. It is ideally suited for prototyping machine-to-machine solutions
through its GPIO pins and USB support.

In this section, we describe how to install a Cumulocity agent with all relevant drivers on
the Raspberry Pi to be able to remotely manage the Raspberry Pi and its connected sensors and
controls. This allows you to

* Take advantage of all the basic agent features such as availability management, connectivity management and software management.
* Identify individual Raspberry Pis based on their hardware serial number.
* Update the Pi's firmware remotely through the firmware repository on GitHub.
* Use the [PiFace Digital](http://www.element14.com/community/docs/DOC-52857/l/piface-digital-for-raspberry-pi) adapter board from the cloud.
* Use [TinkerForge](tinkerforge.html) sensors and controls from the cloud.

![Raspberry Pi image](http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/RaspberryPi.jpg/640px-RaspberryPi.jpg)

# Prerequisites

To install the agent, you need a Raspberry Pi with an installation of Java SE 7. Java SE is pre-installed in recent distributions of [Raspbian](http://www.raspberrypi.org/downloads), the default Linux distribution of the Raspberry Pi. To verify, simply type

	$ java -version
	java version "1.7.0_40"

Make sure that your power supply matches the power demands of the Raspberry Pi and its connected devices. A standard USB charger may not be sufficient to connect additional devices as well as a modem. The most simple solution is to use a USB hub that provides power on both the host and client ports, such as [this one](http://www.logilink.eu/showproduct/UA0085.htm). Connect the Raspberry Pi to the host side and all other devices to the client sides.

# Installation

Log in to the Raspberry Pi and install the agent.

	wget http://resource.cumulocity.com/rpi-agent-...rpm
	sudo rpm -i rpm-agent-..

Edit the credentials for accessing Cumulocity stored in the file /etc/cumulocity.properties.

	host=http://<<mytenant>>.cumulocity.com
	user=<<my user>>
	password=<<my password>>

Restart the Pi.

	sudo shutdown -r now

After restart, the Pi appears in the device management user interface as "RaspPi &lt;&lt;hardware model&gt;&gt; &lt;&lt;serial number&gt;&gt;". It may take the Pi up to two minutes to boot, dial up to the network, discover sensors and upload them to the cloud. In case of connectvity problems, check the syslog.

	tail -f /var/log/syslog

# Using TinkerForge bricks and bricklets

The agent supports TinkerForge devices out of the box, provided the [Tinkerforge daemon for Raspberry Pi](http://www.tinkerforge.com/de/doc/Embedded/Raspberry_Pi.html) is installed. For more information about using TinkerForge with Cumulocity, see the [TinkerForge section](tinkerforge.html).

# Using PiFace Digital

The agent includes a simple [PiFace Digital](http://www.element14.com/community/docs/DOC-52857/l/piface-digital-for-raspberry-pi) driver. The driver will create events when switches are pressed and will react to remote control commands to the relays. The events can be further processed through CEL rules.

The driver depends on [Pi4J](http://pi4j.com/). To install Pi4J, follow the [Pi4J installation instructions](http://pi4j.com/install.html).

# Installing a 3G modem

There are [numerous descriptions available](http://www.thefanclub.co.za/how-to/how-setup-usb-3g-modem-raspberry-pi-using-usbmodeswitch-and-wvdial) for installing a 3G modem on a Raspberry Pi. An affordable 3G modem that works with Linux and that we tested with the Raspberry Pi is the [Telekom Speedstick Basic](http://www.t-mobile.de/shop/handy/0,4855,2963-_278601-0-1-0,00.html) (Huawei E3131).

When using a 3G modem with a Raspberry Pi Model B, a powered USB hub is required. Some modems will not read connectivity statistics concurrently to being dialed up to the Internet on the Raspberry Pi. Hence, this functionality is disabled by default in the Cumulocity Linux modem driver.

To dial up to the Internet at startup, edit the file /etc/rc.local and add the following line:

	...wvdial...
