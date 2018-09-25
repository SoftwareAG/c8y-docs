---
order: 10
layout: redirect
title: Overview
---


This section describes how to develop and deploy microservices on top of Cumulocity using the Microservice SDK for Java.

To get started, check the [Hello World example](/guides/microservice-sdk/java#java-microservice).

>**Info**: You can develop Cumulocity with any IDE and any build tool that you prefer, but the examples focus on Maven and Eclipse. 

After reviewing the "Hello world" you may continue with the section [Developing Java clients](/guides/microservice-sdk/java#developing-services-client).

Finally, here are some references for getting started with the basic technologies underlying the SDK:

-   The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the section on [REST](/guides/microservice-sdk/rest). 
-   All examples and libraries are open source, check [https://bitbucket.org/m2m](https://bitbucket.org/m2m).

JavaDoc for the 
<a href="http://resources.cumulocity.com/documentation/microservicesdk/current/" target="_blank">Java Microservice SDK</a> can be found on our resources site.

### General prerequisites

To use the Java SE client libraries, you need to have at least Version 6 of the [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) for your operating system. Some of the examples require Java 7. Java 8 is not supported and some features may not work correctly with Java 8. 
To verify the version of your Java Development Kit, type

	$ javac -version

The output needs to show a version number later than "1.6.0\_24" for the basic examples.