---
layout: devices
title: "Owa3x"
---

# [Owa3x](http://owasys.com/en/products/owa3x)

The owa3X Platform is an Open, Flexible and Powerful Wireless Embedded Computer, providing fully wireless capabilities for Remote Management and Monitoring.

A unique platform to develop Telemetry and Telematic Applications.
The owa3X platform is designed around and ARM9 processor running Linux OS and provided with the APIs and Libraries needed in order for our customers to develop applications in C or/and C++.

The owa3X platform is a powerful platform for the management of geographically distributed equipment, integrating wireless communications with embedded IP functionality to allow efficient and bi-directional transmission of information across the cellular wireless networks.

The owa3X platform has been designed to withstand the rigorous of an automotive and industrial environment (CE and E marked) whilst providing a wide range of common connectivity options.

Some of the characteristics which make the owa3X a unique platform is the possibility to combine a wide variety of different functionalities as required by the System Integrators for each project.

The System Integrator has the possibility to order for example:
Project A: owa3X platform with GSM/GPRS, Wifi and Gyroscope
Project B: owa3X platform with UMTS, BT, BLE and 2 Kline interfaces

Basic features or the owa3X platform are: ARM9 Processor 400 MHz, Linux OS, 32 MB FLASH, 32/64 MB RAM, Micro SD, GPS, GPRS, 10 Digital I/Os, 4 Analog Inputs, Odometer, Dallas Ibutton, 3 RS232, 1 RS485, Accelerometer, CAN, KLINE, Audio, 2 USB, ETH, Optional Battery, etc.

Optional Communication Technologies; Bluetooth, BLE, WiFI, Edge, HSPA/UMTS, I/Os Expansion Board, 2nd CAN, 2nd KLINE, etc.

# [Owa3x/Rugged](http://owasys.com/en/products/owa3x-rugged)

A unique Platform to Develop Telemetry and Telematic Applications with IP67 enclosure for rugged conditions, Internal Antennas and a wide range of connectivity.

The owa3X/Rugged platform is designed around and ARM9 processor running Linux OS and provided with the APIs and Libraries needed in order for our customers to develop applications in C or/and C++.

owa33A-Rugged PLATFORM INTEGRATES:
- GSM/GPRS/HSPA
- GNSS (GPS/GLONASS/Galileo)
- EMBEDDED IP FUNCTIONALITY
- WIDE VARIETY OF INTERFACES
    - ANALOG AND DIGITAL I/O
    - RS232 & 1 RS485
    - AUDIO
    - MICROSD
    - CAN, IBUTTON, KLINE, ETHERNET
    - Etc.

OPTIONAL:

- SECOND CAN, SECOND KLINE
- GYROSCOPE
- LONG LIFE 4000 mAh BATTERY
- BLUETOOTH
- WiFi (AP)
- ZigBee
- HSDPA / UMTS
- INTERNAL ANTENNAS
- Etc.

## Integration with Cumulocity

