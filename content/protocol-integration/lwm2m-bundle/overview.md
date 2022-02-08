---
weight: 10
title: Overview
layout: redirect
---

Lightweight M2M (LWM2M) is a traffic and resource-optimized protocol to remotely manage IoT devices. The protocol is standardized by the Open Mobile Alliance. For more information, see [http://openmobilealliance.org/iot/lightweight-m2m-lwm2m](http://openmobilealliance.org/iot/lightweight-m2m-lwm2m).
> **Important:** {{< product-c8y-iot >}} currently supports LWM2M 1.0.

> **Info:** You can connect any device supporting LWM2M 1.0 to {{< product-c8y-iot >}} without programming. We expect the device and its capabilities (e.g. firmware update) to be compliant to the LWM2M specification. The device must support the UDP binding of the LWM2M standard.

Our LWM2M solution allows any LWM2M object to be easily interfaced with the platform. For the sake of convenience, we provide out-of-the-box integration for the following LWM2M objects:

- Device (/3)
- Connectivity monitoring (/4)
- Firmware update (/5)
- Location (/6)


Our LWM2M solution supports the following measurement types:
- Boolean - represented as "true" or "false" and mapped in {{< product-c8y-iot >}} LWM2M solution respectively as "0" or "1"
- Float - represented by any Float numeric values and mapped in {{< product-c8y-iot >}} LWM2M solution as it is
- Integer - represented by any Integer numeric values and mapped in {{< product-c8y-iot >}} LWM2M solution as it is
- String - represened by:
    - Any numeric values (Integer and Float) in String format
    - Numeric values in scientiffic format in positive or negative exponential notation (Ex.: 1.23E10 or 3.57e+5 or 9.8e-4)
    - Any positive or negative numeric values starting with leading zero will be interpreted as a positive or negative *octal* value (Ex.: -029 or 010) and will be stored in {{< product-c8y-iot >}} as its decimal representation
    - Any positive or negative value starting with 0x or 0X following with any numbers and letterf from A to F (no matter capital letter or not) will be interpeted as a positive or negative hexadecimal values (Ex.: 0x23F3D5C1 or -0x42a3b3d1) and will be stored in {{< product-c8y-iot >}} as its decimal representation
    

To make use of these integrations, upload the corresponding DDF XML to your tenant.
For arbitrary protocols, you can configure how LWM2M devices are mapped to {{< product-c8y-iot >}} using [device protocols](/protocol-integration/cloud-fieldbus/#configuring-fieldbus).

![Device protocols](/images/device-protocols/lwm2m/lwm2m-deviceprotocol.png)
