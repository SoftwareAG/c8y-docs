---
weight: 30
title: Data explorer
layout: redirect
helpcontent:
  - label: data-explorer
    title: Data explorer
    content: "In the data explorer, data points, (that is, measurements or sensor data) can be visualized. On the right, you see a list of available data points. On the left, you see its visualization.


    Click **Add data point** to add more data points to the data explorer. In addition, you can also add alarms or events.


    You can modify the visualization of the data explorer, for example change the time range being shown or aggregate the data being displayed to get an efficient overview over larger time periods.


    The data explorer can be sent as widget to a dashboard or downloaded as CSV or Excel file."
---


In the data explorer, data points (that is measurements or sensor data) can be visualized.


The data explorer is available for all assets or just for a particular asset.

* Click **Data explorer** in the navigator to visualize all data points of all assets.

* Navigate to a particular asset and switch to the **Data explorer** tab to visualize all data points of this particular asset and its subassets.

In the data explorer, you see a list of available data points at the right. The first five data points of the selected device or group are shown by default. For details on how to add data points see [Adding data points](#add-data-points).

On the left, in the main card, you see its visualization.

![data explorer](/images/users-guide/cockpit/cockpit-dataexplorer.png)

The visualization is generated based on data point properties.

The data points properties are pre-filled as follows:

* If these properties have been customized previously, these values are used, see [Customizing data point properties](#customize-data-points).

* If the data points have a matching definition in the data point library, the values from the data point library are used.

There can be more than one matching data point entry in the data point library. In this case, the first one is selected automatically by the system. You can overwrite this selection by clicking the menu icon of the respective data point and selecting **Load [NAME] from library**.

![edit data points](/images/users-guide/cockpit/cockpit-dataexplorer-edit.png)

For details on modifying the visualization in general, see [Changing data explorer visualization](#change-visualization). For details on customizing the properties of a particular data point, see [Customizing data point properties](#customize-data-points).

Click **Save as default** to store the data point settings into the device's managed object. These settings will then take precedence over the settings from the data point library, for example, when this data point is added to a data explorer by other users, or when there is a threshold smart rule processing this device and its data point. If you want to restore the data point library default settings, click **Load from library** and then click **Save as default**.

**Example:**

Let's assume you have a temperature data point defined in the library and a device which sends temperature measurements (matching by fragment and series with the data point in the library). If you create an "On measurement threshold create alarm" smart rule and select the data point from the library, then it will use the settings from the library to decide whether to create an alarm. However, if you change this data point's settings for your device in the data explorer and click **Save as default**, then the smart rule will use these overridden settings instead of the ones from the library. For other devices though, it will still use the settings from the library.

{{< c8y-admon-info >}}
Data points are visible to all authenticated users of the tenant, regardless of their inventory role permission.
{{< /c8y-admon-info >}}

<a name="change-visualization"></a>
### Changing data explorer visualization

To change the visualization in the data explorer, you can modify several properties.

**Time range**

You can change the time range being shown. By default, you see the values for the last hour.

To change the time range on the x-axis,

* select a different time range from the dropdown list in the top menu bar,
* enter a custom time range into the **From** and **To** fields in the data explorer,
* drag the x-axis and move left or right to move the time period,
* double-click into the data explorer to zoom out.

{{< c8y-admon-info >}}
Real-time updates will be switched off if you set a time range in the past.
{{< /c8y-admon-info >}}

**Aggregation**

You may aggregate the data being displayed to get an efficient overview over larger time periods.

By default, aggregation is set to "None". This value may be changed in the **Aggregation** field in the top menu bar. Available values are "Minutely", "Hourly" or "Daily", depending on the selected time range.

When aggregation is activated, the timestamp which is displayed in data point graphs or data point tables changes slightly as follows to improve transparency:

* If no aggregation is selected the date, hour, minute and second are shown:<br> 27 Jan 2020 17:26:55
* If minutely aggregation is selected, the second indication will not be shown:<br> 27 Jan 2020 17:27-17:28
* If hourly aggregation is selected, the minute and second indication will not be shown:<br> 27 Jan 2020 05:00-06:00
* If daily aggregation is selected, only the day will be shown:<br> 27 Jan 2020-28 Jan 2020.


**Realtime updating**

By default, realtime updating is enabled which means that the data being shown is updated as new data flows into the system from the connected devices.

To turn realtime updating on or off, click **Realtime** in the top menu bar. A green light indicates, that realtime updating is enabled.


**Data point visibility**

For each data point, its visibility can be switched on or off by using the toggle left from the data point name.

<a name="add-data-points"></a>
### To add a data point

To add a data point to the data explorer, click **Add data point** at the bottom of the **Data points** card.

![Add data point](/images/users-guide/cockpit/cockpit-dataexplorer-adddatapoint.png)

In the top of the dialog, select a device from the asset hierarchy. Only the asset hierarchy below the objects selected in the navigator is visible. If **Data explorer** in the navigator was selected, the complete asset hierarchy is visible.

The bottom of the dialog shows all data points of the selected object. Select the data points you want to show in the data explorer. Click **Add** to add all selected data points to the list of data points.

To save the data point to the data point library, click the menu icon of the data point and from the context menu select **Save to library**.

![Save data point to library](/images/users-guide/cockpit/cockpit-dataexplorer-savedatapoint.png)

For details on the data point library refer to [Data point library](#data-point-library).

To remove a data point from the data point list, click the menu icon and select **Remove from list**.

<a name="customize-data-points"></a>
### Customizing data point properties

You can customize the visualization of a particular data point to your preferences. To do so, expand the data point entry in the data point list.

The following fields my be modified:

<table>
<col style="width:15%">
<col style="width:85%">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Label</td>
<td style="text-align:left">Name of the data point, displayed on the y-axis to identify the data point. Below the label, the target is displayed, showing the name of the asset and the internal name of the data point (measurement fragment and series). This information is not editable.</td>
</tr>
<tr>
<td style="text-align:left">Unit</td>
<td style="text-align:left">Unit used on the y-axis. </td>
</tr>
<tr>
<td style="text-align:left">Min/Max</td>
<td style="text-align:left">Range shown on the y-axis. If not specified, the y-axis is scaled based on measurement values retrieved per specified time range.</td>
</tr>
<tr>
<td style="text-align:left">Target</td>
<td style="text-align:left">The target value is currently not shown in the diagram. The value is used in the "Data point list" widget.</td>
</tr>
<tr>
<td style="text-align:left">Yellow range min/max</td>
<td style="text-align:left">Defines the range when MINOR alarms should be raised by threshold rule.  </td>
</tr>
<tr>
<td style="text-align:left">Red range min/max</td>
<td style="text-align:left">Defines the range when CRITICAL alarms should be raised by threshold rule.</td>
</tr>
<tr>
<td style="text-align:left">Display</td>
<td style="text-align:left">Value displayed when data is aggregated. May be "Minimum", Maximum", Minimum and maximum".</td>
</tr>
<tr>
<td style="text-align:left">Chart type</td>
<td style="text-align:left">The type of chart used for the visualization. May be one of "Line", "Points", "Line and points", "Bars", "Step before" (alternating between vertical and horizontal segments, as in a step function) or "Step after" (alternating between horizontal and vertical segments). Default value is "line".</td>
</tr>
<tr>
<td style="text-align:left">Y axis</td>
<td style="text-align:left">Defines where the y-axis is shown. May be one of "Auto", "Left", "Right". Default value is "Auto". </td>
</tr>
</tbody>
</table>

After customizing the properties of a data point, you can save the modified settings to the data point library. Click the menu icon and from the context menu select **Update [NAME] to library**.

To return to the properties stored in the data point library to a data point, select **Load [NAME] from library**.

### Y-axis behaviour

Per default, the first data point is positioned to the left y-axis and the remaining data points to the right. This behavior can be changed by modifying the respective value "Y-axis" for a particular data point (to "Left" or "Right", see above).

Each data point is shown on its own y-axis, unless the following condition is met:

* Two data points having the same minimum and the same maximum value.

In this case, both data points share the same y-axis. This y-axis only shows the unit (or multiple units, in case they are different). The label is not shown.

### Adding alarms or events

In addition to data points you can also add alarms or events to the data explorer.

In the **Alarms/ Events** card, click **Add alarm/ event** to add an alarm or event.

![Data explorer add events](/images/users-guide/cockpit/cockpit-dataexplorer-eventsadd.png)

In the upcoming dialog, you can select an alarm or event from the list of recent alarms and events. Click **Add** to add your selection.

Expand an event, to modify its properties.

Click the menu icon and in the context menu select **Remove**, to remove the entry from the list.

As with data points, you can turn the visibility of an alarm/ event in the data explorer on and off by using the toggle.

<a name="create-widget"></a>
### Creating widgets from the data explorer

If you want to keep your current configuration in the data explorer for later usage, save it as a widget.

**Send as widget to dashboard**

To create a widget from the data explorer of a particular asset, click **More...** in the top menu bar and select **Send as widget to dashboard** from the context menu.

![Data explorer add events](/images/users-guide/cockpit/cockpit-dataexplorer-sendwidget.png)

In the upcoming dialog, select one of the dashboards available for the current object and click **Select** to add the data explorer as widget to the selected dashboard.

{{< c8y-admon-info >}}
To use this function, first a dashboard must be created. For details on dashboards, refer to [Working with dashboards](#dashboards).
{{< /c8y-admon-info >}}

**Send as widget to report**

To create a widget from the data explorer of in the navigator, click **More...** in the top menu bar and select **Send as a widget to report** from the context menu.

![Data explorer add events](/images/users-guide/cockpit/cockpit-dataexplorer-sendwidget.png)

In the upcoming dialog, select one of the reports available and click **Select** to add the data explorer as widget to the selected report.

{{< c8y-admon-info >}}
To use this function, first a report must be created. For details on reports, refer to [Working with reports](#reports).
{{< /c8y-admon-info >}}

<a name="export-data"></a>
### Exporting measurement data

You may download measurement data as CSV or Excel files. The exported data shows the following information, divided into columns:

 - Time when the specific measurement was taken
 - Source of the measurement
 - Name of the device being used
 - Fragment series (for example `c8y_SpeedMeasurement`)
 - Value of the measurement
 - Unit used for a particular measurement (for example "C", "km/h", "sec")

To export measurement data, click the **More...** button in the top menu bar and select either **Download as CSV** or **Download as Excel**, according to your preferences.

The download will be generated, as shown in the upcoming dialog. This make take a while, depending on the number of data points added to the data explorer. Once the loading has been completed, click **Download**.
