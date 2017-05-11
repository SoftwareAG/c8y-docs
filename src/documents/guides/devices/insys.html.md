---
title: INSYS Smart Devices – INSYS OS
layout: devices
---

## Overview

The [INSYS icom](http://www.insys-icom.com/) industrial routers and fault monitors with INSYS OS support automatic data transmission from monitored PLCs or other devices to the Cumulocity Cloud. This is realised by the [Monitoring App](http://www.insys-icom.com/monitoring-app), an addition to the standard INSYS OS firmware. The app allows an easy and efficient monitoring of Siemens LOGO!™ and S7 controls as well as Modbus TCP/RTU devices or the I/Os of an INSYS IMON fault monitor. Measurement values, conditions, events and alarms can be transmitted to the Cumulocity Cloud. All available data can be setup directly in the Monitoring App and are automatically provided to the cloud account for (automatically self-scaling) charts and lists. Several PLCs can be monitored in parallel with one INSYS Smart Device. The transmission of data to several cloud accounts is also possible If the cloud service or transmission path is (temporarily) not available, data can be buffered on the INSYS Smart Device or transmitted via redundant transmission paths in the meantime. Cloud Control enables the modification of parameters of the INSYS Smart Device from the cloud service.

The following INSYS OS Smart Devices support Cumulocity (Monitoring App 2.5.2 or higher must be installed):

* [IMON series](http://insys-icom.com/IMON): Condition Monitors
* [EBW series](http://insys-icom.com/EBW): Basic Industrial Routers
* [MoRoS series](http://insys-icom.com/MoRoS): All-round Industrial Routers

<img src="/guides/devices/insys/insys-imon.png" alt="INSYS IMON" style="display: inline;max-width: 25%">
<img src="/guides/devices/insys/insys-ebw.png" alt="INSYS EBW" style="display: inline;max-width: 25%">
<img src="/guides/devices/insys/insys-mores.png" alt="INSYS MoReS" style="display: inline;max-width: 25%">

Cumulocity support for INSYS Smart Devices with icom OS is described [here](/guides/devices/icom).

## How to Setup Cumulocity Cloud

The following example for a simple monitoring application (monitoring input 1 of an INSYS IMON Smart Device and displaying the status in Cumulocity) is broken up in two steps:

* [Device registration](/guides/devices/insys#device-registration)
* [Application configuration](/guides/devices/insys#application-configuration)

It is necessary to make the following settings in both web interfaces, of Cumulocity and the Monitoring App of the Smart Device.

### Prerequisites

* You have a functional Monitoring App with one of above INSYS Smart Devices.
* The Monitoring App is installed on the INSYS Smart Device and the required monitoring package is available and licensed.
* The INSYS Smart Device has Internet connection.


### Device Registration

You need to register the INSYS Smart Device in your Cumulocity Cloud account first. The self-registration functionality of Cumulocity uses the serial number of the INSYS Smart Device as unique identifier. The serial number is indicated on the device label and can also be displayed in the System menu on the System data page in the web interface of the INSYS Smart Device.

![Serial Number](/guides/devices/insys/serialNumber.png)
![System Data](/guides/devices/insys/systemData.png)

#### Registering the device in Cumulocity

Enter the serial number of the INSYS Smart Device in the Device Management menu on the Registration page of Cumulocity and click on Register Device.

![Device Registration](/guides/devices/insys/deviceRegistration.png)

The device is registered in Cumulocity with this. Cumulocity is waiting for the first connection of this device.

![Device Registration: Waiting for Connection](/guides/devices/insys/deviceRegistrationWaiting.png)

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

![Add Recipient](/guides/devices/insys/addRecipient.png)

The INSYS Smart Device will now establish the connection to Cumulocity. You’ll then need to accept the registration as outline in the following section.

#### Accepting the registration

The Monitoring App has configured the recipient now and will connect to Cumulocity via the INSYS Smart Device. This is indicated by the pending acceptance message. You only need to accept the registration in the Devices menu on the Registration page of Cumulocity now and the device is available in Cumulocity.

![Device Registration](/guides/devices/insys/deviceRegistrationPending.png)


### Application Configuration

The following simple exemplary application monitors input 1 of an INSYS IMON fault monitor and transmits the condition of input 1 to Cumulocity every time it changes. The following configuration steps in the web interface of the Monitoring App are necessary for this (adding Cumulocity as recipient has already been done in the previous steps):

* [Adding the IMON as device](/guides/devices/insys#adding-the-imon-as-device)
* [Adding input 1 as element](/guides/devices/insys#adding-input-1-as-element)
* [Adding monitoring of input 1](/guides/devices/insys#adding-monitoring-of-input-1)
* [Adding the server feed action](/guides/devices/insys#adding-the-server-feed-action)
* [Adding the assignment of monitoring and action](/guides/devices/insys#adding-the-assignment-of-monitoring-and-action)

#### Adding the IMON as device

It is necessary to add the IMON as a device in the Monitoring App. To do so, proceed as follows:

1.	Click on ? (Display help text) to aid setup with inline help text
2.	In the Setup application menu, open the Devices page and click on Add device
3.	Enter a descriptive Name for the device and select the Type I/O
4.	Click on OK

![Add Device](/guides/devices/insys/addDevice.png)

#### Adding input 1 as element

It is necessary to add input 1 as an element in the Monitoring App. To do so, proceed as follows:

1.	In the Setup application menu, open the Elements page and click on Add element
2.	Enter a descriptive Name for the element and select the Device IO, IMON and Input Number 1
3.	Click on OK

![Add Element](/guides/devices/insys/addElement.png)

#### Adding monitoring of input 1

It is necessary to add a monitoring. In this example, we’ll monitor the IMON for a change of input 1.

1.	In the Monitoring menu, click on Add monitoring
2.	Enter a descriptive Name for the monitoring and select the Source Element, IN1 and toggles
3.	Click on OK

![Add Monitoring](/guides/devices/insys/addMonitoring.png)

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

![Add Action](/guides/devices/insys/addAction.png)

#### Adding the assignment of monitoring and action

It is necessary to assign the monitoring to the action that is to be triggered when the monitored condition is detected.

1.	In the Actions menu on the Assignments page, click on Add assignment
2.	Assign the previously added Monitoring to the respective Action
3.	Click on OK

![Add Assignment](/guides/devices/insys/addAssignment.png)

### Checking the result

It is necessary to assign the monitoring to the action that is to be triggered when the monitored condition is detected.

1.	In the Actions menu on the Assignments page, click on Add assignment
2.	Assign the previously added Monitoring to the respective Action
3.	Click on OK

![Final Result](/guides/devices/insys/finalResult.png)

Refer to [the INSYS website](https://www.insys-icom.com/monitoring-app) for further information.
