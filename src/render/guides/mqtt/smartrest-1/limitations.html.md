---
order: 60
layout: redirect
title: Limitations
---

MQTT currently does not support request/response. Therefore if you send a request on the publish topic and receive a response on the subscribe topic the client cannot securely match that they belong together.
You can counter this limitation by designing the templates in a way that you never need to know what request triggered the response and the client automatically knows it by the messageId.