[Owasys](http://www.owasys.com/) provides a ready-to-use software plugin for the open [owa3x](http://owasys.com/en/products/owa3x) platform called *pollux.cumulocity*. Once installed and configured, **this plugin provides integration with the cumulocity cloud services out of the box**.

It runs as a standalone application and it has been designed to be easily integrated with any other application developed for both the owa3x and owa3x Rugged Linux-based platforms.

This Cumulocity plugin, mantained by Owasys and made available through the [owa3x Developer's Zone](http://owasys.com/en/developers-zone/owa3x), manages connection platform registration status and measurement reporting. This functionality will be extended in future versions of the software to support native Cumulocity alarms and events, identity tracking and fully automatic registration.

If you decide to minimize time-to-market or if you do not want to develop your custom application for the open Linux [owa3x unit](http://owasys.com/en/products/owa3x/development-kit), this plugin is fully compatible with any of the other polluxfamily of plugins that Owasys provides through its developer zone.

Think of these plugins as independent building blocks that provide basic features needed for a wide range of M2M and IoT applications. From 2G/3G network service *pollux.net* to the more specific ModBus *pollux.modbus* plugin, Owasys is continuously working on improving and adding new features to this range of software building blocks. Please, do not hesitate to access our [Developer's Zone](http://owasys.com/en/developers-zone/owa3x) or [contact our customer support service](http://owasys.com/en/contact) should you require further information about available *pollux* plugins.

## Installation and configuration

Any owa3x units meets all the requirements for the installation of the *pollux.cumulocity* plugin.

The installable package and installation instructions can be found at the [owa3x Developer's Zone](http://owasys.com/en/developers-zone/owa3x). Installation simply consists of extracting the tarball file of the latest version inside the /home/ folder of the unit using the serial debug interface or the OTA upgrade feature.

You will also need a Cumulocity tenant and valid access credentials. Creation of your own Cumulocity tenant account can be done [easily and for free](http://cumulocity.com/).

### Check device registration

With this first version of the pollux.cumulocity plugin you will need to register your devices manually using the Cumulocity Device Manager web interface:

![Device Registration](/guides/devices/owa3x/screenshot1.png)

This will change in the next release of the plugin, which will support fully automatic registration of devices, so no human intervention will be needed on server side.

You can also check the thorough [cumulocity documentation](https://www.cumulocity.com/dev-center/) on the subject.

### Basic configuration

The *pollux.cumulocity* plugin uses a single JSON configuration file */home/conf/cumulocity.json*. This a real life example:

    {
       "name": "cumulocity.pollux",
       "file": "/tmp/cumulocity.db",
       "backup": "./db/cumulocity.db",
       "id":"4811",
       "server": "owasys.cumulocity.com",
       "port": 80,
       "apikey": "HTTP-basic-authentication-base64-encoded",
       "service":"measurement/measurements/",
       "table":
          [
             ... measurement templates ...
          ],
       "devices":[
          ... mapping of devices attached ...
       ]
    }

In this file, first you need to modify the following properties according to your Cumulocity settings:
- server is the subdomain assigned to your tenant
- apikey is the Base64-encoded string of the HTTP basic authentication token for your Cumulocity account credentials. That is, in pseudo-code:
- base64(username + ':' + password)
- id is the Cumulocity ID assigned to this device during the registration process. Please see below.

![Cumulocity Managed Object ID](/guides/devices/owa3x/screenshot2.png)

Apart from devices and table (which will be detailed in the Advanced Configuration section), the rest of the properties of the JSON file usually should not be modified.

### Usage
c
The Owasys Cumulocity plugin reports any data as Cumulocity measurements.

This data must be fed to the plugin by writing in a pre-defined format into the text plain file defined in file property of the pollux.cumulocity configuration file. That file, usually â€œ/tmp/cumulocity.dbâ€, works a reliable communication queue.

The format is as follows:

    <source>.<data_id>=value

As the owa3x can act as concentrator or gateway for multiple hardware and sensors; each with different level of built-in intelligence, and also can run multiple application in parallel.

In order to support this powerful feature and report as multiple Cumulocity devices from the same owa3x, mapping from your source to a Cumulocity Device ID is made through the devices array in the plugin configuration file.

>This mapping feature makes *pollux.cumulocity* a versatile and extensible solution, completely independent from the producer devices or applications.

For example, for data comming a ModBus device (registered in the Cumulocity platform with device ID 5395) and another monitoring application running in the owa3x (the owa3x itself is modeled in Cumulocity as device ID 4811) the devices array property would look like this:

    "devices":[
      { "id":"5395","preffix":"ModBus1"},
      { "id":"4811","preffix":"app"}
    ]

ModBus device uses "ModBus1" as source parameter when writing to the queue and will be shown as Device 5395 in the Cumulocity web interface.
The independent monitoring application also running on the owa3x reports as Device ID 4811 by using "app" as source.

Finally, the table array of the configuration file maps different <data_id> to Cumulocity measurement templates like this:

    "table":
    [
      ["To","\"c8y_Temperature\":{\"temperature\":{\"value\":%f,\"unit\":\"C\"}}"],
      ["Pl","\"c8y_Pressure\":{\"pressure\":{\"value\":%f,\"unit\":\"bar\"}}"],
      ["RPM","\"c8y_Speed\":{\"speed\":{\"value\":%f,\"unit\":\"rpm\"}}"],
      ["Vol","\"c8y_Flow\":{\"flow\":{\"value\":%f,\"unit\":\"m3/l/10\"}}"],
      ["Running","\"c8y_Running_hours\":{\"running_hours\":{\"value\":%f,\"unit\":\"h\"}}"],
      ["Loaded","\"c8y_Loaded_hours\":{\"loaded_hours\":{\"value\":%f,\"unit\":\"h\"}},
      ["pow1","\"c8y_Battery\":{\"battery\":{\"value\":%f,\"unit\":\"V\"}}"],
      ["temp0","\"c8y_Temperature\":{\"temperature\":{\"value\":%f,\"unit\":\"C\"}}"]
    ],

So, if we would like to report from the ModBus client temperature and pressure measurements, and battery and temperature readings from the monitoring application we would need to write to the file:

    ModBus1.To=38.54
    ModBus1.Pl=8910
    app.pow1=4.12654
    app.temp0=19.2

This will be sent as four properly formatted Cumulocity measurements each to the corresponding Device on the configured Cumulocity endpoint.

#### Cumulocity Alarms

Native Cumulocity alarms are not implemented in this version. However they can be raised using the event-driven business rules engine provided by Cumulocity. You will need to manually create the specific rules for your business case; they might use the reported measurements and/or other parameters and data available on Cumulocity.

Please contact Owasys or Cumulocity for details about how to use this functionality.

### Advanced

Some advanced features will be added in future versions of the pollux.cumulocity plugin for owa3x and owa3x Rugged platforms:

1.  Fully automated register of the owa3x unit in Cumulocity
2.  Support for "native" Cumulocity alarms
3.  Automatic detection and register of child devices

If you have specific needs such as integrating ModBus devices, CAN bus integration, etc. please do not hesitate to contact us.

### Support

*pollux.cumulocity* software plugin for owa3x and owa3x Rugged is maintained by Owasys and we work continuously to add new features and improvements. If you are interested in this software or need help integrating any of owa3x variants please visit our Developer's Zone or simply [contact us](http://owasys.com/en/contact).
