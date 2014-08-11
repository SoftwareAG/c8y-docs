---
order: 20
title: Cumulocity's domain model
layout: default
---

## Overview

Cumulocity captures all relevant aspects of devices and assets in the Internet of Things, as illustrated below.

![Domain model](/guides/concepts-guide/model.png)

* The *inventory* stores all master data related to devices, their configuration and their connections. It also contains all related assets (such as vehicles, machines, buildings) and their structure.
* *Measurements* contain numerical data produced by sensors (e.g., temperature readings) or calculated based on information from devices (e.g., service availability of a device).
* *Events* contain other real-time information from the sensor network, such as the triggering of a door sensor. Events can also be *alarms* for which the user or operator of the system has to take action to resolve (e.g., a power outage). In addition, security-related events are shown as *audit logs*.
* *Operations* relate to data that is sent to devices for execution or processing, such as switching a relay in a power meter or sending a credit to a vending machine.

One of the great innovations in Cumulocity is that it both has a standardized representation of common devices and sensors as well as concepts for flexibly extending and modifying this representation. For example, Cumulocity comes with detailed concepts of temperature sensors, smart meters, trackers and much more. But if you have a different smart meter or an entirely new sensor, it's very easy to extend the representation to capture, for example, a different type of tariff table in a meter.

The result of this is that you can write Internet of Things applications that are highly independent of the particular devices that are used in the underlying sensor network and the connectivity within the network. But you can also write applications that are supporting a very specified use case, such as a web configuration form for a particular device model from a particular manufacturer.

