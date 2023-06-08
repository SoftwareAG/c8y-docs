---
weight: 120
title: Measurements
layout: redirect
---

The **Measurements** tab provides a default visualization of numeric data provided by the device in the form of charts. Charts are grouped into types of measurements, which can contain multiple graphs or "series".

The screenshot below, for example, shows a chart for temperature measurement with two different series.

![Measurements](/images/users-guide/DeviceManagement/devmgmt-devices-measurements.png)

If a chart contains measurements with different series, one Y-axis is rendered per series. In the example above, temperature data is recorded from two sensors namely "sensors-1" and "sensor-2" having the same unit as °C. Here measurements from different sensors are categorized
as separate "Series" data. The measurements from the respective sensors are stored using separate series names (same as the sensor names) and hence, two axes are rendered here.
Only one Y-axis is rendered if the measurements belong to the same series.

To see detailed information about the measured values, hover over the chart. A tooltip will be displayed with detailed information on the measurement next to your cursor (the tooltip will "snap" to the closest measurement).

{{< c8y-admon-info >}}
We recommend you to have max. 20 series per measurement for optimal performance and readability of a single graph in Device Management (the graph displays all available series). If you need to display only a few series from the measurement, we advise you to use Data explorer in Cockpit where you can select series to be shown in the graph.
{{< /c8y-admon-info >}}

**Time range and aggregation**

By default, charts show the raw data of the last hour. To change the time range on the X-axis, open the "Last hour" dropdown menu at the top right and select a time range.

If you increase the time range, the value in the **Aggregation** field will automatically switch to "hourly" or "daily". The chart now shows ranges instead of individual raw data points. For "hourly", the chart will show a range of the minimum and maximum value measured in one hour. For "daily", the chart will show the minimum and maximum value measured over one day. Likewise, the tooltips will now show ranges of values instead of individual values.

This enables you to get an efficient overview over larger time periods. A graph will only show 5.000 data points per graph maximum to avoid overloading your desktop browser. If you select a fine focus resulting in more than 5.000 data points, a warning message will be shown: "Truncated data. Change aggregation or select shorter date range."

Clicking **Realtime** will enable real-time user interface updates of the graphs as new data flows into the system from the connected devices.

You can influence the graphical display and axes limits by setting up so-called "KPIs", see the [Administration Guide](/users-guide/administration).

**Measurement format**

In order to see measurement graphs, the device must send measurements in a specified fragment format.

	"fragment_name" : {
		"series_name" : {
			"value" : ...
			"unit" : ...
		}
	}

Example:

	"c8y_SpeedMeasurement": {
	      "Speed": { "value": 1234, "unit": "km/h" }
	}

`"Fragment_name"` and `"series_name"` can be replaced by different valid JSON property names, but no whitespaces and special characters like [ ],* are allowed. The structure must be exactly as above, two-level deep JSON object.
