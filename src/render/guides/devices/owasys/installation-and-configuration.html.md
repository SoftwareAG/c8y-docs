---
title: Installation and configuration
layout: redirect
order: 50
---

Any owa3x units meets all the requirements for the installation of the *pollux.cumulocity* plugin.

The installable package and installation instructions can be found at the [owa3x Developer's Zone](http://owasys.com/en/developers-zone/owa3x). Installation simply consists of extracting the tarball file of the latest version inside the /home/ folder of the unit using the serial debug interface or the OTA upgrade feature.

You will also need a Cumulocity tenant and valid access credentials. Creation of your own Cumulocity tenant account can be done [easily and for free](http://cumulocity.com/).

### Check device registration

With this first version of the pollux.cumulocity plugin you will need to register your devices manually using the Cumulocity Device Manager web interface:

![Device Registration](/guides/images/devices/owa3x/screenshot1.png)

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

![Cumulocity Managed Object ID](/guides/images/devices/owa3x/screenshot2.png)

Apart from devices and table (which will be detailed in the Advanced Configuration section), the rest of the properties of the JSON file usually should not be modified.

### Usage
The Owasys Cumulocity plugin reports any data as Cumulocity measurements.

This data must be fed to the plugin by writing in a pre-defined format into the text plain file defined in file property of the pollux.cumulocity configuration file. That file, usually /tmp/cumulocity.db, works a reliable communication queue.

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
