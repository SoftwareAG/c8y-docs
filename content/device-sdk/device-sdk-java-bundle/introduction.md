---
weight: 10
title: Overview
layout: redirect
---

Cumulocity comes with elaborate support for developing clients in Java. You can use Java, for example, to

* Interface Cumulocity with open, Java-enabled devices through a device-side agent. Today, many Embedded Linux devices such as the Raspberry Pi support Java out of the box.
* Interface Cumulocity with closed devices speaking an existing, Internet-enabled protocol through a server-side agent.

To get started, check the "Hello World" examples for the various Java variants.

* The most simple starting point is the [Java SE example](/guides/device-sdk/java#hello-world-basic).
* For Java ME devices, see the [Java ME example](/guides/device-sdk/java#hello-world-me). Java ME provides a particularly lightweight environment for embedded devices.

Note that you can develop Cumulocity with any IDE and any build tool that you prefer, but the examples focus on Maven and Eclipse.

After reviewing the "Hello world" examples, continue with the section [Developing Java clients](/guides/device-sdk/java#developing-java-clients) or download the complete examples described in the section [Java reference agents](/guides/device-sdk/java#agents). There's one full example of a device-side agent demonstrating nearly all Cumulocity features, and one full example of a server-side agent.

Finally, here are some references for getting started with the basic technologies underlying the SDK:

-   The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the section on [REST](/guides/device-sdk/rest).
-   All examples and libraries are open source -- check https://bitbucket.org/m2m.

JavaDoc for the <a href="http://resources.cumulocity.com/documentation/javasdk/current/" target="_blank">Java client API</a> can be found on our resources site.


> **Important:** You need to have at least version 7 of the [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed in your development environment as older versions of the JRE and JDK are not updated with the latest security patches and are not recommended for use in production.
