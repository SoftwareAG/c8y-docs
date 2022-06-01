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
