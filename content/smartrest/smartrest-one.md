---
weight: 30
title: SmartREST 1.0
layout: bundle
section:
  - device_management
---

<div style="padding: 24px ; border: 2px solid #1776BF; border-radius: 4px; margin-bottom: 24px; background-color: #f6fafe ">

  <h3 style="color: #1776BF"><strong>IMPORTANT</strong></h3>

  <p class="lead" style="font-size:22px">SmartREST 1.0 has been superseded by SmartREST 2.0.

  <p style="font-size:16px">SmartREST 1.0 will be maintained by {{< company-c8y >}} but no longer actively developed. We highly recommend you to use <a href="/smartrest/smartrest-two">SmartREST 2.0</a> for new device integrations.</p>

</div>

This section describes how you can use your existing SmartREST 1.0 templates with MQTT.

Note that SmartREST 1.0 was designed for HTTP request/response and does not support the ID-less communication with MQTT. It only uses the MQTT connection to send exactly the same request as you would send using HTTP. Therefore, it comes with some limitations as MQTT is not request/response.

The support for SmartREST 1.0 was added to ease transition if you have an existing implementation using it.

For general information on SmartREST 1.0, refer to [Using the REST interface](/microservice-sdk/rest/).
