---
weight: 12
title: Migration notes
layout: bundle
---

### Announcements

#### Support for Internet Explorer ending soon

In response to the announcement by Microsoft of the end of life for Internet Explorer 11, Cumulocity IoT 10.7 will be the last release that supports this browser. With upcoming releases we will continue to support the latest version of the Microsoft Edge browser as the successor to the Internet Explorer. This will allow us to continue to provide you with a state-of-the-art user experience.

#### Removal of OPC UA legacy integration

With the 10.9 GA release in April 2021, the OPC UA legacy integration will be removed from the product. With Cumulocity IoT 10.5.7 a new version of our OPC UA integration was introduced supporting many advanced features. If you are still using the legacy OPC UA integration, we ask you to upgrade to the latest version. For more information, refer to [OPC UA](https://cumulocity.com/guides/10.7.0/protocol-integration/opcua) in the *Protocol integration guide*.

#### Smart REST response codes

With the 10.9 GA release in April 2021, the error code "40" will be removed.  

Why are we doing this?  Currently, when connecting to Cumulocity IoT via SmartREST 1.0 you may receive an error "40", often looking like this:

	40,,/meta/connect,402::Unknown client
	86,,,0,handshake

This error means that the platform has restarted, the session has expired, or some other connectivity problem occurred. The number is misleading though, as according to the documentation "40" means "Template not found".

After the error code "40" has been removed the error will look like this:

	86,,,0,handshake

No change is required for devices integrated via our Device SDK and agents. However, be aware of this change, in case you have designed your own device integration.


#### ngx-bootstrap upgrade to 5.6.1

To fix various layout issues around tooltips and scrollbars, the ngx-bootstrap library will be upgraded to version 5.6.1. The change applies the first time to the 10.7.1 Incremental release and to the 10.9 GA release in April 2021.

This change may affect developers building Cumulocity IoT UI extensions or custom web applications. It may also affect existing extensions and web applications.

An important change is the ngx-bootstrap module's import. Now, when importing a module, e.g. BsModalRef, you need to specify the exact directive to import from:

	import { BsModalRef } from 'ngx-bootstrap/modal';

instead of

	import { BsModalRef } from 'ngx-bootstrap’;

For details, see the [ngx-bootstrap release notes](https://github.com/valor-software/ngx-bootstrap/releases).

#### Binary size calculation improved

With the 10.9 GA release in April 2021, the calculation for the binary file size is updated to reflect the total size of the file, not the content length as was previously used.  

#### Enforcing user passwords to meet password complexity

With the 10.9 GA release in April 2021, user passwords will be enforced to meet password complexity by default. The new password validation will not impact the existing users until they need to change or reset the password.
The password complexity is enforced:

* During user creations
* During password change
* During password reset

Foe details on password validation refer to [Getting started > User options and settings](https://cumulocity.com/guides/10.7.0/users-guide/getting-started/#user-settings) and [Administration > Changing settings > Login settings](https://cumulocity.com/guides/10.7.0/users-guide/administration/#login-settings) in the *User guide*.


#### User and tenant creation will require a valid email address with impact to REST, MQTT and UI

With the 10.10 GA release in July 2021, there will be an enhancement to security when creating new users and tenants. There will be no changes in the API, but the email address is no longer optional but a required input. The email address is used in the password resetting process, and will have a validation step as well.


#### UI upgrade to Angular 11

With the 10.10 GA release in July 2021, all Cumulocity IoT UIs will be upgraded to Angular 11. This change will only affect you, if you or your development team use the Web SDK to extend default Cumulocity IoT UI applications (Cockpit, Administration, Device Management) or to build your own web applications.

#### Security using OAuth to be made default

With the 10.10 GA release in July 2021, the "OAuth internal" login mode (OAuth authentication) will be the default login mode. Currently, any tenant that is provisioned uses "Basic Auth" (basic authentication) for authenticating a user against a UI application. This mode is considered unsafe in the browser, as the user information and password can be read by JavaScript. With the OAuth internal mode, the credentials aren’t readable by JavaScript and thus more secure.  

If required (for instance due to old extensions that do not support the OAuth authentication), basic authentication can be manually enabled in the Administration application.

It is strongly recommended that all customers move to OAuth authentication to reduce the security exposure of using basic authentication.

#### Underscore not allowed in new tenant domains

With the 10.10 GA release in July 2021, it will no longer be allowed to use underscores in tenant domain names, in accordance with RFC specification https://tools.ietf.org/html/rfc2181. This change only affects the creation of new tenants. Existing tenants with underscores in the domain name will still be working correctly. However, each customer having underscores in tenant domain names should contact [product support](https://cumulocity.com/guides/10.7.0/about-doc/contacting-support/) in order to plan the migration for those affected tenants.

#### Deprecation of `/cep/realtime` endpoint

The `/cep/realtime` endpoint is deprecated. We recommend you to use the `/notification/realtime` endpoint instead. With the 10.11 GA release in October 2021, the `/cep/realtime` endpoint is supposed to be removed.


### Implemented measures

#### End of support for CEL (Esper)

This is a reminder (see also [Migration notes for release 10.5.0](/release-10-5-0/migration-10-5-0)), that Software AG has terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

Cumulocity IoT now uses Apama to provide streaming analytics. As a result, existing customers using CEL must migrate to Apama.

For details on migration, refer to [Migrating from CEL (Esper) to Apama](https://cumulocity.com/guides/10.7.0/apama/overview-analytics/#migrate-from-esper) in the *Streaming Analytics guide*.

Note that we offer an open-source Esper-to-Apama EPL translation tool which assists you in the migration of Esper CEL to Apama EPL. It generates EPL that is compatible with the Apama microservice version 10.6.6 and above. The translation tool is available from GitHub at [https://github.com/SoftwareAG/apama-streaming-analytics-esper2apama](https://github.com/SoftwareAG/apama-streaming-analytics-esper2apama). This tool focuses on reducing (though not eliminating) the amount of human involvement needed during migration by automating translation of some of the most commonly occurring Esper constructs. See the README in GitHub for details.

#### Removal of DELETE method for audit logs

As announced in the [Migration notes for release 10.5.0](/release-10-5-0/migration-10-5-0), deletion of audit log entries by administrators is no longer permitted. This method is deprecated and has been removed. All DELETE requests to the audit API will return the error "405 Method not allowed".

Note that retention rules still apply to audit logs and will delete audit log records older than the specified retention time, see also [Auditing > Audit record collection](https://cumulocity.com/guides/10.7.0/reference/auditing/#audit-record-collection) in the *Reference guide*.

#### Deprecation of breadcrumbs

As announced in the [Migration notes for release 10.5.7](/release-10-5-7/migration-10-5-7), the breadcrumbs for groups and devices are now turned off by default to improve performance. If required, they can still be turned on by setting the `breadcrumbs` application option, see http://resources.cumulocity.com/documentation/websdk/ngx-components/classes/ApplicationOptions.html#breadcrumbs.
