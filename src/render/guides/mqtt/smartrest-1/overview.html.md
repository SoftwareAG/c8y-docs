---
order: 10
layout: redirect
title: Overview
---

This section describes how you can use your existing SmartREST 1.0 templates with MQTT.
Please note that SmartREST 1.0 was designed for HTTP request/response and also does not support the ID-less communication with MQTT.
It only uses the MQTT connection to send exactly the same request as you would send using HTTP and therefore comes with some limitations as MQTT is not request/response.
The support for SmartREST 1.0 was added to ease transition if you have an existing implementation using it.

If you start a new device integration we highly recommend to use the SmartREST 2.0.

For the general SmartREST 1.0 documentation please check the [SmartREST Guide](/guides/rest/smartrest)