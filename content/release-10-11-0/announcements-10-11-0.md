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


### Machine Learning

* With GA release 10.11.0, Cumulocity IoT Machine Learning introduces "Role Based Access Control" which is a breaking change for it's existing users. Refer to the "Role Based Access Control" section in the [Machine Learning release notes](/release-10-11-0/machine-learning-10-11-0/#10_11_0) to learn more about this change.
* The two flavors of MLW microservice (MLW and MLW-CDH) are consolidated into a single offering.
* The Cumulocity IoT Machine Learning Workbench feature of data pull from the Cumulocity IoT DataHub is not yet supported on Cumulocity IoT Edge.
* The deprecations mentioned in the [announcements section for release 10.10.0](/release-10-10-0/machine-learning-10-10-0/#10_10_0) are now removed entirely.
