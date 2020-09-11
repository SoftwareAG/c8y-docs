---
weight: 10
title: Overview
layout: redirect
---

The OPC UA device gateway is a stand-alone Java program that communicates with OPC UA server(s) and the Cumulocity IoT platform. It stores data into the Cumulocity IoT database via REST. Additionally, C8Y commands are executed to perform various operations on the OPC UA servers.

The gateway has to be registered as Cumulocity IoT device in a specific tenant and the opcua-device-gateway must run in the users’ environment.

>**Important:** In order to use OPC UA, you must be subscribed to the “opcua-mgmt-service” microservice. If the “opcua-mgmt-service” microservice is not available in your tenant, please [contact support](/about-doc/contacting-support).

To download the gateway navigate to [Cumulocity resources](http://resources.cumulocity.com/examples/opc-ua/).

The gateway requires Java 8 in order to run.
