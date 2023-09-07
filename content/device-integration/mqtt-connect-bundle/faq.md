---
weight: 90
layout: redirect
title: FAQ
---

Q: How to obtain device credential?<br/>
A: MQTT Connect doesn't support device bootstrap process yet. Please follow [Integration life cycle](/device-integration/mqtt/#integration-life-cycle)
to bootstrap the device and obtain device credentials. Once the device credentials are obtained, ensure that they have `Mqtt connect` `ADMIN` permission.
You can achieve this for all devices by granting this permission to the `devices` global role.

Q: Does the MQTT Connect support SmartREST 2.0 protocol?<br/>
A: Not yet, support for SmartREST 2.0 will be added in the future.

Q: Why MQTT Connect doesn't use standard MQTT ports 1883 and 8883?<br/>
A: Those ports are already used by {{< product-c8y-iot >}} MQTT, as both endpoints are working together MQTT Connect must use different ports.