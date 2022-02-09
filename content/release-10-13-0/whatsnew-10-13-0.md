---
weight: 10
title: What´s new
layout: bundle
---

Release 10.13 includes the following new features or major feature enhancements.

### Security improvement for the token-based authentication login mode

To increase the security level of the Cumulocity IoT platform, token-based authentication is now used as the default login mode for newly created tenants. Moreover, the usage of basic authentication for such tenants will be restricted, that is web browsers are no longer allowed to use basic authentication. Basic authentication is still allowed for IoT devices though.

![Authentication](/images/release-notes/admin-auth-config.png)

 Additionally, various options have been added to the **Authentication** page to configure the token-based session. The new configuration options determine, for example, how often users of a tenant should be re-authenticated and how many sessions in parallel they may use. All settings related to the default login mode or token-based session configuration can be changed on tenant level or on platform level.

 For details, see [Administration > Changing settings > Changing authentication settings](https://cumulocity.com/guides{{< 10-13-0 >}}/users-guide/administration/#authentication) in the *User guide* or the *Cumulocity IoT platform - Operations guide*.

 Moreover, all custom applications deployed on the Cumulocity IoT platform or integrated with the Cumulocity IoT platform must support token-based authentication. In case of lacking backwards compatibility, the previous behaviour of the Cumulocity IoT platform can be restored for a particular tenant.

### Inventory roles performance improvement

The performance of inventory roles has been improved. GET requests for alarms, events and measurements work much faster now for users with inventory-role access when querying with the parameter "source". GET requests also work faster when the total number of elements matching the filter criteria is relatively small.

In the Cumulocity IoT platform UI this speeds up the following pages:

* Device Management -> alarms and events in single device views
* Device Management/Cockpit -> alarms and events dashboards in particular group views
* pages with all active alarms, all events (if the total number is up to hundreds)

This feature must be enabled on platform level or on tenant level via the tenant option. The tenant option has 2 possible values: LEGACY/OPTIMIZED, where LEGACY currently is the global default.

The option looks like the following in the REST API:

`{ "category": "configuration", "key": "acl.algorithm-version", "value": "OPTIMIZED"}`



### New Ecocsystem view

The previous **Applications** page in the Administration application has been restructured to provide a clearer organization and navigation. A new **Ecosystem** menu entry is available now, grouped into **Applications** and **Microservices**.

The **Applications** page shows an **All applications** tab listing the web and external applications, and a **Feature** tab, listing the applications of the type "feature". The **Microservices** page list all applications of the type "microservice". The separation between subscribed and own applications is now reflected by labels in the application lists (subscribed or custom).

![Ecosystem menu](/images/release-notes/admin-ecosystem.png)

For details, refer to [Administration > Managing applications](https://cumulocity.com/guides{{< 10-13-0 >}}/users-guide/administration/#managing-applications) and [Administration > Managing and monitoring microservices](https://cumulocity.com/guides{{< 10-13-0 >}}/users-guide/administration/#managing-microservices) in the *User guide*.
