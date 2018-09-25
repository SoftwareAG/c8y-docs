---
order: 50
layout: redirect
title: Debugging
---

To support developers during development you can subscribe to the topic `s/e`.
On this topic the device can retrieve debug and error messages that occur during a publish from the device.

This topic is purely designed to support development of clients.
It is not recommended to subscribe to always subscribe to this channel as the messages are verbose and can significantly increase the data usage.
Also you should not use this topic to trigger actions of the device based on what you receive on the topic. It is not a response channel.