The following sections walk you through all the above concepts, describe their ideas and give examples. The examples shown here are given in [JavaScript object notation (JSON)](http://json.org/), the format used in Cumulocity's REST APIs. For usage from Java, JavaScript and other environments, please see the relevant Developer's Guide sections. More detailed information can be found in the Reference Guide.

## Inventory

The inventory stores devices and other assets relevant to your IoT solution. We refer to them as *managed objects*. Such managed objects could be actual "smart objects" such as smart electricity meters, home automation gateways and GPS devices. They could be the assets that you would like to monitor, such as rooms in which sensors are installed, or cars containing GPS devices. They can also be related other business objects, such as households or driving routes.

The following JSON code shows a minimal example of a managed object in the inventory, in this case a simple switch.

	{
		"id": "47635",
		"type": "ge_45609",
		"c8y_Relay" : 
		{
			"relayState" : "OPEN"
		},
		...
	}

An example for another asset stored in the inventory could be a room in which the switch is installed. (Compare the "id" property of the switch with the "managedObject" reference.)

	{
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
	}

In general, each managed object consists of

* A unique identifier that can be used to reliably reference the object.
* A type string that defines the most specific type of the object.
* A time stamp of the last update.
* Additional so-called *fragments*.

### Fragments

Fragments are used to identify capabilities of a managed object. For example, you may want to describe electricity meters from different vendors. Depending on the make of the meter, it may have a relay and it may be able to measure a single phase or three phases. These capabilities are identified by storing a fragment for each of the capabilities as follows:

	{
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
	}

In this example, a fragment "c8y\_ThreePhaseElectricitySensor" identifies a three phase electricity meter. In addition, the device includes a relay, which can be used to turn the power supply on and off.

Using this approach, modeling devices can be split into modeling the elementary sensors and controls as fragments, and modeling the entire device as a combination of sensors, controls and possibly proprietary aspects of the device.

The approach also enables developing generic application components. For example, as soon as a managed object has a position fragment ("c8y\_Position"), it can be placed on a map. As soon as it has a relay, it can be switched on and off using the respective device control command (see below).

Fragments use a naming convention to avoid conflicts between different parties contributing fragment information, similar to what is used in Java and other programming languages. In the above example, "c8y_Position" is a combination of "c8y" (a shorthand for "Cumulocity"), an underscore and "Position". A set of standard fragments are defined by the platform in the [sensor library](/guides/reference/sensor-library) and in the [device management library](/guides/reference/device-management).

Note that Cumulocity follows a document-oriented approach for storing data. All capabilities of an object can be inferred from the document with the object data itself. There is no explicit separate metadata model that needs to be configured and managed. However, applications can, of course, add own metadata and store that as well in the inventory. For example, a vending application can maintain metadata about slot configurations of the diverse vending machine types in the inventory.

### Object identification

Each managed object in the inventory has an own, "global" identifier that is synthetically generated by Cumulocity when the object is created. This identifier can be used to reliably reference the object, regardless of, for example, restructuring of networks or replacement of hardware parts.

Devices and enterprise IT systems typically have their own concept of identifying devices and assets. Gateways and devices typically use some form of technical identifier to references devices. For example, a smart meter could be identified by a technical meter number, through which it is reachable from a gateway. A customer relationship management (CRM) system would use customer IDs of the customer that has the meter installed. And an enterprise asset management system could track the same meter through an asset tag that is on a label glued to the device. The asset management system would also track the actual meter ID and customer ID.

![Identity service](/guides/concepts-guide/identification.png)

To shield applications from this diversity of identifiers, Cumulocity includes an identity service that registers all identifiers for an asset that are used outside of Cumulocity and maps these to the single global identifier that can be used by applications. This service is used by agents (to register external identifiers) and by business processes involving reorganizations and changes of devices (to modify mappings of external identifiers to global identifiers).

To illustrate this, assume that a smart meter is faulty and a new meter with another meter number and asset tag needs to be installed in a household. The business process for replacing faulty hardware can now just update the asset tag and meter ID associated with a customer in the identity service. Afterwards both previously collected and new meter readings are related to the correct customer.

More information can be found in the reference guide for [identity](/guides/reference/identity).

### Object hierarchies

The inventory model supports two default hierarchies of objects: A communication hierarchy ("childDevices") and an asset hierarchy ("childAssets"). The communication hierarchy tracks how devices are linked to the M2M platform from a communications point of view. A typical communication hierarchy is shown in the picture below: Agents connect the sensor network to Cumulocity. They often communicate through gateway devices or modems with the sensor network. The gateways, in turn, connect to the devices in the sensor network, which contain sensors and controls. The communication hierarchy is used by the platform for communicating with devices and for resolving communication problems.

![Example communication hierarchy](/guides/concepts-guide/commshierarchy.png)

The asset hierarchy structures the assets that are being remotely supervised and controlled through the M2M devices. Hence, it is the most relevant for M2M applications. An example asset hierarchy for building management could be buildings containing rooms. Buildings would be associated with gateways connecting the building to Cumulocity, while rooms would be associated with sensors and controls. This example hierarchy is shown in the picture below.

![Example asset hierarchy](/guides/concepts-guide/assethierarchy.png)

The two hierarchies above are explicitly supported by the [inventory interface](/guides/reference/inventory) and client libraries, that provide methods for adding and removing children in the hierarchies. The hierarchies themselves are constructed by client applications. The communication hierarchy is constructed by agents, the asset hierarchy is added by applications on top.

Note that the object hierarchies are not required to form a tree, i.e., the same asset can be a child of multiple parent assets. This enables applications to create additional, possibly user-defined groups of objects such as working sets or virtual networks. Applications can, in addition, use fragments to define arbitrary alternative hierarchies.

### Object lifecycle

The previously described identification and hierarchy mechanisms form a very flexible device lifecycle mechanism that can be adapted to most business processes. Initially, when a device is powered on for the first time, it is neither connected to the system nor linked to an asset. Linking a device to an agent in the communication hierarchy (possibly indirectly through a gateway) signals that the device is connected. Only connected devices can be remotely controlled. Linking a device to an asset using the asset hierarchy can be used to signal that the device has been physically installed. 

Disconnecting and uninstalling a device does not necessarily indicate that the device has actually been thrown away and should be deleted in the system. It may also indicate that the device was returned to the warehouse and will be installed elsewhere lateron. It depends on use case and business process whether data for the device should be kept or not. Physically deleting a device from the inventory means that all data collected for that device is lost -- this is probably only desired when completely cleaning up old data. To keep data for a device that has been discarded, identifier mappings can be removed from the identity service. Should a new device be installed in the same place as the old device, a new "global" identifier will be generated.

Addressing the device lifecycle properly is important when designing agents. E.g., an agent connecting to devices should not assume that devices can be deleted from the inventory when they cannot be connected to. In the same way, an agent interfacing a CRM system should not assume that a device can be deleted when it has been removed from the CRM system.

### Working with the inventory

More examples for working with the inventory can be found in the [inventory reference](/guides/reference/inventory).

## Events

Events are used to pass real-time information through Cumulocity. Events come in three types:

-   A base event signals when something happens. An event could, for example, be triggered when a switch is switched on or off.
-   An alarm signals an event that requires manual action, for example, when a meter has been tampered with or the temperature of a fridge increases above a particular threshold.
-   An audit record stores events that are security-relevant and should be stored for auditing. For example, an audit log should be generated when a user logs into a gateway.

An event has a type (in the already described naming convention), a time when the event occurred and a text to describe the event. An event refers to a source managed object in the inventory. This is an example of an event:

    {
      "type": "c8y_LocationUpdate",
      "time": "2010-11-13T18:28:36.000Z",
      "text": "Location updated",
      "source": { "id": "47634", ... },
      "c8y_Position": {
        "alt": 67,
        "lng": 6.15173,
        "lat": 51.211977
      }
    }

Any event can be extended in the same way as described for managed objects above. In this example, we not only signalled that an object moved, we also included the new position of the object in the form of a "c8y_Position" fragment.

An audit record extends an event through

-   A user name of the user that carried out the activity.
-   An application that was used to carry out the activity.
-   The actual activity.
-   A severity.

This is an example of an audit record structure:

    {
      "type": "c8y_SecurityEvent",
      "time": "2010-11-13T18:28:36.000Z",
      "text": "Gateway login failed",
      "user": "vvirtanen",
      "application": "Resort energy management",
      "activity": "login",
      "severity": "MINOR",
      "source": { "id": "47633", ... },
      ...
    }

An alarm extends events through

-   A status showing whether the alarm is active or cleared.
-   A time stamp when the alarm was last updated.
-   A severity of critical, major, minor and warning.
-   A history of changes to the event in the form of audit records.

This is an example of an alarm that has been cleared:

    {
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
            "attribute": "status"
            "newValue": "CLEARED"
            "previousValue": "ACTIVE"
            "type": "com.cumulocity.model.event.CumulocityAlarmStatuses"
          } ],
          ...
        } ]
        ...
      } 
      ...
    }

