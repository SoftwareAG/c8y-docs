---
weight: 10
title: Overview
layout: redirect
---

Lightweight M2M (LWM2M) is a traffic and resource-optimized protocol to remotely manage IoT devices. The protocol is standardized by the Open Mobile Alliance. For more information, see [http://openmobilealliance.org/iot/lightweight-m2m-lwm2m](http://openmobilealliance.org/iot/lightweight-m2m-lwm2m).

> **Info:** You can connect any device supporting LWM2M 1.0 to Cumulocity IoT without programming. We expect the device and its capabilities (e.g. firmware update) to be compliant to the LWM2M specification. The device must support the UDP binding of the LWM2M standard.

Our LWM2M solution allows any LWM2M object to be easily interfaced with the platform. For the sake of convenience, we provide out-of-the-box integration for the following LWM2M objects:

- Device (/3)
- Connectivity monitoring (/4)
- Firmware update (/5)
- Location (/6)

To make use of these integrations, upload the corresponding DDF XML to your tenant.
For arbitrary protocols, you can configure how LWM2M devices are mapped to Cumulocity IoT using [device protocols](/protocol-integration/cloud-fieldbus/#configuring-fieldbus).

![Device protocols](/images/device-protocols/lwm2m/lwm2m-deviceprotocol.png)
