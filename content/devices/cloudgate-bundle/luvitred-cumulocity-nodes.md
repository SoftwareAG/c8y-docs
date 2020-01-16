---
title: LuvitRED Cumulocity Nodes
layout: redirect
weight: 40
---


### <a name="measurement"></a>" c8y measurement " node

The following node allows you to send a measurement to the Cumulocity server. As input it expects the payload to be a numeric value or in case of a measurement with multiple series a field containing properties with a numeric value each.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.
- Type: The type of the measurement.
- Measurement:
  - Type: The type of the fragment.
  - Name: The name of the series.
  - Value: The numeric value of the measurement or series.
  - Unit: The unit of the series.

The following parameters are optional:
- Enable queueing: Enables queueing messages when there is no connection.
  - Q config: Select a queue configuration. Defines how many message can be stored in memory.

If you want to add multiple series to a measurement, you have to add a new measurement with the same type to the list.

![c8y measurement](/guides/images/devices/cloudgate/c8ymeasurement.png)

For more information on measurements, refer to "[Cumulocity's domain model](/guides/concepts/domain-model/)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="alarm"></a>"c8y alarm" node

The following node allows you to send an alarm to the Cumulocity server. As input it expects the payload to be a string representing the textual description of the alarm.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.
- Type: The type of the alarm.
- Status: The status of the alarm.
- Severity: The severity of the alarm.

The following parameters are optional:
- Enable queueing: Enables queueing messages when there is no connection.
  - Q config: Select a queue configuration. Defines how many message can be stored in memory.
- Default text: The text which will be used if there is no payload.

![c8y alarm](/guides/images/devices/cloudgate/c8yalarm.png)

For more information on alarms, refer to "[Working with alarms](/guides/users-guide/device-management/#alarm-monitoring)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="event"></a>"c8y event" node

The following node allows you to send an event to the Cumulocity server. As input it expects the payload to be a string representing the textual description of the event.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.
- Type: The type of the event.

The following parameters are optional:
- Enable queueing: Enables queueing messages when there is no connection.
  - Q config: Select a queue configuration. Defines how many message can be stored in memory.
- Default text: The text which will be used if there is no payload.

![c8y event](/guides/images/devices/cloudgate/c8yevent.png)

For more information on events, refer to "[Cumulocity's domain model](/guides/concepts/domain-model/)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="command"></a>"c8y command" node

The following node allows you to receive a command sent by the Cumulocity server. As output it will initialize the payload with the command text. If the command fails, the payload will be empty or the message object will have a "failed" field.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.

For more information on events, refer to "[Shell](/guides/users-guide/device-management/#shell)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="config"></a>"c8y config" node

The following node allows you to receive a command sent by the Cumulocity server. As output it will initialize the payload with the configuration text. If the command fails, the payload will contain a non string value or the message object will have a "failed" field.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.

For more information on events, refer to "[Configuration](/guides/users-guide/device-management/#config)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="response"></a>"c8y response" node

The following node allows you to send the result of a command to the Cumulocity server. As input the node expects a message routed from the "c8y command" or "c8y config" nodes.

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="platform"></a>"c8y platform" node

This node is not visible in the list of nodes as it is used as a configuration which can be shared by multiple nodes. The configuration node defines the type of connection and the credentials which will be used to communicate with Cumulocity.

![c8y platform](/guides/images/devices/cloudgate/c8yplatform.png)

To be able to use the configuration, the type of provision has to be specified ("Manually" or "Automatically").

In case of "Manually", the user has to enter a tenant, username and password. After starting the workflow, the nodes which use this configuration should be able to connect to Cumulocity, provided that the credentials are correct.

In case of "Automatically", the user can enter a servername and authentication string. If not, the node will use default values. Before or after starting the workflow, the user has to register the device with its serial number in the desired tenant. For more information on registering devices, refer to "[Connecting devices manually](/guides/users-guide/device-management/#device-registration)". After accepting the device in the tenant, the nodes which use this configuration should be able to connect to Cumulocity, provided that the credentials are correct.
