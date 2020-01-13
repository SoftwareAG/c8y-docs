---
weight: 20
title: Migration notes
layout: redirect
---


### Deprecation of Java 7 support for the Microservice SDK

The Cumulocity Microservice SDK for Java, allows you to extend the functionality of the Cumulocity IoT platform with your own functionality. In order to guarantee the security and stability of microservices, starting with the April 2020 release (10.6.0) the Microservice SDK for Java will require at least Java 8. With the July 2020 release (10.6.6), the Microservice SDK will be based on Spring Boot 2.x. In case you are still developing with Java 7 you will need to migrate your application to Java 8 if you want to take advantage of the latest Microservice SDK version. If you have to stay with Java 7 or cannot migrate to Spring Boot 2.x you can still use the Microservice SDK in version <= 10.5.7.

For details on the Cumulocity Microservice SDK for Java, see [Microservice SDK for Java](https://cumulocity.com/guides/microservice-sdk/java/) in the Microservice SDK guide.

### Deprecation of breadcrumbs

The breadcrumb functionality which is currently available in the Cumulocity UI for groups and devices is deprecated and will be removed with the April 2020 release (10.6.0).
