---
order: 30
layout: redirect
title: Cycle phase
---

### Step A: Send CSV data

While the device holds an active MQTT connection it can publish on either the topics for static templates or on the topics for a SmartREST template to send data to the server.
The physical device is because of the MQTT ClientId directly connected to the device object in Cumulocity. Therefore any data you send is automatically connected to the device.
To send data to a child device please publish the data to the topics describe in the section about [device hierarchies](/guides/mqtt/implementation#device-hierarchies).

### Step B: Receive CSV operations

By subscribing to a topics the device automatically tells Cumulocity that it wants to receive operations. Any operation created will be automatically parsed using either the static templates or the templates the device defined.
