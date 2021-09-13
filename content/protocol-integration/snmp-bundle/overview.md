---
weight: 10
title: Overview
layout: redirect
---

Simple Network Management protocol (SNMP) is an application layer protocol, used widely in network management for monitoring network devices.

There are two components that help SNMP-enabled devices to connect to the Cumulocity IoT platform:

1. The **Mibparser microservice** helps in converting a Managed Information Base (MIB) file to a JSON representation which is then used to create a device protocol.
2. The **SNMP agent** is a device-side agent that helps SNMP-enabled devices to connect to the Cumulocity IoT platform and translates messages from a SNMP-specific format to a Cumulocity IoT model before forwarding them to the Cumulocity IoT platform.

>**Info:** The SNMP agent and the Mibparser microservice code is open source. The code can be found in the Cumulocity IoT examples repository at [https://github.com/SoftwareAG/cumulocity-examples/tree/develop/snmp](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/snmp).

The following image provides a general overview of the SNMP-enabled device integration with Cumulocity IoT:

![Cumulocity IoT SNMP Integration](/images/device-protocols/snmp/snmp-cumulocity-integration.png)
