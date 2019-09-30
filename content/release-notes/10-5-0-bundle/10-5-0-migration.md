---
weight: 20
title: Migration notes
layout: redirect
---


### Deprecation of DELETE method for audit logs

Cumulocity IoT offers a rich audit logging functionality to keep track of ongoing activities for the investigation of security-relevant events. In the past, we allowed deletion of these audit log entries by administrators. This method has been deprecated and will be removed completely with the July 2020 release (10.6.6). With Cumulocity IoT >= 10.6.6 the deletion of audit logs will no longer be permitted. All DELETE requests to the audit API will return the error "405 Method not allowed".  

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](/guides/reference/auditing/#audit-record-collection
) in the Reference guide. 

### Deprecation of Esper CEL