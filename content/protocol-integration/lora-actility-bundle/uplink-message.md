---
weight: 50
title: Standard measurements and events created while processing the uplink message
layout: redirect
---

When an uplink message is sent to the device managed object, the following measurements/events are created:

- **Position** - The position of the device is captured by considering the latitude, longitude, altitude and accuracy in the c8y_Position fragment of the device managed object. Also a position update event is created.
- **Spreading factor** - The spreading factor sent in the uplink message is captured in the c8y_SpreadingFactor fragment of the device Managed Object.
- **Signal strength** - A signal strength measurement is created, by considering the RSSI and SNR values.