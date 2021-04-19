---
weight: 100
title: Documentation
layout: bundle
---

The 10.9.0 documentation contains

* all description enhancements and updates resulting from new features and improvements in the product,
* a variety of documentation changes and fixes to permanently improve the documentation quality and make it clearer.

Moreover, you can find the following major enhancements, improvements and fixes in the area of documentation.

### New guides

#### Open API specification

A new Open API Specification for the Cumulocity IoT REST API is available at [https://cumulocity.com/api](https://cumulocity.com/api). The new specification describes the entire Cumulocity IoT REST API (i.e. available endpoints, operations on each endpoint, input and output for each operation, authentication methods and more) following the OpenAPI 3.0 standard.

![Open API specification](/images/release-notes/open-api-new.png)

The new specification is an enhancement of the former *Reference guide* and replaces it, starting with release 10.9.0.


#### Release notes

A new page is available which holds the release notes from all versions (back to GA release 10.4.0) and from all Cumulocity IoT products (Platform, Edge, Streaming Analytics, Machine Learning, DataHub).

![Release notes](/images/release-notes/release-notes-new-page.png)

The new release notes page is accessible through the dropdown list on the documentation website.  

<!--add screenshot-->

#### Installation and operations guides

In addition to the Installation & Operations guides already provided for previous versions, the following new guides are now available through the [Software AG Empower Portal](https://documentation.softwareag.com/):

* **Loriot LoRa** - Installation & operations guide
* **SMS provider microservice** - Installation & operations guide
* **Report agent** - Installation & operations guide

Moreover, a new document **Operations release notes** is provided which lists all improvement or fixes related to the installation or operation of the Cumulocity IoT platform.

Note, that access to these documents on the Empower Portal requires credentials.


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
Concepts guide</td>
<td>
Tenant hierarchy</td>
<td > A new chapter has been added to the Concepts guide, which describes the tenant hierachy and the concept of multi-tenancy in the Cumulocity IoT platform, see <a href="https://cumulocity.com/guides/concepts/tenant-hierarchy/" class="no-ajaxy">Tenant hierachy</a>.</td>
<td>
MTM-35717</td>
</tr>

<tr>
<td>
Device SDK guide</td>
<td>
Device integration using MQT</td>
<td > The documentation about device certificates has been extended, see <a href="https://cumulocity.com/guides/device-sdk/mqtt/#device-certificates" class="no-ajaxy">Device integration using MQTT > Device certificates</a>.</td>
<td>
MTM-35717</td>
</tr>

<tr>
<td>
Protocol integration guide</td>
<td>
Loriot LoRa</td>
<td > Documentation has been added to the Protocol integration guide for the new agent <a href="https://cumulocity.com/guides/protocol-integration/lora-loriot/" class="no-ajaxy">Loriot LoRa</a>. </td>
<td>
MTM-36385</td>
</tr>

<tr>
<td>
Protocol integration guide</td>
<td>
LWM2M </td>
<td > Explanation has been added to the documentation, why the Credentials field in the LWM2M bulk registration CSV is mandatory and why & how it has to be unique, see <a href="https://cumulocity.com/guides/protocol-integration/lwm2m/#register-device" class="no-ajaxy">LWM2M > Registering LWM2M devices</a>. </td>
<td>
MTM-35316</td>
</tr>


<tr>
<td>
User guide</td>
<td>
Cockpit</td>
<td > The description of the smart rules behavior has been updated to achieve more clarity, see <a href="https://cumulocity.com/guides/users-guide/cockpit/#smart-rules" class="no-ajaxy">Cockpit > Smart rules</a>.</td>
<td>
MTM-35582</td>
</tr>

<tr>
<td>
User guide</td>
<td>Cockpit</td>
<td > The documentation on exports and reports has been enhanced to reflect the new UI behavior. You can now find two sections, Working with reports and Managing exports, instead of one, see <a href="https://cumulocity.com/guides/users-guide/cockpit/#overview/" class="no-ajaxy">Cockpit</a>. </td>
<td>
MTM-35165</td>
</tr>

<tr>
<td>
User guide</td>
<td>
Cockpit</td>
<td > The description of the behavior of the red and yellow ranges in the smart rule "On measurement threshold create alarm" has been extended, see <a href="https://cumulocity.com/guides/users-guide/cockpit/#on-measurement-threshold-create-alarm" class="no-ajaxy">Cockpit > Smart rules collection > On measurement threshold create alarm</a>. </td>
<td>
MTM-35724</td>
</tr>

<tr>
<td>
User guide</td>
<td>
Device Management</td>
<td > The documentation on managing device data reflects various functional improvements in the software, firmware and configuration repositories, see <a href="https://cumulocity.com/guides/users-guide/device-management/#managing-device-data" class="no-ajaxy">Managing device data</a>. </td>
<td>
MTM-36884</td>
</tr>

<tr>
<td>
Web SDK guide</td>
<td>
</td>
<td > The <a href="https://cumulocity.com/guides/web/overview/" class="no-ajaxy">Web SDK guide</a> has been re-organized to better reflect the current state of the Web SDK and improve clarity. </td>
<td>
MTM-36884</td>
</tr>

<tr>
<td>
Website</td>
<td>
Hugo</td>
<td > The Hugo version used for generating the documentation website at <a href="https://cumulocity.com/guides/about-doc/" class="no-ajaxy">https://cumulocity.com/guides</a> has been updated from 0.55.0 to 0.80.0. </td>
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
Cumulocity IoT OpenAPI Specification</td>
<td>
Inventory API</td>
<td > Updated documentation for an edge case when loading managed objects without inventory role, see <a href="https://cumulocity.com/api/#tag/Managed-objects" class="no-ajaxy">Inventory > Managed objects</a>.</td>
<td>
MTM-33763</td>
</tr>

<tr>
<td>
User guide</td>
<td>
Enterprise tenant</td>
<td > Updated the list of non-editable fields in the subtenants <b>Properties</b> tab in the documentation, see <a href="https://cumulocity.com/guides/users-guide/enterprise-edition/#managing-tenants" class="no-ajaxy">Enterprise Tenant > Managing tenants</a>.</td>
<td>
MTM-35001</td>
</tr>

<tr>
<td>
User guide</td>
<td>
Enterprise tenant</td>
<td > The description of the handling of custom domain names has been improved for more clarity, see <a href="https://cumulocity.com/guides/users-guide/enterprise-edition/#customization" class="no-ajaxy">Enterprise Tenant > Customizing your platform</a> in the <i>User guide</i>.</td>
<td>
MTM-33926</td>
</tr>

</tbody></table>
