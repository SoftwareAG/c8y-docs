---
title: Release history
weight: 60
---

### Release notes for NetComm Agents 1.0.0, 1.0.2, 1.0.3, 1.1.0, and 1.1.1

This document describes the Cumulocity IoT NetComm Agent package for the [Casa System NTC-220 series](https://support.netcommwireless.com/products/NTC-220%20Series) router.

> **Info:** If you are using either [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series) or [NetComm Wireless NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), you must use our prior Netcomm Agent version 4.2.3 or older. [Contact support](/about-doc/contacting-support) or refer to the [NetComm](https://cumulocity.com/guides/10.4.6/devices/netcommwireless/) section in the Devices guide in the Cumulocity IoT 10.4.6 documentation 10.4.6 for information on how to get the packages.

> **Important:** The Cumulocity IoT Netcomm Agents 1.0.0, 1.0.2, 1.0.3, 1.1.0, and 1.1.1  are only supported on [Casa Systems NTC-220 series](https://support.netcommwireless.com/products/NTC-220%20Series) routers. [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series) and [NetComm Wireless NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series) are only supported by another agent.

#### 1.0.0

The agent software can be downloaded here: [http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.0_arm-signed.ipk](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.0_arm-signed.ipk).

Changes from the previous agent for NTC-6200 and NTC-140W:

* Started support for NTC-220 series and stopped support for NTC-6200 and NTC-140W.
* Merged all software into one package.
* Fixed Netcomm Web UI to support NTC-220 series.
* Fixed event notification to adjust the event notification format change on NTC-220 series.
* Improved the connection stability when the size of message queue is over MQTT maximum payload size (<16KB).
* Fixed to load reporter buffer capacity always from RDB.
* Changed that configuration is always sent via HTTP to avoid the violation of MQTT maximum payload size.
* Fixed websocket frame initialization issue and improved the stability of Cloud Remote Access via SSH.
* Fixed error handling for logging wrong error messages when the connection was closed in Cloud Remote Access.
* Updated CA certificate bundle to 20200101 version.


#### 1.0.2

The agent software can be downloaded here: [http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.2_arm-signed.ipk](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.2_arm-signed.ipk).

Changes from the previous agent software:

* Fixed the issue in which the agent updates its position with different intervals from the configured ones.
* Made the agent work also with Ethernet WAN or USB WAN


#### 1.0.3

The agent software can be downloaded here: [http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.3_arm-signed.ipk](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.3_arm-signed.ipk).

Changes from the previous agent software:

* Fixed a Modbus plugin issue in which the agent continues to send measurements after slaves are unavailable.


#### 1.1.0

The agent software can be downloaded here: [http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.1.0_arm-signed.ipk](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.1.0_arm-signed.ipk).

Changes from the previous agent software:

* Device type is renamed to NTC-220 Agent (previously POSIX Agent)
* Predefined commands in Shell are now available


#### 1.1.1

The agent software can be downloaded here: [http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.1.1_arm-signed.ipk](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.1.1_arm-signed.ipk).

Changes from the previous agent software:

* Added "NTP synchronisation failed" mode
