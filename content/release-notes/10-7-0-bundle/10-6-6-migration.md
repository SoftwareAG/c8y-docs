---
weight: 12
title: Migration notes
layout: redirect
---

### Announcements



### Implemented measures

#### Removal of DELETE method for audit logs

As announced in the [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration), deletion of audit log entries by administrators is no longer permitted. This method is deprecated and has been removed. All DELETE requests to the audit API will return the error "405 Method not allowed".

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](/reference/auditing/#audit-record-collection) in the Reference guide. 

#### End of Java 7 support for the Microservice SDK

As announced in the [Migration notes for release 10.5.7](/release-notes/10-5-7/#10-5-7-migration), the Microservice SDK is now based on Spring Boot 2.x. In case you are still developing with Java 7 you will need to migrate your application to Java 8 if you want to take advantage of the latest Microservice SDK version. If you have to stay with Java 7 or cannot migrate to Spring Boot 2.x you can still use the Microservice SDK in version <= 10.5.7.

For details on the Microservice SDK for Java, see [Microservice SDK for Java](/microservice-sdk/java/) in the Microservice SDK guide.


#### Disabled TLS 1.0 support on all public cloud instances

As announced in the [Migration notes for release 10.5.7](/release-notes/10-5-7/#10-5-7-migration), Encryption based on Transport Layer Security v1.0 has been be disabled on all public Cumulocity IoT instances. As all modern browsers do already support by default more recent versions of TLS we do not expect limitations for users. Devices connecting to Cumulocity IoT might need to be updated.
