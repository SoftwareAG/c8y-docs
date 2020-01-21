---
weight: 60
title: Security management aspects
layout: redirect
---

Whenever a security-relevant event occurs, it needs to be logged for potential auditing. Security-relevant events may happen both on application level as well as in the IoT network. A simple example of a security-relevant event on application level is a login to the application. An example of a security-relevant event on the network level is using a local software or local control on a device to manipulate the device.

To capture security-relevant events, Cumulocity offers an [auditing interface](/reference/auditing). This interface enables applications and agents to write audit logs, which are persistently stored and cannot be externally modified after being written. Cumulocity itself also writes own audit records related to login and device control operations.

To receive security-related reports about Cumulocity itself, interested parties can subscribe to the [Cumulocity security bulletin](https://cumulocity.zendesk.com/hc/en-us/sections/200381178-Security-bulletin). To report security incidents, please mail to security@cumulocity.com.
