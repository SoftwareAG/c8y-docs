---
order: 10
layout: redirect
title: Overview
---


This section describes how to develop and deploy microservices on top of Cumulocity using the Microservice SDK for Java. It also contains a [Hello World example](#java-microservice) that you may implement to get the basics of developing microservices using Java. Afterwards, you may also continue with the section [Developing Java clients](#developing-services-client).

>**Info**: You can develop microservices for Cumulocity with any IDE and build tool that you prefer, but this section focuses on Maven and Eclipse.

These are some useful references to get started with the basic technologies underlying the SDK:

- The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the section  [REST](/guides/microservice-sdk/rest).
- All examples and libraries are open source and can be reviewed at the [M2M Repositories](https://bitbucket.org/m2m).
- The JavaDoc for the
<a href="http://resources.cumulocity.com/documentation/microservicesdk/current/" target="_blank">Java Microservice SDK</a> can be found on our resources site.

### General prerequisites

To use the Java SE client libraries, you need to have at least version 6 of the [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed in your development environment. Note that some of the examples require Java 7. At the moment Java 8 is not fully supported, hence some features may not work correctly with Java 8.

Verify that you have the JDK 6 or above with the following command

```shell
$ javac -version
javac 1.7.0_80
```
