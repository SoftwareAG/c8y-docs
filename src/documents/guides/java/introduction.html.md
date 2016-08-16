---
order: 1
layout: default
title: Introduction to Java
---

## Overview

Cumulocity comes with elaborate support for developing clients in Java. You can use Java, for example, to 

* Interface Cumulocity with open, Java-enabled devices through a device-side agent. Today, many Embedded Linux devices such as the Raspberry Pi support Java out of the box.
* Interface Cumulocity with closed devices speaking an existing, Internet-enabled protocol through a server-side agent.
* Interface Cumulocity with your enterprise IT systems or develop server-side business logic on top of Cumulocity.

To get started, check the "Hello World" examples for the various Java variants.

* The most simple starting point is the [Java SE example](/guides/java/hello-world-basic).
* For Java ME devices, see the [Java ME example](/guides/java/hello-world-me). Java ME provides a particularly lightweight environment for embedded devices.

Note that you can develop Cumulocity with any IDE and any build tool that you prefer, but the examples focus on Maven and Eclipse. After reviewing the "Hello worlds", continue with the Section "[Developing Java clients](/guides/java/developing)" or download the complete examples described in the Section "[Java reference agents](/guides/java/agents)". There's one full example of a device-side agent demonstrating nearly all Cumulocity features, and one full example of a server-side agent. 

Finally, here are some references for getting started with the basic technologies underlying the SDK:

-   The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the [REST developer's guide](/guides/rest). 
-   All examples and libraries are open source -- check https://bitbucket.org/m2m.

## General prerequisites

To use the Java SE client libraries, you need to have at least Version 6 of the [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) for your operating system. Some of the examples require Java 7. Java 8 is not supported and some features may not work correctly with Java 8. 
To verify the version of your Java Development Kit, type

	$ javac -version

The output needs to show a version number later than "1.6.0\_24" for the basic examples.
