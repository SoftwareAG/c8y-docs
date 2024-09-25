---
date: ""
title: An alert has been added indicating that the connection via MQTT REST may not be possible when using shared trusted certificates.
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-60465
version: 1020.27.1
---
The message "Shared trusted certificates are enabled on this instance. Devices may not able to connect over MQTT/REST using certificates." on trusted certificate page appears when "ssl shared truststore" is enabled.
