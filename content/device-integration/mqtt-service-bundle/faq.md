---
weight: 90
layout: redirect
title: FAQ
---

Q: How to obtain device credential?<br/>
A: MQTT Service doesn't support a device bootstrap process yet. Instead, follow [Integration life cycle](/device-integration/mqtt/#integration-life-cycle)
to bootstrap the device and obtain device credentials. Once the device credentials are obtained, ensure that they have `Mqtt Service` `ADMIN` permission.
You can achieve this for all devices by granting this permission to the `devices` global role.

Q: Does MQTT Service support the SmartREST 2.0 protocol?<br/>
A: Not yet, support for SmartREST 2.0 will be added in the future.

Q: Why doesn't MQTT Service use standard MQTT ports 1883 and 8883?<br/>
A: Those ports are already used by {{< product-c8y-iot >}} MQTT. Because, both endpoints are working together MQTT Service must use different ports.