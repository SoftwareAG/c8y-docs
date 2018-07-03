---
order: 60
title: Hello MQTT Python
layout: redirect
---

In this tutorial, you will learn how to use the Python MQTT client with Cumulocity using pre-defined messages (called "static templates").

## Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user, and a password in order to access Cumulocity.
* Verify that you have Python installed:
  
  	python --version
  	Python 2.7.12

  Python can be downloaded from [www.python.org](https://www.python.org/).

* Install the Paho client:

	  	pip install paho-mqtt
	  	
	  	
## Developing the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* create a python script,
* Run the script.

### Creating a python script

Create a script file, for example "hello_mqtt.py" with the following content:

   
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

Cumulocity MQTT protocol supports both unsecured TCP and secured SSL connections, so when configuring  a port remember to use the correct one. No matter which connection type you choose your "&lt;&lt;serverHost&gt;&gt;" should stay the same (like ``mqtt.cumulocity.com``).

The above example uses a TCP connection. If you would like to use an SSL connection, remember the proper configuration in the Paho MQTT client. Further information can be found in [www.eclipse.org](http://www.eclipse.org/paho/clients/python/docs/#option-functions).

What does the script do?

-   Configure a MQTT connection.
-   Register an ``on_message`` callback function which will print incoming messages and in case of a ``c8y_Restart`` operation will simulate a device restart.
-   Register an ``on_publish`` callback function which will be called after a publish message has been delivered.
-   Connect with Cumulocity via the MQTT protocol.
-   Create a new device with a ``Python MQTT`` name and a ``c8y_MQTTDevice`` type.
-   Update the device hardware information by putting  a ``S123456789`` serial, a ``MQTT test model`` model and a ``Rev0.1`` revision.
-   Subscribe to the static operation templates for the device - this will result in an ``on_message`` method call every time a new operation is created.
-   Call the ``sendMeasurements`` method which sends a temperature measurement every 3 seconds.

What does the ``publish`` message do?

-   Publish a given message about the given topic via MQTT.
-   When publishing the message it uses QoS 2. So to be sure that the message was delivered it will wait for server ACK (until the ``on_publish`` method is called with the matching message ID).

Note that the subscription is established after the device creation, otherwise if there is no device for a given ``clientId`` the server will not accept it.

### Running the script

To run the script just call:

    python hello_mqtt.py 

After starting the application you should see a new device in the Device Management application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed to the console.

In the console you should see following output:
 
    Sending temperature measurement
    ...
    
    
## Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](/guides/device-sdk/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.