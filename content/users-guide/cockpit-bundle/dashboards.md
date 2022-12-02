---

title: Working with dashboards
helpcontent:
  - label: dashboards
    title: Working with Dashboards
    content: "Dashboards let you visualize your data by using a set of widgets. Widgets can display maps, images, graphs, tables, and other graphic representations of data.


    Click the plus icon next to the dashboard tabs to add a dashboard. You may copy a dashboard from one device to another or you may share a dashboard with all devices of a specific device type.


    On a dashboard, you can rearrange widgets by drag & drop or resize them using the arrow icon. Click **Add widget** in the top menu bar to add a new widget to the dashboard or use the cogwheel icon to edit or remove widgets.


    Cumulocity IoT includes preset widget types, for example alarm or data point lists, linear or radial gauges. Since each widget type displays different data, different parameters are required to configure it. See *Cockpit > Widgets collection* in the *User guide* for details on each widget type and its configuration."
weight: 40
---


Dashboards provide you with a customized visualization of your data by using a set of widgets. Widgets can display maps, images, graphs, tables, and other graphic representations of data.

{{< product-c8y-iot >}} comes with a number of preset widgets, see [Widgets collection](#widgets-collection) for details. You can also develop your own widgets and add them to your {{< product-c8y-iot >}} account. Refer to the [Web SDK guide](/web/) for details.

<a name="creating-dashboards"></a>
### To create a dashboard

1. Select the group or the device in the navigator for which to create a dashboard.
2. Click the plus icon right from the tabs to open the dashboard editor.

  <img src="/images/users-guide/cockpit/cockpit-dashboard-add.png" name="Add dashboard"/>

3. In the **Tab** section of the dashboard editor, provide the following information:

    * An icon which is shown next to the dashboard name in the navigator.
    * A menu label to be used as the name of the dashboard.
    * The location of the dashboard in the navigator, with "10000" being ordered first and "-10000" last
<br><br>
4. Enable the option **Apply dashboard to all devices of type <device type>** to share the dashboard with all devices of this type.
5. In the **Layout** section you can select a theme for the dashboard (one of "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (one of "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (default value is 15 px).
6. Enable the option **Translate widget titles if possible**, to have the widget title translated every time the language is changed.

    {{< c8y-admon-info >}}
The widget titles will be translated only if a valid translation is available.
    {{< /c8y-admon-info >}}
7. In the **Preview** section at the right, a preview of the selected layout settings is immediately displayed to visualize your selections.

8. Click **Save** to create and open the dashboard.

<img src="/images/users-guide/cockpit/cockpit-dashboard-empty.png" name="Empty dashboard"/>

<br>Next, widgets can be added to the report.

Refer to [Using widgets in dashboards and reports](#using-widgets) for details on how to add, modify or remove widgets.

<a name="sharing-dashboards"></a>
### Sharing dashboards

You can create a dashboard for a specific device and share it with all devices of the same type. This is only possible though, if the type property is set for the device.

To do so, select the option **Apply dashboard to all devices of type [TYPE]** ([TYPE] is replaced with the type of the device that is currently selected).

A corresponding message will be displayed in the editor.

<img src="/images/users-guide/cockpit/cockpit-dashboard-share.png" name="Shared dashboard"/>

Changes made to this dashboard are automatically applied to all dashboard instances.

{{< c8y-admon-info >}}
You can only add widgets and data to the dashboard for the device itself. It is not possible to add data from child devices because the structure of these devices might be different from device to device.
{{< /c8y-admon-info >}}

### To edit a dashboard

To edit a dashboard, click **Edit** in the top menu bar.

<img src="/images/users-guide/cockpit/cockpit-dashboard-edit.png" name="Edit dashboard"/>

The dashboard editor will open up. For details on the fields, refer to [To create a dashboard](#creating-dashboards).


### To copy a dashboard from one object to another

1. Click **More...** in the top menu bar and from the context menu select **Copy dashboard**.

  <img src="/images/users-guide/cockpit/cockpit-dashboard-copy.png" name="Copy dashboard"/>

2. Next, navigate to the object you want to copy the dashboard to and from the context menu select **Paste dashboard [NAME]** to insert the dashboard.

An alternative way to copy a dashboard is to use the
"dashboard per type" approach.  With the "dashboard per type" approach you share the dashboard from one object with **all** objects of the same type, see [Sharing dashboards](#sharing-dashboards).


### To delete a dashboard

To delete a dashboard from an object, click **More...** in the top menu bar and from the context menu select **Delete dashboard**.
