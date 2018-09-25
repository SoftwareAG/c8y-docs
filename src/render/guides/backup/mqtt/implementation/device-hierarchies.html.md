---
order: 30
layout: redirect
title: Device Hierarchies
---

MQTT sessions are linked to a single device but this device can have a freely configurable device hierarchy below it.
All children require a unique ID defined when creating the device. We recommend using a combination of the unique ID of the root device and an unique ID within the hierarchy.
To create data for a child instead of the root device the unique ID of the child is added as another section in the topic (e.g. "s/us/myChildDeviceIdentifier").

The client will automatically receive operations for every child in the hierarchy by subscribing to the respective topic. It is not required to subscribe for each child.
Every operation received will contain the template ID followed by the ID of the device/child for which the operation was created (followed by other operation parameters).