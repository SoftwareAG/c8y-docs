---
weight: 12
title: Important announcements
layout: bundle
---

### REST API changes

#### Planned

##### Removal of deprecated query parameter dateTill from TenantUsageStatisticsCollection

With release 10.15, we intend to remove the already deprecated request query parameter `dateTill` in TenantUsageStatisticsCollection. The reason for the deprecation as of release 10.6.0 (see the 10.6.0 documentation as reference ([https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection](https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection)) was consistency on the end of Cumulocity IoT. Since the parameter name `dateTo` is used everywhere across Cumulocity IoT and TenantUsageStatisticsCollection was the only place where `dateTill` was used, we decided to change it to `dateTo` and deprecate `dateTill` in 10.6.0.

How does this impact users? After its removal, this deprecated query parameter will no longer work and will no longer be supported. It can easily be replaced by the `dateTo` parameter which serves the same purpose.

Contact us if you have any questions on the removal of this deprecated query parameter.

#### Implemented

##### Usage of special characters for category and key for TenantOptionCollection API has been disallowed

As announced with [release 10.9.0](/releasenotes/release-10-9-0/announcements-10-9-0/), creating tenant options with special characters in the category or key has been disabled to prevent the following issues:

- The TenantOptionCollection API returns 400 instead of collection results due to the usage of special characters in category and key.
- After creating a new tenant option with special characters in key or category, the generated self link points to a non-existing option.
- When special characters are used the self link is broken and the user is unable to get or delete such an option via REST.

For reference, we disable all HTTP-encoded and control characters (like \u0000). The full list of HTTP-encoded characters equals the one here: https://secure.n-able.com/webhelp/NC_9-1-0_SO_en/Content/SA_docs/API_Level_Integration/API_Integration_URLEncoding.html).

### Security changes

#### Planned

##### Removal of Basic Auth browser-based authentication

With the 10.5 release a new token-based mechanism for browser-based authentication was introduced (O-Auth Internal) in order to tighten the security of the Cumulocity IoT platform.

With the 10.12 release, the O-Auth Internal authentication will be enabled by default for all tenants. With the 10.13 release the Basic Authentication option will be removed for browser-based applications and all applications  will be forced to use the token-based authentication mechanism O-Auth Internal. Note, that Basic Authentication will still be available for devices connecting to the Cumulocity IoT platform.

If not done already, we recommend you not to wait for the 10.13 release but enable O-Auth Internal as soon as possible. Documentation how to enforce O-Auth Internal can be found in [Administration > Changing settings](https://cumulocity.com/guides/10.9.0/users-guide/administration/#changing-settings) in the *User guide*.

In case you have developed your own web applications or microservices, please make sure that they do support the O-Auth Internal Authentication mechanism. This will be the case if your web applications are based on the Web SDK 10.5 or higher as well as the Microservice SDK 10.5 or higher.

#### Implemented

##### Re-introducing weak ciphers for MQTT (over TLS) connections

Cumulocity IoT is re-introducing the support for AES-CBC ciphers for MQTT(over TLS) connections.

What does this mean and how does it impact you?

The Cumulocity IoT platform continually improves its security posture by regularly updating support for the latest standards and protocols.  With the 10.10 release, we removed support for weak ciphers for MQTT (over TLS) connections. Unfortunately some customers' devices could not upgrade to the stronger ciphers and were therefore unable to connect to the platform.  We have therefore reinstated the weaker ciphers in the 10.10 and subsequent releases.

To enable customers with self-hosted or dedicated environments to determine which strength of cipher to support for MQTT over TLS new configurable values have been introduced. This configuration is only available to the Management tenant; further information on how to set this configuration can be found in the *Cumulocity IoT platform - Operations guide*.

##### User and tenant creation require a valid email address with impact to REST, MQTT and UI

As announced with [release 10.7.0](/releasenotes/release-10-7-0/announcements-10-7-0/), security has been improved when creating new users and tenants. Providing the email address is no longer optional but mandatory. The email address is used in the password resetting process, and will have a validation step as well. There will be no changes in the API.

##### Strong password enforced for tenant admins

Enforcing a strong (green) password for all users in the Management tenant does no longer exclude tenant administrators. Tenant admin users now also have strong password, i.e. green password, enforced. This increases security and protects the tenant admin account.


### SDK changes

#### Planned

##### Leaflet library will be updated to the latest version

To improve the navigation in the "Map" widget on mobile devices, it is necessary to update the Leaflet library. With release 10.12, the Leaflet library will be updated to the latest version 1.7.1.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you have implemented your own custom map on top of the Cumulocity IoT Web SDK, make sure that your implementation still works properly. In case of any issues, see the [Leaflet](https://github.com/Leaflet/Leaflet/blob/master/CHANGELOG.md) and check if you use any deprecated functionality.


##### Removing PlatformImpl Spring bean from Microservice SDK

Cumulocity IoT currently has a design gap which allows to wrongly use Cumulocity IoT APIs (by mixing Spring injection with raw Java). With the upcoming releases 10.15+ we intend to no longer expose the PlatformImpl as a Spring Bean. With this change we will close the current design gap.

How does this impact users? PlatformImpl will no longer be exposed as a Spring Bean and it will not be feasible to inject it.

Contact us if you have any questions on this change.

##### Deprecation of the variable HOOK_ROUTE_ONCE

In the context of the new Web SDK plugin concept, the variable HOOK_ROUTE_ONCE has been replaced by HOOK_ROUTE. HOOK_ROUTE_ONCE is deprecated and will be removed with release 10.14.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you update an application including HOOK_ROUTE_ONCE, make sure to use HOOK_ROUTE instead.


#### Implemented changes

##### Upgrade to Angular 12

With GA release 10.12.0 we plan to upgrade Angular from version 11 to version 12. As the view engine is deprecated we will also change the default renderer to Ivy.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications.

For instructions on the upgrade process refer to [Upgrade > Updating the Web SDK](https://cumulocity.com/guides{{< 10-11-0 >}}/web/upgrade/#update-to-an-newer-version) in the *Web SDK guide*.

Additionally, you can use the following resources for more details on the changes in Ivy and Angular 12:

- https://angular.io/guide/ivy
- https://angular.io/guide/updating-to-version-12


##### Removal of the variable HOOK_COMPONENT

The deprecated HOOK_COMPONENT has been removed in favor of HOOK_COMPONENTS.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you update an application including HOOK_COMPONENT, make sure to use HOOK_COMPONENTS instead.


### Other changes

#### Planned

##### Removal of cep microservice

Software AG terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

With release 10.12, the "cep" microservice will be removed from the list of default microservices for new installations.

With this change, all new Cumulocity IoT subscriptions use the Apama CEP engine. Existing installations are not affected. If you plan a new installation, please check out the *system.property* file for details.


### Machine Learning

* With GA release 10.11.0, Cumulocity IoT Machine Learning introduces "Role Based Access Control" which is a breaking change for it's existing users. Refer to the "Role Based Access Control" section in the [Machine Learning release notes](/release-10-11-0/machine-learning-10-11-0/#10_11_0) to learn more about this change.
* The two flavors of MLW microservice (MLW and MLW-CDH) are consolidated into a single offering.
* The [data pull from Cumulocity IoT DataHub](https://cumulocity.com/guides{{< 10-11-0 >}}/machine-learning/web-app-mlw/#datahub) feature in Cumulocity IoT Machine Learning Workbench is supported on Cumulocity IoT Edge from 10.11.0 release onwards.
* The deprecations mentioned in the [announcements section for release 10.10.0](/release-10-10-0/announcements-10-10-0/#machine-learning) are now removed entirely.
