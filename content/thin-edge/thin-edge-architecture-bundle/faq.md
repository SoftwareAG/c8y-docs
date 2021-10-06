---
weight: 60
title: Architecture FAQ
layout: redirect
opensource: true
---

### Why is thin-edge.io an executable binary and not a library?

Interoperability of software components can be addressed along very different approaches. Thin-edge.io uses dynamic and loose Inter-Process Communication (IPC) using messages exchange over an MQTT bus.

In the past and even today, many clouds provide a library (SDK) to help you connect your code to the cloud.

In thin-edge.io we decided not to follow this approach for the following reasons:
* Libraries are programming language dependent.
  Therefore, developing a library for a number of programming languages excludes developers using other
  programming languages. Additionally the effort to support many libraries (C, C++, Rust, Python, etc) is extensive,
  including adding new features, testing, documentation, examples, stack overflow, which would not serve a purpose.
  * Using an IPC mechanism and not a library makes it easier to dynamically combine components during runtime
  instead of recompiling the software. For example, it is easier to add additional protocol stacks
  (OPC/UA, modbus, ProfiNet, IO-Link, KNX, etc.) to thin-edge.io during run-time.
* Linking libraries to existing code can be problematic for some developers, for example for licensing reasons.
  While thin-edge.io has a very user-friendly licensing (Apache 2.0),
  some developers prefer to reduce the number of libraries that they link to their software.

### Why does thin-edge.io use MQTT for Inter-Process Communication (IPC)?
[MQTT](https://mqtt.org/) is a lightweight and flexible messaging protocol widely used by IoT applications.

We recommend you to use MQTT for the following reasons:
* The approach is used by other industrial IoT organizations and software,
  for example by [Open Industry 4.0 Alliance](https://openindustry4.com/).
* Existing components (like [Node-RED](https://nodered.org/) or [collectd](https://collectd.org/)) that support MQTT can be easily integrated. In this case, thin-edge.io acts as an MQTT proxy:
  existing components connect to the local MQTT bus of thin-edge.io,
  and thin-edge.io routes the messages to different clouds in a secure and reliable manner.  
* MQTT is message-oriented and bi-directional, which matches well with the event-oriented programming model of industrial IoT.
* MQTT is available on many platforms, including Linux and Windows.
* MQTT client libraries are available for 25+ programming languages (see [MQTT.org](https://mqtt.org/software/))
* MQTT overhead is relatively small in terms of client library size and network overhead.
* MQTT is message-payload-agnostic which enables sending not only JSON messages, but also text, CSV or binary data.  


[comment]: # (Alternatives considered where: DBus, gRPC and REST over HTTP.)

### Why does thin-edge.io use MQTT for cloud communication?

[MQTT](https://mqtt.org/) is a lightweight and flexible messaging protocol widely used by IoT applications. Nearly all IoT cloud platforms provide an MQTT endpoint to consume and publish messages from a fleet of devices. Therefore, MQTT was an obvious choice for edge to cloud communication.

Using MQTT for cloud communication is not mandatory. You are free to add additional protocols beside MQTT. Since thin-edge.io has an internal bus, you can implement a bridge to another protocol (e.g. LWM2M or plain HTTPS). In that case, MQTT is used inside the edge devices, and another protocol is used for external communication.

### Why is the thin-edge.io canonical format based on JSON?

[Thin Edge JSON](#thin-edge-json), the cloud-agnostic message format of thin-edge.io, is based on JSON.

Supported by nearly all programming languages, JSON provides a nice compromise between simplicity and flexibility. Notably, it features [duck typing](https://en.wikipedia.org/wiki/Duck_typing), a flexible way to group different data fields that can be read by consumers with different expectations over the message content. For instance, a consumer expecting a temperature can process messages where the temperature measurements are produced along with other kinds of measurements.

Additionally, JSON is supported by most (if not all) cloud vendors, which makes the transformation easier.

JSON is also used by other IIoT standards, including OPC/UA and LWM2M.

### Why use Rust?
The command line interface and the daemon processes of thin-edge.io are implemented in [Rust](https://www.rust-lang.org/), *a language empowering everyone to build reliable and efficient software*.

The main reason to use Rust is the security aspect. Rust avoids many security vulnerabilities and threading issues at compile time. With the type system of Rust you write software that is free from typical security flaws: undefined behavior, data races or any memory safety issues.

The second motivation is efficiency. Rust software is typically as efficient as C/C++ software. One reason is that Rust does not have (by default) a garbage collector. Instead, memory lifetime is calculated at compile time.

Note that, even if the core of thin-edge.io is written in Rust, any programming language can be used to implement thin-edge.io components. For that, one just needs an MQTT library that lets them interact with the thin-edge.io MQTT broker.