More examples can be found in the reference guides for [events](/guides/reference/events), [alarms](/guides/reference/alarms) and [auditing](/guides/reference/auditing).

## Measurements

Measurements represent regularly acquired readings and statistics from sensors. Measurements consist of a time when the measurement was taken, the unique identifiers of the source of the measurement, and a list of fragments. Here is an example of a measurement:

    {
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
    }

Similar to the inventory model, fragments are used to identify capabilities of particular devices. In the above example, a three-phase electricity meter sends readings for the different electrical phases. Each such fragment maps the names of the individual readings ("A+", "A-", ... in this example) to the actual numeric value and the unit of measurement.

Again, measurements can be extended to hold arbitrary additional information that applications might require. More information can be found in the reference guide for [measurements](guides/reference/measurements).

## Remote control of devices

### Operations

Devices need to be remotely controlled and managed. Examples are:

-   Device control: Setting a switch, regulating a heating control.
-   Device configuration: Setting a tariff table in a smart meter.
-   Device maintenance: Requesting a gateway to download and install a new firmware.

In Cumulocity, these use cases are implemented by sending *operations* to a device. The following snippet shows an operation for setting the state of the relay with the ID "42" to "OPEN":

    {
      "deviceId": "42",
      "c8y_Relay": {
         "relayState": "OPEN"
       }
    }

Just like the other types of data, operations are also standardized through the sensor library to simplify application development (see below). For example, setting a switch should be the same for all switches regardless of the make.

Operations are modeled just like fragments in the inventory model (see above), hence the same extensibility concept applies. There can be arbitrary vendor-proprietary extensions to the standard operations, these are not interpreted in any way by Cumulocity.

### Sending operations to devices

Cumulocity delivers operations to devices over any network through a reliable queueing mechanism. This queueing mechanism respects the limitations and security requirements of IoT networks:

-   Devices are often connected over unreliable, low-bandwidth links that may only be occasionally available. Devices may, for example, only dial up once in a day to the network for fetching commands to be executed. Hence, Cumulocity communicates asynchronously with devices.
-   Device protocols are often not designed for secure communication over the Internet. They may not pass NAT networks, firewalls and web proxies. They may not be secure enough for public exposure on the Internet. Hence, Cumulocity offers the possibility to connect these devices as HTTPS clients.
-   It may not even be possible to reach a mobile device from the Internet. Hence, Cumulocity uses push technology to send operations to devices.

