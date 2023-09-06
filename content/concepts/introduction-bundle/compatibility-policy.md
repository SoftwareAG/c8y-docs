---
title: Compatibility policy
weight: 75
---

{{< product-c8y-iot >}} provides the highest possible level of compatibility to make sure that your investments into developing solutions with {{< product-c8y-iot >}} are maintained.

{{< c8y-admon-info >}}
For details on the release types (such as Yearly release or Maintenance release) and their version labels see [Release types](https://cumulocity.com/releasenotes/about/release-types/).
{{< /c8y-admon-info >}}

The current compatibility statements are described as follows.

#### API compatibility {#api-compatibility}

{{< product-c8y-iot >}}'s REST, SmartREST and MQTT APIs as documented in the product documentation are backwards compatible. You can find such documentation in:

* [{{< openapi >}}](https://{{< domain-c8y >}}/api/core/)
* [SmartREST 2.0](/smartrest/smartrest-two/)
* [Device integration using MQTT](/device-integration/mqtt/)


However, {{< product-c8y-iot >}} is continually improving the user experience and product capabilities and may improve the API from time-to-time. Therefore, applications shall always obey a few basic rules:

* Clients shall only use documented API methods and documented behavior. Do not rely on undocumented but observed behavior.
* Clients shall only rely on behavior that is explicitly described in the documentation. For instance, clients shall not rely on a sequence of results if no sort order is guaranteed.
* Clients can rely on a stable inventory API where they can manage their inventory objects. However, the data structures for objects owned by the {{< product-c8y-iot >}} platform can change.
* APIs are free to return more JSON fields, therefore, clients must be written in a way that they ignore such fields.


{{< c8y-admon-info >}}
If changes result in breaking backward compatibility, to provide our customers with the time to change their solution, such changes will be announced at least 6 months ahead of the point in time, when the change becomes effective. Where the change has a wide-ranging impact, we will delay taking action until we have ascertained that the impact on our customers is minimal.
{{< /c8y-admon-info >}}

#### Beta APIs {#beta-apis}

To maintain API and product quality we may, from time to time, hold back new APIs in a beta state to make sure that they are robust, properly documented, and provide the capability required. These APIs may change without a prior announcement. Please keep this in mind if you start using APIs that are documented as beta on our [API documentation](https://{{< domain-c8y >}}/api/core/).

#### SDK and client library compatibility {#sdk-and-client-library-compatibility}

{{< product-c8y-iot >}} core libraries and SDK APIs (like Java, JavaScript, C++) may be changed. The libraries and SDKs help developers to access the REST and MQTT APIs in their custom implementation and are typically bundled with the custom implementation. In case {{< product-c8y-iot >}} provides a new version of the libraries, it is not required to upgrade the custom implementation since the underlying REST and MQTT APIs remain compatible as long as no breaking changes happen (see [API compatibility](#api-compatibility)).

{{< c8y-admon-info >}}
Regular upgrades to the latest SDK versions are strongly recommended to be able to benefit from new product features as well as the latest bug and security fixes. Changes are communicated as part of the {{< product-c8y-iot >}} release notes. Whenever possible, it is also strongly recommended to consider software updates for devices from the start.
{{< /c8y-admon-info >}}

#### No forward compatibility {#no-forward-compatibility}

We support backward compatibility, not forward compatibility. You can check this using the version of the SDK and the version of the platform. If you wish to develop a device or application against, for example, {{< product-c8y-iot >}} {{< c8y-current-version >}}, make sure that the client library or SDK that you use has version {{< c8y-current-version >}}  or lower. If you take the latest SDK version, build an application with it and deploy on an older {{< product-c8y-iot >}} version, this may not work. The SDK may make use of APIs that are simply not yet present in the older version.

#### Maintenance release {#maintenance-release}

For clarification, maintenance releases for the same yearly release contain only corrective functional changes but no breaking API changes.

#### Applications and microservices {#applications-and-microservices}

In general, you can run an older application or microservice version against a newer {{< product-c8y-iot >}} backend, as long as the application or microservice uses documented APIs only.  In the rare case of announced breaking changes it might be required to update the application or microservice with a more recent version of an SDK before the change becomes effective.

#### {{< product-c8y-iot >}} functionality {#platform-functionality}

{{< product-c8y-iot >}} microservices and user interface features may be deprecated. In this case, the {{< product-c8y-iot >}} deprecation process provides an early indication to users of the features. Deprecation notices are included in the documentation and the release notes at least 6 months ahead of the point in time when the change becomes effective.
