---
weight: 50
title: Using widgets in dashboards and reports
layout: redirect
---

Widgets can display maps, images, graphs, tables and other graphic representations of data. Widgets are useful to track information, for example on alarms, assets or applications, or provide maps, quick links and more in dashboards or reports.

{{< product-c8y-iot >}} provides preset widget types, for details see the [Widgets collection](#widgets-collection).

<a name="adding-widgets"></a>
### To add a widget to a dashboard or a report

1. Click **Add widget** in the top menu bar or click the **Add widget** button on the main page (only available in case of an empty dashboard/report).

2. In the **Add widget** dialog, select a widget type.

	<img src="/images/users-guide/cockpit/cockpit-widget-add.png" name="Add widget">

3. Next, configure the widget. According to the selected widget type, different parameters may be specified under **Configuration**. For details on each widget type refer to [Widgets collection](#widgets-collection).

4. In the **Appearence** tab, you can customize the content and header style for the widget individually, in the same way as specifying the layout of a [dashboard](#creating-dashboards).

	<img src="/images/users-guide/cockpit/cockpit-widget-appearance.png" name="Add widget">

	{{< c8y-admon-info >}}
The header styles "Regular" and "Border" can be used for all widgets while the header styles "Overlay" and "Hidden" remove the header and should only be used for widgets which benefit from a full-screen experience, for example "Image" or "Map". For other widgets, like "Alarms list" or "Data point table", these header styles should not be used.
	{{< /c8y-admon-info >}}

5. Click **Save** to add the widget to the dashboard or report.

<a name="modifying-widgets"></a>
### Modifying widgets

Widgets may be rearranged on the dashboard/report. By dragging and dropping you can move the widget to another position.

<img src="/images/users-guide/cockpit/cockpit-dashboard-widgets.png" name="Arrange widgets"/>

By dragging the arrows on the bottom right corner of a widget, you can resize it.

To edit the properties of a widget, click the cogwheel icon at the top right corner of the widget and from the context menu select **Edit**.

<img src="/images/users-guide/cockpit/cockpit-dashboard-widget-menu.png" name="Edit widget"/>

To remove a widget from a dashboard or report, click the cogwheel icon at the top right corner of the widget and from the context menu select **Remove**.

Widgets can only be modified if the dashboard/report is unlocked. To lock/unlock it, use the toggle with the lock icon in the top menu bar.

<img src="/images/users-guide/cockpit/cockpit-dashboard-lock.png" name="Lock dashboard"/>

{{< c8y-admon-info >}}
On touch devices like smartphones or tablets some functions may not be supported.
{{< /c8y-admon-info >}}

<a name="target-assets"></a>
### Selecting assets in widgets

The following section describes how [to select one top-level asset](#add-asset), how [to select child devices as asset](#asset-groups) and how [to search or filter for assets](#asset-search) in the widgets configuration.

<a name="add-asset"></a>
#### To add an asset to a new or existing widget

On the **Configuration** tab of the widget editor, select the check boxes of the desired asset under **Asset selection**. Click **Save** to add the asset to the widget.
You can select a single device or a whole group of devices, indicated by a folder icon. For details on selecting child devices, see [To select child devices within groups as asset](#asset-groups).

If you want to edit an asset of a widget, open the widget editor and click **Clear**. This clears the previous asset collection. Select the new desired asset and click **Save**.  

For general instructions on how to add or modify widgets, see [To add a widget to a dashboard or a report](#adding-widgets) or [Modifying widgets](#modifying-widgets).

<a name="asset-groups"></a>
#### To select child devices as asset

If the asset is a group or a device with children, you see a folder icon next to their name as well as an arrow icon pointing right. Click the desired group or device with children in the list to open a new level displaying all assigned assets to that group or device. Select the desired asset. To return to the previous level, click on the arrow icon pointing left.

![Select assets](/images/users-guide/cockpit/cockpit-asset-selection.png)

If you want to select an unassigned device as an asset, you can find the unassigned devices in the **Unassigned Devices** folder, located on the first level of the selected group.

>**Info:** You cannot select the **Unassigned devices** folder itself. However, each device inside this folder can be selected on the next level. Click **Unassigned devices** to open the next level with all unassigned devices. Click the desired device to select it.


<a name="asset-search"></a>
#### To search and filter for assets

There are two methods which can be used to quickly find assets:

1. Full text search, and
2. filtering.

<a name="general-search"></a>
##### Full text search

On the **Configuration** tab of the widget editor you can use the full text search field under **Asset selection**.

Through the full text search you can find assets in the whole hierarchy, but it requires exact matches, for example, the whole name of the asset.

![Full text search](/images/users-guide/cockpit/cockpit-asset-global-search.png)

After selecting the asset, you see all children of this asset. To return to the level above, click the "X" in the search field.

> **Info:** The full text search is only available in the Home dashboard and the Report dashboards.

For details on the search functionality, see [Getting Started > UI functionalities and features > Search and filter functionality](/users-guide/getting-started/#searching-and-filtering).

<a name="column-filter-asset"></a>
##### Filtering

Filtering is another way to find assets. However, it only filters assets on the current level under **Asset selection**.

![Filtering](/images/users-guide/cockpit/cockpit-asset-column-filter.png)

For details on the filter functionality, see [Getting Started > UI functionalities and features > Search and filter functionality](/users-guide/getting-started/#searching-and-filtering).

