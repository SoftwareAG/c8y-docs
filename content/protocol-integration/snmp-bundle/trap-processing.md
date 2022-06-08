---
weight: 70
title: TRAP processing
layout: redirect
---

A TRAP is an urgent message sent from the SNMP device to the agent. The SNMP device must send the TRAPs to the agent at the port number defined in `snmp.trapListener.port` in the agent configuration file (default port number is 6671). For this, the SNMP device needs to be configured with the agent connectivity details.

For SNMP v1 and v2c, the community target must be the same in the agent and in the SNMP device. At the agent side, this is configured in *snmp-agent-gateway.properties* and this should match with the SNMP device. In case of SNMP v3, the authentication and privacy details must be configured before the SNMP device can send the TRAP to agent.

A TRAP contains a PDU object which is configured with an OID and a value. If this OID is configured with a mapping in the device protocol assigned to the SNMP device in the platform, corresponding {{< product-c8y-iot >}} object/s such as alarm/event/measurement will be created in the platform based on the configured mapping.

{{< c8y-admon-info >}}
If a TRAP is received by the agent from a device which is not registered, the agent raises a major alarm that a TRAP has been received from an unknown device, showing its IP address. The alarm can be viewed in the **Alarms** tab of the agent device.
{{< /c8y-admon-info >}}
