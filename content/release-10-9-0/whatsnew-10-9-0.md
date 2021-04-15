---
weight: 10
title: What´s new
layout: bundle
---


Release 10.9.0 includes the following new features or major feature enhancements.

### NEW Loriot LoRa microservice

Cumulocity IoT can now interface with LORIOT Network Server through the Loriot agent microservice. You can:

* Configure the Loriot agent endpoint in LORIOT Network Server using Cumulocity data forwarder.
* Assign a device protocol for the LoRa device for payload processing.
* Decode upstream payload packets using a web-based user interface.
* Post-process raw device data through Cumulocity IoT events.
* Make use of existing Cumulocity IoT features with LoRa devices, like connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

For details, refer to [Loriot LoRa](https://cumulocity.com/guides/protocol-integration/#loriot-lora/) in the *Protocol integration guide*.

### Cockpit

#### NEW reports page

All reports are now displayed under a separate <b>Reports</b> menu item in the navigator. You can create, update and delete reports from this page. The reports look & feel has been updated to align with the dashboards. Also, it is now possible to configure a report to become a top-level navigator menu item.

The <b>Exports</b> menu item has been moved under the <b>Configuration</b> menu.

![Report page](/images/release-notes/cockpit-reports-list.png)

For details, see <a href="https://cumulocity.com/guides/users-guide/cockpit/#reports" class="no-ajaxy">Cockpit > Managing reports and exports</a> in the <em>User guide</em>.

### Administration

#### Default subscription configuration

The user experience for setting the default applications has been improved. The option <b>Default applications for new tenants</b> has been removed from Settings > Configuration > Applications.

A new <b>Default subscriptions</b> page is available in the <b>Applications</b> menu, where default applications for both new tenants and existing ones can be configured.

![Default subscriptions](/images/release-notes/admin-default-subscriptions-inherited.png)

For details, see <a href="https://cumulocity.com/guides/users-guide/enterprise-edition/#managing-tenants" class="no-ajaxy">Enterprise tenant > Managing tenants</a> in the <em>User guide</em>.


#### SMS provider configuration

The <b>SMS provider</b> page has been updated. New providers have been added to be configured.

![SMS providers](/images/release-notes/admin-settings-sms-provider.png)

See also <a href="https://cumulocity.com/guides/users-guide/administration/#openIT-credentials" class="no-ajaxy">Administration > Changing settings > Providing SMS provider credentials</a> in the <em>User guide</em>.

### Device Management

#### Bulk operations

The bulk operations user experience has been enhanced. Among others, the following improvements have been implemented:

* In the bulk operation creation dialog, a <b>Title</b> field has been implemented to change the name of the bulk operation. Moreover, a <b>Description</b> field has been added to provide additional information on the bulk operation.
* In the <b>Bulk operations</b> tab, the details view of bulk operations now shows the audit log. Moreover, the <b>Audit logs</b> page in the Administration application has a filter type for bulk operations.
* The <b>Bulk operations</b> tab is now updated in realtime. The <b>Refresh</b> button has been removed.
* If a bulk operations fails, the user can now manually set the status to successful.
* Devices for bulk operations can now be filtered by groups and subgroups via checkboxes.

For details, see <a href="https://cumulocity.com/guides/users-guide/device-management/#operation-monitoring" class="no-ajaxy">Device Management > Monitoring  and controlling devices > Working with operations</a> in the <em>User guide</em>. </td>
