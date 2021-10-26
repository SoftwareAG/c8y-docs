---
weight: 12
title: Important announcements
layout: bundle
---

### Core platform

#### Upgrade to Angular 12

With GA release 10.12.0 we plan to upgrade Angular from version 11 to version 12. As the view engine is deprecated we will also change the default renderer to Ivy.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications.

For instructions on the upgrade process refer to [Upgrade > Updating the Web SDK](https://cumulocity.com/guides/web/upgrade/#update-to-an-newer-version) in the *Web SDK guide*.

Additionally, you can use the following resources for more details on the changes in Ivy and Angular 12:

- https://angular.io/guide/ivy
- https://angular.io/guide/updating-to-version-12

#### Improved password security for tenant administrators

Enforcing a strong (green) password for all users in the management tenant does no longer exclude the tenant administrators. Tenant admin users now also have strong password, i.e. green password, enforced. This increases security and protects the tenant admin account.

#### Removing PlatformImpl Spring bean from Microservice SDK

PlatformImpl is not exposed anymore as a Spring bean in order to remove a design gap which allowed to wrongly use Cumulocity IoT APIs (by mixing Spring injection with raw Java).

#### Leaflet library has been updated to the latest version

To improve navigation in the "Map" widget on mobile devices, it was necessary to update the "leaflet" library to the latest version. If you have implemented your own custom map on top of our Web SDK, please check that your implementation still works properly.


### Machine Learning

* With GA release 10.11.0, Cumulocity IoT Machine Learning introduces "Role Based Access Control" which is a breaking change for it's existing users. Refer to the "Role Based Access Control" section in the [Machine Learning release notes](/release-10-11-0/machine-learning-10-11-0/#10_11_0) to learn more about this change.
* The two flavors of MLW microservice (MLW and MLW-CDH) are consolidated into a single offering.
* The [data pull from Cumulocity IoT DataHub](https://cumulocity.com/guides/machine-learning/web-app-mlw/#datahub) feature in Cumulocity IoT Machine Learning Workbench is supported on Cumulocity IoT Edge from 10.11.0 release onwards.
* The deprecations mentioned in the [announcements section for release 10.10.0](/release-10-10-0/announcements-10-10-0/#machine-learning) are now removed entirely.
