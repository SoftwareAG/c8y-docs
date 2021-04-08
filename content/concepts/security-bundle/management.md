---
weight: 60
title: Security management aspects
layout: redirect
---

Whenever a security-relevant event occurs, it needs to be logged for potential auditing. Security-relevant events may happen both on application level as well as in the IoT network. A simple example of a security-relevant event on application level is a login to the application. An example of a security-relevant event on the network level is using a local software or local control on a device to manipulate the device.

To capture security-relevant events, Cumulocity IoT offers an [auditing interface](https://cumulocity.com/api/#tag/Audit-API). This interface enables applications and agents to write audit logs, which are persistently stored and cannot be externally modified after being written. Cumulocity IoT itself also writes own audit records related to login and device control operations.

To receive security-related reports about the Cumulocity IoT platform, interested parties with a maintenance contract can subscribe to Early Warnings in the [Knowledge Center of Software AG Empower](https://empower.softwareag.com/KnowledgeCenter/EarlyWarningsCriticalAlerts/default.aspx).

To report security incidents, [please contact product support](/about-doc/contacting-support).
