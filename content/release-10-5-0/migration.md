---
weight: 20
title: Migration notes
layout: bundle
---


### Deprecation of DELETE method for audit logs

Cumulocity IoT offers a rich audit logging functionality to keep track of ongoing activities for the investigation of security-relevant events. In the past, we allowed deletion of these audit log entries by administrators. This method has been deprecated and will be removed completely with the July 2020 release (10.6.6). With Cumulocity IoT >= 10.6.6 the deletion of audit logs will no longer be permitted. All DELETE requests to the audit API will return the error "405 Method not allowed".  

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](https://cumulocity.com/guides/10.5.0/reference/auditing/#audit-record-collection) in the *Reference guide*. 

### Deprecation of CEL (Esper)

Software AG will terminate support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

Cumulocity IoT now uses Apama to provide streaming analytics. As a result, existing customers using CEL must migrate to Apama.

Apama brings many capabilities including:

* Web-based code editing – a web-based editor for Apama EPL code with a library of samples, syntax highlighting and error reporting.
* Analytics Builder – a drag and drop, web-based model building environment for domain experts rather than developers.
* Advanced desktop tooling for developers – tools such as inline debugging, data replay, code coverage analysis and memory & CPU profiling.
* Improved performance and predictable tenant scalability – Apama’s native performance and per-tenant streaming analytics ensures that demanding tenants do not negatively impact the performance of streaming analytics on other tenants.

For details on migration, refer to [Migrating from CEL (Esper) to Apama](https://cumulocity.com/guides/10.5.0/apama/overview-analytics/#migrate-from-esper) in the *Streaming Analytics guide*.