To pass an operation from an application to a device, a process of several steps is required as illustrated in the image below. Assume that the user issues a remote control operation for a device (such as a device restart) from an application. The application creates the operation in Cumulocity (Step "1"). Cumulocity will queue the operation for execution and return control back to the application immediately. 

At some point in time, the agent responsible for the device will request operations that are queued for the devices that it manages ("Step 2"). This might happen immediately through Cumulocity's push mechanism or at a regular or scheduled interval. 

The agent will execute the operations on the devices that it manages (Step "3"), and will update Cumulocity with the results of the execution (Step "4"). The devices that the agent manages are direct or indirect children ("childDevices") of the agent.

Finally, the application can query the results of the operation (Step "5"). Audit records are generated both for the original request to run the device control operation and for the acknowledgement that the operation was actually run.

![Device control architecture](/guides/concepts-guide/control.png)

Note that communicating the results of an operation (Steps "4" and "5") can additionally happen through a different channel than the device control interface. For example, when a switch state has been changed, the agent would probably need to update the inventory with the new switch state, and the application would need to update its user interface accordingly. As another example, if there is a communication problem in delivering an operation to a device, an alarm might need to be raised by the agent.

Note also that there may be an arbitrary delay between sending an operation to a device and retrieving the response. For usability reasons, it may make sense to simply assume that the operation will be delivered to the device (through reliable queuing) and report only error case when they are detected.

### Designing operations for reliability

Operations should be designed to be *idempotent* in as far as possible. Idempotent means that no matter how often you run the operation, the outcome is always the same. For example, an operation to set a switch to a certain state is idempotent. No matter how often the switch is set to "on", it will be "on" afterwards. An operation to toggle a switch is not idempotent -- the result depends on whether the operation was run an odd or an even number of times.

Idempotence is helpful in error situations. If an operation was executed on a device and the result was an error, the operation can simply be retried. Hence, design operations to be idempotent whenever there is the option. This is, however, not always possible: If a camera is requested to take a picture and this fails for some reason, retrying this often results in a different result.

More information can be found in the reference guide for [device control](/guides/reference/device-control).

## The sensor library

Based on the above groundwork for receiving data from devices and controlling them, Cumulocity includes a [sensor library](/guides/reference/sensor-library "Sensor library") to model specific sensing and controlling capabilities across device products. A single device can have many sensor and control capabilities. The sensor library enables applications to answer questions such as:

-   What devices are installed that measure energy?
-   What are the energy readings?
-   Does a particular energy meter also include a switch for the power supply that I can switch off?

It covers basic sensors and controls, and is supported by the Cumulocity client libraries. This not only simplifies development, but more importantly, it enables writing powerful generic IoT software plugins. Taking the above example, you could implement an energy plugin that can be used in multiple related application scenarios (such as home automation, smart metering and enterprise energy management) and for diverse devices.

Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention outlined above. The example below shows two fragments used for an electricity meter:

    {
      "id" : "1",
      "type" : "com_kamstrup_382",
      "c8y_SinglePhaseElectricityMeasurement": {},
      "c8y_Relay" : { "state": "OPEN" }
    }

To a Java developer, checking the state of a switch in a device "mo" looks like this:

    ManagedObject mo = ...;
    Relay relay = mo.get(Relay.class);
    RelayState state = relay.getRelayState();

To a JavaScript developer, the same check would look like this:

    var state = mo.c8y_Relay.relayState

More detailed information can be found in the reference guide under "[Sensor library](/guides/reference/sensor-library "Sensor library")".

The Cumulocity team welcomes contributions to the sensor library. If you integrate any devices, controls, sensors or other objects and find that your model fragments have a more general applicability beyond your use case or your device, we encourage you to contribute them for inclusion into Cumulocity by contacting our support. This enables others to implement their device integrations so that they support your application, resp. to implement their applications so that they support your devices.

## Summary

Cumulocity provides a reference model for managing and controlling IoT systems, covering

-   Central representation of IoT devices, networks and assets in the inventory,
-   Configuration of devices,
-   Reading of sensors,
-   Manipulation of controls and
-   Handling of realtime events.

This model is intended to be horizontal across device vendors in as far as possible, but also extensible to cover any particularities and special features of the diverse devices and applications.
