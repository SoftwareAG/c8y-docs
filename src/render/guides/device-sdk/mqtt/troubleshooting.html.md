---
order: 140
title: Troubleshooting
layout: redirect
---

**Real-time event processing is currently overloaded and may stop processing your events. Please contact support.**

If the error above appears, then this means that the MQTT queue is full. This often happens when the communication between the MQTT agent and the server is broken.

An alarm is raised when the MQTT queue is overflown. When this happens, the oldest events are lost, so the incoming new events are triggering the deletion of each queue head events. The alarms and logs are triggered once per minute in order to reduce spam.