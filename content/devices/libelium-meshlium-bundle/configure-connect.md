---
title: Configure and connect
layout: redirect
weight: 20
---

### <a name="configure"></a>Configuring your Meshlium for use

Meshlium comes ready for use from the factory, but you will still need to configure and connect your Waspmotes to your Meshlium. Libelium provides [technical guides](http://www.libelium.com/development/waspmote/documentation) on how to accomplish that.


### <a name="connect"></a>Connecting your Meshlium to your Cumulocity account

First you need to access Meshlium Manager System Interface, to do that, connect to the Meshlium Wi-Fi Access Point, once connected open your favorite browser and enter the following address:

	10.10.10.1/ManagerSystem

![address bar](/images/devices/meshlium/ManagerSystem-address_bar.png)

Doing so will bring you to the Meshlium Manager System, then click on the "Cloud Connector" button.

![system manager](/images/devices/meshlium/ManagerSystem.png)

Next click on "IoT Solutions".

![cloud connector](/images/devices/meshlium/CloudConnector.png)

Then select "Cumulocity".

![iot solutions](/images/devices/meshlium/IoTSolutions.png)

This will bring you to Cumulocity cloud configurator.

Now fill all the fields with your Cumulocity account settings.

![cloud configurator](/images/devices/meshlium/cumulocity_plugin_configuration.png)

Click on "Save" to store your settings.

To start sending measurements to Cumulocity, click on "Start" to activate the Cumulocity MQTT Sender.

The Cumulocity platform will handle all of your devices creation on our cloud, and constantly update the measurements as they come for your visualization.

