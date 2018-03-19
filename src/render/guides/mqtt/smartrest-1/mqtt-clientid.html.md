---
order: 20
layout: redirect
title: MQTT ClientId
---

Although you still need to send the IDs in the body of each message with SmartREST 1.0 it is still important to connect with the correct MQTT ClientId.
The MQTT ClientId needs to match the externalId with type "c8y_Serial" of your device. It is used to assign you the correct operations and responses.