---
order: 30
title: Interfacing devices
layout: default
---
## Introduction to interfacing devices

This section explains concepts relevant for interfacing IoT devices and other IoT-related data sources with Cumulocity.

To interface these systems with Cumulocity, a driver software called *agent* is required. We first describe the main tasks of an agent and discuss the structural options for agents later. We will walk step by step through the tasks of an agent. Finally, we discuss the usage of agents for acquiring data from other data sources such as a tenant's IT systems.

Related topics can be found in the following sections:

-   [Cumulocity's domain model](/guides/concepts/domain-model), for understanding the data structures exchanged between agents and the Cumulocity core.
-   [Device integration](/guides/rest/device-integration), for understanding in detail how to develop agent software.
-   [Reference guide](/guides/reference/rest-implementation), for a detailed specification of the interfaces between agents and the Cumulocity core.

## What is an agent?

Machine-to-machine (M2M) devices come with a wide variety of protocols, parameters and network connectivity options. Protocols of devices range from low-level serial links to full-blown IT protocols such as web services. Today's IoT standards rarely define exactly how to access particular readings of particular sensors or manipulate particular controls. Devices can be connected through mobile networks and gateways.

To shield machine-to-machine applications from this numbers of access options, Cumulocity uses *agents*. An agent is a function that complies with three duties for a specific vendor and type of devices:

-   It translates the device-specific interface protocol into a single reference protocol.
-   It translates the specific domain model of the device into a reference domain model.
-   It enables secure remote communication in various network architectures.

![Agent architecture](/guides/concepts-guide/agents.png)

**Protocol translation :** The configuration of parameters, readings, events and other information are either send to an agent ("push") or queried by an agent ("pull") through a device-specific protocol on one side. The agent will convert these messages into the protocol that Cumulocity requires. It will also receive device control commands from Cumulocity ("switch off that relay") and translate these into a kind of protocol the device requires.

Cumulocity uses a simple and secure reference protocol based on REST (i.e., HTTPS) and JSON, which can be used for a wide variety of programming environments down to small embedded systems. To support real-time scenarios, the protocol is designed around a "push" model, i.e., data is sent as soon as it is available.

**Model transformation** The Configuration parameters, readings, events, they all have their device-specific name (and possibly units). An agent for a particular device will transform this device-specific model to the Cumulocity reference model. For example, an electricity meter provides the main reading as a parameter "Received Wh", so the agent will transform this reading into a reference "Total active energy" in kWh.

**Secure remote communication** Devices can provide a protocol that is unsuitable for secure remote communication, in particular in public cloud environments. The protocol only supports local networking and does not pass through firewalls and proxies and it can contain sensitive data in clear text form. To avoid security issues like these, an agent can be co-located to the device and provide a secure, internet-enabled link to the remote device via Cumulocity.

To summarize the benefits of the agent concept: Agents enable IoT applications to securely interface with any type of remote IoT device and without imposing any mandatory system requirement on the device itself. They drastically simplify developing IoT applications by shielding the applications from the variety of IoT devices and protocols.

## What agent architecture is supported?

Agents can be deployed in various ways, as illustrated in the picture below. We distinguish two main variants: *Server-side agents* and *device-side agents*.

![Agent architectures](/guides/concepts-guide/agentarchitectures.png)

Server-side agents are run in a cloud, hosted by Cumulocity or managed by yourself. Devices connect to server-side agents using their device-specific protocol. This option is mainly chosen when one or more of the following complies:

* The device is "closed", i.e., it is not programmable and supports only one particular, pre-defined protocol to communicate with the outside world.
* The protocol on the device is secure and internet-enabled.
* There is a VPN infrastructure between the device and Cumulocity.

Device-side agents run on a device in the sensor network. These devices can be routers, mobile phones or modems. The agents perform in any kind of run-time environment the device supports, ranging from the very battery- and memory-consuming embedded microcontrollers to minicomputers running Embedded Linux. The agents will directly query connected sensors and manipulate connected controls. This usually results in a simpler architecture than server-side agents. 


## The agent life cycle

### Starting the agent

Server-side agents run continuously in the cloud, accepting connections from the device types that they support. Device-side agents run on the device and are started along with other device software when the device is powered on.

Both types of agents are pre-configured with a fixed platform endpoint URL. Using this platform endpoint URL, credentials for each connected device are acquired. These credentials enable the device to connect to a tenant in Cumulocity and to send data to the tenant as well as to accept operations from the tenant. 

After starting, the agent will synchronize the inventory with the sensor sub-network that the agent is responsible for.

### Synchronizing inventory data

To understand inventory synchronization, remember the communication hierarchy described in ["Cumulocity's domain model"](/guides/concepts/domain-model). In the inventory, agents are located at the roots of the communication hierarchy. Below each agent, the topology of the sub-network that the agent manages is reflected. This topology exists in the real network as well as in snapshot form in the inventory. It may change in the real network, and these changes need to be reflected in the inventory.

![Communication hierarchy](/guides/concepts-guide/commshierarchy.png)

Inventory synchronization is a two step procedure: The first step is to query the agent's entry from the inventory and to create it in the network. The second step is then to discover the sub-network and synchronize it with the inventory based on the queried agent's entry.

The first step provides the option to pass configuration information to an agent as part of the agent entry into the network. This configuration information is determined by the type of agent and the connected devices. It contains, for example, polling intervals for measurements. It can also assign sub-network tasks to the agent in case the agent cannot automatically discover its associated network.

For example, an agent installed on a mobile phone can discover a connected bluetooth heart monitor without further configuration. An agent installed on a local IP network can run a discovery procedure on a local network. Unlike a Multispeak agent requires the URL of a Multispeak server and credentials to be able to discover connected smart meters.

To keep inventory information up-to-date and maintain a centralized view on devices, two mechanisms are used:

-   A regular inventory upload, which runs first when the agent is started and will be repeated periodically.
-   A propagation of individual changes occurring while the agent runs.

The need for a regular inventory upload depends on the particular device protocol, which possibly supports change notifications. Assume, for example, that a device is operated locally through controls on the device or using a local device manager software. If the device protocol does not propagate these changes, they can only be discovered by a regular query. Another example would be the assumption that new devices can only be discovered by scanning a network address range in the sensor network regularly. This must be executed by an agent.

It is important to know that the device agent is assuming data ownership of configuration properties or device topology data and therefore modifies or overwrites this data accordingly.

### Receiving data and commands from applications

Now that the topology is established in the inventory, the devices are visible and operable from IoT applications. As described in the device control section of ["Cumulocity's domain model"](/guides/concepts/domain-model), IoT applications can send operations to devices, which are queued in the core. The agent has to query the core for operations intended for its devices.

If an operation was sent to an agent's device, the agent will translate the operation into the device-specific representation. For example, a Multispeak agent would translate an operation to set the state of a switch to a SOAP "initiateConnectDisconnect" request for an electricity meter. The translated operation is then sent to the device.

Finally, the agent acknowledges the execution of the operation and it would update the state of the switch in the inventory.

### Sending sensor readings, events, alarms and audit logs

Besides remote control of devices, the other main task of agents is to transmit data from sensors. This data can vary as outlined in the domain model section:

-   Measurements are produced by reading sensor values. In some cases, this data is read in static intervals and sent to the platform (e.g., temperature sensors or electrical meters). In some cases, the data is read on demand or at irregular intervals (e.g., health devices such as weight scales). Regardless what kind of protocol the device supports, the agent is responsible for converting it into a "push" protocol by uploading data to Cumulocity. The Java agent library simplifies regular polling of sensors through a scheduler (see the [Java agent](/guides/java/agents)).
-   Events that need to be processed in real-time by IoT applications, e.g., notifications from a motion detector or transactions from a vending machine.
-   Alarms are events that require human intervention, e.g., tamper events sent by an electrical meter.
-   Audit logs are events that are recorded for risk management purposes, e.g., login failures.

### Updating agent configuration

Agent configuration may need to be changed during run-time. For example, a new gateway to a sensor network is installed and the address and credentials for accessing that gateway must be sent to the agent. This is performed by sending a device control request targeted to the agent itself. After processing the configuration, the agent will publish changes within the device network.

## Integrating of other data sources
### System Integration

Enterprises offering IoT-enabled services typically run other IT systems that supply important information on IoT assets and devices. Examples of those systems are:

-   Asset management systems that provide additional information about the available devices and their location.
-   Customer relationship management systems can provide information about the customer as device owner.
-   Workforce management systems can provide information on the maintenance status of devices.

Technically, developing and running an agent for system integration is no different from an agent for device integration. However, the subset of data owned by the systems is different. Agents for device integration own the device hierarchy and device configuration information. Agents for system integration provide additional information for devices and own parts of the asset hierarchy. Together, they contribute to the device information stored in the inventory to provide a centralized view on everything related to the assets and devices that are relevant for the IoT service.

## How does Cumulocity support developing agents?

Cumulocity supports agent development on three different levels:

* There are a number of full-featured open source agents and drivers in Cumulocity's [bitbucket.org](https://bitbucket.org/m2m/cumulocity-examples) and [mbed.org](http://mbed.org/users/vwochnik/code/) repositories. More information can be found in the "Devices" section of this documentation.
* Client libraries for major runtime environments such as C/C++, JavaME/SE and Lua, again as open source in [bitbucket.org](https://bitbucket.org/m2m).
* Technology-neutral [REST APIs](/guides/rest/device-integration) for other runtime environments.

## Summary

To interface IoT data sources such as devices and external IT systems, agents are provided. Agents are software components that enable a centralized perspective on all aspects of the IoT network and central operation of the IoT network.
