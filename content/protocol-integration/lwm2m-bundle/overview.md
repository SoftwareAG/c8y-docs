---
weight: 10
title: Overview
layout: redirect
---

Lightweight M2M (LWM2M) is a traffic and resource-optimized protocol to remotely manage IoT devices. The protocol is standardized by the Open Mobile Alliance. For more information, see [http://openmobilealliance.org/iot/lightweight-m2m-lwm2m](http://openmobilealliance.org/iot/lightweight-m2m-lwm2m).

{{< c8y-admon-important >}}
{{< product-c8y-iot >}} currently supports LWM2M 1.0.
{{< /c8y-admon-important >}}

{{< c8y-admon-info >}}
You can connect any device supporting LWM2M 1.0 to {{< product-c8y-iot >}} without programming. We expect the device and its capabilities (such as firmware update) to be compliant to the LWM2M specification. The device must support the UDP binding of the LWM2M standard.
{{< /c8y-admon-info >}}

Our LWM2M solution allows any LWM2M object to be easily interfaced with the platform. For the sake of convenience, we provide out-of-the-box integration for the following LWM2M objects:

- Device (/3)
- Connectivity monitoring (/4)
- Firmware update (/5)
- Location (/6)


Our LWM2M solution supports the following measurement types:
- Boolean - represented as "true" or "false" and mapped in {{< product-c8y-iot >}} LWM2M solution respectively as "0" or "1"
- Float - represented by any Float numeric values and mapped in {{< product-c8y-iot >}} LWM2M solution as is
- Integer - represented by any Integer numeric values and mapped in {{< product-c8y-iot >}} LWM2M solution as is
- String - represented by:
    - Any numeric values in a string format (for example integer and float)
    - Numeric values in scientific format in a positive or negative exponential notation (for example 1.23E10 or 3.57e+5 or 9.8e-4)
    - Any positive or negative numeric values starting with leading zero will be interpreted as a positive or negative octal value (for example -029 or 010) and will be stored in {{< product-c8y-iot >}} as its decimal representation
    - Any positive or negative value starting with 0x or 0X followed by any number or letter from A to F (case insensitive) will be interpreted as a positive or negative hexadecimal value (for example 0x23F3D5C1 or -0x42a3b3d1) and will be stored in {{< product-c8y-iot >}} as its decimal representation

{{< c8y-admon-important >}}
If a string is mapped into a measurement and the string value does not follow any of the notations above, it cannot be parsed. As a result, an alarm will be created.
{{< /c8y-admon-important >}}

To use these integrations, upload the corresponding DDF XML to your tenant.
For arbitrary protocols, you can configure how LWM2M devices are mapped to {{< product-c8y-iot >}} using device protocols. See [Cloud Fieldbus > Configuring fieldbus device protocols](/protocol-integration/cloud-fieldbus/#configuring-fieldbus) for more information.

![Device protocols](/images/device-protocols/lwm2m/lwm2m-deviceprotocol.png)
