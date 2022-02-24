---
weight: 55
title: Standard measurements and events created while processing the uplink message
layout: redirect
---

On the receipt of an uplink message, the Cumulocity Platform creates the following measurements and events and updates the corresponding Device Managed Object.

- **Position** - c8y_Position fragment of the device managed object is updated to capture the latitude, longitude, altitude and accuracy information of the device. 
- **Signal strength** - A measurement is created with RSSI and SNR values of the device signal strength.