---
weight: 12
title: Migration notes
layout: redirect
---

### Announcements

#### Deprecation of CEL (Esper)

This is a reminder (see also [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration)), that Software AG will terminate support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

Cumulocity IoT now uses Apama to provide streaming analytics. As a result, existing customers using CEL must migrate to Apama.

For details on migration, refer to [Migrating from CEL (Esper) to Apama](/apama/overview-analytics/#migrate-from-esper) in the Streaming Analytics guide.

#### Removal of OPC UA legacy integration

With Cumulocity IoT 10.7, the OPC UA legacy integration will be removed from the product. With Cumulocity IoT 10.5.7 a new version of our OPC UA integration was introduced supporting many advanced features. If you are still using the legacy OPC UA integration, we ask you to upgrade to the latest version. For more information, refer to [Optional services > OPC UA](/users-guide/optional-services/#opc-ua) in the User guide. 



### Implemented measures

#### Removal of DELETE method for audit logs

As announced in the [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration), deletion of audit log entries by administrators is no longer permitted. This method is deprecated and has been removed. All DELETE requests to the audit API will return the error "405 Method not allowed".

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](/reference/auditing/#audit-record-collection) in the Reference guide. 

#### End of Java 7 support for the Microservice SDK

As announced in the [Migration notes for release 10.5.7](/release-notes/10-5-7/#10-5-7-migration), the Microservice SDK is now based on Spring Boot 2.x. In case you are still developing with Java 7 you will need to migrate your application to Java 8 if you want to take advantage of the latest Microservice SDK version. If you have to stay with Java 7 or cannot migrate to Spring Boot 2.x you can still use the Microservice SDK in version <= 10.5.7.

For details on the Microservice SDK for Java, see [Microservice SDK for Java](/microservice-sdk/java/) in the Microservice SDK guide.


#### Disabled TLS 1.0 support on all public cloud instances

As announced in the [Migration notes for release 10.5.7](/release-notes/10-5-7/#10-5-7-migration), Encryption based on Transport Layer Security v1.0 has been be disabled on all public Cumulocity IoT instances. As all modern browsers do already support by default more recent versions of TLS we do not expect limitations for users. Devices connecting to Cumulocity IoT might need to be updated.
