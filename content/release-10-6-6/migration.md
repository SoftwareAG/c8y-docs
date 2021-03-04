---
weight: 20
title: Migration notes
layout: bundle
---

### Announcements

#### End of support for CEL (Esper)

This is a reminder (see also *Migration notes for release 10.5.0*), that Software AG will terminate support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

Cumulocity IoT now uses Apama to provide streaming analytics. As a result, existing customers using CEL must migrate to Apama.

For details on migration, refer to [Migrating from CEL (Esper) to Apama](https://cumulocity.com/guides/10.6.6/apama/overview-analytics/#migrate-from-esper) in the *Streaming Analytics guide*.

#### Removal of OPC UA legacy integration

With Cumulocity IoT 10.9, the OPC UA legacy integration will be removed from the product. With Cumulocity IoT 10.5.7 a new version of our OPC UA integration was introduced supporting many advanced features. If you are still using the legacy OPC UA integration, we ask you to upgrade to the latest version. For more information, refer to [OPC UA](https://cumulocity.com/guides/10.6.6/protocol-integration/opcua) in the *Protocol integration guide*.


### Implemented measures

#### End of Java 7 support for the Microservice SDK

As announced in the *Migration notes for release 10.5.7*, the Microservice SDK is now based on Spring Boot 2.x. In case you are still developing with Java 7 you will need to migrate your application to Java 8 if you want to take advantage of the latest Microservice SDK version. If you have to stay with Java 7 or cannot migrate to Spring Boot 2.x you can still use the Microservice SDK in version <= 10.5.7.

For details on the Microservice SDK for Java, see [Microservice SDK for Java](https://cumulocity.com/guides/10.6.6/microservice-sdk/java/) in the *Microservice SDK guide*.


#### Disabled TLS 1.0 support on all public cloud instances

As announced in the *Migration notes for release 10.5.7*, Encryption based on Transport Layer Security v1.0 has been disabled on all public Cumulocity IoT instances. As all modern browsers do already support by default more recent versions of TLS we do not expect limitations for users. Devices connecting to Cumulocity IoT might need to be updated.
