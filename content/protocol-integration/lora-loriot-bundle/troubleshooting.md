---
weight: 80
title: Troubleshooting
layout: redirect
---

### <a name="lora-loriot-registration-troubleshooting"></a> Device registration

#### No LoRa device registered in Cumulocity after configuring the loriot agent endpoint in LORIOT Network Server Provider account.

Check whether the user configured in LORIOT has 'Loriot admin role' because the loriot agent verifies the user has the role permission or not.

If the issue still persists the check the 'Gateway Information' is enabled in the LORIOT Network Server because Loriot agent consider only `gw` messages for the processing.

#### Device type error warning

This warning message `Device type error` shows up in the log when device has not assigned any device protocol.

