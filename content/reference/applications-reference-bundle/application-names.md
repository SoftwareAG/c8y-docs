---
weight: 6
title: Applications overview
layout: redirect
---

For each tenant, Cumulocity manages the subscribed applications. Cumulocity provides a number of applications of various types. 

These are listed in the following tables. The columns show the following information:

* **Application**: Application name as visible in the Administration application.
* **Functionality**: Brief description.
* **ID/name**: Identification of the application in the API. In case you want to subscribe a tenant to the application using an API (as described on this page), use this string in the argument (as name).
* **Type**: Technical type of the application. "Feature" refers to built-in applications subscriptions, i.e. these applications are not represented by an explicit artefact (microservice or web application).

### Standard Tenant default applications

In the Standard Tenant you will find the following default applications:

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:center">Application</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Name (as used in the API)</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/administration" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Lets account administrators manage users, roles, tenants and applications.</td>
<td style="text-align:left">administration</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/apama" class="no-ajaxy">Apama</a></td>
<td style="text-align:left">Runtime for Apama EPL apps, Smart Rules and Analytics Builder.</td>
<td style="text-align:left">apama-ctrl-* (different strings for different size/capability options)</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/apama" class="no-ajaxy">Apama Analytics Builder</a></td>
<td style="text-align:left">Analytics Builder model manager and editor – allows models to be built graphically to process and react to data from devices.</td>
<td style="text-align:left"></td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/cockpit" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Manage and monitor IoT assets and data from a business perspective.</td>
<td style="text-align:left">cockpit</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/device-management" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Manage and monitor devices, and control and troubleshoot devices remotely.</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/device-management#simulator" class="no-ajaxy">Device simulator</a></td>
<td style="text-align:left">Simulate all aspects of IoT devices.</td>
<td style="text-align:left">device-simulator</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/cockpit#smart-rules" class="no-ajaxy">Smart Rules</a></td>
<td style="text-align:left">Use the Smart Rule engine and create <a href="/guides/users-guide/cockpit#smart-rules" class="no-ajaxy">Smart Rules</a> to perform actions based on realtime data. Requires one of the following applications: "Cep", "Apama"</td>
<td style="text-align:left">smartrule</td>
<td style="text-align:left">Microservice</td>
</tr>
</tbody>
</table>


### Enterprise Tenant applications

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:center">Application</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Name (as used in the API)</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/enterprise-edition/#branding" class="no-ajaxy">Branding</a></td>
<td style="text-align:left">Customize the look of your tenants to your own preferences.</td>
<td style="text-align:left">branding</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/enterprise-edition/#data-broker" class="no-ajaxy">Data Broker</a></td>
<td style="text-align:left">Lets you share data selectively with other tenants.</td>
<td style="text-align:left">feature-broker</td>
<td style="text-align:left">Feature</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/enterprise-edition#customization" class="no-ajaxy">SSL management</a></td>
<td style="text-align:left">Activate your own custom domain name by using a SSL certificate.</td>
<td style="text-align:left">sslmanagement</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/enterprise-edition/#user-hierarchies" class="no-ajaxy">User hierarchies</a></td>
<td style="text-align:left">Reflect independent organizational entities in Cumulocity that share the same database.</td>
<td style="text-align:left">feature-user-hierarchy</td>
<td style="text-align:left">Feature</td>
</tr>
</tbody>
</table>

### Optional service applications

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:center">Application</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Name (as used in the API)</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<td style="text-align:center"><a href="/guides/apama" class="no-ajaxy">Apama EPL Apps</a></td>
<td style="text-align:left">Manager and editor for Apama Event Processing Language (EPL) apps, for immediate processing of incoming data.</td>
<td style="text-align:left">apama-epl</td>
<td style="text-align:left">Web app</td>
</tr>


<tr>
<td style="text-align:center"><a href="/guides/event-language" class="no-ajaxy">Cep</a></td>
<td style="text-align:left">Define business operations based on realtime data by using the Esper CEP engine. This CEP variant uses a shared instance for multiple tenants. See "Cep-small" for a per-tenant approach.</td>
<td style="text-align:left">cep</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/event-language" class="no-ajaxy">CEP custom rules</a></td>
<td style="text-align:left">Upload your own CEP rules created with Esper in a per-tenant deployment. You need to be subscribed to the application "Cep-small" to be able to use this feature.</td>
<td style="text-align:left">feature-cep-custom-rules</td>
<td style="text-align:left">Feature</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/event-language" class="no-ajaxy">Cep-small</a></td>
<td style="text-align:left">CEP variant. Lets you work with CEP rules based on Esper in a per-tenant deployment (as opposed to "Cep" which uses a shared instance). You need to be subscribed to "CEP custom rules" to upload your own Esper CEP rules.</td>
<td style="text-align:left">cep-small</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/optional-services/#cloud-fieldbus" class="no-ajaxy">Cloud Fieldbus</a></td>
<td style="text-align:left">Collect data from fieldbus devices and remotely manage them in Cumulocity.</td>
<td style="text-align:left">feature-fieldbus4</td>
<td style="text-align:left">Feature</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/optional-services/#cloud-remote-access" class="no-ajaxy">Cloud Remote Access</a></td>
<td style="text-align:left">Implements Virtual Network Computing (VNC) to remotely access operating panels and other devices via a web browser.</td>
<td style="text-align:left">cloud-remote-access</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/optional-services/#connectivity" class="no-ajaxy">Connectivity</a></td>
<td style="text-align:left">Interface with mobile devices through various SIM providers like Jasper, Ericsson and Comarch.</td>
<td style="text-align:left">connectivity-agent-server</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center">Microservice hosting</td>
<td style="text-align:left">Host your own microservices on top of Cumulocity.</td>
<td style="text-align:left">feature-microservice-hosting</td>
<td style="text-align:left">Feature</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/optional-services#nokia-impact" class="no-ajaxy">Nokia IMPACT agent</a></td>
<td style="text-align:left">Interface with heterogeneous devices through the Nokia IMPACT Data Collector.</td>
<td style="text-align:left">impact</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/optional-services#sigfox" class="no-ajaxy">Sigfox</a></td>
<td style="text-align:left">Interface with Sigfox devices through the Sigfox cloud. Requires the following application: "feature-fieldbus4"</td>
<td style="text-align:left">sigfox-agent</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/optional-services/#tenant-sla-monitoring" class="no-ajaxy">Tenant SLA Monitoring</a></td>
<td style="text-align:left">Lets service providers monitor the availability and response time of tenants and sub-tenants.</td>
<td style="text-align:left">tenant-sla-monitoring</td>
<td style="text-align:left">Microservice</td>
</tr>

</tbody>
</table>
