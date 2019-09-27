---
title: Application Configuration
layout: redirect
weight: 30
---

The following simple exemplary application monitors input 1 of an INSYS MRX or MRO router and transmits the condition of input 1 to Cumulocity every time it changes. The following configuration steps in the web interface of the icom Data Suite are necessary for this (adding the Cumulocity server has already been done in the previous steps):

* [Adding Input 2.1 as a data point](/images/devices/icom#adding-input-2-1-as-a-data-point)
* [Adding the Cumulocity message](/images/devices/icom#adding-the-cumulocity-message)
* [Adding the event](/images/devices/icom#adding-the-event)
* [Activating the profile](/images/devices/icom#activating-the-profile)
* [Checking the result](/images/devices/icom#checking-the-result)

### Adding Input 2.1 as a data point

It is necessary to add Input 2.1 as a data point in the icom Data Suite. To do so, proceed as follows:

1.	Click on ? (Display help text) to aid setup with inline help text
2.	In the Datapoints menu, open the Digital I/Os page and click on the plus symbol in the Inputs section
3.	Enter a Description for the data point and select the Input 2.1 (Input 2.1 means that this is Input 1 on the card in slot 2)
4.	Click on Save settings

![Digital I/Os](/images/devices/icom/digitalIO.png)

Example for Input 1 on the card in Slot 2 of an MRX LAN (similar on other devices):

![Input 1 example](/images/devices/icom/input1Example.png)

### Adding the Cumulocity message

It is necessary to add a message that will be sent to the Cumulocity server when triggered. To do so, proceed as follows:

1.	In the Messages menu, open the Cumulocity page and click on the plus symbol in the Messages section
2.	Click on Edit (pen symbol) to configure the message
3.	Enter a Description for the message
4.	Select the Class Measurement
5.	Enter a descriptive Measurement title
6.	Enter a Type that can be used by downstream applications
7.	Enter a Unit for the value
8.	Check the desired data point
9.	Click on Save settings

![Cumulocity message](/images/devices/icom/cumulocityMessage.png)

### Adding the event

It is necessary to create an event that sends the message when the condition of the monitored input changes. To do so, proceed as follows:

1.	In the Events menu, click on the plus symbol to add an event
2.	Click on Edit (pen symbol) to configure the event
3.	Enter a Description for the event
4.	Select the Event Digital datapoint has changed
5.	Select the respective input as Datapoint
6.	Select the option State change
7.	Select the Action Send message
8.	Select the respective message
9.	Click on Save settings

![Adding the event](/images/devices/icom/addingEvent.png)

### Activating the profile

After completing the configuration, it is necessary to activate the profile in order for the configuration changes be applied. To do that, click on Activate profile.

The INSYS Smart Device will now establish the connection to Cumulocity and start to transmit the input state every time it changes.

### Checking the result

Connect a switch to the configured input and toggle it a few times to generate messages to Cumulocity.

Open in the Devices menu the All Devices page of Cumulocity and click on the device name to open the device page. Click on Measurements to view the chart.

![Final Result](/images/devices/icom/finalResult.png)

Refer to [the INSYS website](https://www.insys-icom.com/monitoring-app) for further information.
