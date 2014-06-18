---
order: 30
title: Interfacing devices
layout: default
---
# Overview

This section explains the concepts relevant for interfacing IoT devices and other IoT-related data sources with Cumulocity.

To interface such systems with Cumulocity, a driver software called *agent* is required. We first describe the main responsibilities of an agent and discuss the architecture options for agents. Then we will walk step by step through the life cycle of an agent. Finally, we discuss the usage of agents for acquiring data from other data sources such as a tenant's IT systems.

Related topics can be found in the following sections:

-   [Cumulocity's domain model](/guides/concepts-guide/domain-model), for understanding the data structures exchanged between agents and the Cumulocity core.
-   [Device integration](/guides/rest/device-integration), for understanding how to develop agent software.
-   [Reference guide](/guides/reference-guide/rest-implementation), for a detailed specification of the interfaces between agents and the Cumulocity core.

# What is an agent?

Machine-to-machine devices come with a wide variety of protocols, parameters and network connectivity options. Protocols to devices range from low-level serial links to full-blown IT protocols such as web services. Today's IoT standards rarely define exactly how to access particular readings of particular sensors or manipulate particular controls. Devices may be connected through mobile networks and gateways.

To shield machine-to-machine applications from this diversity, Cumulocity uses so-called *agents*. An agent is a function that fulfills three responsibilities for a given vendor and type of devices:

-   It translates the device-specific interface protocol into a single reference protocol.
-   It transform whatever domain model the device has to a reference domain model.
-   It enables secure remote communication in various network architectures.

![Agent architecture](/images/guides/agents.png)

**Protocol translation** Configuration parameters, readings, events and other information are either send to an agent ("push") or queried by the agent ("poll") through a device-specific protocol on one side. The agent will convert these messages into the protocol that Cumulocity understands on the other side. It will also receive device control commands from Cumulocity ("switch off that relay") and translate these to whatever protocol the device understands.

Cumulocity uses a simple and secure reference protocol based on REST (i.e., HTTP) and JSON, which can be used from a wide variety of programming environments down to small embedded systems. To support near-real-time scenarios, the protocol is designed around a "push" model, i.e., data is sent as soon as it is available.

**Model transformation** Configuration parameters, readings, events asf. all have their device-specific name (and possibly units). An agent for a particular device will transform this device-specific model to the Cumulocity reference model. For example, an electricity meter may provide the main reading as a parameter "Received Wh", so the agent will transform this reading into a reference "Total active energy" in kWh.

**Secure remote communication** Devices may provide a protocol that is unsuitable for secure remote communication, in particular in public cloud environments. The protocol may only support local networking, it may not pass through firewalls and proxies and it may carry sensitive data over clear text. To overcome such situations, an agent can be co-located to the device and provide a secure, internet-enabled link to the remote device.

To summarize to benefits of the agent concept: Agents enable IoT applications to securely interface with any type of remote IoT device and without imposing any mandatory system requirement on the device itself. They drastically simplify developing IoT applications by shielding the application from the diversities of IoT devices and protocols.

# What agent architectures are supported?

Agents can be deployed in a variety of ways, as illustrated in the picture below. We distinguish two main variants: *Server-side agents* and *device-side agents*.

![Agent architectures](/images/guides/agentarchitectures.png)

Server-side agents are run in the cloud, either hosted by Cumulocity or managed by yourself. Devices connect to server-side agents using their device-specific protocol. This variant is mainly chosen when one or more of the following are true:

* The device is "closed", i.e., it is not programmable and supports only a particular, pre-defined protocol to communicate with the outside world.
* The protocol on the device is secure and internet-enabled.
* There is a VPN infrastructure between the device and Cumulocity.

Device-side agents run on a device in the sensor network. Such devices can be, for example, routers, mobile phones or modems. The agents are implemented in whatever run-time environment the device supports, ranging from extremely battery- and memory-constrained embedded microcontrollers to minicomputers running Embedded Linux. The agents will directly query connected sensors and manipulate connected controls, usually resulting in a simpler architecture than server-side agents. 


# The agent lifecycle

## Starting the agent

Server-side agents run continuously in the cloud, accepting connections from the device types that they support. Device-side agents run on the device and are started along with other device software when the device is powered on.

Both types of agents are pre-configured with a fixed platform endpoint URL. Using this platform endpoint URL, credentials for each connected device are acquired. These credentials permit the device to connect to a tenant in Cumulocity and to send data to the tenant as well as to accept operations from the tenant. 

After starting, the agent will synchronize the inventory with the sensor sub-network that the agent is responsible for.

## Synchronizing inventory data

To understand inventory synchronization, let's revisit the communication hierarchy described in ["Cumulocity's domain model"](/guides/concepts-guide/domain-model). In the inventory, agents are located at the roots of the communication hierarchy. Below each agent, the topology of the sub-network that the agent manages is reflected. This topology exists in the real network as well as in snapshot form in the inventory. It may change in the real network, and these changes need to be reflected in the inventory.

![Communication hierarchy](/images/guides/commshierarchy.png)

Inventory synchronization is a two step procedure: The first step is to query the agent entry from the inventory and to create it if it is not present. The second step is then to discover the sub-network and synchronize it with the inventory based on the queried agent entry.

The first step provides the possibility to pass configuration information to an agent as part of the agent entry. This configuration information is dependent on the type of the agent and the connected devices. It may contain, for example, polling intervals for measurements. It may also assign sub-network responsibility to the agent in case the agent cannot automatically discover its associated network.

For example, an agent installed on a mobile phone may be able to discover a connected bluetooth heart monitor without further configuration. An agent installed in a local IP network may be able to run a discovery procedure in the local network. As contrasting example, a Multispeak agent requires the URL of a Multispeak server and credentials to be able to discover connected smart meters.

To keep inventory information up-to-date and maintain a centralized view on the devices, two mechanisms are used:

-   A regularly triggered inventory upload, run first when the agent is started and possibly regularly repeated.
-   A propagation of individual changes occurring while the agent runs.

The need for an explicit regular inventory upload depends on the particular device protocol, which may or may not support change notifications. Assume, for example, that a device is operated locally through pressing controls on the device or starting a local device manager software. If the device protocol does not propagate these changes, they can only be discovered by regularly querying the devices. As another example, assume that new devices can only be discovered by regularly scanning a network address range in the sensor network; this would have to be explicitly done by the agent.

Note that a device agent is assuming data ownership on the device topology and any configuration properties of the device, and hence may overwrite such information in the inventory.

## Receiving data and commands from applications

Now that the topology is established in the inventory, the devices are visible and operable from IoT applications. As described in the device control section of ["Cumulocity's domain model"](/guides/concepts-guide/domain-model), IoT applications can send operations to devices, which are queued in the core. The agent has to query the core for operations targeted to its devices.

If an operation was sent to an agent's device, the agent will translate the operation into the device-specific representation. For example, a Multispeak agent would translate an operation to set the state of a switch to a SOAP "initiateConnectDisconnect" request for an electricity meter. The translated operation is then sent to the device.

Finally, the agent acknowledges the execution of the operation. It may also need to update the inventory. In the above example, it would update the state of the switch in the inventory.

## Sending sensor readings, events, alarms and audit logs

Besides remote control of devices, the other main responsibility of agents is to transmit data from sensors. This data can be of various types, as outlined in the domain model:

-   Measurements are produced by reading sensor values. In some cases, this data is read in static intervals and sent to the platform (e.g., temperature sensors or electrical meters). In some cases, the data is read on demand or in infrequent intervals (e.g., health devices such as weight scales). Whatever protocol the device supports, the agent is responsible for converting it into a "push" protocol by uploading data to Cumulocity. The Java agent library simplifies regular polling of sensors through a scheduler (see the [developer's guide](/guides/developers-guide/installing-the-sdk)).
-   Events that need to be processed in near-real-time by IoT applications, e.g., notifications from a motion detector or transactions from a vending machine.
-   Alarms are events that require human intervention, e.g., tamper events sent by an electrical meter.
-   Audit logs are events that are recorded for risk management purposes, e.g., logon failures.

## Updating agent configuration

Agent configuration may need to be changed during run-time. For example, a new gateway to a sensor network may be installed and hence the address and credentials for accessing that gateway may need to be sent to the agent. This is carried out by sending a device control request targeted to the agent itself. After processing the configuration, the agent may want to carry out an upload of possible changes in the device network.

# Integrating other data sources

So far, we have mainly discussed data exchanged with IoT devices. However, another frequent use case for agents is in system integration. Enterprises offering IoT-enabled services typically run other IT systems that supply important information on IoT assets and devices. Examples of such systems are:

-   Asset management systems can provide additional information on the available devices and where they are installed.
-   Customer relationship management systems can provide information on the customer that has the device installed.
-   Workforce management systems can provide information on the maintenance status of devices.

Technically, developing and running an agent for system integration is no different from an agent for device integration. However, the subset of data owned by the systems is different. Agents for device integration own the device hierarchy and device configuration information. Agents for system integration provide additional information for devices and may own parts of the asset hierarchy. Together, they contribute to the device information stored in the inventory to provide a centralized view on everything related to the assets and devices that are relevant for the IoT service.

# Summary

To interface IoT data sources such as devices and external IT systems, agents are provided. Agents are software components that enable a centralized perspective on all aspects of the IoT network and central operation of the IoT network.
