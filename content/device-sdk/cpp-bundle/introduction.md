---
weight: 10
title: Overview
layout: redirect
---

SmartREST is Cumulocity's innovative communication protocol specifically designed for the IoT world. It incorporates the highly expressive strength of the REST API, whereas at the same time replaces JSON with Comma Separated Values (CSV) to avoid the complexity of JSON parsing for embedded devices. Additionally, the terseness of CSV renders it highly efficient for IoT communication via mobile networks. It can save up to 80% mobile traffic compared to other HTTP APIs.

The SmartREST `C++` library is designed for a wide range of devices which are powered by embedded Linux. It implements iterator-style lazy CSV lexer and parser, sophisticated request aggregation and robust request sending, and functionality for *Cumulocity*'s IoT integration, e.g., device registration, real-time device control, SmartREST template registration. The library employs a event-driven design which supports periodical timer callbacks and message based callbacks, which will greatly reduce the development process of integrating your IoT devices to *Cumulocity*'s IoT platform.

The `C++` library supports both HTTP and MQTT as the underlying communication protocol. HTTP is a well-established, widely-adopted application protocol. For IoT world, HTTP is considerably bloated and traffic heavy. Oppositely, MQTT is a emerging lightweight messaging protocol based on publish and subscribe mechanism, this renders it very suited for IoT use cases. The library is designed in a way such that any agent software based on the library can transit from HTTP to MQTT with very little effort.

In the following chapters, we will first provide guidelines about how to successfully build the library for your target environment. Then we demonstrate how to use the library by walk through a series of example agent ranging from simple "hello world" agent to complex agent which uses `Lua` plugins for sending measurements and handle operations. Subsequently, we will also demonstrate how to transit one complete example from using HTTP to use MQTT as underlying communication layer.

In the end, we provide a reference of all build macros for further tailor and tune the build to suit your needs in case you have special target devices.