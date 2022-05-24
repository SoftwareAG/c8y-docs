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

	>**Info:** The header styles "Regular" and "Border" can be used for all widgets while the header styles "Overlay" and "Hidden" remove the header and should only be used for widgets which benefit from a full-screen experience, for example "Image" or "Map". For other widgets, like "Alarms list" or "Data point table", these header styles should not be used.

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

>**Info:** On touch devices like smartphones or tablets some functions may not be supported.

<a name="target-assets"></a>
### Selecting assets in widgets

The following section describes how [to add an asset to an existing widget](#add-asset) as well as to [a new widget](#asset-new-widget), how [to select groups or devices with children as assets](#asset-groups) and how [to search or filter for assets](#asset-search).

<a name="add-asset"></a>
#### To add an asset to a widget
To select an asset for an existing widget follow the steps below:

1. Select the widget in the respective folder in the **Groups** menu in the Cockpit application.
2. Click the cogwheel icon at the top right of the widget and select **Edit** from the context menu.
3. In the resulting dialog box you can now select an asset via the **Asset selection** dropdown field on the left.

The following image shows the dialogue box with an asset being selected. To select another asset, click **Change**.

![Selected asset](/images/users-guide/cockpit/cockpit-asset-selected.png)

You have now selected an asset for a widget.

<a name="asset-new-widget"></a>
#### To add an asset to a new widget
Another option of selection an asset is through adding a new widget. See [To add a widget to a dashboard or a report](#adding-widgets) on how to add a new widget.
In the **Configuration** tab of the **Add widget** window, select an asset via the **Asset selection** dropdown field on the left.

You have now selected an asset for a new widget.

<a name="asset-groups"></a>
### To select groups or devices with children as asset

If the asset is a group or a device with children, you see a folder icon next to their name as well as a chevron icon pointing right. Click the desired group or device with children in the list to open a new column displaying all assigned assets to that group or device. To return to the previous level, click on the back chevron. Click the desired device to select it as an asset.

![Select assets](/images/users-guide/cockpit/cockpit-asset-selection.png)

If you want to select an unassigned device as an asset, unassigned devices can be found in the **Unassigned Devices** node, located on the root level of the selected group.

>**Info:** You cannot select the **Unassigned Devices** node itself. However, all devices inside this node can be selected on the next column level. Click **Unassigned Devices** to open the column with all unassigned devices. Click the desired device to select it.

![Unassigned devices](/images/users-guide/cockpit/cockpit-asset-unassigned-devices.png)

<a name="asset-search"></a>
### To search and filter for assets

There are two methods which can be used to quickly find assets:

1. General search, and
2. column filtering.

<a name="general-search"></a>
#### General search

Through the general search you can find assets in the whole hierarchy, but requires exact matches, for example, the whole name of the asset.
There are two ways of searching for an asset via the global search:

1. Through the **Add widget** button, and
2. by selecting and editing widget.

On the **Configuration** tab in the dialog box for adding or editing a widget you can use the general search.

![General search](/images/users-guide/cockpit/cockpit-asset-global-search.png)

After selecting the asset, you see all children of this asset. To return to the level above, click the "X" in the search field.

![General search clear](/images/users-guide/cockpit/cockpit-asset-clear-search.png)

> **Info:** The global search is only available when there is no asset context, for example, in the "Home" dashboard.

<a name="column-filter-asset"></a>
#### Column filtering

Column filtering is another way to find assets. However, it only filters assets on the current level under **Asset selection**.

![Column filtering](/images/users-guide/cockpit/cockpit-asset-column-filter.png)
