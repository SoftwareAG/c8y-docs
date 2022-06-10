---
title: APIs
weight: 70
---

{{< product-c8y-iot >}} exposes its complete functionality through programming interfaces (APIs). This means that all of {{< product-c8y-iot >}}'s functionality is available for you to use in different contexts outside of what {{< product-c8y-iot >}} directly provides - in your own applications, in your own devices. See the [{{< openapi >}}](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}) for details.

In contrast to many other IoT platforms, {{< product-c8y-iot >}} uses the same APIs and the same interface technology for all use cases. As a consequence, you have a wider range of choices in putting intelligence into your IoT devices, depending on how powerful they are. Moreover, you only need to use one set of APIs and one technology to build a complete solution from device to application on your own.

{{< product-c8y-iot >}} uses HTTP and REST, which is today the most widely used interfacing technology and which works on any internet-connected device ranging from small embedded microcontrollers up to desktop PCs. The secure variant, HTTPS, is used for the most security critical applications and will give you the best possible security.

The plugin concept of {{< product-c8y-iot >}} enables you to write new user interface functionality that will seamlessly extend the existing {{< product-c8y-iot >}} platform.

{{< c8y-admon-important >}}
The public APIs for {{< product-c8y-iot >}} are backward compatible where possible. There are some instances where we must change an API, for example in order to support a security enhancement; in this case the change will be announced before it is implemented in the product.
{{< /c8y-admon-important >}}
