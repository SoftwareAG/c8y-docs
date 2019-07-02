---
weight: 30
title: The agent life cycle
layout: redirect
---

### Starting the agent

Server-side agents run continuously in the cloud, accepting connections from the device types that they support. Device-side agents run on the device and are started along with other device software when the device is powered on.

Both types of agents are pre-configured with a fixed platform endpoint URL. Using this platform endpoint URL, credentials for each connected device are acquired. These credentials enable the device to connect to a tenant in Cumulocity and to send data to the tenant as well as to accept operations from the tenant. 

After starting, the agent will synchronize the inventory with the sensor sub-network that the agent is responsible for.

### Synchronizing inventory data

To understand inventory synchronization, remember the communication hierarchy described in [Cumulocity's domain model](/guides/concepts/domain-model). In the inventory, agents are located at the roots of the communication hierarchy. Below each agent, the topology of the sub-network that the agent manages is reflected. This topology exists in the real network as well as in snapshot form in the inventory. It may change in the real network, and these changes need to be reflected in the inventory.

![Communication hierarchy](/guides/images/concepts-guide/commshierarchy.png)

Inventory synchronization is a two step procedure: The first step is to query the agent's entry from the inventory and to create it in the network. The second step is then to discover the sub-network and synchronize it with the inventory based on the queried agent's entry.

The first step provides the option to pass configuration information to an agent as part of the agent entry into the network. This configuration information is determined by the type of agent and the connected devices. It contains, for example, polling intervals for measurements. It can also assign sub-network tasks to the agent in case the agent cannot automatically discover its associated network.

For example, an agent installed on a mobile phone can discover a connected bluetooth heart monitor without further configuration. An agent installed on a local IP network can run a discovery procedure on a local network. Unlike a Multispeak agent requires the URL of a Multispeak server and credentials to be able to discover connected smart meters.

To keep inventory information up-to-date and maintain a centralized view on devices, two mechanisms are used:

-   A regular inventory upload, which runs first when the agent is started and will be repeated periodically.
-   A propagation of individual changes occurring while the agent runs.

The need for a regular inventory upload depends on the particular device protocol, which possibly supports change notifications. Assume, for example, that a device is operated locally through controls on the device or using a local device manager software. If the device protocol does not propagate these changes, they can only be discovered by a regular query. Another example would be the assumption that new devices can only be discovered by scanning a network address range in the sensor network regularly. This must be executed by an agent.

It is important to know that the device agent is assuming data ownership of configuration properties or device topology data and therefore modifies or overwrites this data accordingly.

### Receiving data and commands from applications

Now that the topology is established in the inventory, the devices are visible and operable from IoT applications. As described in the device control section of [Cumulocity's domain model](/guides/concepts/domain-model), IoT applications can send operations to devices, which are queued in the core. The agent has to query the core for operations intended for its devices.

If an operation was sent to an agent's device, the agent will translate the operation into the device-specific representation. For example, a Multispeak agent would translate an operation to set the state of a switch to a SOAP "initiateConnectDisconnect" request for an electricity meter. The translated operation is then sent to the device.

Finally, the agent acknowledges the execution of the operation and it would update the state of the switch in the inventory.

### Sending sensor readings, events, alarms and audit logs

Besides remote control of devices, the other main task of agents is to transmit data from sensors. This data can vary as outlined in the domain model section:

-   Measurements are produced by reading sensor values. In some cases, this data is read in static intervals and sent to the platform (e.g., temperature sensors or electrical meters). In some cases, the data is read on demand or at irregular intervals (e.g., health devices such as weight scales). Regardless what kind of protocol the device supports, the agent is responsible for converting it into a "push" protocol by uploading data to Cumulocity. 
-   Events that need to be processed in real-time by IoT applications, e.g., notifications from a motion detector or transactions from a vending machine.
-   Alarms are events that require human intervention, e.g., tamper events sent by an electrical meter.
-   Audit logs are events that are recorded for risk management purposes, e.g., login failures.

### Updating agent configuration

Agent configuration may need to be changed during run-time. For example, a new gateway to a sensor network is installed and the address and credentials for accessing that gateway must be sent to the agent. This is performed by sending a device control request targeted to the agent itself. After processing the configuration, the agent will publish changes within the device network.

