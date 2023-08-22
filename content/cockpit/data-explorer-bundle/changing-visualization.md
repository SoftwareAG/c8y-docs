---
weight: 20
title: Changing visualization
layout: bundle
section:
  - app_development
helpcontent:
  - label: data-explorer
    title: Data explorer
    content: "In the data explorer, data points, (that is, measurements or sensor data) can be visualized. On the right, you see a list of available data points. On the left, you see its visualization.


    Click **Add data point** to add more data points to the data explorer. In addition, you can also add alarms or events.


    You can modify the visualization of the data explorer, for example change the time range being shown or aggregate the data being displayed to get an efficient overview over larger time periods.


    The data explorer can be sent as widget to a dashboard or downloaded as CSV or Excel file."
---

In the data explorer, data points (that is measurements or sensor data) can be visualized.

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

- To view and select all available data points: READ permission for permission type "Inventory" or READ permission for "Inventory" in the inventory roles
- To visualize already selected data points: READ permission for permission type "Measurements" or READ permission for "Measurements" in the inventory roles
- To send as widget to report/dashboard: ADMIN permission for permission type "Inventory"

Note that data points existing in the data point library are visible by anyone without the need of any permission.
{{< /c8y-admon-req >}}

The data explorer is available for all assets at once or just for a particular asset.

- Click **Data explorer** in the navigator to visualize all data points of all assets.

- Navigate to a particular asset and switch to the **Data explorer** tab to visualize all data points of this particular asset and its subassets.

In the data explorer, you see a list of available data points at the right. The first five data points of the selected device or group are shown by default. For details on how to add data points see [To add a data point](/cockpit/data-explorer/#to-add-a-data-point).

On the left, in the main card, you see its visualization.

![Data explorer](/images/users-guide/cockpit/cockpit-dataexplorer.png)

The visualization is generated based on data point properties.

The data points properties are pre-filled as follows:

* If these properties have been customized previously, these values are used, see [To customize data point properties](#customize-data-points).

* If the data points have a matching definition in the data point library, the values from the data point library are used.

There can be more than one matching data point entry in the data point library. In this case, the first one is selected automatically by the system.

For details on modifying the visualization in general, see [Changing data explorer visualization](#change-visualization). For details on customizing the properties of a particular data point, see [To customize data point properties](#customize-data-points).

**Example:**

Let's assume you have a temperature data point defined in the library and a device which sends temperature measurements (matching by fragment and series with the data point in the library). If you create an "On measurement threshold create alarm" smart rule and select the data point from the library, then it will use the settings from the library to decide whether to create an alarm.

{{< c8y-admon-info >}}
Data points are visible to all authenticated users of the tenant, regardless of their inventory role permission.
{{< /c8y-admon-info >}}

{{< c8y-admon-related >}}

- [Measurements](https://{{< domain-c8y >}}/api/core/#tag/Measurements) in the *{{< openapi >}}* for further details on uploading data to {{< product-c8y-iot >}}.

{{< /c8y-admon-related >}}

### Changing data explorer visualization {# change-visualization}

To change the visualization in the data explorer, you can modify several properties.

#### Time range

You can change the time range being shown. By default, you see the values for the last hour.

To change the time range on the x-axis, use one of the following options:

* Select a different time range from the dropdown list in the top menu bar.
* Enter a custom time range into the **From** and **To** fields in the data explorer.
* Drag the x-axis and move left or right to move the time period.
* Double-click into the data explorer to zoom out.

{{< c8y-admon-info >}}
Real-time updates will be switched off if you set a time range in the past.
{{< /c8y-admon-info >}}

#### Aggregation

You may aggregate the data being displayed to get an efficient overview over larger time periods.

By default, aggregation is set to "None". This value may be changed in the **Aggregation** field in the top menu bar. Available values are "Minutely", "Hourly" or "Daily", depending on the selected time range.

When aggregation is activated, the timestamp which is displayed in data point graphs or data point tables changes slightly as follows to improve transparency:

* If no aggregation is selected the date, hour, minute and second are shown:<br> 27 Jan 2020 17:26:55
* If minutely aggregation is selected, the second indication will not be shown:<br> 27 Jan 2020 17:27-17:28
* If hourly aggregation is selected, the minute and second indication will not be shown:<br> 27 Jan 2020 05:00-06:00
* If daily aggregation is selected, only the day will be shown:<br> 27 Jan 2020-28 Jan 2020.


#### Realtime updating

By default, realtime updating is enabled which means that the data being shown is updated as new data flows into the system from the connected devices.

To turn realtime updating on or off, click **Realtime** in the top menu bar. A green light indicates, that realtime updating is enabled.


#### Data point visibility

For each data point, its visibility can be switched on or off by using the toggle left from the data point name.
