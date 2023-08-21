---
weight: 30
title: Creating widgets
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


If you want to keep your current configuration in the data explorer for later usage, save it as a widget.

### To send as widget to dashboard

To create a widget from the data explorer of a particular asset, click **More...** in the top menu bar and select **Send as widget to dashboard** from the context menu.

In the upcoming dialog, select one of the dashboards available for the current object and click **Select** to add the data explorer as widget to the selected dashboard.

{{< c8y-admon-info >}}
To use this function, first a dashboard must be created. For details on dashboards, refer to [Working with dashboards](/cockpit/working-with-dashboards/).
{{< /c8y-admon-info >}}

### To send as widget to report

To create a widget from the data explorer of in the navigator, click **More...** in the top menu bar and select **Send as a widget to report** from the context menu.

![Data explorer add events](/images/users-guide/cockpit/cockpit-dataexplorer-sendwidget.png)

In the upcoming dialog, select one of the reports available and click **Select** to add the data explorer as widget to the selected report.

{{< c8y-admon-info >}}
To use this function, first a report must be created. For details on reports, refer to [Working with reports](/cockpit/working-with-reports/).
{{< /c8y-admon-info >}}
