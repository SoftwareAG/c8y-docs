---
weight: 10
title: Overview
layout: redirect
---

The following sections will walk you through all functionalities of the Cockpit application in detail.

For your convenience find an overview on the content of this document below.

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Section</th>
<th align="left">Content</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="#managing-assets">Managing assets</a></td>
<td align="left">Organize assets in <a href="#hierarchies">hierarchies</a> by <a href="#creating-groups">creating groups</a> and <a href="#assigning-devices">assigning devices</a>.</td>
</tr>
<tr>
<td align="left"><a href="#data-explorer">Visualizing data using the Data Explorer</a></td>
<td align="left">Interactively explore, compare and visualize IoT data. <br> Describes how to access and use the <a href="#data-explorer">data explorer</a>, <a href="#add-data-points">add data points</a> to the data explorer, <a href="#customize-data-points">customize data point properties</a>, <a href="#change-visualization">modify the visualization</a>, store the <a href="#create-widget">data explorer as widget</a>, and <a href="#export-data">export</a> the data.</td>
</tr>
<tr>
<td align="left"><a href="#dashboards">Working with dashboards</a></td>
<td align="left"><a href="#creating-dashboards">Create your own analytics and monitor pages</a> by adding and arranging <a href="#adding-widgets">widgets</a>. <a href="#sharing-dashboards">Share dashboards</a> among all devices of the same type.</td>
</tr>
<tr>
<td align="left"><a href="#widgets">Widgets collection</a></td>
<td align="left">Use various types of <a href="#widgets">widgets</a> from the Widgets collection that comes with Cumulocity and configure them according your needs.</td>
</tr>
<tr>
<td align="left"><a href="../../users-guide/device-management/#alarm-monitoring">Working with alarms</a></td>
<td align="left">Monitor problems of your assets using severities and workflows. Since working with alarms in the Cockpit application is actually the same as working with alarms in Device Management, refer to <a href="../../users-guide/device-management/#alarm-monitoring">Working with alarms</a> in Device Management.</td>
</tr>
<tr>
<td align="left"><a href="#reports">Managing reports</a></td>
<td align="left">Handle <a href="#reports">reports</a> based on dashboard layouts, create <a href="#export">reports for exporting data</a> in CSV or excel format and <a href="#schedule-export">schedule the export</a>.</td>
</tr>
<tr>
<td align="left"><a href="#data-point-library">Using the Data Point Library</a></td>
<td align="left">Manage default settings (“profiles”) of your devices and apply them automatically using the <a href="#data-point-library">Data Point Library</a>.</td>
</tr>
<tr>
<td align="left"><a href="#smart-rules">Working with Smart Rules</a></td>
<td align="left"><a href="#create-rules">Create and manage business rules</a> to work on incoming data in realtime and to perform actions based on this data.</td>
</tr>
<tr>
<td align="left"><a href="#smart-rules-collection">Smart Rules collection</a></td>
<td align="left">Use pre-defined <a href="#smart-rules-collection">global Smart Rules</a> to configure rules for geofencing, thresholds or alarm escalation and notifications (SMS/email/voice). Describes each SmartRule and its configurable parameters in detail.</td>
</tr>
</tbody>
</table>

If you want to learn more about general aspects of the Cumulocity platform and its applications, refer to [Getting Started](/users-guide/overview).

### <a name="home"></a>Home dashboard

The Home screen of the Cockpit application is a dashboard which shows data for the general tenant.

![image alt text](/images/users-guide/cockpit/cockpit-home-screen.png)

The data shown on the Home dashboard is shared by all users of the tenant. By default, the Home dashboard includes a welcome message, the active critical alarms, recent alarms and a map of all objects.

The Home dashboard can be edited and designed individually according to your needs. You can add, remove or change widgets being displayed here.

For details on editing a dashboard, refer to [Working with dashboards](#dashboards).

To reset the Home dashboard to its original content, click **More...** at the right of the top menu bar and then click **Restore dashboard**.
