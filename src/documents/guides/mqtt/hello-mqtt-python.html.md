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
    
    receivedMessages = []
    
    def on_message(client, userdata, message):
      print("Received operation " + str(message.payload))
      if (message.payload.startswith("510")):
         print("Simulating device restart...")
         publish("s/us", "501,c8y_Restart");
         print("...restarting...")
         time.sleep(1)
         publish("s/us", "503,c8y_Restart");
         print("...done...")
    
    def sendMeasurements():
      try:
        print("Sending temperature measurement")
        publish("s/us", "211,25");
        thread = threading.Timer(3, sendMeasurements)
        thread.daemon=True
        thread.start()
        while True: time.sleep(100)
      except (KeyboardInterrupt, SystemExit):
        print 'Received keyboard interrupt, quitting ...'
    
    
    def publish(topic, message, waitForAck = False):
      mid = client.publish(topic, message, 2)[1]
      if (waitForAck):
        while mid not in receivedMessages:
          time.sleep(0.25)
    
    def on_publish(client, userdata, mid):
      receivedMessages.append(mid)
    
    client = mqtt.Client(client_id="<<clientId>>")
    client.username_pw_set("<<tenant>>/<<username>>", "<<password>>")
    client.on_message = on_message
    client.on_publish = on_publish
    
    client.connect("<<serverHost>>", 1883)
    client.loop_start()
    publish("s/us", "100,Python MQTT,c8y_MQTTDevice", True)
    publish("s/us", "110,S123456789,MQTT test model,Rev0.1")
    client.subscribe("s/ds")
    sendMeasurements()

    
Replace "&lt;&lt;clientId&gt;&gt;", "&lt;&lt;serverHost&gt;&gt;", "&lt;&lt;tenant&gt;&gt;", "&lt;&lt;username&gt;&gt;", "&lt;&lt;password&gt;&gt;" with your data.

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections, so when configuring port please remember to use proper one. No matter which connection type you choose "&lt;&lt;serverHost&gt;&gt;" should stay the same (e.g. ``mqtt.cumulocity.com``).

Above example uses TCP connection, if you would like to use SSL please remember about proper configuration in the Paho MQTT client, more information [here](http://www.eclipse.org/paho/clients/python/docs/#option-functions).

What does the script do?

-   Configure MQTT connection
-   Register ``on_message`` callback function which will print incoming messages and in case of ``c8y_Restart`` operation simulate device restart
-   Register ``on_publish`` callback function which will be called after publish message has been delivered 
-   Connect with the Cumulocity via MQTT protocol
-   Create a new device with ``Python MQTT`` name and ``c8y_MQTTDevice`` type
-   Update device hardware information by putting ``S123456789`` serial, ``MQTT test model`` model and ``Rev0.1`` revision
-   Subscribe to the static operation templates for the device - this will result in ``on_message`` method call every time new operation is created
-   Call ``sendMeasurements`` method which sends temperature measurement every 3 seconds

What does the ``publish`` message do?

-   Publish given message on the given topic via MQTT
-   When publishing message it uses QoS 2 so to be sure that the message was delivered it will wait for server ACK (until ``on_publish`` method is called with the matching message id)

Note that subscription is established after device creation, otherwise if there is no device for a given ``clientId`` server will not accept it.

### Run script

To run the script just call:

    python hello_mqtt.py 

After starting application you should see new device in the Cumulocity application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed to the console.

In the console you should see following output 

 
    Sending temperature measurement
    ...

## Improve the agent

Now that you have done your first step, check out the Section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.