---
title: Setup Cumulocity Cloud
layout: redirect
weight: 20
---

The following example for a simple monitoring application (monitoring input 1 of an INSYS IMON Smart Device and displaying the status in Cumulocity) is broken up in two steps:

* [Device registration](/guides/images/devices/insys#device-registration)
* [Application configuration](/guides/images/devices/insys#application-configuration)

It is necessary to make the following settings in both web interfaces, of Cumulocity and the Monitoring App of the Smart Device.

### Prerequisites

* You have a functional Monitoring App with one of above INSYS Smart Devices.
* The Monitoring App is installed on the INSYS Smart Device and the required monitoring package is available and licensed.
* The INSYS Smart Device has Internet connection.


### Device Registration

You need to register the INSYS Smart Device in your Cumulocity Cloud account first. The self-registration functionality of Cumulocity uses the serial number of the INSYS Smart Device as unique identifier. The serial number is indicated on the device label and can also be displayed in the System menu on the System data page in the web interface of the INSYS Smart Device.

![Serial Number](/guides/images/devices/insys/serialNumber.png)
![System Data](/guides/images/devices/insys/systemData.png)

#### Registering the device in Cumulocity

Enter the serial number of the INSYS Smart Device in the Device Management menu on the Registration page of Cumulocity and click on Register Device.

![Device Registration](/guides/images/devices/insys/deviceRegistration.png)

The device is registered in Cumulocity with this. Cumulocity is waiting for the first connection of this device.

![Device Registration: Waiting for Connection](/guides/images/devices/insys/deviceRegistrationWaiting.png)

Now you need to go to the web interface ot the Monitoring App to proceed.

#### Adding Cumulocity as recipient

It is necessary to add the Cumulocity Cloud as a recipient in the Monitoring App. To do so, proceed as follows:

1.	In the Setup application menu, open the Recipients page and click on Add recipient
2.	Enter a descriptive Name for the recipient and select the Type Cumulocity-Cloud
3.	Choose the Protocol https
4.	Enter the Server-URL of your Cumulocity account
5.	Enter a descriptive Device name for the monitored device
6.	Check the checkbox Self-registration
7.	Click on OK

![Add Recipient](/guides/images/devices/insys/addRecipient.png)

The INSYS Smart Device will now establish the connection to Cumulocity. You’ll then need to accept the registration as outline in the following section.

#### Accepting the registration

The Monitoring App has configured the recipient now and will connect to Cumulocity via the INSYS Smart Device. This is indicated by the pending acceptance message. You only need to accept the registration in the Devices menu on the Registration page of Cumulocity now and the device is available in Cumulocity.

![Device Registration](/guides/images/devices/insys/deviceRegistrationPending.png)


### Application Configuration

The following simple exemplary application monitors input 1 of an INSYS IMON fault monitor and transmits the condition of input 1 to Cumulocity every time it changes. The following configuration steps in the web interface of the Monitoring App are necessary for this (adding Cumulocity as recipient has already been done in the previous steps):

* [Adding the IMON as device](/guides/images/devices/insys#adding-the-imon-as-device)
* [Adding input 1 as element](/guides/images/devices/insys#adding-input-1-as-element)
* [Adding monitoring of input 1](/guides/images/devices/insys#adding-monitoring-of-input-1)
* [Adding the server feed action](/guides/images/devices/insys#adding-the-server-feed-action)
* [Adding the assignment of monitoring and action](/guides/images/devices/insys#adding-the-assignment-of-monitoring-and-action)

#### Adding the IMON as device

It is necessary to add the IMON as a device in the Monitoring App. To do so, proceed as follows:

1.	Click on ? (Display help text) to aid setup with inline help text
2.	In the Setup application menu, open the Devices page and click on Add device
3.	Enter a descriptive Name for the device and select the Type I/O
4.	Click on OK

![Add Device](/guides/images/devices/insys/addDevice.png)

#### Adding input 1 as element

It is necessary to add input 1 as an element in the Monitoring App. To do so, proceed as follows:

1.	In the Setup application menu, open the Elements page and click on Add element
2.	Enter a descriptive Name for the element and select the Device IO, IMON and Input Number 1
3.	Click on OK

![Add Element](/guides/images/devices/insys/addElement.png)

#### Adding monitoring of input 1

It is necessary to add a monitoring. In this example, we’ll monitor the IMON for a change of input 1.

1.	In the Monitoring menu, click on Add monitoring
2.	Enter a descriptive Name for the monitoring and select the Source Element, IN1 and toggles
3.	Click on OK

![Add Monitoring](/guides/images/devices/insys/addMonitoring.png)

#### Adding the server feed action

It is necessary to add an action that imitates a server feed to Cumulocity when triggered.

1.	In the Actions menu on the Definitions page, click on Add action
2.	Enter a descriptive Name for the action and select the Target Server feed
3.	Select the previously added Recipient
4.	Select the Message type Measurements
5.	Enter a descriptive Chart name
6.	Enter a Type that can be used by downstream applications
7.	Enter a Unit for the value
8.	Select the element to be transmitted using the button >>
9.	Click on OK

![Add Action](/guides/images/devices/insys/addAction.png)

#### Adding the assignment of monitoring and action

It is necessary to assign the monitoring to the action that is to be triggered when the monitored condition is detected.

1.	In the Actions menu on the Assignments page, click on Add assignment
2.	Assign the previously added Monitoring to the respective Action
3.	Click on OK

![Add Assignment](/guides/images/devices/insys/addAssignment.png)

### Checking the result

It is necessary to assign the monitoring to the action that is to be triggered when the monitored condition is detected.

1.	In the Actions menu on the Assignments page, click on Add assignment
2.	Assign the previously added Monitoring to the respective Action
3.	Click on OK

![Final Result](/guides/images/devices/insys/finalResult.png)

Refer to [the INSYS website](https://www.insys-icom.com/monitoring-app) for further information.
