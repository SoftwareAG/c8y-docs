---
weight: 50
title: Standard measurements and events created while processing the uplink message
layout: redirect
---

On the receipt of an uplink message, the Cumulocity Platform creates the following measurements and events and updates the corresponding Device Managed Object.

- ** Unprocessed data** - An event of type c8y_ActilityUplinkRequest (this type is based on the event.uplink.type set in the configuration file) is created with the unprocessed data. 
- **Position** - c8y_Position fragment of the device managed object is updated to capture the latitude, longitude, altitude and accuracy information of the device. An event is also created with the position information.
- **Spreading factor** - c8y_SpreadingFactor fragment of the device managed object is updated to capture the Spreading Factor of the device.
- **Signal strength** - A measurement is created with RSSI and SNR values of the device signal strength.