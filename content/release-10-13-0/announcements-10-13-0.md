---
weight: 12
title: Important announcements
layout: bundle
---

### Security changes

#### Implemented

##### Removal of Basic Auth browser-based authentication

With the 10.5 release a new token-based mechanism for browser-based authentication was introduced (O-Auth Internal) in order to tighten the security of the Cumulocity IoT platform.

With the 10.12 release, the O-Auth Internal authentication will be enabled by default for all tenants. With the 10.13 release the Basic Authentication option will be removed for browser-based applications and all applications will be forced to use the token-based authentication mechanism O-Auth Internal. Note, that Basic Authentication will still be available for devices connecting to the Cumulocity IoT platform.

If not done already, we recommend you not to wait for the 10.13 release but enable O-Auth Internal as soon as possible. Documentation how to enforce O-Auth Internal can be found in [Administration > Changing settings](https://cumulocity.com/guides/{{< 10-11-0 >}}/users-guide/administration/#changing-settings) in the *User guide*.

In case you have developed your own web applications or microservices, please make sure that they do support the O-Auth Internal Authentication mechanism. This will be the case if your web applications are based on the Web SDK 10.5 or higher as well as the Microservice SDK 10.5 or higher.

### SDK changes

#### Planned

##### Deprecation of addHook and clearHooks methods

The methods <code>addHook</code> and <code>clearHooks</code> are deprecated. The method <code>addHook</code> provided the functionality to invoke a custom method populating the managedObject whenever a managedObject with matching owner ('device_${id}') was created. The method <code>clearHooks</code> would flush the registered hooks and therefore no custom method would get invoked. In device management, the hook(s) would run when a newDeviceRequest got accepted.

See also the related entry in the [Tech Community](https://tech.forums.softwareag.com/t/deprecation-of-addhook-and-clearhooks/254548).

#### Implemented

##### Leaflet library has been updated to the latest version

To improve the navigation in the "Map" widget on mobile devices, it is necessary to update the Leaflet library. As announced with release 10.11, the Leaflet library has been updated to the latest version 1.7.1.

This change only affects you if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you have implemented your own custom map on top of the Cumulocity IoT Web SDK, make sure that your implementation still works properly. In case of any issues, see the [Leaflet changelog](https://github.com/Leaflet/Leaflet/blob/master/CHANGELOG.md) and check if you use any deprecated functionality.

##### Upgrade to Angular 12

As announced with release 10.11, Angular has been updated from version 11 to version 12. Moreover, the default renderer has been changed to Ivy.

This change will only affect you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications.

For instructions on the upgrade process refer to [Upgrade > Updating the Web SDK](https://cumulocity.com/guides{{< 10-13-0 >}}/web/upgrade/#update-to-an-newer-version) in the *Web SDK guide*.

Additionally, you can use the following resources for more details on the changes in Ivy and Angular 12:

- https://angular.io/guide/ivy
- https://angular.io/guide/updating-to-version-12

### Other

#### Implemented

##### Removal of cep microservice

Software AG terminated support for using CEL (Esper) in Cumulocity IoT on 31 Dec 2020 following its deprecation in 2018.

As announced with release 10.11, the "cep" microservice has been removed from the list of default microservices for new installations.

With this change, all new Cumulocity IoT subscriptions use the Apama CEP engine. Existing installations are not affected. If you plan a new installation, please check out the *system.property* file for details.

##### opcua-device-gateway downgrades from 10.13.0

For security reasons, opcua-device-gateway downgrades from 10.13.0 to previous versions will not be directly supported. Downgrading to a previous version is still possible though by following the downgrade instructions as described in the <i>OPC UA - Installation & Operations guide</i>.
