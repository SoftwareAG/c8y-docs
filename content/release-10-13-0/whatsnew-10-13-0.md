---
weight: 10
title: What´s new
layout: bundle
---

Release 10.13 includes the following new features or major feature enhancements.

### OAuth Internal improvements

To increase the security level of the Cumulocity IoT platform, authentication with OAuth Internal is now used as the default login mode for newly created tenants. Moreover, the usage of Basic authentication for such tenants will be restricted, that is web browsers are no longer allowed to use Basic authentication. Basic authentication is still allowed for IoT devices though.

![Authentication](/images/release-notes/admin-auth-config.png)

 Additionally, the OAuth Internal configuration has been extended with various options which can be customized using an extended web page for the authentication configuration. New configuration options determine how often users of a tenant should be re-authenticated and how many devices they may use. All settings related to the default login mode or oAuth Internal configuration can be changed on tenant level or on platform level.

 For details, see [Administration > Changing settings > Changing authentication settings](https://cumulocity.com/guides{{< 10-13-0 >}}/users-guide/administration/#authentication) in the *User guide* or the *Cumulocity IoT platform - Operations guide*.

 Moreover, all custom applications deployed on the Cumulocity IoT platform or integrated with the Cumulocity IoT platform must support authentication whit OAuth Internal. In case of lacking backwards compatibility, the previous behaviour of the Cumulocity IoT platform can be restored for a particular tenant.


### New Ecocsystem menu

The previous **Applications** page in the Administration application has been restructured to provide a clearer organization and navigation. A new **Ecosystem** menu entry is available now, grouped into **Applications** and **Microservices**. The **Applications** page shows an **All applications** tab listing the web and external applications, and a **Feature** tab, listing the applications of the type "feature". The **Microservices** page list all applications of the type "microservice". The separation between subscribed and own applications is now reflected by labels in the application lists (subscribed or custom).

![Ecosystem menu](/images/release-notes/admin-ecosystem.png)

For details, refer to [Administration > Managing applications](https://cumulocity.com/guides{{< 10-13-0 >}}/users-guide/administration/#managing-applications) and [Administration > Managing and monitoring microservices](https://cumulocity.com/guides{{< 10-13-0 >}}/users-guide/administration/#managing-microservices) in the *User guide*.
