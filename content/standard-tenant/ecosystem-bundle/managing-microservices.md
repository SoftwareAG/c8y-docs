---
weight: 50
title: Managing microservices
layout: bundle
section:
  - platform_administration
helpcontent:
  - label: microservices
    title: Microservices
    content: "A microservice is a specific type of application, that is a server-side application used to develop further functionality on top of Cumulocity IoT.


    As web applications, microservices can either be subscribed to your tenant by the platform or by a service provider, or they can be owned by you as custom applications.


    Click on a microservice to view the application properties. To add a microservice, click **Add microservice** and follow the instructions in the wizard or in the *User guide*."
---

Click **Microservices** in the **Ecosystem** menu in the navigator to display a list or grid of all  microservices subscribed to your account.

<img src="/images/users-guide/Administration/admin-microservices.png" alt="Microservices list">

Microservices can be filtered by name and availability.

A microservice is a specific type of application, that is a server-side application used to develop further functionality on top of {{< product-c8y-iot >}}. As web applications, microservices can either be subscribed to your tenant by the platform or by a service provider, or they can be owned by you as custom applications, see [Custom microservices](#custom-microservices).

{{< c8y-admon-related >}}
- [Managing applications](#managing-microservices) for information on managing web applications.
- [Managing permissions](#managing-permissions) for details on assigning roles and permissions for the usage of {{< product-c8y-iot >}} applications.
- [Changing application settings](/users-guide/administration/#default-app) for information on changing the application settings for your account.
- [Enterprise tenant > Managing tenants > Applications](/users-guide/enterprise-tenant/#applications) for information on application subscriptions on tenant level.
- [Enterprise tenant > Usage statistics and billing](/users-guide/enterprise-tenant/#usage-and-billing) for information on the microservice usage feature.
- [Developing applications > Microservices](/concepts/applications/#microservices) in the *Concepts guide* for an overview on the basic concepts of microservices in {{< product-c8y-iot >}}.
- The [Microservice SDK guide](/microservice-sdk/introduction) for general aspects of using microservices on top of {{< product-c8y-iot >}} and information on developing and deploying microservices using our SDKs or the REST interface.
- [Applications](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Applications) in the {{< openapi >}} for managing applications via REST.
{{< /c8y-admon-related >}}

### Subscribed microservices

{{< product-c8y-iot >}} provides a variety of microservice applications for different purposes. Depending on your installation and/or optional services your tenant will show a selection of the potentially available applications.

Below you find a list of all microservices which are by default subscribed in a {{< standard-tenant >}} and/or {{< enterprise-tenant >}}. In addition, numerous optional microservices might be subscribed to your tenant.

#### Microservices subscribed by default

<table>
<col width="200">
<col width="400">
<col width="200">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Name in the UI</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Identification in the API</th>
<th style="text-align:left">Availability</th>
</tr>
</thead>
<tbody>

<tr>
<td style="text-align:left"><a href="/streaming-analytics/overview-streaming-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-*</a></td>
<td style="text-align:left">Streaming Analytics microservices, including runtime for Analytics Builder, EPL apps and smart rules. Capabilities and resources vary depending on the microservice variant used</td>
<td style="text-align:left">apama-ctrl-*</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/device-management#simulator" class="no-ajaxy">Device-simulator</a></td>
<td style="text-align:left">Simulate all aspects of IoT devices</td>
<td style="text-align:left">device-simulator</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/cockpit#reports" class="no-ajaxy">Report agent</a></td>
<td style="text-align:left">Schedule data exports from within the Cockpit application</td>
<td style="text-align:left">report agent</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/cockpit#smart-rules" class="no-ajaxy">Smartrule</a></td>
<td style="text-align:left">Use the smart rules engine and create smart rules to perform actions based on realtime data. Requires a variant of the Apama-ctrl microservice</td>
<td style="text-align:left">smartrule</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant#customization" class="no-ajaxy">Sslmanagement</a></td>
<td style="text-align:left">Activate your own custom domain name by using an SSL certificate</td>
<td style="text-align:left">sslmanagement</td>
<td style="text-align:left">{{< enterprise-tenant >}}</td>
</tr>

</tbody>
</table>

{{< c8y-admon-info >}}
All applications listed here are of the type "Microservice".
{{< /c8y-admon-info >}}

<a name="custom-microservices"></a>
### Custom microservices

<a name="adding-microservices"></a>
#### To add a microservice as custom application

1. Click **Add microservice** at the top right.
2. In the resulting dialog box, drop a ZIP file or browse for it in your file system. Note that the size limit of the file to be uploaded is 500 MB.
3. The microservice application is created once the ZIP file has been successfully uploaded.

{{< c8y-admon-important >}}
The ZIP file must contain the application manifest and the Docker image of the microservice. Refer to [General aspects](/microservice-sdk/concept) in the *Microservice SDK guide* for information on preparing and deploying the microservice package. You can provide the name of the microservice in its manifest file. If no name is provided in the file, the platform will derive it from the ZIP file name by removing the recognized version suffix. In any case the length of the resulting name must not exceed 23 characters.
{{< /c8y-admon-important >}}

<a name="microservice-properties"></a>
### Microservice properties

To display further details on a microservice, click it to open its **Properties** tab.

<img src="/images/users-guide/Administration/admin-microservice-properties.png" alt="Microservice properties" style="max-width: 100%">

In the **Properties** tab, each microservice will show the following information:

<table>
<col width="250">
<col width="450">
<col width="300">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID to identify the microservice</td>
<td style="text-align:left">Automatically provided</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Application name; will be shown as title of the microservice application in the top bar</td>
<td style="text-align:left">Automatically inferred from the ZIP file name (recognized version number is dropped), unless provided in the microservice's manifest file</td>
</tr>
<tr>
<td style="text-align:left">Application key</td>
<td style="text-align:left">Used to identify the microservice application and to make it available for subscription, see the <a href="/concepts/applications" class="no-ajaxy">Concepts guide</a></td>
<td style="text-align:left">Automatically created, based on the ZIP file name</td>
</tr>
<tr>
<td style="text-align:left">Type</td>
<td style="text-align:left">Application type</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left">Path</td>
<td style="text-align:left">Part of the URL invoking the application</td>
<td style="text-align:left">Automatically created as /service/&lt;microservice-name&gt;</td>
</tr>
</tbody>
</table>

Below, you will additionally find information on the microservice version, as well as on its isolation level and billing mode, see [Enterprise tenant > Usage statistics and billing > Microservice usage](/users-guide/enterprise-tenant/#microservice-usage ) for details on these parameters.

#### Microservice subscription

At the top right of the **Properties** tab, you find a toggle to subscribe to or unsubcribe from a microservice.

Changing the subscription is only possible for custom microservices, that is microservices being owned by you.

### Microservice permissions

In the **Permissions** tab you can view the permissions required for the respective microservice, and the roles provided for it.
