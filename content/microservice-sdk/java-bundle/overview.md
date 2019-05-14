---
weight: 10
layout: redirect
title: Overview
---


This section describes how to develop and deploy microservices on top of Cumulocity using the Microservice SDK for Java. It also contains a [Hello world example](#java-microservice) that you may implement to get the basics of developing microservices using Java. After you have successfully deployed your first microservice to Cumulocity, you may also continue with the section [Developing Java clients](#developing-services-client).

> **Info**: You can develop microservices for Cumulocity with any IDE and build tool that you prefer, but this section focuses on Maven and Eclipse.

These are some useful references to get started with the basic technologies underlying the SDK:

- The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the section [Using the REST interface](/guides/microservice-sdk/rest).
- All examples and libraries are open source and can be reviewed at the [M2M Repositories](https://bitbucket.org/m2m).
- The JavaDoc for the
<a href="http://resources.cumulocity.com/documentation/microservicesdk/current/" target="_blank">Java Microservice SDK</a> can be found on our resources website.

### Prerequisite

You need to have at least version 7 of the [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed in your development environment.

Verify your JDK installation with the following command:

```shell
$ java -version
java version "12.0.1" 2019-04-16
Java(TM) SE Runtime Environment (build 12.0.1+12)
Java HotSpot(TM) 64-Bit Server VM (build 12.0.1+12, mixed mode, sharing)
```

> **Info:** If you face any issue or need technical support, please use the [Cumulocity community at Stack Overflow](http://stackoverflow.com/questions/tagged/cumulocity). You will find there many useful questions and answers.
