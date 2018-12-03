---
title: MQTT
layout: redirect
order: 120
---
Starting from v4.0.0, agent added supported for MQTT protocol. In case you want to upgrade from previous 2.x or 3.x versions, no additional configurations are required for enabling MQTT. However, in case you need to manually configure MQTT enablement, run following command via "Device Shell":

    set service.cumulocity.mqtt.enable = <0|1>

to either disable or enable MQTT communication. The configured server URL remains the same. For example, http://demos.cumulocity.com if you want to use plain MQTT, or https://demos.cumulocity.com if you want secure MQTT + TLS.

> Server URL http://developer.cumulocity.com will not work with MQTT since it points one different instance which doesn't have MQTT enabled. You should use http://demos.cumulocity.com instead.

To configure the MQTT keepalive interval (default to 240 seconds):

    set service.cumulocity.mqtt.keepalive = <seconds>

to change the keepalive interval.

> Changing keepalive interval only has affect after the next reboot.
