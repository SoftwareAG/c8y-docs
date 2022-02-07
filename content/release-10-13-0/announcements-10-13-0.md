---
weight: 12
title: Important announcements
layout: bundle
---
### REST API changes

#### Planned

##### Removal of deprecated query parameter dateTill from TenantUsageStatisticsCollection

With the 10.15 release, we intend to remove the already deprecated request query parameter `dateTill` in TenantUsageStatisticsCollection. The reason for the deprecation as of release 10.6.0 (see the 10.6.0 documentation as reference ([https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection](https://cumulocity.com/guides/10.6.0/reference/tenants/#get-a-representation-of-a-tenantusagestatisticscollection)) was consistency on the end of Cumulocity IoT. Since the parameter name `dateTo` is used everywhere across Cumulocity IoT and TenantUsageStatisticsCollection was the only place where `dateTill` was used, we decided to change it to `dateTo` and deprecate `dateTill` in 10.6.0.

How does this impact users? After its removal, this deprecated query parameter will no longer work and will no longer be supported. It can easily be replaced by the `dateTo` parameter which serves the same purpose.

Contact us if you have any questions on the removal of this deprecated query parameter.

### Security changes

#### Implemented

##### Removal of Basic Auth browser-based authentication

As announced in [release 10.11](/releasenotes/release-10-11-0/announcements-10-11-0/), With the 10.5.0 release a new token-based mechanism for browser-based authentication was introduced (O-Auth Internal) in order to tighten the security of the Cumulocity IoT platform.

With the 10.13 release, the O-Auth Internal authentication will be enabled by default for all tenants. The Basic authentication option will be removed for browser-based applications and all applications will be forced to use the token-based authentication mechanism O-Auth Internal. Note, that Basic authentication will still be available for devices connecting to the Cumulocity IoT platform.

If not done already, we recommend you not to wait for the 10.13 release but enable O-Auth Internal as soon as possible. Documentation how to enforce O-Auth Internal can be found in [Administration > Changing settings](https://cumulocity.com/guides/{{< 10-11-0 >}}/users-guide/administration/#changing-settings) in the *User guide*.

In case you have developed your own web applications or microservices, please make sure that they do support the O-Auth Internal authentication mechanism. This will be the case if your web applications are based on the Web SDK 10.5.0 or higher as well as the Microservice SDK 10.5.0 or higher.


### SDK changes

#### Planned

##### Deprecation of addHook and clearHooks methods

The methods <code>addHook</code> and <code>clearHooks</code> are deprecated. The method <code>addHook</code> provided the functionality to invoke a custom method populating the managedObject whenever a managedObject with matching owner ('device_${id}') was created. The method <code>clearHooks</code> would flush the registered hooks and therefore no custom method would get invoked. In device management, the hook(s) would run when a newDeviceRequest got accepted.

See also the related entry in the [Tech Community](https://tech.forums.softwareag.com/t/deprecation-of-addhook-and-clearhooks/254548).

##### Removing PlatformImpl Spring bean from Microservice SDK

Cumulocity IoT currently has a design gap which allows users to use Cumulocity IoT APIs incorrectly (by mixing Spring injection with raw Java). With the upcoming releases 10.15+ we intend to no longer expose the PlatformImpl as a Spring Bean. With this change we will close the current design gap.

How does this impact users? PlatformImpl will no longer be exposed as a Spring Bean and it will not be feasible to inject it.

##### Deprecation of the variable HOOK_ROUTE_ONCE

In the context of the new Web SDK plugin concept, the variable HOOK_ROUTE_ONCE has been replaced by HOOK_ROUTE. HOOK_ROUTE_ONCE is deprecated and will be removed with release 10.14.

This change will only affect you if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you update an application including HOOK_ROUTE_ONCE, make sure to use HOOK_ROUTE instead.

#### Implemented

##### Leaflet library has been updated to the latest version

To improve the navigation in the "Map" widget on mobile devices, it is necessary to update the Leaflet library. As announced with [release 10.11](/releasenotes/release-10-11-0/announcements-10-11-0/), the Leaflet library has been updated to the latest version 1.7.1.

This change only affects you if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you have implemented your own custom map on top of the Cumulocity IoT Web SDK, make sure that your implementation still works properly. In case of any issues, see the [Leaflet changelog](https://github.com/Leaflet/Leaflet/blob/master/CHANGELOG.md) and check if you use any deprecated functionality.

##### Upgrade to Angular 12

As announced with [release 10.11](/releasenotes/release-10-11-0/announcements-10-11-0/), Angular has been updated from version 11 to version 12. Moreover, the default renderer has been changed to Ivy.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications.

For instructions on the upgrade process refer to [Upgrade > Updating the Web SDK](https://cumulocity.com/guides{{< 10-13-0 >}}/web/upgrade/#update-to-an-newer-version) in the *Web SDK guide*.

Additionally, you can use the following resources for more details on the changes in Ivy and Angular 12:

- https://angular.io/guide/ivy
- https://angular.io/guide/updating-to-version-12

### Other

#### Implemented

##### Removal of cep microservice

Software AG terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

As announced with [release 10.11](/releasenotes/release-10-11-0/announcements-10-11-0/), the "cep" microservice has been removed from the list of default microservices for new installations.

With this change, all new Cumulocity IoT subscriptions use the Apama CEP engine. Existing installations are not affected. If you plan a new installation, please check out the *system.property* file for details.

##### Added limit indicator to export files

With GA release 10.13, an indicator row has been added at the end of the export files for alarms, events and measurements when a data limit of 1 million records is exceeded. Previously, when the export files limit was reached, the result was truncated without further notice.

Sample CSV export with indicator:

Time,Device name,Creation time,Device name,ID,Source,Text,Time,Type
<br>2021-11-25T10:37:06.485Z,Position #1,2021-11-25T10:37:06.485Z,Position #1,1266,1195,Location updated,2021-11-25T10:37:06.485Z,c8y_LocationUpdate
<br>2021-11-25T10:37:01.484Z,Position #1,2021-11-25T10:37:01.484Z,Position #1,1265,1195,Location updated,2021-11-25T10:37:01.484Z,c8y_LocationUpdate
<br>[...]
<br>limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!

Automated parsers of export files must be adjusted to handle the indicator row.
