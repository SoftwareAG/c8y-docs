---
order: 21
title: Hello MQTT Python
layout: default
---
## Overview

In this tutorial, you will learn how to use Python MQTT client with Cumulocity using pre-defined messages (called "static templates").

## Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, user and password in order to access Cumulocity.
* Verify that you have Python installed:
  
  	python --version
  	Python 2.7.12

  Python can be downloaded from [www.python.org](https://www.python.org/)

* Install Paho client

  	pip install paho-mqtt

## Develop the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* Create python script
* Run script

### Create python script

Create script file, for example "hello_mqtt.py" with the following content:

    #!/usr/bin/env python
    # -*- coding: utf-8 -*-
    import paho.mqtt.client as mqtt
    import time, threading, ssl
    
    def on_message(client, userdata, message):
      print("Received operation " + str(message.payload))
    
    def sendMeasurements():
      print("Sending temperature measurement")
      client.publish("s/us", "211,25");
      threading.Timer(3, sendMeasurements).start()
    
    client = mqtt.Client(client_id="<<clientId>>")
    client.on_message = on_message
    client.username_pw_set("<<tenant>>/<<username>>", "<<password>>")
    client.tls_set("<<certsFile>>", cert_reqs = ssl.CERT_NONE)
    client.tls_insecure_set(True)
    
    client.connect("<<serverUrl>>", 8883)
    client.loop_start()
    client.publish("s/us", "100,Python MQTT,c8y_MQTTDevice", 2)
    time.sleep(1)
    client.publish("s/us", "110,S123456789,MQTT test model,Rev0.1", 2)
    client.subscribe("s/ds")
    sendMeasurements()

    
Replace "&lt;&lt;clientId&gt;&gt;", "&lt;&lt;serverUrl&gt;&gt;", "&lt;&lt;tenant&gt;&gt;", "&lt;&lt;username&gt;&gt;", "&lt;&lt;password&gt;&gt;" and optionally if you are using secured connection "&lt;&lt;certsFile&gt;&gt;" with your data.

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL, so when configuring port please remember to use proper one.
Above example uses SSL connection, but the certification check has been turned off which is fine for tests only.

What does the script do?

-   Configure MQTT connection
-   Register ``on_message`` callback function which will print incoming messages
-   Connect with the Cumulocity via MQTT protocol
-   Create a new device with ``Python MQTT`` name and ``c8y_MQTTDevice`` type
-   Wait a little bit to be sure that the device was registered???
-   Update device hardware information by putting ``S123456789`` serial, ``MQTT test model`` model and ``Rev0.1`` revision
-   Subscribe to the static operation templates for the device and print all received operations to the console
-   Send temperature measurement every 3 seconds

### Run script

To run the script just call:

    python hello_mqtt.py 

After starting application you should see new device in the Cumulocity application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed to the console.

In the console there should be an 

 
    Sending temperature measurement
    ...

## Improve the agent

Now that you have done your first step, check out the Section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.