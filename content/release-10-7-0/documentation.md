---
weight: 100
title: Documentation
layout: bundle
---

The 10.7.0 documentation contains

* all description enhancements and updates resulting from new features and improvements in the product,
* a variety of documentation changes and fixes to permanently improve the documentation quality and make it clearer.

Moreover, you can find the following major enhancements, improvements and fixes in the area of documentation.

### Major enhancements

#### Device SDK guide - NEW Linux agent documentation

[MTM-34081] Documentation has been added to the *Device SDK guide* for the Cumulocity IoT Linux Agent.

The [*Linux Agent User guide*](https://cumulocity.com/guides/device-sdk/linux-agent-user-guide) describes prerequisites, how to build the agent, basic configurations, how to start the agent process, and how to build packages from an end user perspective. 

The [*Linux Agent Developer guide*](https://cumulocity.com/guides/device-sdk/linux-agent-developer-guide) contains various Lua plugin examples (Hello world, sending measurements, restart your machine, and more) for developers. 

#### NEW Protocol integration guide

[MTM-29779] The documentation for the device integration protocols (like LWM2M, Sigfox and OPC UA) has been moved into a separate guide called [*Protocol integration guide*](https://cumulocity.com/guides/protocol-integration/overview) to provide a clearer structure and easier navigation.

![Protocol integration guide](/images/release-notes/new-protocol-integration-guide.png)

#### Cloud Remote Access - NEW API documentation

Information on the Cloud Remote Access API has been added to the Cloud Remote Access documentation. 

As a result, the Cloud Remote Access documentation, which formerly could be found in the *Optional services* section of the *User guide*, has been moved into a separate [*Cloud Remote Access guide*](https://cumulocity.com/guides/cloud-remote-access/cra-general-aspects/), providing a clearer structure and easier navigation.

![Cloud Remote Access guide](/images/release-notes/cloud-remote-access-guide.png)

#### Installation and operations guides

In addition to the Installation & Operations guides already provided for previous versions, the following new guides are now available through the [Software AG Empower Portal](https://documentation.softwareag.com/):

* **Cloud Remote Access** - Installation & operations guide
* **Connectivity** - Installation & operations guide
* **Actility microservice** - Installation & operations guide
* **SNMP microservice** - Installation & operations guide

Note, that access to these documents on the Empower Portal requires credentials.

### Improvements

<div><table ><colgroup>
<col style="width: 15%;"><col style="width: 15%;"><col style="width: 55%;"><col style="width: 15%;"></colgroup>
<thead><tr>
<th>
Guide</th>
<th>
Component</th>
<th>
Description</th>
<th>
Issue</th>
</tr>
</thead><tbody>

<tr>
<td>
User guide</td>
<td>
Cockpit</td>
<td > Details on the functionality of the smart rule “On measurement threshold create alarm” have been updated in <a href="https://cumulocity.com/guides/10.7.0/users-guide/cockpit/#smart-rules-collection" class="no-ajaxy">Cockpit > Smart rules collection</a>. </td>
<td>
MTM-34765</td>
</tr>

<tr>
<td>
User guide</td>
<td>
Cockpit</td>
<td > Added a note on filtering to the export description, see also <a href="https://cumulocity.com/guides/10.7.0/users-guide/cockpit#report" class="no-ajaxy">Cockpit > Managing reports and exports</a>. If you select a group, the export will contain the data of direct child devices but the data of devices in subgroups (indirect children) will not be included.</td>
<td>
MTM-35116</td>
</tr>

<tr><td>
User guide</td>
<td>
Enterprise tenant</td>
<td > The documentation on tenant usage statistics has been improved.  </td>
<td>
MTM-32208</td>
</tr>

<tr><td>
User guide</td>
<td>
Enterprise tenant</td>
<td >  The Enterprise tenant section has been updated to include the support of full chain certificates. For details, see <a href="https://cumulocity.com/guides/10.7.0/users-guide/enterprise-edition#customization" class="no-ajaxy">Enterprise Tenant > Customizing your platform</a>. </td>
<td>
MTM-32145</td>
</tr>

<tr><td>
User guide</td>
<td>
Enterprise tenant</td>
<td > The documentation on metering and billing of microservices has been extended to improve transparency. Additional information is provided on the general process, i.e. when and how the metering and the billing starts/suspends/stops. Moreover, some typical scenarios, for example for different time zones, are explained in detail. See <a href="https://cumulocity.com/guides/10.7.0/users-guide/enterprise-edition/#usage-and-billing" class="no-ajaxy">Enterprise Tenant > Usage statistics and billing</a>.</td>
<td>
MTM-33651</td>
</tr>

<tr>
<td>
Reference guide</td>
<td>
Inventory API</td>
<td > Updated documentation for an edge case when loading managed objects without inventory role, see <a href="https://cumulocity.com/guides/10.7.0/reference/inventory/#managed-object-collection" class="no-ajaxy">Inventory > Managed object collection</a>. </td>
<td>
MTM-33763</td>
</tr>

</tbody></table></div>


### Fixes

<div><table ><colgroup>
<col style="width: 15%;"><col style="width: 15%;"><col style="width: 55%;"><col style="width: 15%;"></colgroup>
<thead><tr>
<th>
Guide</th>
<th>
Component</th>
<th>
Description</th>
<th>
Issue</th>
</tr>
</thead><tbody>

<tr>
<td>
Protocol integration guide</td>
<td>
OPCUA</td>
<td > The <a href="https://cumulocity.com/guides/10.7.0/protocol-integration/opcua" class="no-ajaxy">OPC UA documentation</a> has been updated to state that the name of the user that runs the gateway is set as gateway identifier and as name by default if not provided.</td>
<td>
MTM-31428</td>
</tr>

</tbody></table></div