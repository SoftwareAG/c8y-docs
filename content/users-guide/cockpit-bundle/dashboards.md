---
weight: 40
title: Dashboards 
layout: redirect
---

Dashboards provide you with a customized visualization of your data by using a set of widgets. Widgets can display maps, images, graphs, tables and other graphic representations of data. 

Cumulocity comes with a number of preset widgets, see [Widgets Collection](#widgets) for details. You can also develop your own widgets and add them to your Cumulocity account. Refer to the [Web SDK Guide](/guides/web/) for details.

### <a name="creating-dashboards"></a>To create a dashboard

Select the group or the device in the navigator for which to create a dashboard. 

Click the **Plus** button in the top bar and from the context menu select **New dashboard**. 

<img src="/images/users-guide/cockpit/cockpit-dashboard-menu.png" name="New dashboard"/>

The dashboard editor opens.

<img src="/images/users-guide/cockpit/cockpit-dashboard-create.png" name="Create dashboard"/>

In the **Dashboard info** section of the dashboard editor, provide the following information:

* A menu label to be used as the name of the dashboard
* The location of the dashboard in the navigator, with "10000" being ordered first and "-10000" last
* An icon which is shown next to the dashboard name in the navigator

In the **Dashboard layout** section you can select a theme for the dashboard (one of "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (one of "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (default value is 15 px).

Additionally, you can enable the option "Translate widget titles if possible". If enabled, the widget title will be translated every time the language is changed.

> **Info:** The widget titles will be translated only if a valid translation is available. 

A preview of the selected layout settings is immediately displayed in the "Preview" section at the right to visualize your selections.

Click **Save** to create and open the dashboard. 

Since there will be no widgets on the dashboard yet, you will see an **Add Widget** button instead.

<img src="/images/users-guide/cockpit/cockpit-dashboard-empty.png" name="Empty dashboard"/> 


### <a name="adding-widgets"></a>Adding a widget to a dashboard

To add a widget to a dashboard, click the **Add widget** button (in case of an empty dashboard) or click **Add widget** in the top menu bar.

<img src="/images/users-guide/cockpit/cockpit-dashboard-widget-add.png" name="Add widget"/> 

In the upcoming dialog, select a widget type from the dropdown list. Depending on the widget type selected, additional fields and checkboxes will be displayed to be filled in or selected. For details on all widgets refer to [Widgets Collection](#widgets). 

Click **Customize widget style** to customize the content and header style for the widget individually, in the same way as specifying the general layout of the [dashboard editor](#creating-dashboards).

Click **Save** to add the widget to the dashboard.

### Modifying widgets on a dashboard

Widgets may be rearranged on the dashboard. By dragging and dropping you can move the widget to another position. 

<img src="/images/users-guide/cockpit/cockpit-dashboard-widgets.png" name="Arrange widgets"/> 

By dragging the arrows on the bottom right corner of a widget, you can resize it. 

To edit the properties of a widget on a dashboard, click the cogwheel icon at the top right corner of the widget and from the context menu select **Edit**.

<img src="/images/users-guide/cockpit/cockpit-dashboard-widget-menu.png" name="Edit widget"/> 

To delete a widget from a dashboard, click the cogwheel icon at the top right corner of the widget and from the context menu select **Remove**.

Widgets can only be modified, if the dashboard is unlocked. To lock/unlock a dashboard, use the slider with the lock icon on the top menu bar.

<img src="/images/users-guide/cockpit/cockpit-dashboard-lock.png" name="Lock dashboard"/> 

>**Info:** On touch devices like smartphones or tablets some functions may not be supported.


### <a name="sharing-dashboards"></a>Sharing dashboards

You can create a dashboard for a specific device and share it with all devices of the same type. This is only possible though, if the type property is set for the device.

To do so, select the option **Apply dashboard to all devices of type [TYPE]** ([TYPE] is replaced with the type of the device that is currently selected).

A corresponding message will be displayed in the editor.

<img src="/images/users-guide/cockpit/cockpit-dashboard-share.png" name="Shared dashboard"/> 

Changes made to this dashboard are automatically applied to all dashboard instances.

> **Info:** You can only add widgets and data to the dashboard for the device itself. It is not possible to add data from child devices because the structure of these devices might be different from device to device.


### Editing dashboard properties

To edit a dashboard, click **Edit** in the top menu bar. 

<img src="/images/users-guide/cockpit/cockpit-dashboard-edit.png" name="Edit dashboard"/> 

The dashboard editor will open up. For details on the fields, refer to [Creating dashboards](#creating-dashboards).


### Copying dashboards

To copy a dashboard from one object to another, click **More...** in the top menu bar and from the context menu select **Copy dashboard**. 

<img src="/images/users-guide/cockpit/cockpit-dashboard-copy.png" name="Copy dashboard"/> 

Next, navigate to the object you want to copy the dashboard to and from the context menu select **Paste dashboard [NAME]** to insert the dashboard.

An alternative way to copy a dashboard is to use the 
"dashboard per type" approach.  With the "dashboard per type" approach you share the dashboard from one object with **all** objects of the same type.


### How to remove a dashboard

To remove a dashboard from an object, click **More...** in the top menu bar and from the context menu select **Remove dashboard**. 
