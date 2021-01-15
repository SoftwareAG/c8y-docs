---
weight: 12
title: Migration notes
layout: redirect
---

### Announcements

#### Support for Internet Explorer ending soon

In response to the announcement by Microsoft of the end of life for Internet Explorer 11, Cumulocity IoT 10.7 will be the last release that supports this browser. With upcoming releases we will continue to support the latest version of the Microsoft Edge browser as the successor to the Internet Explorer. This will allow us to continue to provide you with a state-of-the-art user experience.

#### Smart REST response codes

With the 10.9 GA Release in April 2021, the error code "40" will be removed.  

Why are we doing this?  Currently, when connecting to Cumulocity IoT via SmartREST 1.0 you may receive an error "40", often looking like this:

	40,,/meta/connect,402::Unknown client
	86,,,0,handshake

This error means that the platform has restarted, the session has expired, or some other connectivity problem occurred. The number is misleading though, as according to the documentation "40" means "Template not found".

After the error code "40" has been removed the error will look like this:

	86,,,0,handshake

No change is required for devices integrated via our Device SDK and agents. However, be aware of this change, in case you have designed your own device integration.


#### ngx-bootstrap upgrade to 5.6.1

To fix various layout issues around tooltips and scrollbars, the ngx-bootstrap library will be upgraded to version 5.6.1. The change applies the first time to the 10.7.1 Incremental Release and to the 10.9 GA Release in April 2021.

This change may affect developers building Cumulocity IoT UI extensions or custom web applications. It may also affect existing extensions and web applications.

An important change is the ngx-bootstrap module's import. Now, when importing a module, e.g. BsModalRef, you need to specify the exact directive to import from:

	import { BsModalRef } from 'ngx-bootstrap/modal';

instead of

	import { BsModalRef } from 'ngx-bootstrap’;

For details, see the [ngx-bootstrap release notes](https://github.com/valor-software/ngx-bootstrap/releases).

#### Binary size calculation improved

With the 10.9 GA Release in April 2021, the calculation for the binary file size is updated to reflect the total size of the file, not the content length as was previously used.  

#### Underscore (_) not allowed in new tenant domains

With the 10.9 GA Release in April 2021, tenant domain names will no longer be allowed to use the underscore character in accordance to RFC specification https://tools.ietf.org/html/rfc2181. This change only affects the creation of new tenants. Existing tenant domains with underscore will be still working correctly. However, each customer having underscore in tenant domains should contact [our product support](/about-doc/contacting-support) in order to plan migration for those affected tenants.

#### UI upgrade to Angular 11

With the 10.10 GA Release in July 2021, all Cumulocity IoT UIs will be upgraded to Angular 11. This change will only affect you, if you or your development team use the Web SDK to extend default Cumulocity IoT UI applications (Cockpit, Administration, Device Management) or to build your own web applications.

#### Security using OAuth to be made default

With the 10.10 GA Release in July 2021, the optional "OAuth internal" mode will be the default login mode. Currently, any tenant that is provisioned uses "Basic Auth" (basic authentication) for authenticating a user against a UI application. This mode is considered unsafe in the browser, as the user information and password can be read by JavaScript. With the OAuth internal mode, the credentials aren’t readable by Javascript and thus more secure.  

To support existing microservices and devices, and older UI applications that don’t support "OAuth internal", "Basic Auth" will continue to work.

It is strongly recommended that all customers move to "OAuth internal" to reduce the security exposure of using "Basic Auth".



### Implemented measures

#### End of support for CEL (Esper)

This is a reminder (see also [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration)), that Software AG has terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

Cumulocity IoT now uses Apama to provide streaming analytics. As a result, existing customers using CEL must migrate to Apama.

For details on migration, refer to [Migrating from CEL (Esper) to Apama](/apama/overview-analytics/#migrate-from-esper) in the Streaming Analytics guide.

#### Removal of DELETE method for audit logs

As announced in the [Migration notes for release 10.5.0](https://cumulocity.com/guides/10.5.0/release-notes/10-5-0/#10-5-0-migration), deletion of audit log entries by administrators is no longer permitted. This method is deprecated and has been removed. All DELETE requests to the audit API will return the error "405 Method not allowed".

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](/reference/auditing/#audit-record-collection) in the Reference guide.

#### Deprecation of breadcrumbs

As announced in the [Migration notes for release 10.5.7](https://cumulocity.com/guides/10.5.7/release-notes/10-5-7/#10-5-7-migration), the breadcrumbs for groups and devices are now turned off by default to improve performance. If required, they can still be turned on by setting the `breadcrumbs` application option, see http://resources.cumulocity.com/documentation/websdk/ngx-components/classes/ApplicationOptions.html#breadcrumbs. 
