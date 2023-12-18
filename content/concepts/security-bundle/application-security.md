---
weight: 40
title: Application security
layout: bundle

---

Application security addresses security at the software level.

{{< product-c8y-iot >}} follows standard practices for application-level hardening as making sure that only properly upgraded operating systems and web servers are in use. A number of additional "best practices" are employed to make {{< product-c8y-iot >}} secure by design.

* {{< product-c8y-iot >}} supports multiple types of authentication methods, applying the best practices for each type. For more details on each type see [Authentication](/authentication/basic-settings/).
  * "Basic authentication" features sessionless REST APIs. This means that none of the popular "session stealing" techniques will work with {{< product-c8y-iot >}}.
  * "OAI-Secure" provides high security, using authorization tokens to prove the identity of the user.
  * "Single sign-on" redirect enables the use of an external authorization provider.
* {{< product-c8y-iot >}} does not use a SQL database for IoT data storage and is itself not based on a scripting language. This means that so-called "injection attacks" will not work with {{< product-c8y-iot >}}.
* As discussed above, devices are clients at {{< product-c8y-iot >}} and therefore popular attacks to devices will not work.
* Devices are individually connected with {{< product-c8y-iot >}}'s device registration feature. This means that if a device is stolen or tampered with, it can be individually disconnected from {{< product-c8y-iot >}}.

Application management security aspects
{{< c8y-admon-related >}}
- [Platform administration > Standard tenant > Managing ecosystem](/standard-tenant/ecosystem/) for details on managing applications in {{< product-c8y-iot >}}.
- [Platform administration > Standard tenant > Changing settings > Application settings](/standard-tenant/changing-settings/) for details on managing application settings in {{< product-c8y-iot >}}.
- [Application enablement & solutions > Web SDK > Application configuration > Application options](/web/application-configuration/#application-options) for details on application configuration in {{< product-c8y-iot >}}.
- [Access control](/concepts/security/#access-control) for details on access control configuration.
- [Managing permissions](/standard-tenant/managing-permissions/) for details on permission management.
{{< /c8y-admon-related >}}

* {{< product-c8y-iot >}} uses versatile permission model, which consists of application access control and REST API access control. This allows to precisely define the access rules for an end user.
* In the {{< product-c8y-iot >}} the standard applications are configured according to the best security practices by default.

{{< c8y-admon-important >}}
Due to the very flexible nature of application management within {{< product-c8y-iot >}}, it is possible to abuse certain security measures by the end users with sufficient permissions. For example, they can deploy a custom application with malicious code and make it available to the wide audience. Therefore, application management capabilities should be restricted only to the trusted and knowledgeable end users.
{{< /c8y-admon-important >}}
