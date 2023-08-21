---
weight: 30
title: Custom properties
layout: redirect
---


The **Custom properties** tab allows you to view and edit values of custom properties, either predefined ones (like "External reference") or those defined in the [Properties library](/standard-tenant/changing-settings/#properties-library). Such properties are also displayed as columns in the [Usage statistics](/enterprise-tenant/usage-and-billing/) page.

### To limit subtenant request rate

Platform administrators can limit the request rate of each subtenant via the following custom properties:

* Limit HTTP queue - limit of HTTP request queue for tenant
* Limit HTTP requests - limit of HTTP requests for tenant per second
* Limit stream queue - limit of MQTT request queue for tenant
* Limit stream requests - limit of MQTT requests for tenant per second

The request throttling mechanism is only enabled when both HTTP properties (limit HTTP queue and limit HTTP requests) are configured. If one of the values is omitted, it does not work.

{{< c8y-admon-important >}}
Rate limiting can be an effective countermeasure against threats like brute force login attempts, API abuse and request flooding thus reducing the number of malicious/unwanted traffic. This helps in protecting against DoS (Denial of Service) attacks and saving the available bandwidth for legitimate requests.
{{< /c8y-admon-important >}}

It is also possible to customize the buffer size for the CEP queue and the data broker queue for a particular tenant. This can be done from the {{< management-tenant >}}. Contact your Operations team on how to configure this setting according to your needs.

### To limit subtenant device number

Platform administrators can limit the count of concurrently registered root devices or simply all devices (including child devices) via the custom property "Limit number of devices".

They can view the peak number of concurrently registered devices, root devices and the peak value of used storage in the [Usage statistics](/enterprise-tenant/usage-and-billing/) page.

### Product experience tracking

Using the checkbox **Enable Gainsight product experience tracking** a parent tenant can enable/disable the product experience tracking through the [Gainsight PX](https://www.gainsight.com/product-experience/) product experience software for the given child tenant.

On tenant level, the product experience tracking by Gainsight can be disabling by disabling the cookie banner on the **Branding** page, see [Branding](/enterprise-tenant/customization/#branding).

Even if tracking is enabled for a tenant, users must actively accept the tracking of functional cookies, before any functional data on the usage of the platform is tracked, see [Accessing and logging into the platform](/getting-started/accessing-platform).
