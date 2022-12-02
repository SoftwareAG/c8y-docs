---
weight: 90
layout: bundle
title: webMethods.io Integration
outputs:
- html
- json
aliases:
  - users-guide/optional-services/#webMethods
---

webMethods.io Integration is {{< company-sag >}}'s cloud based integration solution. It enables you to automate tasks by connecting cloud applications and services (such as Marketo, Salesforce, Evernote, and Gmail) without writing any code.

The complete webMethods.io Integration documentation is available at [https://docs.webmethods.io/](https://docs.webmethods.io/).

### Getting started

{{< c8y-admon-info >}}
If your tenant has been created outside of {{< sag-cloud >}} you will not benefit from the user experience described below. You can still use webMethods.io to integrate {{< product-c8y-iot >}} with other applications, but you cannot use the application switcher and single sign-on login.
{{< /c8y-admon-info >}}

To subscribe to webMethods.io Integration, perform the following steps:

1. Log into the {{< product-c8y-iot >}} platform as part of **{{< sag-cloud >}}**.

2. In the application switcher, select **webMethods.io Integration**.

![webMethods.io App Switcher Integration](/images/users-guide/webMethods.io/wmio-appswitcher-integration.png)

{{< c8y-admon-info >}}
If the icon is unavailable you might not be subscribed to **webMethods.io Integration**. Subscribe to it by opening the application switcher and clicking **MyCloud**. This will take you to the **{{< sag-cloud >}}** portal where you can subscribe for a free trial.
<br><br>![webMethods.io App Switcher My Cloud](/images/users-guide/webMethods.io/wmio-appswitcher-mycloud.png)
{{< /c8y-admon-info >}}

### Examples

Integrations in webmethods.io are called "workflows". A workflow is a connection between two or more web apps or services. It's like a set of steps required to perform a task.

The example workflow below is triggered by an alarm in {{< product-c8y-iot >}} and creates a ticket in Zendesk and sends an SMS message.

![webMethods.io Example Workflow](/images/users-guide/webMethods.io/wmio-example1.png)

WebMethods.io also provides pre-configured workflows which are called "recipes".

![webMethods.io Example Recipe](/images/users-guide/webMethods.io/wmio-recipe-salesforce.png)

More examples and technical guides can be found on the [{{< sag-dev-community >}} website](https://techcommunity.softwareag.com/en_en/webmethods-apis-integration-microservices.html).
