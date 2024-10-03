---
date: ""
title: Allowing shared trusted certificates across tenants via system option
product_area: Platform services
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-60243
version: 10.20.27.1
---
Support has been added for uploading same certificate on across tenant in {{< product-c8y-iot >}} via system option. When its enabled a message with warning "Shared trusted certificates are enabled on this instance. Devices may not able to connect over MQTT/REST using certificates." on trusted certificate page appears. For details, refer to the [Trusted certificate added](/images/mqtt/mqtt-certificate-added.png) user documentation.
