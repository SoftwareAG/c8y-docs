---
weight: 12
title: Important announcements
layout: bundle
---

### REST APIs

#### New API for timestamp

In order to facilitate gathering alarm and event data across a period of date and time, two new query parameters are now available in the REST API. Measurement data is not in scope.  

Existing queries do not need to be changed, they will behave in exactly the same manner as prior to release 10.10.  For date and time bounded queries the new parameters available are:

* lastUpdatedFrom [DateTime type]
* lastUpdatedTo [DateTime type]

These new parameters are fully documented in the Cumulocity IoT OpenAPI documentation, see [https://cumulocity.com/api/10.10.0/#operation/getAlarmCollectionResource](https://cumulocity.com/api/10.10.0/#operation/getAlarmCollectionResource) and [https://cumulocity.com/api/10.10.0/#operation/getEventCollectionResource](https://cumulocity.com/api/10.10.0/#operation/getEventCollectionResource).

##### Removal of deprecated query parameter dateTill from TenantUsageStatisticsCollection

With release 10.15, we intend to remove the already deprecated request query parameter `dateTill` in TenantUsageStatisticsCollection. The reason for the deprecation as of release 10.6.0 (see the 10.6.0 documentation as reference ([https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection](https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection)) was consistency on the end of Cumulocity IoT. Since the parameter name `dateTo` is used everywhere across Cumulocity IoT and TenantUsageStatisticsCollection was the only place where `dateTill` was used, we decided to change it to `dateTo` and deprecate `dateTill` in 10.6.0.

How does this impact users? After its removal, this deprecated query parameter will no longer work and will no longer be supported. It can easily be replaced by the `dateTo` parameter which serves the same purpose.

Contact us if you have any questions on the removal of this deprecated query parameter.

#### Deprecation of /devicecontrol/notifications endpoint

The `/devicecontrol/notifications` endpoint is deprecated. We recommend you to use the  `/notification/operations` endpoint instead.

#### Deprecation of /cep/realtime endpoint

The `/cep/realtime` endpoint is deprecated. We recommend you to use the `/notification/realtime` endpoint instead.

#### Usage of special characters for category and key for TenantOptionCollection API has been disallowed

As announced with [release 10.9.0](/releasenotes/release-10-9-0/announcements-10-9-0/), creating tenant options with special characters in the category or key has been disabled to prevent the following issues:

- The TenantOptionCollection API returns 400 instead of collection results due to the usage of special characters in category and key.
- After creating a new tenant option with special characters in key or category, the generated self link points to a non-existing option.
- When special characters are used the self link is broken and the user is unable to get or delete such an option via REST.

For reference, we disable all HTTP-encoded and control characters (like \u0000). The full list of HTTP-encoded characters equals the one here: https://secure.n-able.com/webhelp/NC_9-1-0_SO_en/Content/SA_docs/API_Level_Integration/API_Integration_URLEncoding.html).

#### Change in measurement validation

Cumulocity IoT has already recommended (and documented) the use of numeric value measurements. However this rule has not been enforced up until now. With one of the future releases, the numeric values will be enforced, and measurement values of types other than numeric, for example maps and nulls, will no longer be accepted. This means that customers will have to proactively change the measurement values to numeric-only to send the correct values. Existing data will not be erased from the storage.


### SDKs

#### Removing PlatformImpl Spring bean from Microservice SDK

Cumulocity IoT currently has a design gap which allows to wrongly use Cumulocity IoT APIs (by mixing Spring injection with raw Java). With the upcoming releases 10.15+ we intend to no longer expose the PlatformImpl as a Spring Bean. With this change we will close the current design gap.

How does this impact users? PlatformImpl will no longer be exposed as a Spring Bean and it will not be feasible to inject it.

Contact us if you have any questions on this change.

#### Deprecation of RxJS usage in the ‘@c8y/client’ component of the Web SDK

As announce with [release 10.9.0](/releasenotes/release-10-9-0/announcements-10-9-0/), the use of observables or other RxJS features has been removed. To continue using real-time data in your code use the new <code>Observable()</code>, <code>defer()</code> or <code>from()</code> to compose an observable on your own.

#### Upgrade to Angular 12

With GA release 10.12.0 we plan to upgrade Angular from version 11 to version 12. As the view engine is deprecated we will also change the default renderer to Ivy.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications.

For instructions on the upgrade process refer to [Upgrade > Updating the Web SDK](https://cumulocity.com/guides{{< 10-11-0 >}}/web/upgrade/#update-to-an-newer-version) in the *Web SDK guide*.

Additionally, you can use the following resources for more details on the changes in Ivy and Angular 12:

- https://angular.io/guide/ivy
- https://angular.io/guide/updating-to-version-12


#### Leaflet library has been updated to the latest version

To improve navigation in the "Map" widget on mobile devices, it was necessary to update the "leaflet" library to the latest version. If you have implemented your own custom map on top of our Web SDK, please check that your implementation still works properly.

#### Changes in the ngx-component HOOK

In the context of the new plugin concept, we currently review the ngx-componens HOOK which can be used to hook certain UI features into any application. To align the naming the following HOOK has been renamed: HOOK_ROUTE_ONCE now is HOOK_ROUTE. In addition, the deprecated HOOK_COMPONENT has been removed in favor of HOOK_COMPONENTS.

### Other changes

#### Re-introducing weak ciphers for MQTT (over TLS) connections

Cumulocity IoT is re-introducing the support for AES-CBC ciphers for MQTT(over TLS) connections.

What does this mean and how does it impact you?

The Cumulocity IoT platform continually improves its security posture by regularly updating support for the latest standards and protocols.  With the 10.10 release, we removed support for weak ciphers for MQTT (over TLS) connections. Unfortunately some customers' devices could not upgrade to the stronger ciphers and were therefore unable to connect to the platform.  We have therefore reinstated the weaker ciphers in the 10.10 and subsequent releases.

To enable customers with self-hosted or dedicated environments to determine which strength of cipher to support for MQTT over TLS new configurable values have been introduced. This configuration is only available to the Management tenant; further information on how to set this configuration can be found in the *Cumulocity IoT platform - Operations guide*.


#### Removal of cep microservice

With release 10.12, the "cep" microservice will be removed from the list of default microservices for new installations.

This change is related to the termination of support for streaming analytics using CEL (Esper). All new Cumulocity IoT subscriptions use the Apama CEP engine. Software AG terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

#### Security improvements

##### User and tenant creation require a valid email address with impact to REST, MQTT and UI

As announced with [release 10.7.0](/releasenotes/release-10-7-0/announcements-10-7-0/), security has been improved when creating new users and tenants. The email address is no longer optional but mandatory. The email address is used in the password resetting process, and will have a validation step as well.

##### Strong password enforced for tenant admins

Enforcing a strong (green) password for all users in the management tenant does no longer exclude the tenant administrators. Tenant admin users now also have strong password, i.e. green password, enforced. This increases security and protects the tenant admin account.

#### OpenResty upgrade

OpenResty has been upgraded to version 1.19.3.



#### New Ecosystem view in the Administration UI

In a future release, the **Applications** view in the Administration application will be renamed to "Ecosystem" as it does not only contain applications but also, for example, features and microservices. Moreover, the view will be regrouped. Instead of **Subscribed applications**  and **Own applications** there will be a list view for microservices and applications, indicating if they are subscribed or owned by the tenant.

### Machine Learning

* With GA release 10.11.0, Cumulocity IoT Machine Learning introduces "Role Based Access Control" which is a breaking change for it's existing users. Refer to the "Role Based Access Control" section in the [Machine Learning release notes](/release-10-11-0/machine-learning-10-11-0/#10_11_0) to learn more about this change.
* The two flavors of MLW microservice (MLW and MLW-CDH) are consolidated into a single offering.
* The [data pull from Cumulocity IoT DataHub](https://cumulocity.com/guides{{< 10-11-0 >}}/machine-learning/web-app-mlw/#datahub) feature in Cumulocity IoT Machine Learning Workbench is supported on Cumulocity IoT Edge from 10.11.0 release onwards.
* The deprecations mentioned in the [announcements section for release 10.10.0](/release-10-10-0/announcements-10-10-0/#machine-learning) are now removed entirely.
