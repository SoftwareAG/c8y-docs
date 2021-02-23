---
weight: 12
title: Migration notes
layout: redirect
---

### Announcements

#### End of support for CEL (Esper)

This is a reminder (see also [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration)), that Software AG will terminate support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

Cumulocity IoT now uses Apama to provide streaming analytics. As a result, existing customers using CEL must migrate to Apama.

For details on migration, refer to [Migrating from CEL (Esper) to Apama](/apama/overview-analytics/#migrate-from-esper) in the Streaming Analytics guide.


### Implemented measures

#### End of Java 7 support for the Microservice SDK

As announced in the [Migration notes for release 10.5.7](https://cumulocity.com/guides/10.5.7/release-notes/10-5-7/#10-5-7-migration), the Microservice SDK is now based on Spring Boot 2.x. In case you are still developing with Java 7 you will need to migrate your application to Java 8 if you want to take advantage of the latest Microservice SDK version. If you have to stay with Java 7 or cannot migrate to Spring Boot 2.x you can still use the Microservice SDK in version <= 10.5.7.

For details on the Microservice SDK for Java, see [Microservice SDK for Java](/microservice-sdk/java/) in the Microservice SDK guide.


#### Disabled TLS 1.0 support on all public cloud instances

As announced in the [Migration notes for release 10.5.7](https://cumulocity.com/guides/10.5.7/release-notes/10-5-7/#10-5-7-migration), Encryption based on Transport Layer Security v1.0 has been disabled on all public Cumulocity IoT instances. As all modern browsers do already support by default more recent versions of TLS we do not expect limitations for users. Devices connecting to Cumulocity IoT might need to be updated.
