---
weight: 100
title: Documentation
layout: bundle
---

The 10.7.0 documentation contains

* all description enhancements and updates resulting from new features and improvements in the product,
* a variety of documentation changes and fixes to permanently improve the documentation quality and make it clearer.

Moreover, you can find the following improvements and major fixes in the area of documentation.

### Improvements

<table ><colgroup>
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
Cloud Remote Access</td>
<td>
API</td>
<td > Information on the Cloud Remote Access API has been added to the Cloud Remote Access documentation. 
<br>As a result, the Cloud Remote Access documentation, which formerly could be found in the <i>Optional services</i> section of the <i>User guide</i>, has been moved into a separate <a href="https://cumulocity.com/guides/10.7.0/cloud-remote-access/cra-general-aspects/" class="no-ajaxy">Cloud Remote Access guide</a>, providing a clearer structure and easier navigation.
<td>
MTM-34081</td>
</tr>

<tr>
<td>
Device SDK guide</td>
<td>
Linux agent</td>
<td > Documentation has been added for the Cumulocity IoT Linux Agent.

<br>The <a href="https://cumulocity.com/guides/10.7.0/device-sdk/linux-agent-user-guide" class="no-ajaxy">Linux Agent user guide</a> describes prerequisites, how to build the agent, basic configurations, how to start the agent process, and how to build packages from an end user perspective. 

<br>The <a href="https://cumulocity.com/guides/10.7.0/device-sdk/linux-agent-developer-guide" class="no-ajaxy">Linux Agent developer guide</a> contains various Lua plugin examples (Hello world, sending measurements, restart your machine, and more) for developers.
<td>
MTM-34081</td>
</tr>

<tr>
<td>
Installation & operations documentation</td>
<td>
NEW guides</td>
<td > The following new Installation & operations guides are now available through the <a href="https://documentation.softwareag.com/" class="no-ajaxy">Software AG Empower Portal</a>:
<br>- <i>Cloud Remote Access</i> 
<br>- <i>Connectivity</i> 
<br>- <i>Actility microservice</i>
<br>- <i>SNMP microservice</i> 
<br>Note, that access to these documents on the Empower Portal requires credentials.

<td>
</td>
</tr>

<tr>
<td>
Protocol integration guide</td>
<td>
NEW</td>
<td > The documentation for the device integration protocols (like LWM2M, Sigfox and OPC UA) has been moved into a separate guide called <a href="https://cumulocity.com/guides/10.7.0/protocol-integration/overview" class="no-ajaxy">Protocol integration guide</a> to provide a clearer structure and easier navigation.
<td>
MTM-29779</td>
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
Website</td>
<td>
Hugo</td>
<td > The Hugo version used for generating the documentation website at https://cumulocity.com/guides/about-doc/ has been updated from 0.55.0 to 0.80.0. </td>
<td>
MTM-34547</td>
</tr>

</tbody></table>


### Fixes

<table ><colgroup>
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

</tbody></table>