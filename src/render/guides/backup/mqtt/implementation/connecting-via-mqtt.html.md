---
order: 10
layout: redirect
title: Connecting via MQTT
---

Cumulocity supports MQTT both via TCP and WebSockets. As the URL you use mqtt.cumulocity.com.

Available ports:

||TCP|WebSockets|
|:---|:----|:----|
|SSL|8883|443|
|no SSL|1883|80|

_Note:_ To use WebSockets you need to connect to the path "/mqtt" and follow the [MQTT standard](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718127) for WebSocket communication.