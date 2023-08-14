---
weight: 80
title: Troubleshooting
layout: redirect
---

### Device registration

#### No LoRa device registered in Cumulocity IoT after configuring the Loriot agent endpoint in the LORIOT Network Server account

Check whether the user configured in LORIOT Network Server has assigned the Loriot admin role since the Loriot agent verifies if the user has appropriate permissions.

Make sure that the **Gateway Information** is enabled in LORIOT Network Server since the Loriot agent only processes "gw" messages.

#### Device type error warning

The warning message "Device type error" shows up in the log if no device protocol has been assigned to the device.
To assign a device protocol refer to the section [Assign the Loriot LoRa device protocol](#assign-loriot-device-protocol).
