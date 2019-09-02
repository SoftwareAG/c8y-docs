---
title: Connecting to Cumulocity
layout: redirect
weight: 30
---

First you need to access Meshlium Manager System Interface, perfomring the following steps:

1. Connect to the Meshlium Wi-Fi Access Point.

2. Once connected, open your favorite browser and enter the following address:
 
	 	10.10.10.1/ManagerSystem
	  
3. The Meshlium Manager System will open up. Click **Cloud Connector** at the top.
 
	![system manager](/guides/images/devices/meshlium/ManagerSystem.png)
 
4. In the resulting dialog box, click **IoT Solutions**.
 
	![cloud connector](/guides/images/devices/meshlium/CloudConnector.png)
 
4. Select **Cumulocity**.
 
	![iot solutions](/guides/images/devices/meshlium/IoTSolutions.png)
 
5. This will bring you to the Cumulocity cloud configurator. In the **Configuration** dialog box, provide at least the following Cumulocity account settings.
	
	* 	**IP address**: management.eu-latest.cumulocity.com
	* 	**Port number**: 1883
	* 	**User**: &#60;tenant_id&#62;/&#60;alias&#62;, for example techlibelium/iburillo
	* 	**Password**: Password for your user		
	<br> It is required to specify an alias for your account in the Cumulocity platform which needs to be used here.
 
6. Click **Save** to save your settings.
 
To start sending measurements to Cumulocity, click **Start** to activate the Cumulocity MQTT Sender.

The Cumulocity platform handles all devices creation on our cloud, and constantly updates the measurements for your visualization.