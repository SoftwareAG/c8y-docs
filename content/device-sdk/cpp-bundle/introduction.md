---
weight: 10
title: Overview
layout: redirect
---

The SmartREST C++ library is a Software Development Kit (SDK) written in C++. It  is designed for a wide range of devices which are powered by embedded Linux. It implements iterator-style lazy CSV lexer and parser, sophisticated request aggregation and robust request sending, as well as functionality for {{< product-c8y-iot >}} integration, for example, device registration, real-time device control, SmartREST template registration. The library employs an event-driven design which supports periodical timer callbacks and message-based callbacks, which will greatly reduce the development process of integrating your IoT devices to the {{< product-c8y-iot >}} platform.

The C++ library supports both HTTP and MQTT as the underlying communication protocol. HTTP is a well-established, widely-adopted application protocol. For the IoT world, HTTP is considerably bloated and traffic heavy. Oppositely, MQTT is an emerging lightweight messaging protocol based on publish and subscribe mechanism; this renders it very suited for IoT use cases. The library is designed in such a way that any agent software based on the library can transit from HTTP to MQTT with very little effort.

In the following sections, we will first provide you guidelines about how to successfully build the library for your target environment. Then we explain how to use the library by walking you through a series of example agents, ranging from a simple "Hello world" to complex agents which uses Lua plugins for sending measurements and handle operations. Subsequently, we also explain how to transit one complete example from using HTTP to use MQTT as underlying communication layer. At the end, we provide a reference of all build macros for further tailoring and tuning the build to suit your needs in case you have special target devices.
