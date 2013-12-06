# Overview

Cumulocity allows M2M systems to

-   Access data of remote sensors and use remote controls independent of device manufacturer, but still capture manufacturer-specific data where required.
-   Capture application- or vertical-specific data.
-   Capture tenant-specific data.

This is facilitated through the domain model of Cumulocity, illustrated in the picture below. The domain model consists of an inventory component and components for capturing events, readings, alarms and audit logs from devices. It also contains a component for remotely controlling devices.

![model](images/c8yimages/model.png)

The following sections walk through each of these components, describe their main ideas and give examples. In the last section, we discuss the sensor library that standardizes models for common sensors and controls in Cumulocity.

The examples are shown in [JavaScript object notation (JSON)](http://json.org/), the format used in Cumulocity's REST APIs. For usage from Java and JavaScript, please see the [developer's guide](guides/developers-guide). More detailed information can be found in the [reference guide](guides/reference-guide).

# Inventory

The inventory stores devices and other assets or business objects known to the M2M system, referred to as *managed objects* by Cumulocity. Such managed objects could be actual "smart objects" such as smart electricity meters, home automation gateways and GPS devices. They could be supervised assets, such as rooms in which sensors are installed, or cars containing GPS devices. The can also be related business objects, such as households or driving routes.

The following JSON code shows a minimal example of a managed object in the inventory, in this case a simple switch.

    {
      "id": "47635",
      "type": "com_ge_45609",
      "com_cumulocity_model_control_Relay": {
        "state": "OPEN"
      },
      ...
    }

An example for another asset stored in the inventory could be a room in which the switch is installed. (Compare the "id" property of the switch with the "managedObject" reference.)

    {
      "id": "47636",
      "type": "com_resortenergymgmt_model_Room",
      "name": "Sauna",
      "childAssets": {
        "references" : [
          {
            "managedObject": {
              "id": "47635",
              ...
      },
      "com_resortenergymgmt_model_RoomProperty": {
        "size": 56,
        ...
      }
    }

In general, each managed object consists of

-   A unique identifier that can be used to reliably reference the object.
-   A type string that defines the most specific type of the object.
-   A time stamp of the last update.
-   Additional so-called *fragments*.

## Fragments

Fragments are used to identify capabilities of a managed object. For example, you may want to describe electricity meters from different vendors. Depending on the make of the meter, it may have a relay and it may be able to measure a single phase or three phases. These capabilities are identified by storing a fragment for each of the capabilities as follows:

    {
      "id": "47635",
      "type": "com_elstermetering_AS220",
      "lastUpdated": "2010-11-13T18:28:36.000Z",
      "com_cumulocity_model_Coordinate": {
        "latitude": 63.2857346747758,
        "longitude": 28.03634548187256
      },
      "com_cumulocity_model_energy_sensor_ThreePhaseElectricitySensor": {},
      "com_cumulocity_model_control_Relay": {
        "state": "CLOSED"
      }
    }

In this example, a fragment "com\_cumulocity\_model\_energy\_sensor\_ThreePhaseElectricitySensor" identifies a three phase electricity meter. In addition, the device includes a relay, which can be used to turn the power supply on and off.

Using this approach, modeling devices can be split into modeling the elementary sensors and controls as fragments, and modeling the entire device as a combination of sensors, controls and possibly proprietary aspects of the device.

It also enables developing generic application components. For example, as soon as a managed object has a coordinate fragment, it can be placed on a map. As soon as it has a relay, it can be switched on and off using the respective device control command (see below).

Fragments use a naming convention similar to fully-qualified Java class names to avoid conflicts between different parties contributing fragment information. A set of standard fragments are defined by the platform. See the [client library documentation](guides/reference-guide/client-libraries) for more details.

Note that Cumulocity follows a document-oriented approach for storing data. All capabilities of an object can be inferred from the document with the object data itself. There is no explicit separate metadata model that needs to be configured and managed. However, applications can, of course, add own metadata and store that as well in the inventory. For example, a vending application can maintain metadata about slot configuration of the diverse vending machine types in the inventory.

## Object identification

Each managed object in the inventory has an own, "global" identifier that is synthetically generated by Cumulocity when the object is created. This identifier can be used to reliably reference the object, regardless of, for example, restructuring of networks or replacement of hardware parts.

Devices and enterprise IT systems typically have their own concept of identifying devices and assets. Gateways and devices typically use some form of technical identifier to references devices. For example, a smart meter could be identified by a technical meter number, through which it is reachable from a gateway. A customer relationship management (CRM) system would use customer IDs of the customer that has the meter installed. And an enterprise asset management system could track the same meter through an asset tag that is on a label glued to the device. The asset management system would also track the actual meter ID and customer ID.

![Identity service](images/c8yimages/identification.png)

To shield applications from this diversity of identifiers, Cumulocity includes an identity service that registers all identifiers for an asset that are used outside of Cumulocity and maps these to the single global identifier that can be used by applications. This service is used by agents (to register external identifiers) and by business processes involving reorganizations and changes of devices (to modify mappings of external identifiers to global identifiers).

To illustrate this, assume that a smart meter is faulty and a new meter with another meter number and asset tag needs to be installed in a household. The business process for replacing faulty hardware can now just update the asset tag and meter ID associated with a customer in the identity service. Afterwards both previously collected and new meter readings are related to the correct customer.

More information can be found in the reference guide for [identity](guides/reference-guide/identity).

## Object hierarchies

The inventory model supports two default hierarchies of objects: A communication hierarchy ("childDevices") and an asset hierarchy ("childAssets"). The communication hierarchy tracks how devices are linked to the M2M platform from a communications point of view. A typical communication hierarchy is shown in the picture below: Agents connect the sensor network to Cumulocity. They typically communicate with gateway devices, modems or other *bridges* into the sensor network. The bridges, in turn, connect to the devices in the sensor network, which contain sensors and controls. The communication hierarchy is used by the platform for communicating with devices and for resolving communication problems.

![Standard communication hierarchy](images/c8yimages/commshierarchy.png)

The asset hierarchy structures the assets that are being remotely supervised and controlled through the M2M devices. Hence, it is the most relevant for M2M applications. An example asset hierarchy for building management could be buildings containing rooms. Buildings would be associated with bridges connecting the building to Cumulocity, while rooms would be associated with sensors and controls. This example hierarchy is shown in the picture below together with the communication hierarchy.

![Example asset hierarchy](images/c8yimages/assethierarchy.png)

The two hierarchies above are explicitly supported by the [inventory interface](guides/reference-guide/inventory) and [client libraries](guides/reference-guide/client-libraries), that provide methods for adding and removing children in the hierarchies. The hierarchies themselves are constructed by client applications. The communication hierarchy is constructed by agents, the asset hierarchy is added by applications on top.

Note that the object hierarchies are not required to form a tree, i.e., the same asset can be a child of multiple parent assets. This enables applications to create additional, possibly user-defined groups of objects such as working sets or virtual networks. Applications can, in addition, use fragments to define arbitrary alternative hierarchies.

## Object lifecycle

Cumulocity currently has no explicit device lifecycle model. Instead, lifecycle aspects are realized through the identity service and the previously described object hierarchies. Initially, when a device has been created, it is neither linked to an asset nor connected to the system. Linking a device to an asset using the asset hierarchy can be used to signal that the device has been physically installed. Linking a device to an agent in the communication hierarchy (possibly indirectly through a gateway) signals that the device is connected. Only connected devices can be remotely controlled.

Disconnecting and uninstalling a device does not necessarily indicate that the device has actually been thrown away and should be deleted in the system. It may also indicate, that the device was returned to the warehouse and will be installed elsewhere lateron. It depends on use case and business process whether data for the device should be kept or not. Physically deleting a device from the inventory means that all data collected for that device is lost ? this is probably only desired when completely cleaning up old data. To keep data for a device that has been discarded, identifier mappings can be removed from the identity service. Should a new device be installed in the same place as the old device, a new "global" identifier will be generated.

Addressing the device lifecycle properly is important when designing agents. E.g., an agent connecting to devices should not assume that devices can be deleted from the inventory when they cannot be connected to. In the same way, an agent interfacing a CRM system should not assume that a device can be deleted when it has been removed from the CRM system.

## Working with the inventory

More examples for working with the inventory can be found in the [inventory reference](guides/reference-guide/inventory).

# Events

Events are used to pass real-time information through Cumulocity. Events come in three types:

-   A base event signals when something happens. An event could, for example, be sent when a switch is switched on or off.
-   An alarm signals an event that requires action, for example, when a meter has been tampered with or the temperature of a fridge increases above a particular threshold.
-   An audit record stores events that are security relevant and should be stored for auditing. For example, an audit log should be generated when a user logs into a gateway.

An event has a type (in the already described naming convention), a time when the event occurred and a text to describe the event. An event refers to a source managed object in the inventory. This is an example of an event:

    {
      "type": "com_cumulocity_model_EntrySensorEvent",
      "time": "2010-11-13T18:28:36.000Z",
      "text": "Entry detected",
      "source": { "id": "47634", ... },
      ...
    }

An audit record extends events through

-   A user name of the user that carried out the activity.
-   An application that was used to carry out the activity.
-   The actual activity.
-   A severity.

This is an example of an audit record structure:

    {
      "type": "com_cumulocity_model_SecurityEvent",
      "time": "2010-11-13T18:28:36.000Z",
      "text": "Gateway login failed",
      "user": "vvirtanen",
      "application": "Resort energy management",
      "activity": "login",
      "severity": "Minor",
      "source": { "id": "47633", ... },
      ...
    }

An alarm extends events through

-   A status showing whether the alarm is active or cleared.
-   A time stamp when the alarm was last updated.
-   A severity of critical, major, minor and warning.
-   A history of changes to the event in the form of audit records.

This is an example of an alarm that has been acknowledged and subsequently cleared:

    {
      "type": "com_cumulocity_model_AvailabilityAlarm",
      "time": "2010-11-13T19:28:36.000Z",
      "text": "Device unavailable",
      "status": "cleared",
      "severity": "Minor",
      "source": { "id": "47633", ... },
      "history": {
        "auditRecords": [ {
          "type": "com_cumulocity_model_AlarmEvent",
          "time": "2010-11-13T18:28:36.000Z",
          "user": "vvirtanen",
          "application": "Alarm monitor",
          "activity": "acknowledge",
          "severity": "Minor",
          ...
        }, {
          "type": "com_cumulocity_model_AlarmEvent",
          "time": "2010-11-13T19:28:36.000Z",
          "user": "vvirtanen",
          "application": "Alarm monitor",
          "activity": "clear",
          "severity": "Minor",
          ...
        } ] 
        ... 
      },
      ...
    }

Any event can be extended in the same way as described for managed objects above. For example, if you like to pass the current state of a door sensor along with a status update event, you could do it as follows:

    {
      "type": "com_cumulocity_model_EntrySensorEvent",
      "time": "2010-11-13T18:28:36.000Z",
      "text": "Entry detected",
      "source": { "id": "47634", ... },
      "com_cumulocity_model_EntrySensorStatus": {
        "status": "Open"
      }
      ...
    }

More examples can be found in the reference guides for [events](guides/reference-guide/events), [alarms](guides/reference-guide/alarms) and [auditing](guides/reference-guide/auditing).

# Measurements

Measurements represent regularly acquired readings and statistics from sensors. Measurements consist of a time when the measurement was taken, the unique identifiers of the source of the measurement, and a list of fragments. Here is an example of a measurement:

    {
      "time": "2011-01-02T03:04:00.000Z",
      "source": { "id": "1235", ... },
      "com_cumulocity_model_energy_measurement_ThreePhaseElectricityMeasurement": {
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

Similar to the inventory model, fragments are used to identify capabilities of particular devices. In the above example, a three-phase electricity meter provides standard single phase readings, but in addition individual readings for the different phases.

Each fragment contains a list of values with

-   A name identifying the measurement value, such as "Aggregated energy consumption" or "Average temperature".
-   The actual numeric value.
-   The unit of measurement, such as "V" or "kWh".

Again, measurements can be extended to hold arbitrary additional information that applications might require. More information can be found in the reference guide for [measurements](guides/reference-guide/measurements).

# Remote control of devices

## Operations

Devices need to be remote controlled and managed. Examples are:

-   Device control: Setting a switch, regulating a heating control.
-   Device configuration: Setting a tariff table in a smart meter.
-   Device operation: Requesting a home security camera to take a picture.
-   Device maintenance: Uploading a new firmware binary.

In Cumulocity, these use cases are implemented by sending *operations* to a device. The following snippet shows an operation for setting the state of the relay with the ID "42" to "OPEN":

    {
      "deviceId": "42"
      "com_cumulocity_model_control_Relay": {
         "state": "OPEN"
       }
    }

Just like the other types of data, operations are also standardized through the sensor library to simplify application development (see below). For example, setting a switch should be the same for all switches regardless of the make.

Operations are modeled just like fragments in the inventory model (see above), hence the same extensibility concept applies. There can be arbitrary vendor-proprietary extensions to the standard operations, these are not interpreted in any way by Cumulocity.

## Sending operations to devices

To pass an operation from an application to a device, a process of several steps is required: First, the application sends the operation to the Cumulocity core. Then, the Cumulocity core routes the operation to the agent managing the target device (an agent is said to manage a device if the device is in the agent's "childDevices" direct hierarchy, i.e., the agent includes the device ID in the agent's "childDevices"). The agent translates the operation to the protocol required by the device and sends it to the device. Finally, any responses are returned to the system.

This process needs to respect the limitations and security requirements of M2M networks:

-   Devices are often connected over unreliable, low-bandwidth links that may only be occasionally available. Devices may, for example, only dial up once in a day to the network for fetching commands to be executed. Hence, Cumulocity communicates asynchronously with devices.
-   Device protocols are often not designed for secure communication over the Internet. They may not pass NAT networks, firewalls and web proxies. They may not be secure enough for public exposure on the Internet. Hence, Cumulocity offers the possibility to connect these devices through HTTP.
-   It may not even be possible to reach a mobile device from the Internet. Hence, Cumulocity uses pull technology to send operations to devices.

The picture below illustrates how an operation is sent from an application to a device using the Cumulocity [device control interface](guides/reference-guide/device-control). The application sends the operation to the Cumulocity core (Step "0"). The core will queue the operation for execution and return control back to the application immediately. At some point in time, the agent will request the operations that are queued for the devices that it manages (Step "1"). The agent will execute the operations on the respective devices (Step "2") and will update the core with the results (Step "3"). Finally, the application can query the results of the operation (Step "4"). Audit records are generated both for the original request to run the device control operation and for the acknowledgement that the operation was actually run.

![Device control architecture](images/c8yimages/control.png)

Note that communicating the results of an operation (Steps "3" and "4") can also happen through a different channel than the device control interface. For example, when a switch state has been changed, the agent would probably need to update the inventory with the new switch state, and the application would need to update its user interface accordingly. As another example, if there is a communication problem in delivering an operation to a device, an alarm might need to be raised by the agent, which the application could use to mark the device as unavailable in the user interface.

Note also that there may be an arbitrary delay between sending an operation to a device and retrieving the response. For usability reasons, it may make sense to simply assume that the operation will be delivered to the device (through reliable queuing) and report only error case when they are detected.

## Designing operations for reliability

Operations should be designed to be *idempotent* in as far as possible. Idempotent means that no matter how often you run the operation, the outcome is always the same. For example, an operation to set a switch to a certain state is idempotent. No matter how often the switch is set to "on", it will be "on" afterwards. An operation to toggle a switch is not idempotent ? the result depends on whether the operation was run an odd or an even number of times.

Idempotence is helpful in error situations. If an operation was executed on a device and the result was an error, the operation can simply be retried. Hence, design operations to be idempotent whenever there is the option. This is, however, not always possible: If a camera is requested to take a picture and this fails for some reason, retrying this will most likely result in a different result.

More information can be found in the reference guide for [device control](guides/reference-guide/device-control).

# The sensor library

Based on the above groundwork for receiving data from devices and controlling them, Cumulocity includes a [sensor library](guides/reference-guide/sensor-library "Sensor library") to model specific sensing and controlling capabilities across device products. A single device can have many sensor and control capabilities. The sensor library enables applications to answer questions such as:

-   What devices are installed that measure energy?
-   What are the energy readings?
-   Does a particular energy meter also include a switch for the power supply that I can switch off?

It covers basic sensors and controls, and is supported by the Cumulocity client libraries. This not only simplifies development, but more importantly, it enables writing powerful generic M2M software components. Taking the above example, you could implement an energy component that can be used in multiple related application scenarios (such as home automation, smart metering and enterprise energy management) and for diverse devices.

Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention outlined above. The example below shows three fragments used for an electricity meter:

    {
      "id" : "1",
      "type" : "com_kamstrup_382",
      ? 
      "com_cumulocity_model_energy_measurement_SinglePhaseElectricityMeasurement": {},
      "com_cumulocity_model_control_Relay" : { "state": "OPEN" },
      "com_cumulocity_model_control_Clock" : {}
    }

To a Java developer, checking the state of a switch in a device "mo" looks like this:

    ManagedObject mo = ?;
    Relay relay = mo.get(Relay.class);
    RelayState state = relay.getState();

To a JavaScript developer, the same check would look like this:

    var state = mo.com_cumulocity_model_control_Relay.state

More detailed information can be found in the reference guide under "[sensor library](guides/reference-guide/sensor-library "Sensor library")" and "[client libraries](guides/reference-guide/client-libraries)".

The Cumulocity team welcomes contributions to the sensor library. If you integrate any devices, controls, sensors or other objects and find that your model fragments have a more general applicability beyond your use case or your device, we encourage you to contribute them for inclusion into Cumulocity by contacting our support. This enables others to implement their device integrations so that they support your application, resp. to implement their applications so that they support your devices.

# Summary

Cumulocity provides a reference model for managing and controlling M2M systems, covering

-   Central representation of M2M devices, networks and assets in the inventory,
-   Configuration of devices,
-   Reading of sensors,
-   Manipulation of controls and
-   Handling of realtime events.

This model is intended to be horizontal across device vendors in as far as possible, but also extensible to cover any particularities and special features of the diverse devices and applications.
