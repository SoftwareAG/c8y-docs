---
weight: 10
title: What´s new
layout: redirect
---


### Cockpit

#### New welcome widget	

[MTM-30226] The welcome widget has been modified. The new welcome widget comes in two versions, which show different messages and quick links, based on the tenant type of the user (regular or trial tenant).

![Welcome widget](/images/release-notes/welcome-widget.png)

See also [Cockpit > Overview](/users-guide/cockpit#overview) in the User guide.

#### New dashboard functionality

to be added


#### New smartphone wizard

[MTM-30234] A new wizard is available to connect a smartphone to the platform. You can access it through a new quick link in the welcome widget of the Cockpit application.

add screenshot

### New version of Cumulocity IoT Sensor App

to be added

### Device integration: Cumulocity IoT NetComm Agent

to be added

### Data broker

The following improvements have been implemented in the data broker since 10.6.0.

[MTM-30779] The internal processing on the "source" side has been improved. The Data Broker can now send measurements in bulks, separately for each connector. Data broker in-memory queues should overflow less frequently, because events not matching any connector are discarded faster.

[MTM-30913] The exception handling has been improved. When a connector is suspended data broker will immediately stop forwarding.

[MTM-30910] To improve performance, events are now also being forwarded during device synchronization (ACTIVATING state).

[MTM-32280] The following changes have been implemented for alarms on queue overflow:

* An alarm is now also sent when the output queue is full (similar to the alarm for the input queue). 
* For output queues, the alarm text will include the affected connector. 
* The alarm severity has been changed from CRITICAL to MAJOR.


### UI

[MTM-31746] Russian is now available as a standard language.	




