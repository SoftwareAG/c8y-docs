---
order: 30
title: Interfacing devices
layout: default
---
# Overview

This section explains the concepts relevant for interfacing M2M devices and other M2M-related data sources with Cumulocity.

To interface such systems with Cumulocity, a driver software called *agent* is required. We first describe the main responsibilities of an agent and discuss the architecture options for agents. Then we will walk step by step through the life cycle of an agent. Finally, we discuss the usage of agents for acquiring data from other data sources such as tenant IT systems.

Related topics can be found in the following sections:

-   [Modeling and managing M2M assets](guides/concepts-guide/modeling-and-managing-m2m-assets), for understanding the data structures exchanged between agents and the Cumulocity core.
-   [Developer's guide](guides/developers-guide), for understanding how to develop agent software, in particular the [end-to-end example](guides/developers-guide/an-end-to-end-example).
-   [Reference guide](guides/reference-guide), for a detailed specification of the interfaces between agents and the Cumulocity core.

Note that agent management functionality is not included in the current release of Cumulocity.

# What is an agent?

Machine-to-machine devices come with a wide variety of protocols, parameters and network connectivity options. Protocols to devices range from low-level serial links to full-blown IT protocols such as web services. Today's M2M standards rarely define exactly how to access particular readings of particular sensors or manipulate particular controls. Devices may be connected through mobile networks and gateways.

To shield machine-to-machine applications from this diversity, Cumulocity uses so-called *agents*. An agent is a function that fulfills three responsibilities for a given vendor and type of devices:

-   It translates the device-specific interface protocol into a single reference protocol.
-   It transform whatever domain model the device has to a reference domain model.
-   It enables secure remote communication in various network architectures.

![Agent architecture](images/c8yimages/agents.png)

**Protocol translation** Configuration parameters, readings, events and other information are either send to an agent ("push") or queried by the agent ("poll") through a device-specific protocol on one side. The agent will convert these messages into the protocol that Cumulocity understands on the other side. It will also receive device control commands from Cumulocity ("switch off that relay") and translate these to whatever protocol the device understands.

Cumulocity uses a simple and secure reference protocol based on REST (i.e., HTTP) and JSON, which can be used from a wide variety of programming environments down to small embedded systems. To support near-real-time scenarios, the protocol is designed around a "push" model, i.e., data is sent as soon as it is available.

**Model transformation** Configuration parameters, readings, events asf. all have their device-specific name (and possibly units). An agent for a particular device will transform this device-specific model to the Cumulocity reference model. For example, an electricity meter may provide the main reading as a parameter "Received Wh", so the agent will transform this reading into a reference "Total active energy" in kWh.

**Secure remote communication** Devices may provide a protocol that is unsuitable for secure remote communication, in particular in public cloud environments. The protocol may only support local networking, it may not pass through firewalls and proxies and it may carry sensitive data over clear text. To overcome such situations, an agent can be co-located to the device and provide a secure, internet-enabled link to the remote device.

To summarize to benefits of the agent concept: Agents enable M2M applications to securely interface with any type of remote M2M device and without imposing any mandatory system requirement on the device itself. They drastically simplify developing M2M applications by shielding the application from the diversities of M2M devices and protocols.

# What agent architectures are supported?

Agents can be deployed in a variety of ways, as illustrated in the picture below. We distinguish two main variants: *Managed agents* and *non-managed agents*.

![Agent architectures](images/c8yimages/agentarchitectures.png)

Managed agents are based on the Cumulocity run-time environment and are deployed and started by Cumulocity on the cloud. Such agents connect from the cloud to the devices in the sensor network using the device-specific protocol. This variant can be chosen whenever there is a secure and internet-enabled communication path to the devices ? either directly supported by the device protocols or through a VPN infrastructure.

Non-managed agents run on hosts in the local sensor network. Such hosts could be mobile phones, gateways or other devices where the software is pre-installed and pre-configured. The agent software is based on whatever run-time environment the hosts support, hence it cannot be managed from the Cumulocity core (but it might be managed through other technologies like over-the-air programming).

Such a run-time environment may be extremely limited, hence Cumulocity relies only on very lightweight communication technologies (REST/JSON, see above). This allows agents to be written with a minimum footprint on devices that may support as little as just being able to open a TCP connection.

Non-managed agents are chosen when there is no remote communication mechanism from a sensor (e.g., bluetooth or USB sensors connected to a phone), or that communication mechanism is not secured, or it cannot cross network boundaries to the cloud (and VPN installation is not an option). In the illustration, the agents with the grey boxes are non-managed.

An agent is associated with one tenant in Cumulocity ??? the one that owns the devices that the agent manages.

# The agent lifecycle

## Starting the agent

As described above, managed agents will be started by Cumulocity, while non-managed agents will typically be started at device boot time. An agent is pre-configured with the [platform endpoint URL](guides/reference-guide/rest-implementation) and credentials to authenticate itself against the platform. After starting, the agent will synchronize the inventory with the sensor sub-network that the agent is responsible for.

## Synchronizing inventory data

To understand inventory synchronization, let's revisit the communication hierarchy described in ["Modeling and managing M2M assets"](guides/concepts-guide/modeling-and-managing-m2m-assets). In the inventory, agents are located at the roots of the communication hierarchy. Below each agent, the topology of the sub-network that the agent manages is reflected. This topology exists in the real network as well as in snapshot form in the inventory. It may change in the real network, and these changes need to be reflected in the inventory.

![Communication hierarchy](images/c8yimages/commshierarchy.png)

Inventory synchronization is a two step procedure: The first step is to query the agent entry from the inventory and to create it if it is not present. The second step is then to discover the sub-network and synchronize it with the inventory based on the queried agent entry.

The first step provides the possibility to pass configuration information to an agent as part of the agent entry. This configuration information is dependent on the type of the agent and the connected devices. It may contain, for example, polling intervals for measurements. It may also assign sub-network responsibility to the agent in case the agent cannot automatically discover its associated network.

For example, an agent installed on a mobile phone may be able to discover a connected bluetooth heart monitor without further configuration. An agent installed in a local IP network may be able to run a discovery procedure in the local network. As contrasting example, a Multispeak agent requires the URL of a Multispeak server and credentials to be able to discover connected smart meters.

To keep inventory information up-to-date and maintain a centralized view on the devices, two mechanisms are used:

-   A regularly triggered inventory upload, run first when the agent is started and possibly regularly repeated.
-   A propagation of individual changes occurring while the agent runs.

The need for an explicit regular inventory upload depends on the particular device protocol, which may or may not support change notifications. Assume, for example, that a device is operated locally through pressing controls on the device or starting a local device manager software. If the device protocol does not propagate these changes, they can only be discovered by regularly querying the devices. As another example, assume that new devices can only be discovered by regularly scanning a network address range in the sensor network; this would have to be explicitly done by the agent.

Note that a device agent is assuming data ownership on the device topology and any configuration properties of the device, and hence may overwrite such information in the inventory.

## Receiving data and commands from applications

Now that the topology is established in the inventory, the devices are visible and operable from M2M applications. As described in the device control section of ["Modeling and managing M2M assets"](guides/concepts-guide/modeling-and-managing-m2m-assets), M2M applications can send operations to devices, which are queued in the core. The agent has to query the core for operations targeted to its devices.

If an operation was sent to an agent's device, the agent will translate the operation into the device-specific representation. For example, a Multispeak agent would translate an operation to set the state of a switch to a SOAP "initiateConnectDisconnect" request for an electricity meter. The translated operation is then sent to the device.

Finally, the agent acknowledges the execution of the operation. It may also need to update the inventory. In the above example, it would update the state of the switch in the inventory.

## Sending sensor readings, events, alarms and audit logs

Besides remote control of devices, the other main responsibility of agents is to transmit data from sensors. This data can be of various types, as outlined in the domain model:

-   Measurements are produced by reading sensor values. In some cases, this data is read in static intervals and sent to the platform (e.g., temperature sensors or electrical meters). In some cases, the data is read on demand or in infrequent intervals (e.g., health devices such as weight scales). Whatever protocol the device supports, the agent is responsible for converting it into a "push" protocol by uploading data to Cumulocity. The Java agent library simplifies regular polling of sensors through a scheduler (see the [developer's guide](guides/developers-guide)).[
    ](https://startups.jira.com/wiki/pages/createpage.action?spaceKey=MTM&title=Developer%27s+guide&linkCreation=true&fromPageId=15073841)
-   Events that need to be processed in near-real-time by M2M applications, e.g., notifications from a motion detector or transactions from a vending machine.
-   Alarms are events that require human intervention, e.g., tamper events sent by an electrical meter.
-   Audit logs are events that are recorded for risk management purposes, e.g., logon failures.

## Updating agent configuration

Agent configuration may need to be changed during run-time. For example, a new gateway to a sensor network may be installed and hence the address and credentials for accessing that gateway may need to be sent to the agent. This is carried out by sending a device control request targeted to the agent itself. After processing the configuration, the agent may want to carry out an upload of possible changes in the device network.

# Integrating other data sources

So far, we have mainly discussed data exchanged with M2M devices. However, another frequent use case for agents is in system integration. Enterprises offering M2M-enabled services typically run other IT systems that supply important information on M2M assets and devices. Examples of such systems are:

-   Asset management systems can provide additional information on the available devices and where they are installed.
-   Customer relationship management systems can provide information on the customer that has the device installed.
-   Workforce management systems can provide information on the maintenance status of devices.

Technically, developing and running an agent for system integration is no different from an agent for device integration. However, the subset of data owned by the systems is different. Agents for device integration own the device hierarchy and device configuration information. Agents for system integration provide additional information for devices and may own parts of the asset hierarchy. Together, they contribute to the device information stored in the inventory to provide a centralized view on everything related to the assets and devices that are relevant for the M2M service.

# Summary

To interface M2M data sources such as devices and external IT systems, agents are provided. Agents are software components that enable a centralized perspective on all aspects of the M2M network and central operation of the M2M network.
