---
weight: 10
title: Overview
layout: redirect
---

Cumulocity IoT Edge is an onsite, single-server variant of the Cumulocity IoT Core platform. It is delivered as a software appliance designed to run on industrial PC’s or local servers.

In contrast to Cumulocity IoT Core, which is available in the cloud (e.g. using AWS, Azure or other data centers), Cumulocity IoT Edge is installed in factories, i.e. in the same site (“onsite”) in which the IoT assets are located.    

Reasons for using an onsite installation of Cumulocity IoT Edge include:

* **Autonomy**: Even if there is no cloud connection, tasks like data collection and data analysis can still be performed.
* **Data reduction**: Data is analyzed and aggregated close to assets, and thus less data needs to be sent to the cloud.
* **Reactivity**: Both Cumulocity IoT Edge and Cumulocity IoT Core include real-time streaming analytics engines. However, placing the rule execution in Cumulocity IoT Edge reduces latency, because the round-trip to cloud is omitted. 

Features of Cumulocity IoT Edge include:

* Edge Agent, which enables remote monitoring and management of an Edge instance from the Cumulocity IoT tenant.
* Microservices, which are server-side applications which may be used to extend the Cumulocity IoT platform with customer-specific functionality.
* Data Broker to send IoT data to the cloud and receive operations from the cloud, with web-based UI to filter data
* Apama streaming analytics engine for real-time local data analysis
* Ready-to-use IoT Cockpit and Device Management applications
* Native protocol support for MQTT and REST
* Edge database for operational data storage
* [DataHub Edge](/datahub/running-datahub-on-the-edge/) for historical data storage and analytics (optional component)
* Cloud Fieldbus with web-based UI to create local Modbus and OPC UA connections
* Easy installation, upgrades and backup/restore
* Full online support and documentation

<img src="/images/edge/cumulocity-edge-overview.png" name="Cumulocity Edge overview" style="width:75%;"/>