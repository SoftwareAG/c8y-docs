---
title: Libelium-Meshlium
layout: devices
---

## Overview

Meshlium works as a gateway, receiving sensor measurements from all the Waspmotes connected to it, then sending those measurements to Cumulocity.

The following sections demonstrate how to use a Meshlium device with Cumulocity. It describes how to

* [Configure](#configure) Meshlium for use
* [Connect](#connect) your Meshlium to your Cumulocity account
* [Data Visualization](#data) and Table Configuration at Cumulocity

>Meshlium Firmware version 3.2.7 or higher is required to connect to Cumulocity IoT Platform. In case you cannot find Cumulocity in the Meshlium Manager System, you will need to update your device.


## <a name="configure"></a>Configuring your Meshlium for use

Meshlium comes ready for use from the factory, but you will still need to configure and connect your Waspmotes to your Meshlium. Libelium provides [technical guides](http://www.libelium.com/development/waspmote/documentation) on how to accomplish that.


## <a name="connect"></a>Connecting your Meshlium to your Cumulocity account

First you need to access Meshlium Manager System Interface, to do that, connect to the Meshlium Wi-Fi Access Point, once connected open your favorite browser and enter the following address:

	10.10.10.1/ManagerSystem

![address bar](/guides/devices/meshlium/ManagerSystem-address_bar.png)

Doing so will bring you to the Meshlium Manager System, then click on the "Cloud Connector" button.

![system manager](/guides/devices/meshlium/ManagerSystem.png)

Next click on "IoT Solutions".

![cloud connector](/guides/devices/meshlium/CloudConnector.png)

Then select "Cumulocity".

![iot solutions](/guides/devices/meshlium/IoTSolutions.png)

This will bring you to Cumulocity cloud configurator.

Now fill all the fields with your Cumulocity account settings.

![cloud configurator](/guides/devices/meshlium/cumulocity_plugin_configuration.png)

Click on "Save" to store your settings.

To start sending measurements to Cumulocity, click on "Start" to activate the Cumulocity MQTT Sender.

The Cumulocity platform will handle all of your devices creation on our cloud, and constantly update the measurements as they come for your visualization.


## <a name="data"></a>Data Visualization and Table Configuration at Cumulocity

To visualize the data from your devices, log in to your Cumulocity account. On the left pane in "DEVICES", click on "All devices".

![left pane](/guides/devices/meshlium/cumulocity_left_pane.png)

Then select the Meshlium device you wish to visualize.

![all devices](/guides/devices/meshlium/all_devices.png)

Now select "Child devices" to see all devices connected to your Meshlium.

![child devices](/guides/devices/meshlium/child_devices.png)

Select the child device that you wish to see, then click on "Measurements" to see the data from this device sensors.

![measurements](/guides/devices/meshlium/measurements.png)

To better understand how our platform works and custom configure the interface, consult our [guidelines](https://www.cumulocity.com/guides/).


