---
order: 20
title: Cumulocity's domain model
layout: default
---

## Overview


***Cumulocity captures all relevant aspects of devices and assets in the Internet of Things.***

![model](/guides/concepts-guide/model.png)


* The *inventory* stores all master data related to devices, their configuration and their connections. It also contains all related assets (like vehicles, machines, buildings) and their structure.


* *Measurements* contain numerical data produced by sensors (like temperature readings) or calculated data based on information from devices (service availability of a device).


* *Events* contain other real-time information from the sensor network, such as the triggering of a door sensor. Events can also be *alarms* .The user or operator of the system has to take action to resolve the alarm (like a power outage). In addition, security-related events are shown as *audit logs*.


* *Operations* relate to data that is sent to devices for execution or processing, such as switching a relay in a power meter or sending a credit to a vending machine.

- One of the great innovations in Cumulocity is its standardized representation of common devices and sensors as well as concepts for flexibly extending and modifying this representation. By default, Cumulocity comes with detailed visualizations of  sensors, smart meters, trackers and other devices. It has many options to fit in local customizations.


- As a result Internet of Things applications can be written independently from connected devices and underlying sensor networks, customized for specific cases in different web configurations or different devices from manufacturers.

The following section is a walk-through of those concepts and will describe the ideas behind it and give you examples. [JavaScript object notation (JSON)](http://json.org/) The format these examples use is Cumulocity's REST APIs. For usability with other programming languages, please refer to the specified sections in the Reference Guide.

## Inventory


**The inventory stores devices and other assets relevant to your IoT solution. We refer to them as  *managed objects*.**


Managed objects can be "smart objects" such as smart electricity meters, home automation gateways and GPS devices. They can be the assets you would like to monitor, such as rooms in which sensors are installed, or cars containing GPS devices. 


The following JSON code shows a small example of a managed object in the inventory, in this case a simple switch.

<pre><code class="json">{
	"id": "47635",
	"type": "ge_45609",
	"c8y_Relay" : 
	{
		"relayState" : "OPEN"
	},
	...
}</code></pre>

An example for another asset stored in the inventory could be a room in which a switch is installed. (Compare the "id" property of the switch with the "managedObject" reference.)

<pre><code class="json">{
	"id": "47636",
	"type": "resortenergymgmt_Room",
	"name": "Sauna",
	"childAssets": {
		"references" : [
			{ "managedObject": { "id": "47635", ... },
			...
			} 
		]
	},
	"resortenergymgmt_RoomProperty": {
		"size": 56,
		...
	}
}</code></pre>

**In general, each managed object consists of**

* A unique identifier that references the desired object.
* A type string that defines the object type.
* A time stamp showing the last update.
* Additional *fragments*.

### Fragments

For example, you want to describe electric meters from different vendors. Depending on the make of the meter, one may have a relay and one may be able to measure a single phase or three phases. These characteristics are identified by storing fragments for each of them:

<pre><code class="json">{
	"id": "47635",
	"type": "elstermetering_AS220",
	"lastUpdated": "2010-11-13T18:28:36.000Z",
	"c8y_Position": {
		"alt": 67,
		"lng": 6.15173,
		"lat": 51.211977
	},
	"c8y_ThreePhaseElectricitySensor": {},
	"c8y_Relay": {
		"state": "CLOSED"
	}
}</code></pre>

In this example, a fragment "c8y\_ThreePhaseElectricitySensor" identifies a three phase electric meter. In addition, the device includes a relay, which can be used to turn the power supply on and off.

Using this approach, the modelling devices can make a difference between modelling  elementary sensors and controls as fragments, and modelling the entire device as a combination of sensors, controls and possibly proprietary aspects of the device.

The approach also enables developing generic application components. For example, as soon as a managed object has a position fragment ("c8y\_Position"), it can be placed on a map. As soon as it has a relay, it can be switched on and off using the respective device control command as described below.

### Naming conventions of fragments
**Fragments use a naming convention to avoid conflicts between different parties supplying fragment information, similar to Java or other programming languages.** 

In the example above, "c8y_Position" is a combination of "c8y" (a shorthand for "Cumulocity"), an underscore and "Position". Together they form a set of standard fragments. Fragment definitions can be found here [sensor library](/guides/reference/sensor-library) and in the [device management library](/guides/reference/device-management).

Note that Cumulocity follows a document-oriented approach for storing data. All characteristics of an object can be inferred from the document with the object data itself. There is no explicit separate metadata model that needs to be configured and managed. However, applications can add own metadata and store values in the inventory additionally. For example, a vending application can maintain metadata about slot configurations of the diverse vending machine types in the inventory.

### Object identification

***Each managed object in the inventory has an own, "global" identifier that is automatically generated by Cumulocity when the object is created.***

This identifier will always stay with the object regardless of network restructures or different hardware parts.

![Identity service](/guides/concepts-guide/identification.png)

***To shield applications from these numbers of identifiers, Cumulocity includes an identity service that registers all identifiers for one asset that are used outside of Cumulocity and map these to a single global identifier that is used by applications.***

This service is used by agents (to register external identifiers) and is used by business processes involving reorganisations and changes of devices (to modify maps of external identifiers to global identifiers).

As an example, assume that a smart meter would be faulty and a new meter with another meter number and asset tag needs to be installed in a household. The routine business process for replacing faulty hardware can now just update the asset tag and meter ID associated with a customer in the identity service. Afterwards both previously collected and new meter readings are related to the correct customer.

More information can be found in the reference guide for [identity](/guides/reference/identity).

## Object hierarchies
***The inventory model supports two default hierarchies of objects: A communication hierarchy ("childDevices") and an asset hierarchy ("childAssets").***


The communication hierarchy tracks how devices are linked to the M2M platform from a communication point of view. A typical communication hierarchy is shown in the picture below: Agents connect the sensor network to Cumulocity. They often communicate through gateway devices or modems with the sensor network. The gateways, in reverse, connect to devices in the sensor network, which contain sensors and controls. 

![Example communication hierarchy](/guides/concepts-guide/commshierarchy.png)

The asset hierarchy structures the assets that are remotely supervised and controlled through the M2M devices. 

An example asset hierarchy for building management could be buildings containing rooms. Buildings would be associated with gateways connecting the building to Cumulocity, while rooms would be associated with sensors and controls. This example hierarchy is shown in the picture below.

![Example asset hierarchy](/guides/concepts-guide/assethierarchy.png)

### Child objects in hierarchies 
The two hierarchies above are explicitly supported by the [inventory interface](/guides/reference/inventory) and client libraries, that provide methods for adding and removing children in hierarchies. The hierarchies themselves are constructed by client applications. The communication hierarchy is constructed by agents, the asset hierarchy is added by applications on top.

Note that the object hierarchies are not required to form a tree, the same asset can be a child of multiple parent assets. This enables applications to create additional, user-defined groups of objects such as working sets or virtual networks. Applications can, in addition, use fragments to define arbitrary alternative hierarchies.

## Object lifecycle

The previously described identification and hierarchy mechanisms form a very flexible device lifecycle approach that can be adapted to most business processes. Initially, when a device is powered on for the first time, it is neither connected to the system nor linked to an asset. Linking a device to an agent in the communication hierarchy (possibly indirectly through a gateway) signals that the device is connected. Only connected devices can be remote controlled. Linking a device to an asset using the asset hierarchy can be used to signal that the device has been physically installed. 

Disconnecting and uninstalling a device does not necessarily indicate that the device was discarded or deactivated and should be deleted from the system. It can indicate instead that the device was returned to the warehouse and will be installed elsewhere later on. It depends on the particular business process whether data for the device should be kept or not. Physically deleting a device from the inventory imply that all data collected for that device is lost -- this is probably desired only when completely cleaning up old data. To keep data for a device that has been discarded, identifier mappings can be removed from the identity service. Should a new device be installed in the same place as the old device, a new "global" identifier will be generated.

Addressing the device lifecycle properly is important when designing agents. An agent connecting to devices should not assume automatically that devices can be deleted from the inventory when they cannot be connected to. In the same way, an agent interfacing a CRM system should not assume that a device can be deleted when it has been removed from the CRM system.

### Working with the inventory

More examples for working with the inventory can be found in the [inventory reference](/guides/reference/inventory).

## Events

***Events are used to pass real-time information through Cumulocity.*** 

Events come in three types:

-   A base event signals when something happens. An event can be triggered when a switch is switched on or off.

-   An alarm signals an event that requires manual action, for example, when a meter has been tampered with or the temperature of a fridge increases above a particular threshold.

-   An audit log stores events that are security-relevant and should be stored for auditing. For example, an audit log should be generated when a user logs into a gateway.

An event has one specific type (as specified in its naming convention), a time when the event occurred and a text to describe the event. An event refers to a source managed object in the inventory. This is an example of an event:

<pre><code class="json">{
	"type": "c8y_LocationUpdate",
	"time": "2010-11-13T18:28:36.000Z",
	"text": "Location updated",
	"source": { "id": "47634", ... },
	"c8y_Position": {
		"alt": 67,
		"lng": 6.15173,
		"lat": 51.211977
	}
}</code></pre>

Any event can be extended in the same way as described for managed objects above. In this example, we not only signalled that an object moved, we also included the new position of the object in the form of a "c8y_Position" fragment.

An audit log extends an event through

-   A user name of the user that carried out the activity.
-   An application that was used to carry out the activity.
-   The actual activity.
-   A severity.

This is an example of an audit record structure:

<pre><code class="json">{
	"type": "c8y_SecurityEvent",
	"time": "2010-11-13T18:28:36.000Z",
	"text": "Gateway login failed",
	"user": "vvirtanen",
	"application": "Resort energy management",
	"activity": "login",
	"severity": "MINOR",
	"source": { "id": "47633", ... },
	...
}</code></pre>

An alarm extends events through

-   A status showing whether the alarm is active or cleared.
-   A time stamp when the alarm was last updated.
-   It can have classifications such as critical, major, minor and can include a warning.
-   A history of changes to the event in form of audit logs.

This is an example of an alarm that has been cleared:

<pre><code class="json">{
	"type": "c8y_UnavailabilityAlarm",
	"time": "2010-11-13T19:28:36.000Z",
	"text": "No communication with device since 2013-11-05T15:23:55.284+01:00",
	"status": "CLEARED",
	"severity": "MINOR",
	"source": { "id": "47633", ... },
	"history": {
		"auditRecords": [ {
			"activity": "Alarm updated",
			"application": "devicemanagement",
			"user": "vvirtanen",
			"time": "2013-11-05T16:37:48.494+01:00",
			"changes": [ {
				"attribute": "status",
				"newValue": "CLEARED",
				"previousValue": "ACTIVE",
				"type": "com.cumulocity.model.event.CumulocityAlarmStatuses"
			} ],
			...
		} ]
		...
	} 
	...
}</code></pre>

More examples can be found in the reference guides for [events](/guides/reference/events), [alarms](/guides/reference/alarms) and [auditing](/guides/reference/auditing).

## Measurements

*Measurements represent regularly acquired readings and statistics from sensors.*

Measurements consist of a time when the measurement was taken, the unique identifiers of the source of the measurement, and a list of fragments. Here is an example of a measurement:

<pre><code class="json">{
	"time": "2011-01-02T03:04:00.000Z",
	"source": { "id": "1235", ... },
	"c8y_ThreePhaseElectricityMeasurement": {
		"A+": { "value": 435, "unit": "kWh" },
		"A-": { "value": 23, "unit": "kWh" },
		"P+": { "value": 657, "unit": "W" },
		"P-": { "value": 0, "unit": "W" },
		"A+:1": { "value": 123, "unit": "kWh" },
		"A-:1": { "value": 2, "unit": "kWh" },
		"P+:1": { "value": 56, "unit": "W" },
		"P-:1": { "value": 0, "unit": "W" },
		"A+:2": { "value": 231, "unit": "kWh" },
		"A-:2": { "value": 23, "unit": "kWh" },
		"P+:2": { "value": 516, "unit": "W" },
		"P-:2": { "value": 2, "unit": "W" },  
		...
	},
	...
}</code></pre>

Similar to the inventory model, fragments are used to identify characteristics of particular devices. In the above example, a three-phase electricity meter sends readings for the different electrical phases. Each such fragment maps the names of the individual readings ("A+", "A-", ... in this example) to the actual numeric value and the unit of measurement.

Readings can hold various additional information that applications may require. More detailed information can be found in the reference guide for [measurements](/guides/reference/measurements).

## Remote control of devices

### Operations

**Devices can be remote controlled and managed.** 

Examples:

-   Device control: Setting a switch which controls temperature
-   Device configuration: Setting up a charge table in a smart meter.
-   Device maintenance: Requesting a gateway to download and install a new firmware.

In Cumulocity, these cases of usage are implemented by sending *operations* to a device. The following snippet shows an operation for setting the state of the relay with the ID "42" to "OPEN":

<pre><code class="json">{
	"deviceId": "42",
	"c8y_Relay": {
		"relayState": "OPEN"
	}
}</code></pre>

Just like other types of data, operations are also standardised through the sensor library to simplify application development (see below). For example, setting a switch should be the same for all switches regardless of their make.

Operations are modelled just like fragments in the inventory model (see above). The same extensibility concept applies. Random vendor-proprietary extensions to the standard operations are possible. These are not denied or modified by Cumulocity.

### Sending operations to devices

**Cumulocity delivers operations to devices over any network using a reliable queueing routine. This queueing routine respects the limitations and security requirements of IoT networks:**

-   Devices are often connected over unreliable, low-bandwidth links that may only occasionally be available. Devices may, for example, only dial up once in a day to the network to fetch commands for execution. Therefore Cumulocity communicates asynchronously with devices.


-   Device protocols are often not designed for secure online communication. They may not pass NAT networks, firewalls and web proxies. They may not be secure enough for public exposure on the Internet. Cumulocity offers the possibility to connect these devices as HTTPS clients.
-   It may not even be possible to reach a mobile device over the Internet. Cumulocity uses push technology to send operations to devices.

To pass an operation from an application to a device, a process of several steps is required as illustrated in the image below. Assume that the user issues a remote control operation for a device (such as a device restart) from an application. The application creates the operation in Cumulocity (Step "1"). Cumulocity will queue the operation for execution and return control back to the application immediately. 

At some point in time, the agent responsible for the device will request operations that are queued for the devices that it manages ("Step 2"). This will happen immediately through Cumulocity's push mechanism or at a regular or scheduled interval. 

The agent will execute the operations on the devices that it manages (Step "3"), and will update Cumulocity with the results of the execution (Step "4"). The devices that the agent manages are direct or indirect children ("childDevices") of the agent.

Finally, the application can query the results of the operation (Step "5"). Audit records are generated both for the original request to run the device control operation and for the acknowledgement that the operation was actually run.

![Device control architecture](/guides/concepts-guide/control.png)

If there are communication issues while delivering an operation to a device, an alarm should be raised by the agent.

Sometimes there are delays between sending an operation to a device and retrieving a response. The system assumes a delivery unless an error is reported to maintain functionality.

### Designing operations for reliability

***Operations should always be idempotent. Idempotent means that no matter how often you run the operation, the outcome is always the same.*** 

For example, an operation to set a switch to a certain state is idempotent. No matter how often the switch is set to "on", it will be "on" afterwards. An operation to toggle a switch is not idempotent -- the result depends on whether the operation was run an odd or an even number of times.

More information can be found in the reference guide [device control](/guides/reference/device-control).

## The sensor library

Cumulocity includes a [sensor library](/guides/reference/sensor-library "Sensor library") to model specific sensing and controlling skills across device products. A single device can have many sensor and control characteristics. The sensor library enables applications to answer questions such as:

-   What devices are installed that measure energy?
-   What are the energy readings?
-   Does a particular energy meter also include a switch for the power supply that I can switch off?

It covers basic sensors and controls, and is supported by the Cumulocity client libraries. It also enables writing powerful generic IoT software plugins. 

Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention (as mentioned before). The example below shows two fragments used for an electricity meter:

<pre><code class="json">{
	"id" : "1",
	"type" : "com_kamstrup_382",
	"c8y_SinglePhaseElectricityMeasurement": {},
	"c8y_Relay" : { "state": "OPEN" }
}</code></pre>

To a Java developer, checking the state of a switch in a device "mo" looks like this:

<pre><code class="java">ManagedObject mo = ...;
Relay relay = mo.get(Relay.class);
RelayState state = relay.getRelayState();</code></pre>

To a JavaScript developer, the same check would look like this:

<pre><code class="js">var state = mo.c8y_Relay.relayState</code></pre>

More detailed information can be found in the reference guide under "[Sensor library](/guides/reference/sensor-library "Sensor library")".

The Cumulocity team welcomes contributions to the sensor library. If you integrate any devices, controls, sensors or other objects and find that your model fragments have a more general usability beyond your own case or your device, we encourage you to contribute them for inclusion into Cumulocity by contacting our support. 

## Summary

**Cumulocity provides a reference model for managing and controlling IoT systems, covering**

-   Central representation of IoT devices, networks and assets in the inventory,
-   Configuration of devices,
-   Reading of sensors,
-   Manipulation of controls and
-   Handling of realtime events.

This model is intended to be horizontal across device vendors. In addition it is also extensible to cover any needs of special features of various devices and applications.
