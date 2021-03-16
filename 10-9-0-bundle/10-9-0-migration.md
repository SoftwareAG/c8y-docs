---
weight: 12
title: Migration notes
layout: redirect
---

### Announcements

#### Support for Internet Explorer ending soon

In response to the announcement by Microsoft of the end of life for Internet Explorer 11, Cumulocity IoT 10.7 will be the last release that supports this browser. With upcoming releases we will continue to support the latest version of the Microsoft Edge browser as the successor to the Internet Explorer. This will allow us to continue to provide you with a state-of-the-art user experience.

#### Smart REST response codes 

The error code "40" will be removed in Cumulocity IoT 1.8 January 2021 release.  

Why are we doing this?  Currently, when connecting to Cumulocity IoT via SmartREST 1.0 you may receive an error "40", often looking like this:

	40,,/meta/connect,402::Unknown client
	86,,,0,handshake

This error means that the platform has restarted, the session has expired, or some other connectivity problem occurred. The number is misleading though, as according to the documentation "40" means "Template not found".

After the error code "40" has been removed the error will look like this:

	86,,,0,handshake

No change is required for devices integrated via our Device SDK and agents. However, be aware of this change, in case you have designed your own device integration.


#### ngx-boostrap upgrade to 5.6.1

To fix various layout issues around tooltips and scrollbars, the ngx-bootstrap library will be upgraded to version 5.6.1. The change applies the first time to the 10.7.1 Incremental Release and to the 10.8 GA Release in January 2021. 

This change may affect developers building Cumulocity IoT UI extensions or custom web applications. It may also affect existing extensions and web applications.

An important change is the ngx-bootstrap module's import. Now, when importing a module, e.g. BsModalRef, you need to specify the exact directive to import from: 

	import { BsModalRef } from 'ngx-bootstrap/modal'; 

instead of 

	import { BsModalRef } from 'ngx-bootstrap’;

For details, see the [ngx-bootstrap release notes](https://github.com/valor-software/ngx-bootstrap/releases). 


### Implemented measures

#### Removal of DELETE method for audit logs

As announced in the [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration), deletion of audit log entries by administrators is no longer permitted. This method is deprecated and has been removed. All DELETE requests to the audit API will return the error "405 Method not allowed".

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](/reference/auditing/#audit-record-collection) in the Reference guide. 

#### Deprecation of breadcrumbs

[MTM-29924] As announced in the [Migration notes for release 10.5.7](https://cumulocity.com/guides/10.5.7/release-notes/10-5-7/#10-5-7-migration), the breadcrumbs for groups and devices are now turned off by default to improve performance. If required, they can still be turned on by setting the `breadcrumbs` application option, see http://resources.cumulocity.com/documentation/websdk/ngx-components/classes/ApplicationOptions.html#breadcrumbs. 





